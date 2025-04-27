<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  name: "OrderQuantityBarChart",
  props: {
    chartData: {
      type: Object,
      required: true,
    },
    chartOptions: {
      type: Object,
      required: false,
      default: () => ({ responsive: true, maintainAspectRatio: false }),
    },
  },
  mounted() {
    this.renderChart(this.chartData, this.chartOptions);
  },
};
</script>
