<script lang="ts">
  import BookmarkRow from "./BookmarkRow.svelte";
  import {generateBookmarks} from "./data-generator";

  let bookmarks = generateBookmarks(30);

  let bookmarksPromise: Promise<Bookmark[]> = Promise.resolve(bookmarks as Bookmark[]);
</script>

<main>
  {#await bookmarksPromise then bookmarks}
    <div class="counter">
      <span>{bookmarks.length} bookmarks</span>
    </div>
    {#each bookmarks as bookmark}
      <BookmarkRow bookmark={bookmark}/>
    {/each}
  {/await}
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
  }

  .counter {
    display: flex;
    justify-content: center;
    color: #828282;
    font-size: 0.8rem;
    margin: 0.4rem;
  }
</style>