<template>
    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        persistent
        max-width="290"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            dark
            text
            v-bind="attrs"
            v-on="on"
          >
            Delete
          </v-btn>
        </template>
        <v-card>
          <v-card-title class="text-h5">
            Confirm
          </v-card-title>
          <v-card-text>Delete?</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="green darken-1"
              text
              @click="dialog = false"
            >
              No
            </v-btn>
            <v-btn
              color="green darken-1"
              text
              @click="deleteData()"
            >
              Yes
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </template>

  <script>
  export default {
    name:'DeleteMessage',
    // props:{
    //     dialog:Boolean
    // },
    data () {
      return {
        dialog: false,
      }
    },
    methods:{
        deleteData(){
            console.log("Delete varunnund")
            this.dialog=false
        }
    }
  }
</script>