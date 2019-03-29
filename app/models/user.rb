class User < ActiveRecord::Base
    devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable
    include DeviseTokenAuth::Concerns::User

  serialize :liked_friends, Array

  def self.random_friend(ids)
    ids = ids.empty? ? [0] : ids
    Profile.where("id NOT IN (?)", ids).order("RANDOM()")
  end

  def self.liked(ids)
    ids = ids.empty? ? [0] : ids
    Profile.where("id IN (?)", ids)
  end


end
