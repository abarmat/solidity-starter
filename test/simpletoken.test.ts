import { expect } from 'chai'
import { ethers } from 'hardhat'
import '@nomiclabs/hardhat-ethers'

import { SimpleToken, SimpleToken__factory } from '../build/types'
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'
import { BigNumber } from 'ethers'

const { getContractFactory, getSigners } = ethers

describe('SimpleToken', () => {
  let simpleToken: SimpleToken
  let signers: SignerWithAddress[]
  const initialSupply = BigNumber.from('18000000000000000000')
  beforeEach(async () => {
    // 1
    signers = await getSigners()

    // 2
    const simpleTokenFactory = (await getContractFactory('SimpleToken', signers[0])) as SimpleToken__factory
    simpleToken = await simpleTokenFactory.deploy()
    await simpleToken.deployed()
    const initialCount = await simpleToken.totalSupply()

    // 3
    expect(initialCount).to.eq(initialSupply)

    expect(simpleToken.address).to.properAddress
  })

  // 4
  describe('transfer', async () => {
    it('should transfer', async () => {
      await simpleToken.transfer(signers[1].address, BigNumber.from('200'))
      const expectedBalance = BigNumber.from('200')
      expect(await simpleToken.balanceOf(signers[1].address)).to.eq(expectedBalance)
    })
  })
})
