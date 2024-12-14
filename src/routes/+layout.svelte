<script lang="ts">
  import "../app.css";
  import { AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';
  let currentTile: number = 0;
</script>

<AppRail class="fixed top-0 left-0 h-full w-14 border-r border-surface-200 z-20">
  <svelte:fragment slot="lead">
    <AppRailAnchor href="/"> (icon) </AppRailAnchor>
    <AppRailAnchor href="/" target="_blank" title="Account">
      <i class="devicon-github-original icon"></i>
    </AppRailAnchor>
    <AppRailAnchor href="/" target="_blank" title="Account">(icon)</AppRailAnchor>
  </svelte:fragment>
  <svelte:fragment slot="trail">
    <AppRailAnchor href="/" target="_blank" title="Account">(icon)</AppRailAnchor>
  </svelte:fragment>
</AppRail>

<main class="ml-14 p-4">
  <slot />
</main>
