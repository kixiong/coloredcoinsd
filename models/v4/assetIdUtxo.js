exports.models = {
    "assetIdUtxo": {
        "id": "assetIdUtxo",
        "required": ["assetId"],
        "properties": {
            "assetId": {
                "type": "string",
                "description": "ID of the asset"
            },
            "utxo": {
                "type": "string",
                "description": "transaction output represented as \'txid:index\'"
            },
            "issueTxid": {
                "type": "string",
                "description": "hash of the transaction where the specific asset was issued"
            }
        }
    }
}