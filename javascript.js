var Messege_status = document.getElementById("MarkRead_button");
var unread_num = document.getElementById("UnreadMasseges");
Messege_status.addEventListener('click', (event) => {
    for (let i=0; i<3; i++){
        if (document.body.classList.contains("dark_mode_body")) {
            document.getElementsByClassName("massege_box")[i].classList.toggle("unread_messege_box_DARK_MODE");
            document.getElementsByClassName("unread_trriger")[i].classList.toggle("opacity_0");

        } else {
            document.getElementsByClassName("massege_box")[i].classList.toggle("unread_messege_box");
            document.getElementsByClassName("unread_trriger")[i].classList.toggle("opacity_0");
            }
    }
    if (Messege_status.textContent === "Mark all as unread") {
        Messege_status.textContent = "Mark all as read";
        unread_num.textContent = "3";
    } else {
        Messege_status.textContent = "Mark all as unread";
        unread_num.textContent = "0";
    }
});


var appaerness_mode = document.getElementsByClassName("dark_light_mode")[0];
var messageBoxes = document.getElementsByClassName("massege_box");
appaerness_mode.addEventListener('click', (event) => {
    for (let i=0; i<2; i++) {
        document.getElementsByClassName("bi")[i].classList.toggle("opacity_0");
        document.getElementsByClassName("bi")[i].classList.toggle("left");
    }
    document.body.classList.toggle("dark_mode_body");
    document.getElementsByClassName("conteiner")[0].classList.toggle("dark_mode_conteiner");
    unread_num.classList.toggle("unread_dark_mode");
    document.getElementsByClassName("dark_light_mode")[0].classList.toggle("dark_light_mode_DARK_MODE");
for (let i = 0; i < 3; i++) {
    if (messageBoxes[i].classList.contains("unread_messege_box") && unread_num.textContent === "3") {
        messageBoxes[i].classList.add("unread_messege_box_DARK_MODE");
        messageBoxes[i].classList.remove("unread_messege_box");
    } else if (messageBoxes[i].classList.contains("unread_messege_box_DARK_MODE") && unread_num.textContent === "3") {
        messageBoxes[i].classList.remove("unread_messege_box_DARK_MODE");
        messageBoxes[i].classList.add("unread_messege_box");
    }
}

});