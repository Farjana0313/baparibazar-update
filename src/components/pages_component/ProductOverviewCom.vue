<template>
  <div class="product-area-wrapper">

    <div class="row">
      <div class="col-lg-12">
        <!-- topbar top content start -->
        <div class="tab-top-content">
          <div class="left-content">
            <span class="title">List</span>
          </div>
        </div>
        <!-- topbar top content end -->
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12">
        <!-- product overview content start -->
        <product-overview-table></product-overview-table>
        <!-- product overview content end -->
      </div>
    </div>
  </div>
</template>

<script>
import ProductOverviewTable from '../table/ProductOverviewTable.vue'
export default {
  components: { ProductOverviewTable },
  name: "ProductOverviewCom"
}
</script>

<style scoped>

</style>