(function($, window, document, undefined){
    $('a[rel="external"]').on('click',function(){
        $(this).attr('target','_blank');
    })

    // Menu Link
    $('a.mobile-menu').on('click',function(e){
        e.preventDefault();
        $('header').add($(this)).toggleClass('nav-shown');
        return false;
    });

    // Toggle Link
    $('a[data-toggle]').on('click',function(e){
        e.preventDefault();
        var targetSelector = $(this).data('toggle');
        $( targetSelector ).toggle();
        return false;
    });

    // Highlight code
    hljs.initHighlightingOnLoad();

    // Maintain blog list image top
    var fullPageWidth = 800;
    var $blogListImgs = $('#blog ul.blog-posts img')
    $blogListImgs.each(function(){
        var $img = $(this);
        var $par = $img.parent();
        var imgTop = parseInt($img.css('top'), 10);
        var parH = parseInt($par.css('height'), 10);
        $img.data('top-aspect-ratio', imgTop / fullPageWidth);
        $par.data('height-aspect-ratio', parH / fullPageWidth);
    });

    /**
     * keep top style ratio to the original
     * set parent height no higher than the image shown
     */
    var maintainImageTopAspect = function() {
        $blogListImgs.each(function(){
            var $img = $(this);
            var newTop = $img.width() * $img.data('top-aspect-ratio');
            $img.css('top', newTop);

            var $par = $img.parent();
            var newHeight = $par.width() * $par.data('height-aspect-ratio');
            $par.css('height', newHeight);
        });
    }

    $(window).on('resize', maintainImageTopAspect).trigger('resize');

})(jQuery, this, document)