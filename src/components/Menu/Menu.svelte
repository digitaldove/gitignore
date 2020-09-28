<script lang="ts">
  import MenuItem from "./MenuItem.svelte";
</script>

<style>
  menu {
    margin: 0;
    padding: 0;
    border: 0;
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333333;
  }
</style>

<menu>
  <ul>
    <MenuItem key="main" href="/" />
  </ul>
</menu>
