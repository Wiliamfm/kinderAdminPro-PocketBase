/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2708049880")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.roles:each = \"professor\" || @request.auth.roles ?= \"admin\" || @request.auth.is_admin = true",
    "deleteRule": "@request.auth.roles:each = \"professor\" || @request.auth.roles ?= \"admin\" || @request.auth.is_admin = true",
    "updateRule": "@request.auth.roles:each = \"professor\" || @request.auth.roles ?= \"admin\" || @request.auth.is_admin = true"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2708049880")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.roles ?= \"admin\" || @request.auth.is_admin = true",
    "deleteRule": "@request.auth.roles ?= \"admin\" || @request.auth.is_admin = true",
    "updateRule": "@request.auth.roles ?= \"admin\" || @request.auth.is_admin = true"
  }, collection)

  return app.save(collection)
})
