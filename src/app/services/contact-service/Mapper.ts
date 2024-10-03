/* eslint-disable @typescript-eslint/no-explicit-any */

import { Contact } from "@/app/types/Contact";

export const mapContactListDataFromApi = ({ data }: any): Contact[] => {
  return data?.length
    ? data.map((contact: any) => ({
        id: contact.id,
        name: contact.name,
        email: contact.email,
        imgUrl: contact.img_url,
      }))
    : [];
};

export const mapContactDetailDataFromApi = ({
  success,
  data,
}: any): Contact | null => {
  return success
    ? {
        id: data.id,
        name: data.name,
        email: data.email,
        imgUrl: data.img_url,
        createdAt: data.created_at,
      }
    : null;
};
