/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4153373768")

  // update field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "number1117366042",
    "max": null,
    "min": 0,
    "name": "total_sendable",
    "onlyInt": true,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // update field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "number2375634883",
    "max": null,
    "min": 0,
    "name": "total_missing_email",
    "onlyInt": true,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // update field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "number3302799700",
    "max": null,
    "min": 0,
    "name": "total_sent",
    "onlyInt": true,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // update field
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "number1453293665",
    "max": null,
    "min": 0,
    "name": "total_failed",
    "onlyInt": true,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // update field
  collection.fields.addAt(11, new Field({
    "hidden": false,
    "id": "number796568688",
    "max": null,
    "min": 0,
    "name": "total_skipped",
    "onlyInt": true,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4153373768")

  // update field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "number1117366042",
    "max": null,
    "min": 0,
    "name": "total_sendable",
    "onlyInt": true,
    "presentable": false,
    "required": true,
    "system": false,
    "type": "number"
  }))

  // update field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "number2375634883",
    "max": null,
    "min": 0,
    "name": "total_missing_email",
    "onlyInt": true,
    "presentable": false,
    "required": true,
    "system": false,
    "type": "number"
  }))

  // update field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "number3302799700",
    "max": null,
    "min": 0,
    "name": "total_sent",
    "onlyInt": true,
    "presentable": false,
    "required": true,
    "system": false,
    "type": "number"
  }))

  // update field
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "number1453293665",
    "max": null,
    "min": 0,
    "name": "total_failed",
    "onlyInt": true,
    "presentable": false,
    "required": true,
    "system": false,
    "type": "number"
  }))

  // update field
  collection.fields.addAt(11, new Field({
    "hidden": false,
    "id": "number796568688",
    "max": null,
    "min": 0,
    "name": "total_skipped",
    "onlyInt": true,
    "presentable": false,
    "required": true,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
})
