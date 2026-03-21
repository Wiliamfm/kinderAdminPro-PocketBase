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
        "cascadeDelete": true,
        "collectionId": "pbc_4153373768",
        "hidden": false,
        "id": "relation1400509225",
        "maxSelect": 1,
        "minSelect": 1,
        "name": "message_id",
        "presentable": false,
        "required": true,
        "system": false,
        "type": "relation"
      },
      {
        "hidden": false,
        "id": "select2136131039",
        "maxSelect": 1,
        "name": "recipient_type",
        "presentable": false,
        "required": true,
        "system": false,
        "type": "select",
        "values": [
          "employee",
          "father"
        ]
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text3912208248",
        "max": 100,
        "min": 1,
        "name": "recipient_id",
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
        "id": "text2913987824",
        "max": 200,
        "min": 1,
        "name": "recipient_name",
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
        "id": "text3015681999",
        "max": 200,
        "min": 0,
        "name": "recipient_email",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "select978205146",
        "maxSelect": 1,
        "name": "source_kind",
        "presentable": false,
        "required": true,
        "system": false,
        "type": "select",
        "values": [
          "employee",
          "student",
          "grade",
          "mixed"
        ]
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text2877439254",
        "max": 0,
        "min": 0,
        "name": "source_context",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "select2063623452",
        "maxSelect": 1,
        "name": "status",
        "presentable": false,
        "required": true,
        "system": false,
        "type": "select",
        "values": [
          "pending",
          "sent",
          "failed",
          "missing_email",
          "skipped"
        ]
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text1993105297",
        "max": 200,
        "min": 0,
        "name": "provider_message_id",
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
        "id": "text737763667",
        "max": 0,
        "min": 0,
        "name": "error_message",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "autodate2341372968",
        "name": "created_at",
        "onCreate": true,
        "onUpdate": false,
        "presentable": false,
        "system": false,
        "type": "autodate"
      }
    ],
    "id": "pbc_2466277752",
    "indexes": [
      "CREATE INDEX idx_email_message_recipients_message_id ON email_message_recipients (message_id)",
      "CREATE INDEX idx_email_message_recipients_status ON email_message_recipients (status)",
      "CREATE INDEX idx_email_message_recipients_type_record ON email_message_recipients (recipient_type, recipient_id)"
    ],
    "listRule": "@request.auth.is_admin = true",
    "name": "email_message_recipients",
    "system": false,
    "type": "base",
    "updateRule": "@request.auth.is_admin = true",
    "viewRule": "@request.auth.is_admin = true"
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2466277752");

  return app.delete(collection);
})
