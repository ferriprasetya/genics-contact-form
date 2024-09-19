const LOCAL_STORAGE_KEY = "contacts";
export const getContacts = () => {
  const contactsString = localStorage.getItem(LOCAL_STORAGE_KEY);

  return contactsString ? JSON.parse(contactsString) : [];
};

export const addContact = (contact) => {
  const contacts = getContacts();
  contacts.unshift(contact);

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
};
export const deleteContact = (id) => {
  const contacts = getContacts().filter((contact) => contact?.id !== id);

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
};
