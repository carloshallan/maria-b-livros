$(document).ready(function(){



    // get height header
    (function styles(){

        let windowHeight = window.innerHeight;

        $('.section-blog').css({
            'margin-top':windowHeight
        });


        $('.iconMenu').on('click', function(){
            let classBar = $(this).find('div').hasClass('bar');
            let classToogleBar = $(this).find('div').hasClass('toggleBar');
            
            if (classBar){
                $(this).find('div').removeClass('bar').addClass('toggleBar');
                $(this).css({
                    'background-color':'#b70061'
                });
                $('.menuLeft').css({
                    'left': '0',
                });
            }else{
                $(this).find('div').removeClass('toggleBar').addClass('bar');
                $(this).css({
                    'background-color':'transparent'
                });
                $('.menuLeft').css({
                    'left': '-100%',
                });
            }
        });

        $('.iconSearch').on('click', function(){
            showSearch();
        });

        }());

        function showSearch(){
            
            let hasSearchShow = $('.search input').hasClass('searchShow');
            
            if (hasSearchShow){
                $('.search input').removeClass('searchShow');
            }else{
                $('.search input').addClass('searchShow');
            }
 
        }

});