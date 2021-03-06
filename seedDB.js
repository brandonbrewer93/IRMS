const Organization = require("./models/organization");

// Seed database with organizations. Eventually, users will add custom organizations.
function seed(){
    Organization.create({name: "FCFD", type: "Fire Department"});
    Organization.create({name: "OFD", type: "Fire Department"});
    Organization.create({name: "NYFD", type: "Fire Department"});
    Organization.create({name: "NYPD", type: "Police Department"});
    Organization.create({name: "HFD", type: "Fire Department"});
    Organization.create({name: "LMPD", type: "Police Department"});
}

module.exports = seed;