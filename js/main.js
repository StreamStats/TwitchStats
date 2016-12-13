$(document).ready(function(event){
   $('#submit').click(getData);

   $('#inputText').keyup(function(e){
      if( e.which == 13 ) {
          getData();
      }
   });
});
function getData(){
     $.getJSON('https://api.twitch.tv/kraken/channels/' + $('#inputText').val() + '?client_id=gf85a8tdw7zytg4uz2viijdrzkul5p', function(data){
         
         var avatar = data.logo;
            var Username = data.display_name;
            var followers = data.followers;
            var totalViews = data.views;
            var sub = data.partner;
            var online = data.status;
            var ID = data._id;
            var joined = data.created_at.replace('T', ' at ');
            var mature = (data.mature !== null) ? data.mature: "None";
            var lastPlayed = (data.game !== null) ? data.game: "None";
        
         var html = '<center><img src="' + avatar + '"width="100px" height="100px" style="border:3px solid red">'+
                     '<h1><span class="label label-success">' + Username + '</h1>'+
                     '<br /><b><span class="label label-success">Followers:' + followers + '</b>'+
                     '<br /><b><span class="label label-success">Total Views:' + totalViews + '</b>'+
                     '<br />'+
                     '<br /><b><span class="label label-success">Current Status: ' + online + '</b>'+
                     '<br />'+
                     '<br /><b><span class="label label-info"><font color="White"><a href="https://twitch.tv/' + Username + '">Twitch.tv/'+ Username +'</a></font></b>'+
                     '<br /><b><span class="label label-danger">Partnered:' + sub + '</b>'+
                     '<br /><b><span class="label label-danger">ID:' + ID + '</b>'+
                     '<br /><b><span class="label label-primary">Has mature content: ' + mature + '</b>'+
                     '<br /><b><span class="label label-primary">Last Played: ' + lastPlayed + '</b>'+
                     '<br /><b><span class="label label-success">Joined on: '+joined+' </b>';
         $('.profile').html(html);
      }).fail(function(data){
            html = '<h1>A Twitch user with that name does not exist.';
             $('.profile').html(html);
            return;
      });
}

