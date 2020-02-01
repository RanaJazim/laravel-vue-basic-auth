<template>
    <div>
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            <div class="container">
                <ul class="navbar-nav">

                    <router-link tag="li" class="nav-item" :to="{name: 'home'}">
                        <a class="nav-link">Home</a>
                    </router-link>

                    <router-link tag="li" class="nav-item" :to="{name: 'profile'}">
                        <a class="nav-link">Profile</a>
                    </router-link>

                    <router-link tag="li" class="nav-item" :to="{name: 'login'}">
                        <a class="nav-link">Login</a>
                    </router-link>

                    <router-link tag="li" class="nav-item" :to="{name: 'register'}">
                        <a class="nav-link">Register</a>
                    </router-link>

                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>

</style>
