function find(element) {
    navigator.geolocation.getCurrentPosition(function(position) {
        document.querySelector("#location").value = position.coords.latitude + ', ' + position.coords.longitude;
    });
}