<script>
    let spell = {
        title: "Ray of Frost",
        traditions: "arcane, primal",
        actions: 2,
        actionType: "somatic, verbal",
        range: "120 feet",
        targets: "1 creature",
        definition: "You blast an icy ray. Make a spell attack roll. The ray deals cold damage equal to 1d4 + your spellcasting ability modifier"
    }
</script>

<div> 
    <h2>{spell.title}</h2>
    <p>Traditions: {spell.traditions}</p>
    <p>{spell.actions}</p>
    <p>{spell.actionType}</p>
    <p>{spell.range}</p>
    <p>{spell.targets}</p>
    <p>{spell.definition}</p>
</div>

<style>
    div {
        width: 98%;
        border: 1px solid brown;
        background-color: bisque;
        padding: 1em; 
        align-items: center;
        display: flex;
        flex-direction: column;
    }
</style>