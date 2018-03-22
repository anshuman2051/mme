$(document).ready(
    function (){
    for(var i=1; i<32;i+=2)
        {
            replace($(".block" + i), $(".block" + (i+1)));
        }
}

);



function replace( class1,class2 ){
     class1.hover(
        function(){

            //$(this).addClass("animated fadeOutUp");
            class1.css({"display":"none"});
            class2.css({"display":"block"});
        }
    );
    class2.on('mouseleave',
        function() {
            setTimeout(1000);
            class2.css({"display": "none"});
            class1.css({"display": "block"});
        }
    );
}