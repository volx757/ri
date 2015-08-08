class SubscriberMailer < ActionMailer::Base
  default from: 'info@rijuce.com'

  def welcome_email(user)
    @user = user
    mail(:to => @user.email,
         :subject => 'yo dawg, the emailing works. now all we need to do is decide what to put here, and then there s all the statistics and bullshit
                        in the sendgrid dashboard, which you ll have access to.')
  end

end
