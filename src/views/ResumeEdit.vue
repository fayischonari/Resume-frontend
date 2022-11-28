<template>
    <v-main>

        <subHeading content="Edit Resume content"/>
        <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        >
        <BasicAccordion v-if="items.prim" :primary_details="items.prim[0]"  @primary="getPrimaryDetails"/>
        <AddressAccordion v-if="items.adrs" :address_details="items.adrs[0]" @address="getAddressDetails"/>
        <EducationAccordion v-if="items.edu" :education_details="items.edu" @education="getEducationDetails"/>
        <ExperienceAccordion v-if="items.exp" :experience_details="items.exp" @experience="getExperienceDetails"/>
        <ProjectAccordion v-if="items.prjct" :project_details="items.prjct" @project="getProjectDetails"/>
        <SkillAccordion v-if="items.skl" :skill_details="items.skl" @skill="getSkillDetails"/>
        <SocialAccordion v-if="items.sm" :social_details="items.sm" @social="getSocialDetails"/>
        <v-row justify="end">
          <router-link to="/" id="cancel" >
            <v-btn class="mb-5 mt-3" text>Cancel</v-btn>
          </router-link>
          <v-btn class="mb-5 mt-3 ml-3 mr-5 teal" dark @click="edit_resume" id="">
            Save
          </v-btn>
        </v-row>
      </v-form>
      <v-alert v-model="alert"
      dense
      text
      type="success"
    >
      Successfully Edited
    </v-alert>
    </v-main>
</template>

<script>
import subHeading from '../components/AccordionTitle.vue' 
import BasicAccordion from '../components/BasicAccordion.vue'
import AddressAccordion from '../components/AddressAccordion.vue'
import EducationAccordion from '../components/EducationAccordion.vue'
import ExperienceAccordion from '../components/ExperienceAccordion.vue'
import ProjectAccordion from '../components/ProjectAccordion.vue'
import SkillAccordion from '../components/SkillAccordion.vue'
import SocialAccordion from '../components/SocialAccordion.vue'
import axios from 'axios'
export default{
    name:'EditResume',
    components:{
        subHeading,
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
        image_URL:'',
        summary:'',
        House_name:'',
        Street:'',
        City:'',
        pincode:'',
        Country:'',
        Qualification:'',
        Course_name:'',
        University_name:'',
        Location:'',
        passing_year:'',
        company_name:'',
        location:'',
        start_date:'',
        end_date:'',
        project_title:'',
        project_description:'',
        platform:'',
        username:'',
        social_URL:'',
        id: this.$route.params.id,
        items: [],
        education:[],
        experience:[],
        project:[],
        skill:[],
        social:[],
        alert:false
      }
    },
    methods:{
        getPrimaryDetails(data) {
        console.log("Basic details >>>>", data)
        this.name=data.name
        this.email=data.email
        this.phone=data.phone
        this.image=data.image_URL
        this.summary=data.summary
        console.log("nokk",data.image_URL)
        console.log("-----------",this.image)
        },
        getAddressDetails(data){
        this.House_name = data.House_name
        this.Street = data.Street
        this.City = data.City
        this.pincode = data.pincode
        this.Country = data.Country
        console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<",this.pincode)
        console.log(this.Street)
        },
        getEducationDetails(data){
          this.education = data
          console.log("education data:",data)
        },
        getExperienceDetails(data){
          this.experience = data
        },
        getProjectDetails(data){
          this.project = data
          console.log("project-data:",data)
        },
        getSkillDetails(data){
        this.skill = data
        console.log("skil-data:",data)
        },
        getSocialDetails(data){
        this.social = data
        },


        async edit_resume(){
        console.log("Hello")
            const primaryDetails = {
              
               prim:[
                {
                  name: this.name,
                  email: this.email,
                  phone: this.phone,
                  image_URL:this.image,
                  summary:this.summary,
                }
               ],
                adrs:[
                {
                    House_name:this.House_name,
                    Street:this.Street,
                    City:this.City,
                    pincode:this.pincode,
                    Country:this.Country
                }
                ],
                edu:this.education,
                exp:this.experience,
                prjct:this.project,
                skl:this.skill,
                sm:this.social
            }
            console.log(primaryDetails);
            await axios.put(`http://127.0.0.1:8000/get_individual_resume/${this.id}`,primaryDetails).then((res)=>{
            this.alert=true
            console.log("gyyefeyrf",res.data)
            console.log("id is:",this.id)
            }).catch((err)=>{
            console.log(err);
            })
            
        },
        async formget(){
             await axios.get(`http://127.0.0.1:8000/get_individual_resume/${this.id}`).then((res)=>{
                  this.items=res.data
                  console.log(this.items, "<<<<<<<<<<<<<")
                  console.log("ok")
                  console.log('data:',res.data)
                  console.log("Items: ", this.items)
              })
              .catch(function(error){
                  console.log('error:',error)
              })
        },
        
        },

        async mounted() {
          await this.formget()
          console.log("id>>>>>>>>>>>>>>>>>test: ", this.items.prim)

          
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


</style>
