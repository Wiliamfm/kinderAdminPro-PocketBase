/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_711030668")

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "autodate1236500424",
    "name": "creation_datetime",
    "onCreate": true,
    "onUpdate": false,
    "presentable": true,
    "system": false,
    "type": "autodate"
  }))

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "autodate1473592683",
    "name": "update_datetime",
    "onCreate": true,
    "onUpdate": true,
    "presentable": true,
    "system": false,
    "type": "autodate"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_711030668")

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "autodate1236500424",
    "name": "creation_datetime",
    "onCreate": true,
    "onUpdate": false,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "autodate1473592683",
    "name": "update_datetime",
    "onCreate": true,
    "onUpdate": true,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  return app.save(collection)
})
