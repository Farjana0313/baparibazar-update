<template>
  <div class="container-scroller">
    <!-- sidebar area start -->
    <Sidebar/>
    <!-- sidebar area end -->

    <!-- main body area start -->
    <div class="container-fluid main-body">
      <!-- top bar area start -->
      <Topbar/>
      <!-- top bar area end -->

      <!-- main body content start -->
      <div class="main-body-content-area-wrapper">
        <product-list-com></product-list-com>
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
import ProductListCom from "@/components/pages_component/ProductListCom";

export default {
  name: "ProductList",
  components: {ProductListCom, Sidebar, Topbar, AllPopup}
}
</script>

<style scoped>

</style>