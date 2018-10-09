$(function(){
$('.wrap-slider').owlCarousel({
	loop: true,
    responsive: {
        0:{
            items: 3
        },
        320:{
            items: 5
        },

    }
})

$(document).on('click','.self-question',function(e){
        e.preventDefault();
        var t = $(this),
            n = $('.self-question span'),
            h = t.hasClass('opened'),
            f = $('.self-question').hasClass('opened'),
            m = t.children('.self-question span'),
            b = t.next('p');
            n.next().not(t.next()).slideUp(500)
                    .prev()
                    .children('p')
                    .text('+')
                    .parent()
                    .removeClass('opened');
            b.slideToggle(500)
                    .prev()
                    .children('p')
                    .text('-')
                    .parent()
                    .addClass('opened')
            if(h)
                t.toggleClass('opened')
                 .children('p')
                 .text('+')
            else
                m.text('-')
    })
    $('[modal]').click(function(){
        var t = $(this),
            i = t.attr('id'),
            b = $('.wrap-modal'),
            h = t.hasClass('close');

        if(h){
            var id = t.attr('modal'),
                obj = $('#'+id);
                b.fadeOut();
                obj.fadeOut();
        }else{
            var id = t.attr('modal'),
                        obj = $('#'+id);
                        b.fadeIn().css({'display':'flex'});
                        obj.fadeIn();

        }
    })
    $("a[href*='#']").on("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 777);
        e.preventDefault();
        return false;
    });




})
