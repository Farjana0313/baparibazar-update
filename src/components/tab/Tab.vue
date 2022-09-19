<template>
  <div class="row">
    <div class="col-lg-12">
      <!-- tab content area start -->
      <div class="tab-content">
        <div class="tab-pane fade show active" v-show="title==selectedTitle">
          <slot/>
        </div>
      </div>
      <!-- tab content area end -->
    </div>
  </div>
</template>

<script>
import {inject} from "vue";

export default {
  name: "Tab",
  props: ['title'],
  setup() {
    const selectedTitle = inject("selectedTitle");
    return {
      selectedTitle
    }
  }
}
</script>

<style scoped>

</style>