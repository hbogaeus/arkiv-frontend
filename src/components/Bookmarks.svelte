<script lang="ts">
  import BookmarkRow from "./BookmarkRow.svelte";
  import {generateBookmarks} from "../data-generator";

  export let secret: string;

  const bookmarks = generateBookmarks(30);

  let bookmarksPromise: Promise<Bookmark[]> = Promise.resolve(bookmarks as Bookmark[]);
</script>

<div class="content">
  {#await bookmarksPromise then bookmarks}
    <div class="bookmarks">
      {#each bookmarks as bookmark}
        <BookmarkRow bookmark={bookmark}/>
      {/each}
    </div>
  {/await}
</div>

<style>
</style>