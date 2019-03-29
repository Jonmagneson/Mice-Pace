class AddLikedProfilesToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :liked_profiles, :text
  end
end
