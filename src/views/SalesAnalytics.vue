<template>
    <div>
      <div class="product-area-wrapper">

        <div class="row">
          <div class="col-lg-12">
            <!-- topbar top content start -->
            <div class="tab-top-content">
              <div class="left-content">
                <span class="title">List</span>
              </div>
              <div class="right-content">
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
            <!-- product overview content start -->
            <div class="sales-analytics-wrapper">
              <div class="single-graph-box">
                <div class="top-content">
                  <div class="left-content">
                    <span class="text">Sales Analytics</span>
                  </div>
                  <div class="right-content">
                      <span class="drop-box">
                        <span class="icon">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M1.375 6C1.375 9.4685 2.5315 10.625 6 10.625C9.4685 10.625 10.625 9.4685 10.625 6C10.625 2.5315 9.4685 1.375 6 1.375C2.5315 1.375 1.375 2.5315 1.375 6Z"
                                  stroke="#828282" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path
                                d="M4.26367 5.27905C4.26367 5.27905 5.45967 7.02205 5.99967 7.02205C6.53967 7.02205 7.73467 5.27905 7.73467 5.27905"
                                stroke="#828282" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </span>
                        <select name="" id="">
                          <option value="">
                            <span class="month">jan</span>,
                            <span class="year">21</span>
                          </option>
                          <option value="">
                            <span class="month">feb</span>,
                            <span class="year">21</span>
                          </option>
                          <option value="">
                            <span class="month">mar</span>,
                            <span class="year">21</span>
                          </option>
                          <option value="">
                            <span class="month">apr</span>,
                            <span class="year">21</span>
                          </option>
                          <option value="">
                            <span class="month">may</span>,
                            <span class="year">21</span>
                          </option>
                          <option value="">
                            <span class="month">june</span>,
                            <span class="year">21</span>
                          </option>
                          <option value="">
                            <span class="month">july</span>,
                            <span class="year">21</span>
                          </option>
                          <option value="">
                            <span class="month">aug</span>,
                            <span class="year">21</span>
                          </option>
                          <option value="">
                            <span class="month">sep</span>,
                            <span class="year">21</span>
                          </option>
                          <option value="">
                            <span class="month">oct</span>,
                            <span class="year">21</span>
                          </option>
                          <option value="">
                            <span class="month">nov</span>,
                            <span class="year">21</span>
                          </option>
                          <option value="">
                            <span class="month">dec</span>,
                            <span class="year">21</span>
                          </option>
                        </select>
                      </span>
                  </div>
                </div>
                <div class="graph-main-box">
                  <canvas class="graph" id="singlelinechart" height="500" width="900"></canvas>
                </div>
              </div>

              <div class="single-graph-box">
                <div class="top-content">
                  <div class="left-content">
                    <span class="text">Payment Analytics</span>
                  </div>
                  <div class="middle-content">
                    <span class="cod indicator">COD</span>
                    <span class="credit indicator">Credit</span>
                  </div>
                  <div class="right-content">
                      <span class="drop-box">
                        <span class="icon">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M1.375 6C1.375 9.4685 2.5315 10.625 6 10.625C9.4685 10.625 10.625 9.4685 10.625 6C10.625 2.5315 9.4685 1.375 6 1.375C2.5315 1.375 1.375 2.5315 1.375 6Z"
                                  stroke="#828282" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path
                                d="M4.26367 5.27905C4.26367 5.27905 5.45967 7.02205 5.99967 7.02205C6.53967 7.02205 7.73467 5.27905 7.73467 5.27905"
                                stroke="#828282" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </span>
                        <select name="" id="">
                          <option value="">
                            <span class="month">jan</span>,
                            <span class="year">21</span>
                          </option>
                          <option value="">
                            <span class="month">feb</span>,
                            <span class="year">21</span>
                          </option>
                          <option value="">
                            <span class="month">mar</span>,
                            <span class="year">21</span>
                          </option>
                          <option value="">
                            <span class="month">apr</span>,
                            <span class="year">21</span>
                          </option>
                          <option value="">
                            <span class="month">may</span>,
                            <span class="year">21</span>
                          </option>
                          <option value="">
                            <span class="month">june</span>,
                            <span class="year">21</span>
                          </option>
                          <option value="">
                            <span class="month">july</span>,
                            <span class="year">21</span>
                          </option>
                          <option value="">
                            <span class="month">aug</span>,
                            <span class="year">21</span>
                          </option>
                          <option value="">
                            <span class="month">sep</span>,
                            <span class="year">21</span>
                          </option>
                          <option value="">
                            <span class="month">oct</span>,
                            <span class="year">21</span>
                          </option>
                          <option value="">
                            <span class="month">nov</span>,
                            <span class="year">21</span>
                          </option>
                          <option value="">
                            <span class="month">dec</span>,
                            <span class="year">21</span>
                          </option>
                        </select>
                      </span>
                  </div>
                </div>
                <div class="graph-main-box">
                  <canvas class="graph" id="multilinechart" height="500" width="900"></canvas>
                </div>
              </div>
            </div>
            <!-- product overview content end -->
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
}
</script>