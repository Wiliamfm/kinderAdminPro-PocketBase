/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2857750545")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.roles:each = \"professor\" || @request.auth.roles ?= \"admin\" || @request.auth.is_admin = true"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2857750545")

  // update collection data
  unmarshal({
    "createRule": "  @request.auth.roles:e = \"professor\" || @request.auth.roles ?= \"admin\" || @request.auth.is_admin = true"
  }, collection)

  return app.save(collection)
})
