Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  
  resources :products
  resources :categories
  resources :users
  get '/categories/:category_id/products', to: 'categories#show_category_products'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
