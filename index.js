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
  const db = await orbitdb.docs('plantae', { indexBy: 'name' });
  
  //output tests
  console.log("PUBLIC KEY IDENTITY:");
  console.log(db.identity.publicKey);

  console.log("DB ADDRESS:");
  const address = db.address;
  console.log(address);


  //input test entry
  const hash = await db.put({_id: 'Specimen01', name: 'testPlant', numberOfPetals: 4});
  console.log(db);

  //test output
  console.log("OUTPUT ALL RECORDS FROM DB");
  console.log(db.get(''));

})(IPFS, OrbitDB);
