module.exports = (function () {
  var google = require('../../googleapi.js');
  var sw = require("swagger-node-express");
  var utils = require('../../utils.js');
  var config = require('../../config.js');
  var redis = require('redis');
  var Q = require("q");
  var AWS = require("aws-sdk");
  var api = require('../../coluutils.js');

  var creds = {};
  creds.AWSAKI = process.env.AWSAKI;
  creds.AWSSSK = process.env.AWSSSK; 


  function color() { };

  console.log("loading color")

  color.registerRoutes = function registerRoutes(app, path, swagger, allowAddEndpoint) {

    var getAssetsMetadata = {
      'spec': {
          "description": "",
          "path": "/assetsmetadata",
          "notes": "Returns information about multiple assets issuances",
          "summary": "",
          "method": "POST",
          "parameters": [
            sw.bodyParam("assetsMetadataRequest", "Assets Metadata Object", "assetsMetadataRequest")
          ],
          "type": "assetMetadataResponse",
          "errorResponses": [swagger.errors.notFound('assets')],
          "nickname": "assetsmetadata"
      },
      'action': function (req, res) {
        console.log("get assets metadata v4----------------------");
        console.log('req.body = ', req.body)
        api.getAssetsMetadata(req.body.assets, req.body.verbosity).
        then(
            function(data) { res.status(200).send(data) }, 
            function(err) { 
              console.log('err = ', err)
              res.status(400).send({error: err.message}) 
            } 
        )
      }
    };

    swagger.addPost(getAssetsMetadata);

  }

  return color;
})();