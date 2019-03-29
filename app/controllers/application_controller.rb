class ApplicationController < ActionController::API
  before_action :authenticate_user!, if: proc { request.controller_class.parent == Api }
  before_action :configure_permitted_parameters, if: :devise_controller?
  include DeviseTokenAuth::Concerns::SetUserByToken

 
   protected
 
   def configure_permitted_parameters
     devise_parameter_sanitizer.permit(:sign_up, keys: [:email])
   end
  
end

