<template>
    <v-col>
      <v-col class="list-navbar pt-3 pb-3 pl-3 pr-3">
        <h1>Resume Builder</h1>   
      </v-col>
      <v-col class="list-navbar-sub pt-3 pl-5">
        <h2>Resumes</h2>
      </v-col>
      <v-divider class="ml-5"></v-divider>
      <div class="list-main">
        <div class="list-search-main">
          <v-col class="row mt-3 mb-2" cols="6" sm="4">
              <v-text-field 
                placeholder="Search by name or e-mail" 
                outlined
                dense
                prepend-inner-icon="mdi-magnify" 
                @keyup="getData()" 
                v-model="query"
              >   
              </v-text-field>
          </v-col>
          <v-col cols="6" sm="6" class="list-search-right" id="newresume">
              <router-link to="/form">+ Add new resume</router-link>
          </v-col>
        </div>
        <v-alert v-model="alert"
            dense
            text
            type="success"
          >
            Successfully Deleted
        </v-alert>
        <div class="list-table post-table" v-if="data.length == 0 || query===''">
            <v-simple-table  v-for="item in list" :key="item.basic_details_id">
                <template v-slot:default>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Applied Date</th>
                        <th></th>
                    </tr>
                    <tr v-for="i in item" :key="i.basic_details_id" class="data" >
                        <td>{{i.name}}</td>
                        <td>{{i.email}}</td>
                        <td>{{i.phone}}</td>
                        <td>{{i.date_applied.split(".")["0"]}}</td>
                        <td>
                            <v-menu bottom left>
                                <template v-slot:activator="{ on, attrs }">
                                  <v-btn
                                      black
                                      icon
                                      v-bind="attrs"
                                      v-on="on"
                                  >
                                    <v-icon>mdi-dots-vertical</v-icon>
                                  </v-btn>
                                </template>
                      
                                  <v-list>
                                    <v-list-item>
                                        <router-link :to="`/edit/${i.basic_details_id}`" class="edit"><v-row justify="center"><v-btn text>Edit</v-btn></v-row></router-link>
                                    </v-list-item>
                                    <v-list-item @click="getConfirmation(i.basic_details_id)" class="delete">
                                        <template>
                                            <v-row justify="center">
                                              <v-dialog
                                                v-model="dialog"
                                                persistent
                                                max-width="290"
                                              >
                                                <template v-slot:activator="{ on, attrs }">
                                                  <v-list-item
                                                    color="primary"
                                                    
                                                    text
                                                    v-bind="attrs"
                                                    v-on="on"
                                                    class="delete"
                                                  >
                                                    Delete
                                                  </v-list-item>
                                                </template>
                                                <v-card>
                                                  <v-card-title class="text-h5">
                                                    Confirm
                                                  </v-card-title>
                                                  <v-card-text class="delete-msg">Are you sure want to delete?</v-card-text>
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
                                                      @click="deleteResume(i.basic_details_id)"
                                                    >
                                                      Yes
                                                    </v-btn>
                                                  </v-card-actions>
                                                </v-card>
                                              </v-dialog>
                                            </v-row>
                                          </template>
                                    </v-list-item>
                                  </v-list>
                                </v-menu>
                                </td>
                          </tr>
                       </template>
                    </v-simple-table>
                </div>
                <div class="list-table" v-else>
                    <v-simple-table  v-for="item in data" :key="item.basic_details_id">
                        <template v-slot:default>
                          <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Applied on</th>
                            <th></th>
                        </tr>
                              <tr v-for="i in item" :key="i.basic_details_id" class="data" >
                                <td>{{i.name}}</td>
                                <td>{{i.email}}</td>
                                <td>{{i.phone}}</td>
                                <td>{{i.date_applied.split(".")["0"]}}</td>
                                <td>
                                    <v-menu bottom left>
                                        <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                      black
                                      icon
                                      v-bind="attrs"
                                      v-on="on"
                                    >
                                      <v-icon>mdi-dots-vertical</v-icon>
                                    </v-btn>
                                  </template>
                      
                                  <v-list>
                                    <v-list-item>
                                        <router-link :to="`/edit/${i.basic_details_id}`" class="edit">Edit</router-link>
                                    </v-list-item>
                                    <v-list-item @click="deleteResume(i.basic_details_id)" class="delete">
                                        Delete
                                    </v-list-item>
                                  </v-list>
                                </v-menu>
                                </td>
                            </tr>
                        </template>
                    </v-simple-table>
                </div>
        </div>
    </v-col>
</template>

<script>

 import axios from 'axios'
export default{
    name:'ListingTable',
    components:{
        
    },
  
    data(){
        return {
            list:[],
            query : "",
            data : [],
            alert:false,
            dialog:false,
           
           
        }
    },
    methods :{
      // for searching
        async getData(){
            await axios.get(`http://127.0.0.1:8000/search/${this.query}`)
            .then((response) => {
                this.data = response.data
                console.log(this.data)
            })
            .catch((error) => {
                console.log('error: ',error)
            })
        },
        
        // to delete
        async deleteResume(id){
            console.log("Deleting resume")
            await axios.delete(`http://127.0.0.1:8000/delete_primary/${id}`)
            .then((res)=> console.log(res.data))
            this.dialog=false
            this.alert=(true,5000)
            window.location.reload()
            
        },
        getConfirmation(id){
        this.dialog=true
        this.delete_id=id
        console.log("Delete msg:")
        console.log("Delete id",this.delete_id)
        console.log(">>>>>>",this.dialog)
      }
     },
    mounted(){
        axios.get('http://127.0.0.1:8000/get_allprimary')
        .then((resp)=> {
            this.list = resp.data
            console.log(resp.data)
        })
    }
}

</script>


<style>

.list-navbar{
    background-color: rgb(26, 90, 90);
    color: whitesmoke;
    padding:15px;
    text-align: left;
    height: 3%;
}
.list-navbar-sub{
  text-align: left;
}
.list-search-main{
  display: flex;
  margin: 10px;
  background-color: rgb(255, 255, 255);
}
.list-left{
    background-color: rgb(235, 235, 235);
    width: 15%;
}
.list-heading{
    padding: 10px;
}
.line{
    height: 1px;
    background-color: rgb(151, 146, 146);
    width: 99%;
    margin-left: 10px;
}

.list-search-left{
    width: 50%;
    text-align: left;
    padding-left: 5%;
}
.list-search-right{
   
    padding-left: 30%;
    margin-left: 14%;
    padding-top: 34px;
}
.list-search-right a{
    text-decoration: none;
    font-size: 15px;
}
.list-search-left input{
    width: 60%;
    height: 4vh;
    padding: 15px;
    border: 1px solid;
   
}
.list-search-left input:focus{
    outline: none;
}
.table-heading{
    color: aliceblue; 
}
th{
    width: 400px;
    text-align: left;
    vertical-align: middle;
    padding: 10px 0;
    padding-left: 50px;
    background-color: teal;
    color: rgb(255, 255, 255);
}
.data td{
    text-align: left;
    padding-left: 33px;
}
.data:hover{
  background-color: rgb(197, 224, 224);
}
.v-list-item:hover{
    background-color: rgb(218, 218, 218);
    cursor: pointer;
}
.edit{
    text-decoration: none; 
}
.delete{
    color: #000000;
}
.delete-msg{
    text-align: left;
}
@media screen and (max-width:600px){
  .list-search-right{
   
    padding-left: 0;
    margin-left: 0;
    padding-top: 20px;
}

  
}
</style>













