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
        <role-com></role-com>
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
import RoleCom from "@/components/pages_component/RoleCom";

export default {
  name: "Role",
  components: {RoleCom, AllPopup, Topbar, Sidebar}
}
</script>

<style scoped>

</style>