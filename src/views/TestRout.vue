<template>
    <div class="router">
        <h2 class="text-center" >Проверим работу роуторов!</h2>
        <div>
            <router-link to="/test/comp1">Компонент №1 / </router-link>
            <router-link :to="{ name : 'comp2' }">Компонент №2 / </router-link>
            <router-link :to="{ name : 'testAxios' }">Тест Axios / </router-link>
            <router-link :to="{ name : 'TestProps', params : { id : idForProps } }">Передать пропс / </router-link>
            <router-link to="/test/СardForSettings">Тренировка карт /</router-link>
            <router-link :to="{ name : 'jwt-test' }"> Тренировка JWT токена /</router-link>
            <router-link :to="{ name : 'test-router' }" > Router Query / </router-link>
            <v-container>
                <v-row justify="space-around">
                    <v-col cols="12" sm="6" md="6">
                        <h4>Выберите количество слов</h4>
                        <v-radio-group v-model="idForProps" row>
                            <v-radio
                                label="13"
                                value="13"
                            ></v-radio>
                            <v-radio
                                label="42"
                                value="42"
                            ></v-radio>
                            <v-radio
                                label="5"
                                value="5"
                            ></v-radio>
                        </v-radio-group>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    
    data(){
        return {
            idForProps : 0,
        }
    }

}
</script>