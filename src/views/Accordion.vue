
<template>
  <v-main>
  
    <SubHeading content="Create Resume content"/>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      >
      <BasicAccordion @primary="getPrimaryDetails"/>
      <AddressAccordion @address="getAddressDetails"/>
      <EducationAccordion @education="getEducationDetails"/>
      <ExperienceAccordion @experience="getExperienceDetails"/>
      <ProjectAccordion @project="getProjectDetails"/>
      <SkillAccordion @skill="getSkillDetails"/>
      <SocialAccordion @social="getSocialDetails"/>
  
      <v-row justify="end">
          <router-link to="/" id="cancel" >
            <v-btn class="mb-5 mt-3" text>Cancel</v-btn>
          </router-link>
        
        <v-btn class="mb-5 mt-3 ml-3 mr-5 teal" dark @click="[validate(),create_resume()]" id="">
          Save
        </v-btn>
      </v-row>
    </v-form>
    <v-alert v-model="alert"
      dense
      text
      type="success"
    >
      Successfully saved
    </v-alert>
    <v-alert v-model="failAlert"
      dense
      text
      type="error"
    >
      Please fill the details
    </v-alert>
        
</v-main> 
  
  

</template>

<script>

import SubHeading from '../components/AccordionTitle.vue'
import BasicAccordion from '../components/BasicAccordion.vue'
import AddressAccordion from '../components/AddressAccordion.vue'
import EducationAccordion from '../components/EducationAccordion.vue'
import ExperienceAccordion from '../components/ExperienceAccordion.vue'
import ProjectAccordion from '../components/ProjectAccordion.vue'
import SkillAccordion from '../components/SkillAccordion.vue'
import SocialAccordion from '../components/SocialAccordion.vue'
import axios from 'axios'


  export default {
    name: 'accordionForm',

    components:{
      
      SubHeading,
      BasicAccordion,
      AddressAccordion,
      EducationAccordion,
      ExperienceAccordion,
      ProjectAccordion,
      SkillAccordion,
      SocialAccordion, 
      
    },
    data() {
      return{
        name:'',
        email: '',
        phone:'',
        image:'',
        summary:'',
        House_name:'',
        Street:'',
        City:'',
        pincode:'',
        Country:'',
        item:[],
        education:[],
        experience:[],
        skill:[],
        project:[],
        social:[],
        alert:false,
        failAlert:false,
        valid:false

      }
    },
    methods:{
    getPrimaryDetails(data) {
      console.log("Basic details >>>>", data)
      this.name = data.name
      this.email = data.email
      this.phone = data.phone
      this.image = data.image
      this.summary = data.summary
      console.log(this.email);
    },
    getAddressDetails(data){
      this.House_name = data.House_name
      this.Street = data.Street
      this.City = data.City
      this.pincode = data.pincode
      this.Country = data.Country
    },
    getEducationDetails(data){
      console.log("edu",data);
      this.education = data
      console.log("eduu",this.education);
    },
    getExperienceDetails(data){
      console.log("exp:",data)
      this.experience = data

      
    },
    
    getProjectDetails(data){
      console.log("projectname :",data)
      this.project = data

    },
    getSkillDetails(data){
      console.log("skl check")
      console.log("skl data",data)
      this.skill = data
     
    },
    getSocialDetails(data){
      this.social = data
    },
    validate() {
        this.$refs.form.validate()
      },

    async create_resume(){
      console.log("Hello")
      
        const primaryDetails = {
            name: this.name,
            email: this.email,
            phone: this.phone,
            image_URL:this.image,
            summary:this.summary,
            address_details:[
              {
                House_name:this.House_name,
                Street:this.Street,
                City:this.City,
                pincode:this.pincode,
                Country:this.Country
              }
            ],
            education_details:this.education,
            experience_details:this.experience,
            project_details:this.project,
            skill_details:this.skill,
            social_details:this.social
          }
    
    console.log(primaryDetails);
    await axios.post(`http://127.0.0.1:8000/new_resume`,primaryDetails).then((res)=>{
      console.log(res.data)
      if (res.data.error_message){
        this.alert = false
        this.failAlert = true
        console.log(res.data.error_message)
      }
      else{
        this.alert = true
      }
      console.log("varunnundonn nokk");     
    }).catch((err)=>{
      console.log(err);
    })
  }
}
  }
</script>




<style>
.row{
  margin:0px 20px;
}
.v-form{
  margin-top: 20px;
}



.row .input{
  margin: 0;
  
}
.input-label{
  width: 100px;
 
}
.label{
  padding: 0;
  padding-top: 36px;
  background-color: rgb(224, 224, 224);
}
.col-sm-4{
  padding: 0px;
}
.field{
margin-top: 18px;
margin-left: 8px;
}
.v-expansion-panel-content__wrap{
  padding: 0px;
}
.v-divider{
  background-color: rgb(194, 190, 190);
}
.col{
  padding: 0px;
}
#cancel{
  text-decoration: none;
}
</style>
