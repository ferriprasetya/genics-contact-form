import { Contact } from "@/app/types/Contact";
import ContactCard from "@/app/components/ContactCard";
import Loading from "@/app/components/Loading";

interface ContactListProps {
  data: Contact[];
  isLoading: boolean;
  deleteContact: (id: string) => Promise<void>;
  onClickDetail: (id: string) => void;
}
export default function ContactList({
  data,
  isLoading,
  deleteContact,
  onClickDetail,
}: ContactListProps) {
  return (
    <div className='flex flex-col gap-4 relative'>
      {data?.length > 0
        ? data.map((contact) => (
            <ContactCard
              key={contact.id}
              contact={contact}
              deleteContact={deleteContact}
              onClick={onClickDetail}
            />
          ))
        : !isLoading && (
            <p className='text-center text-gray-500'>
              You have no contacts yet.
            </p>
          )}

      {isLoading && (
        <div className='absolute inset-0 bg-white bg-opacity-50 flex items-center justify-center'>
          <Loading size={40} />
        </div>
      )}
    </div>
  );
}
