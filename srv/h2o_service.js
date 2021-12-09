const cds = require("@sap/cds");

module.exports = async srv => {
    const {H2OFlowmeterData} = srv.entities;
    const externalService = await cds.connect.to("h2o");

    srv.on("READ", H2OFlowmeterData, req => {
        const db = externalService.tx(req);
        return db.run(req.query);
    });
}