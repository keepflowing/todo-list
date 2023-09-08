import './style.css';
import initiateSite from './mod/initiateSite';
import loadLists from './mod/loadLists'
import loadSettings from './mod/loadSettings';
import loadScroll from './mod/loadScroll';
import createListItem from './mod/createListItem';

let storedList = JSON.parse(localStorage.getItem("lists"));

initiateSite();
const scroll = loadScroll();

const listsBtn = document.querySelector("#navLists");
listsBtn.addEventListener("click", () => {
    storedList ? loadLists(storedList) : loadLists(["Test", "Test2"]);
    scroll.classList.remove("invisible");});

const settingsBtn = document.querySelector("#navSettings");
settingsBtn.addEventListener("click", () => {
    loadSettings();
    scroll.classList.add("invisible");});

const addBtn = document.querySelector("#add-list");
addBtn.addEventListener("click", () => {createListItem()});

storedList ? loadLists(storedList) : loadLists(["Test", "Test2"]);