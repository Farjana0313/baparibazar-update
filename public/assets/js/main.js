(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {

        /*--------------------------------
            Cart Quantity Control
        --------------------------------*/
        $(document).on('click', '.decrease', function (event) {
            event.preventDefault();
            var el = $(this);
            var parentWrap = el.parent();
            var qty = parentWrap.find('.qty_');
            var qtyVal = qty.val();
            if (qtyVal > 1) {
                qty.val(parseInt(qtyVal) - 1);
            }
        });


        $(document).on('click', '.increase', function (event) {
            event.preventDefault();
            var el = $(this);
            var parentWrap = el.parent();
            var qty = parentWrap.find('.qty_');
            var qtyVal = qty.val();
            if (qtyVal > 0) {
                qty.val(parseInt(qtyVal) + 1);
            }
        });



        // new onclick view and edit
        $(".viewbtn").click(function () {
            $(".dualmode").addClass("preview");
            $(".editbtn").removeClass("dn");
            $(".save").addClass("dn");
            $(".cancelonly").addClass("dn");
            $(".reset").addClass("dn");
        });

        $(" .reset").click(function () {
            $(".dualmode").addClass("preview");
            $(".save").removeClass("dn");
            $(".reset").addClass("dn");
            $(".editbtn").removeClass("dn");
        });

        $(".editbtn").click(function () {
            $(".dualmode").removeClass("preview");
            $(".editbtn").addClass("dn");
            $(".save").removeClass("dn");
            $(".reset").removeClass("dn");
        });


    });

    // Single line Chart
    var SinglelineChartData = {
        labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", ],
        datasets: [{
            fillColor: "#d4fbde",
            strokeColor: "#27AE60",
            pointColor: "#fff",
            pointStrokeColor: "#27AE60",
            data: [1, 50, 30, 19, 50, 27, 60, 50, 30, 19, 50, 27, 60, 50, 30, 19, 50, 27, 60, 50, 30, 19, 50, 27, 60, 50, 30, 19, 50, 27, 60, 27, 60, ]
        }]

    };

    new Chart(document.getElementById("singlelinechart").getContext("2d")).Line(SinglelineChartData);

    // Multi Line Chart
    var MultilineChartData = {
        labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", ],
        datasets: [{
                fillColor: "#e2d66140",
                strokeColor: "#efdb26",
                pointColor: "#fff",
                pointStrokeColor: "#efdb26",
                data: [60, 50, 60, 49, 50, 57, 60, 20, 50, 60, 50, 27, 60, 20, 60, 19, 60, 27, 60, 50, 30, 19, 50, 27, 60, 50, 20, 58, 50, 27, 50, 27, 60, ]
            },
            {
                fillColor: "#EEFAFE",
                strokeColor: "#56CCF2",
                pointColor: "#fff",
                pointStrokeColor: "#56CCF2",
                data: [1, 50, 30, 19, 50, 27, 60, 50, 30, 19, 50, 27, 60, 50, 30, 19, 50, 27, 60, 50, 30, 19, 50, 27, 60, 50, 30, 19, 50, 27, 60, 27, 60, ]
            }
        ]

    };

    new Chart(document.getElementById("multilinechart").getContext("2d")).Line(MultilineChartData);

    jQuery(document).ready(function ($) {

    });

}(jQuery));


// pop up js

// order
function orderPopOpn() {
    document.getElementById("order").style.width = "690px";
}

function orderPopCls() {
    document.getElementById("order").style.width = "0";
}

// sales order
function salesPrderPopOpn() {
    document.getElementById("sales_order").style.width = "690px";
}

function salesPrderPopCls() {
    document.getElementById("sales_order").style.width = "0";
}

// add category
function addCatgPopOpn() {
    document.getElementById("add_catg").style.width = "610px";
}

function addCatgPopCls() {
    document.getElementById("add_catg").style.width = "0";
}

// add sub category
function addSbCatgPopOpn() {
    document.getElementById("add_sub_catg").style.width = "610px";
}

function addSbCatgPopCls() {
    document.getElementById("add_sub_catg").style.width = "0";
}

// add product
// function addProdOnePopOpn() {
//     document.getElementById("add_product_one").style.width = "610px";
// }

// function addProdOnePopCls() {
//     document.getElementById("add_product_one").style.width = "0";
// }

// add  product two
function addProdTwoPopOpn() {
    document.getElementById("add_product_two").style.width = "610px";
}

function addProdTwoPopCls() {
    document.getElementById("add_product_two").style.width = "0";
}

// discount
// function discPopOpn() {
//     document.getElementById("discount_pop").style.width = "610px";
// }

// function discPopCls() {
//     document.getElementById("discount_pop").style.width = "0";
// }

// service charge
function servCsPopOpn() {
    document.getElementById("service_charge").style.width = "610px";
}

function servCsPopCls() {
    document.getElementById("service_charge").style.width = "0";
}

// New employ
function newEmplyPopOpn() {
    document.getElementById("new_emply").style.width = "610px";
}

function newEmplyPopCls() {
    document.getElementById("new_emply").style.width = "0";
}

// New employ
function curEmplyPopOpn() {
    document.getElementById("current_emply").style.width = "610px";
}

function curEmplyPopCls() {
    document.getElementById("current_emply").style.width = "0";
}

// New employ
// function customerPopOpn() {
//     document.getElementById("shop_keeper").style.width = "610px";
// }

// function customerPopCls() {
//     document.getElementById("shop_keeper").style.width = "0";
// }

// New employ
// function supplyPopOpn() {
//     document.getElementById("supplyers").style.width = "610px";
// }

// function supplyPopCls() {
//     document.getElementById("supplyers").style.width = "0";
// }

// add category details view (new)
function addCatgDetViewPopOpn() {
    document.getElementById("add_catg_details_view").style.width = "610px";
}

function addCatgDetViewPopCls() {
    document.getElementById("add_catg_details_view").style.width = "0";
}

// add sub category view (new)
function addSbCatgViewPopOpn() {
    document.getElementById("add_sub_catg_view").style.width = "610px";
}

function addSbCatgViewPopCls() {
    document.getElementById("add_sub_catg_view").style.width = "0";
}