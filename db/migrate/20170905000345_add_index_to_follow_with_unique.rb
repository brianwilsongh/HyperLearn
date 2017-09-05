class AddIndexToFollowWithUnique < ActiveRecord::Migration[5.1]
  def change
    add_index :follows, [:user_id, :subject_id], unique: true
  end
end
