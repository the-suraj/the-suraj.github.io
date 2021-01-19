let show_previous_card_image_fn = (previous_card_image_button, next_card_image_button) => {
    let card_gallery = [...previous_card_image_button.parentElement.children].filter(child => child.classList.contains('card-gallery'))[0];
    let card_image_array = [...card_gallery.children];
    let displaying_image_index = parseInt(card_gallery.dataset.displaying_image);

    if (displaying_image_index > 0) {
        card_image_array[displaying_image_index].style.zIndex = '-1';
        card_image_array[displaying_image_index - 1].style.zIndex = 'auto';
        card_gallery.dataset.displaying_image = displaying_image_index - 1;
    }

    if (displaying_image_index - 1 === 0) {
        previous_card_image_button.style.visibility = 'hidden';
    } else  if(displaying_image_index = card_image_array.length-1) {
        next_card_image_button.style.visibility = 'initial';
    }
}
let show_next_card_image_fn = (next_card_image_button, previous_card_image_button) => {
    let card_gallery = [...next_card_image_button.parentElement.children].filter(child => child.classList.contains('card-gallery'))[0];
    let card_image_array = [...card_gallery.children];
    let displaying_image_index = parseInt(card_gallery.dataset.displaying_image);

    if (displaying_image_index < card_image_array.length-1) {
        card_image_array[displaying_image_index].style.zIndex = '-1';
        card_image_array[displaying_image_index + 1].style.zIndex = 'auto';
        card_gallery.dataset.displaying_image = displaying_image_index + 1;
    }

    if (displaying_image_index + 1 === card_image_array.length - 1) {
        next_card_image_button.style.visibility = 'hidden';
    } else  if(displaying_image_index === 0) {
        previous_card_image_button.style.visibility = 'initial';
    }
}



let previous_card_image_buttons_array = document.getElementsByClassName('previous-card-image-button');
let next_card_image_buttons_array = document.getElementsByClassName('next-card-image-button');

[...previous_card_image_buttons_array].forEach(previous_card_image_button => {
    try {
        showRippleOnClick(previous_card_image_button);
    } catch (error) {
        console.warn(error);
    }
    previous_card_image_button.addEventListener('click', () => { show_previous_card_image_fn(previous_card_image_button, previous_card_image_button.nextElementSibling) });
});

[...next_card_image_buttons_array].forEach(next_card_image_button => {
    try {
        showRippleOnClick(next_card_image_button);
    } catch (error) {
        console.warn(error);
    }
    next_card_image_button.addEventListener('click', () => { show_next_card_image_fn(next_card_image_button, next_card_image_button.previousElementSibling) });
});