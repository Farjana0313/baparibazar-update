<template>
  <div class="contact-list-area-wrapper">

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
                     aria-controls="one" aria-selected="true">Shop List</a>
                </li>
                <li class="nav-item" role="presentation">
                  <a class="nav-link" id="two-tab" data-toggle="tab" href="#two" role="tab" aria-controls="two"
                     aria-selected="false">Supplier List</a>
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
            <contact-list-table></contact-list-table>
          </div>

          <div class="tab-pane fade" id="two" role="tabpanel" aria-labelledby="two-tab">
            <contact-list-table></contact-list-table>
          </div>
        </div>
        <!-- tab content area end -->
      </div>
    </div>

  </div>
</template>

<script>
import ContactListTable from '../table/ContactListTable.vue'
export default {
  components: { ContactListTable },
  name: "ContactListCom"
}
</script>

<style>
.theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr>th:nth-child(2) {
    width: 85px;
  }
  .theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr>th:nth-child(3) {
    width: 200px;
  }
  .theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr>th:nth-child(4) {
    width: 300px;
  }
  .theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr>th:nth-child(5) {
    width: 150px;
  }
  .theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr>th:nth-child(6) {
    width: 180px;
  }
  .theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr>th:nth-child(7) {
    width: 150px;
  }
  .theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr>th:nth-child(8) {
    width: 150px;
    text-align: center !important;
  }
</style>