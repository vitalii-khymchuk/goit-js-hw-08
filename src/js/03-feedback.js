import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');

formRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('input', throttle(onFormInput, 500));

const inputsData = { email: '', message: '' };

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
  if (!data) return;
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      formRef[key].value = data[key];
      inputsData[key] = data[key];
    }
  }
}

function onFormInput(e) {
  inputsData[e.target.name] = e.target.value;
  saveInputsData(inputsData);
}

function saveInputsData(inputsData) {
  const stringifiedData = JSON.stringify(inputsData);
  localStorage.setItem('inputsData', stringifiedData);
}

function onFormSubmit(evt) {
  console.log(inputsData);
  evt.target.reset();
  localStorage.removeItem('inputsData');
}
