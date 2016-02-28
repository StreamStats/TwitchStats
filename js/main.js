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
         var Username = data['display_name'];
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
         html += '<h1><span class="label label-success">' + Username + '</h1>';
         html += '<br><b><span class="label label-success">Followers:' + followers + '</b>';
         html += '<br><b><span class="label label-success">Total Views:' + totalViews + '</b>';
         html += "<br>";
         html += '<br><b><span class="label label-success">Current Status: ' + online + '</b>';
         html += "<br>";
         html += '<br><b><font color="White"><a href="https://twitch.tv/' + Username + '">Twitch.tv/'+ Username +'</a></font></b>';
         html += '<br><b><span class="label label-danger">Partnered:' + sub + '</b>';
         html += '<br><b><span class="label label-primary">Has mature content: ' + mature + '</b>';
         html += '<br><b><span class="label label-primary">Last Played: ' + lastPlayed + '</b>';
         html += '<br><b><span class="label label-success">Joined on: '+joined+' </b>'.replace('T', ' at ');
         $('.profile').html(html);
      }).fail(function(data){
            html = '<h1>A Twitch user with that name does not exist.';
             $('.profile').html(html);
            return;
      });
}
