class ContactsController < ApplicationController
  def index
  end

  def create
    @contact = Contact.create(contact_params)
    render json: @contact
  end

  def send_message
    sh = SendHub.new
    puts params["phone_number"]

    puts sh.post_messages({:contacts => params["phone_number"], :text => params["messageBody"]})
    # OpenSSL::SSL::SSLError (SSL_connect returned=1 errno=0 state=SSLv3 read server certificate B: certificate verify failed):
    # app/controllers/contacts_controller.rb:14:in `send_message'

  end

  private
  def contact_params
    params.require(:contacts).permit(:name, :phone_number)
  end

end