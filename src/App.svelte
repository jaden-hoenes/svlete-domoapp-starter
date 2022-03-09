<script lang="ts">
  const getEnv = () => {
    fetch('/domo/environment/v1')
      .then(res => res.json())
      .then(console.log)
  }
</script>

<main>
  <button class="btn" on:click={getEnv}>Button</button>
</main>
