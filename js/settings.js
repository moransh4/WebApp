/**
 * Created by Lenovo1 on 31/12/15.
 */
/**
 * Created by Lenovo1 on 25/12/15.
 */


var settings =(function() {

    var reports0;
    var reports1;
    var data;


    var open_close = function () {
        $('.setting').on('click', function () {
            var div_report =$(this).siblings('.wrapper-report');
            if (div_report.hasClass('close-report')) {
                div_report.removeClass('close-report').addClass('open-report');
            }
            else {
                div_report.addClass('close-report').removeClass('open-report');
            }
        });
    };


    var cancel = function () {
        $('.cancel').on('click', function (e) {
            $(this).closest('.wrapper-report').addClass('close-report');
        });
    };


    //
    //var clear = function () {
    //    var name = $('.siteName');
    //    var url = $('.urlSite');
    //    $('.clear').on('click', function () {
    //        if ($('.clear').index(this) === 0) {
    //            for (var i = 0; i < 3; i++) {
    //                name.get(i).value = "";
    //                url.get(i).value = "";
    //            }
    //            $('.ifram-choose').eq(0).attr('src', "");
    //        }
    //        else {
    //            for (var j = 3; j < 6; j++) {
    //                name.get(j).value = "";
    //                url.get(j).value = "";
    //            }
    //            $('.ifram-choose').eq(1).attr('src', "");
    //        }
    //
    //    });
    //
    //};
    //

    var save_websites = function(index){

            if (index === 0){
                localStorage['reports0'] = JSON.stringify(reports0);
            }
            if (index === 1){
                localStorage['reports1'] = JSON.stringify(reports1);

                //add_to_local_storage('reports1' , JSON.stringify(reports1));

            }
            drop_down(index);
            $('.dropdown-list').eq(index).removeClass('hide');
            $('.iframe-wrap').eq(index).removeClass('hide');

        $('.wrapper-report').eq(index).addClass('close-report');

    };

    var save= function(){
        var name = $('.siteName');
        var url = $('.urlSite');
        //var websites0 = [], websites1=[];
        $('.save').on('click' , function() {
            if ($('.save').index(this) === 0) {
                reports0=[];
                var index0=0;
                for (var i = 0; i < 3; i++) {
                    if ((name.get(i).value != '') && (url.get(i).value!= '')) {
                        var obj0 = {};
                        obj0["name"] = name.get(i).value;
                        obj0["url"] = url.get(i).value;
                        reports0[index0++] = obj0;
                    }

                }
                if(reports0.length>0){
                    save_websites(0);
                }
                else{
                    localStorage['reports0']= null;
                    $('.dropdown-list').eq(0).addClass('hide');
                    $('.wrapper-report').eq(0).addClass('close-report');
                    $('.ifram-choose').eq(0).attr('src' , "");

                }
            }

            else {
                reports1=[];
                var index1 = 0;
                for (var j = 3; j < 6; j++) {
                    if ((name.get(j).value != '') && (url.get(j).value != '')) {
                        var obj1 = {};
                        obj1["name"] = name.get(j).value;
                        obj1["url"] = url.get(j).value;
                        reports1[index1++] = obj1;
                    }
                }
                if(reports1.length>0){
                    save_websites(1);
                }
                else{
                    localStorage['reports1']= null;
                    $('.dropdown-list').eq(1).addClass('hide');
                    $('.wrapper-report').eq(1).addClass('close-report');
                    $('.ifram-choose').eq(1).attr('src' , "");

                }

            }

            return false;

        });

    };
    //
    //function isUrlValid(url) {
    //    return /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(url);
    //}
    //
    //var validForm = function(){
    //
    //    $(".name")[0].attr("required", "true");
    //
    //    //if (name.value === "" && isUrlValid(url.value)){
    //    //    name.prop("required", "true");
    //    //    url.prop("required", "false")
    //    //}
    //    //if (name.value !== "" && !isUrlValid(url.value)){
    //    //    url.prop("required", "true");
    //    //    name.prop("required", "false")
    //    //
    //    //}
    //
    //};


    var drop_down= function(index){
        var reports = index === 0 ? "reports0" : "reports1";
        data = (JSON.parse(localStorage.getItem(reports)));
        var dropdwon= $('.dropdown-list').eq(index);
        var iframe= $('.ifram-choose').eq(index);
        dropdwon.find('option').remove();
        for(var i=0; i<data.length; i++){
            dropdwon.append($('<option>' ,{
                value: data[i].url,
                text: data[i].name
            }));
        }
        var lastWebsite = data[data.length-1].url;
        dropdwon[0].selectedIndex = data.length-1;
        iframe.attr('src', lastWebsite);
        if(index===0)
            $('.website-link').eq(0).attr('href' , lastWebsite);
        if(index===1)
            $('.website-link').eq(2).attr('href' , lastWebsite);

    };

    return{
        open_close : open_close(),
        cancel: cancel(),
        //clear : clear(),
        save: save(),
        drop_down0: drop_down(0),
        drop_down1: drop_down(1)

    }

})();

