
function fnMenuPrint(topMenuList, menuList) {

    var contextpath = jsContextPath;

    var topMenuLinkMap = {};
    topMenuList.forEach(function (menuItem, index, array) {
        var cMenuCd  = $.trim(menuItem.cMenuCd);
        var cLinkUrl = $.trim(menuItem.cLinkUrl);

        topMenuLinkMap[cMenuCd] = cLinkUrl;
    });

    var topMenuTotalCnt = topMenuList.length;
    var topMenuCnt = 0;

    var menuHtml = "";
    var oldcMenuLvl = 0;

    var lastIdx = menuList.length - 1;
    var menuCd = $.trim($("#btuiMenuCd").val());

    menuList.forEach(function (menuItem, index, array) {

        var cMenuCdFullPath = $.trim(menuItem.cMenuCdFullPath);
        var cMenuCd         = $.trim(menuItem.cMenuCd);
        var cMenuLvl        = Number($.trim(menuItem.cMenuLvl));
        var nextCMenuLvl    = Number($.trim(menuItem.nextCMenuLvl));

        var cMenuIcon   = $.trim(menuItem.cMenuIcon);
        var cMenuNm     = $.trim(menuItem.cMenuNm);
        var cLinkUseFlg = $.trim(menuItem.cLinkUseFlg);
        var cLinkUrl    = $.trim(menuItem.cLinkUrl);

        var menuItemClass = "";
        var menuItemHref = "#none";

        var target = "";

        if(cMenuLvl == 1) {
            topMenuCnt++;

            var topMenuLink = $.trim(topMenuLinkMap[cMenuCd]);
            if(topMenuLink != "") {
                cLinkUseFlg = "Y";
                cLinkUrl    = topMenuLink;
            }
        }

        if(cLinkUseFlg == "Y") {
            if(cLinkUrl.length > 4 && "http" == cLinkUrl.substring(0, 4).toLowerCase()) {
                menuItemHref = cLinkUrl;
                target = 'target="_blank"';
            }else{
                menuItemHref = contextpath + cLinkUrl;
            }
        }

        if(cMenuLvl == 1 && topMenuTotalCnt == topMenuCnt) {
            menuItemClass = 'class="ps-2"';
        }else{
            menuItemClass = 'class="px-2"';
        }

        var menuItemHtml = '<a id="storeMenu_' + cMenuCd + '" name="menuItem" href="' + menuItemHref + '" ' + menuItemClass + ' data-menuCdFullPath="' + cMenuCdFullPath + '" data-linkUrl="' + cLinkUrl + '" ' + target + ' >' + cMenuNm + '</a>';

        if(oldcMenuLvl == 0) {
            menuHtml += '<ul class="nav list-unstyled mb-0 d-flex">';
        }

        if(cMenuLvl == 1) {
            if(cMenuLvl < oldcMenuLvl) {
                menuHtml += '</li></ul></li>';
            }

            if(topMenuTotalCnt == topMenuCnt) {
                menuHtml += '<li class="ps-4">';
            }else{
                menuHtml += '<li class="px-4">';
            }

        }

        if(cMenuLvl == 2) {
            if(oldcMenuLvl == 2) {
                menuHtml += '</li>';
            }

            if(cMenuLvl > oldcMenuLvl) {
                menuHtml += '<ul class="position-absolute list-unstyled mb-0">';
                menuHtml += '<li class="py-2">';
            }else{
                menuHtml += '<li class="py-2">';
            }
        }

        menuHtml += menuItemHtml;
        oldcMenuLvl = cMenuLvl;

        // 마지막 tag 처리
        if(index == lastIdx) {
            if(cMenuLvl == 1) {
                menuHtml += '</li></ul>';
            }

            if(cMenuLvl == 2) {
                menuHtml += '</li></ul></li></ul>';
            }
        }
    });

//    console.log(menuHtml);
    $("#storeMenu").html(menuHtml);

    // 메뉴 Active
    var btuiMenuCdFullPath = $.trim($("#btuiMenuCdFullPath").val());
    if(btuiMenuCdFullPath != "") {

        var storeMenuCdArr = btuiMenuCdFullPath.split("/");
        $.each(storeMenuCdArr, function(idx, storeMenuCd) {
            $("#storeMenu_" + storeMenuCd).addClass("active");
        });
    }

    // event 바인딩
    document.querySelectorAll("#header .nav > li > a").forEach(elem => {
        elem.addEventListener('mouseover', openHeaderNav, false, false)
        elem.addEventListener('focus', openHeaderNav, false, false)
    })

    document.querySelector('#header').addEventListener('mouseleave', closeHeaderNav);
}

function fnScrollNavMobileMenuPrint(menuList) {

    var contextpath = jsContextPath;

    var menuHtml = "";
    var oldcMenuLvl = 0;

    var lastIdx = menuList.length - 1;
    var menuCd = $.trim($("#btuiMenuCd").val());

    // level1
    menuList.forEach(function (menuItem, index, array) {

        var cMenuCdFullPath = $.trim(menuItem.cMenuCdFullPath);
        var cPMenuCd        = $.trim(menuItem.cPMenuCd);
        var cMenuCd         = $.trim(menuItem.cMenuCd);
        var cMenuLvl        = Number($.trim(menuItem.cMenuLvl));
        var nextCMenuLvl    = Number($.trim(menuItem.nextCMenuLvl));

        var cMenuIcon   = $.trim(menuItem.cMenuIcon);
        var cMenuNm     = $.trim(menuItem.cMenuNm);
        var cLinkUseFlg = $.trim(menuItem.cLinkUseFlg);
        var cLinkUrl    = $.trim(menuItem.cLinkUrl);

        var menuItemClass = "";
        var menuItemHref = "#none";

        var target = "";

        if(cLinkUseFlg == "Y") {
            if(cLinkUrl.length > 4 && "http" == cLinkUrl.substring(0, 4).toLowerCase()) {
                menuItemHref = cLinkUrl;
                target = 'target="_blank"';
            }else{
                menuItemHref = contextpath + cLinkUrl;
            }
        }

        var menuItemHtml = '<a id="storeMenuMobile_' + cMenuCd + '" name="menuItem" href="' + menuItemHref + '" ' + menuItemClass + ' data-menuCdFullPath="' + cMenuCdFullPath + '" data-linkUrl="' + cLinkUrl + '" ' + target + ' >' + cMenuNm + '</a>';

        if(cMenuLvl == 1) {
            if(cMenuLvl < oldcMenuLvl) {
                menuHtml += '</li></ul></div></div>';
            }

            menuHtml += '<div class="accordion-item bg-white">';
            menuHtml += '    <h2 class="accordion-header">';
            menuHtml += '        <button class="bg-white shadow-none collapsed px-3 py-4 border-0 w-100 text-start d-flex" type="button" data-bs-toggle="collapse"';
            menuHtml += '             data-bs-target="#sidebar_' + cMenuCd + '" aria-expanded="false"';
            menuHtml += '             aria-controls="sidebar_' + cMenuCd + '">';
            menuHtml += cMenuNm
            menuHtml += '            <i class="bi bi-plus-lg ms-auto me-1"></i>';
            menuHtml += '            <i class="bi bi-dash-lg ms-auto me-1"></i>';
            menuHtml += '        </button>';
            menuHtml += '    </h2>';
        }

        if(cMenuLvl == 2) {
            if(oldcMenuLvl == 2) {
                menuHtml += '</li>';
            }

            if(cMenuLvl > oldcMenuLvl) {
                menuHtml += '<div id="sidebar_' + cPMenuCd + '" class="accordion-collapse collapse" data-bs-parent="#sidebar-accordion">';
                menuHtml += '    <div class="accordion-body pt-0">';
                menuHtml += '        <ul class="list-unstyled mb-0">';
                menuHtml += '            <li class="py-2 ps-2">';
                menuHtml += menuItemHtml

            }else if(cMenuLvl == oldcMenuLvl) {
                menuHtml += '            <li class="py-2 ps-2">';
                menuHtml += menuItemHtml
            }
        }

        oldcMenuLvl = cMenuLvl;

        // 마지막 tag 처리
        if(index == lastIdx) {
            if(cMenuLvl == 1) {
                menuHtml += '</div>';
            }

            if(cMenuLvl == 2) {
                menuHtml += '</li></ul></div></div></div>';
            }
        }
    });

//    console.log(menuHtml);
    $("#sidebar-accordion").html(menuHtml);

    // 메뉴 Active
    var btuiMenuCdFullPath = $.trim($("#btuiMenuCdFullPath").val());
    if(btuiMenuCdFullPath != "") {

        var storeMenuCdArr = btuiMenuCdFullPath.split("/");
        $.each(storeMenuCdArr, function(idx, storeMenuCd) {
            $("#storeMenuMobile_" + storeMenuCd).addClass("active");
        });
    }
}















