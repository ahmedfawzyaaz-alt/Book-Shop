export const getAllImage = async () => {
  const res = await fetch("https://api.codingarabic.online/api/books");
  const data = await res.json();
  return data?.data;
};
