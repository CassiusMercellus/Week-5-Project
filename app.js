$(function() {
    var navItems = $('.navItem');
    navItems.css('color', 'white');
    var navElement = $('#nav');
    navElement.css('background-color', '#145');
    var evenListItems = $('ul li:even');
    evenListItems.css('background-color', '#ccc');
    var oddListItems = $('ul li:odd');
    oddListItems.css('background-color', '#aaa');
    var inputField = $('input#myInput');
    inputField.val('Cassius');
});
