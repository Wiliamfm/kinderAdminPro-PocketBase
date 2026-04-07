/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.roles ?= \"user_admin\" || @request.auth.roles ?= \"staff_admin\" || @request.auth.is_admin = true",
    "deleteRule": "@request.auth.roles ?= \"user_admin\" || @request.auth.is_admin = true",
    "listRule": "@request.auth.roles ?= \"user_admin\" || @request.auth.is_admin = true",
    "manageRule": "@request.auth.roles ?= \"user_admin\" || @request.auth.is_admin = true",
    "updateRule": "@request.auth.roles ?= \"user_admin\" || @request.auth.is_admin = true",
    "viewRule": "@request.auth.roles ?= \"user_admin\" || @request.auth.is_admin = true"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // update collection data
  unmarshal({
    "createRule": "",
    "deleteRule": "@request.auth.id != \"\" && @request.auth.is_admin = true && id != @request.auth.id",
    "listRule": "@request.auth.id != \"\" && @request.auth.is_admin = true",
    "manageRule": null,
    "updateRule": "@request.auth.id != \"\" && @request.auth.is_admin = true",
    "viewRule": "@request.auth.id != \"\" && (@request.auth.is_admin = true || id = @request.auth.id)"
  }, collection)

  return app.save(collection)
})
