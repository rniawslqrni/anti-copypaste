document.onkeydown = function(e) {
        if (e.ctrlKey && 
            (e.keyCode === 67 || 
             e.keyCode === 86 || 
             e.keyCode === 85 || 
             e.keyCode === 117)) {
            return false;
        } else {
            return true;
        }
};
$(document).keypress("u",function(e) {
  if(e.ctrlKey)
  {
return false;
}
else
{
return true;
}
});
   $(window).on('keydown',function(event)
    {
    if(event.keyCode==123)
    {
        alert('Entered F12');
        return false;
    }
    else if(event.ctrlKey && event.shiftKey && event.keyCode==73)
    {
        alert('Entered ctrl+shift+i')
        return false;  //Prevent from ctrl+shift+i
    }
    else if(event.ctrlKey && event.keyCode==73)
    {
        alert('Entered ctrl+shift+i')
        return false;  //Prevent from ctrl+shift+i
    }
});
$(document).on("contextmenu",function(e)
{
alert('Right Click Not Allowed')
e.preventDefault();
});
