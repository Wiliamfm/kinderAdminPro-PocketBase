/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2708049880")

  // update field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "bool3402609347",
    "name": "is_current",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2708049880")

  // update field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "bool3402609347",
    "name": "is_current",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
})
