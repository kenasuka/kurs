var timer;
document.addEventListener('mousemove', function() {
    document.body.style.cursor = 'default';
    clearTimeout( timer );
    timer = setTimeout(function() {
        document.body.style.cursor = 'none';
    }, 2000 );
}, false )