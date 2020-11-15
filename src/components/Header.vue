<template>
    <div>
        <v-app-bar app dense color="purple lighten-3">
            <router-link to="/" tag='button'>
                <v-app-bar-nav-icon>
                    <v-icon>mdi-cupcake</v-icon>
                </v-app-bar-nav-icon>
            </router-link>
            <v-toolbar-title class="hidden-xs-only">Название в работе</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-title class="hidden-xs-only">
                {{ user }}
                <Time />
            </v-toolbar-title>
            <v-toolbar-items >
                <v-btn :to="{ name : 'login' }" v-if="isLoggedIn === false" text small><v-icon>mdi-lock-open</v-icon>Login</v-btn>
                <v-btn @click="logout" v-else-if="isLoggedIn === true" text small><v-icon>mdi-logout</v-icon>Logout</v-btn>
            </v-toolbar-items>
            <template v-slot:extension >

                <span>
                    <v-app-bar-nav-icon @click="sidebar=!sidebar">
                    </v-app-bar-nav-icon>
                </span>

                <v-tabs grow class="hidden-xs-only" v-if="isLoggedIn" >
                    <v-tab 
                        v-for="item in menuItems" 
                        :key="item.title"
                        :to="item.path"
                        >
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-tab>
                </v-tabs>
            </template>
        </v-app-bar>
        <v-navigation-drawer v-model="sidebar"
            v-if="isLoggedIn"
            bottom
            temporary   
            app
                >
            <v-list-item>
                <v-list-item-title>Навигация</v-list-item-title>
            </v-list-item>
            <v-divider></v-divider>
            <v-list>
                <v-list-item
                v-for="item in profileMenu"
                :key="item.title"
                :to="item.path"
                link
                >
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>

                </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-list>
                <v-list-item
                v-for="item in menuItems"
                :key="item.title"
                :to="item.path"
                link
                >
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>

                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-navigation-drawer v-model="sidebar"
            v-if="!isLoggedIn"
            bottom
            temporary   
            app
            >
            <v-list-item>
                <v-list-item-title>Навигация</v-list-item-title>
            </v-list-item>
            <v-divider></v-divider>
            <v-list>
                <v-list-item
                    :to="{ name : 'login' }"
                    link
                >
                    <v-list-item-icon>
                        <v-icon>mdi-lock-open</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>Войти</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item
                    :to="{ name : 'register' }"
                    link
                >
                    <v-list-item-icon>
                        <v-icon>mdi-account-plus</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>Регистрация</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
import Time from '@/components/TimeForHead'
import { mapGetters } from 'vuex'

export default {

    computed : mapGetters(["isLoggedIn", "getUserName"]),

    components: {
            Time
        },

    data(){
        return {
            user : this.$store.state.user,
            sidebar : false,
            menuItems : [
                { title : 'Главное меню', path : "/", icon : "mdi-fireplace"},
                { title : 'Словарь', path : "/vocabulary", icon : "mdi-book-open-outline"},
                { title : 'Упражнения', path : "/puzzle", icon : "mdi-puzzle"},
                { title : 'Тренировка слов', path : "/train", icon : "mdi-dumbbell"},
                { title : 'Грамматика', path : "/grammar", icon : "mdi-book-open-page-variant"},
                { title : 'Для тестирования', path : "/test", icon : "mdi-test-tube"},
            ],
            profileMenu : [
                { title : 'Ваш профиль', path : `/profile/${this.$store.state.authUser.user}`, icon : "mdi-account-circle"},
                { title : 'Статистика', path : `/profile/${this.$store.state.authUser.user}/user-stats`, icon : "mdi-chart-box-outline"},
            ]
        }
    },

    methods : {
        logout(){
            this.$store.dispatch('logoutUser')
            .then(() => this.$router.push("/"))
            .catch( err => console.log(err))
        }
    },

}
</script>