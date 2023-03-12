<script>
  export let data;
  import "../../lib/styles/markdown.scss";

</script>

<svelte:head>
  <title>Хадис {data.serialNumber}</title>
</svelte:head>

<a href="/">{"<"} Назад</a>
<article>
  <svelte:component this={data.content} />
</article>

<style lang="scss">
  a {
    text-decoration: none;
    position: fixed;
    top: 1rem;
    left: 1rem;
    color: white;
    background-color: rgba(255, 255, 255, 0.100);
    padding: 0.4rem;
    border-radius: 10px;
    transition: .1s;

    @media (max-width: 800px) {
      top: 0;
      left: 0;
      border-radius: 0;
      border-bottom-right-radius: 10px;
      padding: 0.8rem;
    }

    &:hover {
      background-color: rgba(255, 255, 255, 0.150);
    }
  }

  article {
    text-align: center;
    margin: auto;
    width: 90%;
    padding: 1.5rem;

    @media (max-width: 800px) {
      padding: 0;
      width: 95%;
    }
  }
</style>
