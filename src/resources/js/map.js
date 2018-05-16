// map center
//var center = new google.maps.LatLng(40.589500, -8.683542);
var center = new google.maps.LatLng(10.773024, 106.666043);

// marker position
//var factory = new google.maps.LatLng(40.589500, -8.683542);
var factory = new google.maps.LatLng(10.773024, 106.666043);//Trường ĐH Y Khoa Phạm Ngọc Thạch


var iconBase = "assets/index/imgs/logo_54x54.png";

var styledMapType = new google.maps.StyledMapType(
            [
			  {
				"elementType": "geometry",
				"stylers": [
				  {
					"color": "#f5f5f5"
				  }
				]
			  },
			  {
				"elementType": "labels.icon",
				"stylers": [
				  {
					"visibility": "off"
				  }
				]
			  },
			  {
				"elementType": "labels.text.fill",
				"stylers": [
				  {
					"color": "#616161"
				  }
				]
			  },
			  {
				"elementType": "labels.text.stroke",
				"stylers": [
				  {
					"color": "#f5f5f5"
				  }
				]
			  },
			  {
				"featureType": "administrative.land_parcel",
				"elementType": "labels.text.fill",
				"stylers": [
				  {
					"color": "#bdbdbd"
				  }
				]
			  },
			  {
				"featureType": "landscape.man_made",
				"elementType": "geometry.fill",
				"stylers": [
				  {
					"color": "#e7f8f0"
				  }
				]
			  },
			  {
				"featureType": "poi",
				"elementType": "geometry",
				"stylers": [
				  {
					"color": "#eeeeee"
				  }
				]
			  },
			  {
				"featureType": "poi",
				"elementType": "labels.text.fill",
				"stylers": [
				  {
					"color": "#757575"
				  }
				]
			  },
			  {
				"featureType": "poi.park",
				"elementType": "geometry",
				"stylers": [
				  {
					"color": "#e5e5e5"
				  }
				]
			  },
			  {
				"featureType": "poi.park",
				"elementType": "labels.text.fill",
				"stylers": [
				  {
					"color": "#9e9e9e"
				  }
				]
			  },
			  {
				"featureType": "road",
				"elementType": "geometry",
				"stylers": [
				  {
					"color": "#ffffff"
				  }
				]
			  },
			  {
				"featureType": "road.arterial",
				"elementType": "labels.text.fill",
				"stylers": [
				  {
					"color": "#757575"
				  }
				]
			  },
			  {
				"featureType": "road.highway",
				"elementType": "geometry",
				"stylers": [
				  {
					"color": "#dadada"
				  }
				]
			  },
			  {
				"featureType": "road.highway",
				"elementType": "labels.text.fill",
				"stylers": [
				  {
					"color": "#616161"
				  }
				]
			  },
			  {
				"featureType": "road.local",
				"elementType": "labels.text.fill",
				"stylers": [
				  {
					"color": "#9e9e9e"
				  }
				]
			  },
			  {
				"featureType": "transit.line",
				"elementType": "geometry",
				"stylers": [
				  {
					"color": "#e5e5e5"
				  }
				]
			  },
			  {
				"featureType": "transit.station",
				"elementType": "geometry",
				"stylers": [
				  {
					"color": "#eeeeee"
				  }
				]
			  },
			  {
				"featureType": "water",
				"elementType": "geometry",
				"stylers": [
				  {
					"color": "#c9c9c9"
				  }
				]
			  },
			  {
				"featureType": "water",
				"elementType": "labels.text.fill",
				"stylers": [
				  {
					"color": "#9e9e9e"
				  }
				]
			  }
			],
            {name: 'Styled Map'});
			
function initialize() {
	var mapOptions = {
		center: center,
		zoom: 16,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	  };	
	
	
	var map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);
		map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');
   
	var contentString = '<div dir="ltr" jstcache="0"><div jstcache="33" class="poi-info-window gm-style"> <div jstcache="2"> <div jstcache="3" class="title full-width" jsan="7.title,7.full-width">Trường Đại học Y Khoa PHẠM NGỌC THẠCH</div> <div class="address"> <div jstcache="4" jsinstance="0" class="address-line full-width" jsan="7.address-line,7.full-width">86/2 Thành Thái</div><div jstcache="4" jsinstance="1" class="address-line full-width" jsan="7.address-line,7.full-width">phường 12</div><div jstcache="4" jsinstance="2" class="address-line full-width" jsan="7.address-line,7.full-width">Quận 10</div><div jstcache="4" jsinstance="*3" class="address-line full-width" jsan="7.address-line,7.full-width">Hồ Chí Minh, Việt Nam</div> </div> </div> <div jstcache="5" style="display:none"></div> <div class="view-link"> <a target="_blank" jstcache="6" href="https://maps.google.com/maps?ll=10.773124,106.666075&amp;z=15&amp;hl=vi-VN&amp;gl=US&amp;mapclient=apiv3&amp;cid=12068965983834636512"> <span>Xem trên Google Maps</span> </a> </div> </div></div>';
	
	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});	
	
	var marker = new google.maps.Marker({
		position: factory,
		map: map,
		icon: iconBase 
	});
	
	//infowindow.open(map,marker);// tắt/mở info window
	
	marker.addListener('mouseover', function() {
		//infowindow.open(map, marker);
	});
  
  
	//Resize Function
	google.maps.event.addDomListener(window, "resize", function() {
		var center = map.getCenter();
		google.maps.event.trigger(map, "resize");
		map.setCenter(center);
	});

}
google.maps.event.addDomListener(window, 'load', initialize);