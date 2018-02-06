var counter = 0
var audio1 = new Audio('assets/sound1.mp3')
var audio2 = new Audio('assets/sound2.mp3')

function stopPlaySound () {
  audio1.pause()
  audio1.currentTime = 0
  audio2.pause()
  audio2.currentTime = 0
}

function playSound1 () {
  stopPlaySound()
  audio1.play()
}

function playSound2 () {
  stopPlaySound()
  audio2.play()
}

window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.chicken-head').classList.add('animated', 'infinite', 'swing')
})

document.querySelector('.chicken').addEventListener('click', function () {
  counter++

  if (counter === 3) {
    document.querySelector('.chicken-head').classList.remove('animated', 'swing')
    document.querySelector('.chicken-head').classList.add('animated', 'wobble')
    Array.from(document.querySelectorAll('.chicken-eye'), function (element) {
      element.classList.remove('normal')
    })
    Array.from(document.querySelectorAll('.chicken-eye'), function (element) {
      element.classList.add('dizzy')
    })
    playSound1()
  } else if (counter === 6) {
    document.querySelector('.chicken-head').classList.remove('animated', 'infinite', 'wobble')
    document.querySelector('.chicken-head').classList.add('animated', 'hinge')
    document.querySelector('.chicken-blood').style['visibility'] = 'visible'
    document.querySelector('.chicken-blood').classList.add('animated', 'fadeIn')
    Array.from(document.querySelectorAll('.chicken-eye'), function (element) {
      element.classList.remove('dizzy')
    })
    Array.from(document.querySelectorAll('.chicken-eye'), function (element) {
      element.classList.add('dead')
    })
    playSound2()
  } else if (counter === 9) {
    document.querySelector('.chicken-head').classList.remove('animated', 'hinge')
    document.querySelector('.chicken-head').classList.add('animated', 'infinite', 'swing')
    document.querySelector('.chicken-blood').style['visibility'] = 'hidden'
    document.querySelector('.chicken-blood').classList.remove('animated', 'fadeIn')
    Array.from(document.querySelectorAll('.chicken-eye'), function (element) {
      element.classList.remove('dead')
    })
    Array.from(document.querySelectorAll('.chicken-eye'), function (element) {
      element.classList.add('normal')
    })
    playSound1()
    counter = 0
  }
})
