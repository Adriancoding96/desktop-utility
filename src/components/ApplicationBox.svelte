<script lang="ts">
  import { invoke } from "@tauri-apps/api/core";

  async function launchFirefox() {
    let response: string = await invoke("launch_firefox"); 
  }

</script>

<div class="container">
  <div class="pl-14 pb-4 flex">
    <div class="w-1/2">
      <h4 class="h4">Shortcuts</h4>
    </div>
    <div class="w-1/2 allign-text-right">
      <p class="text-right p-2 underline">Edit</p>
    </div>
  </div>
  <div class="grid grid-rows-2 cursor-pointer grid-flow-col gap-12 pl-14">
    <div class="card card-hover h-10 flex">
      <i class="fa-solid fa-terminal text-2xl m-2"></i>
      <p class="m-2">Terminal</p>
    </div>
    <div class="card card-hover cursor-pointer flex" on:click={launchFirefox}>
      <i class="fa-brands fa-firefox text-2xl m-2"></i>
      <p class="m-2">Firefox</p>
    </div>
    <div class="card card-hover cursor-pointer flex">
      <i class="fa-brands fa-discord text-2xl m-2"></i>
      <p class="m-2">Discord</p>
    </div>
    <div class="card card-hover cursor-pointer flex">
      <i class="fa-brands fa-github text-2xl m-2"></i>
      <p class="m-2">Github</p>
    </div>
    <div class="card card-hover cursor-pointer flex">
      <i class="fa-brands fa-medium text-2xl m-2"></i>
      <p class="m-2">Medium</p>
    </div>
    <div class="card card-hover cursor-pointer flex">
      <i class="fa-brands fa-stack-overflow text-2xl m-2"></i>
      <p class="m-2">Stackoverflow</p>
    </div>
    <div class="card card-hover cursor-pointer flex">
      <i class="fa-brands fa-youtube text-2xl m-2"></i>
      <p class="m-2">Youtube</p>
    </div>
    <div class="card card-hover cursor-pointer flex">
      <i class="fa-brands fa-aws text-2xl m-2"></i>
      <p class="m-2">Aws</p>
    </div>
    <div class="card card-hover cursor-pointer flex">
      <i class="fa-brands fa-linkedin-in text-2xl m-2"></i>
      <p class="m-2">Linkedin</p>
    </div>
    <div class="card card-hover cursor-pointer flex">
      <i class="fa-solid fa-diagram-project text-2xl m-2"></i>
      <p class="m-2">Diagrams</p>
    </div>
  </div>

</div>
