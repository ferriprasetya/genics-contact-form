import { getContacts, addContact, deleteContact } from "./localStorage.js";

// Data
const onGetContacts = () => {
  const contacts = getContacts();
  return contacts;
};

const onAddContact = (name, email) => {
  const existingContacts = onGetContacts();

  const isContactExist = existingContacts.some(
    (existingContact) => existingContact.email === email
  );

  // validation
  if (isContactExist) {
    alert("Contact already exists! Please use a different email address.");
    return;
  }

  const payload = {
    id: Date.now(),
    name,
    email,
    image: `https://dummyjson.com/icon/${name}/128`,
  };

  // store contact to local storage
  addContact(payload);

  // update contact list
  getAndSetContactItems();
};

const onDeleteContacts = (id) => {
  // delete contact from local storage
  deleteContact(id);

  // update contact list
  getAndSetContactItems();
};

// DOM Manipulation
const setElementsContactItems = (contacts) => {
  const contactList = document.querySelector(".contact-list");
  const emptyMessageElement = `<p class="contact-list__empty-message">You have no contacts yet.</p>`;

  if (!contacts.length) {
    contactList.innerHTML = emptyMessageElement;
    return;
  }

  const contactItemsElements = contacts
    .map(
      (contact) => `
    <div class="contact-item">
      <img src="${contact.image}" alt="${contact.name}" />
      <div class="contact-item__text-container">
        <p>${contact.name}</p>
        <p>${contact.email}</p>
      </div>
      <button class="close-button" onclick="onDeleteContacts(${contact.id})">X</button>
    </div>
  `
    )
    .join("");

  contactList.innerHTML = contactItemsElements;
};

const getAndSetContactItems = () => {
  const contacts = onGetContacts();

  // update contact list elements
  setElementsContactItems(contacts);
};

// DOM Events
window.onDeleteContacts = onDeleteContacts;

document.addEventListener("DOMContentLoaded", () => {
  getAndSetContactItems();
});

const contactForm = document.querySelector("#add-contact-form");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const nameInput = event.target[0];
  const emailInput = event.target[1];

  if (emailInput.value && nameInput.value) {
    onAddContact(nameInput.value, emailInput.value);
    emailInput.value = "";
    nameInput.value = "";
  }
});
