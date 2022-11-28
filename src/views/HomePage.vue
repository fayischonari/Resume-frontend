<template>
   <v-main>
    <ListingTable/>
   </v-main>

</template>

<script>
import ListingTable from '../components/ListingPage.vue'

export default{
    name :'HomePage',
    components:{
        ListingTable
    }
}
</script>