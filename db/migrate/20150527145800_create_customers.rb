class CreateCustomers < ActiveRecord::Migration
  def change
    create_table :customers do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :phone
      t.datetime :birth_date

      t.timestamps null: false
    end
    add_index :customers, :email, unique: true
  end
end
