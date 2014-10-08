require 'httparty'
require 'json'

class SendHub
  include HTTParty
  # https://api.sendhub.com/v1/messages/?username=NUMBER&api_key=APIKEY
  base_uri 'https://api.sendhub.com/v1'
  NUMBER = ENV['NUMBER']
  APIKEY = ENV['APIKEY']

  def



end