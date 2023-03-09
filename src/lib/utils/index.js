export const fetchMarkdownPosts = async () => {
  const allPostFiles = import.meta.glob("/src/lib/hadiths/*.md");
  const iterablePostFiles = Object.entries(allPostFiles);

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path]) => {
      const serialNumber = path.slice(17, -3);

      return {
        serialNumber,
      };
    })
  );

  return allPosts;
};
