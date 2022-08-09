class CreateItineraryModules < ActiveRecord::Migration[6.1]
  def change
    create_table :itinerary_modules do |t|
      t.belongs_to :module_type, null: false, foreign_key: true
      t.belongs_to :itinerary, null: false, foreign_key: true
      t.string :name
      t.datetime :start_datetime
      t.datetime :end_datetime
      t.integer :duration
      t.integer :cost
      t.text :notes

      t.timestamps
    end
  end
end
