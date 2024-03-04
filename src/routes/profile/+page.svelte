<script>
    import Navbar from "$lib/Navbar.svelte";


</script>

<Navbar />
<p>this will be the profile page</p>

<style>
    p {
        background-color: brown;
        color: white;
        padding: 3em;
        border: white 1px solid;
        border-radius: 50px;
        height: 5em;
        width: 10em;
        transition: color 1s, background-color 1s, height 1s, width 1s;
    }

    p:hover {
        background-color: black;
        color: white;
        height: 6em;
        width: 11em;
    }
</style>