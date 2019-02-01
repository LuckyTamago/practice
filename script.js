$(function(){
  $('.index-btn').click(function(){
    $('.active').removeClass('active');
    var clickedIndex = $('.index-btn').index($(this));
    $('.salon-contents').eq(clickedIndex).addClass('active');
    $('.salon-name').eq(clickedIndex).addClass('active');
  });


$('.mobile-menu').click(function(){
  $('.menu-lists').addClass('active');


});

});
