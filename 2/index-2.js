function openUp() {
  const $envelope = document.querySelector('.envelope');
  const $front = document.querySelector('.front');
  const $card = document.querySelector('.card');
  const $heart = document.querySelector('.heart');
  const $text = document.querySelector('.text');

  $envelope.classList.add('animate');
  $card.classList.add('animate');
  $front.classList.add('animate');
  $heart.classList.add('animate');
  $text.classList.add('animate');
}
