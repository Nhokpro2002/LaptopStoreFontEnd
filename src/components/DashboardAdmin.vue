<template>
  <v-row>
    <v-col cols="12" lg="6" md="6" sm="12">
      <div class="chart">
        <OrderQuantityBarChart
          :chart-data="chartData.orderData"
          :chart-options="chartOptions"
        />
      </div>
    </v-col>
    <v-col cols="12" lg="6" md="6" sm="12">
      <div class="chart">
        <ProfitLineChart
          :chart-data="chartData.profitData"
          :chart-options="chartOptions"
        />
      </div>
    </v-col>
  </v-row>
</template>

<style scoped>
.chart {
  background-color: #abb2b9;
}
</style>

<script lang="ts">
import Vue from "vue";
import OrderQuantityBarChart from "./OrderQuantityBarChart.vue";
import ProfitLineChart from "./ProfitLineChart.vue";

export default Vue.extend({
  name: "ChartWrapper",
  components: {
    OrderQuantityBarChart,
    ProfitLineChart,
  },
  data() {
    return {
      chartData: {
        orderData: {
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          datasets: [
            {
              label: "Number of orders per month",
              backgroundColor: "#ea5e47",
              data: [5, 35, 15, 60, 4, 22, 10, 65, 90, 20, 80, 10],
            },
          ],
        },
        profitData: {
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          datasets: [
            {
              label: "Profit per month",
              backgroundColor: "#2e86c1",
              data: [70, 67, 80, 100, 89, 80, 55, 87, 90, 80, 67, 44],
            },
          ],
        },
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
});
</script>
