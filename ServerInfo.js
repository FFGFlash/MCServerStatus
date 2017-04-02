function getServerStatus(ID,ServerName,ServerIP,ServerPort,ShowIP) {
  $(document).ready(function() {
    $.ajax({
      url: 'https://mcapi.us/server/status?ip='+ServerIP+'&port='+ServerPort,
      dataType: 'text',
      success: function(data) {
        var json = $.parseJSON(data);
        if(ShowIP) {
          $(ID).children('#ip').html(ServerIP+":"+ServerPort);
        } else {
          $(ID).children('#ip').html(ServerName);
        }
        $(ID).children('#name').html(ServerName);
        $(ID).children('#status').html(json.online ? 'online':'offline');
        $(ID).children('#status-icon').html(json.online ? '<img width="17" height="17" src="https://cdn.rawgit.com/FFGFlash/MCServerStatus/01609718/online.png"/>':'<img width="17" height="17" src="https://cdn.rawgit.com/FFGFlash/MCServerStatus/d97e8033/offline.png"/>');
        $(ID).children('#players').html(json.players.now+"/"+json.players.max);
        $(ID).children('#current-players').html(json.players.now);
        $(ID).children('#max-players').html(json.players.max);
      }
    });
  });
}

function getServerStatusLU(ID,ServerName,ServerIP,ServerPort,ShowIP) {
  setInterval(getServerStatus.bind(null,ID,ServerName,ServerIP,ServerPort,ShowIP),1000);
}

function defaultStatusBox(ID) {
  $(document).ready(function() {
    $(ID).html(
    "<div id='uStatus'><h3><span id='status-icon'></span> <span id='ip'></span></h3></div><div id='lStatus'>Status: <span id='status'></span><br>Players: <span id='players'></span></div>"
    );
    return ID;
  });
}
