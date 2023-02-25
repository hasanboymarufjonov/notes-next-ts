migrate((db) => {
  const collection = new Collection({
    "id": "zd99ebdg02b9fl4",
    "created": "2023-02-19 11:28:18.912Z",
    "updated": "2023-02-19 11:28:18.912Z",
    "name": "notes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "nozrhhay",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("zd99ebdg02b9fl4");

  return dao.deleteCollection(collection);
})
