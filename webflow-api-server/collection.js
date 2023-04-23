const fetch = require("node-fetch");

const siteID = "63b9e20e9d70bbc084cdccf3";
const collectionID = "63bf1931ed44df2f84f53ed4";

const url = `https://api.webflow.com/collections/${collectionID}/items`;
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    authorization:
      "Bearer fbb15304c6b94a48e6cfa9d57dc7aa17abfe02902054a1513379cf56563e3482",
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then((json) => console.log(json.items[0]))
  .catch((err) => console.error("error:" + err));
