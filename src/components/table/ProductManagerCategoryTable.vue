<template>
  <div>
    <div class="short-icon-position">
      <div class="row">
        <div class="col-lg-4">
          <div class="search_input">
            <div class="search-form">
              <form>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search here"
                  v-model="search"
                />
                <button type="submit" class="form-btn-icon">
                  <svg
                    width="14"
                    height="15"
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.82592 0.333344C10.4059 0.333344 13.3179 3.24534 13.3179 6.82534C13.3179 8.51437 12.6697 10.0549 11.609 11.211L13.6962 13.2938C13.8915 13.4891 13.8922 13.8051 13.6969 14.0005C13.5995 14.0991 13.4709 14.1478 13.3429 14.1478C13.2155 14.1478 13.0875 14.0991 12.9895 14.0018L10.8772 11.8953C9.76597 12.7852 8.35704 13.318 6.82592 13.318C3.24592 13.318 0.333252 10.4053 0.333252 6.82534C0.333252 3.24534 3.24592 0.333344 6.82592 0.333344ZM6.82592 1.33334C3.79725 1.33334 1.33325 3.79668 1.33325 6.82534C1.33325 9.85401 3.79725 12.318 6.82592 12.318C9.85392 12.318 12.3179 9.85401 12.3179 6.82534C12.3179 3.79668 9.85392 1.33334 6.82592 1.33334Z"
                      fill="#BDBDBD"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div class="col-lg-2"></div>
        <div class="col-lg-6">
          <div class="text-end">
            <span class="short-icon mr-4 mb-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.1599 6.29988L12.4899 0.899878C11.7599 0.799878 10.9399 0.749878 10.0399 0.749878C3.7499 0.749878 1.6499 3.06988 1.6499 9.99988C1.6499 16.9399 3.7499 19.2499 10.0399 19.2499C16.3399 19.2499 18.4399 16.9399 18.4399 9.99988C18.4399 8.57988 18.3499 7.34988 18.1599 6.29988Z"
                  fill="#E0E0E0"
                  stroke="#828282"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.9343 0.832581V3.49358C11.9343 5.35158 13.4403 6.85658 15.2983 6.85658H18.2493"
                  fill="#E0E0E0"
                />
                <path
                  d="M11.9343 0.832581V3.49358C11.9343 5.35158 13.4403 6.85658 15.2983 6.85658H18.2493"
                  stroke="#828282"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.6604 14.0172V7.9762"
                  stroke="#828282"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.3147 11.6622L9.6597 14.0172L12.0047 11.6622"
                  fill="#E0E0E0"
                />
                <path
                  d="M7.3147 11.6622L9.6597 14.0172L12.0047 11.6622"
                  stroke="#828282"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <button class="short-icon" @click="toggleOrder">
              <svg
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.3879 9.708C16.1039 9.708 17.4999 11.097 17.4999 12.804C17.4999 14.511 16.1039 15.9 14.3879 15.9C12.6709 15.9 11.2739 14.511 11.2739 12.804C11.2739 11.097 12.6709 9.708 14.3879 9.708ZM14.3879 11.208C13.4979 11.208 12.7739 11.924 12.7739 12.804C12.7739 13.685 13.4979 14.4 14.3879 14.4C15.2769 14.4 15.9999 13.685 15.9999 12.804C15.9999 11.924 15.2769 11.208 14.3879 11.208ZM7.0803 12.0928C7.4943 12.0928 7.8303 12.4288 7.8303 12.8428C7.8303 13.2568 7.4943 13.5928 7.0803 13.5928H0.7793C0.3653 13.5928 0.0293 13.2568 0.0293 12.8428C0.0293 12.4288 0.3653 12.0928 0.7793 12.0928H7.0803ZM3.113 0C4.83 0 6.226 1.39 6.226 3.097C6.226 4.804 4.83 6.192 3.113 6.192C1.397 6.192 0 4.804 0 3.097C0 1.39 1.397 0 3.113 0ZM3.113 1.5C2.224 1.5 1.5 2.216 1.5 3.097C1.5 3.977 2.224 4.692 3.113 4.692C4.003 4.692 4.726 3.977 4.726 3.097C4.726 2.216 4.003 1.5 3.113 1.5ZM16.1911 2.4004C16.6051 2.4004 16.9411 2.7364 16.9411 3.1504C16.9411 3.5644 16.6051 3.9004 16.1911 3.9004H9.8911C9.4771 3.9004 9.1411 3.5644 9.1411 3.1504C9.1411 2.7364 9.4771 2.4004 9.8911 2.4004H16.1911Z"
                  fill="#828282"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="table-area-wrapper order-table-content">
      <v-data-table
        v-model="selected"
        :headers="headers"
        :items="desserts"
        :page.sync="page"
        :single-select="singleSelect"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        item-key="name"
        show-select
        :search="search"
        class="elevation-1"
        hide-default-footer
      >
        <template v-slot:footer> </template>
        <template v-slot:item.categories>
          <td class="name">
            <span class="total-wrap">
              <span class="img-box">
                <img src="assets/images/product-category/chal/01.png" alt="" />
              </span>
              <span class="product-name">চাল</span>
            </span>
          </td>
        </template>
        <template v-slot:item.list_sub_categories>
            <td class="listed-sub-categories">২৪</td>
        </template>
        <template v-slot:item.productListed>
            <td class="product-listed">
              <span class="price-only">২৪</span>
            </td>
        </template>
        <template v-slot:item.last_update>
            <td class="date-and-time">
              <span class="last-update">১৮/১০/২০২১</span>
            </td>
        </template>
        <template v-slot:item.action>
          
            <td class="action">
              <span class="checkboxes-and-radios">
                <input
                  type="checkbox"
                  name="checkbox-cats[]"
                  id="product-catg-1"
                  value="1"
                  checked=""
                />
                <label for="product-catg-1"></label>
              </span>
              <span class="single-action-item">
                <a
                  href="#"
                  class="action-btn"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.615479 6.69234C0.615479 2.42342 2.03886 1.00003 6.30779 1.00003C10.5767 1.00003 12.0001 2.42342 12.0001 6.69234C12.0001 10.9613 10.5767 12.3846 6.30779 12.3846C2.03886 12.3846 0.615479 10.9613 0.615479 6.69234Z"
                      stroke="#828282"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.76538 6.69229H8.77092"
                      stroke="#828282"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.30444 6.69229H6.30998"
                      stroke="#828282"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.84351 6.69229H3.84904"
                      stroke="#828282"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
                <div class="dropdown-menu dropdown-menu-right control">
                  <div class="modal-control-02">
                    <div class="modal-content">
                      <!-- modal content start -->
                      <div class="mini-modal-style-02">
                        <ul class="list">
                          <li
                            class="list-item viewbtn"
                            onclick="addCatgDetViewPopOpn()"
                          >
                            <span class="icon">
                              <svg
                                width="12"
                                height="10"
                                viewBox="0 0 12 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M7.58217 5.02607C7.58217 5.89907 6.87417 6.60707 6.00117 6.60707C5.12817 6.60707 4.42017 5.89907 4.42017 5.02607C4.42017 4.15257 5.12817 3.44507 6.00117 3.44507C6.87417 3.44507 7.58217 4.15257 7.58217 5.02607Z"
                                  stroke="#828282"
                                  stroke-width="0.8"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M1.37524 5.02606C1.37524 6.66606 3.44624 8.67706 6.00124 8.67706C8.55575 8.67706 10.6272 6.66756 10.6272 5.02606C10.6272 3.38456 8.55575 1.37506 6.00124 1.37506C3.44624 1.37506 1.37524 3.38606 1.37524 5.02606Z"
                                  stroke="#828282"
                                  stroke-width="0.8"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </span>
                            <span class="text"> View Details </span>
                          </li>
                          <li
                            class="list-item editbtn"
                            onclick="addCatgDetViewPopOpn()"
                          >
                            <span class="icon">
                              <svg
                                width="10"
                                height="9"
                                viewBox="0 0 10 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M4.8124 0.0146264C4.97876 0.0146264 5.11377 0.149639 5.11377 0.315994C5.11377 0.482349 4.97876 0.617362 4.8124 0.617362H3.30998C2.27167 0.617362 1.60103 1.32859 1.60103 2.42918V5.76995C1.60103 6.87054 2.27167 7.58177 3.30998 7.58177H6.85567C7.89399 7.58177 8.56503 6.87054 8.56503 5.76995V4.1514C8.56503 3.98505 8.70005 3.85003 8.8664 3.85003C9.03276 3.85003 9.16777 3.98505 9.16777 4.1514V5.76995C9.16777 7.2141 8.23835 8.18451 6.85567 8.18451H3.30998C1.92731 8.18451 0.998291 7.2141 0.998291 5.76995V2.42918C0.998291 0.985031 1.92731 0.0146264 3.30998 0.0146264H4.8124ZM8.31213 0.367669L8.80114 0.856688C9.03943 1.09457 9.17042 1.4108 9.17002 1.74753C9.17002 2.08426 9.03902 2.40009 8.80114 2.63757L5.78385 5.65486C5.56245 5.87627 5.26751 5.99842 4.95408 5.99842H3.44885C3.36768 5.99842 3.28973 5.96547 3.23307 5.90721C3.17642 5.84935 3.14548 5.77099 3.14749 5.68942L3.18526 4.17093C3.19289 3.86876 3.31464 3.58467 3.52841 3.3705H3.52882L6.53164 0.367669C7.02267 -0.122556 7.8211 -0.122556 8.31213 0.367669ZM6.28428 1.46706L3.95475 3.79683C3.85068 3.9009 3.79161 4.03913 3.78799 4.1858L3.75786 5.39569H4.95408C5.10678 5.39569 5.24983 5.33662 5.35792 5.22853L7.70151 2.88429L6.28428 1.46706ZM6.95758 0.794004L6.71021 1.04072L8.12745 2.45836L8.37521 2.21124C8.49897 2.08747 8.56728 1.92273 8.56728 1.74753C8.56728 1.57193 8.49897 1.40678 8.37521 1.28302L7.88619 0.794004C7.63023 0.538846 7.21394 0.538846 6.95758 0.794004Z"
                                  fill="#828282"
                                />
                              </svg>
                            </span>
                            <span class="text"> Edit </span>
                          </li>
                        </ul>
                      </div>
                      <!-- modal content end -->
                    </div>
                  </div>
                </div>
              </span>
            </td>
        </template>
        <template v-slot:footer>
          <div class="page-bottom-content">
            <div class="left-content">
              <span class="page-count">1 of 23</span>
            </div>
            <div class="right-content">
              <v-pagination v-model="page" :length="pageCount"></v-pagination>

              <!-- <a href="#" class="page-pagination disable" >
                  <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M3.90811 7.33334C3.73344 7.33334 3.55944 7.26534 3.42878 7.13L0.853441 4.46334C0.601441 4.20134 0.604775 3.786 0.862108 3.52867L3.52878 0.862004C3.78878 0.601337 4.21078 0.601337 4.47144 0.862004C4.73144 1.12267 4.73144 1.544 4.47144 1.80467L2.26811 4.008L4.38744 6.20334C4.64344 6.46867 4.63611 6.89067 4.37144 7.146C4.24144 7.27134 4.07478 7.33334 3.90811 7.33334Z"
                      fill="#E0E0E0" />
                  </svg>
                </a>
                <a href="#" class="page-pagination">
                  <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M1.00009 7.33333C0.829419 7.33333 0.658752 7.26799 0.528752 7.13799C0.268085 6.87733 0.268085 6.45599 0.528752 6.19533L2.73209 3.99199L0.612085 1.79666C0.356752 1.53133 0.364085 1.10933 0.628752 0.853993C0.894085 0.59866 1.31609 0.605993 1.57142 0.869993L4.14609 3.53666C4.39875 3.79866 4.39542 4.21399 4.13809 4.47133L1.47142 7.13799C1.34142 7.26799 1.17075 7.33333 1.00009 7.33333Z"
                      fill="#E0E0E0" />
                  </svg>
                </a> -->
            </div>
          </div>
        </template>
      </v-data-table>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "NewOrderTable",

  data() {
    return {
      page: 1,
      pageCount: 0,
      search: "",
      sortBy: "name",
      sortDesc: false,
      singleSelect: false,
      selected: [],
      headers: [
        {
          text: "#",
          align: "start",
          sortable: false,
          value: "name",
        },
        {
          text: "Categories",
          value: "categories",
        },
        {
          text: "Listed Sub categories",
          value: "list_sub_categories",
        },
        {
          text: "Product Listed",
          value: "productListed",
        },
        {
          text: "Last update",
          value: "last_update",
        },
        {
          text: "Action",
          value: "action",
        },
      ],
      desserts: [
        {
          name: "১",
          categories: "বপ১২৫৬৫৯৮৪৩",
          list_sub_categories: `	১৮/১০/২০২১
                          ৫ মিনিট আগে`,
          productListed: `মের্সাস হালিমা স্টোর
  আচরি মার্কেট , সড়ক ১২, সেক্টর ৩, উত্তরা, ঢাকা
  ০১৫৬ ৯৩ ৬৯ ৫৩`,
          last_update: "উত্তরা",
        },
        {
          name: "২",
          categories: "বপ১২৫৬৫৯৮৪৩",
          list_sub_categories: `	১৮/১০/২০২১
                          ৫ মিনিট আগে`,
          productListed: `মের্সাস হালিমা স্টোর
  আচরি মার্কেট , সড়ক ১২, সেক্টর ৩, উত্তরা, ঢাকা
  ০১৫৬ ৯৩ ৬৯ ৫৩`,
          last_update: "উত্তরা",
        },
      ],
    };
  },

  mounted() {},

  methods: {
    toggleOrder() {
      this.sortDesc = !this.sortDesc;
    },
    getColor(customer) {
      if (customer > 400) return "red";
      else if (customer > 200) return "orange";
      else return "green";
    },
  },
};
</script>
  
  <style>
.theme--light.v-data-table > .v-data-table__wrapper > table > thead > tr > th {
  /* color: rgba(0, 0, 0, 0.6); */
  font-size: 13px;
  font-weight: 600;
  color: #262626;
  text-transform: initial;
  /* padding: 15px 0; */
}

.theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr>th:nth-child(2) {
    width: 85px;
  }
  .theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr>th:nth-child(3) {
    width: 150px;
    text-align:center !important;
  }
  .theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr>th:nth-child(4) {
    width: 200px;
    text-align:center !important;
  }
  .theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr>th:nth-child(5) {
    width: 150px;
    text-align:center !important;
  }
  .theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr>th:nth-child(6) {
    width: 180px;
    text-align:center !important;
  }
  .theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr>th:nth-child(7) {
    width: 180px;
    text-align:center !important;
  }

.v-data-table > .v-data-table__wrapper > table > tbody > tr > td,
.v-data-table > .v-data-table__wrapper > table > tbody > tr > th,
.v-data-table > .v-data-table__wrapper > table > thead > tr > td,
.v-data-table > .v-data-table__wrapper > table > thead > tr > th,
.v-data-table > .v-data-table__wrapper > table > tfoot > tr > td,
.v-data-table > .v-data-table__wrapper > table > tfoot > tr > th {
  padding: 10px 16px;
  text-align: center;
}
.short-icon {
  width: 41px;
  height: 41px;
  border-radius: 14px;
  border: 1px solid #ddd;
  display: inline-block;
  text-align: center;
  line-height: 38px;
}

download-invoice-btn {
  margin-right: 12px;
}

button:focus {
  outline: none;
}

.form-control:focus {
  color: #495057;
  background-color: transparent;
  border-color: transparent;
  outline: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.search_input form {
  display: flex;
  border: 1px solid #dfdddd;
  height: 45px;
  border-radius: 5px;
}

.search_input form input {
  border: none;
  border-radius: 0;
  background-color: transparent;
  margin-bottom: 0;
  width: 300px;
}

.search_input button {
  border: none;
  height: 45px;
  width: 50px;
  border-radius: 0;
  background-color: transparent;
}
/* Pagination */
.v-pagination__navigation {
  line-height: 21px;
  display: inline-block;
  width: 27px;
  border: 1px solid #ddd;
  height: 25px;
  text-align: center;
  margin-left: 10px;
  box-shadow: none;
  border-radius: 0;
}
.v-pagination__navigation .v-icon {
  font-size: 15px;
}
.v-pagination__navigation .v-icon:hover {
  color: #4f4f4f;
}
.v-pagination > li {
  margin-right: -10px;
}
</style>