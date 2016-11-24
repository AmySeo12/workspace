class CreateMusics < ActiveRecord::Migration
  def change
    create_table :musics do |t|
      t.string :title
      t.string :artist
      t.string :year
      t.string :genre

      t.timestamps null: false
    end
  end
end
