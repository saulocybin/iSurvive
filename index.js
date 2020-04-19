const IPFS = require("ipfs");
const OrbitDB = require("orbit-db");

(async (IPFS, OrbitDB) => {
  const ipfs = await IPFS.create({});
  const orbitdb = await OrbitDB.createInstance(ipfs);
  //console.log(orbitdb);

  const db = await orbitdb.keyvalue('first-database');
  //console.log(db);

  const address = db.address;
  console.log(address);

  await db.put('name', 'hello')
  console.log(db);

  
})(IPFS, OrbitDB);
