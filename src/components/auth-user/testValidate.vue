<template>
    <div class="login-user">
        <v-row justify="center" align="start"> 
            <v-col xs="12" sm="12" md="5">
                <v-card class="px-10" >
                    <v-card-text>
                        <h2 class="text-center py-3">Страница для теста валидаций</h2>
                    </v-card-text>
                    <v-form>
                        <v-text-field
                            label="Username"
                            v-model="username"
                        >
                        </v-text-field>
                        <v-text-field
                            label="Email"
                            v-model="email"
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
                                @click="register"
                            >
                            Зарегистрироваться
                            </v-btn>
                        </v-row>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    data(){
        return {
            username : '',
            password : '',
            email : '',
            show : false
        }
    },

    computed : {
        getData(){
            return this.$store.state.token
        }
    },

    methods : {
        register(){

        },
    },

}
</script>

<style scoped>

.login-user {
    margin-top: 75px;
}

</style>