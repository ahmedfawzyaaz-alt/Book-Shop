export const getAllCategories = async () => {
  const res = await fetch("https://api.codingarabic.online/api/categories");
  const data = await res.json();
  return data?.data;
};
