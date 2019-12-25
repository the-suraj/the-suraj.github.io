let delete_Input = (event) => {
    event.remove();
    console.log(event);
}

let add_new_input = () => {
    add_input_btn.parentElement.insertAdjacentHTML('beforebegin', '<label for="equationInputBox" class="equation_in_label"><input type="text" class="equationInputBox equation_in"  placeholder="Write Equation..."><button class="delete_input"><svg viewBox="0 0 348.333 348.334"><path d="M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z"/></svg></button></label>');
    let new_in_label = add_input_btn.parentElement.previousSibling;
    new_in_label.children[0].focus();
    new_in_label.children[1].addEventListener('click', () => {
        delete_Input(new_in_label);
    });
}

add_input_btn.addEventListener('click', add_new_input);
add_new_input();

let set_layout = () => {
    output.style.height = `calc(${window.innerHeight - document.getElementById('body-header').offsetHeight}px - 2em)`;
    outputContainer.style.height = `${window.innerHeight - document.getElementById('body-header').offsetHeight}px`;
    loader_container.style.height = `${window.innerHeight - document.getElementById('body-header').offsetHeight}px`;
    document.body.style.minHeight = window.innerHeight + 'px';
}
window.addEventListener('resize', set_layout);
set_layout();

let display_output_fn = () => {
    hide_loader_fn();
    console.log('display output called');
    output.classList.add('bringUP');
}
let display_loader_fn = () => {
    // display_loader_btn.checked = true;
    loader_container.style.display = 'flex';
    loader_container.classList.add('show');
}
let hide_loader_fn = () => {
    loader_container.classList.add('hide');
    loader_container.classList.remove('show');
    setTimeout(() => {
        loader_container.classList.remove('hide');
        loader_container.style.display = 'none';
    }, 300);
}
display_output_btn.addEventListener('click', display_output_fn);
display_loader_btn.addEventListener('click', display_loader_fn);

outputContainer.addEventListener('click', (event) => {
    if (event.target === outputContainer) {
        output.classList.remove('bringUP');
        output.classList.add('bringDown');
        outputContainer.classList.add('hide');
        setTimeout(() => {
            output.classList.remove('bringDown');
            outputContainer.classList.remove('hide');
            display_output_btn.checked = false;
        }, 200);
    }
})