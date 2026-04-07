/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1866223567")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.roles ?= \"reports_admin\" || @request.auth.is_admin = true",
    "deleteRule": "@request.auth.roles ?= \"reports_admin\" || @request.auth.is_admin = true",
    "listRule": "@request.auth.roles ?= \"reports_admin\" || @request.auth.is_admin = true",
    "updateRule": "@request.auth.roles ?= \"reports_admin\" || @request.auth.is_admin = true",
    "viewRule": "@request.auth.roles ?= \"reports_admin\" || @request.auth.is_admin = true"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1866223567")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.is_admin = true",
    "deleteRule": "@request.auth.is_admin = true",
    "listRule": "@request.auth.is_admin = true",
    "updateRule": "@request.auth.is_admin = true",
    "viewRule": "@request.auth.is_admin = true"
  }, collection)

  return app.save(collection)
})
