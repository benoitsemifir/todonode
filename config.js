const config = {};

config.host = process.env.HOST || "https://tpcosmos.documents.azure.com:443/";
config.authKey =
    process.env.AUTH_KEY || "5Jy1mpk7tZHifE0ug0p9eDhN6p3mH2yhPrsNO5LiuV0Bw2CbaPtur4QNCEyoBfO8SEb9VLFyBcZLwV26z9Ffbg==";
config.databaseId = "ToDoList";
config.containerId = "Items";

if (config.host.includes("https://localhost:")) {
    console.log("Local environment detected");
    console.log("WARNING: Disabled checking of self-signed certs. Do not have this code in production.");
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    console.log(`Go to http://localhost:${process.env.PORT || '3000'} to try the sample.`);
}

module.exports = config;