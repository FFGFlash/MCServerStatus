function updateServerInfo(StatusBoxID,ServerName,ServerIP,ServerPort,ShowIP) {
  $(function() {
    $.ajax({
      url: 'https://mcapi.us/server/status?ip='+ServerIP+'&port='+ServerPort,
      dataType: 'text',
      success: function(data) {
        var json = $.parseJSON(data);
        if(ShowIP)
          $(StatusBoxID).find("#ip").html(ServerIP+":"+ServerPort);
        $(StatusBoxID).find("#name").html(ServerName);
        $(StatusBoxID).find("#status").html(json.online ? 'online':'offline');
        $(StatusBoxID).find("#status-icon").html(json.online ? '<img width="17" height="17" src="https://cdn.rawgit.com/FFGFlash/MCServerStatus/01609718/online.png"/>':'<img width="17" height="17" src="https://cdn.rawgit.com/FFGFlash/MCServerStatus/d97e8033/offline.png"/>');
        $(StatusBoxID).find("#players").html(json.players.now+"/"+json.players.max);
        $(StatusBoxID).find("#current-players").html(json.players.now);
        $(StatusBoxID).find("#max-players").html(json.players.max);
      }
    });
  });
}

function updateServerInfoRefresh(StatusBoxID,ServerName,ServerIP,ServerPort,ShowIP,RefreshRate) {
  setInterval(updateServerInfo.bind(null,StatusBoxID,ServerName,ServerIP,ServerPort,ShowIP),RefreshRate);
}

function useDefaultStatusBox(StatusBoxID) {
  $(function() {
    $(StatusBoxID).html(
    "<div id='uStatus'><h3><span id='status-icon'></span> <span id='ip'></span></h3></div><div id='lStatus'>Status: <span id='status'></span><br>Players: <span id='players'></span></div>"
    );
  });
}
