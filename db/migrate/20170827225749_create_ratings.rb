class CreateRatings < ActiveRecord::Migration[5.1]
  def change
    create_table :ratings do |t|
      t.integer :user_id, null: false
      t.integer :card_id, null: false
      t.integer :rating, default: 0
      t.timestamps
    end
  end
end
