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

})(jQuery, this, document)