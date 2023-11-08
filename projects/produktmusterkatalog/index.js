// Variables
let swiper;
let products;
let lang;
let currentCount = 0;
let currentItem;
let orders = [];

const renderProduct = (item, desc) => `
<span class="__overviewItem product-element" id="${item["key"]}">
  <div class="product-element-wrapper catalog-item">
    <div class="product-element-media">
      <div class="product-element-image"><img loading="lazy" src="${item.image}" alt="${item.name}" /></div>
    </div>
    <div class="product-element-container">
      <p class="product-element-title">${item.name}</p>
      <p class="product-element-description">${item[desc] || ""}</p>
      <p class="product-element-button add-order" data-id="${item["key"]}"><span trans-key="bestellen">Bestellen &nbsp;</span></p>
      <p class="product-element-button remove-order hidden" data-id="${item["key"]}" ><span trans-key="lÃ¶schen">LÃ¶schen</span> &nbsp; <svg class="svg-inline--fa fa-trash-can" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="trash-can" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M144 400C144 408.8 136.8 416 128 416C119.2 416 112 408.8 112 400V176C112 167.2 119.2 160 128 160C136.8 160 144 167.2 144 176V400zM240 400C240 408.8 232.8 416 224 416C215.2 416 208 408.8 208 400V176C208 167.2 215.2 160 224 160C232.8 160 240 167.2 240 176V400zM336 400C336 408.8 328.8 416 320 416C311.2 416 304 408.8 304 400V176C304 167.2 311.2 160 320 160C328.8 160 336 167.2 336 176V400zM310.1 22.56L336.9 64H432C440.8 64 448 71.16 448 80C448 88.84 440.8 96 432 96H416V432C416 476.2 380.2 512 336 512H112C67.82 512 32 476.2 32 432V96H16C7.164 96 0 88.84 0 80C0 71.16 7.164 64 16 64H111.1L137 22.56C145.8 8.526 161.2 0 177.7 0H270.3C286.8 0 302.2 8.526 310.1 22.56V22.56zM148.9 64H299.1L283.8 39.52C280.9 34.84 275.8 32 270.3 32H177.7C172.2 32 167.1 34.84 164.2 39.52L148.9 64zM64 432C64 458.5 85.49 480 112 480H336C362.5 480 384 458.5 384 432V96H64V432z"></path></svg></p>
    </div>
  </div>
</span>
`;

const attachSliderClickEvent = (el, idx) => {
  el.addEventListener("click", () => swiper.slideTo(idx, 0, true), false);
};

const initSwiper = () => {
  swiper = new Swiper(".swiper", {
    allowTouchMove: false,
    autoHeight: true,
    loop: false,
    speed: 0,
    spaceBetween: 0,
    keyboard: {
      enabled: false,
    },
  });
  swiper.on("slideChange", () => {
    console.log("Slide changed to: " + swiper.activeIndex);
  });

  swiper.on("transitionEnd", () => {
    document.documentElement.scrollTo(0, 0);
    swiper.update();
  });
  swiper.on("imagesLoaded", () => swiper.update());
};

const getLanguageFromParams = () => {
  const params = new URLSearchParams(window.location.search);
  return params.get("lang") || "de";
};

const formSubmit = () => {
  var order_form = [];
  orders.forEach((item) => {
    var tmp = { product: item["name"], number: item["number"], comment: item["comment"] };
    order_form.push(tmp);
  });

  document.getElementById("order").value = JSON.stringify(order_form);
};

const fetchProducts = () => {
  fetch("https://cdn.jsdelivr.net/gh/Demodia/Soprema@main/projects/produktmusterkatalog/all_products.json")
    .then((response) => response.json())
    .then((r) => {
      products = r;
      //      products = JSON.parse(r.slice(12));
      var desc = "description_" + lang;

      products.forEach((item) => (document.getElementById("__overviewItemList").innerHTML += renderProduct(item, desc)));
      document.querySelectorAll(".catalog-item").forEach((item) => item.addEventListener("click", openModal, false));
      document.querySelectorAll(".remove-order").forEach((item) => item.addEventListener("click", removeOrder, false));

      swiper.update();
    });
};

const changeLanguage = (translations, lang) => {
  document.getElementById("__overviewItemList").innerHTML = "";
  if (products) {
    var desc = "description_" + lang;
    products.forEach((item) => (document.getElementById("__overviewItemList").innerHTML += renderProduct(item, desc)));
    document.querySelectorAll(".catalog-item").forEach((item) => item.addEventListener("click", openModal, false));
    document.querySelectorAll(".remove-order").forEach((item) => item.addEventListener("click", removeOrder, false));

    swiper.update();
    orders = [];
  }

  document.querySelectorAll("[trans-key]").forEach((item) => {
    const key = item.getAttribute("trans-key");
    const translation = key in translations && lang in translations[key] ? translations[key][lang] : "";

    if (item.hasAttribute("trans-attr")) {
      item.setAttribute(item.getAttribute("trans-attr"), translation);
    } else {
      item.innerHTML = translation;
    }
  });

  if (document.getElementById("lang-menu").closest(".header-lang").classList.contains("is-open")) {
    document.getElementById("lang-menu").click();
  }
};

const fetchTranslations = () => {
  return fetch("https://cdn.jsdelivr.net/gh/Demodia/Soprema@main/projects/produktmusterkatalog/translations.json").then((response) => response.json());
};

const attachLanguageSwitchers = (translations) => {
  document.querySelectorAll(".lang-switcher").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const lang_tmp = item.getAttribute("attr-lang");
      if (lang_tmp) {
        lang = lang_tmp;
        changeLanguage(translations, lang);
        document.getElementById("current-lang").innerHTML = lang.toUpperCase();
      }
    });
  });
};

const filterProducts = (e) => {
  const search_term = e.target.value.toLowerCase();
  document.querySelectorAll(".__overviewItem.hidden").forEach((ele) => ele.classList.remove("hidden"));
  if (search_term.length > 0) {
    document.querySelectorAll(".__overviewItem").forEach((ele) => ele.classList.add("hidden"));
    const filtered = products.filter((asset) => asset.name.toLowerCase().includes(search_term));
    filtered.forEach((item) => document.getElementById(item["key"]).classList.remove("hidden"));
  }
};

const incrementCount = () => {
  currentCount += 1;
  document.getElementById("order-amount").innerHTML = currentCount;
};

const decrementCount = () => {
  if (currentCount > 0) {
    currentCount -= 1;
    document.getElementById("order-amount").innerHTML = currentCount;
  }
};

const closeModal = () => {
  $("#productModal").modal("hide");
};

const confirmModal = () => {
  orders = orders.filter((e) => e.key !== currentItem["key"]);
  currentItem["number"] = currentCount;
  currentItem["comment"] = document.getElementById("comment").value;
  orders.push(currentItem);
  document.getElementById(currentItem["key"]).classList.add("ordered");
  document.getElementById(currentItem["key"]).querySelector(".remove-order").classList.remove("hidden");
  $("#productModal").modal("hide");
};

const prepareShippingList = () => {
  document.getElementById("__shippingItemList").innerHTML = "";
  let html = "";
  orders.forEach((item) => {
    html += `<article class="__con __conTxt __shippingItem" data-index=""><div class="__fore"><span class="__amount">${item["number"]}</span>x <img src="${item["image"]}" style="height:30px;"><span class="__name">${item["name"]}</span><div class="__comment">${item["comment"]}</div></div></article>`;
  });
  document.getElementById("__shippingItemList").innerHTML = html;
};

const removeOrder = function (e) {
  e.stopPropagation(); // Stop the event from propagating up to parent elements

  const id = this.getAttribute("data-id");
  document.getElementById(id).classList.remove("ordered");
  document.getElementById(id).getElementsByClassName("remove-order")[0].classList.add("hidden");
  orders = orders.filter((e) => e.key !== id);
};

const openModal = (e) => {
  console.info(e);
  const parent = e.srcElement.closest(".__overviewItem");
  console.info(parent);
  const key = parent.getAttribute("id");
  products.forEach((item) => {
    if (item["key"] == key) {
      currentItem = item; // Use the correct variable name here

      let comment = "";
      currentCount = 0; // Use the correct variable name here

      orders.forEach((od) => {
        if (od["key"] == key) {
          currentCount = od["number"]; // Use the correct variable name here
          comment = od["comment"];
        }
      });

      document.getElementById("order-amount").innerHTML = currentCount; // Use the correct variable name here
      document.getElementById("comment").value = comment;

      const desc = "description_" + lang;
      document.getElementById("modal-title").innerHTML = item["name"];
      document.getElementById("product-image-holder").innerHTML = `<img src="${item["image"]}" style="width:100%;">`;
      document.getElementById("product-description-holder").innerHTML = `<p style="font-weight:normal;text-align:left;font-size:.8em;">${item[desc]}</p>`;
    }
  });

  $("#productModal").modal("show");
};

// Main Initialization Logic
document.addEventListener("DOMContentLoaded", () => {
  // Initialize Swiper
  initSwiper();

  // Initialize variables
  lang = getLanguageFromParams();

  // Attach Event Listeners
  Array.from(document.getElementsByClassName("slideToHome")).forEach((el) => attachSliderClickEvent(el, 0));
  attachSliderClickEvent(document.getElementById("__toShipping"), 1);
  attachSliderClickEvent(document.getElementById("__toConfirm"), 2);
  document.getElementById("text-filter").addEventListener("keyup", filterProducts);
  document.getElementById("btn-plus").addEventListener("click", incrementCount);
  document.getElementById("btn-minus").addEventListener("click", decrementCount);
  document.getElementById("modal-cancel-btn").addEventListener("click", closeModal);
  document.getElementById("modal-ok-btn").addEventListener("click", confirmModal);
  document.getElementById("__toShipping").addEventListener("click", prepareShippingList);

  // Fetch Data & Initialize Components
  fetchProducts();
  fetchTranslations().then((r) => {
    translations = r;
    //    translations = JSON.parse(r.slice(12));
    changeLanguage(translations, lang);
    attachLanguageSwitchers(translations);
  });

  // Initialize Swiper
  window.addEventListener("load", () => swiper.update());
  window.addEventListener("resize", () => swiper.update());

  let lastActiveIndex = 0;

  window.addEventListener("blur", () => {
    lastActiveIndex = swiper.activeIndex;
    //    console.log("Slider lefted on: " + swiper.activeIndex);
  });

  window.addEventListener("focus", () => {
    swiper.slideTo(lastActiveIndex, 0, false);
    //    console.log("Slider returned to: " + swiper.activeIndex);
  });
});
