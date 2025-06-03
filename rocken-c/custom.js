jQuery(function ($) {
    $('#subscribe button').on('click', function (e) {
        e.preventDefault();
        let pattern = /\S+@\S+\.\S+/;
        $('#subscribe').removeClass('invalid');
        $('#subscribe input').each(function(){
            $(this).css('border-color', 'var(--color-9)');
            if ($(this).val() == '' || ($(this).attr('type') == 'email' && !pattern.test($(this).val()))) {
                $(this).css('border-color', 'red');
                $('#subscribe').addClass('invalid');
            }
        })
        if ($('#subscribe').hasClass('invalid')) return;
        $.ajax({
            url: '/wp-admin/admin-ajax.php',
            type: 'POST',
            data: $('#subscribe').serialize() + '&action=sendSubscribe',
            datatype: 'json',
            success: function () {
                $('#modal_1 .modal-close').trigger('click');
                $('#subscribe').trigger('reset');
                $("html, body").animate({ scrollTop: 0 }, "slow");
            }
        });
    });

    $('.section--blog__nav a').on('click', function (e) {
        e.preventDefault();
        if ($(this).parent().hasClass('active')) return;
        $('.section--blog__nav li').removeClass('active');
        $(this).parent().addClass('active');
        let id = $(this).data('id');
        let slug = $(this).data('slug');
        let count = $(this).closest('section').data('count');
        $.ajax({
            url: '/wp-admin/admin-ajax.php',
            type: 'POST',
            data: { 
                action: 'blog_cat',
                id: id,
                count: count,
                slug: slug
            },
            datatype: 'json',
            success: function (response) {
                if ($('.section--blog__right').length > 0) {
                    $('.section--blog__right').replaceWith(response);
                } else {
                    $('.section--blog .section__container').append(response);
                }
                if (slug == 'blog') {
                    history.pushState({}, null, window.location.origin + '/' + slug + '/');
                } else {
                    history.pushState({}, null, window.location.origin + '/category/' + slug + '/');
                }
            }
        });
    });

    $('#job-form').on('submit', function (e) {
        e.preventDefault();
        let search = $('#job-form input').val();
        let url = themeJsVars.jobs_url;
        if (!search || !url) return;
        $('#job-form input').val('');
        window.open(url + 'jobs/?keywords_text%5B%5D=' + search);
    });
});
