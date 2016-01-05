

$(function(){

    "use strict";

    var  onload = (function(){

        if (location.hash) {
                window.scrollTo(0, 0);
        }


        var name = $('.siteName');
        var url = $('.urlSite');


        var data1 = JSON.parse(localStorage.getItem("reports0"));
        var data2 = JSON.parse(localStorage.getItem("reports1"));


        if (data1=== null){
            $('.dropdown-list').eq(0).addClass('hide');
            $('.iframe-wrap').eq(0).removeClass('hide');
        }
        else{
            $('.dropdown-list').eq(0).removeClass('hide');

            $('.iframe-wrap').eq(0).removeClass('hide');

            $('.wrapper-report').eq(0).addClass('close-report');

            for ( var i =0 ; i< data1.length ; i++){
                name.eq(i).val(data1[i].name);
                url.eq(i).val(data1[i].url);
            }

        }

        if (data2=== null){
            $('.dropdown-list').eq(1).addClass('hide');
            $('.iframe-wrap').eq(1).removeClass('hide');        }
        else{
            $('.dropdown-list').eq(1).removeClass('hide');

            $('.iframe-wrap').eq(1).removeClass('hide');

            $('.wrapper-report').eq(1).addClass('close-report');

            for(var j= 0 ; j<data2.length ;j++){
                name.eq(j+3).val(data2[j].name);
                url.eq(j+3).val(data2[j].url);
            }

        }




    })();



});
