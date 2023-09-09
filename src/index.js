import './style.css';
import loadBar from './mod/loadBar';
import loadLists from './mod/loadLists'
import loadSettings from './mod/loadSettings';
import createListItem from './mod/createListItem';

let storedList = JSON.parse(localStorage.getItem("lists"));

loadBar();

const scroll = document.querySelector("#btn-container");

const content = document.createElement("div");
content.id = "content";
document.body.appendChild(content);

const listsBtn = document.querySelector("#navLists");
listsBtn.addEventListener("click", () => {
    storedList ? loadLists(storedList) : loadLists([["Test"], ["Test2"]]);
    scroll.classList.remove("invisible");});

const settingsBtn = document.querySelector("#navSettings");
settingsBtn.addEventListener("click", () => {
    loadSettings();
    scroll.classList.add("invisible");});

const addBtn = document.querySelector("#add-list");
addBtn.addEventListener("click", () => {
    createListItem();
    storedList = JSON.parse(localStorage.getItem("lists"));
    loadLists(storedList)});

storedList ? loadLists(storedList) : loadLists([["Test"], ["Test2"]]);