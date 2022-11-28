<template>
    <v-row justify="center">
        <v-expansion-panels accordion>
          <v-expansion-panel>
            <v-expansion-panel-header>Social Media Details</v-expansion-panel-header>
            <v-expansion-panel-content>
               <v-col v-for="(item,i) in social_ar" :key="i">
                  <v-row class="input">
                    <v-col cols="12" sm="2" class="label">
                      <v-panel-title class="input-label">
                        Platform
                      </v-panel-title>
                    </v-col>
                    <v-col cols="12" sm="4">
                      <v-text-field
                      v-model="item.platform"
                      :counter="10"
                      placeholder="Eg:- Instagram"
                      class="mr-6 field"
                    ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-divider></v-divider>
                  <v-row class="input">
                    <v-col cols="12" sm="2" class="label">
                      <v-panel-title class="input-label">
                        Username
                      </v-panel-title>
                    </v-col>
                    <v-col cols="12" sm="4">
                      <v-text-field
                      v-model="item.username"
                      placeholder="Username"
                      class="mr-6 field"
                    ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-divider></v-divider>
                  <v-row class="input">
                    <v-col cols="12" sm="2" class="label">
                      <v-panel-title class="input-label">
                        URL
                      </v-panel-title>
                    </v-col>
                    <v-col cols="12" sm="4">
                      <v-text-field
                      v-model="item.social_URL"
                      placeholder="URL"
                      class="mr-6 field"
                    ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-devider></v-devider>
                  <v-row>
                    <v-btn @click="addSocial" class="mb-3 mt-3" text>+ Add more</v-btn>
                    <v-btn @click="removeSocial(i)" class="mb-3 ml-3 mt-3" text>-Remove</v-btn>
                  </v-row>
                </v-col>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
    </v-row>
</template>
<script>
export default{
    name : 'SocialAccordion', 
    props:{
      social_details:Object
    }, 
    data: () => ({
    count:1,
    social:{
      platform:'',
      username:'',
      social_URL:''
    },
    social_ar:[
      {
        platform:'',
        username:'',
        social_URL:''
      }
    ]
  }),
  mounted(){
    if(this.social_details)
    this.social_ar=this.social_details
    // this.social_ar = JSON.parse(JSON.stringify(this.social_details))
   },
   methods:{
    addSocial() {
      this.social_ar.push({
        platform:'',
        username:'',
        social_URL:''
       })
    },
    removeSocial(i){
      this.social_ar.splice(i, 1);
      if (!this.social_ar.length) this.addSocial();
    }
   },
  watch:{
    social_ar:{
      handler(val){
        this.$emit('social',val)
      },
      deep:true
    }
  }   
}
</script>

<style>

</style>