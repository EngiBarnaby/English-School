<template>
    <div class="irregular-verbs" >
        <v-simple-table >
            <template v-slot:default>
                <thead>
                    <tr>
                        <th >
                            Infinitive
                        </th>
                        <th>
                            Past Simple
                        </th>
                        <th>
                            Past Participle
                        </th>
                        <th>
                            Перевод
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                    v-for="item in verbs"
                    :key="item.id"
                    >
                        <td>{{ item.infinitive }}</td>
                        <td>{{ item.past_simple }}</td>
                        <td>{{ item.past_participle }}</td>
                        <td>{{ item.translation }}</td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    
    data(){
        return {
            verbs : []
        }
    },

    methods : {
        ...mapActions(["fetchIrregularVerbs"]),
        ...mapGetters(["getVerbs"])
    },

    async mounted(){
        await this.fetchIrregularVerbs()
        this.verbs = this.getVerbs()
    }

}
</script>