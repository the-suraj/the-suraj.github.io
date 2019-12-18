showRippleOnClick = (obj) => {
    obj.addEventListener('click', () => {
        obj.classList.add('ripple');
        let timeout = setTimeout(() => {
            obj.classList.remove('ripple');
        }, 1000);
    });
}

[...document.getElementsByClassName('card-navigator-button')].forEach(button => showRippleOnClick(button));
