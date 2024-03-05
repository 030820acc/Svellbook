<script>
    import Navbar from "$lib/Navbar.svelte";
    import { profile } from "$lib/db";
</script>

<Navbar />
<h1>{profile.userName}</h1>


<style>
    
</style>