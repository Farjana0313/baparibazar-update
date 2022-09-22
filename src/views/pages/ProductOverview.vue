<template>
  <div class="container-scroller">
    <!-- sidebar area start -->
    <Sidebar/>
    <!-- sidebar area end -->

    <!-- main body area start -->
    <div class="container-fluid main-body">
      <!-- top bar area start -->
      <div class="topbar-area-wrapper">
        <product-overview-topbar></product-overview-topbar>
        <div class="row">
          <div class="col-lg-12">
            <overview-card></overview-card>
          </div>
        </div>
      </div>
      <!-- top bar area end -->

      <!-- main body content start -->
      <div class="main-body-content-area-wrapper">
        <product-overview-com></product-overview-com>
      </div>
      <!-- main body content end -->

      <!-- all big popup wrapper start -->
      <AllPopup/>
      <!-- all big popup wrapper end -->

    </div>
    <!-- main body area start -->
  </div>
</template>

<script>
import AllPopup from "@/components/all_popup/AllPopup";
import Topbar from "@/components/nav_top/Topbar";
import Sidebar from "@/components/nav_top/Sidebar";
import ProductOverviewCom from "@/components/pages_component/ProductOverviewCom";
import OverviewCard from "@/components/pages_component/OverviewCard";
import ProductOverviewTopbar from "@/components/nav_top/ProductOverviewTopbar";

export default {
  name: "ProductOverview",
  components: {ProductOverviewTopbar, OverviewCard, ProductOverviewCom, Sidebar, Topbar, AllPopup}
}
</script>

<style scoped>

</style>