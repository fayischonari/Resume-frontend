<template>
    <v-row justify="center">
        <v-expansion-panels accordion>
          <v-expansion-panel>
            <v-expansion-panel-header>Skill Details</v-expansion-panel-header>
            <v-divider></v-divider>
            <v-expansion-panel-content>
                <v-col v-for="(item,index) in skl_ar"
                :key="index">
                  <v-row class="input">
                    <v-col cols="12" sm="2" class="label">
                      <v-panel-title class = "input-label">
                        Skill Name
                      </v-panel-title>
                    </v-col>
                    <v-col cols="12" sm="4">
                      <v-text-field
                      v-model="item.skill_name"
                      :counter="10"
                      placeholder="Add Skill Name"
                      class="mr-6 field"
                      >
                    </v-text-field>
                    </v-col>
                  </v-row>
                  <v-divider></v-divider>
                  <v-row class="input">
                   <v-col cols="12" sm="2" class="label">
                    <v-panel-title class = "input-label">
                      Skill Level
                    </v-panel-title>
                   </v-col>
                    <v-col cols="12" sm="4">
                    <v-select
                    v-model="item.skill_level"
                    :items="items"
                    placeholder="Skill Level"
                    class="mr-6 field"
                  ></v-select>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-btn @click="addSkill" class="mb-3" text>+ Add more</v-btn>
                    <v-btn @click="removeSkill(index)" class="mb-3 ml-3" text>-Remove</v-btn>
                  </v-row>
                </v-col>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
    </v-row>
</template>
<script>
export default{
    name : 'SkillAccordion',
    props:{
      skill_details:Array
    },
    data: () => ({
    items: ['Beginner', 'Intermediate', 'Expert'],
    
    skl_ar:[
      {
        skill_name:'',
        skill_level:''
      }
    ],
  }),
  mounted(){
    if(this.skill_details)
    this.skl_ar=this.skill_details
    console.log("skill mounted",this.skl_ar)
   },
   methods:{
    addSkill() {
      this.skl_ar.push({
        skill_name: "",
        skill_level: ""
      })
             
    },
    removeSkill(index){
      this.skl_ar.splice(index,1);
      if (!this.skl_ar.length) this.addSkill();
      console.log("index:",index)
    }
   },
  watch:{
    skl_ar:{
      handler(val){
        this.$emit('skill',val)
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