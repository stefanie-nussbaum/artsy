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

@admin = User.create!(username: 'madewithlove', email: 'test@email.com', password: 'testpassword')
@therealvangogh = User.create!(username: 'therealvangogh', email: 'therealvangogh@email.com', password: 'therealvangogh')
@sewcool = User.create!(username: 'sewcool', email: 'sewcool@email.com', password: 'sewcool')
@imakeart23 = User.create!(username: 'imakeart23', email: 'imakeart23@email.com', password: 'imakeart23')
@julesjewelry = User.create!(username: 'julesjewelry', email: 'julesjewelry@email.com', password: 'julesjewelry')

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
Product.create!(name: 'Bracelets', description: 'Handmade beaded bracelets with metal clasp. Price is for one bracelet!', price: 10, img_url: 'https://cdn.shopify.com/s/files/1/0829/2259/products/Fashion-Crystal-Beaded-Elastic-Bracelet-Set-Women-Girls-Popular-Faceted-Glass-Pearl-Beads-Tassel-Bracelet-Handmade_5544bdc7-6086-4e4d-ab77-5a979d7db361_2000x.jpg?v=1590861419', user: @julesjewelry, category: @jewelry)
Product.create!(name: 'Hand-knit Sweater', description: 'Sweater made by hand. Fits like a medium or large.', price: 60, img_url: 'https://cdn.shopify.com/s/files/1/1080/4626/products/image_29efcf0b-05b8-4bf6-85da-31f201e1eb7a_1200x1200.jpg?v=1570284940', user: @admin, category: @clothing)
Product.create!(name: 'Beaded Necklace', description: 'Handmade beaded necklace with a metal clasp. Measures about 18" in diameter.', price: 32, img_url: 'https://i.pinimg.com/564x/3b/26/01/3b2601d2add28a447e9bd484b5b8da5b.jpg', user: @julesjewelry, category: @jewelry)
Product.create!(name: 'Cat Drawing', description: 'I made this drawing of a cat with pencil on 8.5"x11" cardstock paper.', price: 24, img_url: 'https://blog.udemy.com/wp-content/uploads/2020/09/Cat-Step-11-CW.jpg', user: @imakeart23, category: @drawings)
Product.create!(name: 'Sunflowers', description: 'This is a painting of some yellow sunflowers. It is made with oil on canvas and approxiamtely 40" x 30".', price: 240, img_url: 'https://micrio.vangoghmuseum.nl/iiif/TZCqF/full/1280,/0/default.jpg?hash=_FqO0rAhuNsZ7ObVCZ6wgqpv_25KhGr4PStqoLnHnhU', user: @therealvangogh, category: @paintings)
Product.create!(name: 'Background Image', description: 'This is a beautiful desktop background I designed. It comes in the form of a jpeg.', price: 2, img_url: 'https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/4db8820bb1a26e4b5183899c24839403/original', user: @imakeart23, category: @digitalArt)
Product.create!(name: 'Bat Plush', description: 'Hand-made plush toy bat. It is about 12" tall and very soft.', price: 30, img_url: 'https://i0.wp.com/oktoberdots.com/wp-content/uploads/Oktoberdots-handmade-Bat-Plushies-mini-tartan.jpg?resize=890%2C1057&ssl=1', user: @sewcool, category: @plush)
Product.create!(name: 'Pokemon Emotes', description: 'A set of cute pokemon emotes you can use on your Twitch channel!', price: 5, img_url: 'https://pbs.twimg.com/media/ER1DaX4UEAErVTh.jpg', user: @imakeart23, category: @digitalArt)
Product.create!(name: 'Cafe Terrace at Night', description: 'This is a painting of a cafe at night. It is made with oil on canvas and approxiamtely 32" x 26".', price: 360, img_url: 'https://www.vangoghstudio.com/Files/6/102000/102147/FileBrowser/paintings/cafe-terrace-reproduction.jpg', user: @therealvangogh, category: @paintings)
Product.create!(name: 'Handmade Earrings', description: 'Handmade bead earrings made of sterling silver.', price: 16, img_url: 'https://images1.novica.net/pictures/9/p105529_2_400.jpg', user: @julesjewelry, category: @jewelry)
Product.create!(name: 'Throw pillows', description: 'A set of 3 hand-sewn throw pillows. Each one is 12" x 12".', price: 45, img_url: 'https://media.architecturaldigest.com/photos/5f0e18364862b19f307d9abc/1:1/w_2000,h_2000,c_limit/48cd662b-e51c-4b11-af31-e01e4983bd9b--2019-0329_hawkins-new-york_stonewashed-linen-pillow-18-x-18_family_silo_ty-mecham_001.jpeg', user: @sewcool, category: @other)
Product.create!(name: 'Snail Figure', description: 'Snail made with clay. Can be used as a paperweight or just for decoration!', price: 40, img_url: 'https://ak1.ostkcdn.com/images/products/13558588/Firefly-Grey-Ceramic-Terracota-Snail-Sculpture-e188e706-f8bf-4241-b1e5-a6293daa9df4_600.jpg?impolicy=medium', user: @admin, category: @sculptures)

puts "#{Product.count} products created"

