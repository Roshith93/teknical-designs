const heading = document.querySelector('h1')
const spanText = heading.querySelector('span')
spanText.addEventListener('click', (e) => {
  console.log(spanText.textContent)
  if (spanText.textContent === 'D') {
    spanText.textContent = 'T'
  } else {
    spanText.textContent = 'D'
  }
})
