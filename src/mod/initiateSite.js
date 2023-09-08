const initiateSite = () => {
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

    topBar.appendChild(nav);

    const content = document.createElement("div");
    content.id = "content";

    document.body.appendChild(topBar);
    document.body.appendChild(content);
}

export default initiateSite;