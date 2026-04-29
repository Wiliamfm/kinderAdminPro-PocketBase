/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1866223567")

  // remove field
  collection.fields.removeById("relation199249577")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1866223567")

  // add field
  collection.fields.addAt(2, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_4101905139",
    "hidden": false,
    "id": "relation199249577",
    "maxSelect": 1,
    "minSelect": 1,
    "name": "job_id",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
