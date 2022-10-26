export const filterContacts = (cnts, filter) =>
  cnts?.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase().trim())
  );
