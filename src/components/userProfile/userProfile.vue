<template>
    <div>
        <v-row justify="center">
            <v-img
                :aspect-ratio="16/9"
                max-width="200"
                height="200"
                :src="userData.user_picture"
            ></v-img>
        </v-row>
      
        <v-card-text>
            <h2>
                Ник : {{ userData.name }}
            </h2>
            <hr class="mt-2">
        </v-card-text>

        <v-card-text>
            <h2 >
                Имя : {{ userData.first_name }}
            </h2>
            <hr class="mt-2">
        </v-card-text>
        <v-card-text>
            <h2>
                Фамилия : {{ userData.last_name }}
            </h2>
            <hr class="mt-2">
        </v-card-text>
        <v-card-text>
            <h2>
                Email : {{ userData.email }}
            </h2>
            <hr class="mt-2">
        </v-card-text>

    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {

    computed : mapGetters(["getUserProfile", "getUserName"]),

    data(){
        return {
            userData : ""
        }
    },

    methods : {

        ...mapActions(["userProfile"]),

        LogUserInfo(){
            console.log(this.getUserProfile);
        }

    },

    async mounted(){
       await this.userProfile()
       this.userData = this.getUserProfile
    }


}
</script>