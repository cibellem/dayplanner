
$(document).ready(function () {

    //Setting up the date and appending to the HTML page
    var today = moment().format('MMMM Do YYYY');
    console.log(today)
    $(".todaysDate").append(today);

    var now = parseInt(moment().format('HH'));
    console.log(now)

    var $text9AM = $("#text9AM");
    var $text10AM = $("#text10AM");
    var $text11AM = $("#text11AM");
    var $text12AM = $("#text12AM");
    var $text1PM = $("#text1PM");
    var $text2PM = $("#text2PM");
    var $text3PM = $("#text3PM");
    var $text4PM = $("#text4PM");
    var $text5PM = $("#text5PM");


    $("textarea").each(function () {
        var name = parseInt($(this).attr("name"));
        if (name < now) {
            $(this).addClass("bg-gray");
        }


        if (name > now) {
            $(this).addClass("bg-green")
        }

        if (name === now) {
            $(this).addClass("bg-red")
        }



    })

    $("button").on("click", function () {

        //setting items in the local storage
        localStorage.setItem("9AM", ($text9AM.val()))
        localStorage.setItem("10AM", ($text10AM.val()))
        localStorage.setItem("11AM", ($text11AM.val()))
        localStorage.setItem("12AM", ($text12AM.val()))
        localStorage.setItem("13PM", ($text1PM.val()))
        localStorage.setItem("14PM", ($text2PM.val()))
        localStorage.setItem("15PM", ($text3PM.val()))
        localStorage.setItem("16PM", ($text4PM.val()))
        localStorage.setItem("17PM", ($text5PM.val()))

    })

    //getting the content stored and sending to the screen. When page is refreshed content will stay
    $("#text9AM").append(localStorage.getItem("9AM"));
    $("#text10AM").append(localStorage.getItem("10AM"));
    $("#text11AM").append(localStorage.getItem("11AM"));
    $("#text12AM").append(localStorage.getItem("12AM"));
    $("#text1PM").append(localStorage.getItem("13PM"));
    $("#text2PM").append(localStorage.getItem("14PM"));
    $("#text3PM").append(localStorage.getItem("15PM"));
    $("#text4PM").append(localStorage.getItem("16PM"));
    $("#text5PM").append(localStorage.getItem("17PM"));

})










