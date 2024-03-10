<script>
    import Navbar from "$lib/Navbar.svelte";
    import { spells } from "$lib/db";

    let newName;
    let newLevel;
    let newRange;
    let newDescription;

    function handleNewSpell() {
        let spell = {
            name: newName,
            level: newLevel,
            traits: undefined,
            actions: undefined,
            actionType: undefined,
            range: newRange,
            area: undefined,
            targets: undefined,
            savingThrow: undefined,
            duration: undefined,
            definition: newDescription,
        };
        spells.push(spell);
    }
</script>

<Navbar />
<h2>Add a new spell:</h2>
<form>
    <label for="name">Name:</label>
    <input type="text" id="name" bind:value={newName} />
    <label for="level">level:</label>
    <input type="text" id="level" bind:value={newLevel} />
    <label for="range">range:</label>
    <input type="text" id="range" bind:value={newRange} />
    <label for="definition">definition:</label>
    <textarea id="definition" bind:value={newDescription}></textarea>
    <button type="button" on:submit={handleNewSpell}>Submit</button>
</form>

<style>
</style>
