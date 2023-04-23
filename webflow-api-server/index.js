// npm install node-fetch@2 --save

const fetch = require("node-fetch");

const siteID = "63b9e20e9d70bbc084cdccf3";
const collectionID = "63bf1931ed44df2f84f53ed4";

const url = `https://api.webflow.com/collections/${collectionID}/items`;
const options = {
  method: "POST",
  headers: {
    accept: "application/json",
    "content-type": "application/json",
    authorization:
      "Bearer fbb15304c6b94a48e6cfa9d57dc7aa17abfe02902054a1513379cf56563e3482",
  },
  body: JSON.stringify({
    fields: {
      slug: "uploaded-pdf",
      name: "Uploaded PDF",
      "post-body": "<p>A yellow a yellow a yolo.</p>",
      "upload-pdf": {
        fileId: "first-pdf",
        url: "https://www.jcra.je/media/598710/calling-line-identity-review-amended-statutory-initial-notice.pdf",
        alt: null,
      },
      _archived: false,
      _draft: false,
    },
  }),
};

fetch(url, options)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error("error:" + err));
