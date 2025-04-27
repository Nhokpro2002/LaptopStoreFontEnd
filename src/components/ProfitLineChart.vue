<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  name: "ProfitLineChart",
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
