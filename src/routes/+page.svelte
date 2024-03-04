<script>
    import Navbar from '$lib/Navbar.svelte';
    import SideNav from '$lib/SideNav.svelte';
    import Book from '../lib/Book.svelte'
</script>

<div id="wrapper">
    <Navbar />
    <div id="content">
        <SideNav />
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