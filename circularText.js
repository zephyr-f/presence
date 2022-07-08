const nameText = document.querySelector('.name-in-frame');
nameText.innerHTML = nameText.innerText
  .split('')
  .map(
    (char, i) =>
      `<span style="display: inline-block; transform-origin: center top; transform:rotate(${
        i * (360 / nameText.innerText.length)
      }deg)">${char}</span>`
  )
  .join('');
