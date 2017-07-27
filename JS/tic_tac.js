$(document).ready(function()
{
  var success_clip = document.getElementById("success"); 
  var draw_clip = document.getElementById("draw"); 
  
  var t1=$('.span1');
  var t2=$('.span2');
  var t3=$('.span3');
  var t4=$('.span4');
  var t5=$('.span5');
  var t6=$('.span6');
  var t7=$('.span7');
  var t8=$('.span8');
  var t9=$('.span9');
  
  var click_count=0,count_x=0,count_o=0,winner;
  var selected;
  var player=1;
  $('.span').click(function()
  {
    click_count++;
    selected=$(this);
    if(selected.hasClass('fa-times') || selected.hasClass('fa-circle-o'))
      {
        click_count=click_count-1;
        alert("Already selected,choose another one!");
      }
    else
      {
  
         if(player===1)
            {
           $(selected).addClass('fa fa-times');
           $('.fa-times').css('font-size','3.30em');
           $('.fa-times').css('color','rgb(84,84,84)');
           player=2;
           }
        
          else
          {
          $(selected).addClass('fa fa-circle-o');
          $('.fa-circle-o').css('font-size','3.30em');
          $('.fa-circle-o').css('color','white');
          player=1;
          }
    }
    checkwin();
  });
  function checkwin()
  {
  //checking player-1 has won  
     if(t1.hasClass('fa-times') && t2.hasClass('fa-times') && t3.hasClass('fa-times') || t4.hasClass('fa-times') && t5.hasClass('fa-times') && t6.hasClass('fa-times') || t7.hasClass('fa-times') && t8.hasClass('fa-times') && t9.hasClass('fa-times') || t1.hasClass('fa-times') &&
        t4.hasClass('fa-times') && t7.hasClass('fa-times') || t2.hasClass('fa-times') && t5.hasClass('fa-times') && t8.hasClass('fa-times') ||
     t3.hasClass('fa-times') && t6.hasClass('fa-times') && t9.hasClass('fa-times') || t1.hasClass('fa-times') && t5.hasClass('fa-times') && t9.hasClass('fa-times') ||
     t3.hasClass('fa-times') && t5.hasClass('fa-times') && t7.hasClass('fa-times'))
       {
         success_clip.play();
         $(this).delay(1).animate({width :'40px'}, 'slow', function(){
          alert('Player-X won the game');
          success_clip.pause();
          success_clip.currentTime=0;
          winner='x';
          count_x++;
         $('#player-X:input').val(count_x);
        clearboard(); 
         });
     }
   //cehcking whether player-2 has won
     else if(t1.hasClass('fa-circle-o') && t2.hasClass('fa-circle-o') && t3.hasClass('fa-circle-o') || t4.hasClass('fa-circle-o') && t5.hasClass('fa-circle-o') && t6.hasClass('fa-circle-o')||  t7.hasClass('fa-circle-o') && t8.hasClass('fa-circle-o') && t9.hasClass('fa-circle-o') ||t1.hasClass('fa-circle-o') && t4.hasClass('fa-circle-o') && t7.hasClass('fa-circle-o') || t2.hasClass('fa-circle-o') && t5.hasClass('fa-circle-o') && t8.hasClass('fa-circle-o') ||
     t3.hasClass('fa-circle-o') && t6.hasClass('fa-circle-o') && t9.hasClass('fa-circle-o') || t1.hasClass('fa-circle-o') && t5.hasClass('fa-circle-o') && t9.hasClass('fa-circle-o')||
     t3.hasClass('fa-circle-o') && t5.hasClass('fa-circle-o') && t7.hasClass('fa-circle-o'))
      {
          success_clip.play();
         $(this).delay(1).animate({width :'40px'}, 'slow', function(){
         alert('Player-O won the game');
         success_clip.pause();
         success_clip.currentTime=0;
         winner='o';
         count_o++;
        $("#player-O:input").val(count_o); 
       clearboard();  
        
       });
          
      }
     //checks for draw 
    else if(click_count===9 && winner!='x' || click_count===9 && winner!='o')
      {
         draw_clip.play();
         $(this).delay(1).animate({width :'40px'}, 'slow', function(){
        alert('Draw, play again');
        clearboard();      
         });  
      }
     
  }
  //clear the tiles
  function clearboard()
  {
    $('.span').removeClass('fa-times');
    $('.span').removeClass('fa-circle-o');
    click_count=0;  
    player=1;
  }
  // reset game
 $("button").on('click',function()
  {
    clearboard();
    count_x=0;
    count_o=0;
    $('#player-X').val("0 times");
    $('#player-O').val("0 times");
  });
 
  
}); //document.ready function closed here
