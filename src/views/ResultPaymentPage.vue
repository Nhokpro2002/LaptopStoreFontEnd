<template>
  <h1>AAAAAAAAAAAAAA</h1>
</template>
<style scoped></style>
<script lang="ts">
import Vue from "vue";
import { processReruntedResult } from "@/services/PaymentService";

export default Vue.extend({
  data() {
    return {
      result: "",
    };
  },

  methods: {
    /*async handleResultFromVnpay() {
      const searchParams = new URLSearchParams(window.location.search);
      let allParams: Map<string, any> = new Map<string, any>();
      const vnp_TmnCode = searchParams.get("vnp_tmnCode");
      const vnp_Amount = searchParams.get("vnp_Amount");
      const vnp_BankCode = searchParams.get("vnp_BankCode");
      const vnp_OrderInfo = searchParams.get("vnp_OrderInfo");
      const vnp_TransactionNo = searchParams.get("vnp_TransactionNo");
      const vnp_TransactionStatus = searchParams.get("vnp_TransactionStatus");
      const vnp_TxnRef = searchParams.get("vnp_TransactionStatus");
      const vnp_SecureHash = searchParams.get("vnp_SecureHash");
      allParams.set("vnp_TmnCode", vnp_TmnCode);
      allParams.set("vnp_Amount", vnp_Amount);
      allParams.set("vnp_BankCode", vnp_BankCode);
      allParams.set("vnp_OrderInfo", vnp_OrderInfo);
      allParams.set()

    },*/

    async handleResultFromVnpay() {
      const searchParams = new URLSearchParams(window.location.search);
      console.log(searchParams);
      const responseCode = searchParams.get("vpn_ResponseCode");
      const response = await processReruntedResult(responseCode);
      console.log(response);
    },
  },

  mounted() {
    this.handleResultFromVnpay();
  },
});
</script>
