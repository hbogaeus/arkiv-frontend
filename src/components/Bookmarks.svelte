<script lang="ts">
  import BookmarkRow from "./BookmarkRow.svelte";
  import Spinner from "./Spinner.svelte";
  import {generateBookmarks} from "../data-generator";

  export let secret: string;

  let bookmarksPromise: Promise<Bookmark[]> = fetchBookmarks();

  function fetchFakes(): Promise<Bookmark[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(generateBookmarks(30)), 1000);
    })
  }

  function fetchBookmarks(): Promise<Bookmark[]> {
    return fetch('/api', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${secret}`
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Response is non-ok: ${response.status}`)
      }
      return response.json();
    });
  }
</script>

<div class="content">
  {#await bookmarksPromise}
    <div class="center-content">
      <Spinner/>
    </div>
  {:then bookmarks}
    {#each bookmarks as bookmark}
      <BookmarkRow bookmark={bookmark}/>
    {/each}
  {:catch error}
    <div class="center-content">
      <p class="error-message">{error}</p>
    </div>
  {/await}
</div>

<style>
  .content {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
  }

  .center-content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }

  .error-message {
    text-align: center;
    word-break: break-word;
    padding: 0.5rem 0.6rem;
  }
</style>