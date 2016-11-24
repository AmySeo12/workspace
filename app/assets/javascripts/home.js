$(function() {
    
    var $addMusic = $("#new_music"),
        $musicList = $("#music_list").find("tbody"),
        $deleteMusic = $(".music_delete"),
        $status = $(".status"),
        $noMusic = $(".no_music")
        addAPIPath = $addMusic.attr("action");
        
    var template = "<tr>";
        template += "<td>{{title}}</td>";
        template += "<td>{{artist}}</td>";
        template += "<td>{{year}}</td>";
        template += "<td>{{genre}}</td>";
        template += "<td><a class='music_delete' data-method='delete' href='/musics/{{id}}'>x</a></td>";
        template += "</tr>"
    
    var  manageStatus = function (message, doShow) {
        $status.text(message);
        doShow ? $status.fadeIn(10, "linear") : $status.fadeOut(4000, "linear");
    };
    
    var addSong = function (event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        
        var title= $("#music_title").val();
        var artist= $("#music_artist").val();
        var year= $("#music_year").val();
        var genre=  $("#music_genre").val();
        var date= new Date;
        var yearActual= date.getFullYear();
        
        if((title.trim().length > 0 && title.trim().length < 40) && 
            (artist.trim().length > 0 && artist.trim().length < 60) && 
            (year.trim().length >0 && parseInt(year) >= 1990 && parseInt(year) <= yearActual)&& 
            (genre.trim().length > 0 && genre.trim().length < 40)){
                
            $("#music_list").removeClass("none");
            $(".status").removeClass("none");
            $(".no_music").addClass("none");
            var song = {
                title:title,
                artist: artist,
                year: year,
                genre:genre
            };
            
            manageStatus("Status: Sending request...", true);
            
            $.ajax({
                url: addAPIPath,
                type: 'post',
                dataType: 'json',
                data: song,
                success: function (response) {
                    $musicList.append(template.replace("{{title}}", response.title)
                                              .replace("{{artist}}", response.artist)
                                              .replace("{{year}}", response.year)
                                              .replace("{{genre}}", response.genre)
                                              .replace("{{id}}", response.id));
                                              
                                              
                    manageStatus("Status: OK", false);
                },
                error: function (error) {
                    manageStatus("Status: Request Failed", false);
                }
            }); 
            
            var title= $("#music_title").val("");
            var artist= $("#music_artist").val("");
            var year= $("#music_year").val("");
            var genre=  $("#music_genre").val("");
            $(".errors").html("");
            $(".errors").addClass("none");
        }else{
            $(".errors").removeClass("none");
            if((title.trim().length == 0 || title.trim().length > 40)){
                $(".errors").append("Invalid Title");
            }
            if((artist.trim().length == 0 || artist.trim().length > 60)){
                $(".errors").append("<div>Invalid Artist</div");
            }
            if((genre.trim().length == 0 || genre.trim().length > 30)){
                $(".errors").append("<div>Invalid Genre</div");
            }
            if((year.trim().length == 0 || year > yearActual || year < 1990 || typeof year == "string")){
                $(".errors").append("<div>Invalid Year</div");
            }
        }
        
    };
    
    var deleteSong = function (event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        $(this).parent().parent().remove();
    };
    
    var init = function () {
        $addMusic.submit(addSong);
        $deleteMusic.click(deleteSong);
    };
    
    init();
    
});