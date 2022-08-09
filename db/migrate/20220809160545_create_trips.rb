class CreateTrips < ActiveRecord::Migration[6.1]
  def change
    create_table :trips do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :name
      t.string :image_url

      t.timestamps
    end
  end
end
