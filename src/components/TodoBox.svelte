<script lang="ts">
  import type { Work } from "../types/work";
  import { workList } from "../types/work";

  const saveData = async () => {

  }

  let works: Work[] = workList;

  function completeTask(work: Work): void {
    if(work.completed){
       work.completed = false;
    } else {
      work.completed = true;
    }
    works = [...works];
  }

</script>

<div class="pl-14 pt-12">
  <h4 class="h4">Current Work</h4>
</div>
<div class="table-container pl-14 pt-4">
  <table class="table table-hover">
    <thead>
      <tr>
        <th>Project</th>
        <th>Description</th>
        <th>Priority</th>
        <th>Completed</th>
      </tr>
    </thead>
    <tbody>
      {#each works as work}
        <tr>
          <td>{work.project}</td>
          <td>{work.description}</td>
          <td>{work.priority}</td>
          <td>
            {#if work.completed}
              <button class="btn variant-ghost-success h-6" on:click={completeTask(work)}>
                {work.completed}
              </button>
            {/if}
            {#if !work.completed}
              <button class="btn variant-ghost-error h-6" on:click={completeTask(work)}>
                {work.completed}
              </button>
            {/if}
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
