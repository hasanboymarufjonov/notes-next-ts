migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zd99ebdg02b9fl4")

  collection.listRule = ""
  collection.viewRule = ""

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sxlxvw6h",
    "name": "note",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zd99ebdg02b9fl4")

  collection.listRule = null
  collection.viewRule = null

  // remove
  collection.schema.removeField("sxlxvw6h")

  return dao.saveCollection(collection)
})
