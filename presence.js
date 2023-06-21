// console.log('presence.js works! :)');

// const sliderImages = document.getElementById('sliderImages');
// const faceSize = document.documentElement
// faceSize.style.setProperty(--face-size, slider.value);

/* group = [
  {
    kid: {
      kidNum: '123456828',
      kidDetails: {
        fname: 'תמר',
        image:
          'https://dl.airtable.com/.attachments/519842baad1ef89ba8ca98e5d554ebe9/1c9d7de9/fp_40.png?ts=1658180570&userId=usrQw16CkkT5lsSld&cs=697aaf1b375ceec7',
        lname: 'שוורץ',
        checked: 'true',
      },
    },
  },
  {
    kid: {
      kidNum: '123456789',
      kidDetails: {
        fname: 'מאיה',
        image:
          'https://dl.airtable.com/.attachments/521297c8f4477257f91e81180eb7a1eb/078aa6e4/fp_2.png?ts=1658180570&userId=usrQw16CkkT5lsSld&cs=37bfdda28391b83f',
        lname: 'מאיר',
        checked: 'true',
      },
    },
  },
  {
    kid: {
      kidNum: '123456801',
      kidDetails: {
        fname: 'רחל',
        image:
          'https://dl.airtable.com/.attachments/09bae82dc2cfcbfacc5c347d1417aa85/e505c740/fp_22.png?ts=1658180570&userId=usrQw16CkkT5lsSld&cs=9036878ed5846cf9',
        lname: 'יצחק',
        checked: 'false',
      },
    },
  },
  {
    kid: {
      kidNum: '123456823',
      kidDetails: {
        fname: 'שמואל',
        image:
          'https://dl.airtable.com/.attachments/e292def49c9832e190ad515893f11f4f/8014f7b9/fp_33.png?ts=1658180570&userId=usrQw16CkkT5lsSld&cs=3ee2a4693aa45cb6',
        lname: 'ששון',
        checked: 'true',
      },
    },
  },
  {
    kid: {
      kidNum: '123456825',
      kidDetails: {
        fname: 'יהונתן',
        image:
          'https://dl.airtable.com/.attachments/4c2187215790b54eb12d2e29adb75b7a/7ab9485a/fp_35.png?ts=1658180570&userId=usrQw16CkkT5lsSld&cs=1203ce732d93b917',
        lname: 'עובדיה',
        checked: 'false',
      },
    },
  },
  {
    kid: {
      kidNum: '123456799',
      kidDetails: {
        fname: 'אלה',
        image:
          'https://dl.airtable.com/.attachments/179712a43ce842782b41fbb9dee662af/40a0ff3d/fp_15.png?ts=1658180570&userId=usrQw16CkkT5lsSld&cs=d499f423f0fd85ee',
        lname: 'לוין',
        checked: 'true',
      },
    },
  },
  {
    kid: {
      kidNum: '123456827',
      kidDetails: {
        fname: 'שמעון',
        image:
          'https://dl.airtable.com/.attachments/71464a35d945dce637cf4935a03647e0/a83fed1c/fp_39.png?ts=1658180570&userId=usrQw16CkkT5lsSld&cs=aa05406b2e0808ed',
        lname: 'שורץ',
        checked: 'true',
      },
    },
  },
  {
    kid: {
      kidNum: '123456817',
      kidDetails: {
        fname: 'יהודה',
        image:
          'https://dl.airtable.com/.attachments/3fb1caf40d668cf0547f243ab30f74fe/9b6ef583/fp_24.png?ts=1658180570&userId=usrQw16CkkT5lsSld&cs=6c67b755c34710cd',
        lname: 'ממן',
        checked: 'true',
      },
    },
  },
  {
    kid: {
      kidNum: '123456810',
      kidDetails: {
        fname: 'אריאל',
        image:
          'https://dl.airtable.com/.attachments/7b281c95bfd83265510ae363bb84c577/49f48476/fp_8.png?ts=1658180570&userId=usrQw16CkkT5lsSld&cs=e21e317ba8f3b788',
        lname: 'אלבז',
        checked: 'false',
      },
    },
  },
  {
    kid: {
      kidNum: '123456794',
      kidDetails: {
        fname: 'אדל',
        image:
          'https://dl.airtable.com/.attachments/8da55c525f1165614cca81cd905eb5c3/9cc62feb/fp_9.png?ts=1658180570&userId=usrQw16CkkT5lsSld&cs=7392f5772096c877',
        lname: 'שפירא',
        checked: 'false',
      },
    },
  },
  {
    kid: {
      kidNum: '123456819',
      kidDetails: {
        fname: 'איתן',
        image:
          'https://dl.airtable.com/.attachments/0369c9eb69e740872adf723fcf8e037a/3fc74cbb/fp_28.png?ts=1658180570&userId=usrQw16CkkT5lsSld&cs=e188a290cb1a81f8',
        lname: 'מימון',
        checked: 'false',
      },
    },
  },
  {
    kid: {
      kidNum: '123456797',
      kidDetails: {
        fname: 'אסתר',
        image:
          'https://dl.airtable.com/.attachments/e67b60ae288887bcb4e614bb4793162e/ad6bf0b6/fp_12.png?ts=1658180570&userId=usrQw16CkkT5lsSld&cs=ba1d34b5dbee808b',
        lname: 'גולן',
        checked: 'false',
      },
    },
  },
  {
    kid: {
      kidNum: '123456790',
      kidDetails: {
        fname: 'אביגיל',
        image:
          'https://dl.airtable.com/.attachments/668d7445454e319a5baa7544e797f6c3/627eea2b/fp_3.png?ts=1658180570&userId=usrQw16CkkT5lsSld&cs=2be32859f39a503e',
        lname: 'חן',
        checked: 'false',
      },
    },
  },
  {
    kid: {
      kidNum: '123456814',
      kidDetails: {
        fname: 'רפאל',
        image:
          'https://dl.airtable.com/.attachments/5835a49fca15e77948994664c3973b16/eeeab599/fp_18.png?ts=1658180570&userId=usrQw16CkkT5lsSld&cs=feafb5d44684cc0d',
        lname: 'שרעבי',
        checked: 'false',
      },
    },
  },
  {
    kid: {
      kidNum: '123456816',
      kidDetails: {
        fname: 'משה',
        image:
          'https://dl.airtable.com/.attachments/7a2c607e8f6dfef64fc63f0767fdd819/2df5fcef/fp_21.png?ts=1658180570&userId=usrQw16CkkT5lsSld&cs=d5da4d592bced094',
        lname: 'אלון',
        checked: 'true',
      },
    },
  },
  {
    kid: {
      kidNum: '123456813',
      kidDetails: {
        fname: 'אורי',
        image:
          'https://dl.airtable.com/.attachments/e171f3aa7f6f156bcd7cd57188a02f95/6face256/fp_17.png?ts=1658180570&userId=usrQw16CkkT5lsSld&cs=c71d4d69c51b6012',
        lname: 'נחום',
        checked: 'false',
      },
    },
  },
  {
    kid: {
      kidNum: '123456805',
      kidDetails: {
        fname: 'טליה',
        image:
          'https://dl.airtable.com/.attachments/468bfa56cac9944827a31331606cc23b/32985b4a/fp_40.png?ts=1658180570&userId=usrQw16CkkT5lsSld&cs=9fade2ea1ff910ce',
        lname: 'אליהו',
        checked: 'false',
      },
    },
  },
  {
    kid: {
      kidNum: '123456793',
      kidDetails: {
        fname: 'איילה',
        image:
          'https://dl.airtable.com/.attachments/6a940b5991f72ede0dd1f50b6448fedd/30c395a0/fp_7.png?ts=1658180570&userId=usrQw16CkkT5lsSld&cs=9cc0c295e4ed4fd6',
        lname: 'משה',
        checked: 'false',
      },
    },
  },
  {
    kid: {
      kidNum: '123456826',
      kidDetails: {
        fname: 'יצחק',
        image:
          'https://dl.airtable.com/.attachments/2ee58365d63360970cd7cd098cb91e32/78baa9d3/fp_36.png?ts=1658180570&userId=usrQw16CkkT5lsSld&cs=033614f0367ab2a9',
        lname: 'בכר',
        checked: 'true',
      },
    },
  },
  {
    kid: {
      kidNum: '123456818',
      kidDetails: {
        fname: 'אברהם',
        image:
          'https://dl.airtable.com/.attachments/0201874f6a631383a78296ef943f38b5/16a0c5cf/fp_27.png?ts=1658180570&userId=usrQw16CkkT5lsSld&cs=806ef7f5798efd5f',
        lname: 'בן חמו',
        checked: 'false',
      },
    },
  },
  {
    kid: {
      kidNum: '123456806',
      kidDetails: {
        fname: 'רוני',
        image:
          'https://dl.airtable.com/.attachments/2e5fc7eacf4c1377c6d2e0a9721e8475/60e57e3f/fp_32.png?ts=1658180570&userId=usrQw16CkkT5lsSld&cs=b8b2e53f6c291e10',
        lname: 'מור',
        checked: 'false',
      },
    },
  },
  {
    kid: {
      kidNum: '123456822',
      kidDetails: {
        fname: 'איתי',
        image:
          'https://dl.airtable.com/.attachments/ddc1ce599b0d85b1f7875724cdc22b32/247d3401/fp_31.png?ts=1658180570&userId=usrQw16CkkT5lsSld&cs=476b2e5e1e24e18a',
        lname: 'רוזנברג',
        checked: 'false',
      },
    },
  },
  {
    kid: {
      kidNum: '123456800',
      kidDetails: {
        fname: 'מרים',
        image:
          'https://dl.airtable.com/.attachments/6f6b3a205daccc42d1bb15c9c78da572/6af1c31f/fp_19.png?ts=1658180570&userId=usrQw16CkkT5lsSld&cs=075b9ed11d70f219',
        lname: 'סגל',
        checked: null,
      },
    },
  },
  {
    kid: {
      kidNum: '123456796',
      kidDetails: {
        fname: 'שירה',
        image:
          'https://dl.airtable.com/.attachments/1a479e843aa74ed71ee4bcefa07359bd/a3f5c8ee/fp_11.png?ts=1658180570&userId=usrQw16CkkT5lsSld&cs=05d77ade5a83138f',
        lname: 'אוחנה',
        checked: null,
      },
    },
  },
  {
    kid: {
      kidNum: '123456809',
      kidDetails: {
        fname: 'לביא',
        image:
          'https://dl.airtable.com/.attachments/a2b34fbb6a767464d2e50b3923eac76f/855cacb6/fp_5.png?ts=1658180570&userId=usrQw16CkkT5lsSld&cs=eadeffe1238c59f6',
        lname: 'לביא',
        checked: 'false',
      },
    },
  },
  {
    kid: {
      kidNum: '123456803',
      kidDetails: {
        fname: 'ליה',
        image:
          'https://dl.airtable.com/.attachments/cdfc9b2fe0b8f61117681ec295dc24e3/731ba5cd/fp_25.png?ts=1658180570&userId=usrQw16CkkT5lsSld&cs=725d7ecd27367ae6',
        lname: 'יעקב',
        checked: 'false',
      },
    },
  },
  {
    kid: {
      kidNum: '123456811',
      kidDetails: {
        fname: 'יוסף',
        image:
          'https://dl.airtable.com/.attachments/257bcbc0bf621914fb123c2c426969f3/266d8faf/fp_13.png?ts=1658180570&userId=usrQw16CkkT5lsSld&cs=dfcfa4dddae4ef64',
        lname: 'אטיאס',
        checked: 'false',
      },
    },
  },
  {
    kid: {
      kidNum: '123456802',
      kidDetails: {
        fname: 'רבקה',
        image:
          'https://dl.airtable.com/.attachments/84522cc6f674dd0d340c0536d9483ec6/a1735d91/fp_23.png?ts=1658180570&userId=usrQw16CkkT5lsSld&cs=014015e7b8fc9b81',
        lname: 'שלום',
        checked: 'false',
      },
    },
  },
  {
    kid: {
      kidNum: '123456804',
      kidDetails: {
        fname: 'חיה',
        image:
          'https://dl.airtable.com/.attachments/8bdffbf863126ad9e4838fdcc2ef13e0/aef39206/fp_26.png?ts=1658180570&userId=usrQw16CkkT5lsSld&cs=d3d6ed2a20a445ff',
        lname: 'בר',
        checked: null,
      },
    },
  },
  {
    kid: {
      kidNum: '123456824',
      kidDetails: {
        fname: 'אליה',
        image:
          'https://dl.airtable.com/.attachments/7519404467e83b008a49850b1c8622a5/4e46c143/fp_34.png?ts=1658180570&userId=usrQw16CkkT5lsSld&cs=e9dfa0561c6ccc5b',
        lname: 'אסולין',
        checked: 'true',
      },
    },
  },
  {
    kid: {
      kidNum: '123456795',
      kidDetails: {
        fname: 'יעל',
        image:
          'https://dl.airtable.com/.attachments/690683f35a492810013b837098261c65/6d727a51/fp_10.png?ts=1658180570&userId=usrQw16CkkT5lsSld&cs=19830906e0fc8eb6',
        lname: 'חזן',
        checked: null,
      },
    },
  },
  {
    kid: {
      kidNum: '123456820',
      kidDetails: {
        fname: 'דניאל',
        image:
          'https://dl.airtable.com/.attachments/d83c84aee698ad1f3281d9fc6074eae4/a2848fd7/fp_29.png?ts=1658180570&userId=usrQw16CkkT5lsSld&cs=432078c7632c63c3',
        lname: 'וקנין',
        checked: 'true',
      },
    },
  },
  {
    kid: {
      kidNum: '123456808',
      kidDetails: {
        fname: 'דוד',
        image:
          'https://dl.airtable.com/.attachments/ac0a51e35923318ee5cfcccb76759e09/9a7149f4/fp_1.png?ts=1658180570&userId=usrQw16CkkT5lsSld&cs=5b7adc0f6a95c97e',
        lname: 'סויסה',
        checked: 'true',
      },
    },
  },
  {
    kid: {
      kidNum: '123456792',
      kidDetails: {
        fname: 'שרה',
        image:
          'https://dl.airtable.com/.attachments/526d1adf2041f50b019f5296d6ededa6/6274d57e/fp_6.png?ts=1658180570&userId=usrQw16CkkT5lsSld&cs=c69e7c6ef1cd0daa',
        lname: 'טל',
        checked: 'false',
      },
    },
  },
  {
    kid: {
      kidNum: '123456807',
      kidDetails: {
        fname: 'רומי',
        image:
          'https://dl.airtable.com/.attachments/3febaf1c82bbed2625eabd79b54885aa/018a3c0d/fp_37.png?ts=1658180570&userId=usrQw16CkkT5lsSld&cs=9509b9f2b3d201c7',
        lname: 'דיין',
        checked: 'false',
      },
    },
  },
  {
    kid: {
      kidNum: '123456791',
      kidDetails: {
        fname: 'נועה',
        image:
          'https://dl.airtable.com/.attachments/e95156c3a5370c395e7d0f437a03d4b1/4477ddd9/fp_4.png?ts=1658180570&userId=usrQw16CkkT5lsSld&cs=88d532adbf366cab',
        lname: 'קליין',
        checked: 'true',
      },
    },
  },
  {
    kid: {
      kidNum: '123456812',
      kidDetails: {
        fname: 'נועם',
        image:
          'https://dl.airtable.com/.attachments/5a3abf547aed91624642b576a3eb7255/bbaae0c3/fp_16.png?ts=1658180570&userId=usrQw16CkkT5lsSld&cs=b357ec17c81fc9f5',
        lname: 'שמש',
        checked: 'false',
      },
    },
  },
  {
    kid: {
      kidNum: '123456821',
      kidDetails: {
        fname: 'ישראל',
        image:
          'https://dl.airtable.com/.attachments/b3a18f980581cf1502ee9563744c5a3f/0482b705/fp_30.png?ts=1658180570&userId=usrQw16CkkT5lsSld&cs=d7c79072aa26f70a',
        lname: 'שחר',
        checked: 'true',
      },
    },
  },
  {
    kid: {
      kidNum: '123456798',
      kidDetails: {
        fname: 'חנה',
        image:
          'https://dl.airtable.com/.attachments/ced8f584e00263fcad64442834e7ece4/caf03fb0/fp_14.png?ts=1658180570&userId=usrQw16CkkT5lsSld&cs=6a8aec95d0640949',
        lname: 'אשכנזי',
        checked: 'true',
      },
    },
  },
  {
    kid: {
      kidNum: '123456815',
      kidDetails: {
        fname: 'ארי',
        image:
          'https://dl.airtable.com/.attachments/db39284434b36272b50c801834aa0289/d83fb840/fp_20.png?ts=1658180570&userId=usrQw16CkkT5lsSld&cs=6542b5d6e1a4e26c',
        lname: 'שטרן',
        checked: 'true',
      },
    },
  },
]; */

async function getGroupStatus() {
  // ↓ get real data from cloud
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
      `<div id="${kid.kidNum}" class="kid-card-BG ${gotCheck}"` +
      `onclick="kidTouch(this)">
      <div class="kid-image" style="background-image: url('${kid.kidDetails.image}')">
      </div>
      <div class="name-contain">
<p class="name-in-frame">${kid.kidDetails.fname} ${kid.kidDetails.lname}</p>
</div>`;
  }
}
getGroupStatus();

function kidTouch(kidCard) {
  console.log(kidCard);
  kidCard.classList.toggle('kid-card-BG_checked');
  const isChecked = kidCard.classList.contains('kid-card-BG_checked');
  console.log(isChecked);
  // ↓ post kidcheck to cloud
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
  document.body.style.setProperty('--face-size', sliderInput + 'px');
};
const kidsContainer = document.querySelector('#kids-container');
let scaleText = sliderInput => {
  kidsContainer.style.setProperty('font-size', sliderInput * 90 + '%');
  // document.body.style.setProperty('line-height', 1 - 0.05 * sliderInput + 'em');
  // document
  //   .getElementsByClassName('kid-card-BG')
  //   .style.setProperty('font-size', sliderInput + 'em');
};
scaleText(1);
