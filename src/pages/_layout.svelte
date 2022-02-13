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
    display: flex;
    flex-direction: column;

    overflow: hidden;
  }

  .main-content {
    overflow-y: auto;
    flex-grow: 1;
  }
</style>