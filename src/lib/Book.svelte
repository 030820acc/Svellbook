<script>
    import { spells } from "./db";
    
    let pointer = 0;
    function turnLeft() {
        if (pointer > 0) {
            pointer = pointer - 2
        } else {
            if(spells.length % 2 == 0) {
                pointer = spells.length - 2
            } else {
                pointer = spells.length - 1
            }
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

<div id="content">
    <div id='page'> 
        {#if spells[pointer] !== undefined}
            <h2>{spells[pointer].name}</h2>
            <div id='divider'></div>
            {#if spells[pointer].traits !== undefined}
                <div id="traits">
                    {#each spells[pointer].traits as trait}
                        <p id='trait'>{trait}</p>
                    {/each}
                </div>
            {/if}
            <div id='actions'>
                <p id="label" style='margin-right: .25em;'>Cast:</p>
                <p style='margin-right: .25em;'>{spells[pointer].actions}</p>
                <p>{spells[pointer].actionType}</p>
            </div>
            <div id='targets'> 
                {#if spells[pointer].range !== undefined}
                    <p id="label" style='margin-right: .25em;'>Range: </p>
                    <p style='margin-right: .25em;'>{spells[pointer].range}</p>
                {/if}   
                {#if spells[pointer].targets  !== undefined}
                    <p id="label" style='margin-right: .25em;'>Target: </p>
                    <p style='margin-right: .25em;'>{spells[pointer].targets}</p>
                {/if}
                {#if spells[pointer].area  !== undefined}
                    <p id="label" style='margin-right: .25em;'>Area: </p>
                    <p style='margin-right: .25em;'>{spells[pointer].area}</p>
                {/if}
            </div>
            <div id='divider'></div>
            <p>{spells[pointer].definition}</p>
            <p>page: {pointer + 1}</p>
            <button on:click={turnLeft}>left</button>
        {:else}
            <p>page: {pointer + 1}</p>       
            <button on:click={turnRight}>right</button>
        {/if}
    </div>
    <div id='page'> 
        {#if spells[pointer + 1] !== undefined}
        <h2>{spells[pointer + 1].name}</h2>
        <div id='divider'></div>
        {#if spells[pointer + 1].traits !== undefined}
            <div id="traits">
                {#each spells[pointer + 1].traits as trait}
                    <p id='trait'>{trait}</p>
                {/each}
            </div>
        {/if}
        <div id='actions'>
            <p id="label" style='margin-right: .25em;'>Cast: </p>
            <p style='margin-right: .25em;'>{spells[pointer + 1].actions}</p>
            <p>{spells[pointer + 1].actionType}</p>
        </div>
        <div id='targets'> 
            {#if spells[pointer + 1].range !== undefined}
                <p id="label" style='margin-right: .25em;'>Range: </p>
                <p style='margin-right: .25em;'>{spells[pointer + 1].range}</p>
            {/if}
            {#if spells[pointer + 1].targets !== undefined}
                <p id="label" style='margin-right: .25em;'>Target: </p>
                <p style='margin-right: .25em;'>{spells[pointer + 1].targets}</p>
            {/if}
            {#if spells[pointer + 1].area !== undefined}
                <p id="label" style='margin-right: .25em;'>Area: </p>
                <p style='margin-right: .25em;'>{spells[pointer + 1].area}</p>
            {/if}
        </div>
        <div id='divider'></div>
        <p>{spells[pointer + 1].definition}</p>
        <p>page: {pointer + 2}</p>
        <button on:click={turnRight}>right</button>
    {:else}
        <p>page: {pointer + 2}</p>       
        <button on:click={turnRight}>right</button>
    {/if}
    </div>
</div>

<style>
    #label {
        font-weight: bold;
    }
    #content {
        display: flex;
        height: 100%;
        width: 85%;
    }
    #page {
        width: 98%;
        border: 1px solid #7180B9;
        background-color: #A8BACF;
        padding: 1em; 
        align-items: baseline;
        display: flex;
        flex-direction: column;
    }
    #actions{
        display: flex;
        justify-content: space-between;
    }
    #targets{
        display: flex;
    }
    #trait{
        border: 1px blue solid;
        padding: .3em;
        background-color:aqua;
    }
    #traits {
        display:flex;
    }
    #divider {
        height: 2px;
        width: 100%;
        background-color: black;
    }
</style>