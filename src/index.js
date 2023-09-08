import './style.css';

function component() {
    const element = document.createElement('div');

    element.innerText = "Hello world";

    return element;
}

document.body.appendChild(component());