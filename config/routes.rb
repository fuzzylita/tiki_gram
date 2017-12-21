Rails.application.routes.draw do
  
  get '/auth/:provider/callback', to: 'sessions#create'
  get '/user', to: 'users#show'
  root 'application#index'
end
