class Api::ProfilesController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: User.random_profile(current_user.friends)
  end

  def update
    current_user.liked_friends << params[:id].to_i
    current_user.save
  end
end
