export const load = async ({ fetch }) => {
  const res = await fetch("/api/hadiths");
  const posts = await res.json();

  return {
    posts,
  };
};
