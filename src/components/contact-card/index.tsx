import { Contact } from "@/types/Contact";
import "./index.css";
import Loader from "@/components/loader";
import { useState } from "react";

interface ContactCardProps {
  contact: Contact;
  deleteContact: (id: number) => Promise<void>;
}
export default function ContactCard({
  contact,
  deleteContact,
}: ContactCardProps) {
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);

  const onDeleteContact = async () => {
    setIsLoadingDelete(true);
    await deleteContact(contact.id);
    setIsLoadingDelete(false);
  };
  return (
    <div className='contact-item'>
      <img src={contact.imgUrl} alt={contact.name} />
      <div className='contact-item__text-container'>
        <p>{contact.name}</p>
        <p>{contact.email}</p>
      </div>
      <button className='close-button' onClick={onDeleteContact}>
        {isLoadingDelete ? <Loader size={16} /> : "X"}
      </button>
    </div>
  );
}
