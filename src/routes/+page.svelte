<script>
  export let data;
</script>

<svelte:head>
  <title>40 Хадисов ан-Науауи</title>
</svelte:head>

<header class="title">
  <hr />
  <h1>40 Хадисов ан-Науауи</h1>
  <hr />
</header>

<ul>
  {#each data.posts as { serialNumber }}
    <li>
      <a class="hadith-link" href={serialNumber}>
        <p>{serialNumber}</p>
        <img src={`/thumbnails/${serialNumber}.jpg`} alt="" />
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

    @media (max-width: 550px) {
      grid-template-columns: repeat(3, 1fr);
    }

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

          @media (max-width: 800px) {
            opacity: 0.8;
          }
        }

        overflow: hidden;
        display: grid;
        place-content: center;
        text-decoration: none;
        font-size: 5rem;
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
          width: 11rem;
          height: 11rem;
          font-size: 5.5rem;
        }

        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
</style>
