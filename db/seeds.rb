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

@accessories = Category.create!(name: 'Accessories')
@clothing = Category.create!(name: 'Clothing')
@digitalArt = Category.create!(name: 'Digital Art')
@drawings = Category.create!(name: 'Drawings')
@gifts = Category.create!(name: 'Gifts')
@jewelry = Category.create!(name: 'Jewelry')
@paintings = Category.create!(name: 'Paintings')
@plush = Category.create!(name: 'Plush')
@prints = Category.create!(name: 'Prints')
@sculptures = Category.create!(name: 'Sculptures')
@wallArt = Category.create!(name: 'Wall Art')
@yarnArt = Category.create!(name: 'Yarn Art')
@other = Category.create!(name: 'Other')

puts "#{Category.count} categories created"

#what goes wrong here? validation failed: category must exist

Product.create!(name: 'Item name 1', description: 'Description text description text', price: 24, img_url: 'testimg.com', user: @admin, category: @paintings)
Product.create!(name: 'Item name 2', description: 'Description text description text', price: 24, img_url: 'testimg.com', user: @admin, category: @drawings)
Product.create!(name: 'Item name 3', description: 'Description text description text', price: 24, img_url: 'testimg.com', user: @admin, category: @jewelry)
Product.create!(name: 'Item name 4', description: 'Description text description text', price: 24, img_url: 'testimg.com', user: @admin, category: @clothing)
Product.create!(name: 'Item name 5', description: 'Description text description text', price: 24, img_url: 'testimg.com', user: @admin, category: @sculptures)

puts "#{Product.count} products created"

