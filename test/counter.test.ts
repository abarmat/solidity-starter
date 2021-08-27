import { expect } from 'chai'
import { ethers } from 'hardhat'
import '@nomiclabs/hardhat-ethers'

import { Counter__factory, Counter } from '../build/types'

const { getContractFactory, getSigners } = ethers

describe('Counter', () => {
  let counter: Counter

  beforeEach(async () => {
    // 1
    const signers = await getSigners()

    // 2
    const counterFactory = (await getContractFactory('Counter', signers[0])) as Counter__factory
    counter = await counterFactory.deploy()
    await counter.deployed()
    const initialCount = await counter.getCount()

    // 3
    expect(initialCount).to.eq(0)
    expect(counter.address).to.properAddress
  })

  // 4
  describe('count up', async () => {
    it('should count up', async () => {
      await counter.countUp()
      const count = await counter.getCount()
      expect(count).to.eq(1)
    })
  })

  describe('count down', async () => {
    // 5
    it('should fail due to underflow exception', async () => {
      const tx = counter.countDown()
      await expect(tx).revertedWith(
        'VM Exception while processing transaction: reverted with panic code 0x11 (Arithmetic operation underflowed or overflowed outside of an unchecked block)',
      )
    })

    it('should count down', async () => {
      await counter.countUp()

      await counter.countDown()
      const count = await counter.getCount()
      expect(count).to.eq(0)
    })
  })
})
