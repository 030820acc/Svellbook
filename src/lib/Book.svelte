<script>
    import { spells } from "./db";
    let leftSpell = spells[1]
    let rightSpell = spells[2]
    function turnLeft() {
        leftSpell = spells[3]
    }
</script>

<div>
    <div id='page'> 
        <h2>{leftSpell.name}</h2>
        <p>{leftSpell.actions}</p>
        <p>{leftSpell.actionType}</p>
        <p>{leftSpell.range}</p>
        <p>{leftSpell.targets}</p>
        <p>{leftSpell.definition}</p>
        <button on:click={turnLeft}>left</button>
    </div>
    <div id='page'> 
        <h2>{rightSpell.name}</h2>
        <p>{rightSpell.actions}</p>
        <p>{rightSpell.actionType}</p>
        <p>{rightSpell.range}</p>
        <p>{rightSpell.targets}</p>
        <p>{rightSpell.definition}</p>
        <button>right</button>
    </div>
</div>

<style>
    div {
        display: flex;
        height: 100%;
        width: 85%;
    }
    #page {
        width: 98%;
        border: 1px solid brown;
        background-color: bisque;
        padding: 1em; 
        align-items: center;
        display: flex;
        flex-direction: column;
    }
</style>