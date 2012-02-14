$.getJSON('https://graph.facebook.com/adream114',function( d ){

    $( 'img.friend' ).attr( 'src', 'http://graph.facebook.com/' + d.id + '/picture/?type=large' );
});