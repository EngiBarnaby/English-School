<template>
    <div>
        <v-row justify="center">
            <v-col cols="12" xs='12' sm="8" md="6" lg="6" xl="6">
                <v-card class="py-5 px-5 mx-auto">
                    <v-card-actions>
                        <v-btn
                            :to="{ name : 'user-profile' }"
                            outlined
                            >
                            Ваш профиль
                        </v-btn>
                        <v-btn
                            :to="{ name : 'user-stats' }"
                            outlined
                            >
                            Ваша статистика
                        </v-btn>
                    </v-card-actions>
                    <router-view></router-view>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {



}
</script>