/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2708049880")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE UNIQUE INDEX idx_semesters_name ON semesters (name)",
      "CREATE UNIQUE INDEX idx_semesters_single_current ON semesters (is_current) WHERE is_current = true"
    ]
  }, collection)

  // add field
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
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2708049880")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE UNIQUE INDEX idx_semesters_name ON semesters (name)"
    ]
  }, collection)

  // remove field
  collection.fields.removeById("bool3402609347")

  return app.save(collection)
})
