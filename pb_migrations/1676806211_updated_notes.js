migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zd99ebdg02b9fl4")

  collection.createRule = ""
  collection.updateRule = ""
  collection.deleteRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zd99ebdg02b9fl4")

  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
