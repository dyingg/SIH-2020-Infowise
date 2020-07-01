//Expose a single function to get third party status

const ip2proxy = require("./sites/ip2proxy/index");
const iptoeh = require("./sites/iptoeh/index");
const scamanalytics = require("./sites/scamanalytics/index");
const iphub = require("./sites/iphub/index");
const iphunter = require("./sites/iphunter/index");

const supported = [ip2proxy, iptoeh, scamanalytics, iphub, iphunter];

async function thirdPartyAnalysis(ip) {
  let data = await Promise.all(supported.map((site) => site(ip)));
  let finalData = data.map((res, index) => {
    res.key = index;
    return res;
  });

  return finalData;
}

module.exports = thirdPartyAnalysis;
