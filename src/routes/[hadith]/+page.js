import { error } from "@sveltejs/kit";

export function load({ params }) {
  return {
    title: params.hadith,
    content: "Welcome to our blog. Lorem ipsum dolor sit amet...",
  };

  throw error(404, "Not found");
}
