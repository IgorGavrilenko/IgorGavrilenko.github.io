;(function () {
    "use strict";
//fixed header
$(function() {
 const header = $('.t-header');
 const headerFixed = 't-header--fixed';
 $(window).scroll(function() {
   if($(this).scrollTop() > 1) {
    header.addClass(headerFixed);
   } else {
    header.removeClass(headerFixed);
   }
 });
});

})();