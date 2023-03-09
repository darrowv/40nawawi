<script>
  export let data;
</script>

<svelte:head>
  <title>Хадис {data.serialNumber}</title>
</svelte:head>

<article>
  <svelte:component this={data.content} />
</article>
