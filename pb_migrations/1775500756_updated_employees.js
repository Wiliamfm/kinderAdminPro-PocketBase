/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3735627160")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.roles ?= \"staff_admin\" || @request.auth.is_admin = true",
    "deleteRule": "@request.auth.roles ?= \"staff_admin\" || @request.auth.is_admin = true",
    "listRule": "@request.auth.roles ?= \"staff_admin\" || @request.auth.roles ?= \"reports_admin\" || @request.auth.roles ?= \"events_admin\" || @request.auth.is_admin = true",
    "updateRule": "@request.auth.roles ?= \"staff_admin\" || @request.auth.is_admin = true",
    "viewRule": "@request.auth.roles ?= \"staff_admin\" || @request.auth.roles ?= \"reports_admin\" || @request.auth.roles ?= \"events_admin\" || @request.auth.is_admin = true"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3735627160")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id != \"\" && @request.auth.is_admin = true",
    "deleteRule": "@request.auth.id != \"\" && @request.auth.is_admin = true",
    "listRule": "@request.auth.id != \"\"",
    "updateRule": "@request.auth.id != \"\" && @request.auth.is_admin = true",
    "viewRule": "@request.auth.id != \"\""
  }, collection)

  return app.save(collection)
})
