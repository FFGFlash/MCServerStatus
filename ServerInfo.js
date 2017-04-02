function getServerStatus(StatusBoxID,ServerName,ServerIP,ServerPort,ShowIP) {
  $(document).ready(function() {
    $.ajax({
      url: 'https://mcapi.us/server/status?ip='+ServerIP+'&port='+ServerPort,
      dataType: 'text',
      success: function(data) {
        var json = $.parseJSON(data);
        if(ShowIP) {
          $(StatusBoxID).children('#ip').html(ServerIP+":"+ServerPort);
        } else {
          $(StatusBoxID).children('#ip').html(ServerName);
        }
        $(StatusBoxID).children('#name').html(ServerName);
        $(StatusBoxID).children('#status').html(json.online ? 'online':'offline');
        $(StatusBoxID).children('#status-icon').html(json.online ? '<img width="17" height="17" src="https://cdn.rawgit.com/FFGFlash/MCServerStatus/01609718/online.png"/>':'<img width="17" height="17" src="https://cdn.rawgit.com/FFGFlash/MCServerStatus/d97e8033/offline.png"/>');
        $(StatusBoxID).children('#players').html(json.players.now+"/"+json.players.max);
        $(StatusBoxID).children('#current-players').html(json.players.now);
        $(StatusBoxID).children('#max-players').html(json.players.max);
      }
    });
  });
}

function getServerStatusLU(StatusBoxID,ServerName,ServerIP,ServerPort,ShowIP) {
  setInterval(getServerStatus.bind(null,StatusBoxID,ServerName,ServerIP,ServerPort,ShowIP),1000);
}

function defaultStatusBox(StatusBoxID) {
  $(document).ready(function() {
    $(StatusBoxID).html(
    "<div id='uStatus'><h3><span id='status-icon'></span> <span id='ip'></span></h3></div><div id='lStatus'>Status: <span id='status'></span><br>Players: <span id='players'></span></div>"
    );
    return StatusBoxID;
  });
}
