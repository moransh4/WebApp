/**
 * Created by Lenovo1 on 26/12/15.
 */


var validate = (function(){

    var add_http = function(){
        $('.urlSite').each(function(i, url) {
            UTILS.addEvent(url , "change", function(){
                if (url.value.indexOf("http://") !== 0 && url.value.indexOf("https://") !== 0) {
                    url.value = "http://" + url.value;
                }
            });
        });

    };


    return{
        add_http : add_http()
    }

})();