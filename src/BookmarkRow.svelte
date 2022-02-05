<script>
  export let bookmark;
</script>

<main>
  <div class="title">
    <span>{bookmark.title}</span>
  </div>
  <a class="link" target="_blank" rel="noopener noreferrer" href={bookmark.url}>{bookmark.url}</a>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    word-break: break-all;
    padding: 0 8px;

    margin-bottom: 1rem;
  }

  .title {
    margin-bottom: 0.2rem;
  }

  .link {
    color: #828282;
    font-size: 0.8rem;
  }
</style>