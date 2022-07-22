console.log('presence.js works! :)');

// const sliderImages = document.getElementById('sliderImages');
// const faceSize = document.documentElement
// faceSize.style.setProperty(--face-size, slider.value);

async function getGroupStatus() {
  const options = {
    method: 'GET',
    url: 'https://hook.eu1.make.com/sjdlg64p5tpij9m2awkts87rn56g3qu6',
    headers: { 'content-type': 'application/json' },
  };
  await axios
    .request(options)
    .then(res => {
      console.log(res.data);
      group = res.data;
    })
    .catch(err => {
      console.error(err);
    });
  let kidsContainer = document.getElementById('kids-container');

  for (let i in group) {
    const kid = group[i].kid;
    console.log(i, kid);
    const gotCheck =
      kid.kidDetails.checked == 'true' ? 'kid-card-BG_checked' : '';
    kidsContainer.innerHTML +=
      `<div id="${kid.kidNum}" class="kid-card-BG ${gotCheck}" style="background-image: url('${kid.kidDetails.image}')"` +
      `onclick="kidTouch(this)">
<div class="name-contain">
<p class="name-in-frame">${kid.kidDetails.fname}<br>${kid.kidDetails.lname}</p>
</div>
</div>`;
  }
}
getGroupStatus();

function kidTouch(kidCard) {
  console.log(kidCard);
  kidCard.classList.toggle('kid-card-BG_checked');
  const isChecked = kidCard.classList.contains('kid-card-BG_checked');
  console.log(isChecked);

  axios.post('https://hook.eu1.make.com/sjdlg64p5tpij9m2awkts87rn56g3qu6', {
    kidNum: kidCard.id,
    checked: isChecked,
  });
}
// function kidTouch(kidNum) {
//   document
//     .getElementById(`kid${kidNum}`)
//     .addEventListener('touch', myFunction(kidNum));}
scaleImage = sliderInput => {
  document.documentElement.style.setProperty('--face-size', sliderInput);
};
