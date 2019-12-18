let popitup = (rqr_win = {name: 'new Window', url: 'https://example.com'}) => {
    console.log(rqr_win);
    newwindow = window.open(rqr_win.url, rqr_win.name, "height=500,width=700");
    newwindow.focus();
    return newwindow;
};

document.getElementById('whatsapp-share').addEventListener('click', () => {
    popitup({
        name: 'share on WhatsApp',
        url: 'https://api.whatsapp.com/send?phone&text='+ encodeURIComponent(window.location.href)
    })
});
document.getElementById('facebook-share').addEventListener('click', () => {
    popitup({
        name: 'share on facebook',
        url: 'https://www.facebook.com/sharer/sharer.php?&u='+ encodeURIComponent(window.location.href)
    })
});
// document.getElementById('instagram-share').addEventListener('click', () => {
//     popitup({
//         name: 'share on Instagram',
//         url: 'https://www.facebook.com/sharer/sharer.php?&u='+ encodeURIComponent(window.location.href)
//     })
// })
document.getElementById('twitter-share').addEventListener('click', () => {
    popitup({
        name: 'share on Twitter',
        url: 'https://twitter.com/intent/tweet?text='+ encodeURIComponent(window.location.href)
    })
});
document.getElementById('email-share').addEventListener('click', () => {
    popitup({
        name: 'share on Email',
        url: 'mailto:?subject=Password Generator App reference&body=Use an advance random Password Generator tool to manage you Privacy easily using long and secure password.%0A%0ACheck out this site '+ encodeURIComponent(window.location.href)
    }).close();
});
document.getElementById('pinterest-share').addEventListener('click', () => {
    popitup({
        name: 'share on pinterest',
        url: 'https://pinterest.com/pin/create/button/?description=Password+Generator&url='+ encodeURIComponent(window.location.href)
    })
});
document.getElementById('linkedin-share').addEventListener('click', () => {
    popitup({
        name: 'share on linkedin',
        url: 'https://www.linkedin.com/shareArticle?mini=true&url='+ encodeURIComponent(window.location.href)
    })
});
document.getElementById('reddit-share').addEventListener('click', () => {
    popitup({
        name: 'share on Reddit',
        url: 'https://www.reddit.com/submit?title=Password+Generator&url='+ encodeURIComponent(window.location.href)
    })
});