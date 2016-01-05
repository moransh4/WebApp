
/**
 * Created by Lenovo1 on 26/12/15.
 */

var ifram= (function(){

    var choosing_website= function(){
        $('.dropdown-list').change(function() {
            var index = $('.dropdown-list').index(this);
            var iframe= $('.ifram-choose').eq(index);
            var option = $(this).val();
            iframe.attr('src', option);
            $(this).siblings('.website-link').attr('href' , option);
        });
    };


    return{
        choosing_website :choosing_website(),

    }

})();

