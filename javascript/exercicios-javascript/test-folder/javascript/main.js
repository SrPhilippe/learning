let mainMenu = document.querySelector("#mainMenu")
    menuItems = Array.from(mainMenu.children),
    ulElement = document.createElement("ul")

    menuItems.forEach(el => {
        if (el.tagName !== "P") {
            ulElement.append(el)
        }
    })

mainMenu.prepend(ulElement)