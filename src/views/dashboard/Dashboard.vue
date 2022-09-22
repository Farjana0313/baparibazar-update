<template>
  <div class="container-scroller">
    <!-- sidebar area start -->
<Sidebar/>
    <!-- sidebar area end -->

    <!-- main body area start -->
    <div class="container-fluid main-body">
      <!-- top bar area start -->
      <Topbar/>
      <!-- top bar area end -->

      <!-- main body content start -->
      <div class="main-body-content-area-wrapper">

        <div class="order-area-wrapper">

          <div class="row">
            <div class="col-lg-12">
              <!-- topbar top content start -->
              <div class="tab-top-content">
                <div class="left-content">
                  <div class="tab-button">
                    <!-- tab button area start -->
                    <ul class="nav nav-tabs default-tab-button" id="myTab" role="tablist">
                      <li class="nav-item" role="presentation">
                        <a class="nav-link active" id="home-tab" data-toggle="tab"
                           href="#one" role="tab" aria-controls="one"
                           aria-selected="true">new orders</a>
                      </li>
                      <li class="nav-item" role="presentation">
                        <a class="nav-link" id="two-tab" data-toggle="tab" href="#two"
                           role="tab" aria-controls="two"
                           aria-selected="false">successful orders</a>
                      </li>
                      <li class="nav-item" role="presentation">
                        <a class="nav-link" id="three-tab" data-toggle="tab"
                           href="#three" role="tab" aria-controls="three"
                           aria-selected="false">cancel orders</a>
                      </li>
                    </ul>
                    <!-- tab button area end -->
                  </div>
                </div>
                <div class="right-content">
                  <a href="#" class="download-invoice-btn top-bar-ringt-btn">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M18.1599 6.29988L12.4899 0.899878C11.7599 0.799878 10.9399 0.749878 10.0399 0.749878C3.7499 0.749878 1.6499 3.06988 1.6499 9.99988C1.6499 16.9399 3.7499 19.2499 10.0399 19.2499C16.3399 19.2499 18.4399 16.9399 18.4399 9.99988C18.4399 8.57988 18.3499 7.34988 18.1599 6.29988Z"
                            fill="#E0E0E0" stroke="#828282" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round"/>
                      <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M11.9343 0.832581V3.49358C11.9343 5.35158 13.4403 6.85658 15.2983 6.85658H18.2493"
                            fill="#E0E0E0"/>
                      <path
                          d="M11.9343 0.832581V3.49358C11.9343 5.35158 13.4403 6.85658 15.2983 6.85658H18.2493"
                          stroke="#828282" stroke-width="1.5" stroke-linecap="round"
                          stroke-linejoin="round"/>
                      <path d="M9.6604 14.0172V7.9762" stroke="#828282" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round"/>
                      <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M7.3147 11.6622L9.6597 14.0172L12.0047 11.6622"
                            fill="#E0E0E0"/>
                      <path d="M7.3147 11.6622L9.6597 14.0172L12.0047 11.6622"
                            stroke="#828282" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round"/>
                    </svg>
                  </a>
                  <a href="#" class="filter-filter-btn top-bar-ringt-btn">
                    <svg width="18" height="16" viewBox="0 0 18 16" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M14.3879 9.708C16.1039 9.708 17.4999 11.097 17.4999 12.804C17.4999 14.511 16.1039 15.9 14.3879 15.9C12.6709 15.9 11.2739 14.511 11.2739 12.804C11.2739 11.097 12.6709 9.708 14.3879 9.708ZM14.3879 11.208C13.4979 11.208 12.7739 11.924 12.7739 12.804C12.7739 13.685 13.4979 14.4 14.3879 14.4C15.2769 14.4 15.9999 13.685 15.9999 12.804C15.9999 11.924 15.2769 11.208 14.3879 11.208ZM7.0803 12.0928C7.4943 12.0928 7.8303 12.4288 7.8303 12.8428C7.8303 13.2568 7.4943 13.5928 7.0803 13.5928H0.7793C0.3653 13.5928 0.0293 13.2568 0.0293 12.8428C0.0293 12.4288 0.3653 12.0928 0.7793 12.0928H7.0803ZM3.113 0C4.83 0 6.226 1.39 6.226 3.097C6.226 4.804 4.83 6.192 3.113 6.192C1.397 6.192 0 4.804 0 3.097C0 1.39 1.397 0 3.113 0ZM3.113 1.5C2.224 1.5 1.5 2.216 1.5 3.097C1.5 3.977 2.224 4.692 3.113 4.692C4.003 4.692 4.726 3.977 4.726 3.097C4.726 2.216 4.003 1.5 3.113 1.5ZM16.1911 2.4004C16.6051 2.4004 16.9411 2.7364 16.9411 3.1504C16.9411 3.5644 16.6051 3.9004 16.1911 3.9004H9.8911C9.4771 3.9004 9.1411 3.5644 9.1411 3.1504C9.1411 2.7364 9.4771 2.4004 9.8911 2.4004H16.1911Z"
                            fill="#828282"/>
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
                <div class="tab-pane fade show active" id="one" role="tabpanel"
                     aria-labelledby="one-tab">
                  <div class="table-area-wrapper order-table-content">
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
                        <th class="order-id">
                          Order id
                        </th>
                        <th class="date-and-time">
                          Date & Time
                        </th>
                        <th class="customer">
                          Customer
                        </th>
                        <th class="area">
                          Area
                        </th>
                        <th class="item">
                          No. of Items
                        </th>
                        <th class="amount">
                          Order Amount
                        </th>
                        <th class="status">
                          Status
                        </th>
                        <th class="action">
                          Action
                        </th>
                      </tr>
                      </thead>

                      <tbody>
                      <tr class="pending-item">
                        <td class="sl-no">
                          <form action="/action_page.php">
                            <input type="checkbox" id="" name="" value="">
                          </form>
                          <span class="no-only">১</span>
                        </td>
                        <td class="order-id">
                          <span class="order-id-only">বপ১২৫৬৫৯৮৪৩</span>
                        </td>
                        <td class="date-and-time">
                          <span class="date">১৮/১০/২০২১</span>
                          <span class="time font-small">৫ মিনিট আগে </span>
                        </td>
                        <td class="customer">
                          <span class="cus-name">মের্সাস হালিমা স্টোর</span>
                          <span class="address font-small">আচরি মার্কেট , সড়ক ১২,
                                        সেক্টর ৩,
                                        উত্তরা, ঢাকা </span>
                          <span class="mob-no font-small">০১৫৬ ৯৩ ৬৯ ৫৩</span>
                        </td>
                        <td class="area">
                          <span class="area-only"> উত্তরা</span>
                        </td>
                        <td class="item">
                          <span class="item-only">১২</span>
                        </td>
                        <td class="amount">
                          <span class="amount-only">১২,৪৮৯.০০</span>
                        </td>
                        <td class="status">
                          <span class="status-btn pending">pending</span>
                        </td>
                        <td class="action">
                                    <span class="single-action-item">
                                        <a href="#" class="action-btn">
                                            <svg width="15" height="14" viewBox="0 0 14 12"
                                                 fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M3.61542 1.53845C3.61542 1.17123 3.7613 0.819049 4.02097 0.559384C4.28063 0.299718 4.63282 0.153839 5.00004 0.153839H9.61542C9.98265 0.153839 10.3348 0.299718 10.5945 0.559384C10.8542 0.819049 11 1.17123 11 1.53845V1.99999H11.9231C12.4127 1.99999 12.8823 2.1945 13.2285 2.54072C13.5748 2.88694 13.7693 3.35652 13.7693 3.84615V7.99999C13.7693 8.36722 13.6234 8.7194 13.3637 8.97906C13.1041 9.23873 12.7519 9.38461 12.3847 9.38461H11.0923V9.84615C11.0923 10.2134 10.9465 10.5656 10.6868 10.8252C10.4271 11.0849 10.075 11.2308 9.70773 11.2308H5.00004C4.63282 11.2308 4.28063 11.0849 4.02097 10.8252C3.7613 10.5656 3.61542 10.2134 3.61542 9.84615V9.38461H2.23081C1.86358 9.38461 1.5114 9.23873 1.25174 8.97906C0.99207 8.7194 0.846191 8.36722 0.846191 7.99999V3.84615C0.846191 3.35652 1.0407 2.88694 1.38692 2.54072C1.73314 2.1945 2.20271 1.99999 2.69235 1.99999H3.61542V1.53845ZM10.077 1.99999V1.53845C10.077 1.41605 10.0283 1.29865 9.94178 1.2121C9.85523 1.12554 9.73783 1.07692 9.61542 1.07692H5.00004C4.87763 1.07692 4.76024 1.12554 4.67368 1.2121C4.58713 1.29865 4.5385 1.41605 4.5385 1.53845V1.99999H10.077ZM3.61542 2.92307H2.69235C2.44753 2.92307 2.21274 3.02032 2.03963 3.19343C1.86652 3.36654 1.76927 3.60133 1.76927 3.84615V7.99999C1.76927 8.1224 1.81789 8.23979 1.90445 8.32635C1.99101 8.41291 2.1084 8.46153 2.23081 8.46153H3.61542V7.99999C3.61542 7.63277 3.7613 7.28059 4.02097 7.02092C4.28063 6.76126 4.63282 6.61538 5.00004 6.61538H9.70773C10.075 6.61538 10.4271 6.76126 10.6868 7.02092C10.9465 7.28059 11.0923 7.63277 11.0923 7.99999V8.46153H12.3847C12.5071 8.46153 12.6245 8.41291 12.711 8.32635C12.7976 8.23979 12.8462 8.1224 12.8462 7.99999V3.84615C12.8462 3.60133 12.7489 3.36654 12.5758 3.19343C12.4027 3.02032 12.1679 2.92307 11.9231 2.92307H3.61542ZM5.00004 7.53845C4.87763 7.53845 4.76024 7.58708 4.67368 7.67364C4.58713 7.76019 4.5385 7.87758 4.5385 7.99999V9.84615C4.5385 9.96855 4.58713 10.0859 4.67368 10.1725C4.76024 10.2591 4.87763 10.3077 5.00004 10.3077H9.70773C9.83014 10.3077 9.94753 10.2591 10.0341 10.1725C10.1206 10.0859 10.1693 9.96855 10.1693 9.84615V7.99999C10.1693 7.87758 10.1206 7.76019 10.0341 7.67364C9.94753 7.58708 9.83014 7.53845 9.70773 7.53845H5.00004Z"
                                                    fill="#828282"/>
                                            </svg>
                                        </a>
                                    </span>
                          <span class="single-action-item">
                                        <a href="#" class="action-btn" data-toggle="modal"
                                           data-target=".close-box">
                                            <svg width="11" height="12" viewBox="0 0 9 9"
                                                 fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M5.17538 4.69229L7.82154 2.05229C7.93742 1.93641 8.00252 1.77925 8.00252 1.61537C8.00252 1.45149 7.93742 1.29433 7.82154 1.17845C7.70566 1.06257 7.54849 0.997467 7.38462 0.997467C7.22074 0.997467 7.06357 1.06257 6.94769 1.17845L4.30769 3.8246L1.66769 1.17845C1.55181 1.06257 1.39465 0.997467 1.23077 0.997467C1.06689 0.997467 0.909725 1.06257 0.793846 1.17845C0.677967 1.29433 0.612867 1.45149 0.612867 1.61537C0.612867 1.77925 0.677967 1.93641 0.793846 2.05229L3.44 4.69229L0.793846 7.33229C0.736167 7.3895 0.690386 7.45756 0.659144 7.53255C0.627902 7.60754 0.611816 7.68798 0.611816 7.76922C0.611816 7.85045 0.627902 7.93089 0.659144 8.00588C0.690386 8.08087 0.736167 8.14893 0.793846 8.20614C0.851054 8.26382 0.919116 8.3096 0.994107 8.34084C1.0691 8.37208 1.14953 8.38817 1.23077 8.38817C1.31201 8.38817 1.39244 8.37208 1.46743 8.34084C1.54242 8.3096 1.61048 8.26382 1.66769 8.20614L4.30769 5.55999L6.94769 8.20614C7.0049 8.26382 7.07296 8.3096 7.14795 8.34084C7.22294 8.37208 7.30338 8.38817 7.38462 8.38817C7.46585 8.38817 7.54629 8.37208 7.62128 8.34084C7.69627 8.3096 7.76433 8.26382 7.82154 8.20614C7.87922 8.14893 7.925 8.08087 7.95624 8.00588C7.98748 7.93089 8.00357 7.85045 8.00357 7.76922C8.00357 7.68798 7.98748 7.60754 7.95624 7.53255C7.925 7.45756 7.87922 7.3895 7.82154 7.33229L5.17538 4.69229Z"
                                                    fill="#828282"/>
                                            </svg>
                                        </a>
                                        <div class="modal fade close-box" tabindex="-1"
                                             role="dialog" aria-hidden="true">
                                            <div class="modal-dialog modal-dialog-centered close-box-modal"
                                                 role="document">
                                                <div class="modal-content">
                                                    <!-- model content start -->
                                                    <div class="close-box-wrap">
                                                        <span class="top-close-sign"
                                                              data-dismiss="modal"
                                                              aria-label="Close">
                                                            <svg width="24" height="24"
                                                                 viewBox="0 0 24 24"
                                                                 fill="none"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M13.4099 12.0002L17.7099 7.71019C17.8982 7.52188 18.004 7.26649 18.004 7.00019C18.004 6.73388 17.8982 6.47849 17.7099 6.29019C17.5216 6.10188 17.2662 5.99609 16.9999 5.99609C16.7336 5.99609 16.4782 6.10188 16.2899 6.29019L11.9999 10.5902L7.70994 6.29019C7.52164 6.10188 7.26624 5.99609 6.99994 5.99609C6.73364 5.99609 6.47824 6.10188 6.28994 6.29019C6.10164 6.47849 5.99585 6.73388 5.99585 7.00019C5.99585 7.26649 6.10164 7.52188 6.28994 7.71019L10.5899 12.0002L6.28994 16.2902C6.19621 16.3831 6.12182 16.4937 6.07105 16.6156C6.02028 16.7375 5.99414 16.8682 5.99414 17.0002C5.99414 17.1322 6.02028 17.2629 6.07105 17.3848C6.12182 17.5066 6.19621 17.6172 6.28994 17.7102C6.3829 17.8039 6.4935 17.8783 6.61536 17.9291C6.73722 17.9798 6.86793 18.006 6.99994 18.006C7.13195 18.006 7.26266 17.9798 7.38452 17.9291C7.50638 17.8783 7.61698 17.8039 7.70994 17.7102L11.9999 13.4102L16.2899 17.7102C16.3829 17.8039 16.4935 17.8783 16.6154 17.9291C16.7372 17.9798 16.8679 18.006 16.9999 18.006C17.132 18.006 17.2627 17.9798 17.3845 17.9291C17.5064 17.8783 17.617 17.8039 17.7099 17.7102C17.8037 17.6172 17.8781 17.5066 17.9288 17.3848C17.9796 17.2629 18.0057 17.1322 18.0057 17.0002C18.0057 16.8682 17.9796 16.7375 17.9288 16.6156C17.8781 16.4937 17.8037 16.3831 17.7099 16.2902L13.4099 12.0002Z"
                                                                    fill="white"/>
                                                            </svg>
                                                        </span>
                                                        <div class="icon-box">
                                                            <svg width="138" height="126"
                                                                 viewBox="0 0 138 126"
                                                                 fill="none"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <g opacity="0.83"
                                                                   filter="url(#filter0_b_259_6489)">
                                                                    <path
                                                                        d="M129.121 46.458C129.121 88.6315 156.616 125.49 114.839 125.49C73.0616 125.49 5.33996 132.954 5.33996 90.78C5.33996 72.2635 -6.67485 36.3341 5.3398 20.851C20.69 1.06944 39.035 0 62.4697 0C104.247 0 119.6 3.738 129.121 46.458Z"
                                                                        fill="url(#paint0_radial_259_6489)"
                                                                        fill-opacity="0.5"/>
                                                                </g>
                                                                <g
                                                                    clip-path="url(#clip0_259_6489)">
                                                                    <path
                                                                        d="M98.8679 83.2284L79.4288 47.5216C77.9463 45.0723 75.3682 43.5898 72.5 43.5898C69.6318 43.5898 67.0537 45.0723 65.5712 47.5216L46.1321 83.2284C44.6499 85.7745 44.6176 88.8038 46.0679 91.3496C47.518 93.8954 50.1282 95.4102 53.0609 95.4102H91.939C94.8718 95.4102 97.4821 93.8954 98.9321 91.3496C100.382 88.8038 100.35 85.7745 98.8679 83.2284Z"
                                                                        fill="#495A79"/>
                                                                    <path
                                                                        d="M98.9321 91.3496C97.482 93.8954 94.8718 95.4102 91.9391 95.4102H72.5V43.5898C75.3682 43.5898 77.9463 45.0724 79.4288 47.5216L98.8679 83.2285C100.35 85.7745 100.382 88.8038 98.9321 91.3496Z"
                                                                        fill="#42516D"/>
                                                                    <path
                                                                        d="M96.0964 84.8721L76.6572 49.1649C75.7873 47.6826 74.2081 46.8125 72.5 46.8125C70.7919 46.8125 69.2128 47.6827 68.3429 49.1649L48.9036 84.8721C48.0014 86.3868 48.0014 88.2235 48.8716 89.7383C49.7416 91.285 51.3206 92.1875 53.0611 92.1875H91.9392C93.6796 92.1875 95.2587 91.285 96.1287 89.7383C96.9987 88.2235 96.9987 86.3868 96.0964 84.8721Z"
                                                                        fill="#FFDE33"/>
                                                                    <path
                                                                        d="M96.1285 89.7383C95.2585 91.285 93.6795 92.1875 91.9391 92.1875H72.5V46.8125C74.2081 46.8125 75.7872 47.6827 76.6571 49.1649L96.0964 84.8721C96.9986 86.3868 96.9986 88.2235 96.1285 89.7383Z"
                                                                        fill="#FFBC33"/>
                                                                    <path
                                                                        d="M72.5 88.9648C70.7235 88.9648 69.2773 87.5187 69.2773 85.7422C69.2773 83.9656 70.7235 82.5195 72.5 82.5195C74.2765 82.5195 75.7227 83.9656 75.7227 85.7422C75.7227 87.5187 74.2765 88.9648 72.5 88.9648Z"
                                                                        fill="#495A79"/>
                                                                    <path
                                                                        d="M75.7227 76.0742C75.7227 77.8508 74.2765 79.2969 72.5 79.2969C70.7235 79.2969 69.2773 77.8508 69.2773 76.0742V59.9609C69.2773 58.1844 70.7235 56.7383 72.5 56.7383C74.2765 56.7383 75.7227 58.1844 75.7227 59.9609V76.0742Z"
                                                                        fill="#495A79"/>
                                                                    <path
                                                                        d="M75.7227 85.7422C75.7227 83.9656 74.2765 82.5195 72.5 82.5195V88.9648C74.2765 88.9648 75.7227 87.5187 75.7227 85.7422Z"
                                                                        fill="#42516D"/>
                                                                    <path
                                                                        d="M75.7227 76.0742V59.9609C75.7227 58.1844 74.2765 56.7383 72.5 56.7383V79.2969C74.2765 79.2969 75.7227 77.8508 75.7227 76.0742Z"
                                                                        fill="#42516D"/>
                                                                </g>
                                                                <defs>
                                                                    <filter
                                                                        id="filter0_b_259_6489"
                                                                        x="-4" y="-4"
                                                                        width="146"
                                                                        height="134"
                                                                        filterUnits="userSpaceOnUse"
                                                                        color-interpolation-filters="sRGB">
                                                                        <feFlood
                                                                            flood-opacity="0"
                                                                            result="BackgroundImageFix"/>
                                                                        <feGaussianBlur
                                                                            in="BackgroundImage"
                                                                            stdDeviation="2"/>
                                                                        <feComposite
                                                                            in2="SourceAlpha"
                                                                            operator="in"
                                                                            result="effect1_backgroundBlur_259_6489"/>
                                                                        <feBlend
                                                                            mode="normal"
                                                                            in="SourceGraphic"
                                                                            in2="effect1_backgroundBlur_259_6489"
                                                                            result="shape"/>
                                                                    </filter>
                                                                    <radialGradient
                                                                        id="paint0_radial_259_6489"
                                                                        cx="0" cy="0" r="1"
                                                                        gradientUnits="userSpaceOnUse"
                                                                        gradientTransform="translate(74.9013 73.9565) rotate(22.5454) scale(57.4925 49.8949)">
                                                                        <stop
                                                                            stop-color="#FFBC33"/>
                                                                        <stop
                                                                            offset="0.64446"
                                                                            stop-color="#FDCD9D"
                                                                            stop-opacity="0.15"/>
                                                                        <stop offset="1"
                                                                              stop-color="#FCD7D7"
                                                                              stop-opacity="0"/>
                                                                    </radialGradient>
                                                                    <clipPath
                                                                        id="clip0_259_6489">
                                                                        <rect width="55"
                                                                              height="55"
                                                                              fill="white"
                                                                              transform="translate(45 42)"/>
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>
                                                        </div>
                                                        <div class="text-box">
                                                            <span class="text">Are you sure
                                                                you wan to
                                                                Cancel / Delete it?</span>
                                                        </div>
                                                        <div class="btn-box">
                                                            <span class="close-btn no"
                                                                  data-dismiss="modal">no</span>
                                                          <!-- class="btn btn-secondary" -->
                                                            <span
                                                                class="close-btn yes">Delete</span>
                                                        </div>
                                                    </div>
                                                  <!-- model content end -->
                                                </div>
                                            </div>
                                        </div>
                                    </span>
                          <span class="single-action-item">
                                        <a href="#" class="action-btn"
                                           data-toggle="dropdown" aria-expanded="false">
                                            <svg width="14" height="14" viewBox="0 0 13 13"
                                                 fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd"
                                                      clip-rule="evenodd"
                                                      d="M0.615479 6.69234C0.615479 2.42342 2.03886 1.00003 6.30779 1.00003C10.5767 1.00003 12.0001 2.42342 12.0001 6.69234C12.0001 10.9613 10.5767 12.3846 6.30779 12.3846C2.03886 12.3846 0.615479 10.9613 0.615479 6.69234Z"
                                                      stroke="#828282" stroke-linecap="round"
                                                      stroke-linejoin="round"/>
                                                <path d="M8.76538 6.69229H8.77092"
                                                      stroke="#828282" stroke-width="2"
                                                      stroke-linecap="round"
                                                      stroke-linejoin="round"/>
                                                <path d="M6.30444 6.69229H6.30998"
                                                      stroke="#828282" stroke-width="2"
                                                      stroke-linecap="round"
                                                      stroke-linejoin="round"/>
                                                <path d="M3.84351 6.69229H3.84904"
                                                      stroke="#828282" stroke-width="2"
                                                      stroke-linecap="round"
                                                      stroke-linejoin="round"/>
                                            </svg>
                                        </a>
                                        <div
                                            class="dropdown-menu dropdown-menu-right control">
                                            <div class="modal-control-02">
                                                <div class="modal-content">
                                                    <!-- modal content start -->
                                                    <div class="mini-modal-style-02">
                                                        <ul class="list">
                                                            <li class="list-item"
                                                                onclick="orderPopOpn()">
                                                                <span class="icon">
                                                                    <svg width="12"
                                                                         height="10"
                                                                         viewBox="0 0 12 10"
                                                                         fill="none"
                                                                         xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            fill-rule="evenodd"
                                                                            clip-rule="evenodd"
                                                                            d="M7.58217 5.02607C7.58217 5.89907 6.87417 6.60707 6.00117 6.60707C5.12817 6.60707 4.42017 5.89907 4.42017 5.02607C4.42017 4.15257 5.12817 3.44507 6.00117 3.44507C6.87417 3.44507 7.58217 4.15257 7.58217 5.02607Z"
                                                                            stroke="#828282"
                                                                            stroke-width="0.8"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round"/>
                                                                        <path
                                                                            fill-rule="evenodd"
                                                                            clip-rule="evenodd"
                                                                            d="M1.37524 5.02606C1.37524 6.66606 3.44624 8.67706 6.00124 8.67706C8.55575 8.67706 10.6272 6.66756 10.6272 5.02606C10.6272 3.38456 8.55575 1.37506 6.00124 1.37506C3.44624 1.37506 1.37524 3.38606 1.37524 5.02606Z"
                                                                            stroke="#828282"
                                                                            stroke-width="0.8"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round"/>
                                                                    </svg>
                                                                </span>
                                                                <span class="text">
                                                                    View Details
                                                                </span>
                                                            </li>
                                                            <li class="list-item">
                                                                <span class="icon">
                                                                    <svg width="10"
                                                                         height="9"
                                                                         viewBox="0 0 10 9"
                                                                         fill="none"
                                                                         xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            fill-rule="evenodd"
                                                                            clip-rule="evenodd"
                                                                            d="M4.8124 0.0146264C4.97876 0.0146264 5.11377 0.149639 5.11377 0.315994C5.11377 0.482349 4.97876 0.617362 4.8124 0.617362H3.30998C2.27167 0.617362 1.60103 1.32859 1.60103 2.42918V5.76995C1.60103 6.87054 2.27167 7.58177 3.30998 7.58177H6.85567C7.89399 7.58177 8.56503 6.87054 8.56503 5.76995V4.1514C8.56503 3.98505 8.70005 3.85003 8.8664 3.85003C9.03276 3.85003 9.16777 3.98505 9.16777 4.1514V5.76995C9.16777 7.2141 8.23835 8.18451 6.85567 8.18451H3.30998C1.92731 8.18451 0.998291 7.2141 0.998291 5.76995V2.42918C0.998291 0.985031 1.92731 0.0146264 3.30998 0.0146264H4.8124ZM8.31213 0.367669L8.80114 0.856688C9.03943 1.09457 9.17042 1.4108 9.17002 1.74753C9.17002 2.08426 9.03902 2.40009 8.80114 2.63757L5.78385 5.65486C5.56245 5.87627 5.26751 5.99842 4.95408 5.99842H3.44885C3.36768 5.99842 3.28973 5.96547 3.23307 5.90721C3.17642 5.84935 3.14548 5.77099 3.14749 5.68942L3.18526 4.17093C3.19289 3.86876 3.31464 3.58467 3.52841 3.3705H3.52882L6.53164 0.367669C7.02267 -0.122556 7.8211 -0.122556 8.31213 0.367669ZM6.28428 1.46706L3.95475 3.79683C3.85068 3.9009 3.79161 4.03913 3.78799 4.1858L3.75786 5.39569H4.95408C5.10678 5.39569 5.24983 5.33662 5.35792 5.22853L7.70151 2.88429L6.28428 1.46706ZM6.95758 0.794004L6.71021 1.04072L8.12745 2.45836L8.37521 2.21124C8.49897 2.08747 8.56728 1.92273 8.56728 1.74753C8.56728 1.57193 8.49897 1.40678 8.37521 1.28302L7.88619 0.794004C7.63023 0.538846 7.21394 0.538846 6.95758 0.794004Z"
                                                                            fill="#828282"/>
                                                                    </svg>
                                                                </span>
                                                                <span class="text">
                                                                    Order Edit
                                                                </span>
                                                            </li>
                                                            <li class="list-item">
                                                                <span class="icon">
                                                                    <svg width="12"
                                                                         height="12"
                                                                         viewBox="0 0 12 12"
                                                                         fill="none"
                                                                         xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M4.22021 6.00004L5.40722 7.18654L7.78022 4.81354"
                                                                            stroke="#828282"
                                                                            stroke-width="0.8"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round"/>
                                                                        <path
                                                                            fill-rule="evenodd"
                                                                            clip-rule="evenodd"
                                                                            d="M1.375 6.00006C1.375 9.46856 2.5315 10.6251 6 10.6251C9.4685 10.6251 10.625 9.46856 10.625 6.00006C10.625 2.53156 9.4685 1.37506 6 1.37506C2.5315 1.37506 1.375 2.53156 1.375 6.00006Z"
                                                                            stroke="#828282"
                                                                            stroke-width="0.8"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round"/>
                                                                    </svg>
                                                                </span>
                                                                <span class="text">
                                                                    Mark as Confirm
                                                                </span>
                                                            </li>
                                                            <li class="list-item">
                                                                <span class="icon">
                                                                    <svg width="10"
                                                                         height="12"
                                                                         viewBox="0 0 10 11"
                                                                         fill="none"
                                                                         xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M8.44472 4.77704C8.44472 8.78656 9.02186 10.5989 5.13996 10.5989C1.25757 10.5989 1.84662 8.78656 1.84662 4.77704"
                                                                            stroke="#828282"
                                                                            stroke-width="0.8"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round"/>
                                                                        <path
                                                                            d="M9.18266 3.23993H1.10742"
                                                                            stroke="#828282"
                                                                            stroke-width="0.8"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round"/>
                                                                        <path
                                                                            d="M6.85741 3.23991C6.85741 3.23991 7.1217 1.35706 5.14456 1.35706C3.16789 1.35706 3.43217 3.23991 3.43217 3.23991"
                                                                            stroke="#828282"
                                                                            stroke-width="0.8"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round"/>
                                                                    </svg>
                                                                </span>
                                                                <span
                                                                    class="text action-btn"
                                                                    data-toggle="modal"
                                                                    data-target=".close-box">
                                                                    Delete
                                                                </span>
                                                              <!-- delet box start -->
                                                                <div class="modal fade close-box"
                                                                     tabindex="-1"
                                                                     role="dialog"
                                                                     aria-hidden="true">
                                                                    <div
                                                                        class="modal-dialog modal-dialog-centered close-box-modal"
                                                                        role="document">
                                                                        <div
                                                                            class="modal-content">
                                                                            <!-- model content start -->
                                                                            <div
                                                                                class="close-box-wrap">
                                                                                <span
                                                                                    class="top-close-sign"
                                                                                    data-dismiss="modal"
                                                                                    aria-label="Close">
                                                                                    <svg width="24"
                                                                                         height="24"
                                                                                         viewBox="0 0 24 24"
                                                                                         fill="none"
                                                                                         xmlns="http://www.w3.org/2000/svg">
                                                                                        <path
                                                                                            d="M13.4099 12.0002L17.7099 7.71019C17.8982 7.52188 18.004 7.26649 18.004 7.00019C18.004 6.73388 17.8982 6.47849 17.7099 6.29019C17.5216 6.10188 17.2662 5.99609 16.9999 5.99609C16.7336 5.99609 16.4782 6.10188 16.2899 6.29019L11.9999 10.5902L7.70994 6.29019C7.52164 6.10188 7.26624 5.99609 6.99994 5.99609C6.73364 5.99609 6.47824 6.10188 6.28994 6.29019C6.10164 6.47849 5.99585 6.73388 5.99585 7.00019C5.99585 7.26649 6.10164 7.52188 6.28994 7.71019L10.5899 12.0002L6.28994 16.2902C6.19621 16.3831 6.12182 16.4937 6.07105 16.6156C6.02028 16.7375 5.99414 16.8682 5.99414 17.0002C5.99414 17.1322 6.02028 17.2629 6.07105 17.3848C6.12182 17.5066 6.19621 17.6172 6.28994 17.7102C6.3829 17.8039 6.4935 17.8783 6.61536 17.9291C6.73722 17.9798 6.86793 18.006 6.99994 18.006C7.13195 18.006 7.26266 17.9798 7.38452 17.9291C7.50638 17.8783 7.61698 17.8039 7.70994 17.7102L11.9999 13.4102L16.2899 17.7102C16.3829 17.8039 16.4935 17.8783 16.6154 17.9291C16.7372 17.9798 16.8679 18.006 16.9999 18.006C17.132 18.006 17.2627 17.9798 17.3845 17.9291C17.5064 17.8783 17.617 17.8039 17.7099 17.7102C17.8037 17.6172 17.8781 17.5066 17.9288 17.3848C17.9796 17.2629 18.0057 17.1322 18.0057 17.0002C18.0057 16.8682 17.9796 16.7375 17.9288 16.6156C17.8781 16.4937 17.8037 16.3831 17.7099 16.2902L13.4099 12.0002Z"
                                                                                            fill="white"/>
                                                                                    </svg>
                                                                                </span>
                                                                                <div
                                                                                    class="icon-box">
                                                                                    <svg width="138"
                                                                                         height="126"
                                                                                         viewBox="0 0 138 126"
                                                                                         fill="none"
                                                                                         xmlns="http://www.w3.org/2000/svg">
                                                                                        <g opacity="0.83"
                                                                                           filter="url(#filter0_b_259_6489)">
                                                                                            <path
                                                                                                d="M129.121 46.458C129.121 88.6315 156.616 125.49 114.839 125.49C73.0616 125.49 5.33996 132.954 5.33996 90.78C5.33996 72.2635 -6.67485 36.3341 5.3398 20.851C20.69 1.06944 39.035 0 62.4697 0C104.247 0 119.6 3.738 129.121 46.458Z"
                                                                                                fill="url(#paint0_radial_259_6489)"
                                                                                                fill-opacity="0.5"/>
                                                                                        </g>
                                                                                        <g
                                                                                            clip-path="url(#clip0_259_6489)">
                                                                                            <path
                                                                                                d="M98.8679 83.2284L79.4288 47.5216C77.9463 45.0723 75.3682 43.5898 72.5 43.5898C69.6318 43.5898 67.0537 45.0723 65.5712 47.5216L46.1321 83.2284C44.6499 85.7745 44.6176 88.8038 46.0679 91.3496C47.518 93.8954 50.1282 95.4102 53.0609 95.4102H91.939C94.8718 95.4102 97.4821 93.8954 98.9321 91.3496C100.382 88.8038 100.35 85.7745 98.8679 83.2284Z"
                                                                                                fill="#495A79"/>
                                                                                            <path
                                                                                                d="M98.9321 91.3496C97.482 93.8954 94.8718 95.4102 91.9391 95.4102H72.5V43.5898C75.3682 43.5898 77.9463 45.0724 79.4288 47.5216L98.8679 83.2285C100.35 85.7745 100.382 88.8038 98.9321 91.3496Z"
                                                                                                fill="#42516D"/>
                                                                                            <path
                                                                                                d="M96.0964 84.8721L76.6572 49.1649C75.7873 47.6826 74.2081 46.8125 72.5 46.8125C70.7919 46.8125 69.2128 47.6827 68.3429 49.1649L48.9036 84.8721C48.0014 86.3868 48.0014 88.2235 48.8716 89.7383C49.7416 91.285 51.3206 92.1875 53.0611 92.1875H91.9392C93.6796 92.1875 95.2587 91.285 96.1287 89.7383C96.9987 88.2235 96.9987 86.3868 96.0964 84.8721Z"
                                                                                                fill="#FFDE33"/>
                                                                                            <path
                                                                                                d="M96.1285 89.7383C95.2585 91.285 93.6795 92.1875 91.9391 92.1875H72.5V46.8125C74.2081 46.8125 75.7872 47.6827 76.6571 49.1649L96.0964 84.8721C96.9986 86.3868 96.9986 88.2235 96.1285 89.7383Z"
                                                                                                fill="#FFBC33"/>
                                                                                            <path
                                                                                                d="M72.5 88.9648C70.7235 88.9648 69.2773 87.5187 69.2773 85.7422C69.2773 83.9656 70.7235 82.5195 72.5 82.5195C74.2765 82.5195 75.7227 83.9656 75.7227 85.7422C75.7227 87.5187 74.2765 88.9648 72.5 88.9648Z"
                                                                                                fill="#495A79"/>
                                                                                            <path
                                                                                                d="M75.7227 76.0742C75.7227 77.8508 74.2765 79.2969 72.5 79.2969C70.7235 79.2969 69.2773 77.8508 69.2773 76.0742V59.9609C69.2773 58.1844 70.7235 56.7383 72.5 56.7383C74.2765 56.7383 75.7227 58.1844 75.7227 59.9609V76.0742Z"
                                                                                                fill="#495A79"/>
                                                                                            <path
                                                                                                d="M75.7227 85.7422C75.7227 83.9656 74.2765 82.5195 72.5 82.5195V88.9648C74.2765 88.9648 75.7227 87.5187 75.7227 85.7422Z"
                                                                                                fill="#42516D"/>
                                                                                            <path
                                                                                                d="M75.7227 76.0742V59.9609C75.7227 58.1844 74.2765 56.7383 72.5 56.7383V79.2969C74.2765 79.2969 75.7227 77.8508 75.7227 76.0742Z"
                                                                                                fill="#42516D"/>
                                                                                        </g>
                                                                                        <defs>
                                                                                            <filter
                                                                                                id="filter0_b_259_6489"
                                                                                                x="-4"
                                                                                                y="-4"
                                                                                                width="146"
                                                                                                height="134"
                                                                                                filterUnits="userSpaceOnUse"
                                                                                                color-interpolation-filters="sRGB">
                                                                                                <feFlood
                                                                                                    flood-opacity="0"
                                                                                                    result="BackgroundImageFix"/>
                                                                                                <feGaussianBlur
                                                                                                    in="BackgroundImage"
                                                                                                    stdDeviation="2"/>
                                                                                                <feComposite
                                                                                                    in2="SourceAlpha"
                                                                                                    operator="in"
                                                                                                    result="effect1_backgroundBlur_259_6489"/>
                                                                                                <feBlend
                                                                                                    mode="normal"
                                                                                                    in="SourceGraphic"
                                                                                                    in2="effect1_backgroundBlur_259_6489"
                                                                                                    result="shape"/>
                                                                                            </filter>
                                                                                            <radialGradient
                                                                                                id="paint0_radial_259_6489"
                                                                                                cx="0"
                                                                                                cy="0"
                                                                                                r="1"
                                                                                                gradientUnits="userSpaceOnUse"
                                                                                                gradientTransform="translate(74.9013 73.9565) rotate(22.5454) scale(57.4925 49.8949)">
                                                                                                <stop
                                                                                                    stop-color="#FFBC33"/>
                                                                                                <stop
                                                                                                    offset="0.64446"
                                                                                                    stop-color="#FDCD9D"
                                                                                                    stop-opacity="0.15"/>
                                                                                                <stop
                                                                                                    offset="1"
                                                                                                    stop-color="#FCD7D7"
                                                                                                    stop-opacity="0"/>
                                                                                            </radialGradient>
                                                                                            <clipPath
                                                                                                id="clip0_259_6489">
                                                                                                <rect
                                                                                                    width="55"
                                                                                                    height="55"
                                                                                                    fill="white"
                                                                                                    transform="translate(45 42)"/>
                                                                                            </clipPath>
                                                                                        </defs>
                                                                                    </svg>
                                                                                </div>
                                                                                <div
                                                                                    class="text-box">
                                                                                    <span
                                                                                        class="text">Are
                                                                                        you
                                                                                        sure
                                                                                        you
                                                                                        wan
                                                                                        to
                                                                                        Cancel
                                                                                        /
                                                                                        Delete
                                                                                        it?</span>
                                                                                </div>
                                                                                <div
                                                                                    class="btn-box">
                                                                                    <span
                                                                                        class="close-btn no"
                                                                                        data-dismiss="modal">no</span>
                                                                                  <!-- class="btn btn-secondary" -->
                                                                                    <span
                                                                                        class="close-btn yes">Delete</span>
                                                                                </div>
                                                                            </div>
                                                                          <!-- model content end -->
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                              <!-- delet box end -->
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
                      <tr class="confirmed">
                        <td class="sl-no">
                          <form action="/action_page.php">
                            <input type="checkbox" id="" name="" value="">
                          </form>
                          <span class="no-only">১</span>
                        </td>
                        <td class="order-id">
                          <span class="order-id-only">বপ১২৫৬৫৯৮৪৩</span>
                        </td>
                        <td class="date-and-time">
                          <span class="date">১৮/১০/২০২১</span>
                          <span class="time font-small">৫ মিনিট আগে </span>
                        </td>
                        <td class="customer">
                          <span class="cus-name">মের্সাস হালিমা স্টোর</span>
                          <span class="address font-small">আচরি মার্কেট , সড়ক ১২,
                                        সেক্টর ৩,
                                        উত্তরা, ঢাকা </span>
                          <span class="mob-no font-small">০১৫৬ ৯৩ ৬৯ ৫৩</span>
                        </td>
                        <td class="area">
                          <span class="area-only"> উত্তরা</span>
                        </td>
                        <td class="item">
                          <span class="item-only">১২</span>
                        </td>
                        <td class="amount">
                          <span class="amount-only">১২,৪৮৯.০০</span>
                        </td>
                        <td class="status">
                          <span class="status-btn confirmed">Confirmed</span>
                        </td>
                        <td class="action">
                                    <span class="single-action-item">
                                        <a href="#" class="action-btn">
                                            <svg width="15" height="14" viewBox="0 0 14 12"
                                                 fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M3.61542 1.53845C3.61542 1.17123 3.7613 0.819049 4.02097 0.559384C4.28063 0.299718 4.63282 0.153839 5.00004 0.153839H9.61542C9.98265 0.153839 10.3348 0.299718 10.5945 0.559384C10.8542 0.819049 11 1.17123 11 1.53845V1.99999H11.9231C12.4127 1.99999 12.8823 2.1945 13.2285 2.54072C13.5748 2.88694 13.7693 3.35652 13.7693 3.84615V7.99999C13.7693 8.36722 13.6234 8.7194 13.3637 8.97906C13.1041 9.23873 12.7519 9.38461 12.3847 9.38461H11.0923V9.84615C11.0923 10.2134 10.9465 10.5656 10.6868 10.8252C10.4271 11.0849 10.075 11.2308 9.70773 11.2308H5.00004C4.63282 11.2308 4.28063 11.0849 4.02097 10.8252C3.7613 10.5656 3.61542 10.2134 3.61542 9.84615V9.38461H2.23081C1.86358 9.38461 1.5114 9.23873 1.25174 8.97906C0.99207 8.7194 0.846191 8.36722 0.846191 7.99999V3.84615C0.846191 3.35652 1.0407 2.88694 1.38692 2.54072C1.73314 2.1945 2.20271 1.99999 2.69235 1.99999H3.61542V1.53845ZM10.077 1.99999V1.53845C10.077 1.41605 10.0283 1.29865 9.94178 1.2121C9.85523 1.12554 9.73783 1.07692 9.61542 1.07692H5.00004C4.87763 1.07692 4.76024 1.12554 4.67368 1.2121C4.58713 1.29865 4.5385 1.41605 4.5385 1.53845V1.99999H10.077ZM3.61542 2.92307H2.69235C2.44753 2.92307 2.21274 3.02032 2.03963 3.19343C1.86652 3.36654 1.76927 3.60133 1.76927 3.84615V7.99999C1.76927 8.1224 1.81789 8.23979 1.90445 8.32635C1.99101 8.41291 2.1084 8.46153 2.23081 8.46153H3.61542V7.99999C3.61542 7.63277 3.7613 7.28059 4.02097 7.02092C4.28063 6.76126 4.63282 6.61538 5.00004 6.61538H9.70773C10.075 6.61538 10.4271 6.76126 10.6868 7.02092C10.9465 7.28059 11.0923 7.63277 11.0923 7.99999V8.46153H12.3847C12.5071 8.46153 12.6245 8.41291 12.711 8.32635C12.7976 8.23979 12.8462 8.1224 12.8462 7.99999V3.84615C12.8462 3.60133 12.7489 3.36654 12.5758 3.19343C12.4027 3.02032 12.1679 2.92307 11.9231 2.92307H3.61542ZM5.00004 7.53845C4.87763 7.53845 4.76024 7.58708 4.67368 7.67364C4.58713 7.76019 4.5385 7.87758 4.5385 7.99999V9.84615C4.5385 9.96855 4.58713 10.0859 4.67368 10.1725C4.76024 10.2591 4.87763 10.3077 5.00004 10.3077H9.70773C9.83014 10.3077 9.94753 10.2591 10.0341 10.1725C10.1206 10.0859 10.1693 9.96855 10.1693 9.84615V7.99999C10.1693 7.87758 10.1206 7.76019 10.0341 7.67364C9.94753 7.58708 9.83014 7.53845 9.70773 7.53845H5.00004Z"
                                                    fill="#828282"/>
                                            </svg>
                                        </a>
                                    </span>
                          <span class="single-action-item">
                                        <a href="#" class="action-btn" data-toggle="modal"
                                           data-target=".close-box">
                                            <svg width="11" height="12" viewBox="0 0 9 9"
                                                 fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M5.17538 4.69229L7.82154 2.05229C7.93742 1.93641 8.00252 1.77925 8.00252 1.61537C8.00252 1.45149 7.93742 1.29433 7.82154 1.17845C7.70566 1.06257 7.54849 0.997467 7.38462 0.997467C7.22074 0.997467 7.06357 1.06257 6.94769 1.17845L4.30769 3.8246L1.66769 1.17845C1.55181 1.06257 1.39465 0.997467 1.23077 0.997467C1.06689 0.997467 0.909725 1.06257 0.793846 1.17845C0.677967 1.29433 0.612867 1.45149 0.612867 1.61537C0.612867 1.77925 0.677967 1.93641 0.793846 2.05229L3.44 4.69229L0.793846 7.33229C0.736167 7.3895 0.690386 7.45756 0.659144 7.53255C0.627902 7.60754 0.611816 7.68798 0.611816 7.76922C0.611816 7.85045 0.627902 7.93089 0.659144 8.00588C0.690386 8.08087 0.736167 8.14893 0.793846 8.20614C0.851054 8.26382 0.919116 8.3096 0.994107 8.34084C1.0691 8.37208 1.14953 8.38817 1.23077 8.38817C1.31201 8.38817 1.39244 8.37208 1.46743 8.34084C1.54242 8.3096 1.61048 8.26382 1.66769 8.20614L4.30769 5.55999L6.94769 8.20614C7.0049 8.26382 7.07296 8.3096 7.14795 8.34084C7.22294 8.37208 7.30338 8.38817 7.38462 8.38817C7.46585 8.38817 7.54629 8.37208 7.62128 8.34084C7.69627 8.3096 7.76433 8.26382 7.82154 8.20614C7.87922 8.14893 7.925 8.08087 7.95624 8.00588C7.98748 7.93089 8.00357 7.85045 8.00357 7.76922C8.00357 7.68798 7.98748 7.60754 7.95624 7.53255C7.925 7.45756 7.87922 7.3895 7.82154 7.33229L5.17538 4.69229Z"
                                                    fill="#828282"/>
                                            </svg>
                                        </a>
                                        <div class="modal fade close-box" tabindex="-1"
                                             role="dialog" aria-hidden="true">
                                            <div class="modal-dialog modal-dialog-centered close-box-modal"
                                                 role="document">
                                                <div class="modal-content">
                                                    <!-- model content start -->
                                                    <div class="close-box-wrap">
                                                        <span class="top-close-sign"
                                                              data-dismiss="modal"
                                                              aria-label="Close">
                                                            <svg width="24" height="24"
                                                                 viewBox="0 0 24 24"
                                                                 fill="none"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M13.4099 12.0002L17.7099 7.71019C17.8982 7.52188 18.004 7.26649 18.004 7.00019C18.004 6.73388 17.8982 6.47849 17.7099 6.29019C17.5216 6.10188 17.2662 5.99609 16.9999 5.99609C16.7336 5.99609 16.4782 6.10188 16.2899 6.29019L11.9999 10.5902L7.70994 6.29019C7.52164 6.10188 7.26624 5.99609 6.99994 5.99609C6.73364 5.99609 6.47824 6.10188 6.28994 6.29019C6.10164 6.47849 5.99585 6.73388 5.99585 7.00019C5.99585 7.26649 6.10164 7.52188 6.28994 7.71019L10.5899 12.0002L6.28994 16.2902C6.19621 16.3831 6.12182 16.4937 6.07105 16.6156C6.02028 16.7375 5.99414 16.8682 5.99414 17.0002C5.99414 17.1322 6.02028 17.2629 6.07105 17.3848C6.12182 17.5066 6.19621 17.6172 6.28994 17.7102C6.3829 17.8039 6.4935 17.8783 6.61536 17.9291C6.73722 17.9798 6.86793 18.006 6.99994 18.006C7.13195 18.006 7.26266 17.9798 7.38452 17.9291C7.50638 17.8783 7.61698 17.8039 7.70994 17.7102L11.9999 13.4102L16.2899 17.7102C16.3829 17.8039 16.4935 17.8783 16.6154 17.9291C16.7372 17.9798 16.8679 18.006 16.9999 18.006C17.132 18.006 17.2627 17.9798 17.3845 17.9291C17.5064 17.8783 17.617 17.8039 17.7099 17.7102C17.8037 17.6172 17.8781 17.5066 17.9288 17.3848C17.9796 17.2629 18.0057 17.1322 18.0057 17.0002C18.0057 16.8682 17.9796 16.7375 17.9288 16.6156C17.8781 16.4937 17.8037 16.3831 17.7099 16.2902L13.4099 12.0002Z"
                                                                    fill="white"/>
                                                            </svg>
                                                        </span>
                                                        <div class="icon-box">
                                                            <svg width="138" height="126"
                                                                 viewBox="0 0 138 126"
                                                                 fill="none"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <g opacity="0.83"
                                                                   filter="url(#filter0_b_259_6489)">
                                                                    <path
                                                                        d="M129.121 46.458C129.121 88.6315 156.616 125.49 114.839 125.49C73.0616 125.49 5.33996 132.954 5.33996 90.78C5.33996 72.2635 -6.67485 36.3341 5.3398 20.851C20.69 1.06944 39.035 0 62.4697 0C104.247 0 119.6 3.738 129.121 46.458Z"
                                                                        fill="url(#paint0_radial_259_6489)"
                                                                        fill-opacity="0.5"/>
                                                                </g>
                                                                <g
                                                                    clip-path="url(#clip0_259_6489)">
                                                                    <path
                                                                        d="M98.8679 83.2284L79.4288 47.5216C77.9463 45.0723 75.3682 43.5898 72.5 43.5898C69.6318 43.5898 67.0537 45.0723 65.5712 47.5216L46.1321 83.2284C44.6499 85.7745 44.6176 88.8038 46.0679 91.3496C47.518 93.8954 50.1282 95.4102 53.0609 95.4102H91.939C94.8718 95.4102 97.4821 93.8954 98.9321 91.3496C100.382 88.8038 100.35 85.7745 98.8679 83.2284Z"
                                                                        fill="#495A79"/>
                                                                    <path
                                                                        d="M98.9321 91.3496C97.482 93.8954 94.8718 95.4102 91.9391 95.4102H72.5V43.5898C75.3682 43.5898 77.9463 45.0724 79.4288 47.5216L98.8679 83.2285C100.35 85.7745 100.382 88.8038 98.9321 91.3496Z"
                                                                        fill="#42516D"/>
                                                                    <path
                                                                        d="M96.0964 84.8721L76.6572 49.1649C75.7873 47.6826 74.2081 46.8125 72.5 46.8125C70.7919 46.8125 69.2128 47.6827 68.3429 49.1649L48.9036 84.8721C48.0014 86.3868 48.0014 88.2235 48.8716 89.7383C49.7416 91.285 51.3206 92.1875 53.0611 92.1875H91.9392C93.6796 92.1875 95.2587 91.285 96.1287 89.7383C96.9987 88.2235 96.9987 86.3868 96.0964 84.8721Z"
                                                                        fill="#FFDE33"/>
                                                                    <path
                                                                        d="M96.1285 89.7383C95.2585 91.285 93.6795 92.1875 91.9391 92.1875H72.5V46.8125C74.2081 46.8125 75.7872 47.6827 76.6571 49.1649L96.0964 84.8721C96.9986 86.3868 96.9986 88.2235 96.1285 89.7383Z"
                                                                        fill="#FFBC33"/>
                                                                    <path
                                                                        d="M72.5 88.9648C70.7235 88.9648 69.2773 87.5187 69.2773 85.7422C69.2773 83.9656 70.7235 82.5195 72.5 82.5195C74.2765 82.5195 75.7227 83.9656 75.7227 85.7422C75.7227 87.5187 74.2765 88.9648 72.5 88.9648Z"
                                                                        fill="#495A79"/>
                                                                    <path
                                                                        d="M75.7227 76.0742C75.7227 77.8508 74.2765 79.2969 72.5 79.2969C70.7235 79.2969 69.2773 77.8508 69.2773 76.0742V59.9609C69.2773 58.1844 70.7235 56.7383 72.5 56.7383C74.2765 56.7383 75.7227 58.1844 75.7227 59.9609V76.0742Z"
                                                                        fill="#495A79"/>
                                                                    <path
                                                                        d="M75.7227 85.7422C75.7227 83.9656 74.2765 82.5195 72.5 82.5195V88.9648C74.2765 88.9648 75.7227 87.5187 75.7227 85.7422Z"
                                                                        fill="#42516D"/>
                                                                    <path
                                                                        d="M75.7227 76.0742V59.9609C75.7227 58.1844 74.2765 56.7383 72.5 56.7383V79.2969C74.2765 79.2969 75.7227 77.8508 75.7227 76.0742Z"
                                                                        fill="#42516D"/>
                                                                </g>
                                                                <defs>
                                                                    <filter
                                                                        id="filter0_b_259_6489"
                                                                        x="-4" y="-4"
                                                                        width="146"
                                                                        height="134"
                                                                        filterUnits="userSpaceOnUse"
                                                                        color-interpolation-filters="sRGB">
                                                                        <feFlood
                                                                            flood-opacity="0"
                                                                            result="BackgroundImageFix"/>
                                                                        <feGaussianBlur
                                                                            in="BackgroundImage"
                                                                            stdDeviation="2"/>
                                                                        <feComposite
                                                                            in2="SourceAlpha"
                                                                            operator="in"
                                                                            result="effect1_backgroundBlur_259_6489"/>
                                                                        <feBlend
                                                                            mode="normal"
                                                                            in="SourceGraphic"
                                                                            in2="effect1_backgroundBlur_259_6489"
                                                                            result="shape"/>
                                                                    </filter>
                                                                    <radialGradient
                                                                        id="paint0_radial_259_6489"
                                                                        cx="0" cy="0" r="1"
                                                                        gradientUnits="userSpaceOnUse"
                                                                        gradientTransform="translate(74.9013 73.9565) rotate(22.5454) scale(57.4925 49.8949)">
                                                                        <stop
                                                                            stop-color="#FFBC33"/>
                                                                        <stop
                                                                            offset="0.64446"
                                                                            stop-color="#FDCD9D"
                                                                            stop-opacity="0.15"/>
                                                                        <stop offset="1"
                                                                              stop-color="#FCD7D7"
                                                                              stop-opacity="0"/>
                                                                    </radialGradient>
                                                                    <clipPath
                                                                        id="clip0_259_6489">
                                                                        <rect width="55"
                                                                              height="55"
                                                                              fill="white"
                                                                              transform="translate(45 42)"/>
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>
                                                        </div>
                                                        <div class="text-box">
                                                            <span class="text">Are you sure
                                                                you wan to
                                                                Cancel / Delete it?</span>
                                                        </div>
                                                        <div class="btn-box">
                                                            <span class="close-btn no"
                                                                  data-dismiss="modal">no</span>
                                                          <!-- class="btn btn-secondary" -->
                                                            <span
                                                                class="close-btn yes">Delete</span>
                                                        </div>
                                                    </div>
                                                  <!-- model content end -->
                                                </div>
                                            </div>
                                        </div>
                                    </span>
                          <span class="single-action-item">
                                        <a href="#" class="action-btn"
                                           data-toggle="dropdown" aria-expanded="false">
                                            <svg width="14" height="14" viewBox="0 0 13 13"
                                                 fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd"
                                                      clip-rule="evenodd"
                                                      d="M0.615479 6.69234C0.615479 2.42342 2.03886 1.00003 6.30779 1.00003C10.5767 1.00003 12.0001 2.42342 12.0001 6.69234C12.0001 10.9613 10.5767 12.3846 6.30779 12.3846C2.03886 12.3846 0.615479 10.9613 0.615479 6.69234Z"
                                                      stroke="#828282" stroke-linecap="round"
                                                      stroke-linejoin="round"/>
                                                <path d="M8.76538 6.69229H8.77092"
                                                      stroke="#828282" stroke-width="2"
                                                      stroke-linecap="round"
                                                      stroke-linejoin="round"/>
                                                <path d="M6.30444 6.69229H6.30998"
                                                      stroke="#828282" stroke-width="2"
                                                      stroke-linecap="round"
                                                      stroke-linejoin="round"/>
                                                <path d="M3.84351 6.69229H3.84904"
                                                      stroke="#828282" stroke-width="2"
                                                      stroke-linecap="round"
                                                      stroke-linejoin="round"/>
                                            </svg>
                                        </a>
                                        <div
                                            class="dropdown-menu dropdown-menu-right control">
                                            <div class="modal-control-02">
                                                <div class="modal-content">
                                                    <!-- modal content start -->
                                                    <div class="mini-modal-style-02">
                                                        <ul class="list">
                                                            <li class="list-item">
                                                                <span class="icon">
                                                                    <svg width="12"
                                                                         height="10"
                                                                         viewBox="0 0 12 10"
                                                                         fill="none"
                                                                         xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            fill-rule="evenodd"
                                                                            clip-rule="evenodd"
                                                                            d="M7.58217 5.02607C7.58217 5.89907 6.87417 6.60707 6.00117 6.60707C5.12817 6.60707 4.42017 5.89907 4.42017 5.02607C4.42017 4.15257 5.12817 3.44507 6.00117 3.44507C6.87417 3.44507 7.58217 4.15257 7.58217 5.02607Z"
                                                                            stroke="#828282"
                                                                            stroke-width="0.8"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round"/>
                                                                        <path
                                                                            fill-rule="evenodd"
                                                                            clip-rule="evenodd"
                                                                            d="M1.37524 5.02606C1.37524 6.66606 3.44624 8.67706 6.00124 8.67706C8.55575 8.67706 10.6272 6.66756 10.6272 5.02606C10.6272 3.38456 8.55575 1.37506 6.00124 1.37506C3.44624 1.37506 1.37524 3.38606 1.37524 5.02606Z"
                                                                            stroke="#828282"
                                                                            stroke-width="0.8"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round"/>
                                                                    </svg>
                                                                </span>
                                                                <span class="text"
                                                                      onclick="orderPopOpn()">
                                                                    View Details
                                                                </span>
                                                            </li>
                                                            <li class="list-item">
                                                                <span class="icon">
                                                                    <svg width="10"
                                                                         height="9"
                                                                         viewBox="0 0 10 9"
                                                                         fill="none"
                                                                         xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            fill-rule="evenodd"
                                                                            clip-rule="evenodd"
                                                                            d="M4.8124 0.0146264C4.97876 0.0146264 5.11377 0.149639 5.11377 0.315994C5.11377 0.482349 4.97876 0.617362 4.8124 0.617362H3.30998C2.27167 0.617362 1.60103 1.32859 1.60103 2.42918V5.76995C1.60103 6.87054 2.27167 7.58177 3.30998 7.58177H6.85567C7.89399 7.58177 8.56503 6.87054 8.56503 5.76995V4.1514C8.56503 3.98505 8.70005 3.85003 8.8664 3.85003C9.03276 3.85003 9.16777 3.98505 9.16777 4.1514V5.76995C9.16777 7.2141 8.23835 8.18451 6.85567 8.18451H3.30998C1.92731 8.18451 0.998291 7.2141 0.998291 5.76995V2.42918C0.998291 0.985031 1.92731 0.0146264 3.30998 0.0146264H4.8124ZM8.31213 0.367669L8.80114 0.856688C9.03943 1.09457 9.17042 1.4108 9.17002 1.74753C9.17002 2.08426 9.03902 2.40009 8.80114 2.63757L5.78385 5.65486C5.56245 5.87627 5.26751 5.99842 4.95408 5.99842H3.44885C3.36768 5.99842 3.28973 5.96547 3.23307 5.90721C3.17642 5.84935 3.14548 5.77099 3.14749 5.68942L3.18526 4.17093C3.19289 3.86876 3.31464 3.58467 3.52841 3.3705H3.52882L6.53164 0.367669C7.02267 -0.122556 7.8211 -0.122556 8.31213 0.367669ZM6.28428 1.46706L3.95475 3.79683C3.85068 3.9009 3.79161 4.03913 3.78799 4.1858L3.75786 5.39569H4.95408C5.10678 5.39569 5.24983 5.33662 5.35792 5.22853L7.70151 2.88429L6.28428 1.46706ZM6.95758 0.794004L6.71021 1.04072L8.12745 2.45836L8.37521 2.21124C8.49897 2.08747 8.56728 1.92273 8.56728 1.74753C8.56728 1.57193 8.49897 1.40678 8.37521 1.28302L7.88619 0.794004C7.63023 0.538846 7.21394 0.538846 6.95758 0.794004Z"
                                                                            fill="#828282"/>
                                                                    </svg>
                                                                </span>
                                                                <span class="text">
                                                                    Order Edit
                                                                </span>
                                                            </li>
                                                            <li class="list-item">
                                                                <span class="icon">
                                                                    <svg width="12"
                                                                         height="12"
                                                                         viewBox="0 0 12 12"
                                                                         fill="none"
                                                                         xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M4.22021 6.00004L5.40722 7.18654L7.78022 4.81354"
                                                                            stroke="#828282"
                                                                            stroke-width="0.8"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round"/>
                                                                        <path
                                                                            fill-rule="evenodd"
                                                                            clip-rule="evenodd"
                                                                            d="M1.375 6.00006C1.375 9.46856 2.5315 10.6251 6 10.6251C9.4685 10.6251 10.625 9.46856 10.625 6.00006C10.625 2.53156 9.4685 1.37506 6 1.37506C2.5315 1.37506 1.375 2.53156 1.375 6.00006Z"
                                                                            stroke="#828282"
                                                                            stroke-width="0.8"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round"/>
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
                          <svg width="5" height="8" viewBox="0 0 5 8" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M3.90811 7.33334C3.73344 7.33334 3.55944 7.26534 3.42878 7.13L0.853441 4.46334C0.601441 4.20134 0.604775 3.786 0.862108 3.52867L3.52878 0.862004C3.78878 0.601337 4.21078 0.601337 4.47144 0.862004C4.73144 1.12267 4.73144 1.544 4.47144 1.80467L2.26811 4.008L4.38744 6.20334C4.64344 6.46867 4.63611 6.89067 4.37144 7.146C4.24144 7.27134 4.07478 7.33334 3.90811 7.33334Z"
                                  fill="#E0E0E0"/>
                          </svg>
                        </a>
                        <a href="#" class="page-pagination">
                          <svg width="5" height="8" viewBox="0 0 5 8" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M1.00009 7.33333C0.829419 7.33333 0.658752 7.26799 0.528752 7.13799C0.268085 6.87733 0.268085 6.45599 0.528752 6.19533L2.73209 3.99199L0.612085 1.79666C0.356752 1.53133 0.364085 1.10933 0.628752 0.853993C0.894085 0.59866 1.31609 0.605993 1.57142 0.869993L4.14609 3.53666C4.39875 3.79866 4.39542 4.21399 4.13809 4.47133L1.47142 7.13799C1.34142 7.26799 1.17075 7.33333 1.00009 7.33333Z"
                                  fill="#E0E0E0"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="tab-pane fade" id="two" role="tabpanel" aria-labelledby="two-tab">
                  <div class="table-area-wrapper order-table-content">
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
                        <th class="order-id">
                          Order id
                        </th>
                        <th class="date-and-time">
                          Delivery Date
                        </th>
                        <th class="customer">
                          Customer
                        </th>
                        <th class="area">
                          Area
                        </th>
                        <th class="item">
                          No. of Items
                        </th>
                        <th class="amount">
                          Payment
                        </th>
                        <th class="status">
                          Status
                        </th>
                        <th class="action">
                          Action
                        </th>
                      </tr>
                      </thead>

                      <tbody>
                      <tr class="successull-order">
                        <td class="sl-no">
                          <form action="/action_page.php">
                            <input type="checkbox" id="" name="" value="">
                          </form>
                          <span class="no-only">১</span>
                        </td>
                        <td class="order-id">
                          <span class="order-id-only">বপ১২৫৬৫৯৮৪৩</span>
                        </td>
                        <td class="date-and-time">
                          <span class="date">১৮/১০/২০২১</span>
                        </td>
                        <td class="customer">
                          <span class="cus-name">মের্সাস হালিমা স্টোর</span>
                          <span class="address font-small">আচরি মার্কেট , সড়ক ১২,
                                        সেক্টর ৩,
                                        উত্তরা, ঢাকা </span>
                          <span class="mob-no font-small">০১৫৬ ৯৩ ৬৯ ৫৩</span>
                        </td>
                        <td class="area">
                          <span class="area-only"> উত্তরা</span>
                        </td>
                        <td class="item">
                          <span class="item-only">১২</span>
                        </td>
                        <td class="amount">
                          <span class="amount-only">১৪,০২১/-</span>
                        </td>
                        <td class="status">
                          <span class="status-btn due">due</span>
                        </td>
                        <td class="action">
                                    <span class="single-action-item">
                                        <a href="#" class="action-btn"
                                           data-toggle="dropdown" aria-expanded="false">
                                            <svg width="14" height="14" viewBox="0 0 13 13"
                                                 fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd"
                                                      clip-rule="evenodd"
                                                      d="M0.615479 6.69234C0.615479 2.42342 2.03886 1.00003 6.30779 1.00003C10.5767 1.00003 12.0001 2.42342 12.0001 6.69234C12.0001 10.9613 10.5767 12.3846 6.30779 12.3846C2.03886 12.3846 0.615479 10.9613 0.615479 6.69234Z"
                                                      stroke="#828282" stroke-linecap="round"
                                                      stroke-linejoin="round"/>
                                                <path d="M8.76538 6.69229H8.77092"
                                                      stroke="#828282" stroke-width="2"
                                                      stroke-linecap="round"
                                                      stroke-linejoin="round"/>
                                                <path d="M6.30444 6.69229H6.30998"
                                                      stroke="#828282" stroke-width="2"
                                                      stroke-linecap="round"
                                                      stroke-linejoin="round"/>
                                                <path d="M3.84351 6.69229H3.84904"
                                                      stroke="#828282" stroke-width="2"
                                                      stroke-linecap="round"
                                                      stroke-linejoin="round"/>
                                            </svg>
                                        </a>
                                        <div
                                            class="dropdown-menu dropdown-menu-right control">
                                            <div class="modal-control-02">
                                                <div class="modal-content">
                                                    <!-- modal content start -->
                                                    <div class="mini-modal-style-02">
                                                        <ul class="list">
                                                            <li class="list-item">
                                                                <span class="icon">
                                                                    <svg width="12"
                                                                         height="10"
                                                                         viewBox="0 0 12 10"
                                                                         fill="none"
                                                                         xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            fill-rule="evenodd"
                                                                            clip-rule="evenodd"
                                                                            d="M7.58217 5.02607C7.58217 5.89907 6.87417 6.60707 6.00117 6.60707C5.12817 6.60707 4.42017 5.89907 4.42017 5.02607C4.42017 4.15257 5.12817 3.44507 6.00117 3.44507C6.87417 3.44507 7.58217 4.15257 7.58217 5.02607Z"
                                                                            stroke="#828282"
                                                                            stroke-width="0.8"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round"/>
                                                                        <path
                                                                            fill-rule="evenodd"
                                                                            clip-rule="evenodd"
                                                                            d="M1.37524 5.02606C1.37524 6.66606 3.44624 8.67706 6.00124 8.67706C8.55575 8.67706 10.6272 6.66756 10.6272 5.02606C10.6272 3.38456 8.55575 1.37506 6.00124 1.37506C3.44624 1.37506 1.37524 3.38606 1.37524 5.02606Z"
                                                                            stroke="#828282"
                                                                            stroke-width="0.8"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round"/>
                                                                    </svg>
                                                                </span>
                                                                <span class="text"
                                                                      onclick="orderPopOpn()">
                                                                    View Details
                                                                </span>
                                                            </li>
                                                            <li class="list-item">
                                                                <span class="icon">
                                                                    <svg width="10"
                                                                         height="9"
                                                                         viewBox="0 0 10 9"
                                                                         fill="none"
                                                                         xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            fill-rule="evenodd"
                                                                            clip-rule="evenodd"
                                                                            d="M4.8124 0.0146264C4.97876 0.0146264 5.11377 0.149639 5.11377 0.315994C5.11377 0.482349 4.97876 0.617362 4.8124 0.617362H3.30998C2.27167 0.617362 1.60103 1.32859 1.60103 2.42918V5.76995C1.60103 6.87054 2.27167 7.58177 3.30998 7.58177H6.85567C7.89399 7.58177 8.56503 6.87054 8.56503 5.76995V4.1514C8.56503 3.98505 8.70005 3.85003 8.8664 3.85003C9.03276 3.85003 9.16777 3.98505 9.16777 4.1514V5.76995C9.16777 7.2141 8.23835 8.18451 6.85567 8.18451H3.30998C1.92731 8.18451 0.998291 7.2141 0.998291 5.76995V2.42918C0.998291 0.985031 1.92731 0.0146264 3.30998 0.0146264H4.8124ZM8.31213 0.367669L8.80114 0.856688C9.03943 1.09457 9.17042 1.4108 9.17002 1.74753C9.17002 2.08426 9.03902 2.40009 8.80114 2.63757L5.78385 5.65486C5.56245 5.87627 5.26751 5.99842 4.95408 5.99842H3.44885C3.36768 5.99842 3.28973 5.96547 3.23307 5.90721C3.17642 5.84935 3.14548 5.77099 3.14749 5.68942L3.18526 4.17093C3.19289 3.86876 3.31464 3.58467 3.52841 3.3705H3.52882L6.53164 0.367669C7.02267 -0.122556 7.8211 -0.122556 8.31213 0.367669ZM6.28428 1.46706L3.95475 3.79683C3.85068 3.9009 3.79161 4.03913 3.78799 4.1858L3.75786 5.39569H4.95408C5.10678 5.39569 5.24983 5.33662 5.35792 5.22853L7.70151 2.88429L6.28428 1.46706ZM6.95758 0.794004L6.71021 1.04072L8.12745 2.45836L8.37521 2.21124C8.49897 2.08747 8.56728 1.92273 8.56728 1.74753C8.56728 1.57193 8.49897 1.40678 8.37521 1.28302L7.88619 0.794004C7.63023 0.538846 7.21394 0.538846 6.95758 0.794004Z"
                                                                            fill="#828282"/>
                                                                    </svg>
                                                                </span>
                                                                <span class="text">
                                                                    Order Edit
                                                                </span>
                                                            </li>
                                                            <li class="list-item">
                                                                <span class="icon">
                                                                    <svg width="12"
                                                                         height="12"
                                                                         viewBox="0 0 12 12"
                                                                         fill="none"
                                                                         xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M4.22021 6.00004L5.40722 7.18654L7.78022 4.81354"
                                                                            stroke="#828282"
                                                                            stroke-width="0.8"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round"/>
                                                                        <path
                                                                            fill-rule="evenodd"
                                                                            clip-rule="evenodd"
                                                                            d="M1.375 6.00006C1.375 9.46856 2.5315 10.6251 6 10.6251C9.4685 10.6251 10.625 9.46856 10.625 6.00006C10.625 2.53156 9.4685 1.37506 6 1.37506C2.5315 1.37506 1.375 2.53156 1.375 6.00006Z"
                                                                            stroke="#828282"
                                                                            stroke-width="0.8"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round"/>
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
                      <tr class="successull-order">
                        <td class="sl-no">
                          <form action="/action_page.php">
                            <input type="checkbox" id="" name="" value="">
                          </form>
                          <span class="no-only">১</span>
                        </td>
                        <td class="order-id">
                          <span class="order-id-only">বপ১২৫৬৫৯৮৪৩</span>
                        </td>
                        <td class="date-and-time">
                          <span class="date">১৮/১০/২০২১</span>
                        </td>
                        <td class="customer">
                          <span class="cus-name">মের্সাস হালিমা স্টোর</span>
                          <span class="address font-small">আচরি মার্কেট , সড়ক ১২,
                                        সেক্টর ৩,
                                        উত্তরা, ঢাকা </span>
                          <span class="mob-no font-small">০১৫৬ ৯৩ ৬৯ ৫৩</span>
                        </td>
                        <td class="area">
                          <span class="area-only"> উত্তরা</span>
                        </td>
                        <td class="item">
                          <span class="item-only">১২</span>
                        </td>
                        <td class="amount">
                          <span class="amount-only">১৪,০২১/-</span>
                        </td>
                        <td class="status">
                          <span class="status-btn paid">paid</span>
                        </td>
                        <td class="action">
                                    <span class="single-action-item">
                                        <a href="#" class="action-btn"
                                           data-toggle="dropdown" aria-expanded="false">
                                            <svg width="14" height="14" viewBox="0 0 13 13"
                                                 fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd"
                                                      clip-rule="evenodd"
                                                      d="M0.615479 6.69234C0.615479 2.42342 2.03886 1.00003 6.30779 1.00003C10.5767 1.00003 12.0001 2.42342 12.0001 6.69234C12.0001 10.9613 10.5767 12.3846 6.30779 12.3846C2.03886 12.3846 0.615479 10.9613 0.615479 6.69234Z"
                                                      stroke="#828282" stroke-linecap="round"
                                                      stroke-linejoin="round"/>
                                                <path d="M8.76538 6.69229H8.77092"
                                                      stroke="#828282" stroke-width="2"
                                                      stroke-linecap="round"
                                                      stroke-linejoin="round"/>
                                                <path d="M6.30444 6.69229H6.30998"
                                                      stroke="#828282" stroke-width="2"
                                                      stroke-linecap="round"
                                                      stroke-linejoin="round"/>
                                                <path d="M3.84351 6.69229H3.84904"
                                                      stroke="#828282" stroke-width="2"
                                                      stroke-linecap="round"
                                                      stroke-linejoin="round"/>
                                            </svg>
                                        </a>
                                        <div
                                            class="dropdown-menu dropdown-menu-right control">
                                            <div class="modal-control-02">
                                                <div class="modal-content">
                                                    <!-- modal content start -->
                                                    <div class="mini-modal-style-02">
                                                        <ul class="list">
                                                            <li class="list-item">
                                                                <span class="icon">
                                                                    <svg width="12"
                                                                         height="10"
                                                                         viewBox="0 0 12 10"
                                                                         fill="none"
                                                                         xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            fill-rule="evenodd"
                                                                            clip-rule="evenodd"
                                                                            d="M7.58217 5.02607C7.58217 5.89907 6.87417 6.60707 6.00117 6.60707C5.12817 6.60707 4.42017 5.89907 4.42017 5.02607C4.42017 4.15257 5.12817 3.44507 6.00117 3.44507C6.87417 3.44507 7.58217 4.15257 7.58217 5.02607Z"
                                                                            stroke="#828282"
                                                                            stroke-width="0.8"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round"/>
                                                                        <path
                                                                            fill-rule="evenodd"
                                                                            clip-rule="evenodd"
                                                                            d="M1.37524 5.02606C1.37524 6.66606 3.44624 8.67706 6.00124 8.67706C8.55575 8.67706 10.6272 6.66756 10.6272 5.02606C10.6272 3.38456 8.55575 1.37506 6.00124 1.37506C3.44624 1.37506 1.37524 3.38606 1.37524 5.02606Z"
                                                                            stroke="#828282"
                                                                            stroke-width="0.8"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round"/>
                                                                    </svg>
                                                                </span>
                                                                <span class="text"
                                                                      onclick="orderPopOpn()">
                                                                    View Details
                                                                </span>
                                                            </li>
                                                            <li class="list-item">
                                                                <span class="icon">
                                                                    <svg width="10"
                                                                         height="9"
                                                                         viewBox="0 0 10 9"
                                                                         fill="none"
                                                                         xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            fill-rule="evenodd"
                                                                            clip-rule="evenodd"
                                                                            d="M4.8124 0.0146264C4.97876 0.0146264 5.11377 0.149639 5.11377 0.315994C5.11377 0.482349 4.97876 0.617362 4.8124 0.617362H3.30998C2.27167 0.617362 1.60103 1.32859 1.60103 2.42918V5.76995C1.60103 6.87054 2.27167 7.58177 3.30998 7.58177H6.85567C7.89399 7.58177 8.56503 6.87054 8.56503 5.76995V4.1514C8.56503 3.98505 8.70005 3.85003 8.8664 3.85003C9.03276 3.85003 9.16777 3.98505 9.16777 4.1514V5.76995C9.16777 7.2141 8.23835 8.18451 6.85567 8.18451H3.30998C1.92731 8.18451 0.998291 7.2141 0.998291 5.76995V2.42918C0.998291 0.985031 1.92731 0.0146264 3.30998 0.0146264H4.8124ZM8.31213 0.367669L8.80114 0.856688C9.03943 1.09457 9.17042 1.4108 9.17002 1.74753C9.17002 2.08426 9.03902 2.40009 8.80114 2.63757L5.78385 5.65486C5.56245 5.87627 5.26751 5.99842 4.95408 5.99842H3.44885C3.36768 5.99842 3.28973 5.96547 3.23307 5.90721C3.17642 5.84935 3.14548 5.77099 3.14749 5.68942L3.18526 4.17093C3.19289 3.86876 3.31464 3.58467 3.52841 3.3705H3.52882L6.53164 0.367669C7.02267 -0.122556 7.8211 -0.122556 8.31213 0.367669ZM6.28428 1.46706L3.95475 3.79683C3.85068 3.9009 3.79161 4.03913 3.78799 4.1858L3.75786 5.39569H4.95408C5.10678 5.39569 5.24983 5.33662 5.35792 5.22853L7.70151 2.88429L6.28428 1.46706ZM6.95758 0.794004L6.71021 1.04072L8.12745 2.45836L8.37521 2.21124C8.49897 2.08747 8.56728 1.92273 8.56728 1.74753C8.56728 1.57193 8.49897 1.40678 8.37521 1.28302L7.88619 0.794004C7.63023 0.538846 7.21394 0.538846 6.95758 0.794004Z"
                                                                            fill="#828282"/>
                                                                    </svg>
                                                                </span>
                                                                <span class="text">
                                                                    Order Edit
                                                                </span>
                                                            </li>
                                                            <li class="list-item">
                                                                <span class="icon">
                                                                    <svg width="12"
                                                                         height="12"
                                                                         viewBox="0 0 12 12"
                                                                         fill="none"
                                                                         xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M4.22021 6.00004L5.40722 7.18654L7.78022 4.81354"
                                                                            stroke="#828282"
                                                                            stroke-width="0.8"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round"/>
                                                                        <path
                                                                            fill-rule="evenodd"
                                                                            clip-rule="evenodd"
                                                                            d="M1.375 6.00006C1.375 9.46856 2.5315 10.6251 6 10.6251C9.4685 10.6251 10.625 9.46856 10.625 6.00006C10.625 2.53156 9.4685 1.37506 6 1.37506C2.5315 1.37506 1.375 2.53156 1.375 6.00006Z"
                                                                            stroke="#828282"
                                                                            stroke-width="0.8"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round"/>
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
                          <svg width="5" height="8" viewBox="0 0 5 8" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M3.90811 7.33334C3.73344 7.33334 3.55944 7.26534 3.42878 7.13L0.853441 4.46334C0.601441 4.20134 0.604775 3.786 0.862108 3.52867L3.52878 0.862004C3.78878 0.601337 4.21078 0.601337 4.47144 0.862004C4.73144 1.12267 4.73144 1.544 4.47144 1.80467L2.26811 4.008L4.38744 6.20334C4.64344 6.46867 4.63611 6.89067 4.37144 7.146C4.24144 7.27134 4.07478 7.33334 3.90811 7.33334Z"
                                  fill="#E0E0E0"/>
                          </svg>
                        </a>
                        <a href="#" class="page-pagination">
                          <svg width="5" height="8" viewBox="0 0 5 8" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M1.00009 7.33333C0.829419 7.33333 0.658752 7.26799 0.528752 7.13799C0.268085 6.87733 0.268085 6.45599 0.528752 6.19533L2.73209 3.99199L0.612085 1.79666C0.356752 1.53133 0.364085 1.10933 0.628752 0.853993C0.894085 0.59866 1.31609 0.605993 1.57142 0.869993L4.14609 3.53666C4.39875 3.79866 4.39542 4.21399 4.13809 4.47133L1.47142 7.13799C1.34142 7.26799 1.17075 7.33333 1.00009 7.33333Z"
                                  fill="#E0E0E0"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="tab-pane fade" id="three" role="tabpanel"
                     aria-labelledby="three-tab">
                  <div class="table-area-wrapper order-table-content">
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
                        <th class="order-id">
                          Order id
                        </th>
                        <th class="date-and-time">
                          Canceled Date
                        </th>
                        <th class="customer">
                          Customer
                        </th>
                        <th class="area">
                          Area
                        </th>
                        <th class="item">
                          No. of Items
                        </th>
                        <th class="amount">
                          Payment
                        </th>
                        <th class="status">
                          Status
                        </th>
                        <th class="action">
                          Action
                        </th>
                      </tr>
                      </thead>

                      <tbody>
                      <tr class="canceled-order">
                        <td class="sl-no">
                          <form action="/action_page.php">
                            <input type="checkbox" id="" name="" value="">
                          </form>
                          <span class="no-only">১</span>
                        </td>
                        <td class="order-id">
                          <span class="order-id-only">বপ১২৫৬৫৯৮৪৩</span>
                        </td>
                        <td class="date-and-time">
                          <span class="date">১৮/১০/২০২১</span>
                        </td>
                        <td class="customer">
                          <span class="cus-name">মের্সাস হালিমা স্টোর</span>
                          <span class="address font-small">আচরি মার্কেট , সড়ক ১২,
                                        সেক্টর ৩,
                                        উত্তরা, ঢাকা </span>
                          <span class="mob-no font-small">০১৫৬ ৯৩ ৬৯ ৫৩</span>
                        </td>
                        <td class="area">
                          <span class="area-only"> উত্তরা</span>
                        </td>
                        <td class="item">
                          <span class="item-only">১২</span>
                        </td>
                        <td class="amount">
                          <span class="amount-only">১৪,০২১/-</span>
                        </td>
                        <td class="status">
                          <span class="status-btn candeled">candeled</span>
                        </td>
                        <td class="action">
                                    <span class="single-action-item">
                                        <a href="#" class="action-btn"
                                           data-toggle="dropdown" aria-expanded="false">
                                            <svg width="14" height="14" viewBox="0 0 13 13"
                                                 fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd"
                                                      clip-rule="evenodd"
                                                      d="M0.615479 6.69234C0.615479 2.42342 2.03886 1.00003 6.30779 1.00003C10.5767 1.00003 12.0001 2.42342 12.0001 6.69234C12.0001 10.9613 10.5767 12.3846 6.30779 12.3846C2.03886 12.3846 0.615479 10.9613 0.615479 6.69234Z"
                                                      stroke="#828282" stroke-linecap="round"
                                                      stroke-linejoin="round"/>
                                                <path d="M8.76538 6.69229H8.77092"
                                                      stroke="#828282" stroke-width="2"
                                                      stroke-linecap="round"
                                                      stroke-linejoin="round"/>
                                                <path d="M6.30444 6.69229H6.30998"
                                                      stroke="#828282" stroke-width="2"
                                                      stroke-linecap="round"
                                                      stroke-linejoin="round"/>
                                                <path d="M3.84351 6.69229H3.84904"
                                                      stroke="#828282" stroke-width="2"
                                                      stroke-linecap="round"
                                                      stroke-linejoin="round"/>
                                            </svg>
                                        </a>
                                        <div
                                            class="dropdown-menu dropdown-menu-right control">
                                            <div class="modal-control-02">
                                                <div class="modal-content">
                                                    <!-- modal content start -->
                                                    <div class="mini-modal-style-02">
                                                        <ul class="list">
                                                            <li class="list-item">
                                                                <span class="icon">
                                                                    <svg width="12"
                                                                         height="10"
                                                                         viewBox="0 0 12 10"
                                                                         fill="none"
                                                                         xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            fill-rule="evenodd"
                                                                            clip-rule="evenodd"
                                                                            d="M7.58217 5.02607C7.58217 5.89907 6.87417 6.60707 6.00117 6.60707C5.12817 6.60707 4.42017 5.89907 4.42017 5.02607C4.42017 4.15257 5.12817 3.44507 6.00117 3.44507C6.87417 3.44507 7.58217 4.15257 7.58217 5.02607Z"
                                                                            stroke="#828282"
                                                                            stroke-width="0.8"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round">
                                                                        </path>
                                                                        <path
                                                                            fill-rule="evenodd"
                                                                            clip-rule="evenodd"
                                                                            d="M1.37524 5.02606C1.37524 6.66606 3.44624 8.67706 6.00124 8.67706C8.55575 8.67706 10.6272 6.66756 10.6272 5.02606C10.6272 3.38456 8.55575 1.37506 6.00124 1.37506C3.44624 1.37506 1.37524 3.38606 1.37524 5.02606Z"
                                                                            stroke="#828282"
                                                                            stroke-width="0.8"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round">
                                                                        </path>
                                                                    </svg>
                                                                </span>
                                                                <span class="text"
                                                                      onclick="orderPopOpn()">
                                                                    View Details
                                                                </span>
                                                            </li>
                                                            <li class="list-item">
                                                                <span class="icon">
                                                                    <svg width="7"
                                                                         height="8"
                                                                         viewBox="0 0 7 8"
                                                                         fill="none"
                                                                         xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M0 0H1V1.2785C1.54063 0.854247 2.1942 0.598538 2.8792 0.543263C3.56419 0.487989 4.2503 0.635594 4.85197 0.967672C5.45363 1.29975 5.94422 1.8016 6.26256 2.41065C6.58089 3.0197 6.71289 3.70898 6.64208 4.39255C6.57127 5.07611 6.3008 5.72371 5.86438 6.25457C5.42797 6.78543 4.84493 7.17608 4.18797 7.37778C3.53101 7.57948 2.82922 7.58332 2.17009 7.38881C1.51097 7.1943 0.923694 6.81006 0.4815 6.284L1.2915 5.692C1.61249 6.05339 2.03136 6.31397 2.4974 6.44221C2.96344 6.57044 3.45665 6.56083 3.91734 6.41453C4.37803 6.26822 4.78642 5.99151 5.09308 5.61789C5.39974 5.24427 5.59152 4.78975 5.64519 4.30939C5.69886 3.82902 5.61212 3.34339 5.39548 2.9113C5.17884 2.47921 4.84159 2.11918 4.42455 1.87482C4.00752 1.63045 3.52858 1.51222 3.04573 1.53443C2.56289 1.55665 2.09683 1.71837 1.704 2H3V3H0V0Z"
                                                                            fill="#828282">
                                                                        </path>
                                                                    </svg>
                                                                </span>
                                                                <span class="text">
                                                                    Undo to New Order
                                                                </span>
                                                            </li>
                                                            <li class="list-item">
                                                                <span class="icon">
                                                                    <svg width="12"
                                                                         height="12"
                                                                         viewBox="0 0 12 12"
                                                                         fill="none"
                                                                         xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M4.22021 6.00004L5.40722 7.18654L7.78022 4.81354"
                                                                            stroke="#828282"
                                                                            stroke-width="0.8"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round">
                                                                        </path>
                                                                        <path
                                                                            fill-rule="evenodd"
                                                                            clip-rule="evenodd"
                                                                            d="M1.375 6.00006C1.375 9.46856 2.5315 10.6251 6 10.6251C9.4685 10.6251 10.625 9.46856 10.625 6.00006C10.625 2.53156 9.4685 1.37506 6 1.37506C2.5315 1.37506 1.375 2.53156 1.375 6.00006Z"
                                                                            stroke="#828282"
                                                                            stroke-width="0.8"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round">
                                                                        </path>
                                                                    </svg>
                                                                </span>
                                                                <span class="text">
                                                                    Mark as Comfirm
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
                          <svg width="5" height="8" viewBox="0 0 5 8" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M3.90811 7.33334C3.73344 7.33334 3.55944 7.26534 3.42878 7.13L0.853441 4.46334C0.601441 4.20134 0.604775 3.786 0.862108 3.52867L3.52878 0.862004C3.78878 0.601337 4.21078 0.601337 4.47144 0.862004C4.73144 1.12267 4.73144 1.544 4.47144 1.80467L2.26811 4.008L4.38744 6.20334C4.64344 6.46867 4.63611 6.89067 4.37144 7.146C4.24144 7.27134 4.07478 7.33334 3.90811 7.33334Z"
                                  fill="#E0E0E0"/>
                          </svg>
                        </a>
                        <a href="#" class="page-pagination">
                          <svg width="5" height="8" viewBox="0 0 5 8" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M1.00009 7.33333C0.829419 7.33333 0.658752 7.26799 0.528752 7.13799C0.268085 6.87733 0.268085 6.45599 0.528752 6.19533L2.73209 3.99199L0.612085 1.79666C0.356752 1.53133 0.364085 1.10933 0.628752 0.853993C0.894085 0.59866 1.31609 0.605993 1.57142 0.869993L4.14609 3.53666C4.39875 3.79866 4.39542 4.21399 4.13809 4.47133L1.47142 7.13799C1.34142 7.26799 1.17075 7.33333 1.00009 7.33333Z"
                                  fill="#E0E0E0"/>
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
import Sidebar from '@/components/nav_top/Sidebar.vue';
import Topbar from '@/components/nav_top/Topbar.vue';
import AllPopup from '@/components/all_popup/AllPopup.vue';
  export default {
    name: "Dashboard",
    data() {
      return {

      }
    },
  components: {
    Sidebar,
    Topbar,
    AllPopup,
},
    mounted() {
            let user = localStorage.getItem('user_info');
            if (!user) {
                this.$router.push({
                    name: "Login"
                });
            }
        }

  }
</script>