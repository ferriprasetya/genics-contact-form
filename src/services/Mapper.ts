import { Contact } from "@/types/Contact";

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
