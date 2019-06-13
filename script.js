$(document).ready(function(){
    $("#biobutton").click(function(){
        $( "#contentbox" ).load( 'HtmlFiles/biography.html' );
    });
    $("#contactbutton").click(function(){
        $( "#contentbox" ).load( 'HtmlFiles/contact.html' );
    });
    $("#gallerybutton").click(function(){
        $( "#contentbox" ).load( 'HtmlFiles/gallery.html' );
    });
    
});