/* Functions to use some time to get parameters in the URL
Exemple to get the parameter code:
let locate = new URL(location.href).searchParams.get('code')
 */

const myRequest = 'https://raw.githubusercontent.com/SrPhilippe/learning/master/aClin/style.css',
  url = document.location,
  version = "1.3"


// This prevent some bugs when you open the aClin initial page outside the system
if (url.pathname != "/index.html") {
  addStyle(myRequest)
  console.log(`Css custom style applied!`)
}

function addStyle(source) {
  const $body = document.getElementsByTagName("body")[0],
    $style = document.createElement("style")

  $style.classList.add('aClin-custom-css')
  $style.setAttribute("type", "text/css")

  fetch(source)
    .then(res => res.text())
    .then(text => {
      $style.innerHTML = text
      $body.prepend($style)
    })
    .catch(err => console.log(err))
}

let elMiddle = document.querySelector('#centro'),
  elLeft = document.querySelector('#esquerda'),
  elRight = document.querySelector('#direita'),
  mmThemel5 = document.querySelector('body > .mm-container.mm-theme-l5'),
  mainMenu = document.querySelector('.mm-bar.mm-blue.mm-left-align.mm-large'),
  mainSelection = mmThemel5.firstElementChild,
  definedSelection,
  hasParent = false

if (mainSelection.children.length == 2) {
  hasParent = true
  mainSelection = mainSelection.lastElementChild
  definedSelection = mainSelection.querySelector('.row')
} else {
  definedSelection = mainSelection
}

let mainContainers = Array.from(definedSelection.children)

mainContainers.forEach(el => {
  if (el.hasAttribute('id')) {
    el.removeAttribute('class')
  }
})

elMiddle.classList.add('col-lg-8');
elLeft.classList.add('col-lg-2');
elRight.classList.add('col-lg-2');

// Whether is the main page or not
if (hasParent) {
  const container = document.createElement('div')
  container.classList.add('.container')

  // Centralize the title
  mmThemel5.querySelector('.mm-row').firstElementChild.classList.replace('text-left', 'text-center')


  elMiddle.children.item(1).firstElementChild.classList.add('col-lg-6')
  elMiddle.children.item(5).classList.add('col-lg-6')
  elMiddle.children.item(1).appendChild(elMiddle.children.item(5))
} else {
  mainSelection.firstElementChild.classList.add('text-center')
}


// This part of the code is going to create an UL element inside the menu
let ulElement = document.createElement('ul'),
  menuItems = Array.from(mainMenu.children)

menuItems.forEach(el => {
  if (el.tagName !== "P") {
    ulElement.append(el)
  }
})

mainMenu.prepend(ulElement)

let divbody = document.createElement("div"),
  body = document.getElementsByTagName("body")[0]
divbody.classList.add("custom-background")
body.prepend(divbody)

console.log(`Aclin script ${version} is running into the website.`)
// End of UL element
