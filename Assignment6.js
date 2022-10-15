$(document).ready(function() {
    var window_width = $(window).width();
    var main_width = $(".main_container").width();
    var long_container = $(".long_container");
    var item = $(".item");
    var slide_number = 0;

    long_container.css("width", main_width * 3.5);
    item.css("width", long_container.width() / 10);

    $(".see_next").click(function() {
        if (slide_number < 7) {
            slide_number++

            if (slide_number == 7) {
                $(".see_next").animate({ opacity: 0 });
            } else {
                $(".see_next").animate({ opacity: 1 });
            }
            if (slide_number == 0) {
                $(".see_previous").animate({ opacity: 0 });
            } else {
                $(".see_previous").animate({ opacity: 1 });
            }
            var item_width = $(".item").width();
            var pixels_moved = item_width * slide_number;

            long_container.animate({
                marginLeft: -pixels_moved
            });
        }
    });

    $(".see_previous").click(function() {
        if (slide_number > 0) {
            slide_number--

            if (slide_number == 0) {
                $(".see_previous").animate({ opacity: 0 });
            } else {
                $(".see_previous").animate({ opacity: 1 });
            }
            if (slide_number == 7) {
                $(".see_next").animate({ opacity: 0 });
            } else {
                $(".see_next").animate({ opacity: 1 });
            }
            var item_width = $(".item").width();
            var pixels_moved = item_width * slide_number;

            long_container.animate({
                marginLeft: -pixels_moved
            });
        }
    });
});
$(document).ready(function() {
    $('#divID img').on({
        mouseover: function() {
            $(this).css({
                'cursor': 'pointer',
                'border-Color': 'red'
            });
        },
        mouseout: function() {
            $(this).css({
                'cursor': 'default',
                'border-Color': 'grey'
            });
        },
        click: function() {
            var imageUrl = $(this).attr('src');
            $('#mainImage').attr('src', imageUrl);

        }
    });
});