/*global $, alert, console*/
$(function () {
    "use strict";
    //Adjust Slider Height
    var winHeight = $(window).height(),
        navBar = $('.navbar').innerHeight(),
        spaceImgHeight = $("#space img").height(),
        spaceImgWidth = $("#space img").width(),
        marginTopNormal = (winHeight - spaceImgHeight * 4) / 2,
        marginLeftNormal = (($(window).width() - spaceImgWidth) / 2),
        moonHeight = $("#moon").height(),
        moonWidth = $("#moon").width(),
        checkHover = false,
        randomMoonHeight = Math.floor(Math.random() * (100 - (-50) + 1) + -50),
        randomMoonWidth = Math.floor(Math.random() * (100 - (-50) + 1) + -50),
        h1SliderHeight = $('.slider .carousel-inner h1').innerHeight(),
		userError = true,
        emailError = true,
        messageError = true;
    $('.slider .image, .slider').height(winHeight);
    $('.slider .image').width($(window).width());
    //$('.slider .carousel-inner h1').css("marginTop", (sliderHeight - h1SliderHeight) / 2);
    

    $("html,body").niceScroll({
        cursorcolor: "#01a4ef",
        cursorwidth: "8px",
        cursorborder: "1px solid transparent",
        cursorborderradius: 0,
        cursorfixedheight: 120,
        scrollspeed: 200
    });
    
    

    var typed = new Typed('.firstHeader', {
        strings: ["Microsoft Tech Club"],
        typeSpeed: 70,
        showCursor : false,

    });
    
        
    
    $(".navbar i").click(function () {
        if ($(window).width() <= 993) {
            if($(".navbar").hasClass("marginTopNavBar")){
                $(".navbar").removeClass("marginTopNavBar");
            } else {
                $(".navbar").addClass("marginTopNavBar");
            }
            
            if($(window).scrollTop() >= $(".navbar").height()) {
                $(".navbar-nav").css("marginTop", "-5px");
                $(".navbar-nav").css("backgroundColor", "#FFF");
                $(".navbar-nav").css("borderRadius", "0 0 5px 5px");
                $(".navbar-nav").css("box-shadow",'inset -3px -5px 20px 0px #818181,inset 0px -2px 9px 2px #e1e1e1');
            } else {
                $(".navbar-nav").css("backgroundColor", "transparent");
            }
        }
    });
    
    var mixer = mixitup('.mixUP');
    $('#firstButton').click();
    
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 500) {
            $(".scrollUp .up").fadeIn();
        } else {
            $(".scrollUp .up").fadeOut();
        }
    });
    
    $(".scrollUp .up").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1000);
    });
    
    
    $(".navbar-light .navbar-nav .nav-item > a").click(function () {
        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");
        $("html,body").animate({
            scrollTop: $("#" + $(this).data("value")).offset().top - 60
        }, 1200);
    });
    
    $(".workshops .buttons button").click(function () {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    });
    
    //Scroll Window
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $(".navbar").height()) {
            if (!$(".navbar").hasClass("navScroll")) {
                $(".navbar").addClass("navScroll");
            }
        } else {
            if ($(".navbar").hasClass("navScroll")) {
                $(".navbar").removeClass("navScroll");
            }
        }
    });

    
    $(document).ready(function () {
        $("#space").css("display", "none");
        $("body").css("overflow", "auto");
        $(window).scrollTop(1);
        $(window).scrollTop(0);
    });
    
    $("#moon").hover(function () {
        $("#space img").css("display", "block");
    }, function () {
        if (checkHover === false) {
            $("#space img").css("display", "none");
        }
    });
    
    $("#space img").css("marginTop", marginTopNormal + randomMoonHeight);
    $("#space img").css("marginLeft", marginLeftNormal + randomMoonWidth);
    
    $("#space img").hover(function () {
        checkHover = true;
        $("#space img").css("animation", " rotateplane 3s ease-in-out 1 forwards");
        $("#space .content").css("animation", "opacity 1s ease-in-out 4s forwards");
    });
    
    
    //contact form validation
    
    
    function checkErrors() {
        if (userError === true || emailError === true || messageError === true) {
            return true;
        } else {
            return false;
        }
    }
    
    
    $('.username').blur(function () {
        if ($(this).val().length <= 3) {
            $(this).css("border", "2px solid #f25123");
            userError = true;
        } else {
            $(this).css("border", "2px solid #7fba00");
            userError = false;
        }
    });
    
    $('.email').blur(function () {
        if ($(this).val().length === 0) {
            $(this).css("border", "2px solid #f25123");
            emailError = true;
        } else {
            $(this).css("border", "2px solid #7fba00");
            emailError = false;
        }
    });
    $('.message').blur(function () {
        if ($(this).val().length < 10) {
            $(this).css("border", "2px solid #f25123");
            messageError = true;
        } else {
            $(this).css("border", "2px solid #7fba00");
            messageError = false;
        }
    });
    
    
	$(".contact form").submit(function (e) {
		if (checkErrors() === true) {
			e.preventDefault();
			$(".username, .email, .message").blur();
		}
	});
    
});



/*global document, window, $, jQuery*/

jQuery.extend({
    rndm: function (i) { 'use strict'; return Math.floor(i * (Math.random() % 1)); },
    rndMU: function (min, max) { 'use strict'; return min + jQuery.rndm(max - min + 1); },
    getDocHeight: function () {
        'use strict';

        return Math.max(
            $(document).height(),
            $(window).height(),
            document.documentElement.clientHeight
        );
    },
    getDocWidth: function () {
        'use strict';

        return Math.max(
            $(document).width(),
            $(window).width(),
            document.documentElement.clientWidth
        );
    }
});

function nightsky(i, count, brwsr) {
    'use strict';

    var stars = [],
        size = [];

    for (i; i <= count; i = i + 1) {
        stars[stars.length] = brwsr + 'linear-gradient(#fff, #000) ' + $.rndMU(0, $.getDocWidth()) + 'px ' + $.rndMU(0, $.getDocHeight()) + 'px no-repeat';
        size[size.length] = '1px 2px';
    }

    return {
        'bg': stars.join(', ') + ', #001 ' + brwsr + 'linear-gradient(#fff, #000) 0 0 no-repeat',
        'bgsize': size.join(', ')
    };
}



(function ($) {
    'use strict';

    var $body = $('#space'),
        $moon = $body.find('#moon'),
        mw = $moon.width(),
        mh = $moon.height(),
        count = $.rndMU(0, 1500),
        pos = nightsky(0, count, '-webkit-');

    
    $body.css({
        "background": pos.bg,
        "background-size": pos.bgsize
    });

    $moon.mousemove(function (e) {
        var dh = $(window).height(),
            dw = $(window).width(),
            mx = (e.pageX < ((dw / 2) - ((mw / 2)))) ? 0 : (e.pageX > ((dw / 2) + (mw / 2))) ? mw : -((((dw / 2) + (mw / 2)) - e.pageX) - mw),
            my = (e.pageY < ((dh / 2) - ((mh / 2)))) ? 0 : (e.pageY > ((dh / 2) + (mh / 2))) ? mh : -((((dh / 2) + (mh / 2)) - e.pageY) - mh);

        $moon.css({"background": "-webkit-radial-gradient(" + mx + "px " + my + "px, circle contain, rgba(255,255,255,0.75) 0%, rgba(127,127,127,0.5) 150%, #000 300%), url(http://errazib.com/img/dark_moon.png) no-repeat center"});
    });
}(jQuery));

if($(window).width() >= 1000) {
    /*global $, console*/
var hgt = $('#containerr .image'),
    bgt = $('#containerr .revealPic');

var bgtHalfW = bgt.width() / 2,
    bgtHalfH = bgt.height() / 2;
    console.log("Height = " + bgt.height());
    console.log("Width = " + bgt.width());
    console.log("Window Height = " + $(window).height());
    console.log("Window Width = " + $(window).width());

/**Change position of .revealPic and background-image within it on mousemove over container**/
hgt.mousemove(function (event) {
	"use strict";
	event.preventDefault();
	bgt.show();
	var scrollLeftPos = $(window).scrollLeft(),
		scrollTopPos = $(window).scrollTop(),
		offsetLft = hgt.offset().left,
		offsetTp = hgt.offset().top,
		upX = event.clientX,
		upY = event.clientY;
    bgt.css({backgroundPosition : ''+(offsetLft-upX+bgtHalfW-scrollLeftPos)+'px '+(offsetTp-upY+bgtHalfH-scrollTopPos)+'px',top:''+(-offsetTp+upY-bgtHalfH+scrollTopPos)+'px',left:''+(-offsetLft+upX-bgtHalfW+scrollLeftPos)+'px'});
    console.log((offsetLft-upX+bgtHalfW-scrollLeftPos));
    var circle = document.createElement("div");
    circle.setAttribute("class", "revealPic");
    hgt.append(circle);
    circle.style.backgroundPosition =  ''+(offsetLft-upX+bgtHalfW-scrollLeftPos)+'px '+(offsetTp-upY+bgtHalfH-scrollTopPos)+'px';
    circle.style.left = (-offsetLft+upX-bgtHalfW+scrollLeftPos) + 'px';
    circle.style.top = (-offsetTp+upY-bgtHalfH+scrollTopPos) + 'px';
        circle.style.transition = "all 0.5s linear 0s";
        
        circle.style.left = circle.offsetLeft - 20 + 'px';
        circle.style.borderWidth = "5px";
        circle.style.opacity = 0;
    setTimeout(function(){
        circle.remove();
    }, 1000);
});

/*********************************************/

/*Hide .revealPic div on mouseout*/
hgt.mouseout(function(){
    bgt.hide();
});

}