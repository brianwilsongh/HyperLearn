class AddNamesToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :f_name, :string
    add_column :users, :l_name, :string
  end
end
