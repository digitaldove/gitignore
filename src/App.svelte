<script lang="ts">
  import Menu from "./components/Menu/Menu.svelte";
  import Footer from "./components/Footer/Footer.svelte";

  export let name: string;
</script>

<style>
  /* Define Global Style */
  :global(body) {
    padding: 0;
  }

  /* App Components */
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<Menu />
<main>
  <h1>{name}</h1>
  <h2>Forever OpenSource</h2>
  <p>
    Visit the
    <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to learn how to build Svelte apps.
  </p>
</main>
<Footer />
