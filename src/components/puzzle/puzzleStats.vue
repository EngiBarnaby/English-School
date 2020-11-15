<template>
    <div class="stats" >
        <v-row justify="center" class="mt-5">
            <v-col xs="12" sm="12" md="8" cols="8" >
                <h2 class="text-center" >Сдесь будет статистика</h2>
                <h3 class="text-center" >Правильно выполненых заданий : {{ this.taskComplete }}</h3>
                <h3 class="text-center" >Количество допущенных ошибок : {{ this.mistakes }}</h3>
                <h3 class="text-center" >Ваши данные были обновлены</h3>
            </v-col>
        </v-row>
        <v-row justify="center" >
            <router-link
                class="text-decoration-none"
                :to="{ name : 'puzzle-settings'}" 
            >
                <v-btn color="success"
                    >Продолжить
                </v-btn>  
            </router-link>
        </v-row>
    </div>
</template>

<script>
export default {
    
    props : ['taskComplete', 'mistakes']

}
</script>