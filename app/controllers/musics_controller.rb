class MusicsController < ApplicationController

  # GET /musics
  # GET /musics.json
  def index
    @musics = Music.all
    render json: @musics
  end

  # GET /musics/1
  # GET /musics/1.json
  def show
    render json: @music
  end

  # POST /musics
  # POST /musics.json
  def create
    @music = Music.new(music_params)
    
    if @music.save
      render json: @music, status: :created, location: @music
    else
      render json: @music.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /musics/1
  # PATCH/PUT /musics/1.json
  def update
    @music = Music.find(params[:id])
    
    if @music.update(music_params)
      render json: @music
    else
      render json: @music.errors, status: :unprocessable_entity
    end
  end

  # DELETE /musics/1
  # DELETE /musics/1.json
  def destroy
    @music = Music.find(params[:id])
    
    if @music.destroy
      render json: @music
    else
      render json: @music.errors, status: :unprocessable_entity
    end
  end

  private

    # Never trust parameters from the scary internet, only allow the white list through.
    def music_params
      params.permit(:title, :artist, :year, :genre)
    end
    
end
