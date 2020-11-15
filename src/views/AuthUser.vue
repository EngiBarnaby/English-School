<template>
    <div class="auth-page">
        <!-- <Login /> -->
        <router-view></router-view>
    </div>
</template>

<script>
import Login from '@/components/auth-user/loginUser'

export default {
    
    components : {
        Login
    }

}
</script>

<style scoped>


</style>