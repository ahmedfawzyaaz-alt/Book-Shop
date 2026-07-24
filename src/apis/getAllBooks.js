export const getAllBooks = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch("https://api.codingarabic.online/api/books");
  const data = await res.json();
  return data?.data;
};
