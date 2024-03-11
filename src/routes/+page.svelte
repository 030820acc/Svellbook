<script>
    import Navbar from '$lib/Navbar.svelte';
    import SideNav from '$lib/SideNav.svelte';
    import Book from '../lib/Book.svelte'
    let selectedSpell = 1;
</script>

<div id="wrapper">
    <Navbar />
    <div id="content">
        <Book />
    </div>
</div>

<style>
    #wrapper {
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
    }
    #content {
        display:flex;
        width: 100%;
        height: 95%;
    }
</style>