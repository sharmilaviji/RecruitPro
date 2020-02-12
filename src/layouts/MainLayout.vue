<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>
       <center>   RecruitPRO</center>
        </q-toolbar-title>

        
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view/>
    </q-page-container>
 </q-layout>
</template>

<script>

import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data () {
    return {
  
    }
  }
}
</script>

