export const load = async ({ fetch }) => {
  const response = await fetch("/api/hadiths");
  const posts = await response.json();

  return {
    posts,
  };
};
