function openUp() {
  console.log('heart clciked')
  // const $opentop = document.querySelector('#opentop');
  // const $top = document.querySelector('#top');
  // const $front = document.querySelector('#front');
  // const $back = document.querySelector('#back');
  // const $letter = document.querySelector('#letter');
  // const $button = document.querySelector('button');

  // // $opentop.beginElement();
  // $top.style.zIndex = 2;

  // $top.classList.add('animate');
  // $front.classList.add('animate');
  // $back.classList.add('animate');
  // $button.classList.add('animate');
  // $letter.classList.add('animate');

  const $envelope = document.querySelector('.envelope');
  const $front = document.querySelector('.front');
  const $card = document.querySelector('.card');
  const $heart = document.querySelector('.heart');

  $envelope.classList.add('animate');
  $card.classList.add('animate');
  $front.classList.add('animate');
  $heart.classList.add('animate');
}
