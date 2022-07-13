console.log('presence.js works! :)');

const sliderImages = document.getElementById('sliderImages');
// const faceSize = document.documentElement
// faceSize.style.setProperty(--face-size, slider.value);

sliderImages.oninput = function () {
  output.innerHTML = this.value;
};

const group = {
  kids: {
    1: {
      fname: 'יובל',
      lname: 'פורשר',
      image: 'download.jfif',
    },
    2: {
      fname: 'דוד',
      lname: 'מרציאנו',
      image: 'download(1).jfif',
    },
    3: {
      fname: 'דני',
      lname: 'ישראלי',
      image: 'download(2).jfif',
    },
    4: {
      fname: 'יעל',
      lname: 'פז',
      image: 'download(3).jfif',
    },
    5: {
      fname: 'עודד',
      lname: 'קטש',
      image: 'download(4).jfif',
    },
  },
};
let kidsContainer = document.getElementById('kids-container');
for (let i in group.kids) {
  const kid = group.kids[i];
  kidsContainer.innerHTML += `<div id="${i}" class="kid-card-BG" style="background-image: url('${kid.image}')"
ontouchend="kidTouch(this)" onclick="kidTouch(this)">
<div class="name-contain">
<p class="name-in-frame">${kid.fname}<br>${kid.lname}</p>
</div>
</div>`;
}

function kidTouch(kidCard) {
  // console.log(kidCard);
  // alert(kidCard.id);
  kidCard.classList.toggle('kid-card-BG_checked');
}
// function kidTouch(kidNum) {
//   document
//     .getElementById(`kid${kidNum}`)
//     .addEventListener('touch', myFunction(kidNum));}
