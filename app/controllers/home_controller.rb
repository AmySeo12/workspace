class HomeController < ApplicationController
    
    def index
        @musics = Music.all
        @music = Music.new
    end
    
end
