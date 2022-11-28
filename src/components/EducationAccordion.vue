<template>
    <v-row justify="center">
        <v-expansion-panels accordion>
          <v-expansion-panel>
            <v-expansion-panel-header>Education Details</v-expansion-panel-header>
            <v-divider></v-divider>
            <v-expansion-panel-content>
               <v-col  v-for="(item,i) in education_ar"
               :key="i">
                <v-row class="input">
                  <v-col cols="12" sm="2" class="label">
                    <label class="input-label">
                      Qualification
                    </label>
                  </v-col>
                  <v-col cols="12" sm="4">
                    <v-text-field
                    v-model="item.Qualification"
                    :counter="10"
                    placeholder="Add Qualification" class="mr-6 field">
                  </v-text-field>
                  </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-row class="input">
                  <v-col cols="12" sm="2" class="label">
                    <label class="input-label">
                      Course
                    </label>
                  </v-col>
                  <v-col cols="12" sm="4">
                    <v-text-field
                    v-model="item.Course_name"
                    placeholder="Add Course" class="mr-6 field">
                  </v-text-field>
                  </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-row class="input">
                 <v-col cols="12" sm="2" class="label">
                  <label class="input-label">
                    University
                  </label>
                 </v-col>
                  <v-col cols="12" sm="4">
                    <v-text-field
                  v-model="item.University_name"
                  placeholder="Add University"
                  class="mr-6 field"
                ></v-text-field>
                  </v-col>
                  <v-divider></v-divider>
                </v-row>
                <v-row class="input">
                  <v-col cols="12" sm="2" class="label">
                    <label class="input-label">
                      Location
                    </label>
                  </v-col>
                  <v-col cols="12" sm="4">
                    <v-text-field
                    v-model="item.Location"
                    placeholder="Add Location"
                    class="mr-6 field"
                    >
                  </v-text-field>
                  </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-row class="input">
                 <v-col cols="12" sm = "2" class="label">
                  <label class="input-label">
                    Passing year
                  </label>
                 </v-col>
                  <v-col cols="12" sm="4">
                    <v-text-field
                    v-model="item.passing_year"
                    placeholder="Add Passing Year"
                    onfocus="(this.type='date')"
                    class="mr-6 field"
                    >
                  </v-text-field>
                  </v-col>
                </v-row>
                <v-row class="">
                  <v-btn class="mb-3 " text @click="addEducation">+ Add more</v-btn>
                  <v-btn class="mb-3 ml-3" text @click="removeEducation(i)">- Remove</v-btn>
                </v-row>
               </v-col>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
    </v-row>
</template>
<script>


export default{
    name : 'EducationAccordion', 
    props:{
      education_details:Array
    }, 
    data: () => ({
    
    
    education_ar:[
      {
        Qualification:'',
        Course_name:'',
        University_name:'',
        Location:'',
        passing_year:''
      }
      
    ]

    
  }),
   mounted(){
    if(this.education_details)
    this.education_ar=this.education_details
    // this.education_ar = JSON.parse(JSON.stringify(this.education_details))
    console.log("edu data>>>:",this.education_ar)
   },
   methods:{
    addEducation() {
      
      this.education_ar.push({
        Qualification:'',
        Course_name:'',
        University_name:'',
        Location:'',
        passing_year:''
       })
             
    },
    removeEducation(i){
      this.education_ar.splice(i, 1);
      if (!this.education_ar.length) this.addEducation();
    }
   },
  watch:{
    education_ar:{
      handler(val){
        console.log("cccccccccc",val)
        this.$emit('education',val)
      },
      deep:true
    }
  }
}
</script>

<style>

.addmore{
  margin-bottom: 10px;
}
</style>