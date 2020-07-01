const rp = require("request-promise");
const cheerio = require("cheerio");

async function getResult(ip) {
  let data = await rp(`https://www.ip2proxy.com/`, {
    method: "POST",
    form: {
      languageCode: "en_US",
      ipAddress: ip,
    },
  });

  const $ = cheerio.load(data);
  let pre = $("pre").text();
  if (pre) {
    let data = JSON.parse(pre.split('PX4"')[1].trim());

    return {
      name: "IP2Proxy",
      type: "IP/VPN",
      status: `${data.proxyType} | ${data.isp}`,
      score: 100,
    };
  } else {
    return {
      name: "IP2Proxy",
      type: "IP/VPN",
      status: "Not a proxy or VPN",
      score: 0,
    };
  }
}

module.exports = getResult;
