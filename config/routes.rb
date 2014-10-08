Rails.application.routes.draw do
  resources :contacts
  match '/send_message', to: 'contacts#send_message', via: 'get'

  root 'contacts#index'
end
