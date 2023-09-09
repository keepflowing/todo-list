const loadScroll = (topBar) => {

    const btnContainer = document.createElement("div");
    btnContainer.id = "btn-container"

    const leftBtn = document.createElement("button");
    leftBtn.id = "left-btn";
    leftBtn.innerText = "<"

    leftBtn.addEventListener("click", () => {
        content.scroll({
            left: content.scrollLeft - 400,
            behavior: "smooth",
          });
    });

    const rightBtn = document.createElement("button");
    rightBtn.id = "right-btn";
    rightBtn.innerText = ">"

    rightBtn.addEventListener("click", () => {
        content.scroll({
            left: content.scrollLeft + 400,
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
    }

    const addList = document.createElement("div");
    addList.id = "add-list";
    addList.innerText = "+";

    nav.appendChild(addList);

    const scroll = loadScroll(topBar);

    topBar.appendChild(nav);
    topBar.appendChild(scroll);

    document.body.appendChild(topBar);
}

export default loadBar;