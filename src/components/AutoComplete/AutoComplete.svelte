<script lang="ts">
  import { getAllFiles } from "../../client/github";
  export const gitignoreFiles = getAllFiles();
</script>

<style>
  input {
    width: 600px;
  }
</style>

<!-- This is AutoComplete component -->
<div>
  <input
    type="text"
    placeholder="Select gitignore template(s)"
  >
  {#await gitignoreFiles}
    <p>...waiting</p>
  {:then files}
    {#each files as file}
      <!-- Parsing *.gitignores templates -->
      {#if file.name.split('.').length === 2 && file.name.split('.')[1] === "gitignore"}
        <p>{file.name}</p>
      {/if}
    {/each}
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
</div>
