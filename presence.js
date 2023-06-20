async function getGroupStatus() {
  await axios
    .request({
      method: 'GET',
      url: 'https://hook.eu1.make.com/sjdlg64p5tpij9m2awkts87rn56g3qu6',
      headers: { 'content-type': 'application/json' },
    })
    .then(e => {
      group = e.data;
    })
    .catch(e => {});
  let e = document.getElementById('kids-container');
  for (let t in group) {
    const i = group[t].kid,
      a = 'true' == i.kidDetails.checked ? 'kid-card-BG_checked' : '';
    e.innerHTML += `<div id="${i.kidNum}" class="kid-card-BG ${a}"onclick="kidTouch(this)">\n      <div class="kid-image" style="background-image: url('${i.kidDetails.image}')">\n      </div>\n      <div class="name-contain">\n<p class="name-in-frame">${i.kidDetails.fname} ${i.kidDetails.lname}</p>\n</div>`;
  }
}
function kidTouch(e) {
  e.classList.toggle('kid-card-BG_checked');
  const t = e.classList.contains('kid-card-BG_checked');
  axios.post('https://hook.eu1.make.com/sjdlg64p5tpij9m2awkts87rn56g3qu6', {
    kidNum: e.id,
    checked: t,
  });
}
getGroupStatus(),
  (scaleImage = e => {
    document.body.style.setProperty('--face-size', e + 'px');
  });
let scaleText = e => {
  document.body.style.setProperty('font-size', 90 * e + '%');
};
scaleText(1);
