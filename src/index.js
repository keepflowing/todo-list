import './style.css';
import loadBar from './view/loadBar';
import loadLists from './view/loadLists';
import loadSettings from './view/loadSettings';
import createList from './controller/createList';

loadBar();

const content = document.createElement("div");
content.id = "content";
document.body.appendChild(content);

const scroll = document.querySelector("#btn-container");

const listsBtn = document.querySelector("#navLists");
listsBtn.addEventListener("click", () => {
    loadLists();
    scroll.classList.remove("invisible");});

const settingsBtn = document.querySelector("#navSettings");
settingsBtn.addEventListener("click", () => {
    loadSettings();
    scroll.classList.add("invisible");});

const addBtn = document.querySelector("#add-list");
addBtn.addEventListener("click", () => {
    createList(prompt("Name?"));
    loadLists()});

loadLists();