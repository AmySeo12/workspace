Rails.application.routes.draw do
  resources :musics
  
  root 'home#index'
end
