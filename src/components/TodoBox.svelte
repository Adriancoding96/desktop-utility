<script lang="ts">
  import type { Work } from "../types/work";
  import { workList } from "../types/work";

  const saveData = async () => {

  }

  let works: Work[] = workList;

  let sortField: keyof Work | null = null;
  let sortDirection: "asc" | "desc" = "asc";

  function sortBy(field: keyof Work) {
    if(sortField === field) {
      sortDirection = sortDirection === "asc" ? "desc" : "asc";
    } else {
      sortField = field;
      sortDirection = "asc";
    }

    works = [...works].sort((a, b) => {
      if(a[field] < b[field]) return sortDirection === "asc" ? -1 : 1;
      if(a[field] > b[field]) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
  }

  function completeTask(work: Work): void {
    if(work.completed){
       work.completed = false;
    } else {
      work.completed = true;
    }
    works = [...works];
  }

  function changePriority(work: Work): void {
    if(work.priority === 9) {
      work.priority = 0;
    }
    work.priority++;
    works = [...works];
  }

</script>

  <div class="pl-14 pt-14 flex">
    <div class="w-1/2">
      <h4 class="h4">Current Work</h4>
    </div>
    <div class="w-1/2">
    </div>
  </div>
<div class="table-container pl-14 pt-4">
  <table class="table table-hover">
    <thead>
      <tr>
        <th class="cursor-pointer" on:click={() => sortBy("priority")}>Priority</th>
        <th class="cursor-pointer" on:click={() => sortBy("project")}>Project</th>
        <th class="cursor-pointer" on:click={() => sortBy("description")}>Description</th>
        <th class="cursor-pointer" on:click={() => sortBy("completed")}>Completed</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {#each works as work}
        <tr>
          <td class="flex justify-center">
            {#if work.priority < 4}
              <button class="btn-icon variant-ghost-success rounded full h-6 w-6" on:click={
                () => changePriority(work)
              }>
                  <p class="text-center">{work.priority}</p>
              </button>
            {/if}
            {#if work.priority < 8 && work.priority > 3}
              <button class="btn-icon variant-ghost-warning rounded full h-6 w-6" on:click={
                () => changePriority(work)
              }>
                  <p class="text-center">{work.priority}</p>
              </button>
            {/if}
            {#if work.priority < 10 && work.priority > 7}
              <button class="btn-icon variant-ghost-error rounded full h-6 w-6" on:click={
                () => changePriority(work)
              }>
                  <p class="text-center">{work.priority}</p>
              </button>
            {/if}
          </td>
          <td>{work.project}</td>
          <td>{work.description}</td>
          <td>
            {#if work.completed}
              <button class="btn variant-ghost-success h-6" on:click={() => completeTask(work)}>
                {work.completed}
              </button>
            {/if}
            {#if !work.completed}
              <button class="btn variant-ghost-error h-6" on:click={() => completeTask(work)}>
                {work.completed}
              </button>
            {/if}
          </td>
          <td>
            <i class="fa-solid fa-trash pr-2 cursor-pointer text-error-500"></i>
          </td>
        </tr>
      {/each}
    </tbody>
    <tfoot>
      <tr>
        <th></th>
      </tr>
    </tfoot>
  </table>
</div>
