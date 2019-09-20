$(function(){
    var words = [
        'Photos',
        'Actions',
        'Reportages',
        'Responsables',
        'Et Solidaires'
    ],
    i=0;
    
    // Gestion de l'affichage des mots constituant le nom de l'association
    
    setInterval(function() {
        $('#titre').fadeOut(function(){
            $(this).html(words[i=(i+1) % words.length]).fadeIn();
        });
    },1000);
    
// Gestion du scroll vers les différentes sections du site 
    
    $('.scroll').click(function() {
        var section = $('.' + this.id);
        $('html, body').animate({scrollTop: section.offset().top},'slow');
    });
//Gestion du scroll vers le haut de la page quand on clique sur les fléches
    
    $('.scroll-top').click(function(){
        $('html,body').animate({scrollTop: 0},'slow');
    });

});