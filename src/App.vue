<template>
<v-app>
  
    <Header />

  <!-- Sizes your content based upon application components  -->
  <v-main>

    <!-- Provides the application the proper gutter -->
    <v-container fluid>

      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-main>

  <v-footer app>
    <!-- -->
  </v-footer>
</v-app>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'App',

  components : {
    Header
  },

  data: () => ({
    //
  }),
};
</script>
