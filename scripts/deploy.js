const hre = require("hardhat");
const express = require('express');
const cors = require('cors')

const app = express()
app.use(cors(
  {
    origin: ["https://deploy-mern-1whq.vercel.app"],
    methods: ["POST","GET"],
    credentials: true
  }
));
app.use(express.json())
async function main() {
  const Upload = await hre.ethers.getContractFactory("Upload");
  const upload = await Upload.deploy();

  await upload.deployed();

  console.log("Library deployed to:", upload.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
