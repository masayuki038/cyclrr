Rails.application.routes.draw do
  resources :contents
  root 'application#goodbye'
end
