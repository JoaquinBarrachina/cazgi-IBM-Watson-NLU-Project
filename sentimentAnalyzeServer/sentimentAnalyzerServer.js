const express = require("express");
const app = new express();
const dotenv = require("dotenv");
dotenv.config();

//NLU
function getNLUInstance() {
  let api_key = process.env.API_KEY;
  let api_url = process.env.API_URL;
  console.log(api_url);
  const NaturalLanguageUnderstandingV1 = require("ibm-watson/natural-language-understanding/v1");
  const { IamAuthenticator } = require("ibm-watson/auth");

  const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
    version: "2020-08-01",
    authenticator: new IamAuthenticator({
      apikey: api_key,
    }),
    serviceUrl: api_url,
  });

  return naturalLanguageUnderstanding;
}

app.use(express.static("client"));

const cors_app = require("cors");
app.use(cors_app());

app.get("/", (req, res) => {
  res.render("index.html");
});

app.get("/url/emotion", (req, res) => {
  console.log("URL EMOTION");
  const NLU = getNLUInstance();
  const params = {
    url: req.query.url,
    features: {
      emotion: {
        limit: 10,
      },
    },
  };
  console.log(params);

  NLU.analyze(params)
    .then((response) => {
      console.log(response);
      console.log(JSON.stringify(response, null, 2));
      return res.send(response.result.emotion.document.emotion);
    })
    .catch((err) => {
      console.log(err);
      res.send("Error");
    });
});

app.get("/url/sentiment", (req, res) => {
  console.log("URL EMOTION");
  const NLU = getNLUInstance();
  const params = {
    url: req.query.url,
    features: {
      sentiment: {
        limit: 5,
      },
    },
  };
  console.log(params);

  NLU.analyze(params)
    .then((response) => {
      console.log(response);
      console.log(JSON.stringify(response, null, 2));
      return res.send(response.result.sentiment.document);
    })
    .catch((err) => {
      console.log(err);
      res.send("Error");
    });
});

app.get("/text/emotion", (req, res) => {
  console.log("URL EMOTION");
  console.log(req.query.text);
  const NLU = getNLUInstance();
  const params = {
    text: req.query.text,
    features: {
      emotion: {
        limit: 10,
      },
    },
  };
  console.log(params);

  NLU.analyze(params)
    .then((response) => {
      console.log(response);
      console.log(JSON.stringify(response, null, 2));
      return res.send(response.result.emotion.document.emotion);
    })
    .catch((err) => {
      console.log(err);
      res.send("Error");
    });
});

app.get("/text/sentiment", (req, res) => {
  console.log("URL EMOTION");
  const NLU = getNLUInstance();
  const params = {
    text: req.query.text,
    features: {
      sentiment: {
        limit: 5,
      },
    },
  };
  console.log(params);

  NLU.analyze(params)
    .then((response) => {
      console.log(response);
      console.log(JSON.stringify(response, null, 2));
      return res.send(response.result.sentiment.document);
    })
    .catch((err) => {
      console.log(err);
      res.send("Error");
    });
});

let server = app.listen(8080, () => {
  console.log("Listening", server.address().port);
});
