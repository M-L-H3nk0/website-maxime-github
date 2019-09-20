$(function(){
    var words = [
        'Maxime Largent',
        'Maquettiste',
        'Infographiste',
        'Multimédia',
    ],
    i=0;
    
    
    setInterval(function() {
        $('#titre').fadeOut(function(){
            $(this).html(words[i=(i+1) % words.length]).fadeIn();
        });
    },2000);
    
    
    $('.scroll').click(function() {
        var section = $('.' + this.id);
        $('html, body').animate({scrollTop: section.offset().top},'slow');
    });
    
    $('.scroll-top').click(function(){
        $('html,body').animate({scrollTop: 0},'slow');
    });

});