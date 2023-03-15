<script>
  export let data;
</script>

<svelte:head>
  <title>40 Хадисов ан-Науауи</title>
</svelte:head>

<div class="title">
  <hr />
  <h1>40 хадисов ан-Науауи</h1>
  <hr />
</div>

<ul>
  {#each data.posts as hadith, i}
    <li>
      <a href={hadith.serialNumber}>
        <p>{hadith.serialNumber}</p>
        <img src={`/thumbnails/${i + 1}.jpg`} alt="dawn" />
      </a>
    </li>
  {/each}
</ul>

<style lang="scss">
  .title {
    margin: 4rem auto;
  }

  hr {
    width: 45rem;
    margin: auto;

    @media (max-width: 500px) {
      width: 35rem;
    }
  }

  h1 {
    text-align: center;
    margin: 1rem auto;
    font-size: 3.75rem;
    font-weight: 500;

    @media (max-width: 500px) {
      font-size: 3rem;
    }
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

    @media (max-width: 900px) {
      width: 90%;
    }

    li {
      display: grid;
      place-items: center;

      a {
        position: relative;

        p {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 99;
        }

        img {
          opacity: 0.7;
        }

        overflow: hidden;
        display: grid;
        place-content: center;
        text-decoration: none;
        font-size: 5rem;
        font-family: "Inglobal Bold";
        width: 10rem;
        height: 10rem;
        border: 2px solid grey;
        background-size: cover;
        background-position: center;
        border-radius: 50%;
        color: rgba(21, 21, 21, 0.804);
        transition: 0.2s;
        -webkit-text-stroke: 2px rgb(202, 202, 202);

        @media (max-width: 700px) {
          width: 8.5rem;
          height: 8.5rem;
          font-size: 3.5rem;
          -webkit-text-stroke: 1px rgb(202, 202, 202);
          border: 1px solid grey;
        }

        @media (max-width: 550px) {
          width: 6.5rem;
          height: 6.5rem;
          font-size: 3rem;
        }

        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
</style>
