const mongoose = require("mongoose");

// this is the schema for the sended data
const FullScriptSchema = {
    inputHttp: String,
    inputAll: String,
    ThreathsBasic: String,
    CypBasic:String,
    CypAssertion:String,
    CypAll:String,
    selenBasic: String,
    scriptWeb: String
}

const FullScript = mongoose.model("FullScript", FullScriptSchema);

module.exports = FullScript;