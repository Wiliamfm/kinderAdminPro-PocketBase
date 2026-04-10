/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3827815851")

  // add field
  collection.fields.addAt(13, new Field({
    "hidden": false,
    "id": "bool1981675086",
    "name": "accepted",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(14, new Field({
    "hidden": false,
    "id": "date2186959877",
    "max": "",
    "min": "",
    "name": "rejected",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3827815851")

  // remove field
  collection.fields.removeById("bool1981675086")

  // remove field
  collection.fields.removeById("date2186959877")

  return app.save(collection)
})
