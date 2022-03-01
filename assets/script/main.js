// external js: flickity.pkgd.js
var flkty = new Flickity( '.carousel', {
    prevNextButtons: false,
    wrapAround: true,
    autoPlay: 10000, //10 seconds delay
    imagesLoaded: true,
    percentPosition: false
});
if (flkty) {
    var caption = document.querySelector('.carousel-caption');
    if (caption) {
        flkty.on( 'select', function() {
        // set image caption using img's alt
        caption.textContent = flkty.selectedElement.querySelector('img').alt;
        });
    }
}