/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": "@request.auth.id != \"\" && @request.auth.is_admin = true",
    "deleteRule": "@request.auth.id != \"\" && @request.auth.is_admin = true",
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
        "max": 120,
        "min": 2,
        "name": "name",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": true,
        "system": false,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "number2484321137",
        "max": null,
        "min": 0,
        "name": "salary",
        "onlyInt": true,
        "presentable": false,
        "required": true,
        "system": false,
        "type": "number"
      }
    ],
    "id": "pbc_4101905139",
    "indexes": [],
    "listRule": "@request.auth.id != \"\" && @request.auth.is_admin = true",
    "name": "employee_jobs",
    "system": false,
    "type": "base",
    "updateRule": "@request.auth.id != \"\" && @request.auth.is_admin = true",
    "viewRule": "@request.auth.id != \"\" && @request.auth.is_admin = true"
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4101905139");

  return app.delete(collection);
})
