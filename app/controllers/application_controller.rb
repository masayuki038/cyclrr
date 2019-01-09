class ApplicationController < ActionController::Base
  after_action :set_csrf_cookie
  protect_from_forgery with: :exception

  def hello
    render html: "hola, mundo!"
  end

  def goodbye
    render html: "goodbye, world!"
  end

  protected
    def set_csrf_cookie
      cookies["X_CSRF_Token"] = form_authenticity_token
    end
end
