<template>
    <div id="vocabulary">
        <v-container>
            <VocabularyForm />
            <VocabularyWords />
        </v-container>
    </div>
</template>

<script>
import VocabularyForm from '@/components/VocabularyForm'
import VocabularyWords from '@/components/VocabularyWords'

export default {

    components : {
        VocabularyForm,
        VocabularyWords
    },

}
</script>

<style scoped>

</style>