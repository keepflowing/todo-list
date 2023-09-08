import './style.css';
import initiateSite from './mod/initiateSite';
import loadLists from './mod/loadLists'

let storedList = JSON.parse(localStorage.getItem("lists"));

initiateSite();

storedList ? loadLists(storedList) : loadLists(["Test", "Test2"]);