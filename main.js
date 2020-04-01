const IPFS = require('ipfs')
const OrbitDB = require('orbit-db')

// Create IPFS instance
const ipfs = new IPFS(ipfsOptions)

ipfs.on('ready', async () => {
  // Create OrbitDB instance
  const orbitdb = await OrbitDB.createInstance(ipfs)
})