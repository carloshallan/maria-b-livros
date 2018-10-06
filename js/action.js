$(document).ready(function () {
    // get height header

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
            $('.search input').removeClass('searchShow');
        } else {
            $('.search input').addClass('searchShow');
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
    }

});