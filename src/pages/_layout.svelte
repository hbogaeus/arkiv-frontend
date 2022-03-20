<script>
  import Navigation from "../components/Navigation.svelte";
</script>

<main>
  <div class="main-content">
    <slot></slot>
  </div>
  <Navigation/>
</main>

<style>
  main {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 4rem;
    grid-template-columns: 1fr minmax(auto, 1400px) 1fr;
    grid-template-areas:
      ". main ."
      ". nav .";

    overflow: hidden;
  }

  .main-content {
    overflow-y: auto;
    border-width: 0 1px 0 1px;
    border-style: solid;
    border-color: var(--colors-border);

    grid-area: main;
  }
</style>