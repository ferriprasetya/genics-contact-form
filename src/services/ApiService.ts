import { ENDPOINTS } from "@/constants/endpoints";
import { mapContactListDataFromApi } from "./Mapper";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
const apiToken = import.meta.env.VITE_API_TOKEN;

export const getAllContacts = async () => {
  const response = await fetch(apiBaseUrl + ENDPOINTS.GET_ALL_CONTACTS, {
    headers: {
      Authorization: `Bearer ${apiToken}`,
    },
  });

  return mapContactListDataFromApi(await response.json());
};

export const addContact = async ({
  name,
  email,
  imgUrl,
}: {
  name: string;
  email: string;
  imgUrl: string;
}) => {
  const payload = {
    name,
    email,
    img_url: imgUrl,
  };

  const response = await fetch(apiBaseUrl + ENDPOINTS.ADD_CONTACT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiToken}`,
    },
    body: JSON.stringify(payload),
  });

  return await response.json();
};

export const deleteContact = async (id: number) => {
  const response = await fetch(apiBaseUrl + ENDPOINTS.DELETE_CONTACT(id), {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${apiToken}`,
    },
  });

  return await response.json();
};
