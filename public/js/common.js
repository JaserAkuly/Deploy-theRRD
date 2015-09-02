// Common plugins initialization and other common scripts

// flex-slider is deprecated
// sticky is deprecated because Bootstrap already has navbar-fixed-top

// fix scroll position when navigating to sections (hash)
var shiftWindow = function() {
    scrollBy(0, -90);
};
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);

$(function() {

    var $win = $(window);
    var $html = $('html');

    //parallax
    $win.stellar({
        horizontalScrolling: false,
        responsive: true
        //scrollProperty: 'scroll',
        //parallaxElements: false,
        //horizontalScrolling: false,
        //horizontalOffset: 0,
        //verticalOffset: 0
    });

    // niceScroll
    $html.niceScroll({
        scrollspeed: 50,
        mousescrollstep: 38,
        cursorwidth: 7,
        cursorborder: 0,
        cursorcolor: '#f99200',
        autohidemode: false,
        zindex: 9999999,
        horizrailenabled: false,
        cursorborderradius: 0
    });

    // bootstrap tooltip and popover init
    $("[data-toggle=popover]").popover();
    $("[data-toggle=tooltip]").tooltip();

    // WOW onScroll animation
    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 100, // distance to the element when triggering the animation (default is 0)
        mobile: false // trigger animations on mobile devices (true is default)
    });
    wow.init();
});

function RecaptchaInit() {
    $('.recaptcha').each(function(i, box) {

        var $submit = $(box).closest('form').find('button[type="submit"]');
        $submit.attr('title', 'Please prove that you are not a robot by checking reCaptcha, thank you.');

        var callback = function() {
            $submit.attr('title', '');
            $submit.prop('disabled', false);
        };

        grecaptcha.render(box, {
            sitekey : recaptcha_public_key,
            theme: 'light',
            callback: callback
        });
    });
}

<!--Start of Zopim Live Chat Script-->
/*window.$zopim||(function(d,s){var z=$zopim=function(c){z._.push(c)},$=z.s=
 d.createElement(s),e=d.getElementsByTagName(s)[0];z.set=function(o){z.set.
 _.push(o)};z._=[];z.set._=[];$.async=!0;$.setAttribute('charset','utf-8');
 $.src='//v2.zopim.com/?2Z61BcU7hV5aLP1l2jQOxflNpC0QJivZ';z.t=+new Date;$.
 type='text/javascript';e.parentNode.insertBefore($,e)})(document,'script');*/
<!--End of Zopim Live Chat Script-->

<!-- Google Analytics -->
/*(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function()
 { (i[r].q=i[r].q||[]).push(arguments)}
 ,i[r].l=1*new Date();a=s.createElement(o),
 m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
 })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
 ga('create', 'UA-25587263-1', 'therrd.com');
 ga('require', 'displayfeatures');
 ga('send', 'pageview');*/
<!-- End of Google Analytics -->
