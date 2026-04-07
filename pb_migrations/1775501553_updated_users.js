/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // update field
  collection.fields.addAt(11, new Field({
    "hidden": false,
    "id": "select3057528519",
    "maxSelect": 3,
    "name": "roles",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "admin",
      "professor",
      "father"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // update field
  collection.fields.addAt(11, new Field({
    "hidden": false,
    "id": "select3057528519",
    "maxSelect": 6,
    "name": "roles",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "super_admin",
      "staff_admin",
      "enrollment_admin",
      "reports_admin",
      "events_admin",
      "user_admin"
    ]
  }))

  return app.save(collection)
})
