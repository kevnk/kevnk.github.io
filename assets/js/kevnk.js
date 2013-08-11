(function($, window, document, undefined){
    $('a[rel="external"]').on('click',function(){
        $(this).attr('target','_blank');
    })

    // Menu Link
    $('a.mobile-menu').on('click',function(e){
        e.preventDefault();
        $('nav').add($(this)).toggleClass('active');
        return false;
    });

    // Toggle Link
    $('a[data-toggle]').on('click',function(e){
        e.preventDefault();
        var targetSelector = $(this).data('toggle');
        $( targetSelector ).toggle();
        return false;
    });

})(jQuery, this, document)