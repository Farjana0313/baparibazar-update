<template>
  <div class="row">
    <div class="col-lg-4">
      <div class="left-content">
        <h3 class="page-title">products</h3>
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
</template>

<script>
import PlusIcon from '../utils/PlusIcon.vue'
export default {
  components: { PlusIcon },
  name: "ProductOverviewTopbar"
}
</script>

<style scoped>

</style>