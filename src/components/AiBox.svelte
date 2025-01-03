<script lang="ts">
  import AiResponseBox from "./ai/AiResponseBox.svelte";

  let exampleResponse: String = "To center a div in HTML, you have several options: Using Flexbox: Set the parent container to display: flex, then use justify-content: center for horizontal centering and align-items: center for vertical centering. Add a height to the parent container if vertical centering is needed. Using Grid Layout: Set the parent container to display: grid, then use place-items: center to center the div both horizontally and vertically. Add a height to the parent container if necessary. Using Absolute Positioning: Set the div to position: absolute, place it at top: 50% and left: 50%, and apply a transform: translate(-50%, -50%) to achieve both horizontal and vertical centering. Ensure the parent container has position: relative. Using Margin Auto: For horizontal centering only, give the div a width and use marginh: 0 auto to center it within the parent. Each method works best in specific scenarios, depending on your layout requirements. Let me know if you need help choosing or implementing one!"

  let currentMessage: String = $state("");
  let promptSent: boolean = $state(false);
  let promptRecieved: boolean = $state(false)

  interface PromptResponsePair {
    Prompt: String,
    Response: String,
  }

  let pairs: PromptResponsePair[] = $state([]);

  function sendPrompt(): void {
    let promptResponsePair: PromptResponsePair = {
      Prompt: currentMessage,
      Response: exampleResponse,
    }

    currentMessage = "";

    pairs = [...pairs, promptResponsePair];


    if(!promptSent) {
      promptSent = true;
      promptRecieved = true;
    } else {
    }
  }

</script>

<div class="container pl-14 pt-40 flex flex-col justify-center items-center">
  {#if !promptSent}
    <h2 class="h2">organ(AI)ser</h2>
    <h6 class="h6">Powered by ChatGPT</h6>
  {:else}
    <div class="overflow-auto pb-48">
      {#each pairs as pair}
        <AiResponseBox message={pair.Prompt} response={pair.Response} />
      {/each}
    </div>
  {/if}
  {#if !promptRecieved}
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
  {:else}
    <div class="input-group input-group-divider grid-cols-[auto_1fr_auto] rounded-container-token rounded w-2/3 mt-4 fixed bottom-0 mb-12 left-1/2 transform -translate-x-1/2">
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
  {/if}
</div>
