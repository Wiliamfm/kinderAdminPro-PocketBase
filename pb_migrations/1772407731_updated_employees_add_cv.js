/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3735627160")

  // add field
  collection.fields.addAt(11, new Field({
    "hidden": false,
    "id": "file1772407731",
    "maxSelect": 1,
    "maxSize": 10485760,
    "mimeTypes": [
      "application/pdf"
    ],
    "name": "cv",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": null,
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3735627160")

  // remove field
  collection.fields.removeById("file1772407731")

  return app.save(collection)
})
