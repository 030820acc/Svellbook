<script>
    import { spells } from "./db";
    let pointer = 0;
    function turnLeft() {
        if (pointer > 0) {
            pointer = pointer - 2
        } else {
            pointer = spells.length - 2
        }
    }
    function turnRight() {
        if (pointer < spells.length - 2) {
            pointer = pointer + 2
        } else {
            pointer = 0
        }
    }
</script>

<div>
    <div id='page'> 
        <h2>{spells[pointer].name}</h2>
        <!--
        <p>{spells[pointer].actions}</p>
        <p>{spells[pointer].actionType}</p>
        <p>{spells[pointer].range}</p>
        <p>{spells[pointer].targets}</p>
        -->
        <p>{spells[pointer].definition}</p>
        <button on:click={turnLeft}>left</button>
    </div>
    <div id='page'> 
        <h2>{spells[pointer + 1].name}</h2>
        <!--
        <p>{spells[pointer + 1].actions}</p>
        <p>{spells[pointer + 1].actionType}</p>
        <p>{spells[pointer + 1].range}</p>
        <p>{spells[pointer + 1].targets}</p>
        -->
        <p>{spells[pointer + 1].definition}</p>
        <button on:click={turnRight}>right</button>
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
        border: 1px solid #7180B9;
        background-color: #A8BACF;
        padding: 1em; 
        align-items: center;
        display: flex;
        flex-direction: column;
    }
</style>