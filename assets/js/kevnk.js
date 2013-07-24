(function($, window, document, undefined){
    $('a[rel="external"]').on('click',function(){
        $(this).attr('target','_blank');
    })


})(jQuery, this, document)