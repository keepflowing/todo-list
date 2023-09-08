const loadScroll = () => {
    const topBar = document.querySelector("#top-bar");

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

export default loadScroll;