function getServerStatus(ServerName,ServerIP,ServerPort,ShowIP) {
  $(document).ready(function() {
    $.ajax({
      url: 'https://mcapi.us/server/status?ip='+ServerIP+'&port='+ServerPort,
      dataType: 'text',
      success: function(data) {
        var json = $.parseJSON(data);
        if(ShowIP)
          $('#ip').html(ServerIP+":"+ServerPort);
        else
          $('#ip').html(ServerName);
        $('#name').html(ServerName);
        $('#status').html(json.online ? 'online':'offline');
        $('#status-icon').html(json.online ? '<img width="17" height="17" src="https://cdn.rawgit.com/FFGFlash/MCServerStatus/01609718/online.png"/>':'<img width="17" height="17" src="https://cdn.rawgit.com/FFGFlash/MCServerStatus/5b5e4055/icon-19.png"/>');
        $('#players').html(json.players.now+"/"+json.players.max);
        $('#current-players').html(json.players.now);
        $('#max-players').html(json.players.max);
      }
    });
  });
}

function getServerStatusLU(ServerName,ServerIP,ServerPort,ShowIP) {
  setInterval(getServerStatus.bind(null,ServerName,ServerIP,ServerPort,ShowIP),1000);
}

function defaultStatusBox(ID) {
  $(document).ready(function() {
    $(ID).html(
    "<div id='uStatus'><h3><span id='status-icon'></span> <span id='ip'></span></h3></div><div id='lStatus'>Status: <span id='status'></span><br>Players: <span id='players'></span></div>"
    );
  });
}
