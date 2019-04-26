var search_domain = "http://images.google.com/searchbyimage?site=search&image_url="

browser.menus.create({
  id: "google_search",
  title: "Search Image on Google",
  contexts: ["image"]
});

browser.menus.create({
  id: "open_new_tab",
  title: "Open Image in New Tab",
  contexts: ["image"]
});

browser.menus.onClicked.addListener((info, tab) => {
  var target = info.srcUrl;
  switch(info.menuItemId) {
    case "open_new_tab":
        browser.tabs.create({url:target});
        break;

    case "google_search":
        search_url = search_domain + target;
        browser.tabs.create({url:search_url});
        break;

  };
});
