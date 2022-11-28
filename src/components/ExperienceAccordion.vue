<template>
    <v-row justify="center">
        <v-expansion-panels accordion>
          <v-expansion-panel>
            <v-expansion-panel-header>Experience Details</v-expansion-panel-header>
            <v-divider></v-divider>
            <v-expansion-panel-content>
                <v-col v-for="(item,i) in experience_ar" :key="i">
                  <v-row class="input">
                    <v-col cols="12" sm="2" class="label">
                      <v-panel-title class = "input-label">
                        Job Role
                      </v-panel-title>
                    </v-col>
                    <v-col cols="12" sm="4">
                      <v-text-field
                      v-model="item.role"
                      :counter="10"
                      placeholder="Add Role"
                      class="mr-6 field"
                      >
                    </v-text-field>
                    </v-col>
                  </v-row>
                  <v-divider></v-divider>
                  <v-row class="input">
                    <v-col cols="12" sm="2" class="label">
                      <v-panel-title class = "input-label">
                        Organization
                      </v-panel-title>
                    </v-col>
                    <v-col cols="12" sm="4">
                      <v-text-field
                      v-model="item.company_name"
                      placeholder="Add Company Name"
                      class="mr-6 field"
                      >
                    </v-text-field>
                    </v-col>
                  </v-row>
                  <v-divider></v-divider>
                  <v-row class="input">
                    <v-col cols="12" sm="2" class="label">
                      <v-panel-title class = "input-label">
                        Location
                      </v-panel-title>
                    </v-col>
                    <v-col cols="12" sm="4">
                      <v-text-field
                      v-model="item.location"
                      placeholder="Add Location"
                      class="mr-6 field"
                      >
                    </v-text-field>
                    </v-col>
                  </v-row>
                  <v-divider></v-divider>
                  <v-row class="input">
                   <v-col cols="12" sm="2" class="label">
                    <v-panel-title class = "input-label">
                      Start Date
                    </v-panel-title>
                   </v-col>
                    <v-col cols="12" sm="4">
                      <v-text-field
                      
                      v-model="item.start_date"
                      placeholder="Start date"
                      onfocus="(this.type='date')"
                      class="mr-6 field"
                      >
                    </v-text-field>
                    </v-col>
                  </v-row>
                  <v-divider></v-divider>
                  <v-row class="input">
                    <v-col cols="12" sm="2" class="label">
                      <v-panel-title class = "input-label">
                        End Date
                      </v-panel-title>
                    </v-col>
                    <v-col cols="12" sm="4">
                      <v-text-field
                      v-model="item.end_date"
                      placeholder="End date"
                      onfocus="(this.type='date')"
                      class="mr-6 field">
                    </v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-btn @click="addExperience" class="mb-3" text>+Add more</v-btn>
                    <v-btn @click="removeExperience(i)" class="mb-3 ml-3" text>-Remove</v-btn>
                  </v-row>
                </v-col>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
    </v-row>
</template>
<script>
export default{
    name : 'ExperienceAccordion',  
    props:{
      experience_details:Array
    },
    
    data: () => ({
    count:1,
    experience_ar:[
      {
        role:'',
        company_name:'',
        location:'',
        start_date:'',
        end_date:''
      }
    ]
  }),
  mounted(){
    if(this.experience_details)
    this.experience_ar=this.experience_details
    // this.experience_ar = JSON.parse(JSON.stringify(this.experience_details))

    console.log("exp >>>>>>>>>>>>",this.experience_ar)
   },
   methods:{
    addExperience() {
      
      this.experience_ar.push({
        company_name:'',
        location:'',
        start_date:'',
        end_date:''
       
      
      })
             
    },
    removeExperience(i){
      this.experience_ar.splice(i, 1);
      if (!this.experience_ar.length) this.addExperience();
    }
   },
  watch:{
    experience_ar:{
      handler(val){
        console.log("dddddddddddd",val)
        this.$emit('experience',val)
      },
      deep:true
    }
  }
}
</script>

<style>
.row .input{
  margin: 0;
  
}

</style>