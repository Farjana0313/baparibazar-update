<template>
  <div class="sales-list-area-wrapper">

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
                     aria-controls="one" aria-selected="true">COD Sales</a>
                </li>
                <li class="nav-item" role="presentation">
                  <a class="nav-link" id="two-tab" data-toggle="tab" href="#two" role="tab" aria-controls="two"
                     aria-selected="false">Credit Sales</a>
                </li>
              </ul>
              <!-- tab button area end -->
            </div>
          </div>
          <div class="right-content">
            <a href="#" class="download-invoice-btn top-bar-ringt-btn">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M18.1599 6.29988L12.4899 0.899878C11.7599 0.799878 10.9399 0.749878 10.0399 0.749878C3.7499 0.749878 1.6499 3.06988 1.6499 9.99988C1.6499 16.9399 3.7499 19.2499 10.0399 19.2499C16.3399 19.2499 18.4399 16.9399 18.4399 9.99988C18.4399 8.57988 18.3499 7.34988 18.1599 6.29988Z"
                      fill="#E0E0E0" stroke="#828282" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M11.9343 0.832581V3.49358C11.9343 5.35158 13.4403 6.85658 15.2983 6.85658H18.2493"
                      fill="#E0E0E0" />
                <path d="M11.9343 0.832581V3.49358C11.9343 5.35158 13.4403 6.85658 15.2983 6.85658H18.2493"
                      stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9.6604 14.0172V7.9762" stroke="#828282" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.3147 11.6622L9.6597 14.0172L12.0047 11.6622"
                      fill="#E0E0E0" />
                <path d="M7.3147 11.6622L9.6597 14.0172L12.0047 11.6622" stroke="#828282" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>
            <a href="#" class="filter-filter-btn top-bar-ringt-btn">
              <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M14.3879 9.708C16.1039 9.708 17.4999 11.097 17.4999 12.804C17.4999 14.511 16.1039 15.9 14.3879 15.9C12.6709 15.9 11.2739 14.511 11.2739 12.804C11.2739 11.097 12.6709 9.708 14.3879 9.708ZM14.3879 11.208C13.4979 11.208 12.7739 11.924 12.7739 12.804C12.7739 13.685 13.4979 14.4 14.3879 14.4C15.2769 14.4 15.9999 13.685 15.9999 12.804C15.9999 11.924 15.2769 11.208 14.3879 11.208ZM7.0803 12.0928C7.4943 12.0928 7.8303 12.4288 7.8303 12.8428C7.8303 13.2568 7.4943 13.5928 7.0803 13.5928H0.7793C0.3653 13.5928 0.0293 13.2568 0.0293 12.8428C0.0293 12.4288 0.3653 12.0928 0.7793 12.0928H7.0803ZM3.113 0C4.83 0 6.226 1.39 6.226 3.097C6.226 4.804 4.83 6.192 3.113 6.192C1.397 6.192 0 4.804 0 3.097C0 1.39 1.397 0 3.113 0ZM3.113 1.5C2.224 1.5 1.5 2.216 1.5 3.097C1.5 3.977 2.224 4.692 3.113 4.692C4.003 4.692 4.726 3.977 4.726 3.097C4.726 2.216 4.003 1.5 3.113 1.5ZM16.1911 2.4004C16.6051 2.4004 16.9411 2.7364 16.9411 3.1504C16.9411 3.5644 16.6051 3.9004 16.1911 3.9004H9.8911C9.4771 3.9004 9.1411 3.5644 9.1411 3.1504C9.1411 2.7364 9.4771 2.4004 9.8911 2.4004H16.1911Z"
                      fill="#828282" />
              </svg>
            </a>
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
            <div class="table-area-wrapper sales-list-table-content">
              <table>
                <thead>
                <tr>
                  <th class="sl-no">
                    <form action="/action_page.php">
                      <label for="">
                        <input type="checkbox" id="" name="" value="">
                        <span class="custom-checkbox"></span>
                      </label>
                    </form>
                    <span class="no-only">#</span>
                  </th>
                  <th class="customer">
                    Customer
                  </th>
                  <th class="order-id">
                    Order id
                  </th>
                  <th class="item">
                    No. of Items
                  </th>
                  <th class="amount">
                    Selling Price
                  </th>
                  <th class="amount">
                    Buying Price
                  </th>
                  <th class="status">
                    Payment Mood
                  </th>
                  <th class="status">
                    Payment
                  </th>
                  <th class="action">
                    Action
                  </th>
                </tr>
                </thead>

                <tbody>
                <tr class="sales-list-item">
                  <td class="sl-no">
                    <form action="/action_page.php">
                      <input type="checkbox" id="" name="" value="">
                    </form>
                    <span class="no-only">১</span>
                  </td>
                  <td class="customer">
                    <span class="cus-name">মের্সাস হালিমা স্টোর</span>
                    <span class="address font-small">আচরি মার্কেট , সড়ক ১২, সেক্টর ৩, উত্তরা, ঢাকা </span>
                    <span class="mob-no font-small">০১৫৬ ৯৩ ৬৯ ৫৩</span>
                  </td>
                  <td class="order-id">
                    <span class="order-id-only">বপ১২৫৬৫৯৮৪৩</span>
                    <span class="date-only">১৮/১০/২০২১</span>
                  </td>
                  <td class="item">
                    <span class="item-only">১২</span>
                  </td>
                  <td class="amount">
                    <span class="amount-only">১২,৪৮৯.০০</span>
                  </td>
                  <td class="amount">
                    <span class="amount-only">১২,৪৮৯.০০</span>
                  </td>
                  <td class="status">
                    <span class="status-btn cod">CDO</span>
                  </td>
                  <td class="status">
                    <span class="status-btn due">due</span>
                  </td>
                  <td class="action">
                            <span class="single-action-item">
                              <a href="#" class="action-btn" data-toggle="dropdown" aria-expanded="false">
                                <svg width="14" height="14" viewBox="0 0 13 13" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M0.615479 6.69234C0.615479 2.42342 2.03886 1.00003 6.30779 1.00003C10.5767 1.00003 12.0001 2.42342 12.0001 6.69234C12.0001 10.9613 10.5767 12.3846 6.30779 12.3846C2.03886 12.3846 0.615479 10.9613 0.615479 6.69234Z"
                                        stroke="#828282" stroke-linecap="round" stroke-linejoin="round" />
                                  <path d="M8.76538 6.69229H8.77092" stroke="#828282" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                  <path d="M6.30444 6.69229H6.30998" stroke="#828282" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                  <path d="M3.84351 6.69229H3.84904" stroke="#828282" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                              </a>
                              <div class="dropdown-menu dropdown-menu-right control">
                                <div class="modal-control-02">
                                  <div class="modal-content">
                                    <!-- modal content start -->
                                    <div class="mini-modal-style-02">
                                      <ul class="list">
                                        <li class="list-item">
                                          <span class="icon">
                                            <svg width="12" height="10" viewBox="0 0 12 10" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                              <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M7.58217 5.02607C7.58217 5.89907 6.87417 6.60707 6.00117 6.60707C5.12817 6.60707 4.42017 5.89907 4.42017 5.02607C4.42017 4.15257 5.12817 3.44507 6.00117 3.44507C6.87417 3.44507 7.58217 4.15257 7.58217 5.02607Z"
                                                    stroke="#828282" stroke-width="0.8" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                              <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M1.37524 5.02606C1.37524 6.66606 3.44624 8.67706 6.00124 8.67706C8.55575 8.67706 10.6272 6.66756 10.6272 5.02606C10.6272 3.38456 8.55575 1.37506 6.00124 1.37506C3.44624 1.37506 1.37524 3.38606 1.37524 5.02606Z"
                                                    stroke="#828282" stroke-width="0.8" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                          </span>
                                          <span class="text" onclick="orderPopOpn()">
                                            View Details
                                          </span>
                                        </li>
                                        <li class="list-item">
                                          <span class="icon">
                                            <svg width="10" height="9" viewBox="0 0 10 9" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                              <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M4.8124 0.0146264C4.97876 0.0146264 5.11377 0.149639 5.11377 0.315994C5.11377 0.482349 4.97876 0.617362 4.8124 0.617362H3.30998C2.27167 0.617362 1.60103 1.32859 1.60103 2.42918V5.76995C1.60103 6.87054 2.27167 7.58177 3.30998 7.58177H6.85567C7.89399 7.58177 8.56503 6.87054 8.56503 5.76995V4.1514C8.56503 3.98505 8.70005 3.85003 8.8664 3.85003C9.03276 3.85003 9.16777 3.98505 9.16777 4.1514V5.76995C9.16777 7.2141 8.23835 8.18451 6.85567 8.18451H3.30998C1.92731 8.18451 0.998291 7.2141 0.998291 5.76995V2.42918C0.998291 0.985031 1.92731 0.0146264 3.30998 0.0146264H4.8124ZM8.31213 0.367669L8.80114 0.856688C9.03943 1.09457 9.17042 1.4108 9.17002 1.74753C9.17002 2.08426 9.03902 2.40009 8.80114 2.63757L5.78385 5.65486C5.56245 5.87627 5.26751 5.99842 4.95408 5.99842H3.44885C3.36768 5.99842 3.28973 5.96547 3.23307 5.90721C3.17642 5.84935 3.14548 5.77099 3.14749 5.68942L3.18526 4.17093C3.19289 3.86876 3.31464 3.58467 3.52841 3.3705H3.52882L6.53164 0.367669C7.02267 -0.122556 7.8211 -0.122556 8.31213 0.367669ZM6.28428 1.46706L3.95475 3.79683C3.85068 3.9009 3.79161 4.03913 3.78799 4.1858L3.75786 5.39569H4.95408C5.10678 5.39569 5.24983 5.33662 5.35792 5.22853L7.70151 2.88429L6.28428 1.46706ZM6.95758 0.794004L6.71021 1.04072L8.12745 2.45836L8.37521 2.21124C8.49897 2.08747 8.56728 1.92273 8.56728 1.74753C8.56728 1.57193 8.49897 1.40678 8.37521 1.28302L7.88619 0.794004C7.63023 0.538846 7.21394 0.538846 6.95758 0.794004Z"
                                                    fill="#828282" />
                                            </svg>
                                          </span>
                                          <span class="text">
                                            Order Edit
                                          </span>
                                        </li>
                                        <li class="list-item">
                                          <span class="icon">
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                              <path d="M4.22021 6.00004L5.40722 7.18654L7.78022 4.81354"
                                                    stroke="#828282" stroke-width="0.8" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                              <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M1.375 6.00006C1.375 9.46856 2.5315 10.6251 6 10.6251C9.4685 10.6251 10.625 9.46856 10.625 6.00006C10.625 2.53156 9.4685 1.37506 6 1.37506C2.5315 1.37506 1.375 2.53156 1.375 6.00006Z"
                                                    stroke="#828282" stroke-width="0.8" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                          </span>
                                          <span class="text">
                                            Mark as Completed
                                          </span>
                                        </li>
                                      </ul>

                                    </div>
                                    <!-- modal content end -->
                                  </div>
                                </div>
                              </div>
                            </span>
                  </td>
                </tr>
                <tr class="sales-list-item">
                  <td class="sl-no">
                    <form action="/action_page.php">
                      <input type="checkbox" id="" name="" value="">
                    </form>
                    <span class="no-only">১</span>
                  </td>
                  <td class="customer">
                    <span class="cus-name">মের্সাস হালিমা স্টোর</span>
                    <span class="address font-small">আচরি মার্কেট , সড়ক ১২, সেক্টর ৩, উত্তরা, ঢাকা </span>
                    <span class="mob-no font-small">০১৫৬ ৯৩ ৬৯ ৫৩</span>
                  </td>
                  <td class="order-id">
                    <span class="order-id-only">বপ১২৫৬৫৯৮৪৩</span>
                    <span class="date-only">১৮/১০/২০২১</span>
                  </td>
                  <td class="item">
                    <span class="item-only">১২</span>
                  </td>
                  <td class="amount">
                    <span class="amount-only">১২,৪৮৯.০০</span>
                  </td>
                  <td class="amount">
                    <span class="amount-only">১২,৪৮৯.০০</span>
                  </td>
                  <td class="status">
                    <span class="status-btn cod">CDO</span>
                  </td>
                  <td class="status">
                    <span class="status-btn paid-green">paid</span>
                  </td>
                  <td class="action">
                            <span class="single-action-item">
                              <a href="#" class="action-btn" data-toggle="dropdown" aria-expanded="false">
                                <svg width="14" height="14" viewBox="0 0 13 13" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M0.615479 6.69234C0.615479 2.42342 2.03886 1.00003 6.30779 1.00003C10.5767 1.00003 12.0001 2.42342 12.0001 6.69234C12.0001 10.9613 10.5767 12.3846 6.30779 12.3846C2.03886 12.3846 0.615479 10.9613 0.615479 6.69234Z"
                                        stroke="#828282" stroke-linecap="round" stroke-linejoin="round" />
                                  <path d="M8.76538 6.69229H8.77092" stroke="#828282" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                  <path d="M6.30444 6.69229H6.30998" stroke="#828282" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                  <path d="M3.84351 6.69229H3.84904" stroke="#828282" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                              </a>
                              <div class="dropdown-menu dropdown-menu-right control">
                                <div class="modal-control-02">
                                  <div class="modal-content">
                                    <!-- modal content start -->
                                    <div class="mini-modal-style-02">
                                      <ul class="list">
                                        <li class="list-item">
                                          <span class="icon">
                                            <svg width="12" height="10" viewBox="0 0 12 10" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                              <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M7.58217 5.02607C7.58217 5.89907 6.87417 6.60707 6.00117 6.60707C5.12817 6.60707 4.42017 5.89907 4.42017 5.02607C4.42017 4.15257 5.12817 3.44507 6.00117 3.44507C6.87417 3.44507 7.58217 4.15257 7.58217 5.02607Z"
                                                    stroke="#828282" stroke-width="0.8" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                              <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M1.37524 5.02606C1.37524 6.66606 3.44624 8.67706 6.00124 8.67706C8.55575 8.67706 10.6272 6.66756 10.6272 5.02606C10.6272 3.38456 8.55575 1.37506 6.00124 1.37506C3.44624 1.37506 1.37524 3.38606 1.37524 5.02606Z"
                                                    stroke="#828282" stroke-width="0.8" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                          </span>
                                          <span class="text" onclick="orderPopOpn()">
                                            View Details
                                          </span>
                                        </li>
                                        <li class="list-item">
                                          <span class="icon">
                                            <svg width="10" height="9" viewBox="0 0 10 9" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                              <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M4.8124 0.0146264C4.97876 0.0146264 5.11377 0.149639 5.11377 0.315994C5.11377 0.482349 4.97876 0.617362 4.8124 0.617362H3.30998C2.27167 0.617362 1.60103 1.32859 1.60103 2.42918V5.76995C1.60103 6.87054 2.27167 7.58177 3.30998 7.58177H6.85567C7.89399 7.58177 8.56503 6.87054 8.56503 5.76995V4.1514C8.56503 3.98505 8.70005 3.85003 8.8664 3.85003C9.03276 3.85003 9.16777 3.98505 9.16777 4.1514V5.76995C9.16777 7.2141 8.23835 8.18451 6.85567 8.18451H3.30998C1.92731 8.18451 0.998291 7.2141 0.998291 5.76995V2.42918C0.998291 0.985031 1.92731 0.0146264 3.30998 0.0146264H4.8124ZM8.31213 0.367669L8.80114 0.856688C9.03943 1.09457 9.17042 1.4108 9.17002 1.74753C9.17002 2.08426 9.03902 2.40009 8.80114 2.63757L5.78385 5.65486C5.56245 5.87627 5.26751 5.99842 4.95408 5.99842H3.44885C3.36768 5.99842 3.28973 5.96547 3.23307 5.90721C3.17642 5.84935 3.14548 5.77099 3.14749 5.68942L3.18526 4.17093C3.19289 3.86876 3.31464 3.58467 3.52841 3.3705H3.52882L6.53164 0.367669C7.02267 -0.122556 7.8211 -0.122556 8.31213 0.367669ZM6.28428 1.46706L3.95475 3.79683C3.85068 3.9009 3.79161 4.03913 3.78799 4.1858L3.75786 5.39569H4.95408C5.10678 5.39569 5.24983 5.33662 5.35792 5.22853L7.70151 2.88429L6.28428 1.46706ZM6.95758 0.794004L6.71021 1.04072L8.12745 2.45836L8.37521 2.21124C8.49897 2.08747 8.56728 1.92273 8.56728 1.74753C8.56728 1.57193 8.49897 1.40678 8.37521 1.28302L7.88619 0.794004C7.63023 0.538846 7.21394 0.538846 6.95758 0.794004Z"
                                                    fill="#828282" />
                                            </svg>
                                          </span>
                                          <span class="text">
                                            Order Edit
                                          </span>
                                        </li>
                                        <li class="list-item">
                                          <span class="icon">
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                              <path d="M4.22021 6.00004L5.40722 7.18654L7.78022 4.81354"
                                                    stroke="#828282" stroke-width="0.8" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                              <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M1.375 6.00006C1.375 9.46856 2.5315 10.6251 6 10.6251C9.4685 10.6251 10.625 9.46856 10.625 6.00006C10.625 2.53156 9.4685 1.37506 6 1.37506C2.5315 1.37506 1.375 2.53156 1.375 6.00006Z"
                                                    stroke="#828282" stroke-width="0.8" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                          </span>
                                          <span class="text">
                                            Mark as Completed
                                          </span>
                                        </li>
                                      </ul>

                                    </div>
                                    <!-- modal content end -->
                                  </div>
                                </div>
                              </div>
                            </span>
                  </td>
                </tr>
                </tbody>
              </table>
              <div class="page-bottom-content">
                <div class="left-content">
                  <span class="page-count">1 of 23</span>
                </div>
                <div class="right-content">
                  <a href="#" class="page-pagination disable">
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
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="tab-pane fade" id="two" role="tabpanel" aria-labelledby="two-tab">
            <div class="table-area-wrapper sales-list-table-content">
              <table>
                <thead>
                <tr>
                  <th class="sl-no">
                    <form action="/action_page.php">
                      <label for="">
                        <input type="checkbox" id="" name="" value="">
                        <span class="custom-checkbox"></span>
                      </label>
                    </form>
                    <span class="no-only">#</span>
                  </th>
                  <th class="customer">
                    Customer
                  </th>
                  <th class="order-id">
                    Order id
                  </th>
                  <th class="item">
                    No. of Items
                  </th>
                  <th class="amount">
                    Selling Price
                  </th>
                  <th class="amount">
                    Buying Price
                  </th>
                  <th class="status">
                    Payment Mood
                  </th>
                  <th class="status">
                    Payment
                  </th>
                  <th class="action">
                    Action
                  </th>
                </tr>
                </thead>

                <tbody>
                <tr class="sales-list-item">
                  <td class="sl-no">
                    <form action="/action_page.php">
                      <input type="checkbox" id="" name="" value="">
                    </form>
                    <span class="no-only">১</span>
                  </td>
                  <td class="customer">
                    <span class="cus-name">মের্সাস হালিমা স্টোর</span>
                    <span class="address font-small">আচরি মার্কেট , সড়ক ১২, সেক্টর ৩, উত্তরা, ঢাকা </span>
                    <span class="mob-no font-small">০১৫৬ ৯৩ ৬৯ ৫৩</span>
                  </td>
                  <td class="order-id">
                    <span class="order-id-only">বপ১২৫৬৫৯৮৪৩</span>
                    <span class="date-only">১৮/১০/২০২১</span>
                  </td>
                  <td class="item">
                    <span class="item-only">১২</span>
                  </td>
                  <td class="amount">
                    <span class="amount-only">১২,৪৮৯.০০</span>
                  </td>
                  <td class="amount">
                    <span class="amount-only">১২,৪৮৯.০০</span>
                  </td>
                  <td class="status">
                    <span class="status-btn credit">Credit</span>
                  </td>
                  <td class="status">
                    <span class="status-btn due">due</span>
                  </td>
                  <td class="action">
                            <span class="single-action-item">
                              <a href="#" class="action-btn" data-toggle="dropdown" aria-expanded="false">
                                <svg width="14" height="14" viewBox="0 0 13 13" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M0.615479 6.69234C0.615479 2.42342 2.03886 1.00003 6.30779 1.00003C10.5767 1.00003 12.0001 2.42342 12.0001 6.69234C12.0001 10.9613 10.5767 12.3846 6.30779 12.3846C2.03886 12.3846 0.615479 10.9613 0.615479 6.69234Z"
                                        stroke="#828282" stroke-linecap="round" stroke-linejoin="round" />
                                  <path d="M8.76538 6.69229H8.77092" stroke="#828282" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                  <path d="M6.30444 6.69229H6.30998" stroke="#828282" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                  <path d="M3.84351 6.69229H3.84904" stroke="#828282" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                              </a>
                              <div class="dropdown-menu dropdown-menu-right control">
                                <div class="modal-control-02">
                                  <div class="modal-content">
                                    <!-- modal content start -->
                                    <div class="mini-modal-style-02">
                                      <ul class="list">
                                        <li class="list-item">
                                          <span class="icon">
                                            <svg width="12" height="10" viewBox="0 0 12 10" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                              <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M7.58217 5.02607C7.58217 5.89907 6.87417 6.60707 6.00117 6.60707C5.12817 6.60707 4.42017 5.89907 4.42017 5.02607C4.42017 4.15257 5.12817 3.44507 6.00117 3.44507C6.87417 3.44507 7.58217 4.15257 7.58217 5.02607Z"
                                                    stroke="#828282" stroke-width="0.8" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                              <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M1.37524 5.02606C1.37524 6.66606 3.44624 8.67706 6.00124 8.67706C8.55575 8.67706 10.6272 6.66756 10.6272 5.02606C10.6272 3.38456 8.55575 1.37506 6.00124 1.37506C3.44624 1.37506 1.37524 3.38606 1.37524 5.02606Z"
                                                    stroke="#828282" stroke-width="0.8" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                          </span>
                                          <span class="text" onclick="orderPopOpn()">
                                            View Details
                                          </span>
                                        </li>
                                        <li class="list-item">
                                          <span class="icon">
                                            <svg width="10" height="9" viewBox="0 0 10 9" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                              <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M4.8124 0.0146264C4.97876 0.0146264 5.11377 0.149639 5.11377 0.315994C5.11377 0.482349 4.97876 0.617362 4.8124 0.617362H3.30998C2.27167 0.617362 1.60103 1.32859 1.60103 2.42918V5.76995C1.60103 6.87054 2.27167 7.58177 3.30998 7.58177H6.85567C7.89399 7.58177 8.56503 6.87054 8.56503 5.76995V4.1514C8.56503 3.98505 8.70005 3.85003 8.8664 3.85003C9.03276 3.85003 9.16777 3.98505 9.16777 4.1514V5.76995C9.16777 7.2141 8.23835 8.18451 6.85567 8.18451H3.30998C1.92731 8.18451 0.998291 7.2141 0.998291 5.76995V2.42918C0.998291 0.985031 1.92731 0.0146264 3.30998 0.0146264H4.8124ZM8.31213 0.367669L8.80114 0.856688C9.03943 1.09457 9.17042 1.4108 9.17002 1.74753C9.17002 2.08426 9.03902 2.40009 8.80114 2.63757L5.78385 5.65486C5.56245 5.87627 5.26751 5.99842 4.95408 5.99842H3.44885C3.36768 5.99842 3.28973 5.96547 3.23307 5.90721C3.17642 5.84935 3.14548 5.77099 3.14749 5.68942L3.18526 4.17093C3.19289 3.86876 3.31464 3.58467 3.52841 3.3705H3.52882L6.53164 0.367669C7.02267 -0.122556 7.8211 -0.122556 8.31213 0.367669ZM6.28428 1.46706L3.95475 3.79683C3.85068 3.9009 3.79161 4.03913 3.78799 4.1858L3.75786 5.39569H4.95408C5.10678 5.39569 5.24983 5.33662 5.35792 5.22853L7.70151 2.88429L6.28428 1.46706ZM6.95758 0.794004L6.71021 1.04072L8.12745 2.45836L8.37521 2.21124C8.49897 2.08747 8.56728 1.92273 8.56728 1.74753C8.56728 1.57193 8.49897 1.40678 8.37521 1.28302L7.88619 0.794004C7.63023 0.538846 7.21394 0.538846 6.95758 0.794004Z"
                                                    fill="#828282" />
                                            </svg>
                                          </span>
                                          <span class="text">
                                            Order Edit
                                          </span>
                                        </li>
                                        <li class="list-item">
                                          <span class="icon">
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                              <path d="M4.22021 6.00004L5.40722 7.18654L7.78022 4.81354"
                                                    stroke="#828282" stroke-width="0.8" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                              <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M1.375 6.00006C1.375 9.46856 2.5315 10.6251 6 10.6251C9.4685 10.6251 10.625 9.46856 10.625 6.00006C10.625 2.53156 9.4685 1.37506 6 1.37506C2.5315 1.37506 1.375 2.53156 1.375 6.00006Z"
                                                    stroke="#828282" stroke-width="0.8" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                          </span>
                                          <span class="text">
                                            Mark as Completed
                                          </span>
                                        </li>
                                      </ul>

                                    </div>
                                    <!-- modal content end -->
                                  </div>
                                </div>
                              </div>
                            </span>
                  </td>
                </tr>
                <tr class="sales-list-item">
                  <td class="sl-no">
                    <form action="/action_page.php">
                      <input type="checkbox" id="" name="" value="">
                    </form>
                    <span class="no-only">১</span>
                  </td>
                  <td class="customer">
                    <span class="cus-name">মের্সাস হালিমা স্টোর</span>
                    <span class="address font-small">আচরি মার্কেট , সড়ক ১২, সেক্টর ৩, উত্তরা, ঢাকা </span>
                    <span class="mob-no font-small">০১৫৬ ৯৩ ৬৯ ৫৩</span>
                  </td>
                  <td class="order-id">
                    <span class="order-id-only">বপ১২৫৬৫৯৮৪৩</span>
                    <span class="date-only">১৮/১০/২০২১</span>
                  </td>
                  <td class="item">
                    <span class="item-only">১২</span>
                  </td>
                  <td class="amount">
                    <span class="amount-only">১২,৪৮৯.০০</span>
                  </td>
                  <td class="amount">
                    <span class="amount-only">১২,৪৮৯.০০</span>
                  </td>
                  <td class="status">
                    <span class="status-btn credit">Credit</span>
                  </td>
                  <td class="status">
                    <span class="status-btn paid-green">paid</span>
                  </td>
                  <td class="action">
                            <span class="single-action-item">
                              <a href="#" class="action-btn" data-toggle="dropdown" aria-expanded="false">
                                <svg width="14" height="14" viewBox="0 0 13 13" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M0.615479 6.69234C0.615479 2.42342 2.03886 1.00003 6.30779 1.00003C10.5767 1.00003 12.0001 2.42342 12.0001 6.69234C12.0001 10.9613 10.5767 12.3846 6.30779 12.3846C2.03886 12.3846 0.615479 10.9613 0.615479 6.69234Z"
                                        stroke="#828282" stroke-linecap="round" stroke-linejoin="round" />
                                  <path d="M8.76538 6.69229H8.77092" stroke="#828282" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                  <path d="M6.30444 6.69229H6.30998" stroke="#828282" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                  <path d="M3.84351 6.69229H3.84904" stroke="#828282" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                              </a>
                              <div class="dropdown-menu dropdown-menu-right control">
                                <div class="modal-control-02">
                                  <div class="modal-content">
                                    <!-- modal content start -->
                                    <div class="mini-modal-style-02">
                                      <ul class="list">
                                        <li class="list-item">
                                          <span class="icon">
                                            <svg width="12" height="10" viewBox="0 0 12 10" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                              <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M7.58217 5.02607C7.58217 5.89907 6.87417 6.60707 6.00117 6.60707C5.12817 6.60707 4.42017 5.89907 4.42017 5.02607C4.42017 4.15257 5.12817 3.44507 6.00117 3.44507C6.87417 3.44507 7.58217 4.15257 7.58217 5.02607Z"
                                                    stroke="#828282" stroke-width="0.8" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                              <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M1.37524 5.02606C1.37524 6.66606 3.44624 8.67706 6.00124 8.67706C8.55575 8.67706 10.6272 6.66756 10.6272 5.02606C10.6272 3.38456 8.55575 1.37506 6.00124 1.37506C3.44624 1.37506 1.37524 3.38606 1.37524 5.02606Z"
                                                    stroke="#828282" stroke-width="0.8" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                          </span>
                                          <span class="text" onclick="orderPopOpn()">
                                            View Details
                                          </span>
                                        </li>
                                        <li class="list-item">
                                          <span class="icon">
                                            <svg width="10" height="9" viewBox="0 0 10 9" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                              <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M4.8124 0.0146264C4.97876 0.0146264 5.11377 0.149639 5.11377 0.315994C5.11377 0.482349 4.97876 0.617362 4.8124 0.617362H3.30998C2.27167 0.617362 1.60103 1.32859 1.60103 2.42918V5.76995C1.60103 6.87054 2.27167 7.58177 3.30998 7.58177H6.85567C7.89399 7.58177 8.56503 6.87054 8.56503 5.76995V4.1514C8.56503 3.98505 8.70005 3.85003 8.8664 3.85003C9.03276 3.85003 9.16777 3.98505 9.16777 4.1514V5.76995C9.16777 7.2141 8.23835 8.18451 6.85567 8.18451H3.30998C1.92731 8.18451 0.998291 7.2141 0.998291 5.76995V2.42918C0.998291 0.985031 1.92731 0.0146264 3.30998 0.0146264H4.8124ZM8.31213 0.367669L8.80114 0.856688C9.03943 1.09457 9.17042 1.4108 9.17002 1.74753C9.17002 2.08426 9.03902 2.40009 8.80114 2.63757L5.78385 5.65486C5.56245 5.87627 5.26751 5.99842 4.95408 5.99842H3.44885C3.36768 5.99842 3.28973 5.96547 3.23307 5.90721C3.17642 5.84935 3.14548 5.77099 3.14749 5.68942L3.18526 4.17093C3.19289 3.86876 3.31464 3.58467 3.52841 3.3705H3.52882L6.53164 0.367669C7.02267 -0.122556 7.8211 -0.122556 8.31213 0.367669ZM6.28428 1.46706L3.95475 3.79683C3.85068 3.9009 3.79161 4.03913 3.78799 4.1858L3.75786 5.39569H4.95408C5.10678 5.39569 5.24983 5.33662 5.35792 5.22853L7.70151 2.88429L6.28428 1.46706ZM6.95758 0.794004L6.71021 1.04072L8.12745 2.45836L8.37521 2.21124C8.49897 2.08747 8.56728 1.92273 8.56728 1.74753C8.56728 1.57193 8.49897 1.40678 8.37521 1.28302L7.88619 0.794004C7.63023 0.538846 7.21394 0.538846 6.95758 0.794004Z"
                                                    fill="#828282" />
                                            </svg>
                                          </span>
                                          <span class="text">
                                            Order Edit
                                          </span>
                                        </li>
                                        <li class="list-item">
                                          <span class="icon">
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                              <path d="M4.22021 6.00004L5.40722 7.18654L7.78022 4.81354"
                                                    stroke="#828282" stroke-width="0.8" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                              <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M1.375 6.00006C1.375 9.46856 2.5315 10.6251 6 10.6251C9.4685 10.6251 10.625 9.46856 10.625 6.00006C10.625 2.53156 9.4685 1.37506 6 1.37506C2.5315 1.37506 1.375 2.53156 1.375 6.00006Z"
                                                    stroke="#828282" stroke-width="0.8" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                          </span>
                                          <span class="text">
                                            Mark as Completed
                                          </span>
                                        </li>
                                      </ul>

                                    </div>
                                    <!-- modal content end -->
                                  </div>
                                </div>
                              </div>
                            </span>
                  </td>
                </tr>
                </tbody>
              </table>
              <div class="page-bottom-content">
                <div class="left-content">
                  <span class="page-count">1 of 23</span>
                </div>
                <div class="right-content">
                  <a href="#" class="page-pagination disable">
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
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- tab content area end -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SalesListCom"
}
</script>

<style scoped>

</style>