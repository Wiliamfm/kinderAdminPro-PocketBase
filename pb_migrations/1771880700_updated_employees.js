/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3735627160")

  // add field
  collection.fields.addAt(10, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_4101905139",
    "hidden": false,
    "id": "relation199249577",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "job_id",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3735627160")

  // remove field
  collection.fields.removeById("relation199249577")

  return app.save(collection)
})
