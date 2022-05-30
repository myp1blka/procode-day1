
let el1 = document.querySelector('.first-div');
let el2 = document.querySelector('input[name="first-input"]');

el2.addEventListener('change', (ev) => {
    let text_el2 = ev.target.value;
    let text_el1 = el1.textContent;

    console.log('text-el1 = ' + text_el1);
    console.log('text-el2 = ' + text_el2);

    el2.value = el1.textContent;
    el1.innerHTML=text_el2;

});

