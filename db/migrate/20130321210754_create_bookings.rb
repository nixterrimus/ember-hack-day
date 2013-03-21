class CreateBookings < ActiveRecord::Migration
  def change
    create_table :bookings do |t|
      t.integer :hotel_id
      t.integer :trip_id

      t.timestamps
    end
  end
end
