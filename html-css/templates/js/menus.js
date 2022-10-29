window.onload = event => {
  const e_menu = document.querySelector('.menu.pos-expand')
  const e_list = e_menu.querySelectorAll('ul > li')
  const speed = 0.01

  const middle = e_menu.offsetWidth / 2

  e_menu.addEventListener('mousemove', event => {

    e_list.forEach(element => {
      element.style.marginInline = `-${event.pageX * speed}px`
    })
  })
}

