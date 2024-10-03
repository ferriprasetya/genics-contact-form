"use client";

import Loading from "@/app/components/Loading";
import PrimaryButton from "@/app/components/PrimaryButton";
import { getDetailContact } from "@/app/services/contact-service/ApiService";
import { Contact } from "@/app/types/Contact";
import Image, { ImageLoaderProps } from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function DetailContact({ params }: { params: { id: string } }) {
  const [isLoading, setLoading] = useState(true);
  const [contact, setContact] = useState(null as Contact | null);

  const onGetDetailContact = async () => {
    setLoading(true);

    const response = await getDetailContact(params.id);
    setContact(response);

    setLoading(false);
  };

  useEffect(() => {
    onGetDetailContact();
  }, []);

  const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <div className='flex flex-col gap-8'>
      <div className='flex gap-2 mb-4'>
        <Link
          href='/'
          className='text-xl text-gray-500 font-semibold hover:text-blue-500'
        >
          &lt; Back
        </Link>
      </div>
      <section className='flex flex-col gap-6 relative'>
        <h2 className='text-2xl font-semibold'>Detail Contact</h2>
        {isLoading ? (
          <div className='absolute inset-0 bg-white bg-opacity-50 flex items-center justify-center'>
            <Loading size={40} />
          </div>
        ) : contact ? (
          <div className='flex flex-col gap-4'>
            <Image
              loader={imageLoader}
              src={contact.imgUrl}
              alt={contact.name}
              height={180}
              width={180}
            />
            <tbody className='text-xl'>
              <tr>
                <td>Name</td>
                <td className='px-2'>:</td>
                <td className='font-semibold'>{contact.name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td className='px-2'>:</td>
                <td className='font-semibold'>{contact.email}</td>
              </tr>
              <tr>
                <td>Created At</td>
                <td className='px-2'>:</td>
                <td className='font-semibold'>
                  {contact.createdAt?.split("T")[0]}
                </td>
              </tr>
            </tbody>
          </div>
        ) : (
          <p className="text-xl text-center text-gray-500">Contact Not Found</p>
        )}
      </section>
    </div>
  );
}
