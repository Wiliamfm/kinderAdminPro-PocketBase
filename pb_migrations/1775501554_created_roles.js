/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": "@request.auth.roles ?= \"admin\" || @request.auth.is_admin = true",
    "deleteRule": "@request.auth.roles ?= \"admin\" || @request.auth.is_admin = true",
    "fields": [
      {
        "autogeneratePattern": "[a-z0-9]{15}",
        "hidden": false,
        "id": "text3208210256",
        "max": 15,
        "min": 15,
        "name": "id",
        "pattern": "^[a-z0-9]+$",
        "presentable": false,
        "primaryKey": true,
        "required": true,
        "system": true,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text1579384326",
        "max": 100,
        "min": 1,
        "name": "name",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": true,
        "system": false,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text3578368839",
        "max": 100,
        "min": 1,
        "name": "display_name",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": true,
        "system": false,
        "type": "text"
      }
    ],
    "id": "pbc_2105053228",
    "indexes": [
      "CREATE UNIQUE INDEX idx_roles_name ON roles (name)"
    ],
    "listRule": "@request.auth.roles ?= \"admin\" || @request.auth.is_admin = true",
    "name": "roles",
    "system": false,
    "type": "base",
    "updateRule": "@request.auth.roles ?= \"admin\" || @request.auth.is_admin = true",
    "viewRule": "@request.auth.roles ?= \"admin\" || @request.auth.is_admin = true"
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2105053228");

  return app.delete(collection);
})
