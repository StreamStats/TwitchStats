<!DOCTYPE html>
<html>
    <head>
        <title>TwitchStats</title>
         <!-- Jetpack Open Graph Tags -->
<meta property="og:type" content="website" />
<meta property="og:title" content="TwitchStats" />
<meta property="og:description" content="Welcome To The TwitchStats Page Just Enter your Twitch Name Your Good To Go" />
<meta property="og:url" content="http://team.thespacearmy.x10.mx/Twitch/" />
<meta property="og:site_name" content="http://team.thespacearmy.x10.mx/Twitch/" />
<meta property="og:image" content="http://www.twitch.tv/favicon.ico" />
<meta property="og:locale" content="en_US" />
        <meta charset="UTF-8">
          <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha256-k2/8zcNbxVIh5mnQ52A0r3a6jAgMGxFJFE2707UxGCk= sha512-ZV9KawG2Legkwp3nAlxLIVFudTauWuBpC10uEafMHYL0Sarrz5A7G79kXh5+5+woxQ5HM559XX2UZjMJ36Wplg==" crossorigin="anonymous">

        <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-71594717-6', 'auto');
  ga('send', 'pageview');

</script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
        <link rel="stylesheet" href="css/main.css" type="text/css" />
        <link rel="icon" href="http://tsg.x10.mx/favicon.ico" sizes="16x16">
        <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-71594717-2', 'auto');
  ga('send', 'pageview');

</script>
    </head>
    <body>
        
            <center>
			<form action="" method="post">
			  <h3>Enter Your <i class="fa fa-twitch"></i> Username!</h3>
			  <input type="text" name="inputText"/>
			  <input type="submit" name="SubmitButton"/>
			</form>    
			<br>
            
            <?php
				if(isset($_POST['SubmitButton'])){ //check if form was submitted
					$input = $_POST['inputText']; //get input text
					click($input);
				}    

				function click($name){
					$url = 'https://api.twitch.tv/kraken/channels/' . $name;
					$obj = json_decode(@file_get_contents($url), true);
					if($obj == "") {
						echo '<h1><font color="#FFFFFF"<i class="fa fa-twitch"> Channel does not exist</font></h1>';
						return;
					}
					echo "<center><img src='" . $obj['logo'] . "' width='100px' height='100px' style='border:3px solid #fff'>";
					echo "<h1>" . $obj['display_name'] . '</h1><h3>';
					echo "<b>Followers: </b>"; 
					$followerstotal	= $obj['followers'];
					echo $english_format_number = number_format($followerstotal);
					echo " <b>Total Views</b>: ";
					$viewstotal	= $obj['views'];
					echo $english_format_number = number_format($viewstotal);
					echo '<br>';
					echo "<br><b>Current Status: </b>" . $obj['status'];
					echo "<br><b>Has a Sub Button: </b>" . $obj['partner'];
					echo "<br><b>Has Mature Content on: </b>" . $obj['mature'];
					echo "<br><b>Last Played: </b>" . $obj['game'];
					$date = str_replace("T"," at ", $obj['created_at']);
					$date = str_replace("Z", "", $date);
					echo ("<br><b>When Joined Twitch: </b>" . $date);
				}
            ?>
    </body>
</html>