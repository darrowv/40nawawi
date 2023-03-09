<script>
  export let data;
</script>

<h1>40 хадисов ан-Навави</h1>

<svelte:head>
  <title>40 Хадисов Ан-Навави</title>
</svelte:head>

<ul>
  {#each data.posts as hadith}
    <li>
      <h2>
        <a href={hadith.serialNumber}>
          {hadith.serialNumber}
        </a>
      </h2>
    </li>
  {/each}
</ul>
