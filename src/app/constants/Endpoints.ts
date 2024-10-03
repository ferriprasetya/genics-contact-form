export const ENDPOINTS = {
  GET_ALL_CONTACTS: "/api/contacts",
  ADD_CONTACT: "/api/contacts/new",
  DETAIL_CONTACT: (id: string) => `/api/contacts/${id}`,
};
