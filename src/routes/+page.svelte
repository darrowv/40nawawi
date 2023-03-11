<script>
  export let data;
  let link;

  function clickTheLink(index) {
    data.posts[index].element.click();
  }
</script>

<svelte:head>
  <title>40 Хадисов Ан-Навави</title>
</svelte:head>

<h1>40 хадисов ан-Навави</h1>

<ul>
  {#each data.posts as hadith, i}
    <li>
      <button on:click={() => clickTheLink(i)}>
        <a href={hadith.serialNumber} bind:this={data.posts[i].element}>
          {hadith.serialNumber}
        </a>
      </button>
    </li>
  {/each}
</ul>

<style lang="scss">
  h1 {
    text-align: center;
    padding: 5rem;
  }

  ul {
    width: 80%;
    margin: auto;
    list-style-type: none;
    padding: 0;
    display: grid;
    place-items: center;
    grid-template-columns: repeat(5, 1fr);
    row-gap: 4rem;

    li {
      display: grid;
      place-items: center;
      
      button {
        width: 10rem;
        height: 10rem;
        background-color: aquamarine;
        border-radius: 50%;
        color: red;
        cursor: pointer;
      }
    }

    a {
      text-decoration: none;
      font-size: 3rem;
      padding: auto;
    }
  }
</style>
