/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1662169936")

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "autodate2341372968",
    "name": "created_at",
    "onCreate": true,
    "onUpdate": true,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1662169936")

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "autodate2341372968",
    "name": "created_at",
    "onCreate": true,
    "onUpdate": false,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  return app.save(collection)
})
