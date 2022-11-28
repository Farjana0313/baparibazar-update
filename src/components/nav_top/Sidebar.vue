<!-- <template>
    <div>
        <nav class="sidebar sidebar-offcanvas" id="sidebar">
            <div class="nav-innner-wrap">
                <div class="sidebar-top">
                    <div class="logo-wrapper">
                        <router-link to="/"><img src="assets/images/logo/logo.svg" alt=""></router-link>
                    </div>

                    <ul class="nav">
                        <li class="nav-item menu-items">
                            <router-link class="nav-link" to="/order">
                                <span class="menu-icon">
                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M12.8969 0.8421C13.3109 0.8421 13.6469 1.1781 13.6469 1.5921C13.6469 2.0061 13.3109 2.3421 12.8969 2.3421H5.62888C3.12088 2.3421 1.49988 4.0661 1.49988 6.7361V14.8181C1.49988 17.5231 3.08188 19.2031 5.62888 19.2031H14.2329C16.7409 19.2031 18.3619 17.4821 18.3619 14.8181V7.7791C18.3619 7.3651 18.6979 7.0291 19.1119 7.0291C19.5259 7.0291 19.8619 7.3651 19.8619 7.7791V14.8181C19.8619 18.3381 17.5999 20.7031 14.2329 20.7031H5.62888C2.26188 20.7031 -0.00012207 18.3381 -0.00012207 14.8181V6.7361C-0.00012207 3.2111 2.26188 0.8421 5.62888 0.8421H12.8969ZM15.0123 7.6719C15.3403 7.9259 15.4003 8.3969 15.1463 8.7239L12.2163 12.5039C12.0943 12.6619 11.9143 12.7649 11.7163 12.7889C11.5163 12.8159 11.3183 12.7579 11.1603 12.6349L8.34228 10.4209L5.81128 13.7099C5.66328 13.9019 5.44128 14.0029 5.21628 14.0029C5.05628 14.0029 4.89528 13.9519 4.75928 13.8479C4.43128 13.5949 4.36928 13.1239 4.62228 12.7959L7.61528 8.9059C7.73728 8.7469 7.91828 8.6439 8.11628 8.6189C8.31828 8.5929 8.51628 8.6489 8.67328 8.7739L11.4933 10.9889L13.9603 7.8059C14.2143 7.4769 14.6843 7.4159 15.0123 7.6719ZM17.9673 0C19.4413 0 20.6393 1.198 20.6393 2.672C20.6393 4.146 19.4413 5.345 17.9673 5.345C16.4943 5.345 15.2953 4.146 15.2953 2.672C15.2953 1.198 16.4943 0 17.9673 0ZM17.9673 1.5C17.3213 1.5 16.7953 2.025 16.7953 2.672C16.7953 3.318 17.3213 3.845 17.9673 3.845C18.6133 3.845 19.1393 3.318 19.1393 2.672C19.1393 2.025 18.6133 1.5 17.9673 1.5Z"
                                            fill="#828282" />
                                    </svg>
                                </span>
                                <span class="menu-title"> order</span>
                            </router-link>
                        </li>

                        <li class="nav-item menu-items">
                            <a class="nav-link" data-toggle="collapse" href="#products" aria-expanded="false"
                                aria-controls="ui-basic">
                                <span class="menu-icon">
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M15.436 0C19.063 0 21.5 2.546 21.5 6.335V15.165C21.5 18.954 19.063 21.5 15.436 21.5H6.064C2.437 21.5 0 18.954 0 15.165V6.335C0 2.546 2.437 0 6.064 0H15.436ZM15.436 1.5H6.064C3.292 1.5 1.5 3.397 1.5 6.335V15.165C1.5 18.103 3.292 20 6.064 20H15.436C18.209 20 20 18.103 20 15.165V6.335C20 3.397 18.209 1.5 15.436 1.5ZM6.1211 8.2025C6.5351 8.2025 6.8711 8.5385 6.8711 8.9525V15.8125C6.8711 16.2265 6.5351 16.5625 6.1211 16.5625C5.7071 16.5625 5.3711 16.2265 5.3711 15.8125V8.9525C5.3711 8.5385 5.7071 8.2025 6.1211 8.2025ZM10.7881 4.9185C11.2021 4.9185 11.5381 5.2545 11.5381 5.6685V15.8115C11.5381 16.2255 11.2021 16.5615 10.7881 16.5615C10.3741 16.5615 10.0381 16.2255 10.0381 15.8115V5.6685C10.0381 5.2545 10.3741 4.9185 10.7881 4.9185ZM15.3784 11.8275C15.7924 11.8275 16.1284 12.1635 16.1284 12.5775V15.8115C16.1284 16.2255 15.7924 16.5615 15.3784 16.5615C14.9644 16.5615 14.6284 16.2255 14.6284 15.8115V12.5775C14.6284 12.1635 14.9644 11.8275 15.3784 11.8275Z"
                                            fill="#828282" />
                                    </svg>
                                </span>
                                <span class="menu-title">Products</span>

                            </a>
                            <div class="collapse" id="products">
                                <ul class="nav flex-column sub-menu">
                                    <li class="nav-item"> <router-link class="nav-link" to="/product_overview">overview</router-link>
                                    </li>
                                    <li class="nav-item"> <router-link class="nav-link" to="/product_list">List</router-link></li>
                                    <li class="nav-item"> <router-link class="nav-link"
                                            to="/price_update_history">Price Update
                                            History</router-link></li>
                                </ul>
                            </div>
                        </li>

                        <li class="nav-item menu-items">
                            <a class="nav-link" data-toggle="collapse" href="#sales" aria-expanded="false"
                                aria-controls="ui-basic">
                                <span class="menu-icon">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M11.6786 1.3486C10.9706 2.1636 10.6886 7.2886 11.5116 8.1126C12.3346 8.9346 17.2796 8.5186 18.4676 7.5836C21.3256 5.3326 13.9386 -1.2534 11.6786 1.3486Z"
                                            stroke="#828282" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M16.1376 11.79C17.2216 12.874 14.3476 19.054 8.65158 19.054C4.39758 19.054 0.949585 15.606 0.949585 11.353C0.949585 6.05301 6.17858 2.66301 7.67758 4.16201C8.54058 5.02501 7.56858 9.08601 9.11658 10.635C10.6646 12.184 15.0536 10.706 16.1376 11.79Z"
                                            stroke="#828282" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>

                                </span>
                                <span class="menu-title">sales</span>
                            </a>
                            <div class="collapse" id="sales">
                                <ul class="nav flex-column sub-menu">
                                    <li class="nav-item"> <router-link class="nav-link" to="/sales_analytics"> Analytics</router-link>
                                    </li>
                                    <li class="nav-item"> <router-link class="nav-link" to="/sales_list">list</router-link></li>
                                </ul>
                            </div>
                        </li>

                        <li class="nav-item menu-items">
                            <router-link class="nav-link" to="/contact_list">
                                <span class="menu-icon">
                                    <svg width="22" height="19" viewBox="0 0 22 19" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M10.9725 17.3682C7.73349 17.3682 4.96649 16.8782 4.96649 14.9162C4.96649 12.9542 7.71549 11.2462 10.9725 11.2462C14.2115 11.2462 16.9785 12.9382 16.9785 14.8992C16.9785 16.8602 14.2295 17.3682 10.9725 17.3682Z"
                                            stroke="#828282" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M10.9725 8.4487C13.0985 8.4487 14.8225 6.7257 14.8225 4.5997C14.8225 2.4737 13.0985 0.749702 10.9725 0.749702C8.84653 0.749702 7.12251 2.4737 7.12251 4.5997C7.11653 6.7177 8.82653 8.4417 10.9455 8.4487H10.9725Z"
                                            stroke="#828282" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M17.3622 7.3916C18.5992 7.0606 19.5112 5.9326 19.5112 4.5896C19.5112 3.1886 18.5182 2.0186 17.1962 1.7486"
                                            stroke="#828282" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M17.9432 10.5444C19.6972 10.5444 21.1952 11.7334 21.1952 12.7954C21.1952 13.4204 20.6782 14.1014 19.8942 14.2854"
                                            stroke="#828282" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M4.58384 7.3916C3.34584 7.0606 2.43384 5.9326 2.43384 4.5896C2.43384 3.1886 3.42784 2.0186 4.74884 1.7486"
                                            stroke="#828282" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M4.00182 10.5444C2.24782 10.5444 0.749817 11.7334 0.749817 12.7954C0.749817 13.4204 1.26682 14.1014 2.05182 14.2854"
                                            stroke="#828282" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                </span>
                                <span class="menu-title">Contact list</span>
                            </router-link>
                        </li>

                        <li class="nav-item menu-items">
                            <a class="nav-link" data-toggle="collapse" href="#settings" aria-expanded="false"
                                aria-controls="ui-basic">
                                <span class="menu-icon">
                                    <svg width="20" height="22" viewBox="0 0 20 22" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M10 8.5C11.3809 8.5 12.5 9.61912 12.5 11C12.5 12.3809 11.3809 13.5 10 13.5C8.61912 13.5 7.5 12.3809 7.5 11C7.5 9.61912 8.61912 8.5 10 8.5Z"
                                            stroke="#828282" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M18.168 6.25025C17.4845 5.05799 15.9712 4.65004 14.7885 5.33852C13.7598 5.93613 12.4741 5.18838 12.4741 3.99218C12.4741 2.61619 11.3659 1.5 9.99976 1.5C8.63365 1.5 7.52546 2.61619 7.52546 3.99218C7.52546 5.18838 6.23977 5.93613 5.21199 5.33852C4.02829 4.65004 2.51507 5.05799 1.83153 6.25025C1.14896 7.4425 1.55399 8.96665 2.73769 9.65415C3.76546 10.2527 3.76546 11.7473 2.73769 12.3459C1.55399 13.0343 1.14896 14.5585 1.83153 15.7498C2.51507 16.942 4.02829 17.35 5.21101 16.6625H5.21199C6.23977 16.0639 7.52546 16.8116 7.52546 18.0078C7.52546 19.3838 8.63365 20.5 9.99976 20.5C11.3659 20.5 12.4741 19.3838 12.4741 18.0078C12.4741 16.8116 13.7598 16.0639 14.7885 16.6625C15.9712 17.35 17.4845 16.942 18.168 15.7498C18.8515 14.5585 18.4455 13.0343 17.2628 12.3459H17.2618C16.2341 11.7473 16.2341 10.2527 17.2628 9.65415C18.4455 8.96665 18.8515 7.4425 18.168 6.25025Z"
                                            stroke="#828282" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                </span>
                                <span class="menu-title">settings</span>
                            </a>
                            <div class="collapse" id="settings">
                                <ul class="nav flex-column sub-menu">
                                    <li class="nav-item"> <router-link class="nav-link" to="/product_manager">product
                                            manager</router-link></li>
                                    <li class="nav-item"> <router-link class="nav-link" to="/user_list">user list</router-link></li>
                                    <li class="nav-item"> <router-link class="nav-link" to="/role">role</router-link></li>
                                    <li class="nav-item"> <router-link class="nav-link" to="/service_changes">Service
                                            Charges</router-link></li>
                                    <li class="nav-item"> <router-link class="nav-link" to="/discount">Discounts</router-link></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="sidebar-footer">
                    <div class="user-name">
                        <div class="profile-pic">
                            <img src="assets/images/user-pic/user-pic.png" alt="user-pic">
                        </div>
                        <div class="info-sec">
                            <h5 class="name">{{ name }}</h5>
                            <span class="post">support admin</span>
                        </div>
                    </div>
                    <div class="logout">
                        <a href="#" class="wrap">
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11 0.333313C8.89033 0.333313 6.82804 0.958902 5.07392 2.13097C3.31979 3.30304 1.95262 4.96894 1.14528 6.91802C0.33795 8.8671 0.126714 11.0118 0.53829 13.0809C0.949866 15.1501 1.96577 17.0507 3.45753 18.5425C4.94929 20.0342 6.84991 21.0501 8.91904 21.4617C10.9882 21.8733 13.1329 21.662 15.082 20.8547C17.031 20.0474 18.6969 18.6802 19.869 16.9261C21.0411 15.1719 21.6667 13.1096 21.6667 11C21.6667 8.171 20.5429 5.4579 18.5425 3.45751C16.5421 1.45712 13.829 0.333313 11 0.333313ZM11.04 12.12C10.9274 12.1209 10.8157 12.0994 10.7114 12.0569C10.6071 12.0145 10.5122 11.9517 10.4323 11.8724C10.3523 11.7931 10.2889 11.6987 10.2456 11.5947C10.2023 11.4908 10.18 11.3793 10.18 11.2666V4.76665C10.18 4.53856 10.2706 4.31982 10.4319 4.15853C10.5932 3.99725 10.8119 3.90665 11.04 3.90665C11.2681 3.90665 11.4868 3.99725 11.6481 4.15853C11.8094 4.31982 11.9 4.53856 11.9 4.76665V11.2666C11.9 11.3793 11.8777 11.4908 11.8344 11.5947C11.7911 11.6987 11.7277 11.7931 11.6477 11.8724C11.5678 11.9517 11.4729 12.0145 11.3686 12.0569C11.2643 12.0994 11.1526 12.1209 11.04 12.12ZM11 17.5266C9.59587 17.5433 8.22318 17.1107 7.08225 16.2921C5.94132 15.4734 5.09187 14.3116 4.65788 12.9761C4.22388 11.6406 4.22806 10.2014 4.66979 8.86847C5.11151 7.53553 5.96768 6.37864 7.11333 5.56665C7.31288 5.42441 7.56036 5.36636 7.80234 5.40503C8.04432 5.4437 8.26138 5.57598 8.40667 5.77331C8.47759 5.87076 8.52853 5.98129 8.55654 6.09852C8.58455 6.21575 8.58908 6.33736 8.56986 6.45635C8.55065 6.57533 8.50808 6.68934 8.4446 6.7918C8.38112 6.89426 8.29799 6.98314 8.2 7.05331C7.54103 7.53727 7.017 8.18194 6.67787 8.92588C6.33874 9.66983 6.19582 10.4882 6.26273 11.3031C6.32964 12.1179 6.60416 12.9021 7.0601 13.5807C7.51605 14.2594 8.13823 14.8099 8.86732 15.1799C9.59642 15.5499 10.4081 15.7269 11.2251 15.6942C12.042 15.6614 12.8369 15.42 13.5341 14.9928C14.2312 14.5657 14.8073 13.9671 15.2075 13.2541C15.6077 12.5412 15.8185 11.7376 15.82 10.92C15.8178 10.1667 15.635 9.42487 15.287 8.75675C14.939 8.08862 14.436 7.51364 13.82 7.07998C13.6303 6.9303 13.5077 6.71155 13.479 6.47165C13.4502 6.23174 13.5177 5.99023 13.6667 5.79998C13.8139 5.60474 14.0319 5.4751 14.2738 5.43894C14.5157 5.40279 14.7621 5.46301 14.96 5.60665C16.0937 6.42795 16.9362 7.58909 17.3653 8.92162C17.7945 10.2541 17.7879 11.6887 17.3465 13.0173C16.9052 14.3458 16.052 15.4992 14.9108 16.31C13.7696 17.1208 12.3998 17.547 11 17.5266Z"
                                    fill="#828282" />
                            </svg>
                            <span class="text" @click="logout">Logout</span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template> -->

<template>
  <div class="sidebar sidebar-offcanvas" id="sidebar">
    <v-navigation-drawer v-model="drawer" stateless>
      <router-link to="/"
        ><v-img
          :src="require('../../../public/assets/images/logo/logo.svg')"
          class="my-3"
          contain
          height="80"
      /></router-link>
      <v-list>
        <v-list-item link v-model="active" no-action :to="{name:'Dashboard'}">
          <template>
            <v-list-item-icon>
              <span class="menu-icon">
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.8969 0.8421C13.3109 0.8421 13.6469 1.1781 13.6469 1.5921C13.6469 2.0061 13.3109 2.3421 12.8969 2.3421H5.62888C3.12088 2.3421 1.49988 4.0661 1.49988 6.7361V14.8181C1.49988 17.5231 3.08188 19.2031 5.62888 19.2031H14.2329C16.7409 19.2031 18.3619 17.4821 18.3619 14.8181V7.7791C18.3619 7.3651 18.6979 7.0291 19.1119 7.0291C19.5259 7.0291 19.8619 7.3651 19.8619 7.7791V14.8181C19.8619 18.3381 17.5999 20.7031 14.2329 20.7031H5.62888C2.26188 20.7031 -0.00012207 18.3381 -0.00012207 14.8181V6.7361C-0.00012207 3.2111 2.26188 0.8421 5.62888 0.8421H12.8969ZM15.0123 7.6719C15.3403 7.9259 15.4003 8.3969 15.1463 8.7239L12.2163 12.5039C12.0943 12.6619 11.9143 12.7649 11.7163 12.7889C11.5163 12.8159 11.3183 12.7579 11.1603 12.6349L8.34228 10.4209L5.81128 13.7099C5.66328 13.9019 5.44128 14.0029 5.21628 14.0029C5.05628 14.0029 4.89528 13.9519 4.75928 13.8479C4.43128 13.5949 4.36928 13.1239 4.62228 12.7959L7.61528 8.9059C7.73728 8.7469 7.91828 8.6439 8.11628 8.6189C8.31828 8.5929 8.51628 8.6489 8.67328 8.7739L11.4933 10.9889L13.9603 7.8059C14.2143 7.4769 14.6843 7.4159 15.0123 7.6719ZM17.9673 0C19.4413 0 20.6393 1.198 20.6393 2.672C20.6393 4.146 19.4413 5.345 17.9673 5.345C16.4943 5.345 15.2953 4.146 15.2953 2.672C15.2953 1.198 16.4943 0 17.9673 0ZM17.9673 1.5C17.3213 1.5 16.7953 2.025 16.7953 2.672C16.7953 3.318 17.3213 3.845 17.9673 3.845C18.6133 3.845 19.1393 3.318 19.1393 2.672C19.1393 2.025 18.6133 1.5 17.9673 1.5Z"
                    fill="#828282"
                  />
                </svg>
              </span>
            </v-list-item-icon>

            <v-list-item-title>Order</v-list-item-title>
          </template>
        </v-list-item>

        <v-list-group :value="false" no-action>
          <template v-slot:activator>
            <v-list-item-icon>
              <span class="menu-icon">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.436 0C19.063 0 21.5 2.546 21.5 6.335V15.165C21.5 18.954 19.063 21.5 15.436 21.5H6.064C2.437 21.5 0 18.954 0 15.165V6.335C0 2.546 2.437 0 6.064 0H15.436ZM15.436 1.5H6.064C3.292 1.5 1.5 3.397 1.5 6.335V15.165C1.5 18.103 3.292 20 6.064 20H15.436C18.209 20 20 18.103 20 15.165V6.335C20 3.397 18.209 1.5 15.436 1.5ZM6.1211 8.2025C6.5351 8.2025 6.8711 8.5385 6.8711 8.9525V15.8125C6.8711 16.2265 6.5351 16.5625 6.1211 16.5625C5.7071 16.5625 5.3711 16.2265 5.3711 15.8125V8.9525C5.3711 8.5385 5.7071 8.2025 6.1211 8.2025ZM10.7881 4.9185C11.2021 4.9185 11.5381 5.2545 11.5381 5.6685V15.8115C11.5381 16.2255 11.2021 16.5615 10.7881 16.5615C10.3741 16.5615 10.0381 16.2255 10.0381 15.8115V5.6685C10.0381 5.2545 10.3741 4.9185 10.7881 4.9185ZM15.3784 11.8275C15.7924 11.8275 16.1284 12.1635 16.1284 12.5775V15.8115C16.1284 16.2255 15.7924 16.5615 15.3784 16.5615C14.9644 16.5615 14.6284 16.2255 14.6284 15.8115V12.5775C14.6284 12.1635 14.9644 11.8275 15.3784 11.8275Z"
                    fill="#828282"
                  />
                </svg>
              </span>
            </v-list-item-icon>
            <v-list-item-title>Products</v-list-item-title>
          </template>

          <template>
            <v-list-item link :to="{ name: 'ProductOverview' }">
              <v-list-item-title>Overview </v-list-item-title>
            </v-list-item>
            <v-list-item link :to="{ name: 'ProductList' }">
              <v-list-item-title>List </v-list-item-title>
            </v-list-item>
            <v-list-item link :to="{ name: 'ProductPriceUpdateHistory' }">
              <v-list-item-title>Price Update History </v-list-item-title>
            </v-list-item>
          </template>
        </v-list-group>

        <v-list-group :value="false" no-action>
          <template v-slot:activator>
            <v-list-item-icon>
              <span class="menu-icon">
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
                    d="M11.6786 1.3486C10.9706 2.1636 10.6886 7.2886 11.5116 8.1126C12.3346 8.9346 17.2796 8.5186 18.4676 7.5836C21.3256 5.3326 13.9386 -1.2534 11.6786 1.3486Z"
                    stroke="#828282"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.1376 11.79C17.2216 12.874 14.3476 19.054 8.65158 19.054C4.39758 19.054 0.949585 15.606 0.949585 11.353C0.949585 6.05301 6.17858 2.66301 7.67758 4.16201C8.54058 5.02501 7.56858 9.08601 9.11658 10.635C10.6646 12.184 15.0536 10.706 16.1376 11.79Z"
                    stroke="#828282"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </v-list-item-icon>
            <v-list-item-title>Sales</v-list-item-title>
          </template>

          <template>
            <v-list-item link :to="{ name: 'SalesAnalytics' }">
              <v-list-item-title>Analytics </v-list-item-title>
            </v-list-item>
            <v-list-item link :to="{ name: 'SalesList' }">
              <v-list-item-title>List </v-list-item-title>
            </v-list-item>
          </template>
        </v-list-group>

        <v-list-item link :to="{ name: 'ContactList' }">
          <v-list-item-icon>
            <span class="menu-icon">
              <svg
                width="22"
                height="19"
                viewBox="0 0 22 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.9725 17.3682C7.73349 17.3682 4.96649 16.8782 4.96649 14.9162C4.96649 12.9542 7.71549 11.2462 10.9725 11.2462C14.2115 11.2462 16.9785 12.9382 16.9785 14.8992C16.9785 16.8602 14.2295 17.3682 10.9725 17.3682Z"
                  stroke="#828282"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.9725 8.4487C13.0985 8.4487 14.8225 6.7257 14.8225 4.5997C14.8225 2.4737 13.0985 0.749702 10.9725 0.749702C8.84653 0.749702 7.12251 2.4737 7.12251 4.5997C7.11653 6.7177 8.82653 8.4417 10.9455 8.4487H10.9725Z"
                  stroke="#828282"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.3622 7.3916C18.5992 7.0606 19.5112 5.9326 19.5112 4.5896C19.5112 3.1886 18.5182 2.0186 17.1962 1.7486"
                  stroke="#828282"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.9432 10.5444C19.6972 10.5444 21.1952 11.7334 21.1952 12.7954C21.1952 13.4204 20.6782 14.1014 19.8942 14.2854"
                  stroke="#828282"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.58384 7.3916C3.34584 7.0606 2.43384 5.9326 2.43384 4.5896C2.43384 3.1886 3.42784 2.0186 4.74884 1.7486"
                  stroke="#828282"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.00182 10.5444C2.24782 10.5444 0.749817 11.7334 0.749817 12.7954C0.749817 13.4204 1.26682 14.1014 2.05182 14.2854"
                  stroke="#828282"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </v-list-item-icon>

          <v-list-item-title>Contact list</v-list-item-title>
        </v-list-item>

        <v-list-group no-action>
          <template v-slot:activator>
            <v-list-item-icon>
              <span class="menu-icon">
                <svg
                  width="20"
                  height="22"
                  viewBox="0 0 20 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 8.5C11.3809 8.5 12.5 9.61912 12.5 11C12.5 12.3809 11.3809 13.5 10 13.5C8.61912 13.5 7.5 12.3809 7.5 11C7.5 9.61912 8.61912 8.5 10 8.5Z"
                    stroke="#828282"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.168 6.25025C17.4845 5.05799 15.9712 4.65004 14.7885 5.33852C13.7598 5.93613 12.4741 5.18838 12.4741 3.99218C12.4741 2.61619 11.3659 1.5 9.99976 1.5C8.63365 1.5 7.52546 2.61619 7.52546 3.99218C7.52546 5.18838 6.23977 5.93613 5.21199 5.33852C4.02829 4.65004 2.51507 5.05799 1.83153 6.25025C1.14896 7.4425 1.55399 8.96665 2.73769 9.65415C3.76546 10.2527 3.76546 11.7473 2.73769 12.3459C1.55399 13.0343 1.14896 14.5585 1.83153 15.7498C2.51507 16.942 4.02829 17.35 5.21101 16.6625H5.21199C6.23977 16.0639 7.52546 16.8116 7.52546 18.0078C7.52546 19.3838 8.63365 20.5 9.99976 20.5C11.3659 20.5 12.4741 19.3838 12.4741 18.0078C12.4741 16.8116 13.7598 16.0639 14.7885 16.6625C15.9712 17.35 17.4845 16.942 18.168 15.7498C18.8515 14.5585 18.4455 13.0343 17.2628 12.3459H17.2618C16.2341 11.7473 16.2341 10.2527 17.2628 9.65415C18.4455 8.96665 18.8515 7.4425 18.168 6.25025Z"
                    stroke="#828282"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </v-list-item-icon>
            <v-list-item-title>Settings</v-list-item-title>
          </template>

          <template>
            <v-list-item link :to="{ name: 'ProductManager' }">
              <v-list-item-title>Product manager </v-list-item-title>
            </v-list-item>
            <v-list-item link :to="{ name: 'UserList' }">
              <v-list-item-title>User list </v-list-item-title>
            </v-list-item>
            <v-list-item link :to="{ name: 'Role' }">
              <v-list-item-title>Role </v-list-item-title>
            </v-list-item>
            <v-list-item link :to="{ name: 'ServiceCharges' }">
              <v-list-item-title>Service Charges </v-list-item-title>
            </v-list-item>
            <v-list-item link :to="{ name: 'Discounts' }">
              <v-list-item-title>Discounts </v-list-item-title>
            </v-list-item>
          </template>
        </v-list-group>
      </v-list>

      <div class="sidebar-footer">
        <div class="user-name">
          <div class="profile-pic">
            <img src="assets/images/user-pic/user-pic.png" alt="user-pic" />
          </div>
          <div class="info-sec">
            <h5 class="name">{{ name }}</h5>
            <span class="post">support admin</span>
          </div>
        </div>
        <div class="logout">
          <a href="#" class="wrap">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 0.333313C8.89033 0.333313 6.82804 0.958902 5.07392 2.13097C3.31979 3.30304 1.95262 4.96894 1.14528 6.91802C0.33795 8.8671 0.126714 11.0118 0.53829 13.0809C0.949866 15.1501 1.96577 17.0507 3.45753 18.5425C4.94929 20.0342 6.84991 21.0501 8.91904 21.4617C10.9882 21.8733 13.1329 21.662 15.082 20.8547C17.031 20.0474 18.6969 18.6802 19.869 16.9261C21.0411 15.1719 21.6667 13.1096 21.6667 11C21.6667 8.171 20.5429 5.4579 18.5425 3.45751C16.5421 1.45712 13.829 0.333313 11 0.333313ZM11.04 12.12C10.9274 12.1209 10.8157 12.0994 10.7114 12.0569C10.6071 12.0145 10.5122 11.9517 10.4323 11.8724C10.3523 11.7931 10.2889 11.6987 10.2456 11.5947C10.2023 11.4908 10.18 11.3793 10.18 11.2666V4.76665C10.18 4.53856 10.2706 4.31982 10.4319 4.15853C10.5932 3.99725 10.8119 3.90665 11.04 3.90665C11.2681 3.90665 11.4868 3.99725 11.6481 4.15853C11.8094 4.31982 11.9 4.53856 11.9 4.76665V11.2666C11.9 11.3793 11.8777 11.4908 11.8344 11.5947C11.7911 11.6987 11.7277 11.7931 11.6477 11.8724C11.5678 11.9517 11.4729 12.0145 11.3686 12.0569C11.2643 12.0994 11.1526 12.1209 11.04 12.12ZM11 17.5266C9.59587 17.5433 8.22318 17.1107 7.08225 16.2921C5.94132 15.4734 5.09187 14.3116 4.65788 12.9761C4.22388 11.6406 4.22806 10.2014 4.66979 8.86847C5.11151 7.53553 5.96768 6.37864 7.11333 5.56665C7.31288 5.42441 7.56036 5.36636 7.80234 5.40503C8.04432 5.4437 8.26138 5.57598 8.40667 5.77331C8.47759 5.87076 8.52853 5.98129 8.55654 6.09852C8.58455 6.21575 8.58908 6.33736 8.56986 6.45635C8.55065 6.57533 8.50808 6.68934 8.4446 6.7918C8.38112 6.89426 8.29799 6.98314 8.2 7.05331C7.54103 7.53727 7.017 8.18194 6.67787 8.92588C6.33874 9.66983 6.19582 10.4882 6.26273 11.3031C6.32964 12.1179 6.60416 12.9021 7.0601 13.5807C7.51605 14.2594 8.13823 14.8099 8.86732 15.1799C9.59642 15.5499 10.4081 15.7269 11.2251 15.6942C12.042 15.6614 12.8369 15.42 13.5341 14.9928C14.2312 14.5657 14.8073 13.9671 15.2075 13.2541C15.6077 12.5412 15.8185 11.7376 15.82 10.92C15.8178 10.1667 15.635 9.42487 15.287 8.75675C14.939 8.08862 14.436 7.51364 13.82 7.07998C13.6303 6.9303 13.5077 6.71155 13.479 6.47165C13.4502 6.23174 13.5177 5.99023 13.6667 5.79998C13.8139 5.60474 14.0319 5.4751 14.2738 5.43894C14.5157 5.40279 14.7621 5.46301 14.96 5.60665C16.0937 6.42795 16.9362 7.58909 17.3653 8.92162C17.7945 10.2541 17.7879 11.6887 17.3465 13.0173C16.9052 14.3458 16.052 15.4992 14.9108 16.31C13.7696 17.1208 12.3998 17.547 11 17.5266Z"
                fill="#828282"
              />
            </svg>
            <span class="text" @click="logout">Logout</span>
          </a>
        </div>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      name: "",
      drawer: true,
      active: true,
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "Login" });
    },
  },

  mounted() {
    let user = localStorage.getItem("user_info");
    this.name = JSON.parse(user).name;
  },
};
</script>
<style>
.v-list .v-list-item--active {
  color: #262626;
}

.v-list .v-list-item--active svg path {
  fill: black;
}
</style>