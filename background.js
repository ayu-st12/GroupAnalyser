var successURL = 'www.facebook.com/connect/login_success.html';

function onFacebookLogin(){
  if (!localStorage.getItem('accessToken')) {
      chrome.tabs.query({}, function (tabs) { // get all tabs from every window
          for (var i = 0; i < tabs.length; i++) {
              if (tabs[i].url.indexOf(successURL) !== -1) {
                  // below you get string like this: access_token=...&expires_in=...
                  var params = tabs[i].url.split('#')[1];

                  // in my extension I have used mootools method: parseQueryString. The following code is just an example ;)
                  var accessToken = params.split('&')[0];
                  accessToken = accessToken.split('=')[1];

                  localStorage.setItem('accessToken', accessToken);
                  chrome.tabs.remove(tabs[i].id);
                 // alert(localStorage.getItem('acessToken'));
              }
          }
      });
  }
}

chrome.tabs.onUpdated.addListener(onFacebookLogin);

chrome.browserAction.onClicked.addListener(function (activeTab) {
    if (!localStorage.getItem('accessToken')) {
        var newURL = "https://www.facebook.com/dialog/oauth?client_id=1617837078497452&response_type=token&redirect_uri=http://www.facebook.com/connect/login_success.html";
        chrome.tabs.create({ url: newURL });
    }
    else {
        //alert(localStorage.getItem('accessToken'));
        var arr = [1598687597081745, 1593737467533992, 101843606814855, 817939551619734, 881499635232327, 832916450097530, 1608014972769346, 1047338315295387, 570260056409770];
        for (var i = 0; i < 9; i++) {
            var groupurl =
        'https://graph.facebook.com/' + arr[i] + '/members?limit=400&access_token=' + localStorage.getItem('accessToken');



            function ProcessRequest() {
                if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {

                    var info = eval("(" + xmlHttp.responseText + ")");
                    alert(info.data.length);

                }
            }

            var xmlHttp = new XMLHttpRequest();
            xmlHttp.onreadystatechange = ProcessRequest;
            xmlHttp.open("GET", groupurl, true);
            xmlHttp.send(null);

        }
    }
    
}


);