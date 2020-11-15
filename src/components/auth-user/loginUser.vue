<template>
    <div class="login-user">
        <v-row justify="center" align="start"> 
            <v-col xs="12" sm="12" md="5">
                <v-card class="px-10" >
                    <v-card-text>
                        <h2 class="text-center py-3">Войти в аккаунт</h2>
                    </v-card-text>
                    <v-form>
                        <v-text-field
                            label="Username"
                            v-model="username"
                        >
                        </v-text-field>
                        <v-text-field
                            label="Password"
                            :type="show ? 'text ' : 'password' "
                            :append-icon=" !show ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append="show = !show"
                            v-model="password"
                        >
                        </v-text-field>
                    </v-form>
                    <v-card-actions >
                        <v-row justify="center" >
                            <v-btn 
                                large
                                color="primary"
                                @click="login"
                            >
                            Войти
                            </v-btn>
                        </v-row>
                    </v-card-actions>
                    <v-card-text v-if="msg">
                        <h2 class="text-center msg light-green accent-2 py-2 rounded-lg" >
                            {{ msg }}
                        </h2>
                    </v-card-text>
                    <v-card-text>
                        <h4 class="text-center" >
                            <router-link :to="{ name : 'register' }">Зарегистрируйтесь</router-link>
                            ,если у вас нет аккунта
                        </h4>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {

    props : ["msg"],

    data(){
        return {
            username : '',
            password : '',
            show : false
        }
    },

    computed : {
        getData(){
            return this.$store.state.token
        }
    },

    methods : {
        login(){
            let username = this.username
            let password = this.password
            this.$store.dispatch('loginUser', { username, password })
            .then(() => this.$router.push("/vocabulary"))
            .catch( err => console.log(err))
        },
    },

}
</script>

<style scoped>

.login-user {
    margin-top: 75px;
}

</style>