let host = `localhost`;
let adapter = `sails-mongo`;
let baseDbName = `example`;
let passwordEnding = `_example_ending`;
let port = 27017;
module.exports.connections = {
    exampleDev: {
        adapter: adapter,
        database: `${baseDbName}_dev`,
        host: host,
        password: `${baseDbName}_dev${passwordEnding}`,
        port: port,
        user: `${baseDbName}_dev`,
    },
    exampleTest: {
        adapter: adapter,
        database: `${baseDbName}_preprod`,
        host: host,
        password: `${baseDbName}_preprod${passwordEnding}`,
        port: port,
        user: `${baseDbName}_preprod`,
    },
    exampleProd: {
        adapter: adapter,
        database: `${baseDbName}_prod`,
        host: host,
        password: `${baseDbName}_prod${passwordEnding}`,
        port: port,
        user: `${baseDbName}_prod`,
    },
};
//# sourceMappingURL=connections.js.map