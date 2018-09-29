$(document).ready(function(){



    // get height header
    (function styles(){

        let windowHeight = window.innerHeight;

        // alert(windowHeight)
        $('.section-blog').css({
            'margin-top':windowHeight
        });


        $('.iconMenu').on('click', function(){
            let classBar = $(this).find('div').hasClass('bar');
            let classToogleBar = $(this).find('div').hasClass('toggleBar');
            
            if (classBar){
                $(this).find('div').removeClass('bar').addClass('toggleBar');
                $('.menuLeft').css({
                    'left': '0',
                });
            }else{
                $(this).find('div').removeClass('toggleBar').addClass('bar');
                $('.menuLeft').css({
                    'left': '-100%',
                });
            }
        });

    }());

});