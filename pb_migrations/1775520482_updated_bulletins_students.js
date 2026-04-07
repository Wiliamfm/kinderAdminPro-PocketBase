/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1378873045")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.roles ?= \"professor\" || @request.auth.roles ?= \"admin\" || @request.auth.is_admin = true",
    "listRule": "grade_id.employee_id.user_id = @request.auth.id || @request.auth.roles ?= \"admin\" || @request.auth.is_admin = true",
    "updateRule": "grade_id.employee_id.user_id = @request.auth.id || @request.auth.roles ?= \"admin\" || @request.auth.is_admin = true",
    "viewRule": "grade_id.employee_id.user_id = @request.auth.id || @request.auth.roles ?= \"admin\" || @request.auth.is_admin = true"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1378873045")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.roles ?= \"admin\" || @request.auth.is_admin = true",
    "listRule": "@request.auth.roles ?= \"admin\" || @request.auth.is_admin = true",
    "updateRule": "@request.auth.roles ?= \"admin\" || @request.auth.is_admin = true",
    "viewRule": "@request.auth.roles ?= \"admin\" || @request.auth.is_admin = true"
  }, collection)

  return app.save(collection)
})
