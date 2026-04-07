/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_233839710")

  // add field
  collection.fields.addAt(3, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_3735627160",
    "hidden": false,
    "id": "relation2349068636",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "employee_id",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_233839710")

  // remove field
  collection.fields.removeById("relation2349068636")

  return app.save(collection)
})
