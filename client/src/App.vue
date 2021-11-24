<template>
  <div id="app" class="container d-flex flex-column justify-content-center align-items-center mt-5">
    <h3>Willkommen bei der Service Worker Untersuchung!!</h3>
    <ButtonGet @get="fetchData"></ButtonGet>
    <CardView :employees="employees" @del="delEmployee"></CardView>
  </div>
</template>

<script>
import ButtonGet from '@/components/ButtonGet.vue';
import CardView from '@/components/CardView.vue';
import dotenv from 'dotenv';
import axios from 'axios';

export default {
  name: 'app',
  components: {
    ButtonGet,
    CardView,
  },
  data() {
    return {
      employees: [],
      update: false,
    };
  },
  methods: {
    async fetchData() {
      const employees = await axios({
        method: 'get',
        url: process.env.VUE_APP_SERVER + '/employees',
      });
      this.employees = employees.data;
    },
    async delEmployee(e) {
      await axios({
        method: 'delete',
        url: process.env.VUE_APP_SERVER + '/employees/' + e.id,
      });
      this.fetchData();
    },
    updateAvailable() {
      alert('Update vorhanden, bitte App neu starten! ');
    },
  },
  created() {
    dotenv.config();
    document.addEventListener('swUpdated', this.updateAvailable, { once: true });
  },
};
</script>

<style></style>
