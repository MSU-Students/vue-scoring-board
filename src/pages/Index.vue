<template>
  <q-page>
    <input type="text" v-model="applicant" > 
        <div @click="addApplicant">Add  {{applicant}}</div>
        <ul>
            <li v-for="student in students" >{{student.name}} Gwapo</li>
        </ul>
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
interface IPlayers {
  [member:string]: number;
}
@Component
export default class PageIndex extends Vue {
   applicant = "";
   scoring:IPlayers = {
      'Usman': 0,
      'Matin': 0,
      'Felix': 0,
      'Magongcar': 0,
      'Omair': 0                
   };
   get students(){
      return Object.keys(this.scoring)
          //map string to object {name}
          .map((studentName) => {
              return {
                  name: studentName
              }
          })
  }
  addApplicant(){
      this.scoring[this.applicant] = 0;
      this.$forceUpdate();
  }
};
</script>
