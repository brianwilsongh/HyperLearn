class FixUsersTable < ActiveRecord::Migration[5.1]
  def change
    rename_column :users, :avatar_url, :avatar
  end
end
