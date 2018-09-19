$(document).foundation();
(function(){
    var map;

    function initMap() {
        var position = {
                lat: 50.441809,
                lng: 30.666678
            };
        map = new google.maps.Map(document.getElementById('map'), {
            center: position,
            zoom: 18
        });
        var marker = new google.maps.Marker({position: position, map: map});
    }
})();


