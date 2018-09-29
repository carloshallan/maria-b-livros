$(document).ready(function(){



    // get height header
    (function styles(){

        let windowHeight = window.innerHeight;

        // alert(windowHeight)
        $('.section-blog').css({
            'margin-top':windowHeight
        });

    }());

});