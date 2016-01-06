/**
 * Created by Lenovo1 on 26/12/15.
 */

"use strict";

var search = (function () {

    var flag= false;

    var reports0 = JSON.parse(localStorage.getItem("reports0"));
    var reports1 = JSON.parse(localStorage.getItem("reports1"));

    var data= reports0.concat(reports1).filter(function(val){
        return val!==null;
    });

    var search_name = getParameterByName('q').toLowerCase();


    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    var search = function() {
        flag = false;

        for(var i=0 ; i<data.length ; i++){
            var name = data[i].name.toLowerCase();
            if(name === search_name){
                flag = true;
                open_ifram(data[i].url);
                break;
            }
        }

    };

    var open_ifram = function(link){
        sessionStorage.setItem('selected-tab', $('.tab1').index());
        $('.list li.active').removeClass('active');
        $('.tab1').eq(0).addClass('active');
        $('.wrapper-report').eq(0).addClass('close-report');
        $('.iframe-wrap').eq(0).removeClass('hide');
        $('.ifram-choose').eq(0).attr('src', link);
        $('.website-link').eq(0).attr('href' , link);

    };

    return{
        search: search()

    }


})();