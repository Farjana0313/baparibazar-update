<template>
  <div class="settings-area-wrapper">

    <div class="row">
      <div class="col-lg-12">
        <!-- topbar top content start -->
        <div class="tab-top-content">
          <div class="left-content">
          </div>
        </div>
        <!-- topbar top content end -->
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12">
        <!-- tab content area start -->
        <service-charge-table></service-charge-table>
        <!-- tab content area end -->
      </div>
    </div>
  </div>
</template>

<script>
import ServiceChargeTable from '../table/ServiceChargeTable.vue'
export default {
  components: { ServiceChargeTable },
  name: "ServiceChanesCom"
}
</script>

<style scoped>

</style>