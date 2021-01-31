var logo = document.getElementById('logo');
var menu = document.getElementById('menu')

function schakel() {
  if (menu.getAttribute('class') == 'show') {
    menu.setAttribute('class', '')
  } else {
    menu.setAttribute('class', 'show')
  }
}
