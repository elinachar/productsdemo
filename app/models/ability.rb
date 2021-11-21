class Ability
  include CanCan::Ability

  def initialize(user)
    user ||= User.new
    can :read, :all # permissions for every user, even if not logged in
    if user.present?
      can :manage, User, id: user.id # a logged in user can manage his/her account
      if user.admin?
        can :manage, :all # only admin user can manage everyting
      end
    end
  end
end
