/**
 * Created by Lenovo1 on 25/12/15.
 */


var notification = (function(){

    var notific = $(".notifications-data").get(0);


    var update= function() {
        UTILS.ajax('data/config.json', {
            done: function (data) {
                if (data.notification !== "")
                    notific.innerText = data.notification;
            }
        });
    };



    return{
        update: update(),
        //check_search: check_search()
    }

})();


