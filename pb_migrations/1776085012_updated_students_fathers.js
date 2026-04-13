/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1662169936")

  // update collection data
  unmarshal({
    "listRule": "",
    "viewRule": ""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1662169936")

  // update collection data
  unmarshal({
    "listRule": "@request.auth.roles:each = \"father\" || @request.auth.is_admin = true",
    "viewRule": "@request.auth.roles:each = \"father\" || @request.auth.is_admin = true"
  }, collection)

  return app.save(collection)
})
