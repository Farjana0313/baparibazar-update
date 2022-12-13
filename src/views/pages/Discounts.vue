<template>
  <div class="container-scroller">
    <!-- sidebar area start -->
    <Sidebar/>
    <!-- sidebar area end -->

    <!-- main body area start -->
    <div class="container-fluid main-body">
      <!-- top bar area start -->
      <div class="topbar-area-wrapper">
        <div class="row">
          <div class="col-lg-4">
            <div class="left-content">
              <h3 class="page-title">settings / <span class="small">discounts</span></h3>
              <div class="date-and-time">
                <span class="date">Jun 21, 2021</span>
                <span class="time">5:32 PM</span>
              </div>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="right-content">
              <plus-icon></plus-icon>
            </div>
          </div>
        </div>
      </div>
      <!-- top bar area end -->

      <!-- main body content start -->
      <div class="main-body-content-area-wrapper">
        <discount-com></discount-com>
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
import Sidebar from "@/components/nav_top/Sidebar";
import Topbar from "@/components/nav_top/Topbar";
import AllPopup from "@/components/all_popup/AllPopup";
import DiscountCom from "@/components/pages_component/DiscountCom";
import PlusIcon from '@/components/utils/PlusIcon.vue';
export default {
  name: "Discounts",
  components: {DiscountCom, AllPopup, Topbar, Sidebar,PlusIcon}
}
</script>

<style scoped>

</style>