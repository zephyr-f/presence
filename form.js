const form = document.querySelector('.form');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', event => {
  event.preventDefault(); // prevent default form submission behavior
  const formData = new FormData(); // create a new FormData object
  formData.append('Email', emailInput.value); // add email input value to the form data
  formData.append('message', messageInput.value);
  // add value to the form data
  axios
    .post(
      'https://hook.eu1.make.com/orw7rlxa96tuysrkrw42w6djjfq3ngyh',
      formData
    )
    .then(response => {
      // display success message on the page
      const successMessage = document.createElement('p');
      successMessage.textContent =
        'תודה על התענינותך. הטופס נשלח בהצלחה. אענה בהקדם';
      form.appendChild(successMessage);
    })
    .catch(error => {
      // display error message on the page
      const errorMessage = document.createElement('p');
      errorMessage.textContent = 'אופס! משהו השתבש. אנא נסה שוב מאוחר יותר';
      form.appendChild(errorMessage);
      console.error(error);
    });
});
