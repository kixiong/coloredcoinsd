exports.models = {
    "assetIdUtxo": {
        "id": "assetIdUtxo",
        "required": ["assetId", "utxo"],
        "properties": {
            "assetId": {
                "type": "string",
                "description": "ID of the asset"
            },
            "utxo": {
                "type": "string",
                "description": "transaction output represented as \'txid:index\'"
            }
        }
    }
}