var pictures = ('beach.png','5photo.png', '4photo.png', '3photo.png', '2photo.png');

var slider = document.querySelector ('#slider');
var img = slider.querySelector('img');

var i = 0;
window.setInterval (function () {
    
    img.src = 'pictures/' + pictures[i];

    i++;

    if (i == pictures.length) {
        i = 0;
    }
}, 2000);