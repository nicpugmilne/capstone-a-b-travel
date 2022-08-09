class CreateItineraries < ActiveRecord::Migration[6.1]
  def change
    create_table :itineraries do |t|
      t.belongs_to :trip, null: false, foreign_key: true
      t.string :name
      t.boolean :is_favorite
      t.boolean :is_published

      t.timestamps
    end
  end
end
