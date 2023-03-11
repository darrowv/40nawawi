<script>
  export let data;
  import "../../lib/styles/markdown.scss";
</script>

<svelte:head>
  <title>Хадис {data.serialNumber}</title>
</svelte:head>

<article>
  <svelte:component this={data.content} />
</article>

<style lang="scss">
  article {
    text-align: center;
    margin: auto;
    width: 90%;
    padding: 2rem;

    @media (max-width: 800px) {
      padding: 0;
      width: 95%;
    }
  }
</style>
