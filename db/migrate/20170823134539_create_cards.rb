class CreateCards < ActiveRecord::Migration[5.1]
  def change
    create_table :cards do |t|
      t.text :question, null: false
      t.text :answer, null: false
      t.integer :deck_id, null: false
      t.string :question_img_url
      t.string :answer_img_url
      t.timestamps
    end
  end
end
