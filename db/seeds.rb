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
@vangogh = User.create!(username: 'therealvangogh', email: 'therealvangogh@email.com', password: 'therealvangogh')
@sewcool = User.create!(username: 'sewcool', email: 'sewcool@email.com', password: 'sewcool')

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

Product.create!(name: 'Starry Night', description: 'This is a painting of a starry night. It is made with oil on canvas and approxiamtely 30" x 36".', price: 500, img_url: 'https://cdn.britannica.com/78/43678-050-F4DC8D93/Starry-Night-canvas-Vincent-van-Gogh-New-1889.jpg', user: @therealvangogh, category: @paintings)
Product.create!(name: 'Sunflowers', description: 'This is a painting of some yellow sunflowers. It is made with oil on canvas and approxiamtely 40" x 30".', price: 240, img_url: 'https://micrio.vangoghmuseum.nl/iiif/TZCqF/full/1280,/0/default.jpg?hash=_FqO0rAhuNsZ7ObVCZ6wgqpv_25KhGr4PStqoLnHnhU', user: @therealvangogh, category: @paintings)
Product.create!(name: 'Cafe Terrace at Night', description: 'This is a painting of a cafe at night. It is made with oil on canvas and approxiamtely 32" x 26".', price: 360, img_url: 'https://www.vangoghstudio.com/Files/6/102000/102147/FileBrowser/paintings/cafe-terrace-reproduction.jpg', user: @therealvangogh, category: @paintings)
Product.create!(name: 'Hand-knit Sweater', description: 'Sweater made by hand. Fits like a medium or large.', price: 60, img_url: 'https://cdn.shopify.com/s/files/1/1080/4626/products/image_29efcf0b-05b8-4bf6-85da-31f201e1eb7a_1200x1200.jpg?v=1570284940', user: @admin, category: @clothing)
Product.create!(name: 'Item name 3', description: 'Description text description text', price: 24, img_url: 'testimg.com', user: @admin, category: @jewelry)
Product.create!(name: 'Item name 4', description: 'Description text description text', price: 24, img_url: 'testimg.com', user: @admin, category: @clothing)
Product.create!(name: 'Item name 5', description: 'Description text description text', price: 24, img_url: 'testimg.com', user: @admin, category: @sculptures)

puts "#{Product.count} products created"

