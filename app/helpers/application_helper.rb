module ApplicationHelper

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def is_mobile?
    (request.user_agent.present? && (request.user_agent.include?('iPhone') || request.user_agent.include?('Android') ||
        request.user_agent.include?('Windows Phone') || request.user_agent.include?('iPad'))) ?
        true : false
  end

end
