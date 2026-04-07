/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4153373768")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.roles ?= \"admin\" || @request.auth.is_admin = true",
    "deleteRule": "@request.auth.roles ?= \"admin\" || @request.auth.is_admin = true",
    "listRule": "@request.auth.roles ?= \"admin\" || @request.auth.is_admin = true",
    "updateRule": "@request.auth.roles ?= \"admin\" || @request.auth.is_admin = true",
    "viewRule": "@request.auth.roles ?= \"admin\" || @request.auth.is_admin = true"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4153373768")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.roles ?= \"events_admin\" || @request.auth.is_admin = true",
    "deleteRule": "@request.auth.roles ?= \"events_admin\" || @request.auth.is_admin = true",
    "listRule": "@request.auth.roles ?= \"events_admin\" || @request.auth.is_admin = true",
    "updateRule": "@request.auth.roles ?= \"events_admin\" || @request.auth.is_admin = true",
    "viewRule": "@request.auth.roles ?= \"events_admin\" || @request.auth.is_admin = true"
  }, collection)

  return app.save(collection)
})
