import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');

formRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('input', throttle(onFormInput, 500));

readInputsData();

function readInputsData() {
  const savedInputsData = localStorage.getItem('inputsData');
  if (savedInputsData) {
    try {
      const parsedInputData = JSON.parse(savedInputsData);
      putSavedDataToInput(parsedInputData);
    } catch (error) {
      console.log(`sori chuvak(, ${error}`);
    }
  }
}

function putSavedDataToInput(data) {
  formRef.email.value = data.email;
  formRef.message.value = data.message;
}

const inputsData = { email: '', message: '' };
function onFormInput() {
  const currentEmailValue = formRef.email.value;
  const currentMessageValue = formRef.message.value;
  inputsData.email = currentEmailValue;
  inputsData.message = currentMessageValue;
  saveInputsData(inputsData);
}

function saveInputsData(inputsData) {
  const stringifiedData = JSON.stringify(inputsData);
  localStorage.setItem('inputsData', stringifiedData);
}

function onFormSubmit(evt) {
  evt.preventDefault();
  const formData = {};
  formData.email = evt.target.email.value;
  formData.message = evt.target.message.value;
  console.log(formData);
  evt.target.reset();
  localStorage.removeItem('inputsData');
}
