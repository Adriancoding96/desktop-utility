<script lang="ts">
  import "../app.css";
  import { AppRail, AppRailTile, AppRailAnchor, LightSwitch } from "@skeletonlabs/skeleton";
  import "@fortawesome/fontawesome-free/css/all.min.css"

</script>

<style lang="postcss">
  :global(body) {
    @apply bg-surface-50-900-token;
  }
</style>

<AppRail class="fixed top-0 left-0 h-full w-18  surface-200 z-20">
  <svelte:fragment slot="lead">
    <AppRailAnchor href="/" title="Home">
      <i class="fa-solid fa-house text-xl"></i>
    </AppRailAnchor>
    <AppRailAnchor href="/project" title="Projects">
      <i class="fa-solid fa-computer text-xl"></i>
    </AppRailAnchor>
    <AppRailAnchor href="/profile" title="Profile">
      <i class="fa-solid fa-user text-xl"></i>
    </AppRailAnchor>
    <AppRailAnchor href="/chat" title="Chat">
      <i class="fa-solid fa-comments text-xl"></i>
    </AppRailAnchor>
  </svelte:fragment>

  <svelte:fragment slot="trail">
    <AppRailAnchor href="/settings" title="Settings">
      <i class="fa-solid fa-gear text-xl"></i>
    </AppRailAnchor>
    <div class="container pl-4 pb-4">
      <LightSwitch />
    </div>
  </svelte:fragment>
</AppRail>

<main class="ml-14 p-4">
  <slot />
</main>
