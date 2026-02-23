/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3735627160")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id != \"\" && @request.auth.is_admin = true",
    "deleteRule": "@request.auth.id != \"\" && @request.auth.is_admin = true",
    "indexes": [
      "CREATE INDEX idx_employees_user_id ON employees (user_id)"
    ],
    "listRule": "@request.auth.id != \"\"",
    "updateRule": "@request.auth.id != \"\" && @request.auth.is_admin = true",
    "viewRule": "@request.auth.id != \"\""
  }, collection)

  // add field
  collection.fields.addAt(9, new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "hidden": false,
    "id": "relation1771920000001",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "user_id",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3735627160")

  // update collection data
  unmarshal({
    "createRule": "",
    "deleteRule": "",
    "indexes": [],
    "listRule": "",
    "updateRule": "",
    "viewRule": ""
  }, collection)

  // remove field
  collection.fields.removeById("relation1771920000001")

  return app.save(collection)
})
