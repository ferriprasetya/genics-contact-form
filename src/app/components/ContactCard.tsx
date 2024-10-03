import { useState } from "react";
import { Contact } from "@/app/types/Contact";
import Loading from "@/app/components/Loading";
import Image, { ImageLoaderProps } from "next/image";

interface ContactCardProps {
  contact: Contact;
  deleteContact: (id: string) => Promise<void>;
  onClick: (id: string) => void;
}
export default function ContactCard({
  contact,
  deleteContact,
  onClick,
}: ContactCardProps) {
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);

  const onDeleteContact = async () => {
    setIsLoadingDelete(true);
    await deleteContact(contact.id);
    setIsLoadingDelete(false);
  };

  const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <div
      onClick={() => onClick(contact.id)}
      className='flex gap-4 items-center rounded-md px-3 py-2 shadow-md hover:bg-blue-50 transition-colors cursor-pointer'
    >
      <Image
        loader={imageLoader}
        src={contact.imgUrl}
        alt={contact.name}
        height={60}
        width={60}
      />
      <div className='flex flex-col gap-1 text-gray-600'>
        <p>{contact.name}</p>
        <p>{contact.email}</p>
      </div>
      <button
        className='bg-red-500 hover:bg-red-600 active:bg-red-700 transition-colors text-white border-none rounded-md p-2 text-base ml-auto h-8 w-auto aspect-square'
        onClick={onDeleteContact}
      >
        {isLoadingDelete ? <Loading size={16} /> : "X"}
      </button>
    </div>
  );
}
