<script>
  export let data;
</script>

<svelte:head>
  <title>40 Хадисов Ан-Науауи</title>
</svelte:head>

<h1>40 хадисов ан-Науауи</h1>

<ul>
  {#each data.posts as hadith, i}
    <li>
        <a href={hadith.serialNumber}>
          {hadith.serialNumber}
        </a>
    </li>
  {/each}
</ul>

<style lang="scss">
  
  h1 {
    text-align: center;
    padding: 5rem;
    padding-top: 3rem;
    font-size: 3.5rem;
    font-weight: 500;
  }

  ul {
    width: 80%;
    margin: auto;
    list-style-type: none;
    padding: 0;
    padding-bottom: 3rem;
    display: grid;
    place-items: center;
    grid-template-columns: repeat(5, 1fr);
    row-gap: 4rem;

    @media (max-width: 700px) {
      width: 90%;
    }

    li {
      display: grid;
      place-items: center;
      
      a {
        display: grid;
        place-content: center;
        text-decoration: none;
        font-size: 5rem;
        width: 10rem;
        height: 10rem;
        background-color: rgba(198, 198, 198, 0.793);
        border-radius: 50%;
        color: rgb(45, 10, 10);

        @media (max-width: 700px) {
          width: 8.5rem;
          height: 8.5rem;
          font-size: 3.5rem;
        }

        @media (max-width: 550px) {
          width: 6.5rem;
          height: 6.5rem;
          font-size: 3rem;
        }
      }
    }
    
  }
</style>
