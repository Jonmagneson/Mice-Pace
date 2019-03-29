class Profile < ApplicationRecord
  def my_friends
    render json: User.liked(current_user.liked_friends)
  end

end
