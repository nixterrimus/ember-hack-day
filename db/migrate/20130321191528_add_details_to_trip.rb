class AddDetailsToTrip < ActiveRecord::Migration
  def change
    add_column :trips, :start_date, :date
    add_column :trips, :end_date, :date
    add_column :trips, :slug, :string
    add_column :trips, :tagLine, :string
    add_column :trips, :price, :integer
    add_column :trips, :location, :string
    add_column :trips, :activity, :string
  end
end
