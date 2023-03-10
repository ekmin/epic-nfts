import { ethers } from "hardhat";

const main = async () => {
  const nftContractFactory = await ethers.getContractFactory("MyEpicNFT");
  const nftContract = await nftContractFactory.deploy();
  await nftContract.deployed();
  console.log("Contract deployed to:", nftContract.address);

  let txn = await nftContract.makeAnEpicNFT()
  await txn.wait()
  
  txn = await nftContract.makeAnEpicNFT()
  await txn.wait()
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
