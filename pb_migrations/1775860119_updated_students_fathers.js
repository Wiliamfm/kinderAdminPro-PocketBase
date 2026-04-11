/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1662169936")

  // update collection data
  unmarshal({
    "createRule": "",
    "listRule": "@request.auth.roles ?= \"admin\" || @request.auth.is_admin = true",
    "viewRule": "@request.auth.roles ?= \"admin\" || @request.auth.is_admin = true"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1662169936")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.roles ?= \"admin\" || @request.auth.is_admin = true",
    "listRule": "@request.auth.roles:each ?= \"professor\" || @request.auth.is_admin = true",
    "viewRule": "@request.auth.roles:each ?= \"professor\" || @request.auth.is_admin = true"
  }, collection)

  return app.save(collection)
})
