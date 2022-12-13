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
        <user-list-table></user-list-table>
        <!-- tab content area end -->
      </div>
    </div>
  </div>
</template>

<script>
import UserListTable from '../table/UserListTable.vue'
  export default {
  components: { UserListTable },
    name: "UserListCom"
  }
</script>

<style scoped>

</style>