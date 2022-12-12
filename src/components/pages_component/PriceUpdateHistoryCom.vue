<template>
  <div class="product-list-area-wrapper">

    <div class="row">
      <div class="col-lg-12">
        <!-- topbar top content start -->
        <div class="tab-top-content">
          <div class="left-content">
            <div class="tab-button">
              <!-- tab button area start -->
              <ul class="nav nav-tabs default-tab-button" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <a class="nav-link active" id="home-tab" data-toggle="tab" href="#one" role="tab"
                     aria-controls="one" aria-selected="true">চাল</a>
                </li>
                <li class="nav-item" role="presentation">
                  <a class="nav-link" id="two-tab" data-toggle="tab" href="#two" role="tab" aria-controls="two"
                     aria-selected="false">ডাল</a>
                </li>
                <li class="nav-item" role="presentation">
                  <a class="nav-link" id="three-tab" data-toggle="tab" href="#three" role="tab"
                     aria-controls="three" aria-selected="false">আলু</a>
                </li>
              </ul>
              <!-- tab button area end -->
            </div>
          </div>
        </div>
        <!-- topbar top content end -->
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12">
        <!-- tab content area start -->
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="one" role="tabpanel" aria-labelledby="one-tab">
            <product-update-history-table></product-update-history-table>
          </div>

          <div class="tab-pane fade" id="two" role="tabpanel" aria-labelledby="two-tab">
            <product-update-history-table></product-update-history-table>
          </div>

          <div class="tab-pane fade" id="three" role="tabpanel" aria-labelledby="three-tab">
            <product-update-history-table></product-update-history-table>
          </div>
        </div>
        <!-- tab content area end -->
      </div>
    </div>
  </div>
</template>

<script>
import ProductUpdateHistoryTable from '../table/ProductUpdateHistoryTable.vue'
export default {
  components: { ProductUpdateHistoryTable },
  name: "PriceUpdateHistoryCom"
}
</script>

<style>
.v-pagination__item {
    background: transparent;
    border-radius: 0 !important;
    font-size: 0.9rem !important;
    height: 25px;
    margin: 0.3rem;
    min-width: 27px !important;
    padding: 0 5px;
    text-decoration: none;
    transition: 0.3s cubic-bezier(0, 0, 0.2, 1);
    width: auto;
    box-shadow: none !important;
    border: 1px solid #ddd !important;
}
</style>