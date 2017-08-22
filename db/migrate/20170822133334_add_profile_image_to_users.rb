class AddProfileImageToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :avatar_url, :string
  end
end
