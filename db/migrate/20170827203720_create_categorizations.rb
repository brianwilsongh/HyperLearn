class CreateCategorizations < ActiveRecord::Migration[5.1]
  def change
    create_table :categorizations do |t|
      t.integer :subject_id, null: false
      t.integer :category_id, null: false
      t.timestamps
    end
  end
end
