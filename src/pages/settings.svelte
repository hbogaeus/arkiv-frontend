<script lang="ts">
  import {settings} from "../settings-store";

  let newSecret = '';
  let currentSecret = $settings.secret;

  function setSecret() {
    settings.update(currentSetting => ({...currentSetting, secret: newSecret}));
  }
</script>

<main>
  <h1>Settings</h1>
  {#if (currentSecret !== '')}
    <span>Current secret is</span>
    <span>{currentSecret}</span>
  {/if}
  <form on:submit|preventDefault={setSecret}>
    <label for="secret">Update secret</label>
    <input id="secret" name="secret" autocomplete="off" type="text" bind:value={newSecret}>
  </form>
</main>

<style>
  h1 {
    margin: 0;
  }

  main {
    width: 100%;
    height: 100%;
    padding: 0.5rem 0.6rem;
    display: flex;
    flex-direction: column;
  }
</style>