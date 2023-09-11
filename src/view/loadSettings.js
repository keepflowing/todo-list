const loadSettings = () => {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const settingsPage = document.createElement("div");
    settingsPage.id = "settings-page";

    const deleteLocal = document.createElement("button");
    deleteLocal.id = "delete-local";
    deleteLocal.innerText = "Delete Local Storage";

    deleteLocal.addEventListener("click", () => {
        localStorage.removeItem("lists");
        location.reload();
    });

    settingsPage.append(deleteLocal);
    content.appendChild(settingsPage);
}

export default loadSettings;