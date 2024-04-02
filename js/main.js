$(function() {
  // Auto play modal video
  $('.video').click(function() {
    var theModal = $(this).data('target'),
      videoSRC = $(this).attr('data-video'),
      videoSRCauto =
        videoSRC +
        '?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1';
    $(theModal + ' iframe').attr('src', videoSRCauto);
    $(theModal + ' button.close').click(function() {
      $(theModal + ' iframe').attr('src', videoSRC);
    });
  });
});

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});
$('.slider').slick({
  infinite: true,
  slideToShow: 1,
  slideToScroll: 1
});

function openTab(evt, exerciseName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }
  tablinks = document.getElementsByClassName('tablinks');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }

  document.getElementById(exerciseName).style.display = 'block';
  evt.currentTarget.className += ' active';
}

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -1.292066, lng: 36.821946 },
    zoom: 12,
    styles: [
      {
        elementType: 'geometry',
        stylers: [
          {
            color: '#242f3e'
          }
        ]
      },
      {
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#746855'
          }
        ]
      },
      {
        elementType: 'labels.text.stroke',
        stylers: [
          {
            color: '#242f3e'
          }
        ]
      },
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#d59563'
          }
        ]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#d59563'
          }
        ]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [
          {
            color: '#263c3f'
          }
        ]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#6b9a76'
          }
        ]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [
          {
            color: '#38414e'
          }
        ]
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [
          {
            color: '#212a37'
          }
        ]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#9ca5b3'
          }
        ]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [
          {
            color: '#746855'
          }
        ]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [
          {
            color: '#1f2835'
          }
        ]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#f3d19c'
          }
        ]
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [
          {
            color: '#2f3948'
          }
        ]
      },
      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#d59563'
          }
        ]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [
          {
            color: '#17263c'
          }
        ]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#515c6d'
          }
        ]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [
          {
            color: '#17263c'
          }
        ]
      }
    ]
  });
}
