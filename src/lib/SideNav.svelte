<script>
    import { spells } from "./db";
    export let chosen;
</script>

<div>
    {#each spells as spell}
        {#if spell.name == chosen}
            <p style='background-color: green'>{spell.name}</p>
        {:else}
            <p>{spell.name}</p>
        {/if}
    {/each}
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 15%;
        height: 100%;
        background-color: #3423A6;
    }
    p {
        color: #DFF3E4;
    }
</style>