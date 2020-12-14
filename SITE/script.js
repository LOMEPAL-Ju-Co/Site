jQuery (document).ready(function($){
  $("#music").click(function(){
      var player= $("#player")[0];
      if (player.paused)
      {
        player.play();
      } else {
        player.pause();
      }
      });
  });
