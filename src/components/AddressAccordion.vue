<template>
    <v-row justify="center">
        <v-expansion-panels accordion> 
          <v-expansion-panel>
            <v-expansion-panel-header>Address Details</v-expansion-panel-header>
            <v-divider></v-divider>
            <v-expansion-panel-content>
                <v-row class="input">
                  <v-col cols="12" sm="2" class="label">
                    <label class = "input-label">
                      Address Line 1
                    </label>
                  </v-col>
                 <v-col cols="12" sm="4">
                  <v-text-field
                  v-model="address.House_name"
                  :counter="30"
                  placeholder=" Add House Name"
                  required
                  class="mr-6 field"
                ></v-text-field>
                 </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-row class="input">
                  <v-col cols="12" sm="2" class="label">
                    <label class = "input-label">
                      Street
                      <span class="red--text">*</span>
                    </label>
                  </v-col>
                  <v-col cols="12" sm="4">
                    <v-text-field
                  v-model="address.Street"
                  placeholder="Add Street"
                  required
                  :rules="addressRules"
                  class="mr-6 field"
                ></v-text-field>
                  </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-row class="input">
                  <v-col cols="12" sm="2" class="label">
                    <label class = "input-label">
                      City
                      <span class="red--text">*</span>
                    </label>
                  </v-col>
                  <v-col cols="12" sm="4">
                    <v-text-field
                  v-model="address.City"
                  placeholder="Add City"
                  required
                  :rules="addressRules"
                  class="mr-6 field"
                ></v-text-field>
                  </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-row class="input">
                  <v-col cols="12" sm="2" class="label">
                    <label class = "input-label">
                      Pincode
                      <span class="red--text">*</span>
                    </label>
                  </v-col>
                  <v-col cols="12" sm="4">
                    <v-text-field
                  v-model="address.pincode"
                  placeholder="Add Pincode"
                  required
                  :rules="addressRules"
                  class="mr-6 field"
                ></v-text-field>
                  </v-col>
                </v-row>
                <v-divider></v-divider>
               <v-row class="input">
                <v-col cols="12" sm="2" class="label">
                  <label class = "input-label">
                    Country
                    <span class="red--text">*</span>
                  </label>
                </v-col>
                <v-col cols="12" sm="4">
                  <v-select
                v-model="address.Country"
                :items="items"
                placeholder="Select your country"
                :rules="addressRules"
                class="mr-6 field"
              ></v-select>
                </v-col>
               </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
    </v-row>
</template>
<script>
export default{
    name : 'AddressAccordion',
    props:{
      address_details:Object
    },
    data: () => ({
    items: ['Japan', 'Wakanda', 'USA', 'India','Nigeria','Germany','Brazil','Australia'],
    address:{
      House_name:'',
      Street:'',
      City:'',
      pincode:'',
      Country:''
    },
    addressRules: [
      v => !!v || 'This field is required'
    ]
  }),
  mounted(){
    if(this.address_details)
    this.address=this.address_details
   },
  watch:{
    address:{
      handler(val){
        console.log("bbbbbbbbbbbbbbbbb",val)
        this.$emit('address',val)
      },
      deep:true
    }
  }
}
</script>

<style>

</style>