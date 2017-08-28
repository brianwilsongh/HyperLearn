Rails.application.routes.draw do
  root to: "static_pages#root"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :sessions, only: [:create, :destroy]
    resources :subjects, only: [:index, :create, :update, :destroy]
    resources :decks, except: [:new]
    resources :cards, only: [:index, :create, :update, :destroy]
  end
end
