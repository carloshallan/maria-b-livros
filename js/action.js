$(document).ready(function () {
    // get height header

    //remove Loadgin
    function loading(){
        
        setTimeout(function(){
            $('.loading').addClass('removeLoading1');
            $('.loading2').addClass('removeLoading2');
        }, 600)
        
        $('.dot').addClass('removeDot');

    }loading();

    (function includeHTML() {
        let include = $('[include]');
    
        $.each(include, function (index, includeElem) {
    
            let includeMenu = new XMLHttpRequest();
            let includeE = $(includeElem);
            let includeURL = $(includeElem).attr('include');
    
            includeMenu.open('GET', includeURL);
    
            includeMenu.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) {includeE.html(this.responseText);}
                    if (this.status == 404) {includeE.html("Page not found.");}
                    /*remove the attribute, and call this function once more:*/
                    actions();
                    anchorAnimation();
                
                    includeE.removeAttr("include");
                    
                  }
            }
    
            includeMenu.send();
        });
    }());


    (function styles() {

        let windowHeight = window.innerHeight;

        $('.section-blog').css({
            'margin-top': windowHeight
        });

    }());

    function showSearch() {

        let hasSearchShow = $('.search input').hasClass('searchShow');

        if (hasSearchShow) {
            $('.search input').removeClass('searchShow').val('');
        } else {
            $('.search input').addClass('searchShow').focus();
        }

    }

    function actions(){
        $('.iconMenu').on('click', function () { // add click event open menu
            let classBar = $(this).find('div').hasClass('bar');
            let classToogleBar = $(this).find('div').hasClass('toggleBar');

            if (classBar) {
                $(this).find('div').removeClass('bar').addClass('toggleBar');
                $(this).css({
                    'background-color': '#b70061'
                });
                $('.menuLeft').css({
                    'left': '0',
                });
            } else {
                $(this).find('div').removeClass('toggleBar').addClass('bar');
                $(this).css({
                    'background-color': 'transparent'
                });
                $('.menuLeft').css({
                    'left': '-100%',
                });
            }
        });

        $('.iconSearch').on('click', function () {
            showSearch();
        });

        $(document).on('keyup', function(event){

            if (event.which === 80){
                let hasSearchShow = $('.search input').hasClass('searchShow');
                if (!hasSearchShow){
                    showSearch();
                }
            }

        });
    }

    (function countText(){
        let h2Text = $('.content-right p');
        let count = h2Text.length;

        h2Text.each(function(index, element){
            let text = $(element).text();
            let textLen = $(element).text().length;
            let textResult = textLen - 376;
            let newText =  text.substring(0, text.length - textResult);
        
            if (textLen >= 376){
                $(element).text(newText).append('[...]');
            }

        })
    }());

    function anchorAnimation(){
        let anchor = $('[href]');
    
        anchor.each(function(index, element){

            console.log(element);

            $(element).on('click', function(){
                let href = $(this).attr('href');

                if (href !== '#'){
                    
                    $(this).removeAttr('href');

                    $('.loading').removeClass('removeLoading1');
                    $('.loading2').removeClass('removeLoading2');

                    setTimeout(() => {

                        window.location.href = href;
                        
                    }, 2000);

               }   
                return false;
            });
        });
        
    }

});