$(document).ready(function(){
    $("#nav-mobile").html($("#nav-main").html());
    $("#nav-trigger span").click(function(){
        if ($("nav#nav-mobile ul").hasClass("expanded")) {
            $("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
            $(this).removeClass("open");
        } else {
            $("nav#nav-mobile ul").addClass("expanded").slideDown(250);
            $(this).addClass("open");
        }
    });

    $(document).on("scroll", onScroll);

    //smoothscroll
    $('nav a[href^="#"]').on('click', function (e) {
     e.preventDefault();
     $(document).off("scroll");

     $('nav a').each(function () {
       $(this).removeClass('active');
     })
     $(this).addClass('active');

     var target = this.hash,
     menu = target;
     $target = $(target);
     $('html, body').stop().animate({
       'scrollTop': $target.offset().top-50
     }, 500, 'swing', function () {
       window.location.hash = target;
       $(document).on("scroll", onScroll);
     });
   });

});

$(window).load(function() {

  $(".loader_inner").fadeOut();
  $(".loader").delay(400).fadeOut("slow");

});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('nav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        refPos = refElement.position().top - 65;
        if (refPos <= scrollPos && refPos + refElement.height() > scrollPos) {
            $('nav ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });


    // var doch = $(document).height();
    // var docw = $(document).width();

    // curWidth = $('#pos-line').width();

    // $('#pos-line').stop().animate({'width': curWidth+"px"}, 500);


    // $('#pos-line').animate({
    //            width: scrollPos
    //        }, 500);
}
/*---Menu Scroll---*/

/*-----Bottom line with scroll-----*/
$(function () {
    $(window).scroll(function () {
        var $myDiv = $('#pos-line');
        var curPos = $(this).scrollTop();

        var doch = $(document).height() - $(window).height();
        var docw = $(document).width();

        hperc = curPos / doch;
        moveto = hperc * docw;

        $myDiv.animate({
            width: moveto
        }, 50);
    }).scroll();
});
/*-----Bottom line with scroll-----*/

/*---Form Validation---*/
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

$(".formValidation").on("submit", function(e){

  emailfield = $(".formValidation").find("input[name='email']");
  emailval = $(".formValidation").find("input[name='email']").val();

  $(".form-field").each(function(){
    var $this = $(this);
    if($this.val() == ""){
      $this.addClass("inputError");
      e.preventDefault();
    }else{
      $this.removeClass("inputError");
      if (!validateEmail(emailval)) {
        emailfield.addClass("inputError");
        e.preventDefault();
      }else{
        emailfield.removeClass("inputError");
        $(".success-submit:hidden").show();
        return true;
      }
    }
  }); //Input
}); //Form .submit
/*---Form Validation---*/

/*---Slider---*/
(function(){
  "use strict";

  var $slider = $('#slider');
  if (!$slider.length) return;

  var $sliderElements = $slider.find('article'),
      sliderElementLastIndex = $sliderElements.length - 1,
      timer,
      actualIndex = 0,
      step = function() {
        clearTimeout(timer);
        timer = setTimeout(function(){
          if (actualIndex < sliderElementLastIndex) {
            actualIndex++;
          } else {
            actualIndex = 0;
          }
          $sliderElements.removeClass('show');
          $sliderElements.eq(actualIndex).addClass('show');

          step();
        },5000);
      };

  clearTimeout(timer);
  step();

})();
/*---Slider---*/


google.maps.event.addDomListener(window, 'load', init);
var map;
function init() {
  var mapOptions = {
    center: new google.maps.LatLng(40.780541,-74.116059),
    zoom: 8,
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.DEFAULT,
    },
    disableDoubleClickZoom: true,
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
    },
    scaleControl: true,
    scrollwheel: false,
    panControl: true,
    streetViewControl: true,
    draggable : true,
    overviewMapControl: true,
    overviewMapControlOptions: {
      opened: true,
    },
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: [
    {
      "featureType": "water",
      "stylers": [
      {
        "visibility": "on"
      },
      {
        "color": "#b5cbe4"
      }
      ]
    },
    {
      "featureType": "landscape",
      "stylers": [
      {
        "color": "#efefef"
      }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
      {
        "color": "#83a5b0"
      }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
      {
        "color": "#bdcdd3"
      }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [
      {
        "color": "#ffffff"
      }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
      {
        "color": "#e3eed3"
      }
      ]
    },
    {
      "featureType": "administrative",
      "stylers": [
      {
        "visibility": "on"
      },
      {
        "lightness": 33
      }
      ]
    },
    {
      "featureType": "road"
    },
    {
      "featureType": "poi.park",
      "elementType": "labels",
      "stylers": [
      {
        "visibility": "on"
      },
      {
        "lightness": 20
      }
      ]
    },
    {},
    {
      "featureType": "road",
      "stylers": [
      {
        "lightness": 20
      }
      ]
    }
    ],
  }
  var mapElement = document.getElementById('GoogleOffice');
  var map = new google.maps.Map(mapElement, mapOptions);
  var locations = [
  ['Google', 'I work here', '6666666666666', 'gugel@gugel.kz', 'gugel.kz', 40.7417806, -74.00450119999999, 'https://mapbuildr.com/assets/img/markers/solid-pin-green.png']
  ];
  for (i = 0; i < locations.length; i++) {
    if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
    if (locations[i][2] =='undefined'){ telephone ='';} else { telephone = locations[i][2];}
    if (locations[i][3] =='undefined'){ email ='';} else { email = locations[i][3];}
    if (locations[i][4] =='undefined'){ web ='';} else { web = locations[i][4];}
    if (locations[i][7] =='undefined'){ markericon ='';} else { markericon = locations[i][7];}
    marker = new google.maps.Marker({
      icon: markericon,
      position: new google.maps.LatLng(locations[i][5], locations[i][6]),
      map: map,
      title: locations[i][0],
      desc: description,
      tel: telephone,
      email: email,
      web: web
    });
    if (web.substring(0, 7) != "http://") {
      link = "http://" + web;
    } else {
      link = web;
    }
    bindInfoWindow(marker, map, locations[i][0], description, telephone, email, web, link);
  }
  function bindInfoWindow(marker, map, title, desc, telephone, email, web, link) {
    var infoWindowVisible = (function () {
      var currentlyVisible = false;
      return function (visible) {
        if (visible !== undefined) {
          currentlyVisible = visible;
        }
        return currentlyVisible;
      };
    }());
    iw = new google.maps.InfoWindow();
    google.maps.event.addListener(marker, 'click', function() {
     if (infoWindowVisible()) {
       iw.close();
       infoWindowVisible(false);
     } else {
       var html= "<div style='color:#000;background-color:#fff;padding:5px;width:150px;'><h4>"+title+"</h4><p>"+desc+"<p><p>"+telephone+"<p><a href='mailto:"+email+"' >"+email+"<a><a href='"+link+"'' >"+web+"<a></div>";
       iw = new google.maps.InfoWindow({content:html});
       iw.open(map,marker);
       infoWindowVisible(true);
     }
   });
    google.maps.event.addListener(iw, 'closeclick', function () {
      infoWindowVisible(false);
    });
  }
}
