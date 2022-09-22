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
            <div class="table-area-wrapper product-list-table-content">
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
                  <th class="product-name">
                    Rice Name
                  </th>
                  <th class="product-company-name">
                    Rice Company
                  </th>
                  <th class="weight">
                    Wight (Kg)
                  </th>
                  <th class="price">
                    Price (বস্তা)
                  </th>
                  <th class="last-update">
                    Last update
                  </th>
                  <th class="responsible">
                    Responsible
                  </th>
                </tr>
                </thead>

                <tbody>
                <tr class="product-list-item">
                  <td class="sl-no">
                    <form action="/action_page.php">
                      <input type="checkbox" id="" name="" value="">
                    </form>
                    <span class="no-only">১</span>
                  </td>
                  <td class="product-name">
                    নাজিরশাইল
                  </td>
                  <td class="product-company-name">
                    মোজ্জামেল
                  </td>
                  <td class="weight">
                    ২৫
                  </td>
                  <td class="price">
                    ১৭৬৫/-
                  </td>
                  <td class="last-update">
                    <span class="date-only">১৮/১০/২০২১</span>
                    <span class="time-only">১০:২৬</span>
                  </td>
                  <td class="responsible">
                    Shah Mia Akaber
                  </td>
                </tr>
                <tr class="product-list-item">
                  <td class="sl-no">
                    <form action="/action_page.php">
                      <input type="checkbox" id="" name="" value="">
                    </form>
                    <span class="no-only">১</span>
                  </td>
                  <td class="product-name">
                    নাজিরশাইল
                  </td>
                  <td class="product-company-name">
                    মোজ্জামেল
                  </td>
                  <td class="weight">
                    ২৫
                  </td>
                  <td class="price">
                    ১৭৬৫/-
                  </td>
                  <td class="last-update">
                    <span class="date-only">১৮/১০/২০২১</span>
                    <span class="time-only">১০:২৬</span>
                  </td>
                  <td class="responsible">
                    Shah Mia Akaber
                  </td>
                </tr>
                <tr class="product-list-item">
                  <td class="sl-no">
                    <form action="/action_page.php">
                      <input type="checkbox" id="" name="" value="">
                    </form>
                    <span class="no-only">১</span>
                  </td>
                  <td class="product-name">
                    নাজিরশাইল
                  </td>
                  <td class="product-company-name">
                    মোজ্জামেল
                  </td>
                  <td class="weight">
                    ২৫
                  </td>
                  <td class="price">
                    ১৭৬৫/-
                  </td>
                  <td class="last-update">
                    <span class="date-only">১৮/১০/২০২১</span>
                    <span class="time-only">১০:২৬</span>
                  </td>
                  <td class="responsible">
                    Shah Mia Akaber
                  </td>
                </tr>
                <tr class="product-list-item">
                  <td class="sl-no">
                    <form action="/action_page.php">
                      <input type="checkbox" id="" name="" value="">
                    </form>
                    <span class="no-only">১</span>
                  </td>
                  <td class="product-name">
                    নাজিরশাইল
                  </td>
                  <td class="product-company-name">
                    মোজ্জামেল
                  </td>
                  <td class="weight">
                    ২৫
                  </td>
                  <td class="price">
                    ১৭৬৫/-
                  </td>
                  <td class="last-update">
                    <span class="date-only">১৮/১০/২০২১</span>
                    <span class="time-only">১০:২৬</span>
                  </td>
                  <td class="responsible">
                    Shah Mia Akaber
                  </td>
                </tr>
                <tr class="product-list-item">
                  <td class="sl-no">
                    <form action="/action_page.php">
                      <input type="checkbox" id="" name="" value="">
                    </form>
                    <span class="no-only">১</span>
                  </td>
                  <td class="product-name">
                    নাজিরশাইল
                  </td>
                  <td class="product-company-name">
                    মোজ্জামেল
                  </td>
                  <td class="weight">
                    ২৫
                  </td>
                  <td class="price">
                    ১৭৬৫/-
                  </td>
                  <td class="last-update">
                    <span class="date-only">১৮/১০/২০২১</span>
                    <span class="time-only">১০:২৬</span>
                  </td>
                  <td class="responsible">
                    Shah Mia Akaber
                  </td>
                </tr>
                <tr class="product-list-item">
                  <td class="sl-no">
                    <form action="/action_page.php">
                      <input type="checkbox" id="" name="" value="">
                    </form>
                    <span class="no-only">১</span>
                  </td>
                  <td class="product-name">
                    নাজিরশাইল
                  </td>
                  <td class="product-company-name">
                    মোজ্জামেল
                  </td>
                  <td class="weight">
                    ২৫
                  </td>
                  <td class="price">
                    ১৭৬৫/-
                  </td>
                  <td class="last-update">
                    <span class="date-only">১৮/১০/২০২১</span>
                    <span class="time-only">১০:২৬</span>
                  </td>
                  <td class="responsible">
                    Shah Mia Akaber
                  </td>
                </tr>
                <tr class="product-list-item">
                  <td class="sl-no">
                    <form action="/action_page.php">
                      <input type="checkbox" id="" name="" value="">
                    </form>
                    <span class="no-only">১</span>
                  </td>
                  <td class="product-name">
                    নাজিরশাইল
                  </td>
                  <td class="product-company-name">
                    মোজ্জামেল
                  </td>
                  <td class="weight">
                    ২৫
                  </td>
                  <td class="price">
                    ১৭৬৫/-
                  </td>
                  <td class="last-update">
                    <span class="date-only">১৮/১০/২০২১</span>
                    <span class="time-only">১০:২৬</span>
                  </td>
                  <td class="responsible">
                    Shah Mia Akaber
                  </td>
                </tr>
                <tr class="product-list-item">
                  <td class="sl-no">
                    <form action="/action_page.php">
                      <input type="checkbox" id="" name="" value="">
                    </form>
                    <span class="no-only">১</span>
                  </td>
                  <td class="product-name">
                    নাজিরশাইল
                  </td>
                  <td class="product-company-name">
                    মোজ্জামেল
                  </td>
                  <td class="weight">
                    ২৫
                  </td>
                  <td class="price">
                    ১৭৬৫/-
                  </td>
                  <td class="last-update">
                    <span class="date-only">১৮/১০/২০২১</span>
                    <span class="time-only">১০:২৬</span>
                  </td>
                  <td class="responsible">
                    Shah Mia Akaber
                  </td>
                </tr>
                <tr class="product-list-item">
                  <td class="sl-no">
                    <form action="/action_page.php">
                      <input type="checkbox" id="" name="" value="">
                    </form>
                    <span class="no-only">১</span>
                  </td>
                  <td class="product-name">
                    নাজিরশাইল
                  </td>
                  <td class="product-company-name">
                    মোজ্জামেল
                  </td>
                  <td class="weight">
                    ২৫
                  </td>
                  <td class="price">
                    ১৭৬৫/-
                  </td>
                  <td class="last-update">
                    <span class="date-only">১৮/১০/২০২১</span>
                    <span class="time-only">১০:২৬</span>
                  </td>
                  <td class="responsible">
                    Shah Mia Akaber
                  </td>
                </tr>
                <tr class="product-list-item">
                  <td class="sl-no">
                    <form action="/action_page.php">
                      <input type="checkbox" id="" name="" value="">
                    </form>
                    <span class="no-only">১</span>
                  </td>
                  <td class="product-name">
                    নাজিরশাইল
                  </td>
                  <td class="product-company-name">
                    মোজ্জামেল
                  </td>
                  <td class="weight">
                    ২৫
                  </td>
                  <td class="price">
                    ১৭৬৫/-
                  </td>
                  <td class="last-update">
                    <span class="date-only">১৮/১০/২০২১</span>
                    <span class="time-only">১০:২৬</span>
                  </td>
                  <td class="responsible">
                    Shah Mia Akaber
                  </td>
                </tr>
                <tr class="product-list-item">
                  <td class="sl-no">
                    <form action="/action_page.php">
                      <input type="checkbox" id="" name="" value="">
                    </form>
                    <span class="no-only">১</span>
                  </td>
                  <td class="product-name">
                    নাজিরশাইল
                  </td>
                  <td class="product-company-name">
                    মোজ্জামেল
                  </td>
                  <td class="weight">
                    ২৫
                  </td>
                  <td class="price">
                    ১৭৬৫/-
                  </td>
                  <td class="last-update">
                    <span class="date-only">১৮/১০/২০২১</span>
                    <span class="time-only">১০:২৬</span>
                  </td>
                  <td class="responsible">
                    Shah Mia Akaber
                  </td>
                </tr>
                <tr class="product-list-item">
                  <td class="sl-no">
                    <form action="/action_page.php">
                      <input type="checkbox" id="" name="" value="">
                    </form>
                    <span class="no-only">১</span>
                  </td>
                  <td class="product-name">
                    নাজিরশাইল
                  </td>
                  <td class="product-company-name">
                    মোজ্জামেল
                  </td>
                  <td class="weight">
                    ২৫
                  </td>
                  <td class="price">
                    ১৭৬৫/-
                  </td>
                  <td class="last-update">
                    <span class="date-only">১৮/১০/২০২১</span>
                    <span class="time-only">১০:২৬</span>
                  </td>
                  <td class="responsible">
                    Shah Mia Akaber
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
            <div class="table-area-wrapper product-list-table-content">
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
                  <th class="product-name">
                    Rice Name
                  </th>
                  <th class="product-company-name">
                    Rice Company
                  </th>
                  <th class="weight">
                    Wight (Kg)
                  </th>
                  <th class="price">
                    Price (বস্তা)
                  </th>
                  <th class="last-update">
                    Last update
                  </th>
                  <th class="responsible">
                    Responsible
                  </th>
                </tr>
                </thead>

                <tbody>
                <tr class="product-list-item">
                  <td class="sl-no">
                    <form action="/action_page.php">
                      <input type="checkbox" id="" name="" value="">
                    </form>
                    <span class="no-only">১</span>
                  </td>
                  <td class="product-name">
                    নাজিরশাইল
                  </td>
                  <td class="product-company-name">
                    মোজ্জামেল
                  </td>
                  <td class="weight">
                    ২৫
                  </td>
                  <td class="price">
                    ১৭৬৫/-
                  </td>
                  <td class="last-update">
                    <span class="date-only">১৮/১০/২০২১</span>
                    <span class="time-only">১০:২৬</span>
                  </td>
                  <td class="responsible">
                    Shah Mia Akaber
                  </td>
                </tr>
                <tr class="product-list-item">
                  <td class="sl-no">
                    <form action="/action_page.php">
                      <input type="checkbox" id="" name="" value="">
                    </form>
                    <span class="no-only">১</span>
                  </td>
                  <td class="product-name">
                    নাজিরশাইল
                  </td>
                  <td class="product-company-name">
                    মোজ্জামেল
                  </td>
                  <td class="weight">
                    ২৫
                  </td>
                  <td class="price">
                    ১৭৬৫/-
                  </td>
                  <td class="last-update">
                    <span class="date-only">১৮/১০/২০২১</span>
                    <span class="time-only">১০:২৬</span>
                  </td>
                  <td class="responsible">
                    Shah Mia Akaber
                  </td>
                </tr>
                <tr class="product-list-item">
                  <td class="sl-no">
                    <form action="/action_page.php">
                      <input type="checkbox" id="" name="" value="">
                    </form>
                    <span class="no-only">১</span>
                  </td>
                  <td class="product-name">
                    নাজিরশাইল
                  </td>
                  <td class="product-company-name">
                    মোজ্জামেল
                  </td>
                  <td class="weight">
                    ২৫
                  </td>
                  <td class="price">
                    ১৭৬৫/-
                  </td>
                  <td class="last-update">
                    <span class="date-only">১৮/১০/২০২১</span>
                    <span class="time-only">১০:২৬</span>
                  </td>
                  <td class="responsible">
                    Shah Mia Akaber
                  </td>
                </tr>
                <tr class="product-list-item">
                  <td class="sl-no">
                    <form action="/action_page.php">
                      <input type="checkbox" id="" name="" value="">
                    </form>
                    <span class="no-only">১</span>
                  </td>
                  <td class="product-name">
                    নাজিরশাইল
                  </td>
                  <td class="product-company-name">
                    মোজ্জামেল
                  </td>
                  <td class="weight">
                    ২৫
                  </td>
                  <td class="price">
                    ১৭৬৫/-
                  </td>
                  <td class="last-update">
                    <span class="date-only">১৮/১০/২০২১</span>
                    <span class="time-only">১০:২৬</span>
                  </td>
                  <td class="responsible">
                    Shah Mia Akaber
                  </td>
                </tr>
                <tr class="product-list-item">
                  <td class="sl-no">
                    <form action="/action_page.php">
                      <input type="checkbox" id="" name="" value="">
                    </form>
                    <span class="no-only">১</span>
                  </td>
                  <td class="product-name">
                    নাজিরশাইল
                  </td>
                  <td class="product-company-name">
                    মোজ্জামেল
                  </td>
                  <td class="weight">
                    ২৫
                  </td>
                  <td class="price">
                    ১৭৬৫/-
                  </td>
                  <td class="last-update">
                    <span class="date-only">১৮/১০/২০২১</span>
                    <span class="time-only">১০:২৬</span>
                  </td>
                  <td class="responsible">
                    Shah Mia Akaber
                  </td>
                </tr>
                <tr class="product-list-item">
                  <td class="sl-no">
                    <form action="/action_page.php">
                      <input type="checkbox" id="" name="" value="">
                    </form>
                    <span class="no-only">১</span>
                  </td>
                  <td class="product-name">
                    নাজিরশাইল
                  </td>
                  <td class="product-company-name">
                    মোজ্জামেল
                  </td>
                  <td class="weight">
                    ২৫
                  </td>
                  <td class="price">
                    ১৭৬৫/-
                  </td>
                  <td class="last-update">
                    <span class="date-only">১৮/১০/২০২১</span>
                    <span class="time-only">১০:২৬</span>
                  </td>
                  <td class="responsible">
                    Shah Mia Akaber
                  </td>
                </tr>
                <tr class="product-list-item">
                  <td class="sl-no">
                    <form action="/action_page.php">
                      <input type="checkbox" id="" name="" value="">
                    </form>
                    <span class="no-only">১</span>
                  </td>
                  <td class="product-name">
                    নাজিরশাইল
                  </td>
                  <td class="product-company-name">
                    মোজ্জামেল
                  </td>
                  <td class="weight">
                    ২৫
                  </td>
                  <td class="price">
                    ১৭৬৫/-
                  </td>
                  <td class="last-update">
                    <span class="date-only">১৮/১০/২০২১</span>
                    <span class="time-only">১০:২৬</span>
                  </td>
                  <td class="responsible">
                    Shah Mia Akaber
                  </td>
                </tr>
                <tr class="product-list-item">
                  <td class="sl-no">
                    <form action="/action_page.php">
                      <input type="checkbox" id="" name="" value="">
                    </form>
                    <span class="no-only">১</span>
                  </td>
                  <td class="product-name">
                    নাজিরশাইল
                  </td>
                  <td class="product-company-name">
                    মোজ্জামেল
                  </td>
                  <td class="weight">
                    ২৫
                  </td>
                  <td class="price">
                    ১৭৬৫/-
                  </td>
                  <td class="last-update">
                    <span class="date-only">১৮/১০/২০২১</span>
                    <span class="time-only">১০:২৬</span>
                  </td>
                  <td class="responsible">
                    Shah Mia Akaber
                  </td>
                </tr>
                <tr class="product-list-item">
                  <td class="sl-no">
                    <form action="/action_page.php">
                      <input type="checkbox" id="" name="" value="">
                    </form>
                    <span class="no-only">১</span>
                  </td>
                  <td class="product-name">
                    নাজিরশাইল
                  </td>
                  <td class="product-company-name">
                    মোজ্জামেল
                  </td>
                  <td class="weight">
                    ২৫
                  </td>
                  <td class="price">
                    ১৭৬৫/-
                  </td>
                  <td class="last-update">
                    <span class="date-only">১৮/১০/২০২১</span>
                    <span class="time-only">১০:২৬</span>
                  </td>
                  <td class="responsible">
                    Shah Mia Akaber
                  </td>
                </tr>
                <tr class="product-list-item">
                  <td class="sl-no">
                    <form action="/action_page.php">
                      <input type="checkbox" id="" name="" value="">
                    </form>
                    <span class="no-only">১</span>
                  </td>
                  <td class="product-name">
                    নাজিরশাইল
                  </td>
                  <td class="product-company-name">
                    মোজ্জামেল
                  </td>
                  <td class="weight">
                    ২৫
                  </td>
                  <td class="price">
                    ১৭৬৫/-
                  </td>
                  <td class="last-update">
                    <span class="date-only">১৮/১০/২০২১</span>
                    <span class="time-only">১০:২৬</span>
                  </td>
                  <td class="responsible">
                    Shah Mia Akaber
                  </td>
                </tr>
                <tr class="product-list-item">
                  <td class="sl-no">
                    <form action="/action_page.php">
                      <input type="checkbox" id="" name="" value="">
                    </form>
                    <span class="no-only">১</span>
                  </td>
                  <td class="product-name">
                    নাজিরশাইল
                  </td>
                  <td class="product-company-name">
                    মোজ্জামেল
                  </td>
                  <td class="weight">
                    ২৫
                  </td>
                  <td class="price">
                    ১৭৬৫/-
                  </td>
                  <td class="last-update">
                    <span class="date-only">১৮/১০/২০২১</span>
                    <span class="time-only">১০:২৬</span>
                  </td>
                  <td class="responsible">
                    Shah Mia Akaber
                  </td>
                </tr>
                <tr class="product-list-item">
                  <td class="sl-no">
                    <form action="/action_page.php">
                      <input type="checkbox" id="" name="" value="">
                    </form>
                    <span class="no-only">১</span>
                  </td>
                  <td class="product-name">
                    নাজিরশাইল
                  </td>
                  <td class="product-company-name">
                    মোজ্জামেল
                  </td>
                  <td class="weight">
                    ২৫
                  </td>
                  <td class="price">
                    ১৭৬৫/-
                  </td>
                  <td class="last-update">
                    <span class="date-only">১৮/১০/২০২১</span>
                    <span class="time-only">১০:২৬</span>
                  </td>
                  <td class="responsible">
                    Shah Mia Akaber
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

          <div class="tab-pane fade" id="three" role="tabpanel" aria-labelledby="three-tab">
            <div class="table-area-wrapper product-list-table-content">
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
                  <th class="product-name">
                    Rice Name
                  </th>
                  <th class="product-company-name">
                    Rice Company
                  </th>
                  <th class="weight">
                    Wight (Kg)
                  </th>
                  <th class="price">
                    Price (বস্তা)
                  </th>
                  <th class="last-update">
                    Last update
                  </th>
                  <th class="responsible">
                    Responsible
                  </th>
                </tr>
                </thead>

                <tbody>
                <tr class="product-list-item">
                  <td class="sl-no">
                    <form action="/action_page.php">
                      <input type="checkbox" id="" name="" value="">
                    </form>
                    <span class="no-only">১</span>
                  </td>
                  <td class="product-name">
                    নাজিরশাইল
                  </td>
                  <td class="product-company-name">
                    মোজ্জামেল
                  </td>
                  <td class="weight">
                    ২৫
                  </td>
                  <td class="price">
                    ১৭৬৫/-
                  </td>
                  <td class="last-update">
                    <span class="date-only">১৮/১০/২০২১</span>
                    <span class="time-only">১০:২৬</span>
                  </td>
                  <td class="responsible">
                    Shah Mia Akaber
                  </td>
                </tr>
                <tr class="product-list-item">
                  <td class="sl-no">
                    <form action="/action_page.php">
                      <input type="checkbox" id="" name="" value="">
                    </form>
                    <span class="no-only">১</span>
                  </td>
                  <td class="product-name">
                    নাজিরশাইল
                  </td>
                  <td class="product-company-name">
                    মোজ্জামেল
                  </td>
                  <td class="weight">
                    ২৫
                  </td>
                  <td class="price">
                    ১৭৬৫/-
                  </td>
                  <td class="last-update">
                    <span class="date-only">১৮/১০/২০২১</span>
                    <span class="time-only">১০:২৬</span>
                  </td>
                  <td class="responsible">
                    Shah Mia Akaber
                  </td>
                </tr>
                <tr class="product-list-item">
                  <td class="sl-no">
                    <form action="/action_page.php">
                      <input type="checkbox" id="" name="" value="">
                    </form>
                    <span class="no-only">১</span>
                  </td>
                  <td class="product-name">
                    নাজিরশাইল
                  </td>
                  <td class="product-company-name">
                    মোজ্জামেল
                  </td>
                  <td class="weight">
                    ২৫
                  </td>
                  <td class="price">
                    ১৭৬৫/-
                  </td>
                  <td class="last-update">
                    <span class="date-only">১৮/১০/২০২১</span>
                    <span class="time-only">১০:২৬</span>
                  </td>
                  <td class="responsible">
                    Shah Mia Akaber
                  </td>
                </tr>
                <tr class="product-list-item">
                  <td class="sl-no">
                    <form action="/action_page.php">
                      <input type="checkbox" id="" name="" value="">
                    </form>
                    <span class="no-only">১</span>
                  </td>
                  <td class="product-name">
                    নাজিরশাইল
                  </td>
                  <td class="product-company-name">
                    মোজ্জামেল
                  </td>
                  <td class="weight">
                    ২৫
                  </td>
                  <td class="price">
                    ১৭৬৫/-
                  </td>
                  <td class="last-update">
                    <span class="date-only">১৮/১০/২০২১</span>
                    <span class="time-only">১০:২৬</span>
                  </td>
                  <td class="responsible">
                    Shah Mia Akaber
                  </td>
                </tr>
                <tr class="product-list-item">
                  <td class="sl-no">
                    <form action="/action_page.php">
                      <input type="checkbox" id="" name="" value="">
                    </form>
                    <span class="no-only">১</span>
                  </td>
                  <td class="product-name">
                    নাজিরশাইল
                  </td>
                  <td class="product-company-name">
                    মোজ্জামেল
                  </td>
                  <td class="weight">
                    ২৫
                  </td>
                  <td class="price">
                    ১৭৬৫/-
                  </td>
                  <td class="last-update">
                    <span class="date-only">১৮/১০/২০২১</span>
                    <span class="time-only">১০:২৬</span>
                  </td>
                  <td class="responsible">
                    Shah Mia Akaber
                  </td>
                </tr>
                <tr class="product-list-item">
                  <td class="sl-no">
                    <form action="/action_page.php">
                      <input type="checkbox" id="" name="" value="">
                    </form>
                    <span class="no-only">১</span>
                  </td>
                  <td class="product-name">
                    নাজিরশাইল
                  </td>
                  <td class="product-company-name">
                    মোজ্জামেল
                  </td>
                  <td class="weight">
                    ২৫
                  </td>
                  <td class="price">
                    ১৭৬৫/-
                  </td>
                  <td class="last-update">
                    <span class="date-only">১৮/১০/২০২১</span>
                    <span class="time-only">১০:২৬</span>
                  </td>
                  <td class="responsible">
                    Shah Mia Akaber
                  </td>
                </tr>
                <tr class="product-list-item">
                  <td class="sl-no">
                    <form action="/action_page.php">
                      <input type="checkbox" id="" name="" value="">
                    </form>
                    <span class="no-only">১</span>
                  </td>
                  <td class="product-name">
                    নাজিরশাইল
                  </td>
                  <td class="product-company-name">
                    মোজ্জামেল
                  </td>
                  <td class="weight">
                    ২৫
                  </td>
                  <td class="price">
                    ১৭৬৫/-
                  </td>
                  <td class="last-update">
                    <span class="date-only">১৮/১০/২০২১</span>
                    <span class="time-only">১০:২৬</span>
                  </td>
                  <td class="responsible">
                    Shah Mia Akaber
                  </td>
                </tr>
                <tr class="product-list-item">
                  <td class="sl-no">
                    <form action="/action_page.php">
                      <input type="checkbox" id="" name="" value="">
                    </form>
                    <span class="no-only">১</span>
                  </td>
                  <td class="product-name">
                    নাজিরশাইল
                  </td>
                  <td class="product-company-name">
                    মোজ্জামেল
                  </td>
                  <td class="weight">
                    ২৫
                  </td>
                  <td class="price">
                    ১৭৬৫/-
                  </td>
                  <td class="last-update">
                    <span class="date-only">১৮/১০/২০২১</span>
                    <span class="time-only">১০:২৬</span>
                  </td>
                  <td class="responsible">
                    Shah Mia Akaber
                  </td>
                </tr>
                <tr class="product-list-item">
                  <td class="sl-no">
                    <form action="/action_page.php">
                      <input type="checkbox" id="" name="" value="">
                    </form>
                    <span class="no-only">১</span>
                  </td>
                  <td class="product-name">
                    নাজিরশাইল
                  </td>
                  <td class="product-company-name">
                    মোজ্জামেল
                  </td>
                  <td class="weight">
                    ২৫
                  </td>
                  <td class="price">
                    ১৭৬৫/-
                  </td>
                  <td class="last-update">
                    <span class="date-only">১৮/১০/২০২১</span>
                    <span class="time-only">১০:২৬</span>
                  </td>
                  <td class="responsible">
                    Shah Mia Akaber
                  </td>
                </tr>
                <tr class="product-list-item">
                  <td class="sl-no">
                    <form action="/action_page.php">
                      <input type="checkbox" id="" name="" value="">
                    </form>
                    <span class="no-only">১</span>
                  </td>
                  <td class="product-name">
                    নাজিরশাইল
                  </td>
                  <td class="product-company-name">
                    মোজ্জামেল
                  </td>
                  <td class="weight">
                    ২৫
                  </td>
                  <td class="price">
                    ১৭৬৫/-
                  </td>
                  <td class="last-update">
                    <span class="date-only">১৮/১০/২০২১</span>
                    <span class="time-only">১০:২৬</span>
                  </td>
                  <td class="responsible">
                    Shah Mia Akaber
                  </td>
                </tr>
                <tr class="product-list-item">
                  <td class="sl-no">
                    <form action="/action_page.php">
                      <input type="checkbox" id="" name="" value="">
                    </form>
                    <span class="no-only">১</span>
                  </td>
                  <td class="product-name">
                    নাজিরশাইল
                  </td>
                  <td class="product-company-name">
                    মোজ্জামেল
                  </td>
                  <td class="weight">
                    ২৫
                  </td>
                  <td class="price">
                    ১৭৬৫/-
                  </td>
                  <td class="last-update">
                    <span class="date-only">১৮/১০/২০২১</span>
                    <span class="time-only">১০:২৬</span>
                  </td>
                  <td class="responsible">
                    Shah Mia Akaber
                  </td>
                </tr>
                <tr class="product-list-item">
                  <td class="sl-no">
                    <form action="/action_page.php">
                      <input type="checkbox" id="" name="" value="">
                    </form>
                    <span class="no-only">১</span>
                  </td>
                  <td class="product-name">
                    নাজিরশাইল
                  </td>
                  <td class="product-company-name">
                    মোজ্জামেল
                  </td>
                  <td class="weight">
                    ২৫
                  </td>
                  <td class="price">
                    ১৭৬৫/-
                  </td>
                  <td class="last-update">
                    <span class="date-only">১৮/১০/২০২১</span>
                    <span class="time-only">১০:২৬</span>
                  </td>
                  <td class="responsible">
                    Shah Mia Akaber
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
  name: "PriceUpdateHistoryCom"
}
</script>

<style scoped>

</style>