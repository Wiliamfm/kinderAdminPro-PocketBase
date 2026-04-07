/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2857750545")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.roles ?= \"professor\" || @request.auth.roles ?= \"admin\" || @request.auth.is_admin = true",
    "listRule": "employee_id.user_id = @request.auth.id || @request.auth.roles ?= \"admin\" || @request.auth.is_admin = true",
    "updateRule": "employee_id.user_id = @request.auth.id || @request.auth.roles ?= \"admin\" || @request.auth.is_admin = true",
    "viewRule": "employee_id.user_id = @request.auth.id || @request.auth.roles ?= \"admin\" || @request.auth.is_admin = true"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2857750545")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.roles ?= \"admin\" || @request.auth.is_admin = true",
    "listRule": "@request.auth.roles ?= \"admin\" || @request.auth.is_admin = true",
    "updateRule": "@request.auth.roles ?= \"admin\" || @request.auth.is_admin = true",
    "viewRule": "@request.auth.roles ?= \"admin\" || @request.auth.is_admin = true"
  }, collection)

  return app.save(collection)
})
