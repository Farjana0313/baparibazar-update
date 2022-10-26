<template>
    <div class="all-popup-container">

<!-- order start -->
<div id="order" class="sidenav">
  <div class="big-popup order-details-popup-wrapper">
    <div class="content">
      <div class="top-navigation">
        <div class="left-content"></div>
        <div class="right-content">
          <ul>
            <li>
              <span class="print">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6 5.25C6 4.65326 6.23705 4.08097 6.65901 3.65901C7.08097 3.23705 7.65326 3 8.25 3H15.75C16.3467 3 16.919 3.23705 17.341 3.65901C17.7629 4.08097 18 4.65326 18 5.25V6H19.5C20.2956 6 21.0587 6.31607 21.6213 6.87868C22.1839 7.44129 22.5 8.20435 22.5 9V15.75C22.5 16.3467 22.2629 16.919 21.841 17.341C21.419 17.7629 20.8467 18 20.25 18H18.15V18.75C18.15 19.3467 17.9129 19.919 17.491 20.341C17.069 20.7629 16.4967 21 15.9 21H8.25C7.65326 21 7.08097 20.7629 6.65901 20.341C6.23705 19.919 6 19.3467 6 18.75V18H3.75C3.15326 18 2.58097 17.7629 2.15901 17.341C1.73705 16.919 1.5 16.3467 1.5 15.75V9C1.5 8.20435 1.81607 7.44129 2.37868 6.87868C2.94129 6.31607 3.70435 6 4.5 6H6V5.25ZM16.5 6V5.25C16.5 5.05109 16.421 4.86032 16.2803 4.71967C16.1397 4.57902 15.9489 4.5 15.75 4.5H8.25C8.05109 4.5 7.86032 4.57902 7.71967 4.71967C7.57902 4.86032 7.5 5.05109 7.5 5.25V6H16.5ZM6 7.5H4.5C4.10218 7.5 3.72064 7.65804 3.43934 7.93934C3.15804 8.22064 3 8.60218 3 9V15.75C3 15.9489 3.07902 16.1397 3.21967 16.2803C3.36032 16.421 3.55109 16.5 3.75 16.5H6V15.75C6 15.1533 6.23705 14.581 6.65901 14.159C7.08097 13.7371 7.65326 13.5 8.25 13.5H15.9C16.4967 13.5 17.069 13.7371 17.491 14.159C17.9129 14.581 18.15 15.1533 18.15 15.75V16.5H20.25C20.4489 16.5 20.6397 16.421 20.7803 16.2803C20.921 16.1397 21 15.9489 21 15.75V9C21 8.60218 20.842 8.22064 20.5607 7.93934C20.2794 7.65804 19.8978 7.5 19.5 7.5H6ZM8.25 15C8.05109 15 7.86032 15.079 7.71967 15.2197C7.57902 15.3603 7.5 15.5511 7.5 15.75V18.75C7.5 18.9489 7.57902 19.1397 7.71967 19.2803C7.86032 19.421 8.05109 19.5 8.25 19.5H15.9C16.0989 19.5 16.2897 19.421 16.4303 19.2803C16.571 19.1397 16.65 18.9489 16.65 18.75V15.75C16.65 15.5511 16.571 15.3603 16.4303 15.2197C16.2897 15.079 16.0989 15 15.9 15H8.25Z"
                    fill="#262626"></path>
                </svg>
              </span>
            </li>
            <li>
              <span class="confirmed">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.44019 9.99995L8.81419 12.373L13.5602 7.62695" stroke="#262626" stroke-width="1.5"
                    stroke-linecap="round" stroke-linejoin="round"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M0.749756 10C0.749756 16.937 3.06276 19.25 9.99976 19.25C16.9368 19.25 19.2498 16.937 19.2498 10C19.2498 3.063 16.9368 0.75 9.99976 0.75C3.06276 0.75 0.749756 3.063 0.749756 10Z"
                    stroke="#262626" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </span>
            </li>
            <li>
              <span class="save">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3 1.5C2.60218 1.5 2.22064 1.65804 1.93934 1.93934C1.65804 2.22064 1.5 2.60218 1.5 3V15C1.5 15.3978 1.65804 15.7794 1.93934 16.0607C2.22064 16.342 2.60218 16.5 3 16.5V11.25C3 10.6533 3.23705 10.081 3.65901 9.65901C4.08097 9.23705 4.65326 9 5.25 9H12.75C13.3467 9 13.919 9.23705 14.341 9.65901C14.7629 10.081 15 10.6533 15 11.25V16.5C15.3978 16.5 15.7794 16.342 16.0607 16.0607C16.342 15.7794 16.5 15.3978 16.5 15V5.43C16.4999 5.03221 16.3418 4.65074 16.0605 4.3695L13.629 1.938C13.3475 1.65723 12.9661 1.49969 12.5685 1.5H12V3.75C12 4.34674 11.7629 4.91903 11.341 5.34099C10.919 5.76295 10.3467 6 9.75 6H6.75C6.15326 6 5.58097 5.76295 5.15901 5.34099C4.73705 4.91903 4.5 4.34674 4.5 3.75V1.5H3ZM6 1.5V3.75C6 3.94891 6.07902 4.13968 6.21967 4.28033C6.36032 4.42098 6.55109 4.5 6.75 4.5H9.75C9.94891 4.5 10.1397 4.42098 10.2803 4.28033C10.421 4.13968 10.5 3.94891 10.5 3.75V1.5H6ZM13.5 16.5V11.25C13.5 11.0511 13.421 10.8603 13.2803 10.7197C13.1397 10.579 12.9489 10.5 12.75 10.5H5.25C5.05109 10.5 4.86032 10.579 4.71967 10.7197C4.57902 10.8603 4.5 11.0511 4.5 11.25V16.5H13.5ZM0 3C0 2.20435 0.31607 1.44129 0.87868 0.87868C1.44129 0.31607 2.20435 0 3 0H12.5685C13.3641 0.000169912 14.127 0.316352 14.6895 0.879L17.121 3.3105C17.6836 3.87298 17.9998 4.63592 18 5.4315V15C18 15.7956 17.6839 16.5587 17.1213 17.1213C16.5587 17.6839 15.7956 18 15 18H3C2.20435 18 1.44129 17.6839 0.87868 17.1213C0.31607 16.5587 0 15.7956 0 15V3Z"
                    fill="#262626"></path>
                </svg>
              </span>
            </li>
            <li>
              <a class="close-01 " href="javascript:void(0)" onclick="orderPopCls()">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.40994 6.99994L12.7099 2.70994C12.8982 2.52164 13.004 2.26624 13.004 1.99994C13.004 1.73364 12.8982 1.47825 12.7099 1.28994C12.5216 1.10164 12.2662 0.99585 11.9999 0.99585C11.7336 0.99585 11.4782 1.10164 11.2899 1.28994L6.99994 5.58994L2.70994 1.28994C2.52164 1.10164 2.26624 0.99585 1.99994 0.99585C1.73364 0.99585 1.47824 1.10164 1.28994 1.28994C1.10164 1.47825 0.995847 1.73364 0.995847 1.99994C0.995847 2.26624 1.10164 2.52164 1.28994 2.70994L5.58994 6.99994L1.28994 11.2899C1.19621 11.3829 1.12182 11.4935 1.07105 11.6154C1.02028 11.7372 0.994141 11.8679 0.994141 11.9999C0.994141 12.132 1.02028 12.2627 1.07105 12.3845C1.12182 12.5064 1.19621 12.617 1.28994 12.7099C1.3829 12.8037 1.4935 12.8781 1.61536 12.9288C1.73722 12.9796 1.86793 13.0057 1.99994 13.0057C2.13195 13.0057 2.26266 12.9796 2.38452 12.9288C2.50638 12.8781 2.61698 12.8037 2.70994 12.7099L6.99994 8.40994L11.2899 12.7099C11.3829 12.8037 11.4935 12.8781 11.6154 12.9288C11.7372 12.9796 11.8679 13.0057 11.9999 13.0057C12.132 13.0057 12.2627 12.9796 12.3845 12.9288C12.5064 12.8781 12.617 12.8037 12.7099 12.7099C12.8037 12.617 12.8781 12.5064 12.9288 12.3845C12.9796 12.2627 13.0057 12.132 13.0057 11.9999C13.0057 11.8679 12.9796 11.7372 12.9288 11.6154C12.8781 11.4935 12.8037 11.3829 12.7099 11.2899L8.40994 6.99994Z"
                    fill="#262626"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="order-meta">
        <div class="left-content">
          <ul class="order-for">
            <li class="order-id">
              <span class="title">Order ID:</span>
              <sapn class="details">বপ১২৫৬৫৯৮৪৩</sapn>
            </li>
            <li class="order-date">
              <span class="title">Order Date:</span>
              <sapn class="details">১৮/১০/২০২১</sapn>
            </li>
            <li class="order-time">
              <span class="title">Order Time:</span>
              <sapn class="details">10:25 am</sapn>
            </li>
            <li class="delevery-date">
              <span class="title">Delivery Date:</span>
              <sapn class="details"></sapn>
            </li>
          </ul>
        </div>
        <div class="right-content">
          <ul class="order-from">
            <li>
              <span class="title">Order From:</span>
              <sapn class="details customar-name">মের্সাস হালিমা স্টোর</sapn>
              <sapn class="details customar-address">আচরি মার্কেট , সড়ক ১২, সেক্টর ৩, উত্তরা, ঢাকা </sapn>
              <sapn class="details customar-number">০১৫৬ ৯৩ ৬৯ ৫৩ </sapn>
              <sapn class="details customar-area">উত্তরা </sapn>
            </li>
          </ul>
        </div>
      </div>
      <div class="order-product-details">
        <div class="product-number">
          <span class="total-product-number">সর্বমোট পণ্যঃ ২১ টি </span>
        </div>
        <div class="product-details-inner">
          <span class="section-title">সদাই তালিকাঃ</span>
          <!-- order details item accordion start -->
          <div class="order-details-accordion">
            <ul class="nav">
              <li class="nav-item menu-items">
                <span class="nav-link" data-toggle="collapse" href="#item_01" aria-expanded="false"
                  aria-controls="ui-basic">
                  <span class="left-content">
                    <div class="product-name">চাল</div>
                  </span>
                  <span class="right-content">
                    <span class="amount">৫৭,৮৬৫/-</span>
                    <div class="icon-box">
                      <span class="down-click">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M13.1665 6.99984C13.1665 2.37517 11.6245 0.833171 6.99984 0.833171C2.37517 0.833171 0.833171 2.37517 0.833171 6.99984C0.833171 11.6245 2.37517 13.1665 6.99984 13.1665C11.6245 13.1665 13.1665 11.6245 13.1665 6.99984Z"
                            fill="#262626" stroke="#262626" stroke-linecap="round" stroke-linejoin="round">
                          </path>
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M9.31421 7.96118C9.31421 7.96118 7.71954 5.63718 6.99954 5.63718C6.27954 5.63718 4.68621 7.96118 4.68621 7.96118"
                            fill="#262626"></path>
                          <path
                            d="M9.31421 7.96118C9.31421 7.96118 7.71954 5.63718 6.99954 5.63718C6.27954 5.63718 4.68621 7.96118 4.68621 7.96118"
                            stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                      </span>
                      <span class="up-click">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M0.833496 7.00016C0.833496 11.6248 2.3755 13.1668 7.00016 13.1668C11.6248 13.1668 13.1668 11.6248 13.1668 7.00016C13.1668 2.3755 11.6248 0.833496 7.00016 0.833496C2.3755 0.833496 0.833496 2.3755 0.833496 7.00016Z"
                            stroke="#828282" stroke-linecap="round" stroke-linejoin="round"></path>
                          <path
                            d="M4.68579 6.03882C4.68579 6.03882 6.28046 8.36282 7.00046 8.36282C7.72046 8.36282 9.31379 6.03882 9.31379 6.03882"
                            stroke="#828282" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                      </span>
                    </div>
                  </span>

                </span>
                <div class="collapse" id="item_01">
                  <div class="single-product-list-item">
                    <div class="first-row">
                      <div class="left-content">
                        <span class="brand-name">মোজ্জামেল নাজিরশাইল</span>
                      </div>
                      <div class="right-content">
                        <span class="span cart-control-wrap">
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
                        </span>
                        <span class="amount">৫৭,৮৬৫/-</span>
                        <span class="icon-box close-item">
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M8.93996 8.00004L11.8066 5.14004C11.9322 5.01451 12.0027 4.84424 12.0027 4.66671C12.0027 4.48917 11.9322 4.31891 11.8066 4.19338C11.6811 4.06784 11.5108 3.99731 11.3333 3.99731C11.1558 3.99731 10.9855 4.06784 10.86 4.19338L7.99996 7.06004L5.13996 4.19338C5.01442 4.06784 4.84416 3.99731 4.66663 3.99731C4.48909 3.99731 4.31883 4.06784 4.19329 4.19338C4.06776 4.31891 3.99723 4.48917 3.99723 4.66671C3.99723 4.84424 4.06776 5.01451 4.19329 5.14004L7.05996 8.00004L4.19329 10.86C4.13081 10.922 4.08121 10.9958 4.04737 11.077C4.01352 11.1582 3.99609 11.2454 3.99609 11.3334C3.99609 11.4214 4.01352 11.5085 4.04737 11.5898C4.08121 11.671 4.13081 11.7447 4.19329 11.8067C4.25527 11.8692 4.329 11.9188 4.41024 11.9526C4.49148 11.9865 4.57862 12.0039 4.66663 12.0039C4.75463 12.0039 4.84177 11.9865 4.92301 11.9526C5.00425 11.9188 5.07798 11.8692 5.13996 11.8067L7.99996 8.94004L10.86 11.8067C10.9219 11.8692 10.9957 11.9188 11.0769 11.9526C11.1581 11.9865 11.2453 12.0039 11.3333 12.0039C11.4213 12.0039 11.5084 11.9865 11.5897 11.9526C11.6709 11.9188 11.7446 11.8692 11.8066 11.8067C11.8691 11.7447 11.9187 11.671 11.9526 11.5898C11.9864 11.5085 12.0038 11.4214 12.0038 11.3334C12.0038 11.2454 11.9864 11.1582 11.9526 11.077C11.9187 10.9958 11.8691 10.922 11.8066 10.86L8.93996 8.00004Z"
                              fill="#262626"></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div class="second-row">
                      <span class="meta-details weight">২৫ কেজি বস্তা</span>
                      <span class="meta-details price">১৭৬৫/- প্রতি বস্তা</span>
                    </div>
                  </div>
                  <div class="single-product-list-item">
                    <div class="first-row">
                      <div class="left-content">
                        <span class="brand-name">মোজ্জামেল নাজিরশাইল</span>
                      </div>
                      <div class="right-content">
                        <span class="span cart-control-wrap">
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
                        </span>
                        <span class="amount">৫৭,৮৬৫/-</span>
                        <span class="icon-box close-item">
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M8.93996 8.00004L11.8066 5.14004C11.9322 5.01451 12.0027 4.84424 12.0027 4.66671C12.0027 4.48917 11.9322 4.31891 11.8066 4.19338C11.6811 4.06784 11.5108 3.99731 11.3333 3.99731C11.1558 3.99731 10.9855 4.06784 10.86 4.19338L7.99996 7.06004L5.13996 4.19338C5.01442 4.06784 4.84416 3.99731 4.66663 3.99731C4.48909 3.99731 4.31883 4.06784 4.19329 4.19338C4.06776 4.31891 3.99723 4.48917 3.99723 4.66671C3.99723 4.84424 4.06776 5.01451 4.19329 5.14004L7.05996 8.00004L4.19329 10.86C4.13081 10.922 4.08121 10.9958 4.04737 11.077C4.01352 11.1582 3.99609 11.2454 3.99609 11.3334C3.99609 11.4214 4.01352 11.5085 4.04737 11.5898C4.08121 11.671 4.13081 11.7447 4.19329 11.8067C4.25527 11.8692 4.329 11.9188 4.41024 11.9526C4.49148 11.9865 4.57862 12.0039 4.66663 12.0039C4.75463 12.0039 4.84177 11.9865 4.92301 11.9526C5.00425 11.9188 5.07798 11.8692 5.13996 11.8067L7.99996 8.94004L10.86 11.8067C10.9219 11.8692 10.9957 11.9188 11.0769 11.9526C11.1581 11.9865 11.2453 12.0039 11.3333 12.0039C11.4213 12.0039 11.5084 11.9865 11.5897 11.9526C11.6709 11.9188 11.7446 11.8692 11.8066 11.8067C11.8691 11.7447 11.9187 11.671 11.9526 11.5898C11.9864 11.5085 12.0038 11.4214 12.0038 11.3334C12.0038 11.2454 11.9864 11.1582 11.9526 11.077C11.9187 10.9958 11.8691 10.922 11.8066 10.86L8.93996 8.00004Z"
                              fill="#262626"></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div class="second-row">
                      <span class="meta-details weight">২৫ কেজি বস্তা</span>
                      <span class="meta-details price">১৭৬৫/- প্রতি বস্তা</span>
                    </div>
                  </div>
                </div>
              </li>

              <li class="nav-item menu-items">
                <span class="nav-link" data-toggle="collapse" href="#item_02" aria-expanded="false"
                  aria-controls="ui-basic">
                  <span class="left-content">
                    <div class="product-name">ডাল</div>
                  </span>
                  <span class="right-content">
                    <span class="amount">৫৭,৮৬৫/-</span>
                    <div class="icon-box">
                      <span class="down-click">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M13.1665 6.99984C13.1665 2.37517 11.6245 0.833171 6.99984 0.833171C2.37517 0.833171 0.833171 2.37517 0.833171 6.99984C0.833171 11.6245 2.37517 13.1665 6.99984 13.1665C11.6245 13.1665 13.1665 11.6245 13.1665 6.99984Z"
                            fill="#262626" stroke="#262626" stroke-linecap="round" stroke-linejoin="round">
                          </path>
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M9.31421 7.96118C9.31421 7.96118 7.71954 5.63718 6.99954 5.63718C6.27954 5.63718 4.68621 7.96118 4.68621 7.96118"
                            fill="#262626"></path>
                          <path
                            d="M9.31421 7.96118C9.31421 7.96118 7.71954 5.63718 6.99954 5.63718C6.27954 5.63718 4.68621 7.96118 4.68621 7.96118"
                            stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                      </span>
                      <span class="up-click">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M0.833496 7.00016C0.833496 11.6248 2.3755 13.1668 7.00016 13.1668C11.6248 13.1668 13.1668 11.6248 13.1668 7.00016C13.1668 2.3755 11.6248 0.833496 7.00016 0.833496C2.3755 0.833496 0.833496 2.3755 0.833496 7.00016Z"
                            stroke="#828282" stroke-linecap="round" stroke-linejoin="round"></path>
                          <path
                            d="M4.68579 6.03882C4.68579 6.03882 6.28046 8.36282 7.00046 8.36282C7.72046 8.36282 9.31379 6.03882 9.31379 6.03882"
                            stroke="#828282" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                      </span>
                    </div>
                  </span>

                </span>
                <div class="collapse" id="item_02">
                  <div class="single-product-list-item">
                    <div class="first-row">
                      <div class="left-content">
                        <span class="brand-name">মোজ্জামেল নাজিরশাইল</span>
                      </div>
                      <div class="right-content">
                        <span class="span cart-control-wrap">
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
                        </span>
                        <span class="amount">৫৭,৮৬৫/-</span>
                        <span class="icon-box close-item">
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M8.93996 8.00004L11.8066 5.14004C11.9322 5.01451 12.0027 4.84424 12.0027 4.66671C12.0027 4.48917 11.9322 4.31891 11.8066 4.19338C11.6811 4.06784 11.5108 3.99731 11.3333 3.99731C11.1558 3.99731 10.9855 4.06784 10.86 4.19338L7.99996 7.06004L5.13996 4.19338C5.01442 4.06784 4.84416 3.99731 4.66663 3.99731C4.48909 3.99731 4.31883 4.06784 4.19329 4.19338C4.06776 4.31891 3.99723 4.48917 3.99723 4.66671C3.99723 4.84424 4.06776 5.01451 4.19329 5.14004L7.05996 8.00004L4.19329 10.86C4.13081 10.922 4.08121 10.9958 4.04737 11.077C4.01352 11.1582 3.99609 11.2454 3.99609 11.3334C3.99609 11.4214 4.01352 11.5085 4.04737 11.5898C4.08121 11.671 4.13081 11.7447 4.19329 11.8067C4.25527 11.8692 4.329 11.9188 4.41024 11.9526C4.49148 11.9865 4.57862 12.0039 4.66663 12.0039C4.75463 12.0039 4.84177 11.9865 4.92301 11.9526C5.00425 11.9188 5.07798 11.8692 5.13996 11.8067L7.99996 8.94004L10.86 11.8067C10.9219 11.8692 10.9957 11.9188 11.0769 11.9526C11.1581 11.9865 11.2453 12.0039 11.3333 12.0039C11.4213 12.0039 11.5084 11.9865 11.5897 11.9526C11.6709 11.9188 11.7446 11.8692 11.8066 11.8067C11.8691 11.7447 11.9187 11.671 11.9526 11.5898C11.9864 11.5085 12.0038 11.4214 12.0038 11.3334C12.0038 11.2454 11.9864 11.1582 11.9526 11.077C11.9187 10.9958 11.8691 10.922 11.8066 10.86L8.93996 8.00004Z"
                              fill="#262626"></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div class="second-row">
                      <span class="meta-details weight">২৫ কেজি বস্তা</span>
                      <span class="meta-details price">১৭৬৫/- প্রতি বস্তা</span>
                    </div>
                  </div>
                  <div class="single-product-list-item">
                    <div class="first-row">
                      <div class="left-content">
                        <span class="brand-name">মোজ্জামেল নাজিরশাইল</span>
                      </div>
                      <div class="right-content">
                        <span class="span cart-control-wrap">
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
                        </span>
                        <span class="amount">৫৭,৮৬৫/-</span>
                        <span class="icon-box close-item">
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M8.93996 8.00004L11.8066 5.14004C11.9322 5.01451 12.0027 4.84424 12.0027 4.66671C12.0027 4.48917 11.9322 4.31891 11.8066 4.19338C11.6811 4.06784 11.5108 3.99731 11.3333 3.99731C11.1558 3.99731 10.9855 4.06784 10.86 4.19338L7.99996 7.06004L5.13996 4.19338C5.01442 4.06784 4.84416 3.99731 4.66663 3.99731C4.48909 3.99731 4.31883 4.06784 4.19329 4.19338C4.06776 4.31891 3.99723 4.48917 3.99723 4.66671C3.99723 4.84424 4.06776 5.01451 4.19329 5.14004L7.05996 8.00004L4.19329 10.86C4.13081 10.922 4.08121 10.9958 4.04737 11.077C4.01352 11.1582 3.99609 11.2454 3.99609 11.3334C3.99609 11.4214 4.01352 11.5085 4.04737 11.5898C4.08121 11.671 4.13081 11.7447 4.19329 11.8067C4.25527 11.8692 4.329 11.9188 4.41024 11.9526C4.49148 11.9865 4.57862 12.0039 4.66663 12.0039C4.75463 12.0039 4.84177 11.9865 4.92301 11.9526C5.00425 11.9188 5.07798 11.8692 5.13996 11.8067L7.99996 8.94004L10.86 11.8067C10.9219 11.8692 10.9957 11.9188 11.0769 11.9526C11.1581 11.9865 11.2453 12.0039 11.3333 12.0039C11.4213 12.0039 11.5084 11.9865 11.5897 11.9526C11.6709 11.9188 11.7446 11.8692 11.8066 11.8067C11.8691 11.7447 11.9187 11.671 11.9526 11.5898C11.9864 11.5085 12.0038 11.4214 12.0038 11.3334C12.0038 11.2454 11.9864 11.1582 11.9526 11.077C11.9187 10.9958 11.8691 10.922 11.8066 10.86L8.93996 8.00004Z"
                              fill="#262626"></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div class="second-row">
                      <span class="meta-details weight">২৫ কেজি বস্তা</span>
                      <span class="meta-details price">১৭৬৫/- প্রতি বস্তা</span>
                    </div>
                  </div>
                </div>
              </li>

              <li class="nav-item menu-items">
                <span class="nav-link" data-toggle="collapse" href="#item_03" aria-expanded="false"
                  aria-controls="ui-basic">
                  <span class="left-content">
                    <div class="product-name">পেঁয়াজ</div>
                  </span>
                  <span class="right-content">
                    <span class="amount">৫৭,৮৬৫/-</span>
                    <div class="icon-box">
                      <span class="down-click">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M13.1665 6.99984C13.1665 2.37517 11.6245 0.833171 6.99984 0.833171C2.37517 0.833171 0.833171 2.37517 0.833171 6.99984C0.833171 11.6245 2.37517 13.1665 6.99984 13.1665C11.6245 13.1665 13.1665 11.6245 13.1665 6.99984Z"
                            fill="#262626" stroke="#262626" stroke-linecap="round" stroke-linejoin="round">
                          </path>
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M9.31421 7.96118C9.31421 7.96118 7.71954 5.63718 6.99954 5.63718C6.27954 5.63718 4.68621 7.96118 4.68621 7.96118"
                            fill="#262626"></path>
                          <path
                            d="M9.31421 7.96118C9.31421 7.96118 7.71954 5.63718 6.99954 5.63718C6.27954 5.63718 4.68621 7.96118 4.68621 7.96118"
                            stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                      </span>
                      <span class="up-click">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M0.833496 7.00016C0.833496 11.6248 2.3755 13.1668 7.00016 13.1668C11.6248 13.1668 13.1668 11.6248 13.1668 7.00016C13.1668 2.3755 11.6248 0.833496 7.00016 0.833496C2.3755 0.833496 0.833496 2.3755 0.833496 7.00016Z"
                            stroke="#828282" stroke-linecap="round" stroke-linejoin="round"></path>
                          <path
                            d="M4.68579 6.03882C4.68579 6.03882 6.28046 8.36282 7.00046 8.36282C7.72046 8.36282 9.31379 6.03882 9.31379 6.03882"
                            stroke="#828282" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                      </span>
                    </div>
                  </span>

                </span>
                <div class="collapse" id="item_03">
                  <div class="single-product-list-item">
                    <div class="first-row">
                      <div class="left-content">
                        <span class="brand-name">মোজ্জামেল নাজিরশাইল</span>
                      </div>
                      <div class="right-content">
                        <span class="span cart-control-wrap">
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
                        </span>
                        <span class="amount">৫৭,৮৬৫/-</span>
                        <span class="icon-box close-item">
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M8.93996 8.00004L11.8066 5.14004C11.9322 5.01451 12.0027 4.84424 12.0027 4.66671C12.0027 4.48917 11.9322 4.31891 11.8066 4.19338C11.6811 4.06784 11.5108 3.99731 11.3333 3.99731C11.1558 3.99731 10.9855 4.06784 10.86 4.19338L7.99996 7.06004L5.13996 4.19338C5.01442 4.06784 4.84416 3.99731 4.66663 3.99731C4.48909 3.99731 4.31883 4.06784 4.19329 4.19338C4.06776 4.31891 3.99723 4.48917 3.99723 4.66671C3.99723 4.84424 4.06776 5.01451 4.19329 5.14004L7.05996 8.00004L4.19329 10.86C4.13081 10.922 4.08121 10.9958 4.04737 11.077C4.01352 11.1582 3.99609 11.2454 3.99609 11.3334C3.99609 11.4214 4.01352 11.5085 4.04737 11.5898C4.08121 11.671 4.13081 11.7447 4.19329 11.8067C4.25527 11.8692 4.329 11.9188 4.41024 11.9526C4.49148 11.9865 4.57862 12.0039 4.66663 12.0039C4.75463 12.0039 4.84177 11.9865 4.92301 11.9526C5.00425 11.9188 5.07798 11.8692 5.13996 11.8067L7.99996 8.94004L10.86 11.8067C10.9219 11.8692 10.9957 11.9188 11.0769 11.9526C11.1581 11.9865 11.2453 12.0039 11.3333 12.0039C11.4213 12.0039 11.5084 11.9865 11.5897 11.9526C11.6709 11.9188 11.7446 11.8692 11.8066 11.8067C11.8691 11.7447 11.9187 11.671 11.9526 11.5898C11.9864 11.5085 12.0038 11.4214 12.0038 11.3334C12.0038 11.2454 11.9864 11.1582 11.9526 11.077C11.9187 10.9958 11.8691 10.922 11.8066 10.86L8.93996 8.00004Z"
                              fill="#262626"></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div class="second-row">
                      <span class="meta-details weight">২৫ কেজি বস্তা</span>
                      <span class="meta-details price">১৭৬৫/- প্রতি বস্তা</span>
                    </div>
                  </div>
                  <div class="single-product-list-item">
                    <div class="first-row">
                      <div class="left-content">
                        <span class="brand-name">মোজ্জামেল নাজিরশাইল</span>
                      </div>
                      <div class="right-content">
                        <span class="span cart-control-wrap">
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
                        </span>
                        <span class="amount">৫৭,৮৬৫/-</span>
                        <span class="icon-box close-item">
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M8.93996 8.00004L11.8066 5.14004C11.9322 5.01451 12.0027 4.84424 12.0027 4.66671C12.0027 4.48917 11.9322 4.31891 11.8066 4.19338C11.6811 4.06784 11.5108 3.99731 11.3333 3.99731C11.1558 3.99731 10.9855 4.06784 10.86 4.19338L7.99996 7.06004L5.13996 4.19338C5.01442 4.06784 4.84416 3.99731 4.66663 3.99731C4.48909 3.99731 4.31883 4.06784 4.19329 4.19338C4.06776 4.31891 3.99723 4.48917 3.99723 4.66671C3.99723 4.84424 4.06776 5.01451 4.19329 5.14004L7.05996 8.00004L4.19329 10.86C4.13081 10.922 4.08121 10.9958 4.04737 11.077C4.01352 11.1582 3.99609 11.2454 3.99609 11.3334C3.99609 11.4214 4.01352 11.5085 4.04737 11.5898C4.08121 11.671 4.13081 11.7447 4.19329 11.8067C4.25527 11.8692 4.329 11.9188 4.41024 11.9526C4.49148 11.9865 4.57862 12.0039 4.66663 12.0039C4.75463 12.0039 4.84177 11.9865 4.92301 11.9526C5.00425 11.9188 5.07798 11.8692 5.13996 11.8067L7.99996 8.94004L10.86 11.8067C10.9219 11.8692 10.9957 11.9188 11.0769 11.9526C11.1581 11.9865 11.2453 12.0039 11.3333 12.0039C11.4213 12.0039 11.5084 11.9865 11.5897 11.9526C11.6709 11.9188 11.7446 11.8692 11.8066 11.8067C11.8691 11.7447 11.9187 11.671 11.9526 11.5898C11.9864 11.5085 12.0038 11.4214 12.0038 11.3334C12.0038 11.2454 11.9864 11.1582 11.9526 11.077C11.9187 10.9958 11.8691 10.922 11.8066 10.86L8.93996 8.00004Z"
                              fill="#262626"></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div class="second-row">
                      <span class="meta-details weight">২৫ কেজি বস্তা</span>
                      <span class="meta-details price">১৭৬৫/- প্রতি বস্তা</span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <!-- order details item accordion end -->
          <div class="add-product-wrap">
            <a href="#" class="add-product-01">আরো পণ্য যোগ করুন</a>
          </div>

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
      </div>
    </div>
  </div>
</div>
<!-- order end -->

<!-- sales order start -->
<div id="sales_order" class="sidenav">
  <div class="big-popup order-details-popup-wrapper">
    <div class="content">
      <div class="top-navigation">
        <div class="left-content">
          Payment <span class="status-btn pending">pending</span>
        </div>
        <div class="right-content">
          <ul>
            <li>
              <span class="print">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6 5.25C6 4.65326 6.23705 4.08097 6.65901 3.65901C7.08097 3.23705 7.65326 3 8.25 3H15.75C16.3467 3 16.919 3.23705 17.341 3.65901C17.7629 4.08097 18 4.65326 18 5.25V6H19.5C20.2956 6 21.0587 6.31607 21.6213 6.87868C22.1839 7.44129 22.5 8.20435 22.5 9V15.75C22.5 16.3467 22.2629 16.919 21.841 17.341C21.419 17.7629 20.8467 18 20.25 18H18.15V18.75C18.15 19.3467 17.9129 19.919 17.491 20.341C17.069 20.7629 16.4967 21 15.9 21H8.25C7.65326 21 7.08097 20.7629 6.65901 20.341C6.23705 19.919 6 19.3467 6 18.75V18H3.75C3.15326 18 2.58097 17.7629 2.15901 17.341C1.73705 16.919 1.5 16.3467 1.5 15.75V9C1.5 8.20435 1.81607 7.44129 2.37868 6.87868C2.94129 6.31607 3.70435 6 4.5 6H6V5.25ZM16.5 6V5.25C16.5 5.05109 16.421 4.86032 16.2803 4.71967C16.1397 4.57902 15.9489 4.5 15.75 4.5H8.25C8.05109 4.5 7.86032 4.57902 7.71967 4.71967C7.57902 4.86032 7.5 5.05109 7.5 5.25V6H16.5ZM6 7.5H4.5C4.10218 7.5 3.72064 7.65804 3.43934 7.93934C3.15804 8.22064 3 8.60218 3 9V15.75C3 15.9489 3.07902 16.1397 3.21967 16.2803C3.36032 16.421 3.55109 16.5 3.75 16.5H6V15.75C6 15.1533 6.23705 14.581 6.65901 14.159C7.08097 13.7371 7.65326 13.5 8.25 13.5H15.9C16.4967 13.5 17.069 13.7371 17.491 14.159C17.9129 14.581 18.15 15.1533 18.15 15.75V16.5H20.25C20.4489 16.5 20.6397 16.421 20.7803 16.2803C20.921 16.1397 21 15.9489 21 15.75V9C21 8.60218 20.842 8.22064 20.5607 7.93934C20.2794 7.65804 19.8978 7.5 19.5 7.5H6ZM8.25 15C8.05109 15 7.86032 15.079 7.71967 15.2197C7.57902 15.3603 7.5 15.5511 7.5 15.75V18.75C7.5 18.9489 7.57902 19.1397 7.71967 19.2803C7.86032 19.421 8.05109 19.5 8.25 19.5H15.9C16.0989 19.5 16.2897 19.421 16.4303 19.2803C16.571 19.1397 16.65 18.9489 16.65 18.75V15.75C16.65 15.5511 16.571 15.3603 16.4303 15.2197C16.2897 15.079 16.0989 15 15.9 15H8.25Z"
                    fill="#262626" />
                </svg>
              </span>
            </li>
            <li>
              <a class="close-01" href="javascript:void(0)" onclick="salesPrderPopCls()">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.40994 6.99994L12.7099 2.70994C12.8982 2.52164 13.004 2.26624 13.004 1.99994C13.004 1.73364 12.8982 1.47825 12.7099 1.28994C12.5216 1.10164 12.2662 0.99585 11.9999 0.99585C11.7336 0.99585 11.4782 1.10164 11.2899 1.28994L6.99994 5.58994L2.70994 1.28994C2.52164 1.10164 2.26624 0.99585 1.99994 0.99585C1.73364 0.99585 1.47824 1.10164 1.28994 1.28994C1.10164 1.47825 0.995847 1.73364 0.995847 1.99994C0.995847 2.26624 1.10164 2.52164 1.28994 2.70994L5.58994 6.99994L1.28994 11.2899C1.19621 11.3829 1.12182 11.4935 1.07105 11.6154C1.02028 11.7372 0.994141 11.8679 0.994141 11.9999C0.994141 12.132 1.02028 12.2627 1.07105 12.3845C1.12182 12.5064 1.19621 12.617 1.28994 12.7099C1.3829 12.8037 1.4935 12.8781 1.61536 12.9288C1.73722 12.9796 1.86793 13.0057 1.99994 13.0057C2.13195 13.0057 2.26266 12.9796 2.38452 12.9288C2.50638 12.8781 2.61698 12.8037 2.70994 12.7099L6.99994 8.40994L11.2899 12.7099C11.3829 12.8037 11.4935 12.8781 11.6154 12.9288C11.7372 12.9796 11.8679 13.0057 11.9999 13.0057C12.132 13.0057 12.2627 12.9796 12.3845 12.9288C12.5064 12.8781 12.617 12.8037 12.7099 12.7099C12.8037 12.617 12.8781 12.5064 12.9288 12.3845C12.9796 12.2627 13.0057 12.132 13.0057 11.9999C13.0057 11.8679 12.9796 11.7372 12.9288 11.6154C12.8781 11.4935 12.8037 11.3829 12.7099 11.2899L8.40994 6.99994Z"
                    fill="#262626" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="order-meta">
        <div class="left-content">
          <ul class="order-for">
            <li class="order-id">
              <span class="title">Order ID:</span>
              <sapn class="details">বপ১২৫৬৫৯৮৪৩</sapn>
            </li>
            <li class="order-date">
              <span class="title">Order Date:</span>
              <sapn class="details">১৮/১০/২০২১</sapn>
            </li>
            <li class="order-time">
              <span class="title">Order Time:</span>
              <sapn class="details">10:25 am</sapn>
            </li>
            <li class="delevery-date">
              <span class="title">Delivery Date:</span>
              <sapn class="details"></sapn>
            </li>
          </ul>
        </div>
        <div class="right-content">
          <ul class="order-from">
            <li>
              <span class="title">Order From:</span>
              <sapn class="details customar-name">মের্সাস হালিমা স্টোর</sapn>
              <sapn class="details customar-address">আচরি মার্কেট , সড়ক ১২, সেক্টর ৩, উত্তরা, ঢাকা </sapn>
              <sapn class="details customar-number">০১৫৬ ৯৩ ৬৯ ৫৩ </sapn>
              <sapn class="details customar-area">উত্তরা </sapn>
            </li>
          </ul>
        </div>
      </div>
      <div class="order-product-details">
        <div class="product-number">
          <span class="total-product-number">সর্বমোট পণ্যঃ ২১ টি </span>
        </div>
        <div class="product-details-inner">
          <span class="section-title">সদাই তালিকাঃ</span>
          <!-- order details item accordion start -->
          <div class="order-details-accordion">
            <ul class="nav">
              <li class="nav-item menu-items">
                <span class="nav-link" data-toggle="collapse" href="#item_01" aria-expanded="false"
                  aria-controls="ui-basic">
                  <span class="left-content">
                    <div class="product-name">চাল</div>
                  </span>
                  <span class="right-content">
                    <span class="amount">৫৭,৮৬৫/-</span>
                    <div class="icon-box">
                      <span class="down-click">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M13.1665 6.99984C13.1665 2.37517 11.6245 0.833171 6.99984 0.833171C2.37517 0.833171 0.833171 2.37517 0.833171 6.99984C0.833171 11.6245 2.37517 13.1665 6.99984 13.1665C11.6245 13.1665 13.1665 11.6245 13.1665 6.99984Z"
                            fill="#262626" stroke="#262626" stroke-linecap="round" stroke-linejoin="round" />
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M9.31421 7.96118C9.31421 7.96118 7.71954 5.63718 6.99954 5.63718C6.27954 5.63718 4.68621 7.96118 4.68621 7.96118"
                            fill="#262626" />
                          <path
                            d="M9.31421 7.96118C9.31421 7.96118 7.71954 5.63718 6.99954 5.63718C6.27954 5.63718 4.68621 7.96118 4.68621 7.96118"
                            stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </span>
                      <span class="up-click">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M0.833496 7.00016C0.833496 11.6248 2.3755 13.1668 7.00016 13.1668C11.6248 13.1668 13.1668 11.6248 13.1668 7.00016C13.1668 2.3755 11.6248 0.833496 7.00016 0.833496C2.3755 0.833496 0.833496 2.3755 0.833496 7.00016Z"
                            stroke="#828282" stroke-linecap="round" stroke-linejoin="round" />
                          <path
                            d="M4.68579 6.03882C4.68579 6.03882 6.28046 8.36282 7.00046 8.36282C7.72046 8.36282 9.31379 6.03882 9.31379 6.03882"
                            stroke="#828282" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </span>
                    </div>
                  </span>

                </span>
                <div class="collapse" id="item_01">
                  <div class="single-product-list-item">
                    <div class="first-row">
                      <div class="left-content">
                        <span class="brand-name">মোজ্জামেল নাজিরশাইল</span>
                      </div>
                      <div class="right-content">
                        <span class="span cart-control-wrap">
                          <div class="cart-control">
                            <div class="value-button minus decrease">
                              <svg width="16" height="16" viewBox="0 0 12 12" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M1.15002 6.01832C1.15002 2.36727 2.36739 1.1499 6.01844 1.1499C9.6695 1.1499 10.8869 2.36727 10.8869 6.01832C10.8869 9.66938 9.6695 10.8867 6.01844 10.8867C2.36739 10.8867 1.15002 9.66938 1.15002 6.01832Z"
                                  stroke="#828282" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.80739 6.01831H4.22949" stroke="#828282" stroke-linecap="round"
                                  stroke-linejoin="round" />
                              </svg>
                            </div>
                            <input type="number" name="quantity" class="qty_" value="1" tabindex="0">
                            <div class="value-button plus increase">
                              <svg width="16" height="16" viewBox="0 0 12 12" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M1.15002 6.01832C1.15002 2.36727 2.36739 1.1499 6.01844 1.1499C9.6695 1.1499 10.8869 2.36727 10.8869 6.01832C10.8869 9.66938 9.6695 10.8867 6.01844 10.8867C2.36739 10.8867 1.15002 9.66938 1.15002 6.01832Z"
                                  stroke="#828282" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M6.01843 4.2312V7.80541" stroke="#828282" stroke-linecap="round"
                                  stroke-linejoin="round" />
                                <path d="M7.80739 6.01831H4.22949" stroke="#828282" stroke-linecap="round"
                                  stroke-linejoin="round" />
                              </svg>
                            </div>
                          </div>
                        </span>
                        <span class="amount">৫৭,৮৬৫/-</span>
                        <span class="icon-box close-item">
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M8.93996 8.00004L11.8066 5.14004C11.9322 5.01451 12.0027 4.84424 12.0027 4.66671C12.0027 4.48917 11.9322 4.31891 11.8066 4.19338C11.6811 4.06784 11.5108 3.99731 11.3333 3.99731C11.1558 3.99731 10.9855 4.06784 10.86 4.19338L7.99996 7.06004L5.13996 4.19338C5.01442 4.06784 4.84416 3.99731 4.66663 3.99731C4.48909 3.99731 4.31883 4.06784 4.19329 4.19338C4.06776 4.31891 3.99723 4.48917 3.99723 4.66671C3.99723 4.84424 4.06776 5.01451 4.19329 5.14004L7.05996 8.00004L4.19329 10.86C4.13081 10.922 4.08121 10.9958 4.04737 11.077C4.01352 11.1582 3.99609 11.2454 3.99609 11.3334C3.99609 11.4214 4.01352 11.5085 4.04737 11.5898C4.08121 11.671 4.13081 11.7447 4.19329 11.8067C4.25527 11.8692 4.329 11.9188 4.41024 11.9526C4.49148 11.9865 4.57862 12.0039 4.66663 12.0039C4.75463 12.0039 4.84177 11.9865 4.92301 11.9526C5.00425 11.9188 5.07798 11.8692 5.13996 11.8067L7.99996 8.94004L10.86 11.8067C10.9219 11.8692 10.9957 11.9188 11.0769 11.9526C11.1581 11.9865 11.2453 12.0039 11.3333 12.0039C11.4213 12.0039 11.5084 11.9865 11.5897 11.9526C11.6709 11.9188 11.7446 11.8692 11.8066 11.8067C11.8691 11.7447 11.9187 11.671 11.9526 11.5898C11.9864 11.5085 12.0038 11.4214 12.0038 11.3334C12.0038 11.2454 11.9864 11.1582 11.9526 11.077C11.9187 10.9958 11.8691 10.922 11.8066 10.86L8.93996 8.00004Z"
                              fill="#262626" />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div class="second-row">
                      <span class="meta-details weight">২৫ কেজি বস্তা</span>
                      <span class="meta-details price">১৭৬৫/- প্রতি বস্তা</span>
                    </div>
                  </div>
                  <div class="single-product-list-item">
                    <div class="first-row">
                      <div class="left-content">
                        <span class="brand-name">মোজ্জামেল নাজিরশাইল</span>
                      </div>
                      <div class="right-content">
                        <span class="span cart-control-wrap">
                          <div class="cart-control">
                            <div class="value-button minus decrease">
                              <svg width="16" height="16" viewBox="0 0 12 12" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M1.15002 6.01832C1.15002 2.36727 2.36739 1.1499 6.01844 1.1499C9.6695 1.1499 10.8869 2.36727 10.8869 6.01832C10.8869 9.66938 9.6695 10.8867 6.01844 10.8867C2.36739 10.8867 1.15002 9.66938 1.15002 6.01832Z"
                                  stroke="#828282" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.80739 6.01831H4.22949" stroke="#828282" stroke-linecap="round"
                                  stroke-linejoin="round" />
                              </svg>
                            </div>
                            <input type="number" name="quantity" class="qty_" value="1" tabindex="0">
                            <div class="value-button plus increase">
                              <svg width="16" height="16" viewBox="0 0 12 12" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M1.15002 6.01832C1.15002 2.36727 2.36739 1.1499 6.01844 1.1499C9.6695 1.1499 10.8869 2.36727 10.8869 6.01832C10.8869 9.66938 9.6695 10.8867 6.01844 10.8867C2.36739 10.8867 1.15002 9.66938 1.15002 6.01832Z"
                                  stroke="#828282" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M6.01843 4.2312V7.80541" stroke="#828282" stroke-linecap="round"
                                  stroke-linejoin="round" />
                                <path d="M7.80739 6.01831H4.22949" stroke="#828282" stroke-linecap="round"
                                  stroke-linejoin="round" />
                              </svg>
                            </div>
                          </div>
                        </span>
                        <span class="amount">৫৭,৮৬৫/-</span>
                        <span class="icon-box close-item">
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M8.93996 8.00004L11.8066 5.14004C11.9322 5.01451 12.0027 4.84424 12.0027 4.66671C12.0027 4.48917 11.9322 4.31891 11.8066 4.19338C11.6811 4.06784 11.5108 3.99731 11.3333 3.99731C11.1558 3.99731 10.9855 4.06784 10.86 4.19338L7.99996 7.06004L5.13996 4.19338C5.01442 4.06784 4.84416 3.99731 4.66663 3.99731C4.48909 3.99731 4.31883 4.06784 4.19329 4.19338C4.06776 4.31891 3.99723 4.48917 3.99723 4.66671C3.99723 4.84424 4.06776 5.01451 4.19329 5.14004L7.05996 8.00004L4.19329 10.86C4.13081 10.922 4.08121 10.9958 4.04737 11.077C4.01352 11.1582 3.99609 11.2454 3.99609 11.3334C3.99609 11.4214 4.01352 11.5085 4.04737 11.5898C4.08121 11.671 4.13081 11.7447 4.19329 11.8067C4.25527 11.8692 4.329 11.9188 4.41024 11.9526C4.49148 11.9865 4.57862 12.0039 4.66663 12.0039C4.75463 12.0039 4.84177 11.9865 4.92301 11.9526C5.00425 11.9188 5.07798 11.8692 5.13996 11.8067L7.99996 8.94004L10.86 11.8067C10.9219 11.8692 10.9957 11.9188 11.0769 11.9526C11.1581 11.9865 11.2453 12.0039 11.3333 12.0039C11.4213 12.0039 11.5084 11.9865 11.5897 11.9526C11.6709 11.9188 11.7446 11.8692 11.8066 11.8067C11.8691 11.7447 11.9187 11.671 11.9526 11.5898C11.9864 11.5085 12.0038 11.4214 12.0038 11.3334C12.0038 11.2454 11.9864 11.1582 11.9526 11.077C11.9187 10.9958 11.8691 10.922 11.8066 10.86L8.93996 8.00004Z"
                              fill="#262626" />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div class="second-row">
                      <span class="meta-details weight">২৫ কেজি বস্তা</span>
                      <span class="meta-details price">১৭৬৫/- প্রতি বস্তা</span>
                    </div>
                  </div>
                </div>
              </li>

              <li class="nav-item menu-items">
                <span class="nav-link" data-toggle="collapse" href="#item_02" aria-expanded="false"
                  aria-controls="ui-basic">
                  <span class="left-content">
                    <div class="product-name">ডাল</div>
                  </span>
                  <span class="right-content">
                    <span class="amount">৫৭,৮৬৫/-</span>
                    <div class="icon-box">
                      <span class="down-click">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M13.1665 6.99984C13.1665 2.37517 11.6245 0.833171 6.99984 0.833171C2.37517 0.833171 0.833171 2.37517 0.833171 6.99984C0.833171 11.6245 2.37517 13.1665 6.99984 13.1665C11.6245 13.1665 13.1665 11.6245 13.1665 6.99984Z"
                            fill="#262626" stroke="#262626" stroke-linecap="round" stroke-linejoin="round" />
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M9.31421 7.96118C9.31421 7.96118 7.71954 5.63718 6.99954 5.63718C6.27954 5.63718 4.68621 7.96118 4.68621 7.96118"
                            fill="#262626" />
                          <path
                            d="M9.31421 7.96118C9.31421 7.96118 7.71954 5.63718 6.99954 5.63718C6.27954 5.63718 4.68621 7.96118 4.68621 7.96118"
                            stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </span>
                      <span class="up-click">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M0.833496 7.00016C0.833496 11.6248 2.3755 13.1668 7.00016 13.1668C11.6248 13.1668 13.1668 11.6248 13.1668 7.00016C13.1668 2.3755 11.6248 0.833496 7.00016 0.833496C2.3755 0.833496 0.833496 2.3755 0.833496 7.00016Z"
                            stroke="#828282" stroke-linecap="round" stroke-linejoin="round" />
                          <path
                            d="M4.68579 6.03882C4.68579 6.03882 6.28046 8.36282 7.00046 8.36282C7.72046 8.36282 9.31379 6.03882 9.31379 6.03882"
                            stroke="#828282" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </span>
                    </div>
                  </span>

                </span>
                <div class="collapse" id="item_02">
                  <div class="single-product-list-item">
                    <div class="first-row">
                      <div class="left-content">
                        <span class="brand-name">মোজ্জামেল নাজিরশাইল</span>
                      </div>
                      <div class="right-content">
                        <span class="span cart-control-wrap">
                          <div class="cart-control">
                            <div class="value-button minus decrease">
                              <svg width="16" height="16" viewBox="0 0 12 12" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M1.15002 6.01832C1.15002 2.36727 2.36739 1.1499 6.01844 1.1499C9.6695 1.1499 10.8869 2.36727 10.8869 6.01832C10.8869 9.66938 9.6695 10.8867 6.01844 10.8867C2.36739 10.8867 1.15002 9.66938 1.15002 6.01832Z"
                                  stroke="#828282" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.80739 6.01831H4.22949" stroke="#828282" stroke-linecap="round"
                                  stroke-linejoin="round" />
                              </svg>
                            </div>
                            <input type="number" name="quantity" class="qty_" value="1" tabindex="0">
                            <div class="value-button plus increase">
                              <svg width="16" height="16" viewBox="0 0 12 12" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M1.15002 6.01832C1.15002 2.36727 2.36739 1.1499 6.01844 1.1499C9.6695 1.1499 10.8869 2.36727 10.8869 6.01832C10.8869 9.66938 9.6695 10.8867 6.01844 10.8867C2.36739 10.8867 1.15002 9.66938 1.15002 6.01832Z"
                                  stroke="#828282" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M6.01843 4.2312V7.80541" stroke="#828282" stroke-linecap="round"
                                  stroke-linejoin="round" />
                                <path d="M7.80739 6.01831H4.22949" stroke="#828282" stroke-linecap="round"
                                  stroke-linejoin="round" />
                              </svg>
                            </div>
                          </div>
                        </span>
                        <span class="amount">৫৭,৮৬৫/-</span>
                        <span class="icon-box close-item">
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M8.93996 8.00004L11.8066 5.14004C11.9322 5.01451 12.0027 4.84424 12.0027 4.66671C12.0027 4.48917 11.9322 4.31891 11.8066 4.19338C11.6811 4.06784 11.5108 3.99731 11.3333 3.99731C11.1558 3.99731 10.9855 4.06784 10.86 4.19338L7.99996 7.06004L5.13996 4.19338C5.01442 4.06784 4.84416 3.99731 4.66663 3.99731C4.48909 3.99731 4.31883 4.06784 4.19329 4.19338C4.06776 4.31891 3.99723 4.48917 3.99723 4.66671C3.99723 4.84424 4.06776 5.01451 4.19329 5.14004L7.05996 8.00004L4.19329 10.86C4.13081 10.922 4.08121 10.9958 4.04737 11.077C4.01352 11.1582 3.99609 11.2454 3.99609 11.3334C3.99609 11.4214 4.01352 11.5085 4.04737 11.5898C4.08121 11.671 4.13081 11.7447 4.19329 11.8067C4.25527 11.8692 4.329 11.9188 4.41024 11.9526C4.49148 11.9865 4.57862 12.0039 4.66663 12.0039C4.75463 12.0039 4.84177 11.9865 4.92301 11.9526C5.00425 11.9188 5.07798 11.8692 5.13996 11.8067L7.99996 8.94004L10.86 11.8067C10.9219 11.8692 10.9957 11.9188 11.0769 11.9526C11.1581 11.9865 11.2453 12.0039 11.3333 12.0039C11.4213 12.0039 11.5084 11.9865 11.5897 11.9526C11.6709 11.9188 11.7446 11.8692 11.8066 11.8067C11.8691 11.7447 11.9187 11.671 11.9526 11.5898C11.9864 11.5085 12.0038 11.4214 12.0038 11.3334C12.0038 11.2454 11.9864 11.1582 11.9526 11.077C11.9187 10.9958 11.8691 10.922 11.8066 10.86L8.93996 8.00004Z"
                              fill="#262626" />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div class="second-row">
                      <span class="meta-details weight">২৫ কেজি বস্তা</span>
                      <span class="meta-details price">১৭৬৫/- প্রতি বস্তা</span>
                    </div>
                  </div>
                  <div class="single-product-list-item">
                    <div class="first-row">
                      <div class="left-content">
                        <span class="brand-name">মোজ্জামেল নাজিরশাইল</span>
                      </div>
                      <div class="right-content">
                        <span class="span cart-control-wrap">
                          <div class="cart-control">
                            <div class="value-button minus decrease">
                              <svg width="16" height="16" viewBox="0 0 12 12" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M1.15002 6.01832C1.15002 2.36727 2.36739 1.1499 6.01844 1.1499C9.6695 1.1499 10.8869 2.36727 10.8869 6.01832C10.8869 9.66938 9.6695 10.8867 6.01844 10.8867C2.36739 10.8867 1.15002 9.66938 1.15002 6.01832Z"
                                  stroke="#828282" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.80739 6.01831H4.22949" stroke="#828282" stroke-linecap="round"
                                  stroke-linejoin="round" />
                              </svg>
                            </div>
                            <input type="number" name="quantity" class="qty_" value="1" tabindex="0">
                            <div class="value-button plus increase">
                              <svg width="16" height="16" viewBox="0 0 12 12" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M1.15002 6.01832C1.15002 2.36727 2.36739 1.1499 6.01844 1.1499C9.6695 1.1499 10.8869 2.36727 10.8869 6.01832C10.8869 9.66938 9.6695 10.8867 6.01844 10.8867C2.36739 10.8867 1.15002 9.66938 1.15002 6.01832Z"
                                  stroke="#828282" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M6.01843 4.2312V7.80541" stroke="#828282" stroke-linecap="round"
                                  stroke-linejoin="round" />
                                <path d="M7.80739 6.01831H4.22949" stroke="#828282" stroke-linecap="round"
                                  stroke-linejoin="round" />
                              </svg>
                            </div>
                          </div>
                        </span>
                        <span class="amount">৫৭,৮৬৫/-</span>
                        <span class="icon-box close-item">
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M8.93996 8.00004L11.8066 5.14004C11.9322 5.01451 12.0027 4.84424 12.0027 4.66671C12.0027 4.48917 11.9322 4.31891 11.8066 4.19338C11.6811 4.06784 11.5108 3.99731 11.3333 3.99731C11.1558 3.99731 10.9855 4.06784 10.86 4.19338L7.99996 7.06004L5.13996 4.19338C5.01442 4.06784 4.84416 3.99731 4.66663 3.99731C4.48909 3.99731 4.31883 4.06784 4.19329 4.19338C4.06776 4.31891 3.99723 4.48917 3.99723 4.66671C3.99723 4.84424 4.06776 5.01451 4.19329 5.14004L7.05996 8.00004L4.19329 10.86C4.13081 10.922 4.08121 10.9958 4.04737 11.077C4.01352 11.1582 3.99609 11.2454 3.99609 11.3334C3.99609 11.4214 4.01352 11.5085 4.04737 11.5898C4.08121 11.671 4.13081 11.7447 4.19329 11.8067C4.25527 11.8692 4.329 11.9188 4.41024 11.9526C4.49148 11.9865 4.57862 12.0039 4.66663 12.0039C4.75463 12.0039 4.84177 11.9865 4.92301 11.9526C5.00425 11.9188 5.07798 11.8692 5.13996 11.8067L7.99996 8.94004L10.86 11.8067C10.9219 11.8692 10.9957 11.9188 11.0769 11.9526C11.1581 11.9865 11.2453 12.0039 11.3333 12.0039C11.4213 12.0039 11.5084 11.9865 11.5897 11.9526C11.6709 11.9188 11.7446 11.8692 11.8066 11.8067C11.8691 11.7447 11.9187 11.671 11.9526 11.5898C11.9864 11.5085 12.0038 11.4214 12.0038 11.3334C12.0038 11.2454 11.9864 11.1582 11.9526 11.077C11.9187 10.9958 11.8691 10.922 11.8066 10.86L8.93996 8.00004Z"
                              fill="#262626" />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div class="second-row">
                      <span class="meta-details weight">২৫ কেজি বস্তা</span>
                      <span class="meta-details price">১৭৬৫/- প্রতি বস্তা</span>
                    </div>
                  </div>
                </div>
              </li>

              <li class="nav-item menu-items">
                <span class="nav-link" data-toggle="collapse" href="#item_03" aria-expanded="false"
                  aria-controls="ui-basic">
                  <span class="left-content">
                    <div class="product-name">পেঁয়াজ</div>
                  </span>
                  <span class="right-content">
                    <span class="amount">৫৭,৮৬৫/-</span>
                    <div class="icon-box">
                      <span class="down-click">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M13.1665 6.99984C13.1665 2.37517 11.6245 0.833171 6.99984 0.833171C2.37517 0.833171 0.833171 2.37517 0.833171 6.99984C0.833171 11.6245 2.37517 13.1665 6.99984 13.1665C11.6245 13.1665 13.1665 11.6245 13.1665 6.99984Z"
                            fill="#262626" stroke="#262626" stroke-linecap="round" stroke-linejoin="round" />
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M9.31421 7.96118C9.31421 7.96118 7.71954 5.63718 6.99954 5.63718C6.27954 5.63718 4.68621 7.96118 4.68621 7.96118"
                            fill="#262626" />
                          <path
                            d="M9.31421 7.96118C9.31421 7.96118 7.71954 5.63718 6.99954 5.63718C6.27954 5.63718 4.68621 7.96118 4.68621 7.96118"
                            stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </span>
                      <span class="up-click">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M0.833496 7.00016C0.833496 11.6248 2.3755 13.1668 7.00016 13.1668C11.6248 13.1668 13.1668 11.6248 13.1668 7.00016C13.1668 2.3755 11.6248 0.833496 7.00016 0.833496C2.3755 0.833496 0.833496 2.3755 0.833496 7.00016Z"
                            stroke="#828282" stroke-linecap="round" stroke-linejoin="round" />
                          <path
                            d="M4.68579 6.03882C4.68579 6.03882 6.28046 8.36282 7.00046 8.36282C7.72046 8.36282 9.31379 6.03882 9.31379 6.03882"
                            stroke="#828282" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </span>
                    </div>
                  </span>

                </span>
                <div class="collapse" id="item_03">
                  <div class="single-product-list-item">
                    <div class="first-row">
                      <div class="left-content">
                        <span class="brand-name">মোজ্জামেল নাজিরশাইল</span>
                      </div>
                      <div class="right-content">
                        <span class="span cart-control-wrap">
                          <div class="cart-control">
                            <div class="value-button minus decrease">
                              <svg width="16" height="16" viewBox="0 0 12 12" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M1.15002 6.01832C1.15002 2.36727 2.36739 1.1499 6.01844 1.1499C9.6695 1.1499 10.8869 2.36727 10.8869 6.01832C10.8869 9.66938 9.6695 10.8867 6.01844 10.8867C2.36739 10.8867 1.15002 9.66938 1.15002 6.01832Z"
                                  stroke="#828282" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.80739 6.01831H4.22949" stroke="#828282" stroke-linecap="round"
                                  stroke-linejoin="round" />
                              </svg>
                            </div>
                            <input type="number" name="quantity" class="qty_" value="1" tabindex="0">
                            <div class="value-button plus increase">
                              <svg width="16" height="16" viewBox="0 0 12 12" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M1.15002 6.01832C1.15002 2.36727 2.36739 1.1499 6.01844 1.1499C9.6695 1.1499 10.8869 2.36727 10.8869 6.01832C10.8869 9.66938 9.6695 10.8867 6.01844 10.8867C2.36739 10.8867 1.15002 9.66938 1.15002 6.01832Z"
                                  stroke="#828282" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M6.01843 4.2312V7.80541" stroke="#828282" stroke-linecap="round"
                                  stroke-linejoin="round" />
                                <path d="M7.80739 6.01831H4.22949" stroke="#828282" stroke-linecap="round"
                                  stroke-linejoin="round" />
                              </svg>
                            </div>
                          </div>
                        </span>
                        <span class="amount">৫৭,৮৬৫/-</span>
                        <span class="icon-box close-item">
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M8.93996 8.00004L11.8066 5.14004C11.9322 5.01451 12.0027 4.84424 12.0027 4.66671C12.0027 4.48917 11.9322 4.31891 11.8066 4.19338C11.6811 4.06784 11.5108 3.99731 11.3333 3.99731C11.1558 3.99731 10.9855 4.06784 10.86 4.19338L7.99996 7.06004L5.13996 4.19338C5.01442 4.06784 4.84416 3.99731 4.66663 3.99731C4.48909 3.99731 4.31883 4.06784 4.19329 4.19338C4.06776 4.31891 3.99723 4.48917 3.99723 4.66671C3.99723 4.84424 4.06776 5.01451 4.19329 5.14004L7.05996 8.00004L4.19329 10.86C4.13081 10.922 4.08121 10.9958 4.04737 11.077C4.01352 11.1582 3.99609 11.2454 3.99609 11.3334C3.99609 11.4214 4.01352 11.5085 4.04737 11.5898C4.08121 11.671 4.13081 11.7447 4.19329 11.8067C4.25527 11.8692 4.329 11.9188 4.41024 11.9526C4.49148 11.9865 4.57862 12.0039 4.66663 12.0039C4.75463 12.0039 4.84177 11.9865 4.92301 11.9526C5.00425 11.9188 5.07798 11.8692 5.13996 11.8067L7.99996 8.94004L10.86 11.8067C10.9219 11.8692 10.9957 11.9188 11.0769 11.9526C11.1581 11.9865 11.2453 12.0039 11.3333 12.0039C11.4213 12.0039 11.5084 11.9865 11.5897 11.9526C11.6709 11.9188 11.7446 11.8692 11.8066 11.8067C11.8691 11.7447 11.9187 11.671 11.9526 11.5898C11.9864 11.5085 12.0038 11.4214 12.0038 11.3334C12.0038 11.2454 11.9864 11.1582 11.9526 11.077C11.9187 10.9958 11.8691 10.922 11.8066 10.86L8.93996 8.00004Z"
                              fill="#262626" />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div class="second-row">
                      <span class="meta-details weight">২৫ কেজি বস্তা</span>
                      <span class="meta-details price">১৭৬৫/- প্রতি বস্তা</span>
                    </div>
                  </div>
                  <div class="single-product-list-item">
                    <div class="first-row">
                      <div class="left-content">
                        <span class="brand-name">মোজ্জামেল নাজিরশাইল</span>
                      </div>
                      <div class="right-content">
                        <span class="span cart-control-wrap">
                          <div class="cart-control">
                            <div class="value-button minus decrease">
                              <svg width="16" height="16" viewBox="0 0 12 12" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M1.15002 6.01832C1.15002 2.36727 2.36739 1.1499 6.01844 1.1499C9.6695 1.1499 10.8869 2.36727 10.8869 6.01832C10.8869 9.66938 9.6695 10.8867 6.01844 10.8867C2.36739 10.8867 1.15002 9.66938 1.15002 6.01832Z"
                                  stroke="#828282" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.80739 6.01831H4.22949" stroke="#828282" stroke-linecap="round"
                                  stroke-linejoin="round" />
                              </svg>
                            </div>
                            <input type="number" name="quantity" class="qty_" value="1" tabindex="0">
                            <div class="value-button plus increase">
                              <svg width="16" height="16" viewBox="0 0 12 12" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M1.15002 6.01832C1.15002 2.36727 2.36739 1.1499 6.01844 1.1499C9.6695 1.1499 10.8869 2.36727 10.8869 6.01832C10.8869 9.66938 9.6695 10.8867 6.01844 10.8867C2.36739 10.8867 1.15002 9.66938 1.15002 6.01832Z"
                                  stroke="#828282" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M6.01843 4.2312V7.80541" stroke="#828282" stroke-linecap="round"
                                  stroke-linejoin="round" />
                                <path d="M7.80739 6.01831H4.22949" stroke="#828282" stroke-linecap="round"
                                  stroke-linejoin="round" />
                              </svg>
                            </div>
                          </div>
                        </span>
                        <span class="amount">৫৭,৮৬৫/-</span>
                        <span class="icon-box close-item">
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M8.93996 8.00004L11.8066 5.14004C11.9322 5.01451 12.0027 4.84424 12.0027 4.66671C12.0027 4.48917 11.9322 4.31891 11.8066 4.19338C11.6811 4.06784 11.5108 3.99731 11.3333 3.99731C11.1558 3.99731 10.9855 4.06784 10.86 4.19338L7.99996 7.06004L5.13996 4.19338C5.01442 4.06784 4.84416 3.99731 4.66663 3.99731C4.48909 3.99731 4.31883 4.06784 4.19329 4.19338C4.06776 4.31891 3.99723 4.48917 3.99723 4.66671C3.99723 4.84424 4.06776 5.01451 4.19329 5.14004L7.05996 8.00004L4.19329 10.86C4.13081 10.922 4.08121 10.9958 4.04737 11.077C4.01352 11.1582 3.99609 11.2454 3.99609 11.3334C3.99609 11.4214 4.01352 11.5085 4.04737 11.5898C4.08121 11.671 4.13081 11.7447 4.19329 11.8067C4.25527 11.8692 4.329 11.9188 4.41024 11.9526C4.49148 11.9865 4.57862 12.0039 4.66663 12.0039C4.75463 12.0039 4.84177 11.9865 4.92301 11.9526C5.00425 11.9188 5.07798 11.8692 5.13996 11.8067L7.99996 8.94004L10.86 11.8067C10.9219 11.8692 10.9957 11.9188 11.0769 11.9526C11.1581 11.9865 11.2453 12.0039 11.3333 12.0039C11.4213 12.0039 11.5084 11.9865 11.5897 11.9526C11.6709 11.9188 11.7446 11.8692 11.8066 11.8067C11.8691 11.7447 11.9187 11.671 11.9526 11.5898C11.9864 11.5085 12.0038 11.4214 12.0038 11.3334C12.0038 11.2454 11.9864 11.1582 11.9526 11.077C11.9187 10.9958 11.8691 10.922 11.8066 10.86L8.93996 8.00004Z"
                              fill="#262626" />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div class="second-row">
                      <span class="meta-details weight">২৫ কেজি বস্তা</span>
                      <span class="meta-details price">১৭৬৫/- প্রতি বস্তা</span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <!-- order details item accordion end -->
          <div class="add-product-wrap">
            <a href="#" class="add-product-01">আরো পণ্য যোগ করুন</a>
          </div>

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
      </div>
    </div>
  </div>
</div>
<!-- sales order end -->

<!-- add catagory start -->
<div id="add_catg" class="sidenav">
  <div class="big-popup category-add">
    <div class="content">
      <div class="top-navigation">
        <div class="left-content">
        </div>
        <div class="right-content">
          <ul>
            <li>
              <a class="close-01" href="javascript:void(0)" onclick="addCatgPopCls()">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.40994 6.99994L12.7099 2.70994C12.8982 2.52164 13.004 2.26624 13.004 1.99994C13.004 1.73364 12.8982 1.47825 12.7099 1.28994C12.5216 1.10164 12.2662 0.99585 11.9999 0.99585C11.7336 0.99585 11.4782 1.10164 11.2899 1.28994L6.99994 5.58994L2.70994 1.28994C2.52164 1.10164 2.26624 0.99585 1.99994 0.99585C1.73364 0.99585 1.47824 1.10164 1.28994 1.28994C1.10164 1.47825 0.995847 1.73364 0.995847 1.99994C0.995847 2.26624 1.10164 2.52164 1.28994 2.70994L5.58994 6.99994L1.28994 11.2899C1.19621 11.3829 1.12182 11.4935 1.07105 11.6154C1.02028 11.7372 0.994141 11.8679 0.994141 11.9999C0.994141 12.132 1.02028 12.2627 1.07105 12.3845C1.12182 12.5064 1.19621 12.617 1.28994 12.7099C1.3829 12.8037 1.4935 12.8781 1.61536 12.9288C1.73722 12.9796 1.86793 13.0057 1.99994 13.0057C2.13195 13.0057 2.26266 12.9796 2.38452 12.9288C2.50638 12.8781 2.61698 12.8037 2.70994 12.7099L6.99994 8.40994L11.2899 12.7099C11.3829 12.8037 11.4935 12.8781 11.6154 12.9288C11.7372 12.9796 11.8679 13.0057 11.9999 13.0057C12.132 13.0057 12.2627 12.9796 12.3845 12.9288C12.5064 12.8781 12.617 12.8037 12.7099 12.7099C12.8037 12.617 12.8781 12.5064 12.9288 12.3845C12.9796 12.2627 13.0057 12.132 13.0057 11.9999C13.0057 11.8679 12.9796 11.7372 12.9288 11.6154C12.8781 11.4935 12.8037 11.3829 12.7099 11.2899L8.40994 6.99994Z"
                    fill="#262626"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="add-ctegory-inner">
        <div class="top-content">
          <span class="add-cgt-title">ক্যাটাগরি যোগ করুন <span class="sub-title">(বাংলাতে লিখুন)</span>
          </span>

          <form action="">
            <div class="form-group add">
              <input type="text" placeholder="ক্যাটাগরি নাম">
            </div>
            <div class="sub-sec-title">ক্যাটাগরি ছবি</div>
            <label for="myfile01" class="upload">
              <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.1211 1.209V13.25" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round"></path>
                <path d="M7.20508 4.13574L10.1211 1.20774L13.0371 4.13574" stroke="#BDBDBD" stroke-width="1.5"
                  stroke-linecap="round" stroke-linejoin="round"></path>
                <path
                  d="M5.63 6.6402C2.05 6.9702 0.75 8.3102 0.75 13.6402C0.75 20.7412 3.06 20.7412 10 20.7412C16.94 20.7412 19.25 20.7412 19.25 13.6402C19.25 8.3102 17.95 6.9702 14.37 6.6402"
                  stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              <input type="file" id="myfile" name="myfile01">
            </label>
          </form>
        </div>
        <div class="bottom-content">
          <div class="btn-wrapper">
            <button type="button" class="btn-common">Add Category</button>
            <button type="button" class="btn-common off-color">cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- add catagory end -->

<!-- add catagory start -->
<div id="add_sub_catg" class="sidenav">
  <div class="big-popup sub-category-add">
    <div class="content">
      <div class="top-navigation">
        <div class="left-content">
        </div>
        <div class="right-content">
          <ul>
            <li>
              <a class="close-01" href="javascript:void(0)" onclick="addSbCatgPopCls()">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.40994 6.99994L12.7099 2.70994C12.8982 2.52164 13.004 2.26624 13.004 1.99994C13.004 1.73364 12.8982 1.47825 12.7099 1.28994C12.5216 1.10164 12.2662 0.99585 11.9999 0.99585C11.7336 0.99585 11.4782 1.10164 11.2899 1.28994L6.99994 5.58994L2.70994 1.28994C2.52164 1.10164 2.26624 0.99585 1.99994 0.99585C1.73364 0.99585 1.47824 1.10164 1.28994 1.28994C1.10164 1.47825 0.995847 1.73364 0.995847 1.99994C0.995847 2.26624 1.10164 2.52164 1.28994 2.70994L5.58994 6.99994L1.28994 11.2899C1.19621 11.3829 1.12182 11.4935 1.07105 11.6154C1.02028 11.7372 0.994141 11.8679 0.994141 11.9999C0.994141 12.132 1.02028 12.2627 1.07105 12.3845C1.12182 12.5064 1.19621 12.617 1.28994 12.7099C1.3829 12.8037 1.4935 12.8781 1.61536 12.9288C1.73722 12.9796 1.86793 13.0057 1.99994 13.0057C2.13195 13.0057 2.26266 12.9796 2.38452 12.9288C2.50638 12.8781 2.61698 12.8037 2.70994 12.7099L6.99994 8.40994L11.2899 12.7099C11.3829 12.8037 11.4935 12.8781 11.6154 12.9288C11.7372 12.9796 11.8679 13.0057 11.9999 13.0057C12.132 13.0057 12.2627 12.9796 12.3845 12.9288C12.5064 12.8781 12.617 12.8037 12.7099 12.7099C12.8037 12.617 12.8781 12.5064 12.9288 12.3845C12.9796 12.2627 13.0057 12.132 13.0057 11.9999C13.0057 11.8679 12.9796 11.7372 12.9288 11.6154C12.8781 11.4935 12.8037 11.3829 12.7099 11.2899L8.40994 6.99994Z"
                    fill="#262626"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="add-ctegory-inner">
        <div class="top-content">
          <span class="add-cgt-title">সাবক্যাটাগরি যোগ করুন <span class="sub-title">(বাংলাতে লিখুন)</span>
          </span>

          <form action="">
            <div class="form-group add">
              <input type="text" placeholder="সাবক্যাটাগরি নাম ">
            </div>
          </form>
        </div>
        <div class="bottom-content">
          <div class="btn-wrapper">
            <button type="button" class="btn-common">Add Sub category</button>
            <button type="button" class="btn-common off-color">cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- add catagory end -->

<!-- add catagory start -->
<div id="add_product_one" class="sidenav">
  <div class="big-popup add-product">
    <div class="content">
      <div class="top-navigation">
        <div class="left-content">
        </div>
        <div class="right-content">
          <ul>
            <li>
              <a class="close-01" href="javascript:void(0)" @click="addProdOnePopCls">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.40994 6.99994L12.7099 2.70994C12.8982 2.52164 13.004 2.26624 13.004 1.99994C13.004 1.73364 12.8982 1.47825 12.7099 1.28994C12.5216 1.10164 12.2662 0.99585 11.9999 0.99585C11.7336 0.99585 11.4782 1.10164 11.2899 1.28994L6.99994 5.58994L2.70994 1.28994C2.52164 1.10164 2.26624 0.99585 1.99994 0.99585C1.73364 0.99585 1.47824 1.10164 1.28994 1.28994C1.10164 1.47825 0.995847 1.73364 0.995847 1.99994C0.995847 2.26624 1.10164 2.52164 1.28994 2.70994L5.58994 6.99994L1.28994 11.2899C1.19621 11.3829 1.12182 11.4935 1.07105 11.6154C1.02028 11.7372 0.994141 11.8679 0.994141 11.9999C0.994141 12.132 1.02028 12.2627 1.07105 12.3845C1.12182 12.5064 1.19621 12.617 1.28994 12.7099C1.3829 12.8037 1.4935 12.8781 1.61536 12.9288C1.73722 12.9796 1.86793 13.0057 1.99994 13.0057C2.13195 13.0057 2.26266 12.9796 2.38452 12.9288C2.50638 12.8781 2.61698 12.8037 2.70994 12.7099L6.99994 8.40994L11.2899 12.7099C11.3829 12.8037 11.4935 12.8781 11.6154 12.9288C11.7372 12.9796 11.8679 13.0057 11.9999 13.0057C12.132 13.0057 12.2627 12.9796 12.3845 12.9288C12.5064 12.8781 12.617 12.8037 12.7099 12.7099C12.8037 12.617 12.8781 12.5064 12.9288 12.3845C12.9796 12.2627 13.0057 12.132 13.0057 11.9999C13.0057 11.8679 12.9796 11.7372 12.9288 11.6154C12.8781 11.4935 12.8037 11.3829 12.7099 11.2899L8.40994 6.99994Z"
                    fill="#262626"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="add-product-inner">
        <div class="top-content">
          <span class="add-cgt-title">পণ্য যোগ করুন <span class="sub-title">(বাংলাতে লিখুন)</span> </span>

          <form action="">
            <div class="form-group add mb-3">
              <input type="text" placeholder="পণ্যের নাম *">
            </div>

            <div class="form-group product-catg mb-3">
              <select id="" name="" form="">
                <option value="" disabled="" selected="" hidden="" class="hide">পণ্যের ক্যাটাগরি</option>
                <option value="volvo">cat 01</option>
                <option value="volvo">cat 02</option>
                <option value="volvo">cat 03</option>
              </select>
            </div>

            <div class="form-group sub-product-catg">
              <select id="" name="" form="">
                <option value="" disabled="" selected="" hidden="" class="hide">পণ্যের সাবক্যাটাগরি</option>
                <option value="volvo">cat 01</option>
                <option value="volvo">cat 02</option>
                <option value="volvo">cat 03</option>
              </select>
            </div>

            <div class="product-pricing-method">
              <span class="title">পণ্যের দাম নির্ধারণ পদ্ধতিঃ *</span>

              <div class="method">
                <div class="left-content">
                  <input type="checkbox" id="p-cb-1" name="p-cb-1" value="">
                  <label for="p-cba-1"> বস্তা</label><br>
                  <input type="checkbox" id="p-cb-2" name="p-cb-2" value="">
                  <label for="p-cba-2"> কেজি </label><br>
                  <div class="form-group method-01">
                    <input type="text" placeholder="পণ্যের দাম *">
                  </div>
                </div>
                <div class="right-content">
                  <input type="checkbox" id="p-cb-3" name="p-cb-3" value="">
                  <label for="p-cb-3"> পিস্</label><br>
                  <input type="checkbox" id="p-cb-4" name="p-cb-4" value="">
                  <label for="p-cb-4"> খোলা </label><br>
                  <div class="form-group method-02">
                    <select id="" name="" form="">
                      <option value="" disabled="" selected="" hidden="" class="hide">পণ্যের ওজন * </option>
                      <option value="volvo">cat 01</option>
                      <option value="volvo">cat 02</option>
                      <option value="volvo">cat 03</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

          </form>
        </div>
        <div class="bottom-content">
          <div class="btn-wrapper add-product">
            <button type="button" class="btn-common">save</button>
            <button type="button" class="btn-common off-color">cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- add catagory end -->

<!-- add catagory start -->
<div id="add_product_two" class="sidenav">
  <div class="big-popup added-product">
    <div class="content">
      <div class="top-navigation">
        <div class="left-content">
        </div>
        <div class="right-content">
          <ul>
            <li>
              <a class="close-01" href="javascript:void(0)" onclick="addProdTwoPopCls()">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.40994 6.99994L12.7099 2.70994C12.8982 2.52164 13.004 2.26624 13.004 1.99994C13.004 1.73364 12.8982 1.47825 12.7099 1.28994C12.5216 1.10164 12.2662 0.99585 11.9999 0.99585C11.7336 0.99585 11.4782 1.10164 11.2899 1.28994L6.99994 5.58994L2.70994 1.28994C2.52164 1.10164 2.26624 0.99585 1.99994 0.99585C1.73364 0.99585 1.47824 1.10164 1.28994 1.28994C1.10164 1.47825 0.995847 1.73364 0.995847 1.99994C0.995847 2.26624 1.10164 2.52164 1.28994 2.70994L5.58994 6.99994L1.28994 11.2899C1.19621 11.3829 1.12182 11.4935 1.07105 11.6154C1.02028 11.7372 0.994141 11.8679 0.994141 11.9999C0.994141 12.132 1.02028 12.2627 1.07105 12.3845C1.12182 12.5064 1.19621 12.617 1.28994 12.7099C1.3829 12.8037 1.4935 12.8781 1.61536 12.9288C1.73722 12.9796 1.86793 13.0057 1.99994 13.0057C2.13195 13.0057 2.26266 12.9796 2.38452 12.9288C2.50638 12.8781 2.61698 12.8037 2.70994 12.7099L6.99994 8.40994L11.2899 12.7099C11.3829 12.8037 11.4935 12.8781 11.6154 12.9288C11.7372 12.9796 11.8679 13.0057 11.9999 13.0057C12.132 13.0057 12.2627 12.9796 12.3845 12.9288C12.5064 12.8781 12.617 12.8037 12.7099 12.7099C12.8037 12.617 12.8781 12.5064 12.9288 12.3845C12.9796 12.2627 13.0057 12.132 13.0057 11.9999C13.0057 11.8679 12.9796 11.7372 12.9288 11.6154C12.8781 11.4935 12.8037 11.3829 12.7099 11.2899L8.40994 6.99994Z"
                    fill="#262626"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="added-product-info-inner">
        <div class="top-content">
          <span class="add-cgt-title">পণ্য যোগ করুন <span class="sub-title">(বাংলাতে লিখুন)</span> </span>

          <div class="added-product-info">
            <form action="">
              <div class="single-item">
                <span class="label">পণ্যের নাম</span>
                <span class="main-text">উৎসব</span>
              </div>
              <div class="single-item">
                <span class="label">পণ্যের সাবক্যাটাগরি</span>
                <span class="main-text">বাংলামতি</span>
              </div>
              <div class="single-item">
                <span class="label">পণ্যের ক্যাটাগরি</span>
                <span class="main-text">চাল</span>
              </div>

              <div class="second-part">
                <div class="left">
                  <div class="item">
                    <span class="label">পণ্যের ক্যাটাগরি</span>
                    <input type="checkbox" id="p-cb-1" name="p-cb-1" value="" checked="">
                    <label for="p-cb-1"> বস্তা</label><br>
                  </div>
                  <div class="item">
                    <span class="label selling-price">বিক্রয় মূল্য *</span>
                    <input type="text" placeholder="">
                  </div>
                </div>

                <div class="right">
                  <div class="single-item item">
                    <span class="label">পণ্যের ওজন * </span>
                    <span class="main-text">২৫</span>
                  </div>
                  <div class="item ex">
                    <span class="label buying-price">ক্রয় মূল্যঃ *</span>
                    <input type="text" placeholder="">
                  </div>
                </div>
              </div>
            </form>
          </div>


        </div>
        <div class="bottom-content">
          <div class="btn-wrapper update">
            <button type="button" class="btn-common">update</button>
            <button type="button" class="btn-common off-color">cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- add catagory end -->

<!-- add catagory start -->
<div id="discount_pop" class="sidenav">
  <div class="big-popup discount-details">
    <div class="content">
      <div class="top-navigation">
        <div class="left-content">
        </div>
        <div class="right-content">
          <ul>
            <li>
              <span class="save">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3 1.5C2.60218 1.5 2.22064 1.65804 1.93934 1.93934C1.65804 2.22064 1.5 2.60218 1.5 3V15C1.5 15.3978 1.65804 15.7794 1.93934 16.0607C2.22064 16.342 2.60218 16.5 3 16.5V11.25C3 10.6533 3.23705 10.081 3.65901 9.65901C4.08097 9.23705 4.65326 9 5.25 9H12.75C13.3467 9 13.919 9.23705 14.341 9.65901C14.7629 10.081 15 10.6533 15 11.25V16.5C15.3978 16.5 15.7794 16.342 16.0607 16.0607C16.342 15.7794 16.5 15.3978 16.5 15V5.43C16.4999 5.03221 16.3418 4.65074 16.0605 4.3695L13.629 1.938C13.3475 1.65723 12.9661 1.49969 12.5685 1.5H12V3.75C12 4.34674 11.7629 4.91903 11.341 5.34099C10.919 5.76295 10.3467 6 9.75 6H6.75C6.15326 6 5.58097 5.76295 5.15901 5.34099C4.73705 4.91903 4.5 4.34674 4.5 3.75V1.5H3ZM6 1.5V3.75C6 3.94891 6.07902 4.13968 6.21967 4.28033C6.36032 4.42098 6.55109 4.5 6.75 4.5H9.75C9.94891 4.5 10.1397 4.42098 10.2803 4.28033C10.421 4.13968 10.5 3.94891 10.5 3.75V1.5H6ZM13.5 16.5V11.25C13.5 11.0511 13.421 10.8603 13.2803 10.7197C13.1397 10.579 12.9489 10.5 12.75 10.5H5.25C5.05109 10.5 4.86032 10.579 4.71967 10.7197C4.57902 10.8603 4.5 11.0511 4.5 11.25V16.5H13.5ZM0 3C0 2.20435 0.31607 1.44129 0.87868 0.87868C1.44129 0.31607 2.20435 0 3 0H12.5685C13.3641 0.000169912 14.127 0.316352 14.6895 0.879L17.121 3.3105C17.6836 3.87298 17.9998 4.63592 18 5.4315V15C18 15.7956 17.6839 16.5587 17.1213 17.1213C16.5587 17.6839 15.7956 18 15 18H3C2.20435 18 1.44129 17.6839 0.87868 17.1213C0.31607 16.5587 0 15.7956 0 15V3Z"
                    fill="#262626"></path>
                </svg>
              </span>
            </li>
            <li>
              <a class="close-01" href="javascript:void(0)" @click="discPopCls">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.40994 6.99994L12.7099 2.70994C12.8982 2.52164 13.004 2.26624 13.004 1.99994C13.004 1.73364 12.8982 1.47825 12.7099 1.28994C12.5216 1.10164 12.2662 0.99585 11.9999 0.99585C11.7336 0.99585 11.4782 1.10164 11.2899 1.28994L6.99994 5.58994L2.70994 1.28994C2.52164 1.10164 2.26624 0.99585 1.99994 0.99585C1.73364 0.99585 1.47824 1.10164 1.28994 1.28994C1.10164 1.47825 0.995847 1.73364 0.995847 1.99994C0.995847 2.26624 1.10164 2.52164 1.28994 2.70994L5.58994 6.99994L1.28994 11.2899C1.19621 11.3829 1.12182 11.4935 1.07105 11.6154C1.02028 11.7372 0.994141 11.8679 0.994141 11.9999C0.994141 12.132 1.02028 12.2627 1.07105 12.3845C1.12182 12.5064 1.19621 12.617 1.28994 12.7099C1.3829 12.8037 1.4935 12.8781 1.61536 12.9288C1.73722 12.9796 1.86793 13.0057 1.99994 13.0057C2.13195 13.0057 2.26266 12.9796 2.38452 12.9288C2.50638 12.8781 2.61698 12.8037 2.70994 12.7099L6.99994 8.40994L11.2899 12.7099C11.3829 12.8037 11.4935 12.8781 11.6154 12.9288C11.7372 12.9796 11.8679 13.0057 11.9999 13.0057C12.132 13.0057 12.2627 12.9796 12.3845 12.9288C12.5064 12.8781 12.617 12.8037 12.7099 12.7099C12.8037 12.617 12.8781 12.5064 12.9288 12.3845C12.9796 12.2627 13.0057 12.132 13.0057 11.9999C13.0057 11.8679 12.9796 11.7372 12.9288 11.6154C12.8781 11.4935 12.8037 11.3829 12.7099 11.2899L8.40994 6.99994Z"
                    fill="#262626"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="update-inner">
        <div class="top-content">
          <span class="add-cgt-title">Discount Details </span>

          <div class="update-inner-info">
            <form action="">
              <div class="form-group discount-name">
                <input type="text" placeholder="Discount name">
              </div>

              <span class="sub-title">Discount Type</span>

              <div class="wrap">
                <div class="left">
                  <div class="item">
                    <input type="checkbox" id="p-cb-x" name="p-cb-1" value="">
                    <label for="p-cb-x"> Amount</label><br>
                  </div>
                  <div class="form-group discount-percent mt-4">
                    <input type="text" placeholder="Discount name">
                  </div>
                </div>
                <div class="right">
                  <div class="item">
                    <input type="checkbox" id="p-cb-y" name="p-cb-1" value="" checked="">
                    <label for="p-cb-y"> Percetage</label><br>
                  </div>
                </div>
              </div>
              <div class="wrap mt-4">
                <div class="left">
                  <div class="form-group date-pick">
                    <input type="text" placeholder="Select start date" onfocus="(this.type='date')">
                  </div>

                </div>
                <div class="right">
                  <div class="form-group date-pick">
                    <input type="text" placeholder="Select end date" onfocus="(this.type='date')">
                  </div>
                </div>
              </div>
            </form>
          </div>


        </div>
        <div class="bottom-content">
          <div class="btn-wrapper">
            <button type="button" class="btn-common">Set Discount</button>
            <button type="button" class="btn-common off-color">cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- add catagory end -->

<!-- add catagory start -->
<div id="service_charge" class="sidenav">
  <div class="big-popup discount-details">
    <div class="content">
      <div class="top-navigation">
        <div class="left-content">
        </div>
        <div class="right-content">
          <ul>
            <li>
              <span class="save">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3 1.5C2.60218 1.5 2.22064 1.65804 1.93934 1.93934C1.65804 2.22064 1.5 2.60218 1.5 3V15C1.5 15.3978 1.65804 15.7794 1.93934 16.0607C2.22064 16.342 2.60218 16.5 3 16.5V11.25C3 10.6533 3.23705 10.081 3.65901 9.65901C4.08097 9.23705 4.65326 9 5.25 9H12.75C13.3467 9 13.919 9.23705 14.341 9.65901C14.7629 10.081 15 10.6533 15 11.25V16.5C15.3978 16.5 15.7794 16.342 16.0607 16.0607C16.342 15.7794 16.5 15.3978 16.5 15V5.43C16.4999 5.03221 16.3418 4.65074 16.0605 4.3695L13.629 1.938C13.3475 1.65723 12.9661 1.49969 12.5685 1.5H12V3.75C12 4.34674 11.7629 4.91903 11.341 5.34099C10.919 5.76295 10.3467 6 9.75 6H6.75C6.15326 6 5.58097 5.76295 5.15901 5.34099C4.73705 4.91903 4.5 4.34674 4.5 3.75V1.5H3ZM6 1.5V3.75C6 3.94891 6.07902 4.13968 6.21967 4.28033C6.36032 4.42098 6.55109 4.5 6.75 4.5H9.75C9.94891 4.5 10.1397 4.42098 10.2803 4.28033C10.421 4.13968 10.5 3.94891 10.5 3.75V1.5H6ZM13.5 16.5V11.25C13.5 11.0511 13.421 10.8603 13.2803 10.7197C13.1397 10.579 12.9489 10.5 12.75 10.5H5.25C5.05109 10.5 4.86032 10.579 4.71967 10.7197C4.57902 10.8603 4.5 11.0511 4.5 11.25V16.5H13.5ZM0 3C0 2.20435 0.31607 1.44129 0.87868 0.87868C1.44129 0.31607 2.20435 0 3 0H12.5685C13.3641 0.000169912 14.127 0.316352 14.6895 0.879L17.121 3.3105C17.6836 3.87298 17.9998 4.63592 18 5.4315V15C18 15.7956 17.6839 16.5587 17.1213 17.1213C16.5587 17.6839 15.7956 18 15 18H3C2.20435 18 1.44129 17.6839 0.87868 17.1213C0.31607 16.5587 0 15.7956 0 15V3Z"
                    fill="#262626"></path>
                </svg>
              </span>
            </li>
            <li>
              <a class="close-01" href="javascript:void(0)" onclick="servCsPopCls()">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.40994 6.99994L12.7099 2.70994C12.8982 2.52164 13.004 2.26624 13.004 1.99994C13.004 1.73364 12.8982 1.47825 12.7099 1.28994C12.5216 1.10164 12.2662 0.99585 11.9999 0.99585C11.7336 0.99585 11.4782 1.10164 11.2899 1.28994L6.99994 5.58994L2.70994 1.28994C2.52164 1.10164 2.26624 0.99585 1.99994 0.99585C1.73364 0.99585 1.47824 1.10164 1.28994 1.28994C1.10164 1.47825 0.995847 1.73364 0.995847 1.99994C0.995847 2.26624 1.10164 2.52164 1.28994 2.70994L5.58994 6.99994L1.28994 11.2899C1.19621 11.3829 1.12182 11.4935 1.07105 11.6154C1.02028 11.7372 0.994141 11.8679 0.994141 11.9999C0.994141 12.132 1.02028 12.2627 1.07105 12.3845C1.12182 12.5064 1.19621 12.617 1.28994 12.7099C1.3829 12.8037 1.4935 12.8781 1.61536 12.9288C1.73722 12.9796 1.86793 13.0057 1.99994 13.0057C2.13195 13.0057 2.26266 12.9796 2.38452 12.9288C2.50638 12.8781 2.61698 12.8037 2.70994 12.7099L6.99994 8.40994L11.2899 12.7099C11.3829 12.8037 11.4935 12.8781 11.6154 12.9288C11.7372 12.9796 11.8679 13.0057 11.9999 13.0057C12.132 13.0057 12.2627 12.9796 12.3845 12.9288C12.5064 12.8781 12.617 12.8037 12.7099 12.7099C12.8037 12.617 12.8781 12.5064 12.9288 12.3845C12.9796 12.2627 13.0057 12.132 13.0057 11.9999C13.0057 11.8679 12.9796 11.7372 12.9288 11.6154C12.8781 11.4935 12.8037 11.3829 12.7099 11.2899L8.40994 6.99994Z"
                    fill="#262626"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="update-inner">
        <div class="top-content">
          <span class="add-cgt-title">Service Charge Details </span>

          <div class="update-inner-info">
            <form action="">
              <div class="form-group discount-name">
                <select id="" name="" form="">
                  <option value="" disabled="" selected="" hidden="" class="hide">Service name or select
                  </option>
                  <option value="volvo">cat 01</option>
                  <option value="volvo">cat 02</option>
                  <option value="volvo">cat 03</option>
                </select>
              </div>

              <span class="sub-title">Discount Type</span>

              <div class="wrap">
                <div class="left">
                  <div class="item">
                    <input type="checkbox" id="p-cb-x" name="p-cb-1" value="">
                    <label for="p-cb-x"> Amount</label><br>
                  </div>
                  <div class="form-group discount-percent mt-4">
                    <input type="text" placeholder="Charge amount/percentage">
                  </div>
                </div>
                <div class="right">
                  <div class="item">
                    <input type="checkbox" id="p-cb-y" name="p-cb-1" value="" checked="">
                    <label for="p-cb-y"> Percetage</label><br>
                  </div>
                </div>
              </div>
            </form>
          </div>


        </div>
        <div class="bottom-content">
          <div class="btn-wrapper">
            <button type="button" class="btn-common">Set Service Charge</button>
            <button type="button" class="btn-common off-color">cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- add catagory end -->

<!-- add catagory start -->
<div id="new_emply" class="sidenav">
  <div class="big-popup employ-profile">
    <div class="content">
      <div class="top-navigation ex">
        <div class="left-content">
        </div>
        <div class="right-content">
          <ul>
            <li>
              <span class="save">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3 1.5C2.60218 1.5 2.22064 1.65804 1.93934 1.93934C1.65804 2.22064 1.5 2.60218 1.5 3V15C1.5 15.3978 1.65804 15.7794 1.93934 16.0607C2.22064 16.342 2.60218 16.5 3 16.5V11.25C3 10.6533 3.23705 10.081 3.65901 9.65901C4.08097 9.23705 4.65326 9 5.25 9H12.75C13.3467 9 13.919 9.23705 14.341 9.65901C14.7629 10.081 15 10.6533 15 11.25V16.5C15.3978 16.5 15.7794 16.342 16.0607 16.0607C16.342 15.7794 16.5 15.3978 16.5 15V5.43C16.4999 5.03221 16.3418 4.65074 16.0605 4.3695L13.629 1.938C13.3475 1.65723 12.9661 1.49969 12.5685 1.5H12V3.75C12 4.34674 11.7629 4.91903 11.341 5.34099C10.919 5.76295 10.3467 6 9.75 6H6.75C6.15326 6 5.58097 5.76295 5.15901 5.34099C4.73705 4.91903 4.5 4.34674 4.5 3.75V1.5H3ZM6 1.5V3.75C6 3.94891 6.07902 4.13968 6.21967 4.28033C6.36032 4.42098 6.55109 4.5 6.75 4.5H9.75C9.94891 4.5 10.1397 4.42098 10.2803 4.28033C10.421 4.13968 10.5 3.94891 10.5 3.75V1.5H6ZM13.5 16.5V11.25C13.5 11.0511 13.421 10.8603 13.2803 10.7197C13.1397 10.579 12.9489 10.5 12.75 10.5H5.25C5.05109 10.5 4.86032 10.579 4.71967 10.7197C4.57902 10.8603 4.5 11.0511 4.5 11.25V16.5H13.5ZM0 3C0 2.20435 0.31607 1.44129 0.87868 0.87868C1.44129 0.31607 2.20435 0 3 0H12.5685C13.3641 0.000169912 14.127 0.316352 14.6895 0.879L17.121 3.3105C17.6836 3.87298 17.9998 4.63592 18 5.4315V15C18 15.7956 17.6839 16.5587 17.1213 17.1213C16.5587 17.6839 15.7956 18 15 18H3C2.20435 18 1.44129 17.6839 0.87868 17.1213C0.31607 16.5587 0 15.7956 0 15V3Z"
                    fill="#262626"></path>
                </svg>
              </span>
            </li>
            <li>
              <a class="close-01" href="javascript:void(0)" onclick="newEmplyPopCls()">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.40994 6.99994L12.7099 2.70994C12.8982 2.52164 13.004 2.26624 13.004 1.99994C13.004 1.73364 12.8982 1.47825 12.7099 1.28994C12.5216 1.10164 12.2662 0.99585 11.9999 0.99585C11.7336 0.99585 11.4782 1.10164 11.2899 1.28994L6.99994 5.58994L2.70994 1.28994C2.52164 1.10164 2.26624 0.99585 1.99994 0.99585C1.73364 0.99585 1.47824 1.10164 1.28994 1.28994C1.10164 1.47825 0.995847 1.73364 0.995847 1.99994C0.995847 2.26624 1.10164 2.52164 1.28994 2.70994L5.58994 6.99994L1.28994 11.2899C1.19621 11.3829 1.12182 11.4935 1.07105 11.6154C1.02028 11.7372 0.994141 11.8679 0.994141 11.9999C0.994141 12.132 1.02028 12.2627 1.07105 12.3845C1.12182 12.5064 1.19621 12.617 1.28994 12.7099C1.3829 12.8037 1.4935 12.8781 1.61536 12.9288C1.73722 12.9796 1.86793 13.0057 1.99994 13.0057C2.13195 13.0057 2.26266 12.9796 2.38452 12.9288C2.50638 12.8781 2.61698 12.8037 2.70994 12.7099L6.99994 8.40994L11.2899 12.7099C11.3829 12.8037 11.4935 12.8781 11.6154 12.9288C11.7372 12.9796 11.8679 13.0057 11.9999 13.0057C12.132 13.0057 12.2627 12.9796 12.3845 12.9288C12.5064 12.8781 12.617 12.8037 12.7099 12.7099C12.8037 12.617 12.8781 12.5064 12.9288 12.3845C12.9796 12.2627 13.0057 12.132 13.0057 11.9999C13.0057 11.8679 12.9796 11.7372 12.9288 11.6154C12.8781 11.4935 12.8037 11.3829 12.7099 11.2899L8.40994 6.99994Z"
                    fill="#262626"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="employ-profile-inner">
        <div class="employ-img-wrap">
          <div class="left-content">
            <div class="img-box">
              <div class="new">
                <input type="file">
                <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.1211 1.209V13.25" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round"></path>
                  <path d="M7.20508 4.13574L10.1211 1.20774L13.0371 4.13574" stroke="#BDBDBD" stroke-width="1.5"
                    stroke-linecap="round" stroke-linejoin="round"></path>
                  <path
                    d="M5.63 6.6402C2.05 6.9702 0.75 8.3102 0.75 13.6402C0.75 20.7412 3.06 20.7412 10 20.7412C16.94 20.7412 19.25 20.7412 19.25 13.6402C19.25 8.3102 17.95 6.9702 14.37 6.6402"
                    stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <span class="place">upload Image</span>
              </div>
            </div>
            <div class="details-box">

            </div>
          </div>
          <div class="right-content">
            <div class="action">
              <span class="checkboxes-and-radios">
                <input type="checkbox" name="checkbox-cats[]" id="new-over-chal-1" value="1" checked="">
                <label for="new-over-chal-1"></label>
              </span>
              <span class="single-action-item">
                <a href="#" class="action-btn d-inline-block" data-toggle="dropdown" aria-expanded="false">
                  <svg width="14" height="14" viewBox="0 0 13 13" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M0.615479 6.69234C0.615479 2.42342 2.03886 1.00003 6.30779 1.00003C10.5767 1.00003 12.0001 2.42342 12.0001 6.69234C12.0001 10.9613 10.5767 12.3846 6.30779 12.3846C2.03886 12.3846 0.615479 10.9613 0.615479 6.69234Z"
                      stroke="#828282" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M8.76538 6.69229H8.77092" stroke="#828282" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round"></path>
                    <path d="M6.30444 6.69229H6.30998" stroke="#828282" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round"></path>
                    <path d="M3.84351 6.69229H3.84904" stroke="#828282" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round"></path>
                  </svg>
                </a>
                <div class="dropdown-menu dropdown-menu-right control" style="">
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
                                  stroke-linejoin="round"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M1.37524 5.02606C1.37524 6.66606 3.44624 8.67706 6.00124 8.67706C8.55575 8.67706 10.6272 6.66756 10.6272 5.02606C10.6272 3.38456 8.55575 1.37506 6.00124 1.37506C3.44624 1.37506 1.37524 3.38606 1.37524 5.02606Z"
                                  stroke="#828282" stroke-width="0.8" stroke-linecap="round"
                                  stroke-linejoin="round"></path>
                              </svg>
                            </span>
                            <span class="text">
                              View Details
                            </span>
                          </li>
                          <li class="list-item">
                            <span class="icon">
                              <svg width="10" height="9" viewBox="0 0 10 9" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M4.8124 0.0146264C4.97876 0.0146264 5.11377 0.149639 5.11377 0.315994C5.11377 0.482349 4.97876 0.617362 4.8124 0.617362H3.30998C2.27167 0.617362 1.60103 1.32859 1.60103 2.42918V5.76995C1.60103 6.87054 2.27167 7.58177 3.30998 7.58177H6.85567C7.89399 7.58177 8.56503 6.87054 8.56503 5.76995V4.1514C8.56503 3.98505 8.70005 3.85003 8.8664 3.85003C9.03276 3.85003 9.16777 3.98505 9.16777 4.1514V5.76995C9.16777 7.2141 8.23835 8.18451 6.85567 8.18451H3.30998C1.92731 8.18451 0.998291 7.2141 0.998291 5.76995V2.42918C0.998291 0.985031 1.92731 0.0146264 3.30998 0.0146264H4.8124ZM8.31213 0.367669L8.80114 0.856688C9.03943 1.09457 9.17042 1.4108 9.17002 1.74753C9.17002 2.08426 9.03902 2.40009 8.80114 2.63757L5.78385 5.65486C5.56245 5.87627 5.26751 5.99842 4.95408 5.99842H3.44885C3.36768 5.99842 3.28973 5.96547 3.23307 5.90721C3.17642 5.84935 3.14548 5.77099 3.14749 5.68942L3.18526 4.17093C3.19289 3.86876 3.31464 3.58467 3.52841 3.3705H3.52882L6.53164 0.367669C7.02267 -0.122556 7.8211 -0.122556 8.31213 0.367669ZM6.28428 1.46706L3.95475 3.79683C3.85068 3.9009 3.79161 4.03913 3.78799 4.1858L3.75786 5.39569H4.95408C5.10678 5.39569 5.24983 5.33662 5.35792 5.22853L7.70151 2.88429L6.28428 1.46706ZM6.95758 0.794004L6.71021 1.04072L8.12745 2.45836L8.37521 2.21124C8.49897 2.08747 8.56728 1.92273 8.56728 1.74753C8.56728 1.57193 8.49897 1.40678 8.37521 1.28302L7.88619 0.794004C7.63023 0.538846 7.21394 0.538846 6.95758 0.794004Z"
                                  fill="#828282"></path>
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
                                <path d="M4.22021 6.00004L5.40722 7.18654L7.78022 4.81354" stroke="#828282"
                                  stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M1.375 6.00006C1.375 9.46856 2.5315 10.6251 6 10.6251C9.4685 10.6251 10.625 9.46856 10.625 6.00006C10.625 2.53156 9.4685 1.37506 6 1.37506C2.5315 1.37506 1.375 2.53156 1.375 6.00006Z"
                                  stroke="#828282" stroke-width="0.8" stroke-linecap="round"
                                  stroke-linejoin="round"></path>
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
            </div>
          </div>
        </div>

        <div class="employ-info-wrap">
          <form action="">
            <div class="personal-info">
              <div class="title-box">
                <div class="left">
                  <h5 class="title">Personal Details </h5>
                </div>
                <div class="right">

                </div>
              </div>

              <div class="form-group">
                <label for="fild1">Full Name</label>
                <span class="input-box">
                  <input type="text" class="form-control" id="fild1" placeholder="">
                </span>
              </div>

              <div class="form-group">
                <label for="fild2">Email</label>
                <span class="input-box">
                  <input type="email" class="form-control" id="fild2" placeholder="">
                </span>
              </div>

              <div class="form-group">
                <label for="fild3">Phone</label>
                <span class="input-box">
                  <input type="text" class="form-control" id="fild3" placeholder="">
                </span>
              </div>

              <div class="form-group">
                <label for="fild4">Conatct Address </label>
                <span class="input-box">
                  <input type="text" class="form-control" id="fild4" placeholder="">
                </span>
              </div>

              <div class="form-group">
                <label for="fild6">City </label>
                <span class="input-box">
                  <input type="text" class="form-control" id="fild6" placeholder="">
                </span>
              </div>

              <div class="form-group">
                <label for="fild6">Permanent Address </label>
                <span class="input-box">
                  <input type="text" class="form-control" id="fild6" placeholder="">
                </span>
              </div>

              <div class="form-group">
                <label for="fild7">NID</label>
                <span class="input-box">
                  <input type="text" class="form-control" id="fild7" placeholder="">
                </span>
              </div>

            </div>

            <div class="employment-info">
              <div class="title-box">
                <div class="left">
                  <h5 class="title">employment Details </h5>
                </div>
                <div class="right">

                </div>
              </div>

              <div class="form-group">
                <label for="fild8">Join Date</label>
                <span class="input-box">
                  <input type="text" class="form-control" id="fild8" placeholder="">
                </span>
              </div>

              <div class="form-group">
                <label for="fild9">Position</label>
                <span class="input-box">
                  <input type="text" class="form-control" id="fild9" placeholder="">
                </span>
              </div>

              <div class="form-group">
                <label for="fild10">Status</label>
                <span class="input-box">
                  <input type="text" class="form-control" id="fild10" placeholder="">
                </span>
              </div>

              <div class="form-group">
                <label for="fild11">Salary </label>
                <span class="input-box">
                  <input type="text" class="form-control" id="fild11" placeholder="">
                </span>
              </div>

              <div class="form-group">
                <label for="fild12">Official Email </label>
                <span class="input-box">
                  <input type="email" class="form-control" id="fild12" placeholder="">
                </span>
              </div>

              <div class="form-group">
                <label for="fild13">Official Phone</label>
                <span class="input-box">
                  <input type="text" class="form-control" id="fild13" placeholder="">
                </span>
              </div>

            </div>
          </form>
        </div>

        <div class="upload-doc">
          <input type="file">
          <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.1211 1.209V13.25" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round"></path>
            <path d="M7.20508 4.13574L10.1211 1.20774L13.0371 4.13574" stroke="#BDBDBD" stroke-width="1.5"
              stroke-linecap="round" stroke-linejoin="round"></path>
            <path
              d="M5.63 6.6402C2.05 6.9702 0.75 8.3102 0.75 13.6402C0.75 20.7412 3.06 20.7412 10 20.7412C16.94 20.7412 19.25 20.7412 19.25 13.6402C19.25 8.3102 17.95 6.9702 14.37 6.6402"
              stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </div>
        <p class="note">Upload document (pdf formate)</p>
      </div>
    </div>
  </div>
</div>
<!-- add catagory end -->

<!-- add catagory start -->
<div id="current_emply" class="sidenav">
  <div class="big-popup employ-profile">
    <div class="content">
      <div class="top-navigation ex">
        <div class="left-content">
        </div>
        <div class="right-content">
          <ul>
            <li>
              <span class="save">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3 1.5C2.60218 1.5 2.22064 1.65804 1.93934 1.93934C1.65804 2.22064 1.5 2.60218 1.5 3V15C1.5 15.3978 1.65804 15.7794 1.93934 16.0607C2.22064 16.342 2.60218 16.5 3 16.5V11.25C3 10.6533 3.23705 10.081 3.65901 9.65901C4.08097 9.23705 4.65326 9 5.25 9H12.75C13.3467 9 13.919 9.23705 14.341 9.65901C14.7629 10.081 15 10.6533 15 11.25V16.5C15.3978 16.5 15.7794 16.342 16.0607 16.0607C16.342 15.7794 16.5 15.3978 16.5 15V5.43C16.4999 5.03221 16.3418 4.65074 16.0605 4.3695L13.629 1.938C13.3475 1.65723 12.9661 1.49969 12.5685 1.5H12V3.75C12 4.34674 11.7629 4.91903 11.341 5.34099C10.919 5.76295 10.3467 6 9.75 6H6.75C6.15326 6 5.58097 5.76295 5.15901 5.34099C4.73705 4.91903 4.5 4.34674 4.5 3.75V1.5H3ZM6 1.5V3.75C6 3.94891 6.07902 4.13968 6.21967 4.28033C6.36032 4.42098 6.55109 4.5 6.75 4.5H9.75C9.94891 4.5 10.1397 4.42098 10.2803 4.28033C10.421 4.13968 10.5 3.94891 10.5 3.75V1.5H6ZM13.5 16.5V11.25C13.5 11.0511 13.421 10.8603 13.2803 10.7197C13.1397 10.579 12.9489 10.5 12.75 10.5H5.25C5.05109 10.5 4.86032 10.579 4.71967 10.7197C4.57902 10.8603 4.5 11.0511 4.5 11.25V16.5H13.5ZM0 3C0 2.20435 0.31607 1.44129 0.87868 0.87868C1.44129 0.31607 2.20435 0 3 0H12.5685C13.3641 0.000169912 14.127 0.316352 14.6895 0.879L17.121 3.3105C17.6836 3.87298 17.9998 4.63592 18 5.4315V15C18 15.7956 17.6839 16.5587 17.1213 17.1213C16.5587 17.6839 15.7956 18 15 18H3C2.20435 18 1.44129 17.6839 0.87868 17.1213C0.31607 16.5587 0 15.7956 0 15V3Z"
                    fill="#262626"></path>
                </svg>
              </span>
            </li>
            <li>
              <a class="close-01" href="javascript:void(0)" onclick="curEmplyPopCls()">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.40994 6.99994L12.7099 2.70994C12.8982 2.52164 13.004 2.26624 13.004 1.99994C13.004 1.73364 12.8982 1.47825 12.7099 1.28994C12.5216 1.10164 12.2662 0.99585 11.9999 0.99585C11.7336 0.99585 11.4782 1.10164 11.2899 1.28994L6.99994 5.58994L2.70994 1.28994C2.52164 1.10164 2.26624 0.99585 1.99994 0.99585C1.73364 0.99585 1.47824 1.10164 1.28994 1.28994C1.10164 1.47825 0.995847 1.73364 0.995847 1.99994C0.995847 2.26624 1.10164 2.52164 1.28994 2.70994L5.58994 6.99994L1.28994 11.2899C1.19621 11.3829 1.12182 11.4935 1.07105 11.6154C1.02028 11.7372 0.994141 11.8679 0.994141 11.9999C0.994141 12.132 1.02028 12.2627 1.07105 12.3845C1.12182 12.5064 1.19621 12.617 1.28994 12.7099C1.3829 12.8037 1.4935 12.8781 1.61536 12.9288C1.73722 12.9796 1.86793 13.0057 1.99994 13.0057C2.13195 13.0057 2.26266 12.9796 2.38452 12.9288C2.50638 12.8781 2.61698 12.8037 2.70994 12.7099L6.99994 8.40994L11.2899 12.7099C11.3829 12.8037 11.4935 12.8781 11.6154 12.9288C11.7372 12.9796 11.8679 13.0057 11.9999 13.0057C12.132 13.0057 12.2627 12.9796 12.3845 12.9288C12.5064 12.8781 12.617 12.8037 12.7099 12.7099C12.8037 12.617 12.8781 12.5064 12.9288 12.3845C12.9796 12.2627 13.0057 12.132 13.0057 11.9999C13.0057 11.8679 12.9796 11.7372 12.9288 11.6154C12.8781 11.4935 12.8037 11.3829 12.7099 11.2899L8.40994 6.99994Z"
                    fill="#262626"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="employ-profile-inner">
        <div class="employ-img-wrap">
          <div class="left-content">
            <div class="img-box">
              <img src="assets/images/employ-profile/01.png" alt="">
            </div>
            <div class="details-box">
              <h5 class="title">Sabbir Rahman</h5>
              <p class="empoly-position">sales manager</p>
              <span class="other">
                <span class="email">sabbir@bebaribazaar.com</span>
                <span class="phoone">+880 1652 235 23664</span>
              </span>
            </div>
          </div>
          <div class="right-content">
            <div class="action">
              <span class="checkboxes-and-radios">
                <input type="checkbox" name="checkbox-cats[]" id="employ-over-chal-1" value="1" checked="">
                <label for="employ-over-chal-1"></label>
              </span>
              <span class="single-action-item">
                <a href="#" class="action-btn d-inline-block" data-toggle="dropdown" aria-expanded="false">
                  <svg width="14" height="14" viewBox="0 0 13 13" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M0.615479 6.69234C0.615479 2.42342 2.03886 1.00003 6.30779 1.00003C10.5767 1.00003 12.0001 2.42342 12.0001 6.69234C12.0001 10.9613 10.5767 12.3846 6.30779 12.3846C2.03886 12.3846 0.615479 10.9613 0.615479 6.69234Z"
                      stroke="#828282" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M8.76538 6.69229H8.77092" stroke="#828282" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round"></path>
                    <path d="M6.30444 6.69229H6.30998" stroke="#828282" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round"></path>
                    <path d="M3.84351 6.69229H3.84904" stroke="#828282" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round"></path>
                  </svg>
                </a>
                <div class="dropdown-menu dropdown-menu-right control" style="">
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
                                  stroke-linejoin="round"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M1.37524 5.02606C1.37524 6.66606 3.44624 8.67706 6.00124 8.67706C8.55575 8.67706 10.6272 6.66756 10.6272 5.02606C10.6272 3.38456 8.55575 1.37506 6.00124 1.37506C3.44624 1.37506 1.37524 3.38606 1.37524 5.02606Z"
                                  stroke="#828282" stroke-width="0.8" stroke-linecap="round"
                                  stroke-linejoin="round"></path>
                              </svg>
                            </span>
                            <span class="text">
                              View Details
                            </span>
                          </li>
                          <li class="list-item">
                            <span class="icon">
                              <svg width="10" height="9" viewBox="0 0 10 9" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M4.8124 0.0146264C4.97876 0.0146264 5.11377 0.149639 5.11377 0.315994C5.11377 0.482349 4.97876 0.617362 4.8124 0.617362H3.30998C2.27167 0.617362 1.60103 1.32859 1.60103 2.42918V5.76995C1.60103 6.87054 2.27167 7.58177 3.30998 7.58177H6.85567C7.89399 7.58177 8.56503 6.87054 8.56503 5.76995V4.1514C8.56503 3.98505 8.70005 3.85003 8.8664 3.85003C9.03276 3.85003 9.16777 3.98505 9.16777 4.1514V5.76995C9.16777 7.2141 8.23835 8.18451 6.85567 8.18451H3.30998C1.92731 8.18451 0.998291 7.2141 0.998291 5.76995V2.42918C0.998291 0.985031 1.92731 0.0146264 3.30998 0.0146264H4.8124ZM8.31213 0.367669L8.80114 0.856688C9.03943 1.09457 9.17042 1.4108 9.17002 1.74753C9.17002 2.08426 9.03902 2.40009 8.80114 2.63757L5.78385 5.65486C5.56245 5.87627 5.26751 5.99842 4.95408 5.99842H3.44885C3.36768 5.99842 3.28973 5.96547 3.23307 5.90721C3.17642 5.84935 3.14548 5.77099 3.14749 5.68942L3.18526 4.17093C3.19289 3.86876 3.31464 3.58467 3.52841 3.3705H3.52882L6.53164 0.367669C7.02267 -0.122556 7.8211 -0.122556 8.31213 0.367669ZM6.28428 1.46706L3.95475 3.79683C3.85068 3.9009 3.79161 4.03913 3.78799 4.1858L3.75786 5.39569H4.95408C5.10678 5.39569 5.24983 5.33662 5.35792 5.22853L7.70151 2.88429L6.28428 1.46706ZM6.95758 0.794004L6.71021 1.04072L8.12745 2.45836L8.37521 2.21124C8.49897 2.08747 8.56728 1.92273 8.56728 1.74753C8.56728 1.57193 8.49897 1.40678 8.37521 1.28302L7.88619 0.794004C7.63023 0.538846 7.21394 0.538846 6.95758 0.794004Z"
                                  fill="#828282"></path>
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
                                <path d="M4.22021 6.00004L5.40722 7.18654L7.78022 4.81354" stroke="#828282"
                                  stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M1.375 6.00006C1.375 9.46856 2.5315 10.6251 6 10.6251C9.4685 10.6251 10.625 9.46856 10.625 6.00006C10.625 2.53156 9.4685 1.37506 6 1.37506C2.5315 1.37506 1.375 2.53156 1.375 6.00006Z"
                                  stroke="#828282" stroke-width="0.8" stroke-linecap="round"
                                  stroke-linejoin="round"></path>
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
            </div>
          </div>
        </div>

        <div class="employ-info-wrap">
          <form action="">
            <div class="personal-info">
              <div class="title-box">
                <div class="left">
                  <h5 class="title">Personal Details </h5>
                </div>
                <div class="right">
                  <a href="#">
                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M8.62529 0.0292528C8.958 0.0292528 9.22803 0.299278 9.22803 0.631988C9.22803 0.964698 8.958 1.23472 8.62529 1.23472H5.62045C3.54383 1.23472 2.20254 2.65718 2.20254 4.85837V11.5399C2.20254 13.7411 3.54383 15.1635 5.62045 15.1635H12.7118C14.7885 15.1635 16.1306 13.7411 16.1306 11.5399V8.3028C16.1306 7.97009 16.4006 7.70007 16.7333 7.70007C17.066 7.70007 17.336 7.97009 17.336 8.3028V11.5399C17.336 14.4282 15.4772 16.369 12.7118 16.369H5.62045C2.8551 16.369 0.99707 14.4282 0.99707 11.5399V4.85837C0.99707 1.97006 2.8551 0.0292528 5.62045 0.0292528H8.62529ZM15.6247 0.735337L16.6028 1.71338C17.0793 2.18914 17.3413 2.82161 17.3405 3.49506C17.3405 4.16852 17.0785 4.80019 16.6028 5.27514L10.5682 11.3097C10.1254 11.7525 9.5355 11.9968 8.90866 11.9968H5.89819C5.73586 11.9968 5.57995 11.9309 5.46664 11.8144C5.35332 11.6987 5.29144 11.542 5.29546 11.3788L5.371 8.34186C5.38627 7.73752 5.62978 7.16934 6.05732 6.74099H6.05812L12.0638 0.735337C13.0458 -0.245112 14.6427 -0.245112 15.6247 0.735337ZM11.5691 2.93412L6.90999 7.59366C6.70184 7.80181 6.5837 8.07826 6.57647 8.37159L6.5162 10.7914H8.90866C9.21404 10.7914 9.50014 10.6732 9.71632 10.4571L14.4035 5.76858L11.5691 2.93412ZM12.9156 1.58801L12.4209 2.08145L15.2554 4.91671L15.7509 4.42247C15.9984 4.17495 16.1351 3.84545 16.1351 3.49506C16.1351 3.14387 15.9984 2.81357 15.7509 2.56605L14.7729 1.58801C14.2609 1.07769 13.4284 1.07769 12.9156 1.58801Z"
                        fill="#4F4F4F"></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div class="form-group">
                <label for="fild1">Full Name</label>
                <span class="input-box demo">
                  <p class="input-demo">Sabbir Rahman</p>
                </span>
              </div>

              <div class="form-group">
                <label for="fild2">Email</label>
                <span class="input-box demo">
                  <p class="demo">Sabbir12@gmail.com</p>
                </span>
              </div>

              <div class="form-group">
                <label for="fild3">Phone</label>
                <span class="input-box demo">
                  <p class="demo">+880 1652 235 23664</p>
                </span>
              </div>

              <div class="form-group">
                <label for="fild4">Conatct Address </label>
                <span class="input-box demo">
                  <p class="demo">House No. 78 (1st floor), Road No. 2, Banani Chairmanbari, Banani</p>
                </span>
              </div>

              <div class="form-group">
                <label for="fild6">City </label>
                <span class="input-box demo">
                  <p class="demo">Dhaka</p>
                </span>
              </div>

              <div class="form-group">
                <label for="fild6">Permanent Address </label>
                <span class="input-box demo">
                  <p class="demo">house #8, block-a, mirpur, 1254, Dhaka</p>
                </span>
              </div>

              <div class="form-group">
                <label for="fild7">NID</label>
                <span class="input-box demo">
                  <p class="demo">12256493231544623</p>
                </span>
              </div>

            </div>

            <div class="employment-info">
              <div class="title-box">
                <div class="left">
                  <h5 class="title">employment Details </h5>
                </div>
                <div class="right">
                  <a href="#">
                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M8.62529 0.0292528C8.958 0.0292528 9.22803 0.299278 9.22803 0.631988C9.22803 0.964698 8.958 1.23472 8.62529 1.23472H5.62045C3.54383 1.23472 2.20254 2.65718 2.20254 4.85837V11.5399C2.20254 13.7411 3.54383 15.1635 5.62045 15.1635H12.7118C14.7885 15.1635 16.1306 13.7411 16.1306 11.5399V8.3028C16.1306 7.97009 16.4006 7.70007 16.7333 7.70007C17.066 7.70007 17.336 7.97009 17.336 8.3028V11.5399C17.336 14.4282 15.4772 16.369 12.7118 16.369H5.62045C2.8551 16.369 0.99707 14.4282 0.99707 11.5399V4.85837C0.99707 1.97006 2.8551 0.0292528 5.62045 0.0292528H8.62529ZM15.6247 0.735337L16.6028 1.71338C17.0793 2.18914 17.3413 2.82161 17.3405 3.49506C17.3405 4.16852 17.0785 4.80019 16.6028 5.27514L10.5682 11.3097C10.1254 11.7525 9.5355 11.9968 8.90866 11.9968H5.89819C5.73586 11.9968 5.57995 11.9309 5.46664 11.8144C5.35332 11.6987 5.29144 11.542 5.29546 11.3788L5.371 8.34186C5.38627 7.73752 5.62978 7.16934 6.05732 6.74099H6.05812L12.0638 0.735337C13.0458 -0.245112 14.6427 -0.245112 15.6247 0.735337ZM11.5691 2.93412L6.90999 7.59366C6.70184 7.80181 6.5837 8.07826 6.57647 8.37159L6.5162 10.7914H8.90866C9.21404 10.7914 9.50014 10.6732 9.71632 10.4571L14.4035 5.76858L11.5691 2.93412ZM12.9156 1.58801L12.4209 2.08145L15.2554 4.91671L15.7509 4.42247C15.9984 4.17495 16.1351 3.84545 16.1351 3.49506C16.1351 3.14387 15.9984 2.81357 15.7509 2.56605L14.7729 1.58801C14.2609 1.07769 13.4284 1.07769 12.9156 1.58801Z"
                        fill="#4F4F4F"></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div class="form-group">
                <label for="fild8">Join Date</label>
                <span class="input-box demo">
                  <p class="demo">12/10/2020</p>
                </span>
              </div>

              <div class="form-group">
                <label for="fild9">Position</label>
                <span class="input-box demo">
                  <p class="demo">Sales Maanger</p>
                </span>
              </div>

              <div class="form-group">
                <label for="fild10">Status</label>
                <span class="input-box demo">
                  <p class="demo">Full Time</p>
                </span>
              </div>

              <div class="form-group">
                <label for="fild11">Salary </label>
                <span class="input-box demo">
                  <p class="demo">15,000</p>
                </span>
              </div>

              <div class="form-group">
                <label for="fild12">Official Email </label>
                <span class="input-box demo">
                  <p class="demo">sabbir@bebaribazaar.com</p>
                </span>
              </div>

              <div class="form-group">
                <label for="fild13">Official Phone</label>
                <span class="input-box demo">
                  <p class="demo">+880 1652 235 23664</p>
                </span>
              </div>

            </div>
          </form>
        </div>

        <div class="upload-doc download">

          <a href="#" class="w-100 h-100">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M18.1594 6.3L12.4894 0.9C11.7594 0.8 10.9394 0.75 10.0394 0.75C3.74941 0.75 1.64941 3.07 1.64941 10C1.64941 16.94 3.74941 19.25 10.0394 19.25C16.3394 19.25 18.4394 16.94 18.4394 10C18.4394 8.58 18.3494 7.35 18.1594 6.3Z"
                stroke="#4F4F4F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M11.9336 0.83252V3.49352C11.9336 5.35152 13.4396 6.85652 15.2976 6.85652H18.2486"
                stroke="#4F4F4F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M9.66016 14.0171V7.97607" stroke="#4F4F4F" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round"></path>
              <path d="M7.31445 11.6621L9.65945 14.0171L12.0045 11.6621" stroke="#4F4F4F" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- add catagory end -->

<!-- add catagory start -->
<div id="shop_keeper" class="sidenav">
  <div class="big-popup employ-profile">
    <div class="content">
      <div class="top-navigation ex">
        <div class="left-content">
        </div>
        <div class="right-content">
          <ul>
            <li>
              <span class="save">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3 1.5C2.60218 1.5 2.22064 1.65804 1.93934 1.93934C1.65804 2.22064 1.5 2.60218 1.5 3V15C1.5 15.3978 1.65804 15.7794 1.93934 16.0607C2.22064 16.342 2.60218 16.5 3 16.5V11.25C3 10.6533 3.23705 10.081 3.65901 9.65901C4.08097 9.23705 4.65326 9 5.25 9H12.75C13.3467 9 13.919 9.23705 14.341 9.65901C14.7629 10.081 15 10.6533 15 11.25V16.5C15.3978 16.5 15.7794 16.342 16.0607 16.0607C16.342 15.7794 16.5 15.3978 16.5 15V5.43C16.4999 5.03221 16.3418 4.65074 16.0605 4.3695L13.629 1.938C13.3475 1.65723 12.9661 1.49969 12.5685 1.5H12V3.75C12 4.34674 11.7629 4.91903 11.341 5.34099C10.919 5.76295 10.3467 6 9.75 6H6.75C6.15326 6 5.58097 5.76295 5.15901 5.34099C4.73705 4.91903 4.5 4.34674 4.5 3.75V1.5H3ZM6 1.5V3.75C6 3.94891 6.07902 4.13968 6.21967 4.28033C6.36032 4.42098 6.55109 4.5 6.75 4.5H9.75C9.94891 4.5 10.1397 4.42098 10.2803 4.28033C10.421 4.13968 10.5 3.94891 10.5 3.75V1.5H6ZM13.5 16.5V11.25C13.5 11.0511 13.421 10.8603 13.2803 10.7197C13.1397 10.579 12.9489 10.5 12.75 10.5H5.25C5.05109 10.5 4.86032 10.579 4.71967 10.7197C4.57902 10.8603 4.5 11.0511 4.5 11.25V16.5H13.5ZM0 3C0 2.20435 0.31607 1.44129 0.87868 0.87868C1.44129 0.31607 2.20435 0 3 0H12.5685C13.3641 0.000169912 14.127 0.316352 14.6895 0.879L17.121 3.3105C17.6836 3.87298 17.9998 4.63592 18 5.4315V15C18 15.7956 17.6839 16.5587 17.1213 17.1213C16.5587 17.6839 15.7956 18 15 18H3C2.20435 18 1.44129 17.6839 0.87868 17.1213C0.31607 16.5587 0 15.7956 0 15V3Z"
                    fill="#262626"></path>
                </svg>
              </span>
            </li>
            <li>
              <a class="close-01" href="javascript:void(0)" @click="customerPopCls">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.40994 6.99994L12.7099 2.70994C12.8982 2.52164 13.004 2.26624 13.004 1.99994C13.004 1.73364 12.8982 1.47825 12.7099 1.28994C12.5216 1.10164 12.2662 0.99585 11.9999 0.99585C11.7336 0.99585 11.4782 1.10164 11.2899 1.28994L6.99994 5.58994L2.70994 1.28994C2.52164 1.10164 2.26624 0.99585 1.99994 0.99585C1.73364 0.99585 1.47824 1.10164 1.28994 1.28994C1.10164 1.47825 0.995847 1.73364 0.995847 1.99994C0.995847 2.26624 1.10164 2.52164 1.28994 2.70994L5.58994 6.99994L1.28994 11.2899C1.19621 11.3829 1.12182 11.4935 1.07105 11.6154C1.02028 11.7372 0.994141 11.8679 0.994141 11.9999C0.994141 12.132 1.02028 12.2627 1.07105 12.3845C1.12182 12.5064 1.19621 12.617 1.28994 12.7099C1.3829 12.8037 1.4935 12.8781 1.61536 12.9288C1.73722 12.9796 1.86793 13.0057 1.99994 13.0057C2.13195 13.0057 2.26266 12.9796 2.38452 12.9288C2.50638 12.8781 2.61698 12.8037 2.70994 12.7099L6.99994 8.40994L11.2899 12.7099C11.3829 12.8037 11.4935 12.8781 11.6154 12.9288C11.7372 12.9796 11.8679 13.0057 11.9999 13.0057C12.132 13.0057 12.2627 12.9796 12.3845 12.9288C12.5064 12.8781 12.617 12.8037 12.7099 12.7099C12.8037 12.617 12.8781 12.5064 12.9288 12.3845C12.9796 12.2627 13.0057 12.132 13.0057 11.9999C13.0057 11.8679 12.9796 11.7372 12.9288 11.6154C12.8781 11.4935 12.8037 11.3829 12.7099 11.2899L8.40994 6.99994Z"
                    fill="#262626"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="employ-profile-inner">
        <div class="employ-img-wrap">
          <div class="left-content">
            <div class="img-box">
              <div class="new">
                <input type="file">
                <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.1211 1.209V13.25" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round"></path>
                  <path d="M7.20508 4.13574L10.1211 1.20774L13.0371 4.13574" stroke="#BDBDBD" stroke-width="1.5"
                    stroke-linecap="round" stroke-linejoin="round"></path>
                  <path
                    d="M5.63 6.6402C2.05 6.9702 0.75 8.3102 0.75 13.6402C0.75 20.7412 3.06 20.7412 10 20.7412C16.94 20.7412 19.25 20.7412 19.25 13.6402C19.25 8.3102 17.95 6.9702 14.37 6.6402"
                    stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <span class="place">upload Image</span>
              </div>
            </div>
            <div class="details-box">

            </div>
          </div>
          <div class="right-content">
            <div class="action">
              <span class="checkboxes-and-radios">
                <input type="checkbox" name="checkbox-cats[]" id="new-empl-over-chal-1" value="1" checked="">
                <label for="new-empl-over-chal-1"></label>
              </span>
              <span class="single-action-item">
                <a href="#" class="action-btn d-inline-block" data-toggle="dropdown" aria-expanded="false">
                  <svg width="14" height="14" viewBox="0 0 13 13" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M0.615479 6.69234C0.615479 2.42342 2.03886 1.00003 6.30779 1.00003C10.5767 1.00003 12.0001 2.42342 12.0001 6.69234C12.0001 10.9613 10.5767 12.3846 6.30779 12.3846C2.03886 12.3846 0.615479 10.9613 0.615479 6.69234Z"
                      stroke="#828282" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M8.76538 6.69229H8.77092" stroke="#828282" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round"></path>
                    <path d="M6.30444 6.69229H6.30998" stroke="#828282" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round"></path>
                    <path d="M3.84351 6.69229H3.84904" stroke="#828282" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round"></path>
                  </svg>
                </a>
                <div class="dropdown-menu dropdown-menu-right control" style="">
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
                                  stroke-linejoin="round"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M1.37524 5.02606C1.37524 6.66606 3.44624 8.67706 6.00124 8.67706C8.55575 8.67706 10.6272 6.66756 10.6272 5.02606C10.6272 3.38456 8.55575 1.37506 6.00124 1.37506C3.44624 1.37506 1.37524 3.38606 1.37524 5.02606Z"
                                  stroke="#828282" stroke-width="0.8" stroke-linecap="round"
                                  stroke-linejoin="round"></path>
                              </svg>
                            </span>
                            <span class="text">
                              View Details
                            </span>
                          </li>
                          <li class="list-item">
                            <span class="icon">
                              <svg width="10" height="9" viewBox="0 0 10 9" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M4.8124 0.0146264C4.97876 0.0146264 5.11377 0.149639 5.11377 0.315994C5.11377 0.482349 4.97876 0.617362 4.8124 0.617362H3.30998C2.27167 0.617362 1.60103 1.32859 1.60103 2.42918V5.76995C1.60103 6.87054 2.27167 7.58177 3.30998 7.58177H6.85567C7.89399 7.58177 8.56503 6.87054 8.56503 5.76995V4.1514C8.56503 3.98505 8.70005 3.85003 8.8664 3.85003C9.03276 3.85003 9.16777 3.98505 9.16777 4.1514V5.76995C9.16777 7.2141 8.23835 8.18451 6.85567 8.18451H3.30998C1.92731 8.18451 0.998291 7.2141 0.998291 5.76995V2.42918C0.998291 0.985031 1.92731 0.0146264 3.30998 0.0146264H4.8124ZM8.31213 0.367669L8.80114 0.856688C9.03943 1.09457 9.17042 1.4108 9.17002 1.74753C9.17002 2.08426 9.03902 2.40009 8.80114 2.63757L5.78385 5.65486C5.56245 5.87627 5.26751 5.99842 4.95408 5.99842H3.44885C3.36768 5.99842 3.28973 5.96547 3.23307 5.90721C3.17642 5.84935 3.14548 5.77099 3.14749 5.68942L3.18526 4.17093C3.19289 3.86876 3.31464 3.58467 3.52841 3.3705H3.52882L6.53164 0.367669C7.02267 -0.122556 7.8211 -0.122556 8.31213 0.367669ZM6.28428 1.46706L3.95475 3.79683C3.85068 3.9009 3.79161 4.03913 3.78799 4.1858L3.75786 5.39569H4.95408C5.10678 5.39569 5.24983 5.33662 5.35792 5.22853L7.70151 2.88429L6.28428 1.46706ZM6.95758 0.794004L6.71021 1.04072L8.12745 2.45836L8.37521 2.21124C8.49897 2.08747 8.56728 1.92273 8.56728 1.74753C8.56728 1.57193 8.49897 1.40678 8.37521 1.28302L7.88619 0.794004C7.63023 0.538846 7.21394 0.538846 6.95758 0.794004Z"
                                  fill="#828282"></path>
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
                                <path d="M4.22021 6.00004L5.40722 7.18654L7.78022 4.81354" stroke="#828282"
                                  stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M1.375 6.00006C1.375 9.46856 2.5315 10.6251 6 10.6251C9.4685 10.6251 10.625 9.46856 10.625 6.00006C10.625 2.53156 9.4685 1.37506 6 1.37506C2.5315 1.37506 1.375 2.53156 1.375 6.00006Z"
                                  stroke="#828282" stroke-width="0.8" stroke-linecap="round"
                                  stroke-linejoin="round"></path>
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
            </div>
          </div>
        </div>

        <div class="employ-info-wrap">
          <form action="">
            <div class="personal-info">
              <div class="title-box">
                <div class="left">
                  <h5 class="title">shopkeeper Details </h5>
                </div>
                <div class="right">

                </div>
              </div>

              <div class="form-group">
                <label for="fild1">নাম</label>
                <span class="input-box">
                  <input type="text" class="form-control" id="fild1" placeholder="">
                </span>
              </div>

              <div class="form-group">
                <label for="fild2">দোকানের ঠিকানা</label>
                <span class="input-box">
                  <input type="text" class="form-control" id="fild2" placeholder="">
                </span>
              </div>

              <div class="form-group">
                <label for="fild3">এলাকার নাম</label>
                <span class="input-box">
                  <input type="text" class="form-control" id="fild3" placeholder="">
                </span>
              </div>

              <div class="form-group">
                <label for="fild4">ফোন নম্বর </label>
                <span class="input-box">
                  <input type="text" class="form-control" id="fild4" placeholder="">
                </span>
              </div>

              <div class="form-group mt-3">
                <label for="fild6">City </label>
                <span class="input-box">
                  <input type="text" class="form-control" id="fild6" placeholder="">
                </span>
              </div>

              <div class="form-group">
                <label for="fild6">Permanent Address </label>
                <span class="input-box">
                  <input type="text" class="form-control" id="fild6" placeholder="">
                </span>
              </div>

              <div class="form-group">
                <label for="fild7">NID</label>
                <span class="input-box">
                  <input type="text" class="form-control" id="fild7" placeholder="">
                </span>
              </div>

            </div>
          </form>
        </div>

        <div class="upload-doc mt-5">
          <input type="file">
          <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.1211 1.209V13.25" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round"></path>
            <path d="M7.20508 4.13574L10.1211 1.20774L13.0371 4.13574" stroke="#BDBDBD" stroke-width="1.5"
              stroke-linecap="round" stroke-linejoin="round"></path>
            <path
              d="M5.63 6.6402C2.05 6.9702 0.75 8.3102 0.75 13.6402C0.75 20.7412 3.06 20.7412 10 20.7412C16.94 20.7412 19.25 20.7412 19.25 13.6402C19.25 8.3102 17.95 6.9702 14.37 6.6402"
              stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </div>
        <p class="note">Upload shope images</p>

        <div class="btn-wrapper text-right" style="margin-top: 60px;">
          <button type="button" class="btn-common">Save &amp; Continue</button>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- add catagory end -->

<!-- add catagory start -->
<div id="supplyers" class="sidenav">
  <div class="big-popup employ-profile">
    <div class="content">
      <div class="top-navigation ex">
        <div class="left-content">
        </div>
        <div class="right-content">
          <ul>
            <li>
              <span class="save">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3 1.5C2.60218 1.5 2.22064 1.65804 1.93934 1.93934C1.65804 2.22064 1.5 2.60218 1.5 3V15C1.5 15.3978 1.65804 15.7794 1.93934 16.0607C2.22064 16.342 2.60218 16.5 3 16.5V11.25C3 10.6533 3.23705 10.081 3.65901 9.65901C4.08097 9.23705 4.65326 9 5.25 9H12.75C13.3467 9 13.919 9.23705 14.341 9.65901C14.7629 10.081 15 10.6533 15 11.25V16.5C15.3978 16.5 15.7794 16.342 16.0607 16.0607C16.342 15.7794 16.5 15.3978 16.5 15V5.43C16.4999 5.03221 16.3418 4.65074 16.0605 4.3695L13.629 1.938C13.3475 1.65723 12.9661 1.49969 12.5685 1.5H12V3.75C12 4.34674 11.7629 4.91903 11.341 5.34099C10.919 5.76295 10.3467 6 9.75 6H6.75C6.15326 6 5.58097 5.76295 5.15901 5.34099C4.73705 4.91903 4.5 4.34674 4.5 3.75V1.5H3ZM6 1.5V3.75C6 3.94891 6.07902 4.13968 6.21967 4.28033C6.36032 4.42098 6.55109 4.5 6.75 4.5H9.75C9.94891 4.5 10.1397 4.42098 10.2803 4.28033C10.421 4.13968 10.5 3.94891 10.5 3.75V1.5H6ZM13.5 16.5V11.25C13.5 11.0511 13.421 10.8603 13.2803 10.7197C13.1397 10.579 12.9489 10.5 12.75 10.5H5.25C5.05109 10.5 4.86032 10.579 4.71967 10.7197C4.57902 10.8603 4.5 11.0511 4.5 11.25V16.5H13.5ZM0 3C0 2.20435 0.31607 1.44129 0.87868 0.87868C1.44129 0.31607 2.20435 0 3 0H12.5685C13.3641 0.000169912 14.127 0.316352 14.6895 0.879L17.121 3.3105C17.6836 3.87298 17.9998 4.63592 18 5.4315V15C18 15.7956 17.6839 16.5587 17.1213 17.1213C16.5587 17.6839 15.7956 18 15 18H3C2.20435 18 1.44129 17.6839 0.87868 17.1213C0.31607 16.5587 0 15.7956 0 15V3Z"
                    fill="#262626"></path>
                </svg>
              </span>
            </li>
            <li>
              <a class="close-01" href="javascript:void(0)" @click="supplyPopCls">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.40994 6.99994L12.7099 2.70994C12.8982 2.52164 13.004 2.26624 13.004 1.99994C13.004 1.73364 12.8982 1.47825 12.7099 1.28994C12.5216 1.10164 12.2662 0.99585 11.9999 0.99585C11.7336 0.99585 11.4782 1.10164 11.2899 1.28994L6.99994 5.58994L2.70994 1.28994C2.52164 1.10164 2.26624 0.99585 1.99994 0.99585C1.73364 0.99585 1.47824 1.10164 1.28994 1.28994C1.10164 1.47825 0.995847 1.73364 0.995847 1.99994C0.995847 2.26624 1.10164 2.52164 1.28994 2.70994L5.58994 6.99994L1.28994 11.2899C1.19621 11.3829 1.12182 11.4935 1.07105 11.6154C1.02028 11.7372 0.994141 11.8679 0.994141 11.9999C0.994141 12.132 1.02028 12.2627 1.07105 12.3845C1.12182 12.5064 1.19621 12.617 1.28994 12.7099C1.3829 12.8037 1.4935 12.8781 1.61536 12.9288C1.73722 12.9796 1.86793 13.0057 1.99994 13.0057C2.13195 13.0057 2.26266 12.9796 2.38452 12.9288C2.50638 12.8781 2.61698 12.8037 2.70994 12.7099L6.99994 8.40994L11.2899 12.7099C11.3829 12.8037 11.4935 12.8781 11.6154 12.9288C11.7372 12.9796 11.8679 13.0057 11.9999 13.0057C12.132 13.0057 12.2627 12.9796 12.3845 12.9288C12.5064 12.8781 12.617 12.8037 12.7099 12.7099C12.8037 12.617 12.8781 12.5064 12.9288 12.3845C12.9796 12.2627 13.0057 12.132 13.0057 11.9999C13.0057 11.8679 12.9796 11.7372 12.9288 11.6154C12.8781 11.4935 12.8037 11.3829 12.7099 11.2899L8.40994 6.99994Z"
                    fill="#262626" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="employ-profile-inner">
        <div class="employ-img-wrap">
          <div class="left-content">
            <div class="img-box">
              <div class="new">
                <input type="file">
                <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.1211 1.209V13.25" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round"></path>
                  <path d="M7.20508 4.13574L10.1211 1.20774L13.0371 4.13574" stroke="#BDBDBD" stroke-width="1.5"
                    stroke-linecap="round" stroke-linejoin="round"></path>
                  <path
                    d="M5.63 6.6402C2.05 6.9702 0.75 8.3102 0.75 13.6402C0.75 20.7412 3.06 20.7412 10 20.7412C16.94 20.7412 19.25 20.7412 19.25 13.6402C19.25 8.3102 17.95 6.9702 14.37 6.6402"
                    stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <span class="place">upload Image</span>
              </div>
            </div>
            <div class="details-box">

            </div>
          </div>
          <div class="right-content">
            <div class="action">
              <span class="checkboxes-and-radios">
                <input type="checkbox" name="checkbox-cats[]" id="supplyer-over-chal-1" value="1" checked="">
                <label for="supplyer-over-chal-1"></label>
              </span>
              <span class="single-action-item">
                <a href="#" class="action-btn d-inline-block" data-toggle="dropdown" aria-expanded="false">
                  <svg width="14" height="14" viewBox="0 0 13 13" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M0.615479 6.69234C0.615479 2.42342 2.03886 1.00003 6.30779 1.00003C10.5767 1.00003 12.0001 2.42342 12.0001 6.69234C12.0001 10.9613 10.5767 12.3846 6.30779 12.3846C2.03886 12.3846 0.615479 10.9613 0.615479 6.69234Z"
                      stroke="#828282" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M8.76538 6.69229H8.77092" stroke="#828282" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round"></path>
                    <path d="M6.30444 6.69229H6.30998" stroke="#828282" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round"></path>
                    <path d="M3.84351 6.69229H3.84904" stroke="#828282" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round"></path>
                  </svg>
                </a>
                <div class="dropdown-menu dropdown-menu-right control" style="">
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
                                  stroke-linejoin="round"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M1.37524 5.02606C1.37524 6.66606 3.44624 8.67706 6.00124 8.67706C8.55575 8.67706 10.6272 6.66756 10.6272 5.02606C10.6272 3.38456 8.55575 1.37506 6.00124 1.37506C3.44624 1.37506 1.37524 3.38606 1.37524 5.02606Z"
                                  stroke="#828282" stroke-width="0.8" stroke-linecap="round"
                                  stroke-linejoin="round"></path>
                              </svg>
                            </span>
                            <span class="text">
                              View Details
                            </span>
                          </li>
                          <li class="list-item">
                            <span class="icon">
                              <svg width="10" height="9" viewBox="0 0 10 9" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M4.8124 0.0146264C4.97876 0.0146264 5.11377 0.149639 5.11377 0.315994C5.11377 0.482349 4.97876 0.617362 4.8124 0.617362H3.30998C2.27167 0.617362 1.60103 1.32859 1.60103 2.42918V5.76995C1.60103 6.87054 2.27167 7.58177 3.30998 7.58177H6.85567C7.89399 7.58177 8.56503 6.87054 8.56503 5.76995V4.1514C8.56503 3.98505 8.70005 3.85003 8.8664 3.85003C9.03276 3.85003 9.16777 3.98505 9.16777 4.1514V5.76995C9.16777 7.2141 8.23835 8.18451 6.85567 8.18451H3.30998C1.92731 8.18451 0.998291 7.2141 0.998291 5.76995V2.42918C0.998291 0.985031 1.92731 0.0146264 3.30998 0.0146264H4.8124ZM8.31213 0.367669L8.80114 0.856688C9.03943 1.09457 9.17042 1.4108 9.17002 1.74753C9.17002 2.08426 9.03902 2.40009 8.80114 2.63757L5.78385 5.65486C5.56245 5.87627 5.26751 5.99842 4.95408 5.99842H3.44885C3.36768 5.99842 3.28973 5.96547 3.23307 5.90721C3.17642 5.84935 3.14548 5.77099 3.14749 5.68942L3.18526 4.17093C3.19289 3.86876 3.31464 3.58467 3.52841 3.3705H3.52882L6.53164 0.367669C7.02267 -0.122556 7.8211 -0.122556 8.31213 0.367669ZM6.28428 1.46706L3.95475 3.79683C3.85068 3.9009 3.79161 4.03913 3.78799 4.1858L3.75786 5.39569H4.95408C5.10678 5.39569 5.24983 5.33662 5.35792 5.22853L7.70151 2.88429L6.28428 1.46706ZM6.95758 0.794004L6.71021 1.04072L8.12745 2.45836L8.37521 2.21124C8.49897 2.08747 8.56728 1.92273 8.56728 1.74753C8.56728 1.57193 8.49897 1.40678 8.37521 1.28302L7.88619 0.794004C7.63023 0.538846 7.21394 0.538846 6.95758 0.794004Z"
                                  fill="#828282"></path>
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
                                <path d="M4.22021 6.00004L5.40722 7.18654L7.78022 4.81354" stroke="#828282"
                                  stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M1.375 6.00006C1.375 9.46856 2.5315 10.6251 6 10.6251C9.4685 10.6251 10.625 9.46856 10.625 6.00006C10.625 2.53156 9.4685 1.37506 6 1.37506C2.5315 1.37506 1.375 2.53156 1.375 6.00006Z"
                                  stroke="#828282" stroke-width="0.8" stroke-linecap="round"
                                  stroke-linejoin="round"></path>
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
            </div>
          </div>
        </div>

        <div class="employ-info-wrap">
          <form action="">
            <div class="personal-info">
              <div class="title-box">
                <div class="left">
                  <h5 class="title">Personal Details </h5>
                </div>
                <div class="right">

                </div>
              </div>

              <div class="form-group">
                <label for="fild1">নাম</label>
                <span class="input-box">
                  <input type="text" class="form-control" id="fild1" placeholder="">
                </span>
              </div>

              <div class="form-group">
                <label for="fild2">দোকানের ঠিকানা</label>
                <span class="input-box">
                  <input type="text" class="form-control" id="fild2" placeholder="">
                </span>
              </div>

              <div class="form-group">
                <label for="fild3">এলাকার নাম</label>
                <span class="input-box">
                  <input type="text" class="form-control" id="fild3" placeholder="">
                </span>
              </div>

              <div class="form-group">
                <label for="fild4">ফোন নম্বর </label>
                <span class="input-box">
                  <input type="text" class="form-control" id="fild4" placeholder="">
                </span>
              </div>

              <div class="form-group mt-3">
                <label for="fild6">City </label>
                <span class="input-box">
                  <input type="text" class="form-control" id="fild6" placeholder="">
                </span>
              </div>

              <div class="form-group">
                <label for="fild6">Permanent Address </label>
                <span class="input-box">
                  <input type="text" class="form-control" id="fild6" placeholder="">
                </span>
              </div>

              <div class="form-group">
                <label for="fild7">NID</label>
                <span class="input-box">
                  <input type="text" class="form-control" id="fild7" placeholder="">
                </span>
              </div>

            </div>

            <div class="personal-info">
              <div class="title-box">
                <div class="left">
                  <h5 class="title">Products supply List: </h5>
                </div>
                <div class="right">

                </div>
              </div>

              <div class="form-group">
                <label for="fild1">products supply</label>
                <span class="input-box">
                  <input type="text" class="form-control" id="fild1" placeholder="">
                </span>
              </div>
            </div>
          </form>
        </div>

        <div class="btn-wrapper text-right" style="margin-top: 60px;">
          <button type="button" class="btn-common">Save & Continue</button>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- add catagory end -->

<!-- add catagory start -->
<div id="" class="sidenav">

</div>
<!-- add catagory end -->

<!-- add catagory start -->
<div id="" class="sidenav">

</div>
<!-- add catagory end -->

<!-- add catagory start -->
<div id="" class="sidenav">

</div>
<!-- add catagory end -->

</div>
</template>
<script>
export default {
    name:'AllPopup',
    data() {
        return {
        } 
    },
    methods:{
      addProdOnePopCls(){
        document.getElementById("add_product_one").style.width = "0";
      },
      customerPopCls() {
        document.getElementById("shop_keeper").style.width = "0"; 
      },
      supplyPopCls(){
        document.getElementById("supplyers").style.width = "0";
      },
      discPopCls(){
        document.getElementById("discount_pop").style.width = "0";
      }
    }
}
</script>