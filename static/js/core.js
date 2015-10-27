$(function()
{
    $('.year h2').on('click', function()
    {
        var div        = $(this).parent('.year');
        var year_index = div.data('index');
        var is_active  = div.hasClass('year-active');
        var year       = div.data('year');
        var fragment   = '#';

        $('.year').removeClass('year-active').removeClass('year-inactive');
        $('.posts-' + year).scrollTop(0);
        $('header').removeClass('header-inactive');

        if (!is_active)
        {
            div.addClass('year-active');
            $('.year:not(.year-active)').addClass('year-inactive');
            $('header').addClass('header-inactive');
            $('.year-nav').addClass('year-nav-inactive');

            fragment = fragment + year;
        }
        else
        {
            $('.year-nav').removeClass('year-nav-inactive');
        }

        location.href = fragment;
    });

    $('article').readtime();
});

equalheight = function(container)
{
    var currentTallest = 0,
        currentRowStart = 0,
        rowDivs = new Array(),
        $el,
        topPosition = 0;

    $(container).each(function()
    {
        $el = $(this);
        $($el).height('auto')
        topPostion = $el.position().top;

        if (currentRowStart != topPostion)
        {
            for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++)
            {
                rowDivs[currentDiv].height(currentTallest);
            }

            rowDivs.length  = 0; // empty the array
            currentRowStart = topPostion;
            currentTallest  = $el.height();
            rowDivs.push($el);
        }
        else
        {
            rowDivs.push($el);
            currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
        }

        for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++)
        {
            rowDivs[currentDiv].height(currentTallest);
        }
    });
}

$(window).load(function()
{
    equalheight('.year ul li');
});


$(window).resize(function()
{
    equalheight('.year ul li');
});
