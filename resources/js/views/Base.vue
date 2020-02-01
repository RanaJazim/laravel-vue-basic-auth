<template>
    <div>
        <navbar></navbar>

        <div class="container">
            <div class="mt-5">
                <router-view>
                </router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import Navbar from "../components/Navbar";

    export default {
        name: "Base",

        components: {
            'navbar': Navbar
        }
    }
</script>

<style scoped>

</style>
