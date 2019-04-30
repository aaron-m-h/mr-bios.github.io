$(document).ready(function() {

    var header = new TimelineMax();

    header.to(".nav-outer", .3, {
        y: 55,
        ease: ExpoScaleEase.config(3, 10)
    }, 0);
    header.set('.nav-outer', {
        className: '+=white-bg'
    }, 0);
    header.set('.nav-left img', {
        className: '+=orange-hue'
    }, 0);
    header.to(".nav-left img", .5, {
        bezier: [{
            scaleX: 1,
            scaleY: 1
        }, {
            scaleX: 1.2,
            scaleY: 1.2
        }, {
            scaleX: 1,
            scaleY: 1
        }],
        ease: Power1.easeInOut
    }, .4);
    header.set('.nav-left img', {
        className: '-=orange-hue'
    }, 1);
    header.set('.nav-outer', {
        className: '-=white-bg'
    }, 1);

    header.set("#character", {
        autoAlpha: 1
    });
    header.fromTo("#image-container-inner", .7, {
        scale: "2",
        opacity: 0
    }, {
        scale: "1",
        opacity: 1,
        ease: ExpoScaleEase.config(3, 10)
    }, 1);

    header.from("#character", .3, {
        y: -400,
        ease: Ease.easeOut
    }, 1.9);
    header.set("#header-text", {
        autoAlpha: 1
    }, 2);
    header.set('#header-text', {
        className: '+=text-fuzz'
    }, 2);

    $(".question").click(function() {
        var currentDiv = $(this);

        $(this).closest('div').find(".answer-wrapper").slideToggle('fast', function() {
            $(currentDiv).toggleClass('orange-text', $(this).is(':visible'));
            $(currentDiv).toggleClass('is-active', $(this).is(':visible'));


        });
    });


    var controller_quotes = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 0.5,
            reverse: true
        }
    });

    document.querySelectorAll(".vertical-quote").forEach(function(element) {

        var scene_quotes = new ScrollMagic.Scene({
                triggerElement: element,
                duration: element.offsetHeight - 175
            })
            .setTween(TweenMax.fromTo(element.querySelector(".quote-block-inner"), 1, {
                y: 200,
                opacity: 0
            }, {
                y: 0,
                opacity: 1
            }))
            //.addIndicators()
            .addTo(controller_quotes);

    });


    var c11 = document.getElementById("curve-1-1");
    var c12 = document.getElementById("curve-1-2");
    var c13 = document.getElementById("curve-1-3");
    var c14 = document.getElementById("curve-1-4");
    var c15 = document.getElementById("curve-1-5");
    var c21 = document.getElementById("curve-2-1");
    var c22 = document.getElementById("curve-2-2");
    var c23 = document.getElementById("curve-2-3");
    var c24 = document.getElementById("curve-2-4");
    var c25 = document.getElementById("curve-2-5");
    var c31 = document.getElementById("curve-3-1");
    var c32 = document.getElementById("curve-3-2");
    var c33 = document.getElementById("curve-3-3");
    var c34 = document.getElementById("curve-3-4");
    var c35 = document.getElementById("curve-3-5");

    var tl = new TimelineMax({
        repeat: -1,
        yoyo: true
    });

    tl
        //curve 1
        .set(c11, {
            css: {
                fill: "#ff500a"
            }
        })
        .set(c12, {
            css: {
                fill: "none"
            }
        })
        .set(c13, {
            css: {
                fill: "none"
            }
        })
        .set(c14, {
            css: {
                fill: "none"
            }
        })
        .set(c15, {
            css: {
                fill: "none"
            }
        })
        .to(c11, 5, {
            morphSVG: c12,
            ease: Power0.easeNone
        })
        .to(c11, 5, {
            morphSVG: c11,
            ease: Power0.easeNone
        })
        .to(c11, 5, {
            morphSVG: c13,
            ease: Power0.easeNone
        })
    //curve 2

    var tl2 = new TimelineMax({
        repeat: -1,
        yoyo: true
    });

    tl2
        .set(c21, {
            css: {
                fill: "#ffd7af"
            }
        })
        .set(c22, {
            css: {
                fill: "none"
            }
        })
        .set(c23, {
            css: {
                fill: "none"
            }
        })
        .set(c24, {
            css: {
                fill: "none"
            }
        })
        .set(c25, {
            css: {
                fill: "none"
            }
        })
        .to(c21, 5, {
            morphSVG: c22,
            ease: Power0.easeNone
        })
        .to(c21, 5, {
            morphSVG: c24,
            ease: Power0.easeNone
        })
        .to(c21, 5, {
            morphSVG: c23,
            ease: Power0.easeNone
        })

    var tl3 = new TimelineMax({
        repeat: -1,
        yoyo: true
    });

    tl3
        .set(c31, {
            css: {
                fill: "#ffd7af"
            }
        })
        .set(c32, {
            css: {
                fill: "none"
            }
        })
        .set(c33, {
            css: {
                fill: "none"
            }
        })
        .set(c34, {
            css: {
                fill: "none"
            }
        })
        .set(c35, {
            css: {
                fill: "none"
            }
        })
        .to(c31, 5, {
            morphSVG: c32,
            ease: Power0.easeNone
        })
        .to(c31, 5, {
            morphSVG: c34,
            ease: Power0.easeNone
        })
        .to(c31, 5, {
            morphSVG: c33,
            ease: Power0.easeNone
        })


    var quoteLink = $("#quote-insert").data("html-link");

    $(window).resize(function(e) {
        var $carousel = $('.skill-icons');
        /* Initializes a slick carousel only on mobile screens */
        // slick on mobile

        if ($(window).width() > 768) {
            $("#quote-insert").load(quoteLink, function(responseTxt, statusTxt, xhr) {
                if (statusTxt == "success")
                    quoteLoadDesktop();
                if (statusTxt == "error")
                    alert("Error: " + xhr.status + ": " + xhr.statusText);
            });

            if ($carousel.hasClass('slick-initialized')) {
                $carousel.slick('unslick');
            }


            elTrigger = triggerPos($('.skill-icons'), -100);
            triggered = false;
            $(window).scroll(function() {
                var st = $(this).scrollTop();
                if (!triggered && st >= elTrigger) {
                    triggered = true;
                    openAnimation();
                }
            })

            function openAnimation() {

                var tweenCovers = TweenMax.staggerFromTo(".skill-icons a>img", .6, {
                    y: 100,
                    opacity: 0
                }, {
                    y: 0,
                    opacity: 1,
                    visibility: "visible",
                    ease: Linear.easeNone
                }, 0.2);
            }

            function triggerPos(el, buffer) {
                return el.offset().top - el.height() + buffer;
            }


        } else {


            $("#quote-insert").load(quoteLink, function(responseTxt, statusTxt, xhr) {
                if (statusTxt == "success")
                    quoteLoadMobile();
                if (statusTxt == "error")
                    alert("Error: " + xhr.status + ": " + xhr.statusText);
            });


            if (!$carousel.hasClass('slick-initialized')) {

                var combinedHTML = "";
                $(".skill-icons").each(function() {
                    combinedHTML += $(this).html();
                });

                $(".skill-icons").not(':first').remove();
                $(".skill-icons").html(combinedHTML);

                $carousel.slick({
                    centerMode: true,
                    slidesToShow: 3,
                    variableWidth: true,
                    mobileFirst: true,
                });

            }
        }
    }).resize();




    $(".reader-eng, .reader-es").on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#curve-test1").offset().top
        }, 2000);
    });


    $("#discover-more").click(function() {
        $(".hide-books").slideToggle('medium', function() {
            if ($(this).is(':visible'))
                $(this).css('display', 'flex');
        });
        return false;
    })


    var isMobile = (function(a) {
        return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
    })(navigator.userAgent || navigator.vendor || window.opera);

    if (!isMobile) {


        var controller = new ScrollMagic.Controller();

        //purchase section
        var purchaseOut = new ScrollMagic.Scene({
                triggerHook: 'onLeave',
                triggerElement: "#section-six",
                duration: 300,
                offset: 150,
                yoyo: true
            })
            .setTween("#section-six .device", 2, {
                css: {
                    scale: 1
                },
                ease: Quad.easeInOut
            })
            .addTo(controller);
        var purchaseIn = new ScrollMagic.Scene({
                triggerElement: "#section-six",
                offset: 150,
                duration: 300,
            })
            .setTween("#section-six .device", 2, {
                css: {
                    scale: 1.3
                },
                ease: Quad.easeInOut
            })
            .addTo(controller);


        var unlockOut = new ScrollMagic.Scene({
                triggerElement: "#section-seven",
                duration: 300,
                offset: 150,
                yoyo: true
            })
            .setTween("#section-seven .device", 2, {
                css: {
                    scale: 1
                },
                ease: Quad.easeInOut
            })
            .addTo(controller);

        var unlockIn = new ScrollMagic.Scene({
                triggerElement: "#section-seven",
                triggerHook: 'onEnter',
                offset: 150,
                duration: 300,
            })
            .setTween("#section-seven .device", 2, {
                css: {
                    scale: 1.3
                },
                ease: Quad.easeInOut
            })
            .addTo(controller);

        //whole story section
        var wholestoryOut = new ScrollMagic.Scene({
                triggerElement: "#section-eight",
                duration: 300,
                offset: 150,
                yoyo: true
            })
            .setTween("#whole-story .device", 2, {
                css: {
                    scale: 1
                },
                ease: Quad.easeInOut
            })
            .addTo(controller);
        var wholestoryIn = new ScrollMagic.Scene({
                triggerElement: "#section-eight",
                offset: 150,
                triggerHook: 'onEnter',
                duration: 300,
            })
            .setTween("#whole-story .device", 2, {
                css: {
                    scale: 1.3
                },
                ease: Quad.easeInOut
            })
            .addTo(controller);



        var unlock1 = new ScrollMagic.Scene({
                triggerElement: "#section-six",
                offset: 10,
                duration: 300,
                reverse: false,
            })
            .setTween("#section-six .absolute", 2, {
                x: -550,
                delay: 1
            })
            .addTo(controller);

        var unlock2 = new ScrollMagic.Scene({
                triggerElement: "#section-seven",
                triggerHook: 'onEnter',
                offset: 20,
                duration: 300,
                reverse: false,

            })
            .setTween("#section-seven .absolute", 2, {
                x: -600,
                delay: 2
            })
            .addTo(controller);

        var unlock3 = new ScrollMagic.Scene({
                triggerElement: "#section-eight",
                triggerHook: 'onEnter',
                offset: 30,
                duration: 300,
                reverse: false,
            })
            .setTween("#section-eight .absolute", 2, {
                x: -677,
                delay: 3
            })
            .addTo(controller);


        var section2Tween = TweenMax.fromTo("#section-two .inner-content", 10, {
            y: 300,
            autoAlpha: 1
        }, {
            y: 0,
            delay: 2
        });

        var section3Tween = TweenMax.fromTo("#section-three .inner-content", 1, {
            y: 300
        }, {
            y: 0
        });

        var section4Tween = TweenMax.fromTo("#section-four .inner-content", 1, {
            y: 300
        }, {
            y: 0
        });

        var section2 = new ScrollMagic.Scene({
                triggerElement: "#section-two",
                triggerHook: 'onEnter',
                duration: 300,
            })
            .setTween(section2Tween)
            .addTo(controller);


        var section3 = new ScrollMagic.Scene({
                triggerElement: "#section-three",
                triggerHook: 'onEnter',
                duration: 300,
            })
            .setTween(section3Tween)
            .addTo(controller);


        var section4 = new ScrollMagic.Scene({
                triggerElement: "#section-four",
                triggerHook: 'onEnter',
                duration: 300,
            })
            .setTween(section4Tween)
            .addTo(controller);



    }




});


var length = 0


function quoteLoadMobile() {
    $('.quote-block').each(function() {
        $(this).show();
        $quote = $(this).html();
        $truncatedText = $quote.split(' ').slice(0, 50).join(' ') + " ... " + '<a href="#" class="read-more orange-text">Read more</a>'
        $(this).data('content', $(this).html())
        $(this).data('limit', $truncatedText)
        $(this).html($(this).data('limit'))
    });

    $("body").on("click", ".read-more", function() {
        var $this = $(this);
        var elP = $this.parent('blockquote');
        length = elP.text().split(' ').length;
					if (length == 53) {
	            elP.html(elP.data('content') + '<a href="#" class="read-more orange-text">Read less</a>');
							elP.slideDown();

	        } else {
	            elP.html(elP.data('limit'));
							elP.slideDown();
							
	        } 


        return false

    });
}

function quoteLoadDesktop() {

    $("body").on("click", "#close-btn", function() {
        $("#background-modal").fadeOut(300, function() {
            $(this).remove();
        });
    });


    $(".quote-text blockquote").each(function() {
        $quote = $(this).html();
        $sig = $(this).siblings("figcaption").html()
        $(this).attr({
            "data-quote": $quote,
            "data-sig": $sig
        });
        $(this).html($quote.split(' ').slice(0, 80).join(' ') + " ... " + '<a href="#" class="read-more orange-text">Read more</a>');
        $(this).show();
    });

    $(".quote-text blockquote").on("click", function() {


        var modalText = new TimelineMax();

        $backgroundDiv = $("<div/>", {
            id: "background-modal",
            "class": "a"
        }).append(
            $("<div/>", {
                id: "full-quote-wrapper"
            }).append(
                $("<div/>", {
                    id: "full-quote-inner"
                }).append(
                    $("<blockquote/>", {
                        id: "full-quote",
                        class: "white-text light-text"
                    })
                ).append(
                    $("<figcaption/>", {
                        id: "full-sig",
                        class: "a-right white-text light-text margin-t"
                    })
                )
            ).append(
                $("<div/>", {
                    id: "close-btn"
                })
            )
        );

        $("body").prepend($backgroundDiv);
        $("#full-quote").html($(this).data("quote"));
        $("#full-sig").html($(this).data("sig"));
        modalText.set("#full-quote-wrapper", {
            autoAlpha: 1
        });
        modalText.set('#full-quote-wrapper', {
            className: '+=text-fuzz'
        });

        return false;

    });
}