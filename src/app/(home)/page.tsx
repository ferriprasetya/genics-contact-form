"use client";

import { useEffect, useState } from "react";
import { Contact } from "@/app/types/Contact";
import {
  addContact,
  deleteContact,
  getAllContacts,
} from "@/app/services/contact-service/ApiService";
import AddContactForm from "./containers/AddContactForm";
import ContactList from "./containers/ContactList";
import { useRouter } from "next/navigation";

export default function Home() {
  const [isLoadingList, setLoadingList] = useState(true);
  const [contactList, setContactList] = useState([] as Contact[]);
  const onAddContact = async ({
    name,
    email,
  }: {
    name: string;
    email: string;
  }) => {
    setLoadingList(true);
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

  const onDeleteContact = async (id: string) => {
    const response = await deleteContact(id);

    if (response.success) {
      onGetAllContacts();
    }
  };

  useEffect(() => {
    onGetAllContacts();
  }, []);

  const router = useRouter();
  const goToDetail = (id: string) => {
    router.push(`/contact/${id}`);
  };

  return (
    <div className='flex flex-col gap-8'>
      <section className='flex flex-col gap-6'>
        <h2 className='text-2xl font-semibold'>Add New Contact</h2>

        <AddContactForm submit={onAddContact} />
      </section>

      <section className='flex flex-col gap-6'>
        <h2 className='text-2xl font-semibold'>Contact List</h2>

        <ContactList
          data={contactList}
          isLoading={isLoadingList}
          deleteContact={onDeleteContact}
          onClickDetail={goToDetail}
        />
      </section>
    </div>
  );
}

