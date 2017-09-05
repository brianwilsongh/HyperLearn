class AddIndexToRatings < ActiveRecord::Migration[5.1]
  def change
    add_index :ratings, [:user_id, :card_id], unique: true
  end
end
