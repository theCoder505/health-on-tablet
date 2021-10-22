//when page loads then default page data fetch and show 
$.ajax({
    url: "other_pages/appoinments.html",
    type: 'GET',
    success: function (data) {
        $(".appoinments").html(data);
    }
});



// menu click and functions 
function menuFunc(event) {


    if (event == "logout_page") {
        $("#leftStaticMenu").addClass("d_none");
        $("#totalArea").addClass("d_none");


        $(".common_sec").addClass("d_none");
        $("." + event).removeClass("d_none");

        $(".left_menu_lniks").removeClass("active_li");
        $('.left_menu_lniks[data-id=' + event + ']').addClass('active_li');

    }


    else {

        $(".common_sec").addClass("d_none");
        $("." + event).removeClass("d_none");

        $(".left_menu_lniks").removeClass("active_li");
        $('.left_menu_lniks[data-id=' + event + ']').addClass('active_li');



        $.ajax({
            url: "other_pages/" + event + ".html",
            type: 'GET',
            success: function (data) {
                $("." + event).html(data);
            }
        });

    }



}




function edit_or_save() {

    if ($(".annc_edit").html() === "edit") {
        $(".annc_edit").html("save");
        document.getElementById("announcement_txt").setAttribute("contentEditable", true);

    } else {
        $(".annc_edit").html("edit");
        document.getElementById("announcement_txt").setAttribute("contentEditable", false);

        //show popup notification 
        $(".top_up").html("Announcement Been Edited & Saved");
        $("#notification").addClass("show");
        setTimeout(function () {
            $("#notification").removeClass("show");
        }, 4000);

        // now sends or saves data to localstorage or database or firebase 
    }

}



function send_the_text() {

    var message = $("textarea[name=sending_text]").val();
    console.log(message);

    if (message != "") {
        $(".top_up").html("Message Sent Successfully");
        $("#notification").addClass("show");
        setTimeout(function () {
            $("#notification").removeClass("show");
        }, 4000);

    }

    $("textarea[name=sending_text]").val("");
}



