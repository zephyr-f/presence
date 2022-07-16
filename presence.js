console.log('presence.js works! :)');

const sliderImages = document.getElementById('sliderImages');
// const faceSize = document.documentElement
// faceSize.style.setProperty(--face-size, slider.value);

sliderImages.oninput = function () {
  output.innerHTML = this.value;
};

async function getGroupStatus() {
  const options = {
    method: 'GET',
    url: 'https://hook.us1.make.com/uq4x35bqois6uwwsk1fyxk37x7re6160',
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
    console.log(kid);
    kidsContainer.innerHTML +=
      `<div id="${kidNum}" class="kid-card-BG" style="background:  #a8ff78 url('${kid.image}')"` +
      // ontouchend="kidTouch(this)"
      `onclick="kidTouch(this)">
<div class="name-contain">
<p class="name-in-frame">${kid.fname}<br>${kid.lname}</p>
</div>
</div>`;
  }
}
getGroupStatus();

function kidTouch(kidCard) {
  console.log(kidCard);
  // alert(kidCard.id);
  kidCard.classList.toggle('kid-card-BG_checked');
  const isChecked = kidCard.classList.contains('kid-card-BG_checked');
  console.log(isChecked);

  axios.post('https://hook.us1.make.com/uq4x35bqois6uwwsk1fyxk37x7re6160', {
    kidNum: kidCard.id,
    checked: isChecked,
  });
}
// function kidTouch(kidNum) {
//   document
//     .getElementById(`kid${kidNum}`)
//     .addEventListener('touch', myFunction(kidNum));}
