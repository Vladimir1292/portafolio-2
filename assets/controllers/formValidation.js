const d = document;
const form = d.getElementById("contactForm");
const nameInput = d.getElementById("name");
const emailInput = d.getElementById("email");
const messageInput = d.getElementById("message");
const nameError = d.getElementById("nameError");
const emailError = d.getElementById("emailError");
const messageError = d.getElementById("messageError");
const confirmationMessage = d.getElementById("confirmationMessage");

//Función para limpiar los mensajes de error
export default function clearError(field, error) {
  field.classList.remove("error-border");
  field.classList.add("succes-border");
  error.textContent = "";
}

// Función para mostrar mensajes de error si el campo está vacio cuando se pierda
function checkEmpty(field, error, errorMessage) {
  if (field.value.trim() === "") {
    error.textContent = errorMessage;
    field.classList.add("error-border");
  }
}

// AddEventListener para el campo de nombre
nameInput.addEventListener("input", () => {
  if (nameInput.validity.valid) {
    clearError(nameInput, nameError);
  }
});
// AddEventListener para detectar si se salió del campo y los datos del nombre  están vacios
nameInput.addEventListener("blur", () => {
  checkEmpty(nameInput, nameError, "El nombre es requerido");
});

// AddEventListener para el campo de email
emailInput.addEventListener("input", () => {
  if (emailInput.validity.valid) {
    clearError(emailInput, emailError);
  }
});
// AddEventListener para detectar si se salió del campo y los datos están vacios
emailInput.addEventListener("blur", () => {
  checkEmpty(emailInput, emailError, "El email es requerido");
});
// AddEventListener para el campo de message
messageInput.addEventListener("input", () => {
  if (messageInput.validity.valid) {
    clearError(messageInput, messageError);
  }
});
// AddEventListener para detectar si se salió del campo y los datos están vacios
messageInput.addEventListener("blur", () => {
  checkEmpty(messageInput, messageError, "El mensaje es requerido");
});

// función para el evento Submit

form.addEventListener("submit", (e) => {
  e.preventDefault();
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";

const nameRegex = /^[A-Za-z]+$/


  if (nameInput.value.trim() === "" ) {
    nameError.textContent = "El nombre es requerido";
    nameInput.classList.add("error-border");
    return;
  }else if (!nameRegex.test(nameInput.value) ) {
    nameError.textContent = "Este no es un nombre válido 💀";
    nameInput.classList.add("error-border");
    return;
  }else {
    nameInput.classList.add("succes-border");
  }


  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


   if (emailInput.value.trim() === "" ) {
    emailError.textContent = "El email es requerido";
    nameInput.classList.add("error-border");
    return;
  }else if (!emailRegex.test(emailInput.value)) {
    emailError.textContent = "Este no es un email válido";
    emailInput.classList.add("error-border");
    return;
  }else{
    emailInput.classList.add("succes-border");
  }

  if (messageInput.value.trim() === "") {
    messageError.textContent = "El mensaje es requerido";
    messageInput.classList.add("error-border");
    return;
  } else {
    messageInput.classList.add("succes-border");


  }

  confirmationMessage.textContent = "El mensaje fue enviado";
  form.reset();
});
