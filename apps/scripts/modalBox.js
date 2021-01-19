let Showpopup = (message) => {

    let popupWindow = document.querySelector('#popupWindow');

    let popupWindowHeader = document.querySelector('.popupWindow-header');
    let popupWindowBody = document.querySelector('.popupWindow-body');
    let popupWindowFooter = document.querySelector('.popupWindow-footer');

    popupWindowHeader.innerHTML = "";
    popupWindowBody.innerHTML = "";
    popupWindowFooter.innerHTML = "";
    popupWindowHeader.insertAdjacentHTML('beforeend', `<h3>${message[0]}</h3>`);
    for (let i = 1; i < message.length - 1; i++) {
        popupWindowBody.insertAdjacentHTML('beforeend', `<p>${message[i]}</p>`);
    }
    popupWindowFooter.insertAdjacentHTML('beforeend', `<h4>${message[message.length - 1]}</h4>`);

    // When the user clicks anywhere outside of the popupWindow, close it
    popupWindow.onclick = (event) => {
        popupWindowCloser();
    }
    showpopupWindowCheckbox.checked = true;
};
let popupWindowCloser = () => {
    document.getElementById('showpopupWindowCheckbox').checked = false;
}
showpopupWindowCheckbox.checked = false;