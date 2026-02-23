/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": "@request.auth.id != \"\" && @request.auth.is_admin = true && @request.body.end_datetime > @request.body.start_datetime",
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
        "id": "relation17718579085321",
        "maxSelect": 1,
        "minSelect": 1,
        "name": "employee",
        "presentable": false,
        "required": true,
        "system": false,
        "type": "relation"
      },
      {
        "hidden": false,
        "id": "date17718579085322",
        "max": "",
        "min": "",
        "name": "start_datetime",
        "presentable": false,
        "required": true,
        "system": false,
        "type": "date"
      },
      {
        "hidden": false,
        "id": "date17718579085323",
        "max": "",
        "min": "",
        "name": "end_datetime",
        "presentable": false,
        "required": true,
        "system": false,
        "type": "date"
      }
    ],
    "id": "pbc_2857750545",
    "indexes": [
      "CREATE INDEX `idx_leaves_employee_start` ON `leaves` (`employee`, `start_datetime`)",
      "CREATE INDEX `idx_leaves_employee_end` ON `leaves` (`employee`, `end_datetime`)"
    ],
    "listRule": "@request.auth.id != \"\" && @request.auth.is_admin = true",
    "name": "leaves",
    "system": false,
    "type": "base",
    "updateRule": "@request.auth.id != \"\" && @request.auth.is_admin = true && @request.body.end_datetime > @request.body.start_datetime",
    "viewRule": "@request.auth.id != \"\" && @request.auth.is_admin = true"
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2857750545");

  return app.delete(collection);
})
