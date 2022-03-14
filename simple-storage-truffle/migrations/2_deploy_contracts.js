// Import du smart contract "SimpleStorage"
const SimpleStorage = artifacts.require("SimpleStorage");
const Vote = artifacts.require("Voting");
module.exports = (deployer) => {
 // Deployer le smart contract!
 deployer.deploy(SimpleStorage);
 deployer.deploy(Vote);
} 