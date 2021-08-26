# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



Product.destroy_all
Category.destroy_all
User.destroy_all

@admin = User.create!(username: 'testusername', email: 'test@email.com', password: 'testpassword')

puts "#{User.count} users created"

@paintings = Category.create!(name: 'Paintings')
@drawings = Category.create!(name: 'Drawings')
@jewelry = Category.create!(name: 'Jewelry')
@clothing = Category.create!(name: 'Clothing')
@sculptures = Category.create!(name: 'Sculptures')

puts "#{Category.count} categories created"

#what goes wrong here? validation failed: category must exist

Product.create!(name: 'Item name 1', description: 'Description text description text', price: 24, img_url: 'testimg.com', user: @admin, category: @paintings)
Product.create!(name: 'Item name 2', description: 'Description text description text', price: 24, img_url: 'testimg.com', user: @admin, category: @drawings)
Product.create!(name: 'Item name 3', description: 'Description text description text', price: 24, img_url: 'testimg.com', user: @admin, category: @jewelry)
Product.create!(name: 'Item name 4', description: 'Description text description text', price: 24, img_url: 'testimg.com', user: @admin, category: @clothing)
Product.create!(name: 'Item name 5', description: 'Description text description text', price: 24, img_url: 'testimg.com', user: @admin, category: @sculptures)

puts "#{Product.count} products created"

