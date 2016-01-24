$(document).ready(function(event){
   $('#submit').click(function(event){
      getData();
      
   });
   $('#formThing').submit(function(event){
      event.preventDefault();
      getData();
   });
});
function getData(){
    $.get('https://api.twitch.tv/kraken/channels/' + $('#inputText').val(), "", function(data){
         
         var avatar = data['logo'];
         var username = data['display_name'];
         var followers = data['followers'];
         var totalViews = data['views'];
         var sub = data['partner'];
         var mature = data['mature'];
         var online = data['status'];
         if(data['game'] != null){
            var lastPlayed = data['game'];
         }else{
            var lastPlayed = "None";
         }
         var joined = data['created_at'];
         var html = '<center><img src="' + avatar + '"width="100px" height="100px" style="border:3px solid #fff">';
         html += '<h1>' + username + '</h1>';
         html += '<br><b>Followers: </b>' + followers;
         html += '<br><b>Total Views: </b>' + totalViews;
         html += "<br>";
         html += '<br><b>Current Status:</b>' + online;
         html += '<br><b>Has a Sub Button:</b>' + sub;
         html += '<br><b>Has mature content:</b>' + mature;
         html+= '<br><b>Last Played: </b>' + lastPlayed;
         html += '<br><b>Joined on: </b>' + joined.replace('T', ' at ');
         $('.profile').html(html);
      }).fail(function(data){
            html = '<h1>A Twitch user with that name does not exist.';
             $('.profile').html(html);
            return;
      });
}