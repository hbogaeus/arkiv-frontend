<script>
  export let bookmark;
</script>

<div class="content">
  <div class="title">
    <span>{bookmark.title}</span>
  </div>
  <a class="link" target="_blank" rel="noopener noreferrer" href={bookmark.url}>{bookmark.url}</a>
</div>

<style>
  .content {
    display: flex;
    flex-direction: column;
    word-break: break-word;
    padding: 0.5rem 0.6rem;
  }

  .content:not(:last-child) {
    border-bottom: solid 1px var(--colors-border);
  }

  .title {
    margin-bottom: 0.2rem;
  }

  .link {
    color: var(--colors-text);
    font-size: 0.8rem;
  }
</style>