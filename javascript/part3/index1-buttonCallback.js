function newButton(content, callback) {
  const $button = document.createElement("button");
  $button.textContent = `${content}`;

  callback($button);

  document.body.append($button);
  return $button;
}

const button = newButton("Login", (button) => {
  button.style.cssText = `
    font-size: 30px;
  `

  button.addEventListener('click', (e) => {
    if (e.type === "click") {console.log("right")}
  })
});
const signup = newButton("Signup", () => {});


