<template>
  <div>
    <div class="order-area-wrapper">
      <div class="row">
        <div class="col-lg-12">
          <!-- topbar top content start -->
          <div class="tab-top-content">
            <div class="left-content">
              <div class="tab-button">
                <v-tabs active-class="tab_active" v-model="tab">
                  <v-tab v-for="item in items" :key="item">
                    {{ item }}
                  </v-tab>
                </v-tabs>
              </div>
            </div>
            <!-- <div class="right-content">
              <a href="#" class="download-invoice-btn top-bar-ringt-btn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M18.1599 6.29988L12.4899 0.899878C11.7599 0.799878 10.9399 0.749878 10.0399 0.749878C3.7499 0.749878 1.6499 3.06988 1.6499 9.99988C1.6499 16.9399 3.7499 19.2499 10.0399 19.2499C16.3399 19.2499 18.4399 16.9399 18.4399 9.99988C18.4399 8.57988 18.3499 7.34988 18.1599 6.29988Z"
                    fill="#E0E0E0" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M11.9343 0.832581V3.49358C11.9343 5.35158 13.4403 6.85658 15.2983 6.85658H18.2493"
                    fill="#E0E0E0" />
                  <path d="M11.9343 0.832581V3.49358C11.9343 5.35158 13.4403 6.85658 15.2983 6.85658H18.2493"
                    stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M9.6604 14.0172V7.9762" stroke="#828282" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.3147 11.6622L9.6597 14.0172L12.0047 11.6622"
                    fill="#E0E0E0" />
                  <path d="M7.3147 11.6622L9.6597 14.0172L12.0047 11.6622" stroke="#828282" stroke-width="1.5"
                    stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
              <span class="filter-filter-btn top-bar-ringt-btn">
                <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M14.3879 9.708C16.1039 9.708 17.4999 11.097 17.4999 12.804C17.4999 14.511 16.1039 15.9 14.3879 15.9C12.6709 15.9 11.2739 14.511 11.2739 12.804C11.2739 11.097 12.6709 9.708 14.3879 9.708ZM14.3879 11.208C13.4979 11.208 12.7739 11.924 12.7739 12.804C12.7739 13.685 13.4979 14.4 14.3879 14.4C15.2769 14.4 15.9999 13.685 15.9999 12.804C15.9999 11.924 15.2769 11.208 14.3879 11.208ZM7.0803 12.0928C7.4943 12.0928 7.8303 12.4288 7.8303 12.8428C7.8303 13.2568 7.4943 13.5928 7.0803 13.5928H0.7793C0.3653 13.5928 0.0293 13.2568 0.0293 12.8428C0.0293 12.4288 0.3653 12.0928 0.7793 12.0928H7.0803ZM3.113 0C4.83 0 6.226 1.39 6.226 3.097C6.226 4.804 4.83 6.192 3.113 6.192C1.397 6.192 0 4.804 0 3.097C0 1.39 1.397 0 3.113 0ZM3.113 1.5C2.224 1.5 1.5 2.216 1.5 3.097C1.5 3.977 2.224 4.692 3.113 4.692C4.003 4.692 4.726 3.977 4.726 3.097C4.726 2.216 4.003 1.5 3.113 1.5ZM16.1911 2.4004C16.6051 2.4004 16.9411 2.7364 16.9411 3.1504C16.9411 3.5644 16.6051 3.9004 16.1911 3.9004H9.8911C9.4771 3.9004 9.1411 3.5644 9.1411 3.1504C9.1411 2.7364 9.4771 2.4004 9.8911 2.4004H16.1911Z"
                    fill="#828282" />
                </svg>
              </span>
            </div> -->
          </div>
          <!-- topbar top content end -->
        </div>
      </div>

      <div class="row">
        <div class="col-lg-12 col-md-12">
          <!-- tab content area start -->
          <!--                    <div class="tab-content" id="myTabContent">-->

          <v-tabs-items v-model="tab">
            <v-tab-item>
              <div class="tab-pane">
                <new-order-table></new-order-table>
              </div>
            </v-tab-item>
            <v-tab-item>
              <div class="tab-pane">
                <successfull-orders></successfull-orders>
              </div>
            </v-tab-item>
            <v-tab-item>
              <div class="tab-pane">
                <cancel-order></cancel-order>
              </div>
            </v-tab-item>
          </v-tabs-items>

          <!--                    </div>-->
          <!-- tab content area end -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CancelOrder from '../table/CancelOrder.vue';
import NewOrderTable from "../table/NewOrderTable.vue";
import SuccessfullOrders from '../table/SuccessfullOrders.vue';
export default {
  components: { NewOrderTable, SuccessfullOrders, CancelOrder },
  name: "OrderCom",

  data() {
    return {
      tab: null,
      items: ["new orders", "successful orders", "cancel orders"],
    };
  },

  mounted() {},

  methods: {},
};
</script>
<style>
.v-tab {
  display: flex !important;
  flex-direction: row !important;
  justify-content: center !important;
  align-items: center !important;
  padding: 12px 36px !important;
  gap: 10px !important;
  height: 39px !important;
  background: #f2f2f2 !important;
  border-radius: 7px !important;
  margin-right: 10px;
  text-transform: capitalize !important;
}

.tab_active {
  display: flex !important;
  flex-direction: row !important;
  justify-content: center !important;
  align-items: center !important;
  padding: 12px 36px !important;
  background: #262626 !important;
  border-radius: 7px !important;
  /*font-family: 'Mulish' !important;*/
  font-style: normal !important;
  font-size: 16px !important;
  line-height: 100% !important;
  color: #ffffff !important;
}

.v-tabs-slider {
  background: transparent !important;
}

.theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active),
.theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-icon,
.theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-btn,
.theme--light.v-tabs > .v-tabs-bar .v-tab--disabled {
  color: #828282 !important;
}

.add-product .btn-common {
  color: #fff;
}
</style>