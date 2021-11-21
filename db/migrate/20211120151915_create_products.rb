class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :title
      t.text :short_description
      t.text :description
      t.float :initial_price
      t.float :final_price
      t.string :slug

      t.timestamps
    end
  end
end
