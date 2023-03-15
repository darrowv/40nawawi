export async function load({ params }) {
  const post = await import(`../../lib/hadiths/${params.hadith}.md`);
  const content = post.default;
  const serialNumber = params.hadith;

  return {
    content,
    serialNumber
  };
}
