<script>
    import Navbar from "$lib/Navbar.svelte";
    let profile = {
        userId: 1,
        userName: "slemonacc",
        passwordEncrpt: "578727344",

    }

</script>

<Navbar />
<h1>{profile.userName}</h1>


<style>
    
</style>