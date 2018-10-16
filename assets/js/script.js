// $(function(){
//   $("#green").mouseover(function(){
//     $("#text").css("color", "green")
//   });
//   $("#green").mouseout(function(){
//     $("#text").css("color", "black")
//   });
//   $("#red").mouseover(function(){
//     $("#text").css("color", "red")
//   });
//   $("#red").mouseout(function(){
//     $("#text").css("color", "black")
//   });
//   $("#blue").mouseover(function(){
//     $("#text").css("color", "blue")
//   });
//   $("#blue").mouseout(function(){
//     $("#text").css("color", "black")
//   });
// });
//version JP
$(function(){
  $('.color').hover(function(){
    divColor = $(this).attr('id');
    $('#texte').css('color', divColor);
});
    $('.color').mouseout(function(){
    $('#texte').css('color', 'black')

});
});
