<script>
  export let data;
  import "../../lib/styles/markdown.scss";
  import { fly } from "svelte/transition";
</script>

<svelte:head>
  <title>Хадис {data.serialNumber}</title>
</svelte:head>

<a class="to-home" href="/">{"<"} Домой</a>
<article in:fly="{{ y: 200, duration: 1200 }}">
  <svelte:component this={data.content} />
</article>

{#if data.serialNumber > 1}
  <a class="previous" href={data.serialNumber - 1}>
    Предыдущий
  </a>
{/if}
{#if data.serialNumber < 42}
  <a class="next" href={++data.serialNumber}>
    Следующий
  </a>
{/if}


<style lang="scss">
  .to-home, .previous, .next {
    text-decoration: none;
    position: fixed;
    color: white;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 0.4rem;
    border-radius: 10px;
    transition: 0.1s;

    @media (max-width: 800px) {
      border-radius: 0;
      padding: 0.8rem;
    }

    &:hover {
      background-color: rgba(255, 255, 255, 0.15);
    }
  }

  .to-home {
    top: 1rem;
    left: 1rem;

    @media (max-width: 800px) {
      top: 0;
      left: 0;
      border-bottom-right-radius: 10px;
    }
  }

  .previous {
    bottom: 1rem;
    left: 1rem;

    @media (max-width: 800px) {
      bottom: 0;
      left: 0;
      border-top-right-radius: 10px;
    }
  }

  .next {
    bottom: 1rem;
    right: 1rem;

    @media (max-width: 800px) {
      bottom: 0;
      right: 0;
      border-top-left-radius: 10px;
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
