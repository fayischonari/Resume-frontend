<template>
    <v-row justify="center">
        <v-expansion-panels accordion v-model="panel" >
          <v-expansion-panel expand>
            <v-expansion-panel-header>Primary Details</v-expansion-panel-header>
            <v-divider></v-divider>
            <v-expansion-panel-content>
                <v-row class="input">
                  <v-col cols="12" sm="2" class="label">
                    <label class = "input-label">
                      Name
                      <span class="red--text">*</span>
                    </label>
                  </v-col>
                  <v-col cols="12" sm="4">
                    <v-text-field
                      v-model="primary.name"
                      :rules="nameRules"
                      regular
                      placeholder="Add Name"
                      required
                      class="mr-6 field"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-row class="input">
                  <v-col cols="12" sm="2" class="label">
                    <label class = "input-label">
                      E-mail
                      <span class="red--text">*</span>
                    </label>
                  </v-col>
                  <v-col cols="12" sm="4">
                    <v-text-field
                  v-model="primary.email"
                  :rules="emailRules"
                  placeholder="Add e-mail"
                  required
                  class="mr-6 field"
                ></v-text-field>
                  </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-row class="input">
                  <v-col cols="12" sm="2" class="label">
                    <label class = "input-label">
                      Phone
                      <span class="red--text">*</span>
                    </label>
                  </v-col>
                 <v-col cols="12" sm="4">
                  <v-text-field
                  v-model="primary.phone"
                  :rules="phoneRules"
                  placeholder="Add Phone number"
                  required
                  class="mr-6 field"
                ></v-text-field>
                 </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-row class="input">
                  <v-col cols="12" sm="2" class="label">
                    <label class = "input-label">
                      Image
                    </label>
                  </v-col>
                  <v-col cols="12" sm="4">
                    <v-text-field
                  v-model="primary.image"
                  placeholder="Add image URL"
                  class="mr-6 field"
                ></v-text-field>
                  </v-col>
                </v-row>
                <v-divider class="divider"></v-divider>
                <v-row class="input">
                  <v-col cols="12" sm="2" class="label">
                    <label class = "input-label">
                      Summary
                    </label>
                  </v-col>
                  <v-col cols="12" sm="4">
                    <v-textarea
                  v-model="primary.summary"
                  placeholder="Add Summary"
                  class="mr-6 field"
                  auto-grow
                ></v-textarea>
                  </v-col>
                </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
</template>

<script>
export default{
    name : 'BasicAccordion',
    props:{
      primary_details:Object
    },
    data(){
    return{
      panel:0,
      primary:{
        name: '',
        email:'',
        phone:'',
        image:'',
        summary:''
      },
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length > 3) || 'Name must be greater than 3 characters',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      phoneRules: [
        v => !!v || 'Phone no. is required',
        v => /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(v) || 'Enter valid phone no.'
      ],
    }
   },
   mounted(){
    if(this.primary_details){
      console.log("Im basic")
    this.primary=this.primary_details
    }
    
   },
   watch:{
    primary:{
      handler(val){
        this.$emit('primary',val)
      },
      deep:true
    }
  }
    
}

</script>

<style>

</style>