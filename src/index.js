import './style.css';
import loadBar from './mod/loadBar';
import loadLists from './mod/loadLists';
import loadSettings from './mod/loadSettings';
import createList from './mod/createList';

let storedList = JSON.parse(localStorage.getItem("lists"));

loadBar();

const content = document.createElement("div");
content.id = "content";
document.body.appendChild(content);

const scroll = document.querySelector("#btn-container");

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
    createList();
    storedList = JSON.parse(localStorage.getItem("lists"));
    loadLists(storedList)});

storedList ? loadLists(storedList) : loadLists([["Test"], ["Test2"]]);