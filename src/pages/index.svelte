<script lang="ts">
  import {settings} from "../settings-store";
  import {url} from "@roxi/routify";
  import Bookmarks from "../components/Bookmarks.svelte";

  let secret = $settings.secret;
</script>

<main>
  {#if (secret === '')}
    <div class="no-secret">
      <span>No secret set, go to <a href={$url('./settings')}>settings</a> to set a secret.</span>
    </div>
  {:else}
    <Bookmarks secret={secret}/>
  {/if}
</main>

<style>
  main {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
  }

  .no-secret {
    display: flex;
    justify-content: center;
    align-items: center;

    flex-grow: 1;
  }
</style>