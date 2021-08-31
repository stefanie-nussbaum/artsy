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

# create users

@admin = User.create!(username: 'testusername', email: 'test@email.com', password: 'testpassword')
@therealvangogh = User.create!(username: 'therealvangogh', email: 'therealvangogh@email.com', password: 'therealvangogh')
@sewcool = User.create!(username: 'sewcool', email: 'sewcool@email.com', password: 'sewcool')
@imakeart23 = User.create!(username: 'imakeart23', email: 'imakeart23@email.com', password: 'imakeart23')

puts "#{User.count} users created"

# create categories

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
@other = Category.create!(name: 'Other')

puts "#{Category.count} categories created"

# create products

Product.create!(name: 'Starry Night', description: 'This is a painting of a starry night. It is made with oil on canvas and approxiamtely 30" x 36".', price: 500, img_url: 'https://cdn.britannica.com/78/43678-050-F4DC8D93/Starry-Night-canvas-Vincent-van-Gogh-New-1889.jpg', user: @therealvangogh, category: @paintings)
Product.create!(name: 'Sunflowers', description: 'This is a painting of some yellow sunflowers. It is made with oil on canvas and approxiamtely 40" x 30".', price: 240, img_url: 'https://micrio.vangoghmuseum.nl/iiif/TZCqF/full/1280,/0/default.jpg?hash=_FqO0rAhuNsZ7ObVCZ6wgqpv_25KhGr4PStqoLnHnhU', user: @therealvangogh, category: @paintings)
Product.create!(name: 'Cafe Terrace at Night', description: 'This is a painting of a cafe at night. It is made with oil on canvas and approxiamtely 32" x 26".', price: 360, img_url: 'https://www.vangoghstudio.com/Files/6/102000/102147/FileBrowser/paintings/cafe-terrace-reproduction.jpg', user: @therealvangogh, category: @paintings)
Product.create!(name: 'Hand-knit Sweater', description: 'Sweater made by hand. Fits like a medium or large.', price: 60, img_url: 'https://cdn.shopify.com/s/files/1/1080/4626/products/image_29efcf0b-05b8-4bf6-85da-31f201e1eb7a_1200x1200.jpg?v=1570284940', user: @admin, category: @clothing)
Product.create!(name: 'Cat Drawing', description: 'I made this drawing of a cat with pencil on 8.5"x11" cardstock paper.', price: 24, img_url: 'https://blog.udemy.com/wp-content/uploads/2020/09/Cat-Step-11-CW.jpg', user: @imakeart23, category: @drawings)
Product.create!(name: 'Bat Plush', description: 'Hand-made plush toy bat. It is about 12" tall and very soft.', price: 30, img_url: 'https://i0.wp.com/oktoberdots.com/wp-content/uploads/Oktoberdots-handmade-Bat-Plushies-mini-tartan.jpg?resize=890%2C1057&ssl=1', user: @sewcool, category: @plush)
Product.create!(name: 'Throw pillows', description: 'A set of 3 hand-sewn throw pillows. Each one is 12" x 12".', price: 45, img_url: 'https://media.architecturaldigest.com/photos/5f0e18364862b19f307d9abc/1:1/w_2000,h_2000,c_limit/48cd662b-e51c-4b11-af31-e01e4983bd9b--2019-0329_hawkins-new-york_stonewashed-linen-pillow-18-x-18_family_silo_ty-mecham_001.jpeg', user: @sewcool, category: @other)

puts "#{Product.count} products created"

