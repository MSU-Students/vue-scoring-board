<template>
  <q-page>
    <input type="text" v-model="applicant" > 
        <div @click="addApplicant">Add  {{applicant}}</div>
        <ul>
            <li v-for="(score, name) in scorings" >{{name}} {{score}} Gwapo</li>
        </ul>
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import {mapState} from 'vuex';
interface IPlayers {
  [member:string]: number;
}
@Component({
  computed:{
    ...mapState('scoring',['applicant', 'scorings'])
  }
})
export default class PageIndex extends Vue {
   applicant: string = "";
   scorings!:IPlayers;
   
  async addApplicant(){
      await this.$store.dispatch('scoring/addApplicant', this.applicant);
      this.$forceUpdate();
  }
};
</script>
