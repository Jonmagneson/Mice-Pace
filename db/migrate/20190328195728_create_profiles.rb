class CreateProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :profiles do |t|
      t.string :name
      t.string :location
      t.string :avatar

      t.timestamps
    end
  end
end
