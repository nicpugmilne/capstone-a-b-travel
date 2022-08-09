# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_08_09_160904) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "itineraries", force: :cascade do |t|
    t.bigint "trip_id", null: false
    t.string "name"
    t.boolean "is_favorite"
    t.boolean "is_published"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["trip_id"], name: "index_itineraries_on_trip_id"
  end

  create_table "itinerary_modules", force: :cascade do |t|
    t.bigint "module_type_id", null: false
    t.bigint "itinerary_id", null: false
    t.string "name"
    t.datetime "start_datetime"
    t.datetime "end_datetime"
    t.integer "duration"
    t.integer "cost"
    t.text "notes"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["itinerary_id"], name: "index_itinerary_modules_on_itinerary_id"
    t.index ["module_type_id"], name: "index_itinerary_modules_on_module_type_id"
  end

  create_table "module_types", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "trips", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "name"
    t.string "image_url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_trips_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "itineraries", "trips"
  add_foreign_key "itinerary_modules", "itineraries"
  add_foreign_key "itinerary_modules", "module_types"
  add_foreign_key "trips", "users"
end
