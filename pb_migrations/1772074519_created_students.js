/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": "@request.auth.is_admin = true",
    "deleteRule": "@request.auth.is_admin = true",
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
        "hidden": false,
        "id": "date1089581607",
        "max": "",
        "min": "",
        "name": "date_of_birth",
        "presentable": false,
        "required": true,
        "system": false,
        "type": "date"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text1329388006",
        "max": 120,
        "min": 1,
        "name": "birth_place",
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
        "id": "text3441287562",
        "max": 120,
        "min": 1,
        "name": "department",
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
        "id": "text3275716663",
        "max": 40,
        "min": 3,
        "name": "document_id",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": true,
        "system": false,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "number130897217",
        "max": 500,
        "min": 0,
        "name": "weight",
        "onlyInt": false,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
      },
      {
        "hidden": false,
        "id": "number4115522831",
        "max": 300,
        "min": 0,
        "name": "height",
        "onlyInt": false,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
      },
      {
        "hidden": false,
        "id": "select2085019123",
        "maxSelect": 1,
        "name": "blood_type",
        "presentable": false,
        "required": true,
        "system": false,
        "type": "select",
        "values": [
          "A+",
          "A-",
          "B+",
          "B-",
          "AB+",
          "AB-",
          "O+",
          "O-"
        ]
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text1269449197",
        "max": 50,
        "min": 0,
        "name": "social_security",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text2367274779",
        "max": 2000,
        "min": 0,
        "name": "allergies",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      }
    ],
    "id": "pbc_3827815851",
    "indexes": [
      "CREATE UNIQUE INDEX idx_students_document_id ON students (document_id)"
    ],
    "listRule": "@request.auth.is_admin = true",
    "name": "students",
    "system": false,
    "type": "base",
    "updateRule": "@request.auth.is_admin = true",
    "viewRule": "@request.auth.is_admin = true"
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3827815851");

  return app.delete(collection);
})
