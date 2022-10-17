<template>
  <div>
    <div class="new-order-add-area-wrapper">
      
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-8">
            <div class="add-order-inner">
              <h3 class="main-title">সদাই তালিকাঃ</h3>

              <div class="table-area-wrapper order-add-table">
                <table>
                  <thead>
                    <tr>
                      <th class="catg">ক্যাটাগরি</th>
                      <th class="sub-catg">সাবক্যাটাগরি</th>
                      <th class="product">পণ্য</th>
                      <th class="quantity">পরিমাণ</th>
                      <th class="price">দাম</th>
                      <th class="action">
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td class="catg">চাল</td>
                      <td class="sub-catg">নাজিরশাইল</td>
                      <td class="product">মোজ্জামেল -২৫ কেজি বস্তা </td>
                      <td class="quantity">
                        <div class="cart-control">
                          <div class="value-button minus decrease">
                            <svg width="16" height="16" viewBox="0 0 12 12" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M1.15002 6.01832C1.15002 2.36727 2.36739 1.1499 6.01844 1.1499C9.6695 1.1499 10.8869 2.36727 10.8869 6.01832C10.8869 9.66938 9.6695 10.8867 6.01844 10.8867C2.36739 10.8867 1.15002 9.66938 1.15002 6.01832Z"
                                stroke="#828282" stroke-linecap="round" stroke-linejoin="round"></path>
                              <path d="M7.80739 6.01831H4.22949" stroke="#828282" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                            </svg>
                          </div>
                          <input type="number" name="quantity" class="qty_" value="1" tabindex="0">
                          <div class="value-button plus increase">
                            <svg width="16" height="16" viewBox="0 0 12 12" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M1.15002 6.01832C1.15002 2.36727 2.36739 1.1499 6.01844 1.1499C9.6695 1.1499 10.8869 2.36727 10.8869 6.01832C10.8869 9.66938 9.6695 10.8867 6.01844 10.8867C2.36739 10.8867 1.15002 9.66938 1.15002 6.01832Z"
                                stroke="#828282" stroke-linecap="round" stroke-linejoin="round"></path>
                              <path d="M6.01843 4.2312V7.80541" stroke="#828282" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                              <path d="M7.80739 6.01831H4.22949" stroke="#828282" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                            </svg>
                          </div>
                        </div>
                      </td>
                      <td class="price">৮,৮২৫/-</td>
                      <td class="action">
                        <span class="single-action-item">
                          <a href="#" class="action-btn" data-toggle="modal" data-target=".close-box">
                            <svg width="11" height="12" viewBox="0 0 9 9" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M5.17538 4.69229L7.82154 2.05229C7.93742 1.93641 8.00252 1.77925 8.00252 1.61537C8.00252 1.45149 7.93742 1.29433 7.82154 1.17845C7.70566 1.06257 7.54849 0.997467 7.38462 0.997467C7.22074 0.997467 7.06357 1.06257 6.94769 1.17845L4.30769 3.8246L1.66769 1.17845C1.55181 1.06257 1.39465 0.997467 1.23077 0.997467C1.06689 0.997467 0.909725 1.06257 0.793846 1.17845C0.677967 1.29433 0.612867 1.45149 0.612867 1.61537C0.612867 1.77925 0.677967 1.93641 0.793846 2.05229L3.44 4.69229L0.793846 7.33229C0.736167 7.3895 0.690386 7.45756 0.659144 7.53255C0.627902 7.60754 0.611816 7.68798 0.611816 7.76922C0.611816 7.85045 0.627902 7.93089 0.659144 8.00588C0.690386 8.08087 0.736167 8.14893 0.793846 8.20614C0.851054 8.26382 0.919116 8.3096 0.994107 8.34084C1.0691 8.37208 1.14953 8.38817 1.23077 8.38817C1.31201 8.38817 1.39244 8.37208 1.46743 8.34084C1.54242 8.3096 1.61048 8.26382 1.66769 8.20614L4.30769 5.55999L6.94769 8.20614C7.0049 8.26382 7.07296 8.3096 7.14795 8.34084C7.22294 8.37208 7.30338 8.38817 7.38462 8.38817C7.46585 8.38817 7.54629 8.37208 7.62128 8.34084C7.69627 8.3096 7.76433 8.26382 7.82154 8.20614C7.87922 8.14893 7.925 8.08087 7.95624 8.00588C7.98748 7.93089 8.00357 7.85045 8.00357 7.76922C8.00357 7.68798 7.98748 7.60754 7.95624 7.53255C7.925 7.45756 7.87922 7.3895 7.82154 7.33229L5.17538 4.69229Z"
                                fill="#828282"></path>
                            </svg>
                          </a>
                          <div class="modal fade close-box" tabindex="-1" role="dialog" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered close-box-modal" role="document">
                              <div class="modal-content">
                                <!-- model content start -->
                                <div class="close-box-wrap">
                                  <span class="top-close-sign" data-dismiss="modal" aria-label="Close">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path
                                        d="M13.4099 12.0002L17.7099 7.71019C17.8982 7.52188 18.004 7.26649 18.004 7.00019C18.004 6.73388 17.8982 6.47849 17.7099 6.29019C17.5216 6.10188 17.2662 5.99609 16.9999 5.99609C16.7336 5.99609 16.4782 6.10188 16.2899 6.29019L11.9999 10.5902L7.70994 6.29019C7.52164 6.10188 7.26624 5.99609 6.99994 5.99609C6.73364 5.99609 6.47824 6.10188 6.28994 6.29019C6.10164 6.47849 5.99585 6.73388 5.99585 7.00019C5.99585 7.26649 6.10164 7.52188 6.28994 7.71019L10.5899 12.0002L6.28994 16.2902C6.19621 16.3831 6.12182 16.4937 6.07105 16.6156C6.02028 16.7375 5.99414 16.8682 5.99414 17.0002C5.99414 17.1322 6.02028 17.2629 6.07105 17.3848C6.12182 17.5066 6.19621 17.6172 6.28994 17.7102C6.3829 17.8039 6.4935 17.8783 6.61536 17.9291C6.73722 17.9798 6.86793 18.006 6.99994 18.006C7.13195 18.006 7.26266 17.9798 7.38452 17.9291C7.50638 17.8783 7.61698 17.8039 7.70994 17.7102L11.9999 13.4102L16.2899 17.7102C16.3829 17.8039 16.4935 17.8783 16.6154 17.9291C16.7372 17.9798 16.8679 18.006 16.9999 18.006C17.132 18.006 17.2627 17.9798 17.3845 17.9291C17.5064 17.8783 17.617 17.8039 17.7099 17.7102C17.8037 17.6172 17.8781 17.5066 17.9288 17.3848C17.9796 17.2629 18.0057 17.1322 18.0057 17.0002C18.0057 16.8682 17.9796 16.7375 17.9288 16.6156C17.8781 16.4937 17.8037 16.3831 17.7099 16.2902L13.4099 12.0002Z"
                                        fill="white"></path>
                                    </svg>
                                  </span>
                                  <div class="icon-box">
                                    <svg width="138" height="126" viewBox="0 0 138 126" fill="none"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <g opacity="0.83" filter="url(#filter0_b_259_6489)">
                                        <path
                                          d="M129.121 46.458C129.121 88.6315 156.616 125.49 114.839 125.49C73.0616 125.49 5.33996 132.954 5.33996 90.78C5.33996 72.2635 -6.67485 36.3341 5.3398 20.851C20.69 1.06944 39.035 0 62.4697 0C104.247 0 119.6 3.738 129.121 46.458Z"
                                          fill="url(#paint0_radial_259_6489)" fill-opacity="0.5"></path>
                                      </g>
                                      <g clip-path="url(#clip0_259_6489)">
                                        <path
                                          d="M98.8679 83.2284L79.4288 47.5216C77.9463 45.0723 75.3682 43.5898 72.5 43.5898C69.6318 43.5898 67.0537 45.0723 65.5712 47.5216L46.1321 83.2284C44.6499 85.7745 44.6176 88.8038 46.0679 91.3496C47.518 93.8954 50.1282 95.4102 53.0609 95.4102H91.939C94.8718 95.4102 97.4821 93.8954 98.9321 91.3496C100.382 88.8038 100.35 85.7745 98.8679 83.2284Z"
                                          fill="#495A79"></path>
                                        <path
                                          d="M98.9321 91.3496C97.482 93.8954 94.8718 95.4102 91.9391 95.4102H72.5V43.5898C75.3682 43.5898 77.9463 45.0724 79.4288 47.5216L98.8679 83.2285C100.35 85.7745 100.382 88.8038 98.9321 91.3496Z"
                                          fill="#42516D"></path>
                                        <path
                                          d="M96.0964 84.8721L76.6572 49.1649C75.7873 47.6826 74.2081 46.8125 72.5 46.8125C70.7919 46.8125 69.2128 47.6827 68.3429 49.1649L48.9036 84.8721C48.0014 86.3868 48.0014 88.2235 48.8716 89.7383C49.7416 91.285 51.3206 92.1875 53.0611 92.1875H91.9392C93.6796 92.1875 95.2587 91.285 96.1287 89.7383C96.9987 88.2235 96.9987 86.3868 96.0964 84.8721Z"
                                          fill="#FFDE33"></path>
                                        <path
                                          d="M96.1285 89.7383C95.2585 91.285 93.6795 92.1875 91.9391 92.1875H72.5V46.8125C74.2081 46.8125 75.7872 47.6827 76.6571 49.1649L96.0964 84.8721C96.9986 86.3868 96.9986 88.2235 96.1285 89.7383Z"
                                          fill="#FFBC33"></path>
                                        <path
                                          d="M72.5 88.9648C70.7235 88.9648 69.2773 87.5187 69.2773 85.7422C69.2773 83.9656 70.7235 82.5195 72.5 82.5195C74.2765 82.5195 75.7227 83.9656 75.7227 85.7422C75.7227 87.5187 74.2765 88.9648 72.5 88.9648Z"
                                          fill="#495A79"></path>
                                        <path
                                          d="M75.7227 76.0742C75.7227 77.8508 74.2765 79.2969 72.5 79.2969C70.7235 79.2969 69.2773 77.8508 69.2773 76.0742V59.9609C69.2773 58.1844 70.7235 56.7383 72.5 56.7383C74.2765 56.7383 75.7227 58.1844 75.7227 59.9609V76.0742Z"
                                          fill="#495A79"></path>
                                        <path
                                          d="M75.7227 85.7422C75.7227 83.9656 74.2765 82.5195 72.5 82.5195V88.9648C74.2765 88.9648 75.7227 87.5187 75.7227 85.7422Z"
                                          fill="#42516D"></path>
                                        <path
                                          d="M75.7227 76.0742V59.9609C75.7227 58.1844 74.2765 56.7383 72.5 56.7383V79.2969C74.2765 79.2969 75.7227 77.8508 75.7227 76.0742Z"
                                          fill="#42516D"></path>
                                      </g>
                                      <defs>
                                        <filter id="filter0_b_259_6489" x="-4" y="-4" width="146" height="134"
                                          filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                          <feGaussianBlur in="BackgroundImage" stdDeviation="2"></feGaussianBlur>
                                          <feComposite in2="SourceAlpha" operator="in"
                                            result="effect1_backgroundBlur_259_6489"></feComposite>
                                          <feBlend mode="normal" in="SourceGraphic"
                                            in2="effect1_backgroundBlur_259_6489" result="shape"></feBlend>
                                        </filter>
                                        <radialGradient id="paint0_radial_259_6489" cx="0" cy="0" r="1"
                                          gradientUnits="userSpaceOnUse"
                                          gradientTransform="translate(74.9013 73.9565) rotate(22.5454) scale(57.4925 49.8949)">
                                          <stop stop-color="#FFBC33"></stop>
                                          <stop offset="0.64446" stop-color="#FDCD9D" stop-opacity="0.15"></stop>
                                          <stop offset="1" stop-color="#FCD7D7" stop-opacity="0"></stop>
                                        </radialGradient>
                                        <clipPath id="clip0_259_6489">
                                          <rect width="55" height="55" fill="white" transform="translate(45 42)"></rect>
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </div>
                                  <div class="text-box">
                                    <span class="text">Are you sure you wan to Cancel / Delete it?</span>
                                  </div>
                                  <div class="btn-box">
                                    <span class="close-btn no" data-dismiss="modal">no</span>
                                    <span class="close-btn yes">Delete</span>
                                  </div>
                                </div>
                                <!-- model content end -->
                              </div>
                            </div>
                          </div>
                        </span>
                      </td>
                    </tr>

                    <tr class="new">
                      <td class="catg">
                        <input type="text" placeholder="ক্যাটাগরি">
                      </td>
                      <td class="sub-catg">
                        <select id="" name="" form="">
                          <option value="" disabled="" selected="" hidden="" class="hide">সাবক্যাটাগরি
                          </option>
                          <option value="volvo">cat 01</option>
                          <option value="volvo">cat 02</option>
                          <option value="volvo">cat 03</option>
                        </select>
                      </td>
                      <td class="product"><select id="" name="" form="">
                          <option value="" disabled="" selected="" hidden="" class="hide">পণ্য
                          </option>
                          <option value="volvo">cat 01</option>
                          <option value="volvo">cat 02</option>
                          <option value="volvo">cat 03</option>
                        </select>
                      </td>
                      <td class="quantity">
                        <div class="cart-control">
                          <div class="value-button minus decrease">
                            <svg width="16" height="16" viewBox="0 0 12 12" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M1.15002 6.01832C1.15002 2.36727 2.36739 1.1499 6.01844 1.1499C9.6695 1.1499 10.8869 2.36727 10.8869 6.01832C10.8869 9.66938 9.6695 10.8867 6.01844 10.8867C2.36739 10.8867 1.15002 9.66938 1.15002 6.01832Z"
                                stroke="#828282" stroke-linecap="round" stroke-linejoin="round"></path>
                              <path d="M7.80739 6.01831H4.22949" stroke="#828282" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                            </svg>
                          </div>
                          <input type="number" name="quantity" class="qty_" value="1" tabindex="0">
                          <div class="value-button plus increase">
                            <svg width="16" height="16" viewBox="0 0 12 12" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M1.15002 6.01832C1.15002 2.36727 2.36739 1.1499 6.01844 1.1499C9.6695 1.1499 10.8869 2.36727 10.8869 6.01832C10.8869 9.66938 9.6695 10.8867 6.01844 10.8867C2.36739 10.8867 1.15002 9.66938 1.15002 6.01832Z"
                                stroke="#828282" stroke-linecap="round" stroke-linejoin="round"></path>
                              <path d="M6.01843 4.2312V7.80541" stroke="#828282" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                              <path d="M7.80739 6.01831H4.22949" stroke="#828282" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                            </svg>
                          </div>
                        </div>
                      </td>
                      <td class="price">৮,৮২৫/-</td>
                      <td class="action">
                        <span class="single-action-item">
                          <a href="#" class="action-btn">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M1.53345 8.02443C1.53345 3.15636 3.15661 1.5332 8.02468 1.5332C12.8927 1.5332 14.5159 3.15636 14.5159 8.02443C14.5159 12.8925 12.8927 14.5157 8.02468 14.5157C3.15661 14.5157 1.53345 12.8925 1.53345 8.02443Z"
                                stroke="#4F4F4F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M8.02466 5.6416V10.4072" stroke="#4F4F4F" stroke-width="1.5"
                                stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M10.4099 8.02441H5.6394" stroke="#4F4F4F" stroke-width="1.5"
                                stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </a>
                        </span>
                        <span class="single-action-item">
                          <a href="#" class="action-btn" data-toggle="modal" data-target=".close-box">
                            <svg width="11" height="12" viewBox="0 0 9 9" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M5.17538 4.69229L7.82154 2.05229C7.93742 1.93641 8.00252 1.77925 8.00252 1.61537C8.00252 1.45149 7.93742 1.29433 7.82154 1.17845C7.70566 1.06257 7.54849 0.997467 7.38462 0.997467C7.22074 0.997467 7.06357 1.06257 6.94769 1.17845L4.30769 3.8246L1.66769 1.17845C1.55181 1.06257 1.39465 0.997467 1.23077 0.997467C1.06689 0.997467 0.909725 1.06257 0.793846 1.17845C0.677967 1.29433 0.612867 1.45149 0.612867 1.61537C0.612867 1.77925 0.677967 1.93641 0.793846 2.05229L3.44 4.69229L0.793846 7.33229C0.736167 7.3895 0.690386 7.45756 0.659144 7.53255C0.627902 7.60754 0.611816 7.68798 0.611816 7.76922C0.611816 7.85045 0.627902 7.93089 0.659144 8.00588C0.690386 8.08087 0.736167 8.14893 0.793846 8.20614C0.851054 8.26382 0.919116 8.3096 0.994107 8.34084C1.0691 8.37208 1.14953 8.38817 1.23077 8.38817C1.31201 8.38817 1.39244 8.37208 1.46743 8.34084C1.54242 8.3096 1.61048 8.26382 1.66769 8.20614L4.30769 5.55999L6.94769 8.20614C7.0049 8.26382 7.07296 8.3096 7.14795 8.34084C7.22294 8.37208 7.30338 8.38817 7.38462 8.38817C7.46585 8.38817 7.54629 8.37208 7.62128 8.34084C7.69627 8.3096 7.76433 8.26382 7.82154 8.20614C7.87922 8.14893 7.925 8.08087 7.95624 8.00588C7.98748 7.93089 8.00357 7.85045 8.00357 7.76922C8.00357 7.68798 7.98748 7.60754 7.95624 7.53255C7.925 7.45756 7.87922 7.3895 7.82154 7.33229L5.17538 4.69229Z"
                                fill="#828282"></path>
                            </svg>
                          </a>
                          <div class="modal fade close-box" tabindex="-1" role="dialog" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered close-box-modal" role="document">
                              <div class="modal-content">
                                <!-- model content start -->
                                <div class="close-box-wrap">
                                  <span class="top-close-sign" data-dismiss="modal" aria-label="Close">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path
                                        d="M13.4099 12.0002L17.7099 7.71019C17.8982 7.52188 18.004 7.26649 18.004 7.00019C18.004 6.73388 17.8982 6.47849 17.7099 6.29019C17.5216 6.10188 17.2662 5.99609 16.9999 5.99609C16.7336 5.99609 16.4782 6.10188 16.2899 6.29019L11.9999 10.5902L7.70994 6.29019C7.52164 6.10188 7.26624 5.99609 6.99994 5.99609C6.73364 5.99609 6.47824 6.10188 6.28994 6.29019C6.10164 6.47849 5.99585 6.73388 5.99585 7.00019C5.99585 7.26649 6.10164 7.52188 6.28994 7.71019L10.5899 12.0002L6.28994 16.2902C6.19621 16.3831 6.12182 16.4937 6.07105 16.6156C6.02028 16.7375 5.99414 16.8682 5.99414 17.0002C5.99414 17.1322 6.02028 17.2629 6.07105 17.3848C6.12182 17.5066 6.19621 17.6172 6.28994 17.7102C6.3829 17.8039 6.4935 17.8783 6.61536 17.9291C6.73722 17.9798 6.86793 18.006 6.99994 18.006C7.13195 18.006 7.26266 17.9798 7.38452 17.9291C7.50638 17.8783 7.61698 17.8039 7.70994 17.7102L11.9999 13.4102L16.2899 17.7102C16.3829 17.8039 16.4935 17.8783 16.6154 17.9291C16.7372 17.9798 16.8679 18.006 16.9999 18.006C17.132 18.006 17.2627 17.9798 17.3845 17.9291C17.5064 17.8783 17.617 17.8039 17.7099 17.7102C17.8037 17.6172 17.8781 17.5066 17.9288 17.3848C17.9796 17.2629 18.0057 17.1322 18.0057 17.0002C18.0057 16.8682 17.9796 16.7375 17.9288 16.6156C17.8781 16.4937 17.8037 16.3831 17.7099 16.2902L13.4099 12.0002Z"
                                        fill="white"></path>
                                    </svg>
                                  </span>
                                  <div class="icon-box">
                                    <svg width="138" height="126" viewBox="0 0 138 126" fill="none"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <g opacity="0.83" filter="url(#filter0_b_259_6489)">
                                        <path
                                          d="M129.121 46.458C129.121 88.6315 156.616 125.49 114.839 125.49C73.0616 125.49 5.33996 132.954 5.33996 90.78C5.33996 72.2635 -6.67485 36.3341 5.3398 20.851C20.69 1.06944 39.035 0 62.4697 0C104.247 0 119.6 3.738 129.121 46.458Z"
                                          fill="url(#paint0_radial_259_6489)" fill-opacity="0.5"></path>
                                      </g>
                                      <g clip-path="url(#clip0_259_6489)">
                                        <path
                                          d="M98.8679 83.2284L79.4288 47.5216C77.9463 45.0723 75.3682 43.5898 72.5 43.5898C69.6318 43.5898 67.0537 45.0723 65.5712 47.5216L46.1321 83.2284C44.6499 85.7745 44.6176 88.8038 46.0679 91.3496C47.518 93.8954 50.1282 95.4102 53.0609 95.4102H91.939C94.8718 95.4102 97.4821 93.8954 98.9321 91.3496C100.382 88.8038 100.35 85.7745 98.8679 83.2284Z"
                                          fill="#495A79"></path>
                                        <path
                                          d="M98.9321 91.3496C97.482 93.8954 94.8718 95.4102 91.9391 95.4102H72.5V43.5898C75.3682 43.5898 77.9463 45.0724 79.4288 47.5216L98.8679 83.2285C100.35 85.7745 100.382 88.8038 98.9321 91.3496Z"
                                          fill="#42516D"></path>
                                        <path
                                          d="M96.0964 84.8721L76.6572 49.1649C75.7873 47.6826 74.2081 46.8125 72.5 46.8125C70.7919 46.8125 69.2128 47.6827 68.3429 49.1649L48.9036 84.8721C48.0014 86.3868 48.0014 88.2235 48.8716 89.7383C49.7416 91.285 51.3206 92.1875 53.0611 92.1875H91.9392C93.6796 92.1875 95.2587 91.285 96.1287 89.7383C96.9987 88.2235 96.9987 86.3868 96.0964 84.8721Z"
                                          fill="#FFDE33"></path>
                                        <path
                                          d="M96.1285 89.7383C95.2585 91.285 93.6795 92.1875 91.9391 92.1875H72.5V46.8125C74.2081 46.8125 75.7872 47.6827 76.6571 49.1649L96.0964 84.8721C96.9986 86.3868 96.9986 88.2235 96.1285 89.7383Z"
                                          fill="#FFBC33"></path>
                                        <path
                                          d="M72.5 88.9648C70.7235 88.9648 69.2773 87.5187 69.2773 85.7422C69.2773 83.9656 70.7235 82.5195 72.5 82.5195C74.2765 82.5195 75.7227 83.9656 75.7227 85.7422C75.7227 87.5187 74.2765 88.9648 72.5 88.9648Z"
                                          fill="#495A79"></path>
                                        <path
                                          d="M75.7227 76.0742C75.7227 77.8508 74.2765 79.2969 72.5 79.2969C70.7235 79.2969 69.2773 77.8508 69.2773 76.0742V59.9609C69.2773 58.1844 70.7235 56.7383 72.5 56.7383C74.2765 56.7383 75.7227 58.1844 75.7227 59.9609V76.0742Z"
                                          fill="#495A79"></path>
                                        <path
                                          d="M75.7227 85.7422C75.7227 83.9656 74.2765 82.5195 72.5 82.5195V88.9648C74.2765 88.9648 75.7227 87.5187 75.7227 85.7422Z"
                                          fill="#42516D"></path>
                                        <path
                                          d="M75.7227 76.0742V59.9609C75.7227 58.1844 74.2765 56.7383 72.5 56.7383V79.2969C74.2765 79.2969 75.7227 77.8508 75.7227 76.0742Z"
                                          fill="#42516D"></path>
                                      </g>
                                      <defs>
                                        <filter id="filter0_b_259_6489" x="-4" y="-4" width="146" height="134"
                                          filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                          <feGaussianBlur in="BackgroundImage" stdDeviation="2"></feGaussianBlur>
                                          <feComposite in2="SourceAlpha" operator="in"
                                            result="effect1_backgroundBlur_259_6489"></feComposite>
                                          <feBlend mode="normal" in="SourceGraphic"
                                            in2="effect1_backgroundBlur_259_6489" result="shape"></feBlend>
                                        </filter>
                                        <radialGradient id="paint0_radial_259_6489" cx="0" cy="0" r="1"
                                          gradientUnits="userSpaceOnUse"
                                          gradientTransform="translate(74.9013 73.9565) rotate(22.5454) scale(57.4925 49.8949)">
                                          <stop stop-color="#FFBC33"></stop>
                                          <stop offset="0.64446" stop-color="#FDCD9D" stop-opacity="0.15"></stop>
                                          <stop offset="1" stop-color="#FCD7D7" stop-opacity="0"></stop>
                                        </radialGradient>
                                        <clipPath id="clip0_259_6489">
                                          <rect width="55" height="55" fill="white" transform="translate(45 42)"></rect>
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </div>
                                  <div class="text-box">
                                    <span class="text">Are you sure you wan to Cancel / Delete it?</span>
                                  </div>
                                  <div class="btn-box">
                                    <span class="close-btn no" data-dismiss="modal">no</span>
                                    <span class="close-btn yes">Delete</span>
                                  </div>
                                </div>
                                <!-- model content end -->
                              </div>
                            </div>
                          </div>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div class="new-add text-right">
                  <span class="single-action-item ">
                    <a href="#" class="action-btn">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M1.53345 8.02443C1.53345 3.15636 3.15661 1.5332 8.02468 1.5332C12.8927 1.5332 14.5159 3.15636 14.5159 8.02443C14.5159 12.8925 12.8927 14.5157 8.02468 14.5157C3.15661 14.5157 1.53345 12.8925 1.53345 8.02443Z"
                          stroke="#4F4F4F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8.02466 5.6416V10.4072" stroke="#4F4F4F" stroke-width="1.5" stroke-linecap="round"
                          stroke-linejoin="round" />
                        <path d="M10.4099 8.02441H5.6394" stroke="#4F4F4F" stroke-width="1.5" stroke-linecap="round"
                          stroke-linejoin="round" />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="big-popup order-details-popup-wrapper creat-new-order">
              <div class="content">
                <h3 class="form-title">Order From:</h3>
                <div class="shop-details">
                  <span class="inner-title">দোকানের বিস্তারিতঃ</span>
                  <form action="">
                    <div class="form-group">
                      <input type="text" placeholder="নাম, দোকানের নাম অথবা আইডি দিয়ে খুজুন">
                      <button type="button">
                        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M6.82592 0.333496C10.4059 0.333496 13.3179 3.2455 13.3179 6.8255C13.3179 8.51453 12.6697 10.055 11.609 11.2112L13.6962 13.294C13.8915 13.4893 13.8922 13.8053 13.6969 14.0006C13.5995 14.0993 13.4709 14.148 13.3429 14.148C13.2155 14.148 13.0875 14.0993 12.9895 14.002L10.8772 11.8955C9.76597 12.7854 8.35704 13.3182 6.82592 13.3182C3.24592 13.3182 0.333252 10.4055 0.333252 6.8255C0.333252 3.2455 3.24592 0.333496 6.82592 0.333496ZM6.82592 1.3335C3.79725 1.3335 1.33325 3.79683 1.33325 6.8255C1.33325 9.85416 3.79725 12.3182 6.82592 12.3182C9.85392 12.3182 12.3179 9.85416 12.3179 6.8255C12.3179 3.79683 9.85392 1.3335 6.82592 1.3335Z"
                            fill="#BDBDBD" />
                        </svg>
                      </button>
                    </div>

                    <div class="details">
                      <p class="details customar-name"> আবদুল মালেক আমান</p>
                      <p class="details customar-shop-name">মের্সাস হালিমা স্টোর</p>
                      <p class="details customar-address">আচরি মার্কেট , সড়ক ১২, সেক্টর ৩, উত্তরা, ঢাকা </p>
                      <p class="details customar-number">০১৫৬ ৯৩ ৬৯ ৫৩ </p>
                      <p class="details customar-area">উত্তরা </p>
                    </div>
                    <div class="btn-wrapper text-right mt-5">
                      <button type="button" class="btn-common">নতুন যোগ করুন</button>
                    </div>
                  </form>
                </div>
                <div class="order-product-details">
                  <span class="section-title">Order Amount:</span>
                  <div class="product-number">
                    <span class="total-product-number">সর্বমোট পণ্যঃ ২১ টি </span>
                  </div>
                  <div class="pricing-summary-wrap">
                    <span class="single-pricing-item total-price">
                      <span class="title">মোট মূল্য</span>
                      <span class="price">৫৭,৮৬৫/-</span>
                    </span>
                    <span class="single-pricing-item cdo-price">
                      <span class="title">ক্যাশ অন ডেলিভারি (CDO ) চার্জ </span>
                      <span class="price">৮৬৮/-</span>
                    </span>
                    <span class="single-pricing-item disc-price">
                      <span class="title">কুপন ডিসকাউন্ট</span>
                      <span class="price">১২৮/- </span>
                    </span>
                    <span class="single-pricing-item gross-price">
                      <span class="title">সর্বমোট মূল্য</span>
                      <span class="price">৫৮,৭৩৩/- </span>
                    </span>
                  </div>
                  <div class="btn-wrapper add-product text-right mt-4">
                    <button type="button" class="btn-common">Proceed</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CreateNewOrder',

    data() {
      return {

      };
    },

    mounted() {

    },

    methods: {

    },
  };
</script>

<style lang="scss" scoped>

</style>