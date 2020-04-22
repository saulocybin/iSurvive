const IPFS = require("ipfs");
const OrbitDB = require("orbit-db");
const Identities = require('orbit-db-identity-provider');

(async (IPFS, OrbitDB) => {
  //init ipfs
  const ipfs = await IPFS.create({});

  //create identity
  const options = { id: 'local-saulocybin' };
  const identity = await Identities.createIdentity(options);

  //init orbitdb
  const orbitdb = await OrbitDB.createInstance(ipfs, {identity: identity});
  
  //create database
  const db = await orbitdb.keyvalue('first-database');
  
  console.log("PUBLIC KEY IDENTITY:");
  console.log(db.identity.publicKey);

  console.log("DB ADDRESS:");
  const address = db.address;
  console.log(address);

  await db.put('name', 'hello')
  console.log(db);


})(IPFS, OrbitDB);
