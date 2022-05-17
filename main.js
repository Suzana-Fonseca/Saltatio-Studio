window.addEventListener('scroll', onScroll)

// PAGE SCROLL
onScroll()

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(rhythms)
  activateMenuAtCurrentSection(galery)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  //linha-alvo
  const targetLine = scrollY + innerHeight / 2 //

  //topo da seção
  const sectionTop = section.offsetTop
  //altura da seção
  const sectionHeight = section.offsetHeight

  //o topo da sessão chegou ou ultrapassou a linha-alvo
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

  //verificar se a base está abaixo da linha-alvo
  //fim da seção
  const sectionEndsAt = sectionTop + sectionHeight

  //a base da sessão está abaixo da linha-alvo
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine

  //limites da seção
  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

  const sectionId = section.getAttribute('id') //id da seção
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`) //elemento q contém o id da seção

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('nav-scroll')
  } else {
    navigation.classList.remove('nav-scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 400) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

// MENU BEHAVIOR
function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

// REVEAL SMOOTH SCROLL
ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
  #home,
  #home img,
  #home .stats,
  #rhythms,
  #rhythms header,
  #rhythms .card,
  #galery,
  #galery .content,
  #about,
  #about header,
  #about content,
  #contact,
  #contact header,
  #contact .content ul,
  #contact .content a`)
