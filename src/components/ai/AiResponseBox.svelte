<script lang="ts">

  import { fade } from "svelte/transition";
  let exampleResponse: String = "To center a div in HTML, you have several options: Using Flexbox: Set the parent container to display: flex, then use justify-content: center for horizontal centering and align-items: center for vertical centering. Add a height to the parent container if vertical centering is needed. Using Grid Layout: Set the parent container to display: grid, then use place-items: center to center the div both horizontally and vertically. Add a height to the parent container if necessary. Using Absolute Positioning: Set the div to position: absolute, place it at top: 50% and left: 50%, and apply a transform: translate(-50%, -50%) to achieve both horizontal and vertical centering. Ensure the parent container has position: relative. Using Margin Auto: For horizontal centering only, give the div a width and use marginh: 0 auto to center it within the parent. Each method works best in specific scenarios, depending on your layout requirements. Let me know if you need help choosing or implementing one!"

</script>

<div class="flex flex-col justify-center items-center">
  <div class="w-2/3 p-4 variant-filled-surface" transition:fade={{duration: 1000}}>
    <div class="flex justify-end">
    </div>
    <p>{exampleResponse}</p>
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

