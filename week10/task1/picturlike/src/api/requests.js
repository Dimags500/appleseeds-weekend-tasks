export const getData = async () => {
  const res = await fetch(
    "https://628f37b40e69410599d7c59d.mockapi.io/products"
  );

  return await res.json();
};
