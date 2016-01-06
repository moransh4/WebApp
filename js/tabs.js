/**
 * Created by Lenovo1 on 26/12/15.
 */

var tabs = (function(){



    function maketabActive($strElement)
    {
        $('.list li.active').removeClass('active');
        $strElement.addClass('active');
        $('.active-panel').removeClass('active-panel');

        var target_panel_selector = $strElement.find('a').data('href');
        $(target_panel_selector).addClass('active-panel');
        // Save selected tab index in session stroage.So after page refresh active tab will be maintained
        sessionStorage.setItem('selected-tab', $strElement.index());

        window.location.hash = "/"+target_panel_selector.slice(1);
    }
    $(document).ready(function () {
        // Check if selected tab is stored in session stroage
        if (sessionStorage.getItem('selected-tab'))
        {
            //Make tab active based on index got from session stroage
            maketabActive($(".tab1:eq(" + sessionStorage.getItem('selected-tab') + ")"));

        }
    });
    var open_tab = function () {
        $('.tab1').each(function (i, tab) {
            UTILS.addEvent(tab, 'click', function () {
                maketabActive($(this));
            });
        });
    };

    return{

        open_tab : open_tab()

    }

})();

