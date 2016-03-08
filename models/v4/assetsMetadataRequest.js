exports.models = {
    "assetsMetadataRequest": {
        "id": "getAssetsMetadataRequest",
        "required": ["assets"],
        "properties": {
            "assets": {
                "type": "array",
                "items": {
                    "$ref": "assetIdUtxo"
                },
                "description": "Array of assets of which the metadata array should be returned"
            },
            "verbosity": {
                "type": "integer",
                "description": "How detailed should each asset metadata be. Possible values are 0 or 1, where 0 is the most basic. Default is 1."
            }
        }
    }
}