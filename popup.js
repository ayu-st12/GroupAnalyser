 // This is called with the results from from FB.getLoginStatus().
    function statusChangeCallback(response) {
        console.log('statusChangeCallback');
        console.log(response);
        // The response object is returned with a status field that lets the
        // app know the current login status of the person.
        // Full docs on the response object can be found in the documentation
        // for FB.getLoginStatus().
        if (response.status === 'connected') {
            // Logged into your app and Facebook.
            testAPI();
        } else if (response.status === 'not_authorized') {
            // The person is logged into Facebook, but not your app.
            document.getElementById('status').innerHTML = 'Please log ' +
          'into this app.' + "<br>";
        } else {
            // The person is not logged into Facebook, so we're not sure if
            // they are logged into this app or not.
            document.getElementById('status').innerHTML = 'Please log ' +
          'into Facebook.' + "<br>";
        }
    }

    // This function is called when someone finishes with the Login
    // Button.  See the onlogin handler attached to it in the sample
    // code below.
    function checkLoginState() {
        FB.getLoginStatus(function (response) {
            statusChangeCallback(response);
        });
    }

    window.fbAsyncInit = function () {

        FB.init({
            appId: '1617837078497452',
            cookie: true,  // enable cookies to allow the server to access 
            // the session
            xfbml: true,  // parse social plugins on this page
            version: 'v2.2' // use version 2.2
        });

        // Now that we've initialized the JavaScript SDK, we call 
        // FB.getLoginStatus().  This function gets the state of the
        // person visiting this page and can return one of three states to
        // the callback you provide.  They can be:
        //
        // 1. Logged into your app ('connected')
        // 2. Logged into Facebook, but not your app ('not_authorized')
        // 3. Not logged into Facebook and can't tell if they are logged into
        //    your app or not.
        //
        // These three cases are handled in the callback function.

        FB.getLoginStatus(function (response) {
            statusChangeCallback(response);
        });

    };

    // Load the SDK asynchronously

    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    } (document, 'script', 'facebook-jssdk'));

    // Here we run a very simple test of the Graph API after login is
    // successful.  See statusChangeCallback() for when this call is made.


    // Group IDS :
    //    Family 1:  1598687597081745 
    //    Family 2:  1593737467533992
    //    Family 3:  101843606814855
    //    Family 4:  817939551619734
    //    Family 5:  881499635232327
    //    Family 6:  832916450097530
    //    Family 7:  1608014972769346
    //    Family 8:  1047338315295387
    //    Family 9:  570260056409770
    
    var grp_ids = new Array();
    var grp_ids = [1598687597081745, 1593737467533992, 101843606814855, 817939551619734, 881499635232327, 832916450097530, 1608014972769346, 1047338315295387, 570260056409770];
    
       function testAPI() {

        console.log('Welcome!  Fetching your information.... ');

        for (var i = 0; i < 9; i++) {

            var str1 = "/";
            var str2 = grp_ids[i];
            var str3 = "/members?limit=400";
            var abc = str1.concat(str2);
            var res = abc.concat(str3);
            FB.api(res, function (response) {

                //console.log('Successful login for: ' + response.name);
                console.log(response.data.length);
              
                document.getElementById('status').innerHTML += response.data.length + "<br>" ;
                
            });
  
            

        }

    }
    

    document.getElementById("myButton").onclick = checkLoginState;

    /*
    "browser_action": {
   "default_icon": "img.png",
   "default_popup": "index.html"
  },
    */