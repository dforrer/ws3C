/**
 * Created by Marco on 05.01.2015.
 */

$( document ).ready(function() {
    toggleNewCreatedAlert();
});

function toggleNewCreatedAlert() {
    if(typeof(Storage) !== "undefined") {
        if(localStorage.getItem("isNewCreated") === 'true') {
            $('#newCreatedAlert').show();
            setTimeout(function(){
                $('#newCreatedAlert').fadeOut();
                localStorage.setItem("isNewCreated", false);
            }, 1500);
        } else {
            $('#newCreatedAlert').hide();
        }
    }
}

function setNewCreatedAlert() {
    if(typeof(Storage) !== "undefined") {
        localStorage.setItem("isNewCreated", true);
    }
    window.location.href = "http://stackoverflow.com";
}