var search_domain_google = "https://lens.google.com/uploadbyurl?url="
var search_domain_bing   = "https://www.bing.com/images/searchbyimage?cbir=sbi&imgurl="
var search_domain_tineye = "https://www.tineye.com/search?url="
var search_domain_yandex = "https://yandex.com/images/search?rpt=imageview&url="
var search_domain_imgops = "https://imgops.com/"


browser.menus.create({
    id: "open_new_tab",
    title: "Open Image in New Tab",
    contexts: ["image"]
});

browser.menus.create({
    id: "google_search",
    title: "Search Image on Google",
    contexts: ["image"]
});

browser.menus.create({
    id: "bing_search",
    title: "Search Image on Bing",
    contexts: ["image"]
});

browser.menus.create({
    id: "tineye_search",
    title: "Search Image on TinEye",
    contexts: ["image"]
});

browser.menus.create({
    id: "yandex_search",
    title: "Search Image on Yandex",
    contexts: ["image"]
});

browser.menus.create({
    id: "imgops_search",
    title: "Search Image on ImgOps",
    contexts: ["image"]
});

browser.menus.onClicked.addListener((info, tab) => {
  var target = info.srcUrl;
  switch(info.menuItemId) {
    case "open_new_tab":
        browser.tabs.create({url:target});
        break;

    case "google_search":
        search_url = search_domain_google + target;
        browser.tabs.create({url:search_url});
        break;

    case "bing_search":
        search_url = search_domain_bing + target;
        browser.tabs.create({url:search_url});
        break;

    case "tineye_search":
        search_url = search_domain_tineye + target;
        browser.tabs.create({url:search_url});
        break;

    case "yandex_search":
        search_url = search_domain_yandex + target;
        browser.tabs.create({url:search_url});
        break;

    case "imgops_search":
        search_url = search_domain_imgops + target;
        browser.tabs.create({url:search_url});
        break;

  };
});
