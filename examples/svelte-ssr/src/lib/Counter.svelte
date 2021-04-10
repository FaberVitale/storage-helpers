<script lang="ts">
  import { persistedWritable, storageReadable } from 'svelte-storage-helpers';
  import classes from '../scoped.module.scss';

  const count = persistedWritable('count', 0);
  const readable = storageReadable('count');

  const increase = (): void => {
    count.update((n) => n + 1);
  };
  const decrease = (): void => {
    $count -= 1;
  };
</script>

<button class={classes.button} on:click={decrease}> - </button>
<span class="counter-label">{$count}</span>
<button class={classes.button} on:click={increase}> + </button>

<p>{$readable}</p>

<style lang="scss">
  .counter-label {
    color: #ff3e00;
    font-weight: 500;
  }
</style>
