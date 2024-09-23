import { Contact } from "@/types/Contact";
import ContactCard from "@/components/contact-card";
import Loader from "@/components/loader";
import "./index.css";

interface ContactListProps {
  data: Contact[];
  isLoading: boolean;
  deleteContact: (id: number) => Promise<void>;
}
export default function ContactList({
  data,
  isLoading,
  deleteContact,
}: ContactListProps) {
  return (
    <div className='contact-list'>
      {data?.length > 0 && !isLoading ? (
        data.map((contact) => (
          <ContactCard
            key={contact.id}
            contact={contact}
            deleteContact={deleteContact}
          />
        ))
      ) : isLoading ? (
        <div className='loader-container'>
          <Loader size={40} />
        </div>
      ) : (
        <p className='contact-list__message'>You have no contacts yet.</p>
      )}
    </div>
  );
}
