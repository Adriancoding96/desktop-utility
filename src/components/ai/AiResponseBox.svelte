<script lang="ts">

  import { fade } from "svelte/transition";
  import UserPromptBox from "./UserPromptBox.svelte";

  export let response: String;
  export let message: String;
</script>

<UserPromptBox message={message}/>
<div class="flex flex-col justify-center items-center pb-4">
  <div class="w-2/3 p-4 variant-filled-surface" transition:fade={{duration: 1000}}>
    <div class="flex justify-end">
    </div>
    <p>{response}</p>
  </div>
  <div class="flex w-2/3">
    <button class="btn variant-soft-error flex-1">
      <i class="fa-solid fa-trash text-error-500"></i>
    </button>
    <button class="btn variant-soft-success flex-1">
      <i class="fa-solid fa-floppy-disk text-success-500"></i>
    </button>
  </div>
</div>

