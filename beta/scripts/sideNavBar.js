let sidebar_btn_checkBox = document.getElementById('sidebar-btn-checkBox');
let sideNavBar = document.getElementById('side-navBar');
let body_header = document.getElementById('body-header');
let repositionSideNavBar = () => {
    if (sidebar_btn_checkBox.checked === true) {
        sideNavBar.style.transform = "translateX(0)";
        if (!media_forHeader.matches) {
            document.getElementById('secondary-menu-close-btn').style.display = "initial";
        } else {
            document.getElementById('secondary-menu-close-btn').style.display = "none";
        }
    } else {
        sideNavBar.style.transform = "translateX(calc(-100% - 6px))";
    }
}

let media_forHeader = window.matchMedia('(min-height: 18em)');

let handle_Media_forHeader = (media_forHeader) => {
    if (media_forHeader.matches) {
        sideNavBar.style.setProperty('--top', `${body_header.clientHeight-5}px`);
        sideNavBar.style.zIndex = '2';
    } else {
        sideNavBar.style.setProperty('--top', "0px");
        sideNavBar.style.zIndex = '4';
    }
    repositionSideNavBar();
}

handle_Media_forHeader(media_forHeader); // Call listener function at run time
media_forHeader.addListener(handle_Media_forHeader); // Attach listener function on state changes 

sidebar_btn_checkBox.addEventListener('change', repositionSideNavBar)
window.addEventListener('orientationchange', repositionSideNavBar);
repositionSideNavBar();