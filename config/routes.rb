Rails.application.routes.draw do
  resources :favorites, only: [:create, :index, :destroy]

  get '/auth/:provider/callback', to: 'sessions#create'
  get '/user', to: 'users#show'
  get '/login', to: 'sessions#login'
  get '/logout', to: 'sessions#logout'

  root 'application#index'
  get '*path', to: 'application#index'
end
