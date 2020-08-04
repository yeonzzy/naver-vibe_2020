$('.navInfo >ul >li h1 a').hover(
    function() {
        $(this).css({
            textDecoration: 'underline'
        });
        $('.navThumbnail a').css({
            background: 'linear-gradient(to bottom, #fff0 70%, #0007)'
        });
    },
    function() {
        $(this).css({
            textDecoration: 'none'
        });
        $('.navThumbnail a').css({
            background: 'rgba(0,0,0,0)'
        });
    }
);