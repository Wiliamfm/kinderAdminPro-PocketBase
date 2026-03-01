/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1662169936")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE UNIQUE INDEX idx_students_fathers_student_father ON students_fathers (student_id, father_id)",
      "CREATE INDEX idx_students_fathers_father_id ON students_fathers (father_id)",
      "CREATE INDEX idx_students_fathers_created_at ON students_fathers (created_at)"
    ]
  }, collection)

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "autodate2341372968",
    "name": "created_at",
    "onCreate": true,
    "onUpdate": false,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1662169936")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE UNIQUE INDEX idx_students_fathers_student_father ON students_fathers (student_id, father_id)",
      "CREATE INDEX idx_students_fathers_father_id ON students_fathers (father_id)"
    ]
  }, collection)

  // remove field
  collection.fields.removeById("autodate2341372968")

  return app.save(collection)
})
