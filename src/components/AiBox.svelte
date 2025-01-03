<script lang="ts">
  import { fade } from "svelte/transition";
  import AiResponseBox from "./ai/AiResponseBox.svelte";

  let currentMessage: String = $state("")
  let promptSent: boolean = $state(false)

  let messages: String[];

  let visable: boolean = $state(true);

  function sendPrompt(): void {
    if(!promptSent) {
      promptSent = true;
    } else {
      promptSent = false;
    }
  }

</script>

<div class="container pl-14 pt-40 flex flex-col justify-center items-center">
  {#if !promptSent}
    <h2 class="h2">organ(AI)ser</h2>
    <h6 class="h6">Powered by ChatGPT</h6>
  {:else}
    <AiResponseBox />
  {/if}
  <div class="input-group input-group-divider grid-cols-[auto_1fr_auto] rounded-container-token rounded w-2/3 mt-4">
    <button class="input-group-shim">+</button>
    <textarea
      bind:value={currentMessage}
      class="bg-transparent border-0 ring-0 rounded p-4"
      name="prompt"
      id="prompt"
      placeholder="Message OrganAIser"
      rows="4"
    > </textarea>
    <button class="variant-filled-surface" on:click={sendPrompt}>
      <i class="fa-solid fa-paper-plane text-xl m-2"></i>
    </button>
  </div>
</div>
