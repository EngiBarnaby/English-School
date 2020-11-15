<template>
    <v-text-field 
        :append-icon=" !edit ?  'mdi-lead-pencil' : 'mdi-check'"
        :append-outer-icon="'mdi-delete-outline'"
        @click:append="editStatus"
        @click:append-outer="deleteWord"
        :value="rusWord + ' - ' + engWord"
        :readonly="!edit"
        :solo="!edit"
        :filled="edit"
        >
    </v-text-field>
</template>

<script>
import { mapActions } from "vuex"

export default {
    data(){
        return {
            
        }
    },

    props : ["rus", "eng", "id"],

    data(){
        return {
            rusWord : this.rus,
            engWord : this.eng,
            edit : false
        }
    },

    methods : {
        ...mapActions(["deleteWordInBase"]),
        editStatus(){
            this.edit = !this.edit
        },
        deleteWord(){
            this.deleteWordInBase(this.id)
        }
    }

}
</script>

<style lang="scss" >
.mdi-check {
  color : green !important;
  font-size: 1.5rem !important;
}
</style>