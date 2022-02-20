// SPDX-License-Identifier: MIT
pragma solidity 0.8.11;

import "../contracts/SimpleStorage.sol";
import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
//import "C:/Users/yanni/AppData/Roaming/npm/node_modules/truffle/build/Assert.sol";
//import ".\..\..\..\..\AppData\Roaming\npm\node_modules\truffle\build\Assert.sol";
//import "./../../../../AppData/Roaming/npm/node_modules/truffle/build/Assert.sol";
 
contract TestSimpleStorage {
 
 function testItStoresAValue() public {
   SimpleStorage simpleStorage = SimpleStorage(DeployedAddresses.SimpleStorage());
   simpleStorage.set(89);
   uint expected = 89;
   Assert.equal(simpleStorage.get(), expected, "It should store the value 89.");
 }
}
