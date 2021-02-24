$(document).ready(function() {
    $(".saveBtn").on("click", function() {
        
        var value = $(this).siblings(".description").val();
        // console.log(value);
        var time = $(this).parent().attr("id");
        // console.log(value)
        localStorage.setItem(time, value);
    });

    function hourUpdater () {
        var currentHour = moment().hours();

        $(".time-block").each(function() {
            var blockHour = parseInt($(this).attr("id").split("-")[1]);

            if(blockHour < currentHour) {
                $(this).addClass("past");
            }    
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");
            }    
        });    
    }    

    hourUpdater();

    var interval = setInterval(hourUpdater, 15000);

 $("#hour-1 .description").val(localStorage.getItem("hour-1"));
 $("#hour-2 .description").val(localStorage.getItem("hour-2"));
 $("#hour-3 .description").val(localStorage.getItem("hour-3"));
 $("#hour-4 .description").val(localStorage.getItem("hour-4"));
 $("#hour-5 .description").val(localStorage.getItem("hour-5"));
 $("#hour-6 .description").val(localStorage.getItem("hour-6"));
 $("#hour-7 .description").val(localStorage.getItem("hour-7"));
 $("#hour-8 .description").val(localStorage.getItem("hour-8"));
 $("#hour-9 .description").val(localStorage.getItem("hour-9"));
 $("#hour-10 .description").val(localStorage.getItem("hour-10"));
 $("#hour-11 .description").val(localStorage.getItem("hour-11"));
 $("#hour-12 .description").val(localStorage.getItem("hour-12"));
 $("#hour-13 .description").val(localStorage.getItem("hour-13"));
 $("#hour-14 .description").val(localStorage.getItem("hour-14"));
 $("#hour-15 .description").val(localStorage.getItem("hour-15"));
 $("#hour-16 .description").val(localStorage.getItem("hour-16"));
 $("#hour-17 .description").val(localStorage.getItem("hour-17"));
 $("#hour-17 .description").val(localStorage.getItem("hour-18"));
 $("#hour-17 .description").val(localStorage.getItem("hour-19"));
 $("#hour-17 .description").val(localStorage.getItem("hour-20"));
 $("#hour-17 .description").val(localStorage.getItem("hour-21"));
 $("#hour-17 .description").val(localStorage.getItem("hour-22"));
 $("#hour-17 .description").val(localStorage.getItem("hour-23"));
 $("#hour-17 .description").val(localStorage.getItem("hour-24"));

 $("#presentDay").text(moment().format("dddd, MMMM Do"));

});