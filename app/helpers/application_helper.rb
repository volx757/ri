module ApplicationHelper

  def is_mobile?
    (request.user_agent.present? && (request.user_agent.include?('iPhone') || request.user_agent.include?('Android') ||
        request.user_agent.include?('Windows Phone') || request.user_agent.include?('iPad'))) ?
        true : false
  end

end
