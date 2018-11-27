$( function() {

    // WEBSITE FADE IN EFFECT
    $( 'body' ).hide().delay(1500).fadeIn({ 'duration' : 1000 });

    // TOGGLE LANDING PAGE
    $(window).scroll(() => {

        if( $(window).scrollTop() > 50 ) {
            $('#hero').fadeOut({ 'duration' : 100 });
            $('#sig').fadeIn({ 'duration' : 100 });
            
        } else {
            $('#hero').fadeIn({ 'duration' : 100 });
            $('#sig').fadeOut({ 'duration' : 100 });
        }
        
    });

    
});