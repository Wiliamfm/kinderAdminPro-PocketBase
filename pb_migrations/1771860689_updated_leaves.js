/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2857750545")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX `idx_leaves_employee_id_start` ON `leaves` (`employee_id`, `start_datetime`)",
      "CREATE INDEX `idx_leaves_employee_id_end` ON `leaves` (`employee_id`, `end_datetime`)"
    ]
  }, collection)

  // update field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": true,
    "collectionId": "pbc_3735627160",
    "hidden": false,
    "id": "relation17718579085321",
    "maxSelect": 1,
    "minSelect": 1,
    "name": "employee_id",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2857750545")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX `idx_leaves_employee_start` ON `leaves` (`employee`, `start_datetime`)",
      "CREATE INDEX `idx_leaves_employee_end` ON `leaves` (`employee`, `end_datetime`)"
    ]
  }, collection)

  // update field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": true,
    "collectionId": "pbc_3735627160",
    "hidden": false,
    "id": "relation17718579085321",
    "maxSelect": 1,
    "minSelect": 1,
    "name": "employee",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
