// Version : 1.0
// Last edited by: Eunsil Lim
// Last edit date: 13 - Nov - 2019
//smooth scrolling effect
// when click gallery button(#gallery-btn) which is placed on carousel, moving smoothly to gallery(#gallrey)

$('#gallery-btn').on('click',function(){
    const images = $('#gallery').position().top;

    $('html,body').animate(

        {
            scrollTop:images
        },900
    );

});


// light box juery
// inner gallery section, when clicking the photo, popping up full size of the photo
$(function(){
    const $gallery=$('.gallery_img a').simpleLightbox();
})

// map api
// latitude/ longitude  -37.937882, 145.051056
var mymap = L.map('mapid').setView([-37.937882, 145.051056], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 25,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets'
}).addTo(mymap);

L.marker([-37.937882, 145.051056]).addTo(mymap);

L.circle([-37.937882, 145.051056], {
    color: '#096',
    fillColor: '#096',
    fillOpacity: 0.5,
    radius: 300
}).addTo(mymap);

L.polygon([
[-37.937882, 145.051056]
]).addTo(mymap);