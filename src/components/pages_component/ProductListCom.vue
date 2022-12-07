<template>
  <div class="product-list-area-wrapper">
    <div class="row">
      <div class="col-lg-12">
        <!-- topbar top content start -->
        <div class="tab-top-content">
          <div class="left-content">
            <div class="tab-button">
              <!-- tab button area start -->
              <ul
                class="nav nav-tabs default-tab-button"
                id="myTab"
                role="tablist"
              >
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#one"
                    role="tab"
                    aria-controls="one"
                    aria-selected="true"
                    >চাল</a
                  >
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link"
                    id="two-tab"
                    data-toggle="tab"
                    href="#two"
                    role="tab"
                    aria-controls="two"
                    aria-selected="false"
                    >ডাল</a
                  >
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link"
                    id="three-tab"
                    data-toggle="tab"
                    href="#three"
                    role="tab"
                    aria-controls="three"
                    aria-selected="false"
                    >আলু</a
                  >
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
          <div
            class="tab-pane fade show active"
            id="one"
            role="tabpanel"
            aria-labelledby="one-tab"
          >
      <product-list-rice-table></product-list-rice-table>
          </div>

          <div
            class="tab-pane fade"
            id="two"
            role="tabpanel"
            aria-labelledby="two-tab"
          >
          <product-list-rice-table></product-list-rice-table>
          </div>
          <div
            class="tab-pane fade"
            id="three"
            role="tabpanel"
            aria-labelledby="three-tab"
          >
          <product-list-rice-table></product-list-rice-table>
          </div>
        </div>
        <!-- tab content area end -->
      </div>
    </div>
  </div>
</template>

<script>
import ProductListRiceTable from '../table/ProductListRiceTable.vue';
export default {
  components: { ProductListRiceTable },
  name: "ProductListCom",
};
</script>

<style>
</style>