$(function() {
    hideAllProducts();

    var product = getParameterByName('product') || 26;
    var slide = getParameterByName('slide') || 20;

    showProduct(product);

    var $slider = $('#screeningSlider');
    var $value = $('#value');

    $slider.ionRangeSlider({
        hide_min_max: true,
        keyboard: true,
        from: slide,
        min: 1,
        max: 2000,
        step: 1,
        grid_num: 4,
        prettify_separator: ',',
        postfix: ' Units',
        max_postfix: '+',
        keyboard_step: 1,
        force_edges: true,

        onStart: function (value) {
            screeningSliderAction(value.from);
        },
        onChange: function (value) {
            screeningSliderAction(value.from);
        },
        onFinish: function (value) {
            screeningSliderAction(value.from);
        },
        onUpdate: function (value) {
            screeningSliderAction(value.from);
        }
    });

    $slider.on('change', function() {
        var $this = $(this),
        value = $this.prop('value');
        productSliderOnChange(value);
    });

    function screeningSliderAction(value) {
        $value.text(value);
    }

    function productSliderOnChange(value) {
        $value.text(value);

        if (value == 0) {
            hideAllProducts();
        } else if ((value > 0) && (value <= 20)) {
            hideAllProducts();
            showProduct(25);
        } else if ((value >= 21) && (value <= 60)) {
            hideAllProducts();
            showProduct(26);
        } else if ((value >= 61) && (value <= 120)) {
            hideAllProducts();
            showProduct(1);
        } else if ((value >= 121) && (value <= 180)) {
            hideAllProducts();
            showProduct(2);
        } else if ((value >= 181) && (value <= 360)) {
            hideAllProducts();
            showProduct(3);
        } else if ((value >= 361) && (value <= 580)) {
            hideAllProducts();
            showProduct(4);
        } else if ((value >= 581) && (value <= 780)) {
            hideAllProducts();
            showProduct(5);
        } else if ((value >= 781) && (value <= 980)) {
            hideAllProducts();
            showProduct(6);
        } else if ((value >= 981) && (value <= 1180)) {
            hideAllProducts();
            showProduct(7);
        } else if ((value >= 1181) && (value <= 1380)) {
            hideAllProducts();
            showProduct(8);
        } else if ((value >= 1381) && (value <= 1580)) {
            hideAllProducts();
            showProduct(9);
        } else if ((value >= 1581) && (value <= 1780)) {
            hideAllProducts();
            showProduct(10);
        } else if ((value >= 1781) && (value <= 1980)) {
            hideAllProducts();
            showProduct(11);
        } else if ((value >= 1981)) {
            hideAllProducts();
            showProduct(12);
        } else {
            hideAllProducts();
            showProduct(26);
        }
    }

    function hideAllProducts() {
        $('#Product25').hide();
        $('#Product26').hide();
        $('#Product1').hide();
        $('#Product2').hide();
        $('#Product3').hide();
        $('#Product4').hide();
        $('#Product5').hide();
        $('#Product6').hide();
        $('#Product7').hide();
        $('#Product8').hide();
        $('#Product9').hide();
        $('#Product10').hide();
        $('#Product11').hide();
        $('#Product12').hide();
    }

    function showProduct(productId) {
        var product = '#Product' + productId;
        $(product).show();
    }

    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }
});
