import { expect } from 'chai'
import hre from 'hardhat'
import '@nomiclabs/hardhat-ethers'

const { getContractFactory } = hre.ethers

describe('Counter', () => {
  it('should countUp', async function () {
    // Deploy contract
    const factory = await getContractFactory('Counter')
    const counter = await factory.deploy()

    // Count
    await counter.countUp()
    const count = await counter.getCount()
    expect(count).eq(1)
  })
})
