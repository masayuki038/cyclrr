class CreateContents < ActiveRecord::Migration[5.2]
  def change
    create_table :contents do |t|
      t.integer :id
      t.string :title
      t.string :content

      t.timestamps
    end
  end
end
