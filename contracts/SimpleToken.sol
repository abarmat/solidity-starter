// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract SimpleToken is ERC20 {
    constructor() ERC20("SimpleToken", "SIM") {
        _mint(msg.sender, 18 * 10**decimals());
    }
}
