


var Sammy = new $.sammy(function () {

    this.element_selector = '#Contenedor';

    this.get('#ejemplo1', function (context) {

        context.$element().load("Views/ejemplo1.html", function () {
            //Ready de Home
            ready();
        });

    });


    this.get('#ejemplo2', function (context) {

        context.$element().load("Views/ejemplo2.html", function () {
            //Ready de Home
            ready();
        });

    });


    this.get('#ejemplo3', function (context) {

        context.$element().load("Views/ejemplo3.html", function () {
            //Ready de Home
            ready();
        });

    });



});

$(function () {
    Sammy.run('#ejemplo1');
});