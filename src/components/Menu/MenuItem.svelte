<script lang="ts">
  export let key: string;
  export let href: string;
</script>

<style>
  li {
    float: left;
  }

  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 16px;
    text-decoration: none;
  }

  li a:hover {
    background-color: #111111;
  }
</style>

<li><a {href}>{key}</a></li>
