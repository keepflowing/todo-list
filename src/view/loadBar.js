import loadLists from "./loadLists";
import loadSettings from "./loadSettings";
import createListDialog from "./createListDialog";

const loadScroll = (topBar) => {

    const btnContainer = document.createElement("div");
    btnContainer.id = "btn-container"

    const leftBtn = document.createElement("button");
    leftBtn.id = "left-btn";
    leftBtn.innerText = "<"

    leftBtn.addEventListener("click", () => {
        content.scroll({
            left: content.scrollLeft - 435,
            behavior: "smooth",
          });
    });

    const rightBtn = document.createElement("button");
    rightBtn.id = "right-btn";
    rightBtn.innerText = ">"

    rightBtn.addEventListener("click", () => {
        content.scroll({
            left: content.scrollLeft + 435,
            behavior: "smooth",
          });
    });

    btnContainer.appendChild(leftBtn);
    btnContainer.appendChild(rightBtn);
    topBar.appendChild(btnContainer);

    return btnContainer;
}

const loadBar = () => {
    const topBar = document.createElement("div");
    topBar.id = "top-bar";

    const nav = document.createElement('nav');
    nav.id = "menu";
    
    const h1 = document.createElement('h1');
    h1.innerText = "Todo List";
    nav.appendChild(h1);
    
    const navLinks = ["Home", "Lists", "Settings"]
    for (let i = 0; i < navLinks.length; i++) {
        let link = document.createElement("a");
        link.id = `nav${navLinks[i]}`;
        link.innerText = navLinks[i];

        nav.appendChild(link)
        navLinks[i] = link;
    }

    const addList = document.createElement("div");
    addList.id = "add-list";
    addList.innerText = "+";

    nav.appendChild(addList);

    const scroll = loadScroll(topBar);

    topBar.appendChild(nav);
    topBar.appendChild(scroll);

    navLinks[0].addEventListener("click", () => {
        loadLists("home");
        scroll.classList.remove("invisible");
    });

    navLinks[1].addEventListener("click", () => {
        loadLists("lists");
        scroll.classList.remove("invisible");
    });

    navLinks[2].addEventListener("click", () => {
        loadSettings();
        scroll.classList.add("invisible");
    });

    addList.addEventListener("click", () => {
        let dialog = createListDialog();
        document.body.appendChild(dialog);
        dialog.showModal();
    });

    document.body.appendChild(topBar);
}

export default loadBar;