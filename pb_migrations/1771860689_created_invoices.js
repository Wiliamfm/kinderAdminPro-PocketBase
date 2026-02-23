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
        "cascadeDelete": true,
        "collectionId": "pbc_3735627160",
        "hidden": false,
        "id": "relation2349068636",
        "maxSelect": 1,
        "minSelect": 1,
        "name": "employee_id",
        "presentable": false,
        "required": true,
        "system": false,
        "type": "relation"
      },
      {
        "cascadeDelete": false,
        "collectionId": "pbc_3537579421",
        "hidden": false,
        "id": "relation2479585644",
        "maxSelect": 1,
        "minSelect": 1,
        "name": "file_id",
        "presentable": false,
        "required": true,
        "system": false,
        "type": "relation"
      }
    ],
    "id": "pbc_711030668",
    "indexes": [
      "CREATE INDEX idx_invoices_employee_id ON invoices (employee_id)",
      "CREATE INDEX idx_invoices_file_id ON invoices (file_id)"
    ],
    "listRule": "@request.auth.id != \"\" && @request.auth.is_admin = true",
    "name": "invoices",
    "system": false,
    "type": "base",
    "updateRule": "@request.auth.id != \"\" && @request.auth.is_admin = true",
    "viewRule": "@request.auth.id != \"\" && @request.auth.is_admin = true"
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_711030668");

  return app.delete(collection);
})
