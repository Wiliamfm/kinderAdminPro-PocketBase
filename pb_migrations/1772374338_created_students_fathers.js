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
        "cascadeDelete": false,
        "collectionId": "pbc_3827815851",
        "hidden": false,
        "id": "relation3415494426",
        "maxSelect": 1,
        "minSelect": 1,
        "name": "student_id",
        "presentable": false,
        "required": true,
        "system": false,
        "type": "relation"
      },
      {
        "cascadeDelete": false,
        "collectionId": "pbc_1328066158",
        "hidden": false,
        "id": "relation542488994",
        "maxSelect": 1,
        "minSelect": 1,
        "name": "father_id",
        "presentable": false,
        "required": true,
        "system": false,
        "type": "relation"
      },
      {
        "hidden": false,
        "id": "select537150624",
        "maxSelect": 1,
        "name": "relationship",
        "presentable": false,
        "required": true,
        "system": false,
        "type": "select",
        "values": [
          "father",
          "mother",
          "other"
        ]
      }
    ],
    "id": "pbc_1662169936",
    "indexes": [
      "CREATE UNIQUE INDEX idx_students_fathers_student_father ON students_fathers (student_id, father_id)",
      "CREATE INDEX idx_students_fathers_father_id ON students_fathers (father_id)"
    ],
    "listRule": "@request.auth.is_admin = true",
    "name": "students_fathers",
    "system": false,
    "type": "base",
    "updateRule": "@request.auth.is_admin = true",
    "viewRule": "@request.auth.is_admin = true"
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1662169936");

  return app.delete(collection);
})
