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
              <h3 class="page-title">settings / <span class="small">role</span></h3>
              <div class="date-and-time">
                <span class="date">Jun 21, 2021</span>
                <span class="time">5:32 PM</span>
              </div>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="right-content">
              <div class="search-form">
                <form>
                  <input type="text" class="form-control" placeholder="Search here">
                  <button type="submit" class="form-btn-icon">
                    <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M6.82592 0.333344C10.4059 0.333344 13.3179 3.24534 13.3179 6.82534C13.3179 8.51437 12.6697 10.0549 11.609 11.211L13.6962 13.2938C13.8915 13.4891 13.8922 13.8051 13.6969 14.0005C13.5995 14.0991 13.4709 14.1478 13.3429 14.1478C13.2155 14.1478 13.0875 14.0991 12.9895 14.0018L10.8772 11.8953C9.76597 12.7852 8.35704 13.318 6.82592 13.318C3.24592 13.318 0.333252 10.4053 0.333252 6.82534C0.333252 3.24534 3.24592 0.333344 6.82592 0.333344ZM6.82592 1.33334C3.79725 1.33334 1.33325 3.79668 1.33325 6.82534C1.33325 9.85401 3.79725 12.318 6.82592 12.318C9.85392 12.318 12.3179 9.85401 12.3179 6.82534C12.3179 3.79668 9.85392 1.33334 6.82592 1.33334Z"
                        fill="#BDBDBD" />
                    </svg>
                  </button>
                </form>
              </div>
              <plus-icon></plus-icon>
            </div>
          </div>
        </div>
      </div>
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
import PlusIcon from '@/components/utils/PlusIcon.vue';

export default {
  name: "Role",
  components: {RoleCom, AllPopup, Topbar, Sidebar,PlusIcon}
}
</script>
    PlusIcon

<style scoped>

</style>