<script>
    import { spells } from "./db";
</script>

<div>
    {#each spells as spell}
        <p>{spell.name}</p>
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