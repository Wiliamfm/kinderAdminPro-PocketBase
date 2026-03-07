/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const currentSemester = app.findRecordsByFilter("semesters", "is_current = true", "-updated_at", 1, 0)[0]
  const fallbackSemester = app.findRecordsByFilter("semesters", "id != \"\"", "-end_date", 1, 0)[0]
  const defaultSemester = currentSemester || fallbackSemester

  if (!defaultSemester) {
    throw new Error("Cannot backfill leaves.semester_id because no semester records exist.")
  }

  const leaves = app.findAllRecords("leaves")

  for (const leave of leaves) {
    if (!leave) {
      continue
    }

    if (toString(leave.get("semester_id")).trim().length > 0) {
      continue
    }

    leave.set("semester_id", defaultSemester.id)
    app.save(leave)
  }
}, () => {
  // no-op: field removal rollback is handled by the surrounding schema migrations
})
