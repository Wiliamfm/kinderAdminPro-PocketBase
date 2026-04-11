/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1328066158")

  // update collection data
  unmarshal({
    "createRule": ""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1328066158")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.roles ?= \"admin\" || @request.auth.is_admin = true"
  }, collection)

  return app.save(collection)
})
