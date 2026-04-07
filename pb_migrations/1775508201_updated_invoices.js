/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_711030668")

  // update collection data
  unmarshal({
    "listRule": "employee_id.user_id = @request.auth.id || @request.auth.roles ?= \"admin\" || @request.auth.is_admin = true",
    "viewRule": "employee_id.user_id = @request.auth.id || @request.auth.roles ?= \"admin\" || @request.auth.is_admin = true"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_711030668")

  // update collection data
  unmarshal({
    "listRule": "@request.auth.roles ?= \"admin\" || @request.auth.is_admin = true",
    "viewRule": "@request.auth.roles ?= \"admin\" || @request.auth.is_admin = true"
  }, collection)

  return app.save(collection)
})
