
//current date and time on top of the page
$("#currentDay").text(moment().format('LLLL'));

//changing the color of timeblock according to past,present and future
function timeBlockColor() {
    var currentTime= moment().hours();
    $(".time-block").each(function(){
        var timeCheck = $(this).attr('id');
        if (timeCheck>currentTime){
           $(this).addClass("future"); 
        } else if (timeCheck == currentTime){
            $(this).addClass("present");
        } else { 
            $(this).addClass("past");
        }
    })
};
timeBlockColor();


var saveButton= $(".saveBtn");
saveButton.on("click",function(){
    var time=$(this).siblings(".hour").text();
    var toDo=$(this).siblings(".plan").val();
    localStorage.setItem(time,toDo);
})

//this function keeps the schedul and time on screen after refreshing the page
function getToDo(){
    $(".hour").each(function(){
    currentTime=$(this).text();
    currentToDo=localStorage.getItem(currentTime);
    if (currentToDo!==null){
        $(this).siblings(".plan").val(currentToDo);

    }
});
}
getToDo();
