export const ENDPOINTS = {
  GET_ALL_CONTACTS: "/api/contacts",
  ADD_CONTACT: "/api/contacts/new",
  DELETE_CONTACT: (id: number) => `/api/contacts/${id}`,
};
