$(document).ready(function(){
    
    function createHeader(){

        header = ' <div class="abre-menu">\n' +
            '       <div class="iconsAbre">\n' +
            '           <a class="button-menu icon-menu"><i class="fas fa-ellipsis-v"></i></a>\n' +
            '       </div>\n' +
            '\n' +
            '       <div class="linksAbre">\n' +
            '           <a class="text-menu">Menu</a>\n' +
            '       </div>\n' +
            '       <div class="clear"></div>\n' +
            '   </div>\n' +
            '\n' +
            '   <header class="menu-lateral">\n' +
            '       <nav>\n' +
            '\n' +
            '           <div class="icons">\n' +
            '\n' +
            '               <a title="Início" href="../index.html" class="button-menu"><i class="fas fa-home"></i></a>\n' +
            '\n' +
            '               <a title="Apresentação" href="../apresentacao.html" class="button-menu"><i class="fas fa-comments"></i></a>\n' +
            '\n' +
            '               <a title="Resenhas" href="../resenhas" class="button-menu"><i class="fas fa-book-open"></i></a>\n' +
            '\n' +
            '               <a title="Colunas" href="../colunas" class="button-menu"><i class="fas fa-book"></i></a>\n' +
            '\n' +
            '               <a title="Listas" href="../listas" class="button-menu"><i class="fas fa-list-ol"></i></a>\n' +
            '\n' +
            '               <a title="Parceiros" id="parceirosIcon" class="button-menu"><i class="fas fa-handshake"></i></a>\n' +
            '               <div id="modoLeitura"></div> \n'+

            // $("#modoLeitura").html('<a title="Modo Leitura" onclick="modoLeitura()" id="modoLeitura" class="modoLeitura button-menu"><i class="fab fa-readme"></i></a>')
            '           </div>\n' +
            '\n' +
            '           <div class="links">\n' +
            '\n' +
            '               <a href="index.html" class="text-menu">Início</a>\n' +
            '\n' +
            '               <a  class="text-menu">Apresentação</a>\n' +
            '\n' +
            '               <a class="text-menu">Resenhas</a>\n' +
            '\n' +
            '               <a class="text-menu">Colunas</a>\n' +
            '\n' +
            '               <a class="text-menu">Listas</a>\n' +
            '\n' +
            '               <a id="parceirosTxt" class="text-menu">Parceiros</a>\n' +
            '\n' +
            '               <div class="submenu">\n' +
            '                   <a href="anuncie-aqui.html">Anuncie Aqui</a>\n' +
            '                   <a href="colabore-conosco.html">Colabore conosco</a>\n' +
            '                   <a href="os-parceiros">Os parceiros</a>\n' +
            '               </div>\n' +
            '           </div>\n' +
            '           </div>\n' +
            '\n' +
            '           <div class="clear"></div>\n' +
            '       </nav>\n' +
            '   </header>';

        
        
        $("body").prepend(header);
    }
    createHeader();

    function createBodyElements(){
        disqus = '<div id="disqus_thread"></div>\n' +
            '<script>\n' +
            '\n' +
            '/**\n' +
            '*  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.\n' +
            '*  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/\n' +
            '/*\n' +
            'var disqus_config = function () {\n' +
            'this.page.url = PAGE_URL;  // Replace PAGE_URL with your page\'s canonical URL variable\n' +
            'this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page\'s unique identifier variable\n' +
            '};\n' +
            '*/\n' +
            '(function() { // DON\'T EDIT BELOW THIS LINE\n' +
            'var d = document, s = d.createElement(\'script\');\n' +
            's.src = \'https://mariablivros-com-br-1.disqus.com/embed.js\';\n' +
            's.setAttribute(\'data-timestamp\', +new Date());\n' +
            '(d.head || d.body).appendChild(s);\n' +
            '})();\n' +
            '</script>\n' +
            '<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>\n' +
            '                            ';
        $("article:last").after(disqus);
    }


    function createFooter(){
        footer = '                <div class="box">\n' +
            '                    \n' +
            '                    <footer>    \n' +
            '\n' +
            '                        <p style="text-align: center">Todos os direitos reservados - Desenvolvido por <br><a style="color: #b70061" href="https://nuvemagencia.com.br">Nuvem Agência</a></p>\n' +
            '\n' +
            '                    </footer>\n' +
            '                    \n' +
            '                </div>';

        $(".anuncios").after(footer);
    }createFooter();


    function actions(){

        //function open left menu;

        $(".links").hide();
        $(".linksAbre").hide();
        $(".icon-menu").on('click', function () {
            $(".fa-ellipsis-v").transition({rotate: '+=90deg'});
            $(".links").animate({
                'width':'toggle'
            });

            $(".linksAbre").animate({
                'width':'toggle'
            });
        });

        //function open dropdown

        $("#parceirosTxt").on('click', function () {
            $(".submenu").animate({
                'height':'toggle'
            });
        });

        $("#parceirosIcon").on('click', function () {
            $(".fa-ellipsis-v").transition({rotate: '+=90deg'});
            $(".links").animate({
                'width':'toggle'
            });

            $(".linksAbre").animate({
                'width':'toggle'
            });
            $(".submenu").animate({
                'height':'toggle'
            });
        });

        //select page change color button

        if ($("body").attr("page") == "index"){
            $(".icons a:nth(0)").css({
                'background-color':'#b70061'
            })
        }

        if ($("body").attr("page") == "apresentacao"){
            $(".icons a:nth(1)").css({
                'background-color':'#b70061'
            })
        }

        if ($("body").attr("page") == "resenhas"){
            $(".icons a:nth(2)").css({
                'background-color':'#b70061'
            })
        }

        if ($("body").attr("page") == "colunas"){
            $(".icons a:nth(3)").css({
                'background-color':'#b70061'
            })
        }

        if ($("body").attr("page") == "listas"){
            $(".icons a:nth(4)").css({
                'background-color':'#b70061'
            })
        }

        if ($("body").attr("page") == "parceiros"){
            $(".icons a:nth(5)").css({
                'background-color':'#b70061'
            })
        }


        //READ MODE ACTION

        if ($("body").attr("readMode") == "true") {
            $("#modoLeitura").append('<a title="Modo Leitura" id="modoLeitura" class="modoLeitura noSelect button-menu"><i class="fab fa-readme"></i></a>')
            $("#modoLeitura").append('<a title="Modo Leitura" class="modoLeitura select button-menu"><i class="fas fa-times"></i></a>')

            $(".select").css({'left':'-100%'});
        }


        $('.noSelect').on('click', function(){
            $(this).animate({
                'left':'-100%',
                'top':'100px',
            });

            $('.slide figcaption').css({
                'position':'relative',
                'top':'0',
                'background-color':'#fff',
                'padding':'0'
            })

            $('.slide figcaption h1').css({
                'color':'#000',
            })

            $('.select').animate({
                'left':'0',
                'top':'100px',
            }).css({
                'background-color':'rgb(183, 0, 97)',
            });


            $('.right').hide(900)

            $('.left').css({
                'width':'100%',
                'float':'none',
                'transition':'0.5s'
            })

            $('#logo').hide(900)

            $('.slide img').hide(900)
        })



        $(".select").on('click', function(){
            $('.noSelect').animate({
                'left':'0',
                'top':'150px'
            });



            $('.select').animate({
                'left':'-100%',
                'top':'150px',
            }).css({
                'background-color':'#6f003b',
            });


            $('.slide figcaption').css({
                'position':'absolute',
                'top':'160px',
                'background-color':'rgba(0,0,0,0.7)',
                'padding':'50px'
            })

            $('.slide figcaption h1').css({
                'color':'#fff',
            })

            $('.right').show(900)

            $('.left').css({
                'width':'70%',
                'float':'left',
                'transition':'0.5s'
            })

            $('#logo').show(900)

            $('.slide img').show(900)
        })





    }actions();
});