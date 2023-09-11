import './style.css';
import loadBar from './view/loadBar';
import loadLists from './view/loadLists';

loadBar();

const content = document.createElement("div");
content.id = "content";
document.body.appendChild(content);

loadLists();