class StaticPagesController < ApplicationController
  def root
    @current_user = current_user
    puts "CURRENT USER IN STATICPAGESCONTROLLER: #{@current_user}"
  end
end
