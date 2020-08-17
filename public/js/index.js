$(document).ready(function(){
    $(function() {
        $('#scrollIndicator').on('click', function(e) {
            e.preventDefault();
            if (!(window.innerHeight + window.scrollY >= document.body.scrollHeight)) {
                $('html, body').animate({ scrollTop: $('#myDescription').offset().top-20}, 900, 'linear');
            }
        });
    });
});
