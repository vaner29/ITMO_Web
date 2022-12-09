let modals = document.getElementsByClassName('modal');

function make_modal_visible(element) {
    document.getElementById(element).style.display = "block";
}

window.onclick = function(event) { 
    if (Array.from(modals).includes(event.target)) {
        event.target.style.display = "none";
    }
}