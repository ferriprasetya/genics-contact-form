import { useEffect, useState } from "react";
import "@/App.css";
import AddContactForm from "@/containers/add-contact-form";
import {
  addContact,
  deleteContact,
  getAllContacts,
} from "@/services/ApiService";
import { Contact } from "@/types/Contact";
import ContactList from "./containers/contact-list";

function App() {
  const [isLoadingList, setLoadingList] = useState(false);
  const [contactList, setContactList] = useState([] as Contact[]);
  const onAddContact = async ({
    name,
    email,
  }: {
    name: string;
    email: string;
  }) => {
    const payload = {
      name,
      email,
      imgUrl: `https://dummyjson.com/icon/${encodeURIComponent(name)}/128`,
    };

    const response = await addContact(payload);
    if (response.success) {
      onGetAllContacts();
    }
  };

  const onGetAllContacts = async () => {
    setLoadingList(true);

    const response = await getAllContacts();
    setContactList(response);

    setLoadingList(false);
  };

  const onDeleteContact = async (id: number) => {
    const response = await deleteContact(id);

    if (response.success) {
      onGetAllContacts();
    }
  };

  useEffect(() => {
    onGetAllContacts();
  }, []);

  return (
    <main className='container'>
      <h1>Contact App</h1>

      <section className='section-container'>
        <h2>Add New Contact</h2>

        <AddContactForm submit={onAddContact} />
      </section>

      <section className='section-container'>
        <h2>Contact List</h2>

        <ContactList
          data={contactList}
          isLoading={isLoadingList}
          deleteContact={onDeleteContact}
        />
      </section>
    </main>
  );
}

export default App;

