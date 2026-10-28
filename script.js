const SUPABASE_URL = "https://xhqcfjwcueoccagdgiou.supabase.co";
const SUPABASE_KEY = "sb_publishable_OVIfRgrGp9gLTifzpw7pxQ_RThlVvJn";
const business = {
  phone: "7780476392",
  instagram: "@my_home_bakery_Kakinada",
  timings: "9:00 AM to 10:00 PM",
  delivery: "Home delivery is available around 20 km, depending on the area.",
 cakeTypes: ["Birthday Cakes","Photo Cakes","Designer Cakes","Heart Shape Cake","Steps Cake","Cool Cakes","Egg","Eggless"],
  flavours: ["Milky Vanilla","Butterscotch","Strawberry","Blueberry","Roseberry","Black Currant","Pineapple","Red Velvet","Milky Butterscotch","Milky Badam","Honey Almond","Pista","Chocolate","Choco Chips","Roast Cause Chocolate","Double Chocolate","Caramel Nuts","Oreo Chocolate"],
  bakery: ["Brownie","Chocolava","Donuts","Dry Fruit Butter Biscuits","Butter Salt Biscuits","Milk Cake","Plum Cake","Sponge Cake","Cup Cakes","Bread","Rusk (Toast)","Cream Buns","Fruit Buns","Jam Buns"],
  sizes: "All sizes are available. Price depends on flavour and size.",
  customization: "Customization is available.",
  advance: "For a big and customized cake, order at least 2 days before.",
  payment: "Payment can be made through Cash on Delivery, PhonePe QR, or Paytm QR."
};

function populateDashboardChoices(){
  const cakeSelect=document.getElementById("dashCakeType");
  const flavourSelect=document.getElementById("dashFlavour");
  if(!cakeSelect || !flavourSelect) return;
  cakeSelect.innerHTML='<option value="">Select cake type</option>'+business.cakeTypes.map(v=>`<option>${v}</option>`).join('')+'<option value="custom">Other / Custom Cake Type</option>';
  flavourSelect.innerHTML='<option value="">Select flavour</option>'+business.flavours.map(v=>`<option>${v}</option>`).join('')+'<option value="custom">Other / Custom Flavour</option>';
}

function syncDashboardChoice(){
  const cake=document.getElementById("dashCakeType");
  const flavour=document.getElementById("dashFlavour");
  const hint=document.getElementById("dashboardCustomHint");
  if(!cake || !flavour || !hint) return;
  const custom = cake.value === "custom" || flavour.value === "custom";
  hint.innerHTML = custom ? '✍️ Continue to the order form to type your own cake type or flavour.' : "✨ Don't see what you want? Select <b>Other / Custom</b> and type it in the order form.";
}

function updateDashboardCounts(){
  const cakeTypeCount = document.getElementById("cakeTypeCount");
  const flavourCount = document.getElementById("flavourCount");
  if(cakeTypeCount) cakeTypeCount.textContent = business.cakeTypes.length;
  if(flavourCount) flavourCount.textContent = business.flavours.length;
}
function toggleOrderItem(selectElement) {
  const item = selectElement.closest(".order-item");
  if (!item) return;

  const details = item.querySelector(".item-details");
  const quantityInput = item.querySelector(".item-quantity");

  if (!details) return;

  function renderDetails() {
    const quantity = Math.max(
      1,
      parseInt(quantityInput?.value || "1", 10)
    );

    const isGalleryCake = galleryCakeSelected === true;

if (isGalleryCake && selectElement.value === "cake") {
  details.innerHTML = "";
  details.style.display = "none";
  return;
}

details.style.display = "";
    if (selectElement.value === "cake") {

      details.innerHTML = `
        ${Array.from({ length: quantity }, (_, index) => `
          <div class="cake-variant">

            <h4>Cake ${index + 1}</h4>

            <label>
  Egg or Eggless
  <select class="item-egg-eggless" required>
    <option value="">Select</option>
    <option value="Egg">Egg</option>
    <option value="Eggless">Eggless</option>
  </select>
</label>
<label>
  Cake Type
  <select class="item-cool-normal" required>
    <option value="">Select</option>
    <option value="Cool">Cool</option>
    <option value="Normal">Normal</option>
  </select>
</label>
            <label>
              Cake Model
              <select
                class="item-cake-type"
                required
                onchange="toggleItemCustomCake(this)"
              >
                <option value="">Select cake type</option>
                <option>Birthday Cake</option>
                <option>Photo Cake</option>
                <option>Designer Cake</option>
                <option>Heart Shape Cake</option>
                <option>Steps Cake</option>
                <option>Cool Cake</option>
                <option>Butter Cake</option>
                <option value="custom">Other / Custom Cake Type</option>
              </select>
            </label>

            <label
              class="custom-field item-custom-cake-wrap"
              style="display:none"
            >
              Type your cake type
              <input
                class="item-custom-cake"
                placeholder="e.g. Anniversary Cake"
              >
            </label>

            <label>
              Flavour
              <select
                class="item-flavour"
                required
                onchange="toggleItemCustomFlavour(this)"
              >
                <option value="">Select flavour</option>
                <option>Milky Vanilla</option>
                <option>Butterscotch</option>
                <option>Strawberry</option>
                <option>Blueberry</option>
                <option>Mango</option>
                <option>Black Currant</option>
                <option>Pineapple</option>
                <option>Red Velvet</option>
                <option>Milky Butterscotch</option>
                <option>Milky Badam</option>
                <option>Honey Almond</option>
                <option>Pista</option>
                <option>Roast Cause Chocolate</option>
                <option>Black Forest</option>
                <option>Chocolate</option>
                <option>Chocochips</option>
                <option>Double Chocolate</option>
                <option>Caramel Nuts</option>
                <option>Oreo</option>
                <option value="custom">Other / Custom Flavour</option>
              </select>
            </label>

            <label
              class="custom-field item-custom-flavour-wrap"
              style="display:none"
            >
              Type your flavour
              <input
                class="item-custom-flavour"
                placeholder="e.g. Mango, Coffee"
              >
            </label>

            <label>
              Size
              <input
                class="item-size"
                placeholder="e.g. 0.5 kg, 1 kg, 2 kg"
                required
              >
            </label>

            <p class="item-price">Price: ₹0</p>
          </div>
        `).join("")}
      `;

    } else if (selectElement.value === "bakery") {

      details.innerHTML = `
        ${Array.from({ length: quantity }, (_, index) => `
          <div class="bakery-variant">

            <h4>Bakery Item ${index + 1}</h4>

            <label>
              Bakery Item
              <select
                class="item-bakery-item"
                required
                onchange="toggleItemCustomBakery(this)"
              >
                <option value="">Select bakery item</option>
                <option>Brownie</option>
                <option>Chocolawa</option>
                <option>Donuts</option>
                <option>Butter Biscuits</option>
                <option>Salt Biscuits</option>
                <option>Milk Cake</option>
                <option>Plum Cake</option>
                <option>Sponge Cake</option>
                <option>Cup Cakes</option>
                <option>Bread</option>
                <option>Rusk (Toast)</option>
                <option>Fruit Buns</option>
                <option value="custom">Other / Custom Bakery Item</option>
              </select>
            </label>

            <label
              class="custom-field item-custom-bakery-wrap"
              style="display:none"
            >
              Type your bakery item
              <input
                class="item-custom-bakery"
                placeholder="e.g. Dry Fruit Cake"
              >
            </label>

          </div>
        `).join("")}
      `;

    } else {
      details.innerHTML = "";
    }
  }

  renderDetails();

  if (quantityInput) {
    quantityInput.oninput = renderDetails;
    quantityInput.onchange = renderDetails;
  }
}
function toggleItemCustomCake(selectElement) {
  const item = selectElement.closest(".cake-variant");
  if (!item) return;

  const wrap = item.querySelector(".item-custom-cake-wrap");

  if (wrap) {
    wrap.style.display =
      selectElement.value === "custom" ? "block" : "none";
  }
}

function toggleItemCustomFlavour(selectElement) {
  const item = selectElement.closest(".cake-variant");
  if (!item) return;

  const wrap = item.querySelector(".item-custom-flavour-wrap");

  if (wrap) {
    wrap.style.display =
      selectElement.value === "custom" ? "block" : "none";
  }
}
function toggleItemCustomBakery(selectElement) {
  const item = selectElement.closest(".bakery-variant");
  if (!item) return;

  const wrap = item.querySelector(".item-custom-bakery-wrap");

  if (wrap) {
    wrap.style.display =
      selectElement.value === "custom" ? "block" : "none";
  }
}
function updateOrderItemQuantity(quantityInput) {
  const item = quantityInput.closest(".order-item");
  if (!item) return;

  const categorySelect = item.querySelector(".item-category");
  if (!categorySelect) return;

  toggleOrderItem(categorySelect);
}
function toggleCustomCakeType(){
  const select = document.getElementById("cakeType");
  const wrap = document.getElementById("customCakeWrap");
  const input = document.getElementById("customCakeType");
  if(!wrap || !input) return;
  const isCustom = select && select.value === "custom";
  wrap.style.display = isCustom ? "block" : "none";
  input.required = isCustom;
  if(!isCustom) input.value = "";
}
function toggleCustomFlavour(){
  const select = document.getElementById("flavour");
  const wrap = document.getElementById("customFlavourWrap");
  const input = document.getElementById("customFlavour");
  if(!wrap || !input) return;
  const isCustom = select && select.value === "custom";
  wrap.style.display = isCustom ? "block" : "none";
  input.required = isCustom;
  if(!isCustom) input.value = "";
}

function fillBakeryItems(){
  const select=document.getElementById("bakeryItem");
  if(!select) return;
  select.innerHTML='<option value="">Select bakery item</option>'+business.bakery.map(v=>`<option>${v}</option>`).join('');
}

function orderCake(type, flavour){
  const category=document.getElementById("orderCategory");
  const cakeType=document.getElementById("cakeType");
  const flavourEl=document.getElementById("flavour");
  if(category) category.value="cake";
  toggleOrderCategory();
  if(cakeType && type) cakeType.value=type;
  if(flavourEl && flavour) flavourEl.value=flavour;
  toggleCustomCakeType(); toggleCustomFlavour();
  document.getElementById("order")?.scrollIntoView({behavior:"smooth",block:"start"});
}
function selectFixedCakeForOrder(
  flavour,
  selectedSize,
  selectedTemperature,
  selectedEggType
) {
    const cakeStock = ownerStockData.find(item =>
    (item.name || "").trim().toLowerCase() ===
    (flavour || "").trim().toLowerCase()
  );

  if (cakeStock) {
    const availableStock = Number(cakeStock.quantity);
    const requestedSize = Number(selectedSize);

    if (availableStock <= 0) {
      const currentLanguage = localStorage.getItem("language") || "en";

alert(
  currentLanguage === "te"
    ? `❌ ${flavour} ప్రస్తుతం స్టాక్‌లో లేదు.`
    : `❌ ${flavour} is currently Out of Stock.`
);
      return;
    }

    if (requestedSize > availableStock) {
      alert(
        `⚠️ Only ${availableStock} ${cakeStock.unit} of ${flavour} is available.`
      );
      return;
    }
  }
  const firstItem = document.querySelector(".order-item");
  if (!firstItem) return;

  const category = firstItem.querySelector(".item-category");

  if (category) {
    category.value = "cake";
    toggleOrderItem(category);
  }

  setTimeout(() => {
    const cakeTypeSelect = firstItem.querySelector(".item-cake-type");
    const flavourSelect = firstItem.querySelector(".item-flavour");
    const coolNormalSelect = firstItem.querySelector(".item-cool-normal");
    const eggSelect = firstItem.querySelector(".item-egg-eggless");
    const sizeInput = firstItem.querySelector(".item-size");

    // Fixed cake name
    if (cakeTypeSelect) {
      cakeTypeSelect.value = "Birthday Cake";
    }

    // Selected cake/flavour
    if (flavourSelect) {
      flavourSelect.value = flavour;
    }

    // Cool / Normal
    if (coolNormalSelect) {
      coolNormalSelect.value = selectedTemperature || "Cool";
    }

    // Egg / Eggless
    if (eggSelect) {
      eggSelect.value = selectedEggType || "Egg";
    }

    // Size
    if (sizeInput) {
      sizeInput.value = selectedSize || "0.5";
    }

    // Calculate price
    updateFixedCakePrice(firstItem);

  }, 100);

  document.getElementById("order")?.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}
function updateFixedCakePrice(item) {

  const flavour = item.querySelector(".item-flavour")?.value;
  const type = item.querySelector(".item-cool-normal")?.value;
  const eggType = item.querySelector(".item-egg-eggless")?.value;
  const size = Number(item.querySelector(".item-size")?.value);
  const priceElement = item.querySelector(".item-price");

  if (!priceElement || !flavour || !type || !eggType || !size || size <= 0) {
    if (priceElement) {
      priceElement.textContent = "Price: ₹0";
    }
    return;
  }

  const cake = cakePrices[flavour];

  if (!cake) {
    priceElement.textContent = "Price: Owner will confirm";
    return;
  }

  const basePrice = cake[type];

  let finalPrice = basePrice * (size / 0.5);

  if (eggType === "Eggless") {
    finalPrice += 50 * (size / 0.5);
  }

  priceElement.textContent = "Price: ₹" + finalPrice;
}
document.addEventListener("change", function (event) {
  const item = event.target.closest(".order-item");

  if (!item) return;

  if (
    event.target.classList.contains("item-cool-normal") ||
    event.target.classList.contains("item-egg-eggless")
  ) {
    updateFixedCakePrice(item);
    updateOrderPriceSummary();
    checkHomeDeliveryAvailability();
  }

  if (event.target.classList.contains("item-category")) {
    updateOrderPriceSummary();
    checkHomeDeliveryAvailability();
  }
});

document.addEventListener("input", function (event) {
  const item = event.target.closest(".order-item");

  if (!item) return;

  if (event.target.classList.contains("item-size")) {
    updateFixedCakePrice(item);
    updateOrderPriceSummary();
    checkHomeDeliveryAvailability();
  }
});
function calculateCakePrice(basePrice, sizeKg) {
  const size = Number(sizeKg);

  if (!size || size <= 0) {
    return 0;
  }

  return basePrice * (size / 0.5);
}
document.addEventListener("DOMContentLoaded", function () {
  const type = document.getElementById("milkyVanillaType");
  const size = document.getElementById("milkyVanillaSize");
  const price = document.getElementById("milkyVanillaPrice");
if (!type || !size || !price) return;
  function updateMilkyVanillaPrice() {
  const basePrice = type.value === "Cool" ? 300 : 200;
  const sizeKg = Number(size.value);
  const eggType = document.getElementById("milkyVanillaEgg").value;

  if (!sizeKg || sizeKg <= 0) {
    price.textContent = "Price: ₹300";
    return;
  }

  let finalPrice = calculateCakePrice(basePrice, sizeKg);

  if (eggType === "Eggless") {
    finalPrice += 50 * (sizeKg / 0.5);
  }

  price.textContent = "Price: ₹" + finalPrice;
}

  if (type) {
  type.addEventListener("change", updateMilkyVanillaPrice);
}

if (size) {
  size.addEventListener("input", updateMilkyVanillaPrice);
}

const eggInput = document.getElementById("milkyVanillaEgg");

if (eggInput) {
  eggInput.addEventListener("change", updateMilkyVanillaPrice);
}
});
document.addEventListener("DOMContentLoaded", function () {
  const type = document.getElementById("butterscotchType");
  const size = document.getElementById("butterscotchSize");
  const egg = document.getElementById("butterscotchEgg");
  const price = document.getElementById("butterscotchPrice");
if (!type || !egg || !size || !price) return;
  function updateButterscotchPrice() {
  const basePrice = type.value === "Cool" ? 350 : 200;
  const sizeKg = Number(size.value);

  if (!sizeKg || sizeKg <= 0) {
    price.textContent = "Price: ₹350";
    return;
  }

  let finalPrice = basePrice * (sizeKg / 0.5);

  if (egg.value === "Eggless") {
    finalPrice += 50 * (sizeKg / 0.5);
  }

  price.textContent = "Price: ₹" + finalPrice;
}
  if (type) {
  type.addEventListener("change", updateButterscotchPrice);
}

if (size) {
  size.addEventListener("input", updateButterscotchPrice);
}
});
document.addEventListener("DOMContentLoaded", function () {
  const type = document.getElementById("strawberryType");
  const egg = document.getElementById("strawberryEgg");
  const size = document.getElementById("strawberrySize");
  const price = document.getElementById("strawberryPrice");
if (!type || !egg || !size || !price) return;
  function updateStrawberryPrice() {
  const basePrice = type.value === "Cool" ? 350 : 200;
  const sizeKg = Number(size.value);

  if (!sizeKg || sizeKg <= 0) {
    price.textContent = "Price: ₹350";
    return;
  }

  let finalPrice = basePrice * (sizeKg / 0.5);

  if (egg.value === "Eggless") {
    finalPrice += 50 * (sizeKg / 0.5);
  }

  price.textContent = "Price: ₹" + finalPrice;
}
  if (type) {
  type.addEventListener("change", updateStrawberryPrice);
}

if (egg) {
  egg.addEventListener("change", updateStrawberryPrice);
}

if (size) {
  size.addEventListener("input", updateStrawberryPrice);
}
});
document.addEventListener("DOMContentLoaded", function () {
  const type = document.getElementById("blueberryType");
  const egg = document.getElementById("blueberryEgg");
  const size = document.getElementById("blueberrySize");
  const price = document.getElementById("blueberryPrice");
if (!type || !egg || !size || !price) return;
  function updateBlueberryPrice() {
  const basePrice = type.value === "Cool" ? 400 : 250;
  const sizeKg = Number(size.value);

  if (!sizeKg || sizeKg <= 0) {
    price.textContent = "Price: ₹400";
    return;
  }

  let finalPrice = basePrice * (sizeKg / 0.5);

  if (egg.value === "Eggless") {
    finalPrice += 50 * (sizeKg / 0.5);
  }

  price.textContent = "Price: ₹" + finalPrice;
}
  if (type) {
  type.addEventListener("change", updateBlueberryPrice);
}

if (egg) {
  egg.addEventListener("change", updateBlueberryPrice);
}

if (size) {
  size.addEventListener("input", updateBlueberryPrice);
}

});

document.addEventListener("DOMContentLoaded", function () {
  const type = document.getElementById("mangoType");
  const egg = document.getElementById("mangoEgg");
  const size = document.getElementById("mangoSize");
  const price = document.getElementById("mangoPrice");
if (!type || !egg || !size || !price) return;
  function updateMangoPrice() {
  const basePrice = type.value === "Cool" ? 350 : 200;
  const sizeKg = Number(size.value);

  if (!sizeKg || sizeKg <= 0) {
    price.textContent = "Price: ₹350";
    return;
  }

  let finalPrice = basePrice * (sizeKg / 0.5);

  if (egg.value === "Eggless") {
    finalPrice += 50 * (sizeKg / 0.5);
  }

  price.textContent = "Price: ₹" + finalPrice;
}
type.addEventListener("change", updateMangoPrice);
egg.addEventListener("change", updateMangoPrice);
size.addEventListener("input", updateMangoPrice);
});
document.addEventListener("DOMContentLoaded", function () {
const type = document.getElementById("redVelvetType");
const egg = document.getElementById("redVelvetEgg");
const size = document.getElementById("redVelvetSize");
const price = document.getElementById("redVelvetPrice");
if (!type || !egg || !size || !price) return;
function updateRedVelvetPrice() {
  const basePrice = type.value === "Cool" ? 500 : 300;
  const sizeKg = Number(size.value);

  if (!sizeKg || sizeKg <= 0) {
    price.textContent = "Price: ₹500";
    return;
  }

  let finalPrice = basePrice * (sizeKg / 0.5);

  if (egg.value === "Eggless") {
    finalPrice += 50 * (sizeKg / 0.5);
  }

  price.textContent = "Price: ₹" + finalPrice;
}
type.addEventListener("change", updateRedVelvetPrice);
egg.addEventListener("change", updateRedVelvetPrice);
size.addEventListener("input", updateRedVelvetPrice);
});
document.addEventListener("DOMContentLoaded", function () {
  const type = document.getElementById("pistaType");
  const egg = document.getElementById("pistaEgg");
  const size = document.getElementById("pistaSize");
  const price = document.getElementById("pistaPrice");
if (!type || !egg || !size || !price) return;
  function updatePistaPrice() {
    const basePrice = type.value === "Cool" ? 500 : 300;
    const sizeKg = Number(size.value);

    if (!sizeKg || sizeKg <= 0) {
      price.textContent = "Price: ₹500";
      return;
    }

    let finalPrice = basePrice * (sizeKg / 0.5);

    if (egg.value === "Eggless") {
      finalPrice += 50 * (sizeKg / 0.5);
    }

    price.textContent = "Price: ₹" + finalPrice;
  }
  type.addEventListener("change", updatePistaPrice);
  egg.addEventListener("change", updatePistaPrice);
  size.addEventListener("input", updatePistaPrice);
});
document.addEventListener("DOMContentLoaded", function () {
  const type = document.getElementById("milkyBadamType");
  const egg = document.getElementById("milkyBadamEgg");
  const size = document.getElementById("milkyBadamSize");
  const price = document.getElementById("milkyBadamPrice");
if (!type || !egg || !size || !price) return;
  function updateMilkyBadamPrice() {
    const basePrice = type.value === "Cool" ? 500 : 300;
    const sizeKg = Number(size.value);

    if (!sizeKg || sizeKg <= 0) {
      price.textContent = "Price: ₹500";
      return;
    }

    let finalPrice = basePrice * (sizeKg / 0.5);

    if (egg.value === "Eggless") {
      finalPrice += 50 * (sizeKg / 0.5);
    }

    price.textContent = "Price: ₹" + finalPrice;
  }
  type.addEventListener("change", updateMilkyBadamPrice);
  egg.addEventListener("change", updateMilkyBadamPrice);
  size.addEventListener("input", updateMilkyBadamPrice);
});
document.addEventListener("DOMContentLoaded", function () {
  const type = document.getElementById("milkyButterscotchType");
  const egg = document.getElementById("milkyButterscotchEgg");
  const size = document.getElementById("milkyButterscotchSize");
  const price = document.getElementById("milkyButterscotchPrice");
if (!type || !egg || !size || !price) return;
  function updateMilkyButterscotchPrice() {
    const basePrice = type.value === "Cool" ? 500 : 300;
    const sizeKg = Number(size.value);

    if (!sizeKg || sizeKg <= 0) {
      price.textContent = "Price: ₹500";
      return;
    }

    let finalPrice = basePrice * (sizeKg / 0.5);

    if (egg.value === "Eggless") {
      finalPrice += 50 * (sizeKg / 0.5);
    }

    price.textContent = "Price: ₹" + finalPrice;
  }
  type.addEventListener("change", updateMilkyButterscotchPrice);
  egg.addEventListener("change", updateMilkyButterscotchPrice);
  size.addEventListener("input", updateMilkyButterscotchPrice);
});
document.addEventListener("DOMContentLoaded", function () {
  const type = document.getElementById("honeyAlmondType");
  const egg = document.getElementById("honeyAlmondEgg");
  const size = document.getElementById("honeyAlmondSize");
  const price = document.getElementById("honeyAlmondPrice");
if (!type || !egg || !size || !price) return;
  function updateHoneyAlmondPrice() {
    const basePrice = type.value === "Cool" ? 500 : 300;
    const sizeKg = Number(size.value);

    if (!sizeKg || sizeKg <= 0) {
      price.textContent = "Price: ₹500";
      return;
    }

    let finalPrice = basePrice * (sizeKg / 0.5);

    if (egg.value === "Eggless") {
      finalPrice += 50 * (sizeKg / 0.5);
    }

    price.textContent = "Price: ₹" + finalPrice;
  }

  type.addEventListener("change", updateHoneyAlmondPrice);
  egg.addEventListener("change", updateHoneyAlmondPrice);
  size.addEventListener("input", updateHoneyAlmondPrice);
});
document.addEventListener("DOMContentLoaded", function () {
  const type = document.getElementById("caramelNutsType");
  const egg = document.getElementById("caramelNutsEgg");
  const size = document.getElementById("caramelNutsSize");
  const price = document.getElementById("caramelNutsPrice");
if (!type || !egg || !size || !price) return;
  function updateCaramelNutsPrice() {
    const basePrice = type.value === "Cool" ? 500 : 300;
    const sizeKg = Number(size.value);

    if (!sizeKg || sizeKg <= 0) {
      price.textContent = "Price: ₹300";
      return;
    }

    let finalPrice = basePrice * (sizeKg / 0.5);

    if (egg.value === "Eggless") {
      finalPrice += 50 * (sizeKg / 0.5);
    }

    price.textContent = "Price: ₹" + finalPrice;
  }

  type.addEventListener("change", updateCaramelNutsPrice);
  egg.addEventListener("change", updateCaramelNutsPrice);
  size.addEventListener("input", updateCaramelNutsPrice);
});
document.addEventListener("DOMContentLoaded", function () {
const type = document.getElementById("oreoType");
const egg = document.getElementById("oreoEgg");
const size = document.getElementById("oreoSize");
const price = document.getElementById("oreoPrice");
if (!type || !egg || !size || !price) return;
function updateOreoPrice() {
  const basePrice = type.value === "Cool" ? 500 : 300;
  const sizeKg = Number(size.value);

  if (!sizeKg || sizeKg <= 0) {
    price.textContent = "Price: ₹500";
    return;
  }

  let finalPrice = basePrice * (sizeKg / 0.5);

  if (egg.value === "Eggless") {
    finalPrice += 50 * (sizeKg / 0.5);
  }

  price.textContent = "Price: ₹" + finalPrice;
}
type.addEventListener("change", updateOreoPrice);
egg.addEventListener("change", updateOreoPrice);
size.addEventListener("input", updateOreoPrice);
});
document.addEventListener("DOMContentLoaded", function () {
const type = document.getElementById("chocolateType");
const egg = document.getElementById("chocolateEgg");
const size = document.getElementById("chocolateSize");
const price = document.getElementById("chocolatePrice");
if (!type || !egg || !size || !price) return;
  function updateChocolatePrice() {
  const basePrice = type.value === "Cool" ? 450 : 250;
  const sizeKg = Number(size.value);

  if (!sizeKg || sizeKg <= 0) {
    price.textContent = "Price: ₹450";
    return;
  }

  let finalPrice = basePrice * (sizeKg / 0.5);

  if (egg.value === "Eggless") {
    finalPrice += 50 * (sizeKg / 0.5);
  }

  price.textContent = "Price: ₹" + finalPrice;
}
type.addEventListener("change", updateChocolatePrice);
egg.addEventListener("change", updateChocolatePrice);
size.addEventListener("input", updateChocolatePrice);
});
document.addEventListener("DOMContentLoaded", function () {
const type = document.getElementById("chocochipsType");
const egg = document.getElementById("chocochipsEgg");
const size = document.getElementById("chocochipsSize");
const price = document.getElementById("chocochipsPrice");
if (!type || !egg || !size || !price) return;
  function updateChocochipsPrice() {
  const basePrice = type.value === "Cool" ? 500 : 300;
  const sizeKg = Number(size.value);

  if (!sizeKg || sizeKg <= 0) {
    price.textContent = "Price: ₹500";
    return;
  }

  let finalPrice = basePrice * (sizeKg / 0.5);

  if (egg.value === "Eggless") {
    finalPrice += 50 * (sizeKg / 0.5);
  }

  price.textContent = "Price: ₹" + finalPrice;
}
type.addEventListener("change", updateChocochipsPrice);
egg.addEventListener("change", updateChocochipsPrice);
size.addEventListener("input", updateChocochipsPrice);
});
document.addEventListener("DOMContentLoaded", function () {
const type = document.getElementById("roastCauseChocolateType");
const egg = document.getElementById("roastCauseChocolateEgg");
const size = document.getElementById("roastCauseChocolateSize");
const price = document.getElementById("roastCauseChocolatePrice");
if (!type || !egg || !size || !price) return;
function updateRoastCauseChocolatePrice() {
  const basePrice = type.value === "Cool" ? 500 : 300;
  const sizeKg = Number(size.value);

  if (!sizeKg || sizeKg <= 0) {
    price.textContent = "Price: ₹500";
    return;
  }

  let finalPrice = basePrice * (sizeKg / 0.5);

  if (egg.value === "Eggless") {
    finalPrice += 50 * (sizeKg / 0.5);
  }

  price.textContent = "Price: ₹" + finalPrice;
}
type.addEventListener("change", updateRoastCauseChocolatePrice);
egg.addEventListener("change", updateRoastCauseChocolatePrice);
size.addEventListener("input", updateRoastCauseChocolatePrice);
});
document.addEventListener("DOMContentLoaded", function () {
const type = document.getElementById("blackForestType");
const egg = document.getElementById("blackForestEgg");
const size = document.getElementById("blackForestSize");
const price = document.getElementById("blackForestPrice");
if (!type || !egg || !size || !price) return;  
function updateBlackForestPrice() {
  const basePrice = type.value === "Cool" ? 400 : 250;
  const sizeKg = Number(size.value);

  if (!sizeKg || sizeKg <= 0) {
    price.textContent = "Price: ₹400";
    return;
  }

  let finalPrice = basePrice * (sizeKg / 0.5);

  if (egg.value === "Eggless") {
    finalPrice += 50 * (sizeKg / 0.5);
  }

  price.textContent = "Price: ₹" + finalPrice;
}
type.addEventListener("change", updateBlackForestPrice);
egg.addEventListener("change", updateBlackForestPrice);
size.addEventListener("input", updateBlackForestPrice);
});
function toggleChat() {
  const chat = document.getElementById("chat");

  if (!chat) return;

  chat.classList.toggle("open");
}
  function addMessage(text, type){
  const box=document.getElementById("messages");
  if(!box) return;
  const div=document.createElement("div");
  div.className=`msg ${type}`;
  div.textContent=text;
  box.appendChild(div);
  box.scrollTop=box.scrollHeight;
}
const cakePrices = {
    "Milky Vanilla": { Cool: 300, Normal: 200 },
    "Butterscotch": { Cool: 350, Normal: 200 },
    "Strawberry": { Cool: 350, Normal: 200 },
    "Blueberry": { Cool: 400, Normal: 250 },
    "Black Currant": { Cool: 400, Normal: 250 },
    "Pineapple": { Cool: 350, Normal: 200 },
    "Mango": { Cool: 350, Normal: 200 },
    "Red Velvet": { Cool: 500, Normal: 300 },
    "Pista": { Cool: 500, Normal: 300 },
    "Milky Badam": { Cool: 500, Normal: 300 },
    "Milky Butterscotch": { Cool: 500, Normal: 300 },
    "Honey Almond": { Cool: 500, Normal: 300 },
    "Caramel Nuts": { Cool: 500, Normal: 300 },
    "Oreo": { Cool: 500, Normal: 300 },
    "Chocolate": { Cool: 450, Normal: 250 },
    "Chocochips": { Cool: 500, Normal: 300 },
    "Roast Cause Chocolate": { Cool: 500, Normal: 300 },
    "Black Forest": { Cool: 400, Normal: 250 }
  };
function getReply(q){
  const s=q.toLowerCase();
  const matchedCake = Object.keys(cakePrices).find(cake =>
  s.includes(cake.toLowerCase())
);

if (matchedCake && (s.includes("price") || s.includes("cost") || s.includes("kg") || s.includes("gram") || s.includes("500"))) {
  const isCool = s.includes("cool");
  const cakeType = isCool ? "Cool" : "Normal";
  const basePrice = cakePrices[matchedCake][cakeType];

  let weight = 500;

  if (s.includes("250")) weight = 250;
  else if (s.includes("1.5")) weight = 1500;
  else if (s.includes("1 kg") || s.includes("1kg")) weight = 1000;
  else if (s.includes("2 kg") || s.includes("2kg")) weight = 2000;
  else if (s.includes("500")) weight = 500;

  const price = basePrice * (weight / 500);

  return `${matchedCake} ${cakeType} cake price is ₹${price} for ${weight}g.`;
}
  if(s.includes("type") || s.includes("category") || s.includes("cake available"))
    return "Listed cake types are: " + business.cakeTypes.join(", ") + ". If you need another type, you can request a custom cake type in the order form.";
  if(s.includes("flavour") || s.includes("flavor"))
    return "Listed cake flavours are: " + business.flavours.join(", ") + ". If your flavour is not listed, you can type a custom flavour in the order form.";
  if(s.includes("size") || s.includes("kg")) return business.sizes;
  if(s.includes("custom") || s.includes("design") || s.includes("photo") || s.includes("image") || s.includes("gallery") || s.includes("camera"))
  return "Yes, BakeFlow supports custom cake orders. You can choose a reference image from your Gallery or take a Photo using your camera. For a big or customized cake, please place the order at least 2 days in advance.";
  if(s.includes("pay") || s.includes("cash") || s.includes("cod"))
  return business.payment;
  if(s.includes("delivery charge") || s.includes("delivery charges"))
  return "Delivery charges: ₹50 up to 3 km, ₹100 up to 5 km, ₹200 up to 10 km, and ₹400 up to 20 km. Bakery-only orders are eligible for home delivery up to 5 km. For distances above 20 km, please contact the bakery owner.";

if(s.includes("deliver") || s.includes("delivery"))
  return "Home Delivery is available for cake orders up to 20 km, for any cake size. Bakery-only orders are eligible for home delivery up to 5 km. For distances above 20 km, please contact the bakery owner to confirm availability. Pickup Self Collection is also available.";
  if(s.includes("time") || s.includes("open") || s.includes("close") || s.includes("timing")) return "The available timing is " + business.timings + ".";
  if(s.includes("2 day") || s.includes("advance") || s.includes("when order")) return business.advance;
  if(s.includes("phone") || s.includes("contact") || s.includes("number")) return "You can contact My Home Bakery at " + business.phone + ".";
  if(s.includes("instagram") || s.includes("insta")) return "Instagram: " + business.instagram + ".";
  if(s.includes("brownie")) {
  const match = s.match(/(\d+)\s*(piece|pieces)?/);
  const quantity = match ? Number(match[1]) : 1;
  return `Brownie price is ₹50 per piece. ${quantity > 1 ? `${quantity} pieces cost ₹${quantity * 50}.` : ""}`;
}

if(s.includes("chocolava") || s.includes("chocolawa")) {
  const match = s.match(/(\d+)\s*(piece|pieces)?/);
  const quantity = match ? Number(match[1]) : 1;
  return `Chocolava price is ₹50 per piece. ${quantity > 1 ? `${quantity} pieces cost ₹${quantity * 50}.` : ""}`;
}

if(s.includes("donut") || s.includes("donuts")) {
  const match = s.match(/(\d+)\s*(piece|pieces)?/);
  const quantity = match ? Number(match[1]) : 1;
  return `Donuts price is ₹40 per piece. ${quantity > 1 ? `${quantity} pieces cost ₹${quantity * 40}.` : ""}`;
}

if(s.includes("cream bun")) {
  const match = s.match(/(\d+)\s*(piece|pieces)?/);
  const quantity = match ? Number(match[1]) : 1;
  return `Cream Bun price is ₹20 per piece. ${quantity > 1 ? `${quantity} pieces cost ₹${quantity * 20}.` : ""}`;
}

if(s.includes("fruit bun")) {
  const match = s.match(/(\d+)\s*(piece|pieces)?/);
  const quantity = match ? Number(match[1]) : 1;
  return `Fruit Bun price is ₹20 per piece. ${quantity > 1 ? `${quantity} pieces cost ₹${quantity * 20}.` : ""}`;
}

if(s.includes("jam bun")) {
  const match = s.match(/(\d+)\s*(piece|pieces)?/);
  const quantity = match ? Number(match[1]) : 1;
  return `Jam Bun price is ₹20 per piece. ${quantity > 1 ? `${quantity} pieces cost ₹${quantity * 20}.` : ""}`;
}

if(s.includes("dry fruit") || s.includes("dryfruit")) {
  const match = s.match(/(\d+)\s*(kg|kgs|kilogram|kilograms|g|grams)?/);
  const amount = match ? Number(match[1]) : 1;
  const unit = match?.[2]?.startsWith("g") ? "g" : "kg";

  if(unit === "g") {
    return `Dry Fruit Butter Biscuits price is ₹600 per kg. ${amount}g costs ₹${(600 * amount / 1000).toFixed(0)}.`;
  }

  return `Dry Fruit Butter Biscuits price is ₹600 per kg. ${amount > 1 ? `${amount} kg costs ₹${amount * 600}.` : ""}`;
}

if(s.includes("butter biscuit") || s.includes("salt biscuit")) {
  const match = s.match(/(\d+)\s*(kg|kgs|kilogram|kilograms|g|grams)?/);
  const amount = match ? Number(match[1]) : 1;
  const unit = match?.[2]?.startsWith("g") ? "g" : "kg";

  if(unit === "g") {
    return `Butter Salt Biscuits price is ₹500 per kg. ${amount}g costs ₹${(500 * amount / 1000).toFixed(0)}.`;
  }

  return `Butter Salt Biscuits price is ₹500 per kg. ${amount > 1 ? `${amount} kg costs ₹${amount * 500}.` : ""}`;
}

if(s.includes("milk cake")) {
  const match = s.match(/(\d+)\s*(kg|kgs|kilogram|kilograms|g|grams)?/);
  const amount = match ? Number(match[1]) : 250;
  const unit = match?.[2]?.startsWith("g") ? "g" : "kg";
  const price = unit === "g" ? 100 * amount / 250 : amount * 400;
  return `Milk Cake price is ₹100 per 250g. ${amount}${unit} costs ₹${price}.`;
}

if(s.includes("plum cake")) {
  const match = s.match(/(\d+)\s*(kg|kgs|kilogram|kilograms|g|grams)?/);
  const amount = match ? Number(match[1]) : 250;
  const unit = match?.[2]?.startsWith("g") ? "g" : "kg";
  const price = unit === "g" ? 150 * amount / 250 : amount * 600;
  return `Plum Cake price is ₹150 per 250g. ${amount}${unit} costs ₹${price}.`;
}

if(s.includes("sponge cake")) {
  const match = s.match(/(\d+)\s*(kg|kgs|kilogram|kilograms|g|grams)?/);
  const amount = match ? Number(match[1]) : 250;
  const unit = match?.[2]?.startsWith("g") ? "g" : "kg";
  const price = unit === "g" ? 70 * amount / 250 : amount * 280;
  return `Sponge Cake price is ₹70 per 250g. ${amount}${unit} costs ₹${price}.`;
}

if(s.includes("cup cake") || s.includes("cupcake")) {
  const match = s.match(/(\d+)\s*(piece|pieces|cup|cups)?/);
  const quantity = match ? Number(match[1]) : 1;
  return `Cup Cake price is ₹10 per piece. ${quantity > 1 ? `${quantity} pieces cost ₹${quantity * 10}.` : ""}`;
}

if(s.includes("bread")) {
  const match = s.match(/(\d+)\s*(piece|pieces|g|grams)?/);
  const quantity = match ? Number(match[1]) : 1;

  if(match?.[2]?.startsWith("g")) {
    return `Bread price is ₹50 per 320g. ${quantity}g costs ₹${(50 * quantity / 320).toFixed(0)}.`;
  }

  return `Bread price is ₹50 per 320g. ${quantity > 1 ? `${quantity} pieces cost ₹${quantity * 50}.` : ""}`;
}

if(s.includes("rusk") || s.includes("toast")) {
  const match = s.match(/(\d+)\s*(kg|kgs|kilogram|kilograms|g|grams)?/);
  const amount = match ? Number(match[1]) : 250;
  const unit = match?.[2]?.startsWith("g") ? "g" : "kg";
  const price = unit === "g" ? 50 * amount / 250 : amount * 200;
  return `Rusk (Toast) price is ₹50 per 250g. ${amount}${unit} costs ₹${price}.`;
}

if(s.includes("bakery"))
  return "Our bakery items include: " + business.bakery.join(", ") + ".";
  if(s.includes("brownie") || s.includes("donut") || s.includes("bread") || s.includes("biscuit") || s.includes("bakery")) return "Bakery items include: " + business.bakery.join(", ") + ".";
if(s.includes("track id") && (s.includes("where") || s.includes("find")))
  return "After placing your order, check the order confirmation message or your order details for the Track ID. Enter that ID in the tracking section to view your order status.";

if(s.includes("track") || s.includes("tracking") || s.includes("track id"))
  return "To track your order, enter your Track ID in the order tracking section. You can view your status from Order Received to Delivered.";
  if(s.includes("order received"))
  return "Order Received means your order request has been submitted successfully and is waiting for the bakery owner to confirm it.";

if(s.includes("order confirmed"))
  return "Order Confirmed means the bakery owner has accepted your order.";

if(s.includes("preparing"))
  return "Preparing means the bakery is making your order.";

if(s.includes("ready for delivery"))
  return "Ready for Delivery means your order is prepared and ready to be delivered or collected.";

if(s.includes("out for delivery"))
  return "Out for Delivery means your order has been sent for delivery.";

if(s.includes("delivered"))
  return "Delivered means your order has reached the delivery destination.";
if(s.includes("pickup") || s.includes("self collection") || s.includes("pick up"))
  return "Self Collection is available. Select Pickup Self Collection while placing your order.";

if(s.includes("order") || s.includes("how to order"))
  return "You can place your order through the BakeFlow order form. Select the cake or bakery item, quantity, required date, delivery or pickup option, enter your details and submit the order.";

if(s.includes("gallery") || s.includes("photo") || s.includes("image"))
  return "For a custom cake, you can choose a reference image from your Gallery or take a Photo using your camera.";

if(s.includes("review") || s.includes("rating"))
  return "You can share your experience by giving a rating and review through the Reviews section.";

  if(s.includes("hello") || s.includes("hi")) return "Hi! 👋 Ask me about cake types, flavours, sizes, customization, delivery, timings, payment or bakery items.";
  return "I don't know that from the bakery information provided. Please contact My Home Bakery at " + business.phone + " for confirmation.";
}

function sendChat(){
  const input=document.getElementById("chatInput");
  const q=input?.value.trim();
  if(!q)return;
  addMessage(q,"user"); input.value="";
  setTimeout(()=>addMessage(getReply(q),"bot"),220);
}
function ask(q){ const input=document.getElementById("chatInput"); if(input){input.value=q;sendChat();} }
function saveOrderToMyOrders(trackId) {

  const orderItems = document.querySelectorAll("#orderItems .order-item");

  const savedItems = [];

  orderItems.forEach((item, index) => {

    const category =
      item.querySelector(".item-category")?.value || "";

    const quantity =
      item.querySelector(".item-quantity")?.value || "1";

    const requiredDate =
      item.querySelector(".item-date")?.value || "Not specified";

    let itemName = "Not specified";

    if (category === "bakery") {

      const bakerySelect =
        item.querySelector(".item-bakery-item");

      const customBakery =
        item.querySelector(".item-custom-bakery")?.value.trim();

      itemName =
        bakerySelect?.value === "custom"
          ? (customBakery || "Custom Bakery Item")
          : (bakerySelect?.value || "Not specified");

    } else if (category === "cake") {

      const cakeType =
        item.querySelector(".item-cake-type")?.value || "";

      const flavour =
        item.querySelector(".item-flavour")?.value || "";

      itemName =
        `${cakeType || "Cake"} - ${flavour || "Flavour not specified"}`;
    }

    savedItems.push({
      itemNumber: index + 1,
      category: category,
      name: itemName,
      quantity: quantity,
      requiredDate: requiredDate
    });

  });

  const order = {
    orderId: "BF" + Date.now().toString().slice(-6),
    trackId: trackId || "",

    date: new Date().toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    }),

    status: "Order Request Sent",

    customerName:
      document.getElementById("name")?.value.trim() || "",

    phone:
      document.getElementById("phone")?.value.trim() || "",

    items: savedItems,

    total: "Will be confirmed by bakery"
  };

  let orders = [];

  try {
    orders =
      JSON.parse(localStorage.getItem("bakeflowOrders")) || [];
  } catch (error) {
    orders = [];
  }

  orders.unshift(order);

  localStorage.setItem(
    "bakeflowOrders",
    JSON.stringify(orders)
  );

  console.log("Order saved to My Orders:", order);
}

function renderMyOrders() {

  const list = document.getElementById("myOrdersList");
  if (!list) return;

  let orders = [];

  try {
    orders = JSON.parse(
      localStorage.getItem("bakeflowOrders") || "[]"
    );
  } catch (error) {
    orders = [];
  }

  if (orders.length === 0) {
    list.innerHTML = `
      <div class="empty-orders">
        <div class="empty-orders-icon">🛍️</div>
        <h3>No Orders Yet</h3>
        <p>Your previous orders will appear here.</p>
        <button class="btn primary" type="button"
          onclick="document.getElementById('order')?.scrollIntoView({behavior:'smooth'})">
          Start Ordering
        </button>
      </div>
    `;
    return;
  }

  list.innerHTML = orders.map(order => `
    <article class="my-order-card">
      <h3>Order #${order.orderId}</h3>
      <p><strong>Track ID:</strong> ${order.trackId || "Not available"}</p>
      <p><strong>Date:</strong> ${order.date}</p>
      <p><strong>Status:</strong> ${order.status}</p>

      <div class="my-order-items">
        ${order.items.map(item => `
          <div class="my-order-item">
            <strong>Item ${item.itemNumber}: ${item.name}</strong>
            <p>Quantity: ${item.quantity}</p>
            <p>Required date: ${item.requiredDate}</p>
          </div>
        `).join("")}
      </div>

      <p><strong>Total:</strong> ${order.total}</p>
    </article>
  `).join("");
}

renderMyOrders();
const orderForm = document.getElementById("orderForm");

if (orderForm) {
  orderForm.addEventListener("submit", async function(e) {
    e.preventDefault();

    const referenceImage = document.getElementById("referenceImage");
    const referenceFile = referenceImage?.files[0];

    let referenceImageUrl = "";

    // Upload reference image if selected
    if (referenceFile) {
      try {
        referenceImageUrl = await uploadReferenceImage(referenceFile);
      } catch (error) {
        alert("Reference image upload failed. Please try again.");
        return;
      }
    }

    // Customer details
    const name = document.getElementById("name")?.value.trim() || "";
    const phone = document.getElementById("phone")?.value.trim() || "";
    const area = document.getElementById("area")?.value.trim() || "Not specified";
    const customMessage = document.getElementById("custom")?.value.trim() || "None";

    // Final home delivery eligibility check
const deliveryTypeBeforeSubmit =
  document.getElementById("deliveryType")?.value || "";

if (deliveryTypeBeforeSubmit === "home_delivery") {
  const distanceText =
    document.getElementById("customerDistance")?.textContent || "";

  const distanceMatch = distanceText.match(/[\d.]+/);
  const distance = distanceMatch
    ? parseFloat(distanceMatch[0])
    : null;

  let hasThreeKgCake = false;

  document.querySelectorAll(".item-size").forEach(sizeInput => {
    const sizeText = sizeInput.value.trim().toLowerCase();
    const kgMatch = sizeText.match(/[\d.]+/);

    if (kgMatch && parseFloat(kgMatch[0]) >= 3) {
      hasThreeKgCake = true;
    }
  });

  if (
    distance !== null &&
    distance > 20 &&
    !hasThreeKgCake
  ) {
    alert(
      "Home delivery is not available for this order. " +
      "For locations more than 20 km away, a cake of 3 kg or above is required. " +
      "Please choose Pickup / Self Collection."
    );
    return;
  }
}
    // Get all order items
    const orderItems = document.querySelectorAll(".order-item");

    if (orderItems.length === 0) {
      alert("Please add at least one item.");
      return;
    }

    let itemsMessage = "";

      orderItems.forEach((item, index) => {
      const category = item.querySelector(".item-category")?.value || "";

      const quantity =
        item.querySelector(".item-quantity")?.value || "1";

      const requiredDate =
        item.querySelector(".item-date")?.value || "Not specified";

      itemsMessage += `\nItem ${index + 1}\n`;
      itemsMessage += `Category: ${
        category === "cake" ? "Cake" : "Bakery Item"
      }\n`;
      itemsMessage += `Quantity: ${quantity}\n`;
      itemsMessage += `Required Date: ${requiredDate}\n`;

      if (category === "cake") {

  const cakeVariants = item.querySelectorAll(".cake-variant");

  cakeVariants.forEach((cake, cakeIndex) => {

    const vegNonVeg =
      cake.querySelector(".item-veg-nonveg")?.value || "Not specified";

    const cakeTypeSelect =
  cake.querySelector(".item-cake-type");

const customCakeType =
  cake.querySelector(".item-custom-cake")?.value.trim();

const cakeType =
  cakeTypeSelect?.value === "custom"
    ? (customCakeType || "Custom Cake Type not specified")
    : (cakeTypeSelect?.value || "Not specified");

const flavourSelect =
  cake.querySelector(".item-flavour");

const customFlavour =
  cake.querySelector(".item-custom-flavour")?.value.trim();

const flavour =
  flavourSelect?.value === "custom"
    ? (customFlavour || "Custom Flavour not specified")
    : (flavourSelect?.value || "Not specified");
    const size =
      cake.querySelector(".item-size")?.value.trim() || "Not specified";

    itemsMessage += `Cake ${cakeIndex + 1}\n`;
    itemsMessage += `Veg / Non-Veg: ${vegNonVeg}\n`;
    itemsMessage += `Cake Type: ${cakeType}\n`;
    itemsMessage += `Flavour: ${flavour}\n`;
    itemsMessage += `Size: ${size}\n`;
  });
      } else if (category === "bakery") {

        const bakeryVariants =
  item.querySelectorAll(".bakery-variant");

bakeryVariants.forEach((bakery, bakeryIndex) => {

  const bakeryItemSelect =
    bakery.querySelector(".item-bakery-item");

  const customBakeryItem =
    bakery.querySelector(".item-custom-bakery")?.value.trim();

  const bakeryItem =
    bakeryItemSelect?.value === "custom"
      ? (customBakeryItem || "Custom Bakery Item not specified")
      : (bakeryItemSelect?.value || "Not specified");

  itemsMessage += `Bakery Item ${bakeryIndex + 1}: ${bakeryItem}\n`;
});
      }
    });
    const deliveryAddress =
  document.getElementById("deliveryAddress")?.value.trim() || "Not specified";
  const deliveryType =
  document.getElementById("deliveryType")?.value || "";

const deliveryTypeText =
  deliveryType === "home_delivery"
    ? "Home Delivery"
    : deliveryType === "pickup"
      ? "Pickup / Self Collection"
      : "Not specified";
  const customerLatitude =
  document.getElementById("customerLatitude")?.value || "";

const customerLongitude =
  document.getElementById("customerLongitude")?.value || "";

const customerLocationLink =
  customerLatitude && customerLongitude
    ? `https://www.google.com/maps?q=${customerLatitude},${customerLongitude}`
    : "Location not selected";
    let deliveryDistance = "Not calculated";

if (customerLatitude && customerLongitude) {
  const bakeryLat = 16.9635766;
  const bakeryLng = 82.2311842;

  const toRadians = (degrees) => degrees * Math.PI / 180;

  const earthRadius = 6371;

  const dLat = toRadians(customerLatitude - bakeryLat);
  const dLng = toRadians(customerLongitude - bakeryLng);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRadians(bakeryLat)) *
    Math.cos(toRadians(customerLatitude)) *
    Math.sin(dLng / 2) ** 2;

  const c =
    2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = earthRadius * c;

  deliveryDistance = `${distance.toFixed(2)} km`;
}
const today = new Date();

const datePart =
  today.getFullYear().toString() +
  String(today.getMonth() + 1).padStart(2, "0") +
  String(today.getDate()).padStart(2, "0");

const randomPart =
  Math.floor(1000 + Math.random() * 9000);

const trackId =
  `BF-${datePart}-${randomPart}`;

console.log("🟢 ORDER SAVE CODE RUNNING", trackId);

const requiredDates = Array.from(
  document.querySelectorAll(".order-item .item-date")
)
  .map(input => input.value)
  .filter(date => date);

const requiredDate =
  requiredDates.length > 0
    ? requiredDates.sort()[0]
    : null;
const customerName =
  document.getElementById("name")?.value.trim() || null;

const customerPhone =
  document.getElementById("phone")?.value.trim() || null;

const firstOrderItem =
  document.querySelector("#orderItems .order-item");

const orderCategory =
  firstOrderItem?.querySelector(".item-category")?.value || null;

const quantity =
  firstOrderItem?.querySelector(".item-quantity")?.value || null;

let orderItem = null;

if (orderCategory === "cake") {

  const cakeType =
    firstOrderItem
      ?.querySelector(".item-cake-type")?.value || "";

  const flavour =
    firstOrderItem
      ?.querySelector(".item-flavour")?.value || "";

  orderItem =
    `${cakeType || "Cake"} - ${flavour || "Flavour not specified"}`;

} else if (orderCategory === "bakery") {

  const bakeryItem =
    firstOrderItem
      ?.querySelector(".item-bakery-item")?.value || "";

  orderItem =
    bakeryItem || null;
}
// Get order amounts from the Order Summary
const orderSubtotal =
  Number(
    (document.getElementById("orderSubtotal")?.textContent || "0")
      .replace(/[^\d.]/g, "")
  ) || 0;

const deliveryCharge =
  Number(
    (document.getElementById("deliveryCharge")?.textContent || "0")
      .replace(/[^\d.]/g, "")
  ) || 0;

const orderTotal =
  Number(
    (document.getElementById("orderTotal")?.textContent || "0")
      .replace(/[^\d.]/g, "")
  ) || 0;

console.log("ORDER AMOUNTS:", {
  orderSubtotal,
  deliveryCharge,
  orderTotal
});
console.log("ORDER DATA BEFORE SUPABASE SAVE:", {
  customerName,
  customerPhone,
  orderCategory,
  quantity,
  orderItem,
  requiredDate,
  orderSubtotal,
  deliveryCharge,
  orderTotal
});
const { error: orderSaveError } = await fetch(
  `${SUPABASE_URL}/rest/v1/orders`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "apikey": SUPABASE_KEY,
      "Authorization": `Bearer ${SUPABASE_KEY}`,
      "Prefer": "return=minimal"
    },
    body: JSON.stringify({
  track_id: trackId,
  status: "WhatsApp Request Pending",

  customer_name: customerName,
  customer_phone: customerPhone,
  order_category: orderCategory,
  quantity: quantity,
  order_item: orderItem,

  order_subtotal: orderSubtotal,
  delivery_charge: deliveryCharge,
  order_total: orderTotal,
  required_date: requiredDate
})
  }
).then(async response => {

  if (!response.ok) {

    const errorText = await response.text();

    console.error(
      "ORDER SAVE SUPABASE ERROR:",
      response.status,
      errorText
    );

    throw new Error(
      `Supabase error ${response.status}: ${errorText}`
    );
  }

  return { error: null };

}).catch(error => {

  console.error(
    "Order save failed:",
    error
  );

  return { error };

});

if (orderSaveError) {
  console.error("Order save failed:", orderSaveError);
}
// OWNER NOTIFICATION
showOwnerNotification("New customer order received! 📦");
// =========================================
// REDUCE CAKE STOCK AFTER SUCCESSFUL ORDER
// =========================================

if (!orderSaveError) {

  orderItems.forEach(item => {

    const category =
      item.querySelector(".item-category")?.value || "";

    if (category !== "cake") return;

    const cakeVariants =
      item.querySelectorAll(".cake-variant");

    cakeVariants.forEach(cake => {

      const flavourSelect =
        cake.querySelector(".item-flavour");

      const customFlavour =
        cake.querySelector(".item-custom-flavour")?.value.trim();

      const flavour =
        flavourSelect?.value === "custom"
          ? customFlavour
          : flavourSelect?.value;

      const size =
        Number(
          cake.querySelector(".item-size")?.value || 0
        );

      if (flavour && size > 0) {

  const cakeType =
    cake.querySelector(".item-cool-normal")?.value || "";

  reduceCakeStock(
    flavour,
    size,
    cakeType
   );
}

    });

  });

}
    
const message =
`Hello My Home Bakery, I would like to place an order request.

Name: ${name}
Phone: ${phone}
Track ID: ${trackId}

${itemsMessage}
Delivery Type: ${deliveryTypeText}
${
  deliveryType === "home_delivery"
    ? `
Delivery Area: ${area}
Full Delivery Address: ${deliveryAddress}
Customer Location: ${customerLocationLink}
Delivery Distance: ${deliveryDistance} from bakery`
    : ""
}
Customization / Message: ${customMessage}`;

const imageInfo = referenceImageUrl
  ? `\nReference Image: ${referenceImageUrl}`
  : "";

const url =
  "https://wa.me/917780476392?text=" +
  encodeURIComponent(message + imageInfo);

// Open WhatsApp in a new tab; keep BakeFlow open.
window.open(url, "_blank");

// Remove an older confirmation box, if present.
document.getElementById("whatsappOrderConfirmation")?.remove();

const confirmationBox = document.createElement("div");
confirmationBox.id = "whatsappOrderConfirmation";

confirmationBox.style.cssText = `
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99999;
  width: min(420px, calc(100% - 24px));
  padding: 18px;
  background: white;
  color: #222;
  border: 1px solid #ddd;
  border-radius: 12px;
  box-shadow: 0 4px 20px #0003;
`;

confirmationBox.innerHTML = `
  <p style="font-weight:bold;margin-top:0">
    WhatsApp Order Request
  </p>
  <p>
    WhatsApp lo order message send chesina tarvatha
    ikkada confirmation click cheyyi.
  </p>
  <button id="confirmWhatsAppOrder"
    type="button"
    style="padding:10px;background:#198754;color:white;border:0;border-radius:6px;cursor:pointer;width:100%">
    I Sent the WhatsApp Message
  </button>
  <button id="cancelWhatsAppOrder"
    type="button"
    style="padding:10px;margin-top:8px;background:#eee;color:#222;border:0;border-radius:6px;cursor:pointer;width:100%">
    Cancel
  </button>
`;

document.body.appendChild(confirmationBox);

confirmationBox.querySelector("#cancelWhatsAppOrder")
  .addEventListener("click", () => {
    confirmationBox.remove();
  });

confirmationBox.querySelector("#confirmWhatsAppOrder")
  .addEventListener("click", async (event) => {
    const button = event.currentTarget;
    button.disabled = true;
    button.textContent = "Saving Order...";

    try {
      const response = await fetch(
        `${SUPABASE_URL}/rest/v1/orders`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "apikey": SUPABASE_KEY,
            "Authorization": `Bearer ${SUPABASE_KEY}`,
            "Prefer": "return=minimal"
          },
          body: JSON.stringify({
            track_id: trackId,
            status: "Order Received",
            customer_name: customerName,
            customer_phone: customerPhone,
            order_category: orderCategory,
            quantity: quantity,
            order_item: orderItem,
            order_subtotal: orderSubtotal,
            delivery_charge: deliveryCharge,
            order_total: orderTotal,
            required_date: requiredDate
          })
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Supabase error ${response.status}: ${errorText}`
        );
      }

      // Save to customer My Orders only after confirmation.
      saveOrderToMyOrders(trackId);

      // Notify owner only after the order is saved.
      showOwnerNotification(
        "Customer confirmed a WhatsApp order request! 📦"
      );

      // Reduce cake stock only after the confirmation step.
      orderItems.forEach(item => {
        const category =
          item.querySelector(".item-category")?.value || "";

        if (category !== "cake") return;

        item.querySelectorAll(".cake-variant").forEach(cake => {
          const flavourSelect =
            cake.querySelector(".item-flavour");

          const customFlavour =
            cake.querySelector(".item-custom-flavour")
              ?.value.trim();

          const flavour =
            flavourSelect?.value === "custom"
              ? customFlavour
              : flavourSelect?.value;

          const size = Number(
            cake.querySelector(".item-size")?.value || 0
          );

          const cakeType =
            cake.querySelector(".item-cool-normal")?.value || "";

          if (flavour && size > 0) {
            reduceCakeStock(flavour, size, cakeType);
          }
        });
      });

      alert("Order Confirmed! 🎉 Your order request has been received. Thank you for choosing My Home Bakery!");

      confirmationBox.remove();

    } catch (error) {
      console.error("Order save failed:", error);

      alert(
        "Order save avvaledu. Internet/Supabase connection check chesi malli try cheyyi."
      );

      button.disabled = false;
      button.textContent = "I Sent the WhatsApp Message";
    }
  });

  });
}
updateDashboardCounts();
populateDashboardChoices();
fillBakeryItems();
syncDashboardChoice();

updateDashboardCounts();
populateDashboardChoices();
fillBakeryItems();
syncDashboardChoice();


function setLanguage(language) {
  // Keep the website in English
  localStorage.setItem("language", "en");
  document.documentElement.lang = "en";

  const languageSelect = document.getElementById("languageSelect");
  if (languageSelect) {
    languageSelect.value = "en";
  }

  document.querySelectorAll("[data-en]").forEach(element => {
    element.textContent = element.getAttribute("data-en");
  });

  document.querySelectorAll("[data-en-placeholder]").forEach(element => {
    element.placeholder = element.getAttribute("data-en-placeholder");
  });

  const englishTranslations = {
    "#mainNav a[href='#home']": "Home",
    "#mainNav a[href='#dashboard']": "Dashboard",
    "#mainNav a[href='#cakes']": "Cakes",
    "#mainNav a[href='#bakery']": "Bakery",
    "#mainNav a[href='#order']": "Order",
    "#mainNav a[href='#my-orders']": "My Orders",
    "#mainNav .chat-open": "Ask BakeFlow 🤖"
  };

  Object.entries(englishTranslations).forEach(([selector, text]) => {
    const element = document.querySelector(selector);
    if (element) element.textContent = text;
  });
}

setLanguage("en");

function toggleMobileMenu(){
  document.getElementById("mainNav")?.classList.toggle("mobile-open");
}

document.querySelectorAll('#mainNav a, #mainNav .chat-open').forEach(el=>{
  el.addEventListener('click',()=>document.getElementById('mainNav')?.classList.remove('mobile-open'));
});
function previewReferenceImage(event) {
  const file = event.target.files[0];
  const preview = document.getElementById("referencePreview");

  if (file) {
    preview.src = URL.createObjectURL(file);
    preview.style.display = "block";
  }
}
async function uploadReferenceImage(file) {
  const formData = new FormData();

  formData.append("file", file);
  formData.append("upload_preset", "bakeflow_images");

  const response = await fetch(
    "https://api.cloudinary.com/v1_1/ciuqwecp/image/upload",
    {
      method: "POST",
      body: formData
    }
  );

  if (!response.ok) {
    throw new Error("Image upload failed");
  }

  const data = await response.json();
  return data.secure_url;
}

/* ===== Bakery card -> order form support ===== */
const bakeryPricing = {
  "Brownie": {kind:"piece", per:50},
  "Chocolawa": {kind:"piece", per:50},
  "Chocolava": {kind:"piece", per:50},
  "Donuts": {kind:"piece", per:40},
  "Dry Fruit Butter Biscuits": {kind:"weight", perGram:600/1000},
  "Butter Salt Biscuits": {kind:"weight", perGram:500/1000},
  "Milk Cake": {kind:"weight", perGram:100/250},
  "Plum Cake": {kind:"weight", perGram:150/250},
  "Sponge Cake": {kind:"weight", perGram:70/250},
  "Cup Cakes": {kind:"cupcake", per:10},
  "Bread": {kind:"weight", perGram:50/320},
  "Rusk (Toast)": {kind:"weight", perGram:50/250},
  "Cream Buns": {kind:"piece", per:20},
  "Fruit Buns": {kind:"piece", per:20},
  "Jam Buns": {kind:"piece", per:20}
};

function roundBakeryPrice(v){ return Math.round(Number(v) || 0); }

function getBakeryValue(card){
  const select = card?.querySelector('.bakery-size');
  let value = select ? select.value : '1';
  if(value === 'custom') value = card.querySelector('.bakery-custom')?.value || '1';
  return Number(value) || 1;
}

function getBakeryCardSummary(name){
  const card = document.querySelector('.bakery-product-card[data-bakery="'+CSS.escape(name)+'"]');
  const data = bakeryPricing[name];
  if(!data) return {name, value:1, unit:'pieces', price:0, label:'1 piece'};

  const value = card ? getBakeryValue(card) : 1;
  const isPiece = data.kind === 'piece' || data.kind === 'cupcake';
  const unit = isPiece ? 'pieces' : 'gms';
  const price = isPiece ? value * data.per : value * data.perGram;

  return {
    name,
    value,
    unit,
    price: roundBakeryPrice(price),
    label: value + ' ' + unit
  };
}

function updateBakeryPrice(el) {
  const card = el?.closest(".bakery-product-card");
  if (!card) return;

  const name = card.dataset.bakery;
  const data = bakeryPricing[name];

  if (!data) return;

  const customWrap = card.querySelector(".bakery-custom-wrap");

  if (customWrap) {
    customWrap.style.display =
      el.value === "custom" ? "block" : "none";
  }

  const summary = getBakeryCardSummary(name);

  const priceEl = card.querySelector(".bakery-live-price");

  if (priceEl) {
    priceEl.innerHTML =
      "Price: <strong>₹" + summary.price + "</strong>";
  }

  // STOCK CHECK
  const stockItem = ownerStockData.find(item =>
    (item.name || "").trim().toLowerCase() ===
    name.trim().toLowerCase()
  );

  if (!stockItem) return;

  const availableStock = Number(stockItem.quantity);
  const selectedQuantity = Number(summary.value);

  if (selectedQuantity > availableStock) {

    alert(
      `${name}: Only ${availableStock} ${stockItem.unit} available.`
    );

    // Reset to available stock
    if (availableStock > 0) {
      const select = card.querySelector(".bakery-size");

      if (select) {
        const matchingOption = [...select.options].find(
          option => Number(option.value) <= availableStock
        );

        if (matchingOption) {
          select.value = matchingOption.value;
        }
      }
    }
  }
}
function createBakeryOrderVariant(summary){
  const wrapper = document.createElement('div');
  wrapper.className = 'bakery-variant';
  wrapper.dataset.price = summary.price;
  wrapper.innerHTML = `
    <h4>Bakery Item</h4>
    <label>
      Bakery Item
      <input class="selected-bakery-item" value="${summary.name}" readonly>
    </label>
    <label>
      Size / Quantity
      <input class="selected-bakery-size" value="${summary.label}" readonly>
    </label>
    <p class="item-bakery-price">Price: ₹${summary.price}</p>
  `;
  return wrapper;
}
function bakerySummary(name, card) {
  const data = bakeryPricing[name];
  const value = getBakeryValue(card);
  const unit =
    data.kind === "piece" || data.kind === "cupcake"
      ? "pieces"
      : "gms";

  const price =
    data.kind === "piece" || data.kind === "cupcake"
      ? value * data.per
      : value * data.perGram;

  return {
    name,
    value,
    unit,
    price: roundBakeryPrice(price),
    label: value + " " + unit
  };
}
function orderBakeryItem(name){
  const summary = getBakeryCardSummary(name);
  const first = document.querySelector('#orderItems .order-item');
  if(!first) return;

  const category = first.querySelector('.item-category');
  if(category && category.value !== 'bakery'){
    category.value = 'bakery';
    toggleOrderItem(category);
  }

  const details = first.querySelector('.item-details');
  if(!details) return;

  // Keep already selected bakery items. Add the newly selected item instead of replacing it.
  let bakeryVariants = details.querySelector('.bakery-variants-list');
  if(!bakeryVariants){
    details.innerHTML = '';
    bakeryVariants = document.createElement('div');
    bakeryVariants.className = 'bakery-variants-list';
    details.appendChild(bakeryVariants);
  }

  const duplicate = [...bakeryVariants.querySelectorAll('.selected-bakery-item')]
    .some(input => input.value === summary.name);
  if(duplicate){
    alert(summary.name + ' is already selected.');
    return;
  }

  bakeryVariants.appendChild(createBakeryOrderVariant(summary));
  updateOrderPriceSummary();

  document.getElementById('order')?.scrollIntoView({behavior:'smooth', block:'start'});
}

function addAnotherOrderItem() {
  const container = document.getElementById("orderItems");
  if (!container) return;

  const items = container.querySelectorAll(".order-item");
  const newNumber = items.length + 1;

  const newItem = document.createElement("div");
  newItem.className = "order-item";
  newItem.dataset.item = newNumber;

  newItem.innerHTML = `
    <div class="item-header">
      <b>Item ${newNumber}</b>
    </div>

    <label>
      Order category
      <select class="item-category" required onchange="toggleOrderItem(this)">
        <option value="">Select category</option>
        <option value="cake">Cake</option>
        <option value="bakery">Bakery Item</option>
      </select>
    </label>

    <label>
      Quantity
      <input class="item-quantity" type="number" min="1" value="1">
    </label>

    <label>
      Required date
      <input class="item-date" type="date">
    </label>

    <div class="item-details"></div>
  `;

  container.appendChild(newItem);
}
function addBakeryItem(details, itemName) {

  const list = details.querySelector(".selected-bakery-items");

  if (!list) return;

  const existingItems = [...list.querySelectorAll(".selected-bakery-row")];

  const alreadyAdded = existingItems.some(row => {
    return row.querySelector(".bakery-item-name")?.textContent === itemName;
  });

  if (alreadyAdded) {
    alert(itemName + " is already selected.");
    return;
  }

  const row = document.createElement("div");

  row.className = "selected-bakery-row";

  row.innerHTML = `
    <div class="bakery-item-name">
      <b>${itemName}</b>
    </div>

    <label>
      Quantity
      <input
        type="number"
        class="bakery-item-quantity"
        min="1"
        value="1"
      >
    </label>

    <button
      type="button"
      class="btn secondary"
      onclick="this.closest('.selected-bakery-row').remove()">
      ✕ Remove
    </button>
  `;

  list.appendChild(row);
}
async function getCustomerLocation() {

  const status =
    document.getElementById("locationStatus");

  const area =
    document.getElementById("area")?.value.trim() || "";

  const deliveryAddress =
    document.getElementById("deliveryAddress")?.value.trim() || "";

  /*
   * If customer has already entered a delivery address,
   * use that address instead of current GPS location.
   */

  if (area || deliveryAddress) {

    status.textContent =
      "Delivery address entered. Using your delivery address instead of current location. 📍";

    await calculateAddressDistance();

    return;
  }


  /*
   * No delivery address entered.
   * Now allow current GPS location.
   */

  if (!navigator.geolocation) {

    status.textContent =
      "Location is not supported by this browser.";

    return;
  }

  status.textContent =
    "Getting your current location... 📍";


  navigator.geolocation.getCurrentPosition(

    function (position) {

      const latitude =
        position.coords.latitude;

      const longitude =
        position.coords.longitude;


      document.getElementById(
        "customerLatitude"
      ).value = latitude;

      document.getElementById(
        "customerLongitude"
      ).value = longitude;


      status.textContent =
        "Current location selected successfully. ✅";


      calculateBakeryDistance(
        latitude,
        longitude
      );

    },


    function (error) {

      if (error.code === 1) {

        status.textContent =
          "Location permission was denied. Please allow location access.";

      } else if (error.code === 2) {

        status.textContent =
          "Location unavailable. Please try again.";

      } else if (error.code === 3) {

        status.textContent =
          "Location request timed out. Please try again.";

      } else {

        status.textContent =
          "Unable to get your location. Please try again.";
      }

    },

    {
      enableHighAccuracy: true,
      maximumAge: 0,
      timeout: 15000
    }
  );
}

async function calculateAddressDistance() {

  const status =
    document.getElementById("locationStatus");

  const area =
    document.getElementById("area")?.value.trim() || "";

  const deliveryAddress =
    document.getElementById("deliveryAddress")?.value.trim() || "";

  if (!area && !deliveryAddress) {

    status.textContent =
      "Please enter your delivery address first.";

    return;
  }

  status.textContent =
    "Finding your delivery address... 📍";

  /*
   * Try multiple search queries.
   * This makes places such as Annavaram easier to find.
   */

  const queries = [];

  if (deliveryAddress && area) {
    queries.push(
      `${deliveryAddress}, ${area}, Andhra Pradesh, India`
    );
  }

  if (area) {
    queries.push(
      `${area}, Andhra Pradesh, India`
    );
  }

  if (deliveryAddress) {
    queries.push(
      `${deliveryAddress}, Andhra Pradesh, India`
    );
  }

  let foundLocation = null;

  try {

    for (const query of queries) {

      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&` +
        `q=${encodeURIComponent(query)}&` +
        `limit=1&` +
        `countrycodes=in&` +
        `addressdetails=1`,
        {
          headers: {
            "Accept": "application/json"
          }
        }
      );

      if (!response.ok) {
        continue;
      }

      const data =
        await response.json();

      if (data && data.length > 0) {

        foundLocation = data[0];
        break;
      }
    }

    if (!foundLocation) {

      status.textContent =
        "Address not found. Please enter the area/locality and address more clearly.";

      const distanceResult =
        document.getElementById("distanceResult");

      const customerDistance =
        document.getElementById("customerDistance");

      if (distanceResult) {
        distanceResult.style.display = "block";
      }

      if (customerDistance) {
        customerDistance.textContent =
          "Calculating...";
      }

      return;
    }

    const latitude =
      parseFloat(foundLocation.lat);

    const longitude =
      parseFloat(foundLocation.lon);

    if (
      Number.isNaN(latitude) ||
      Number.isNaN(longitude)
    ) {

      status.textContent =
        "Unable to read the selected address location.";

      return;
    }

    /*
     * Save coordinates for distance calculation
     * and WhatsApp order location.
     */

    document.getElementById("customerLatitude").value =
      latitude;

    document.getElementById("customerLongitude").value =
      longitude;

    status.textContent =
      "Address location found successfully. ✅";

    calculateBakeryDistance(
      latitude,
      longitude
    );

  } catch (error) {

    console.error(
      "Address geocoding error:",
      error
    );

    status.textContent =
      "Unable to find this address. Please try again.";
  }
}


function calculateBakeryDistance(
  customerLat,
  customerLng
) {

  const bakeryLat =
    16.9635766;

  const bakeryLng =
    82.2311842;

  const toRadians =
    (degrees) =>
      degrees * Math.PI / 180;

  const earthRadius =
    6371;

  const dLat =
    toRadians(
      customerLat - bakeryLat
    );

  const dLng =
    toRadians(
      customerLng - bakeryLng
    );

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRadians(bakeryLat)) *
    Math.cos(toRadians(customerLat)) *
    Math.sin(dLng / 2) ** 2;

  const c =
    2 *
    Math.atan2(
      Math.sqrt(a),
      Math.sqrt(1 - a)
    );

  const distance =
    earthRadius * c;

  const distanceResult =
    document.getElementById(
      "distanceResult"
    );

  const customerDistance =
    document.getElementById(
      "customerDistance"
    );

  if (
    distanceResult &&
    customerDistance
  ) {

    distanceResult.style.display =
      "block";

    customerDistance.textContent =
      `${distance.toFixed(2)} km`;

    checkHomeDeliveryAvailability();

    updateOrderPriceSummary();
  }
}


/*
 * When customer manually edits the address,
 * old GPS coordinates must be cleared.
 */

document
  .getElementById("deliveryAddress")
  ?.addEventListener(
    "input",
    function () {

      document.getElementById(
        "customerLatitude"
      ).value = "";

      document.getElementById(
        "customerLongitude"
      ).value = "";

      const customerDistance =
        document.getElementById(
          "customerDistance"
        );

      if (customerDistance) {
        customerDistance.textContent =
          "Calculating...";
      }

    }
  );


/*
 * When customer finishes entering the address,
 * calculate the manual address location.
 */

document
  .getElementById("deliveryAddress")
  ?.addEventListener(
    "blur",
    function () {

      calculateAddressDistance();

    }
  );


document
  .getElementById("area")
  ?.addEventListener(
    "blur",
    function () {

      const deliveryAddress =
        document.getElementById(
          "deliveryAddress"
        )?.value.trim();

      if (deliveryAddress) {

        calculateAddressDistance();

      } else if (
        this.value.trim()
      ) {

        calculateAddressDistance();

      }

    }
  );
function checkHomeDeliveryAvailability() {

  const deliveryTypeSelect =
    document.getElementById("deliveryType");

  if (!deliveryTypeSelect) return;

  const customerDistanceText =
    document.getElementById("customerDistance")?.textContent || "";

  const distanceMatch =
    customerDistanceText.match(/[\d.]+/);

  const distance =
    distanceMatch ? parseFloat(distanceMatch[0]) : null;

  let hasCake = false;
  let hasBakeryItem = false;
  let hasThreeKgCake = false;
  let hasBelowThreeKgCake = false;

  document.querySelectorAll("#orderItems .order-item").forEach(item => {

    const category =
      item.querySelector(".item-category")?.value || "";

    if (category === "cake") {

      hasCake = true;

      item.querySelectorAll(".item-size").forEach(sizeInput => {

        const sizeText =
          sizeInput.value.trim().toLowerCase();

        const kgMatch =
          sizeText.match(/[\d.]+/);

        if (kgMatch) {

          let sizeKg =
            parseFloat(kgMatch[0]);

          if (
            sizeText.includes("g") &&
            !sizeText.includes("kg")
          ) {
            sizeKg = sizeKg / 1000;
          }

          if (sizeKg >= 3) {
            hasThreeKgCake = true;
          } else {
            hasBelowThreeKgCake = true;
          }
        }
      });
    }

    if (category === "bakery") {
      hasBakeryItem = true;
    }
  });

  let homeDeliveryAllowed = false;
  let deliveryMessage = "";

  // =========================================
  // CAKE DELIVERY RULE
  // =========================================

  if (hasCake) {

    // Distance not selected yet
    if (distance === null) {

      homeDeliveryAllowed = false;

      deliveryMessage =
        "🚚 Select your location to check home delivery availability.";

    }

    // UP TO 20 KM → ANY CAKE WEIGHT
    else if (distance <= 20) {

      homeDeliveryAllowed = true;

      if (distance <= 3) {

        deliveryMessage =
          "🚚 Home delivery available for your cake. Delivery charge: ₹50.";

      } else if (distance <= 5) {

        deliveryMessage =
          "🚚 Home delivery available for your cake. Delivery charge: ₹100.";

      } else if (distance <= 10) {

        deliveryMessage =
          "🚚 Home delivery available for your cake. Delivery charge: ₹200.";

      } else {

        deliveryMessage =
          "🚚 Home delivery available for your cake. Delivery charge: ₹400.";

      }
    }

    // MORE THAN 20 KM
    else {

      // 3 KG OR ABOVE → OWNER CONFIRM
      if (hasThreeKgCake) {

        homeDeliveryAllowed = true;

        deliveryMessage =
          "📞 Your location is more than 20 km away. Home delivery is available for a 3 kg or above cake. The owner will discuss and confirm the delivery charge with you.";

      }

      // BELOW 3 KG → NO DELIVERY
      else {

        homeDeliveryAllowed = false;

        deliveryMessage =
          "⚠️ Home delivery is not available for cakes below 3 kg when the location is more than 20 km away. Please choose Pickup / Self Collection.";
      }
    }
  }

  // =========================================
  // BAKERY ITEM DELIVERY RULE
  // =========================================

  else if (hasBakeryItem) {

    if (distance === null) {

      homeDeliveryAllowed = false;

      deliveryMessage =
        "🚚 Bakery item home delivery is available up to 5 km. Please select your location.";

    } else if (distance <= 3) {

      homeDeliveryAllowed = true;

      deliveryMessage =
        "🚚 Bakery item home delivery available. Delivery charge: ₹50.";

    } else if (distance <= 5) {

      homeDeliveryAllowed = true;

      deliveryMessage =
        "🚚 Bakery item home delivery available. Delivery charge: ₹100.";

    } else {

      homeDeliveryAllowed = false;

      deliveryMessage =
        "⚠️ Bakery item home delivery is available only up to 5 km. Please choose Pickup / Self Collection.";
    }
  }

  // =========================================
  // NO ITEM
  // =========================================

  else {

    deliveryMessage =
      "🚚 Select your order item to check home delivery availability.";
  }

  // =========================================
  // HOME DELIVERY OPTION
  // =========================================

  const homeDeliveryOption =
    deliveryTypeSelect.querySelector(
      'option[value="home_delivery"]'
    );

  if (homeDeliveryOption) {

    homeDeliveryOption.disabled =
      !homeDeliveryAllowed;

    if (
      !homeDeliveryAllowed &&
      deliveryTypeSelect.value === "home_delivery"
    ) {

      deliveryTypeSelect.value = "pickup";

      toggleDeliveryType();

      alert(deliveryMessage);
    }
  }

  // =========================================
  // SHOW MESSAGE
  // =========================================

  let messageBox =
    document.getElementById("deliveryAvailabilityMessage");

  if (!messageBox) {

    messageBox =
      document.createElement("div");

    messageBox.id =
      "deliveryAvailabilityMessage";

    messageBox.style.marginTop =
      "10px";

    messageBox.style.padding =
      "12px";

    messageBox.style.borderRadius =
      "10px";

    messageBox.style.fontSize =
      "14px";

    deliveryTypeSelect.parentElement?.appendChild(
      messageBox
    );
  }

  messageBox.textContent =
    deliveryMessage;

  // Update separate delivery charge + total
  updateOrderPriceSummary();
}
function calculateDeliveryCharge() {

  const deliveryType =
    document.getElementById("deliveryType")?.value || "";

  if (deliveryType !== "home_delivery") {
    return 0;
  }

  const distanceText =
    document.getElementById("customerDistance")?.textContent || "";

  const distanceMatch =
    distanceText.match(/[\d.]+/);

  const distance =
    distanceMatch ? parseFloat(distanceMatch[0]) : null;

  if (distance === null) {
    return 0;
  }

  let hasCake = false;
  let hasBakeryItem = false;
  let hasThreeKgCake = false;

  document
    .querySelectorAll("#orderItems .order-item")
    .forEach(item => {

      const category =
        item.querySelector(".item-category")?.value || "";

      if (category === "cake") {

        hasCake = true;

        item.querySelectorAll(".item-size").forEach(sizeInput => {

          const sizeText =
            sizeInput.value.trim().toLowerCase();

          const kgMatch =
            sizeText.match(/[\d.]+/);

          if (kgMatch) {

            let sizeKg =
              parseFloat(kgMatch[0]);

            if (
              sizeText.includes("g") &&
              !sizeText.includes("kg")
            ) {
              sizeKg = sizeKg / 1000;
            }

            if (sizeKg >= 3) {
              hasThreeKgCake = true;
            }
          }
        });
      }

      if (category === "bakery") {
        hasBakeryItem = true;
      }
    });

  // =========================================
  // CAKE DELIVERY CHARGES
  // =========================================

  if (hasCake) {

    // UP TO 20 KM
    // ANY CAKE WEIGHT IS ELIGIBLE

    if (distance <= 3) {
      return 50;
    }

    if (distance <= 5) {
      return 100;
    }

    if (distance <= 10) {
      return 200;
    }

    if (distance <= 20) {
      return 400;
    }

    // MORE THAN 20 KM
    // ONLY 3 KG OR ABOVE
    if (hasThreeKgCake) {

      // Owner will discuss/confirm charge
      return 0;
    }

    return 0;
  }

  // =========================================
  // BAKERY ITEM DELIVERY CHARGES
  // =========================================

  if (hasBakeryItem) {

    if (distance <= 3) {
      return 50;
    }

    if (distance <= 5) {
      return 100;
    }

    return 0;
  }

  return 0;
}
function updateOrderPriceSummary() {

  let subtotal = 0;

  document
    .querySelectorAll("#orderItems .order-item")
    .forEach(item => {

      const category =
        item.querySelector(".item-category")?.value || "";

      // -----------------------------
      // CAKE PRICE
      // -----------------------------
      if (category === "cake") {

        const cakeVariants =
          item.querySelectorAll(".cake-variant");

        cakeVariants.forEach(variant => {

          const priceText =
            variant.querySelector(".item-price")?.textContent || "";

          const priceMatch =
            priceText.match(/[\d,]+/);

          if (priceMatch) {

            subtotal += parseInt(
              priceMatch[0].replace(/,/g, ""),
              10
            );

          }

        });

      }

      // -----------------------------
// BAKERY PRICE
// -----------------------------
if (category === "bakery") {

  const bakeryVariants =
    item.querySelectorAll(".bakery-variant");

  bakeryVariants.forEach(variant => {

    const price =
      Number(
        variant.dataset.price ||
        variant.querySelector(".item-bakery-price")?.value ||
        0
      );

    subtotal += price;

  });

}
    });


  // -----------------------------
  // DELIVERY CHARGE
  // -----------------------------

  const deliveryCharge =
    calculateDeliveryCharge();


  // -----------------------------
  // FINAL TOTAL
  // -----------------------------

  const total =
    subtotal + deliveryCharge;


  // -----------------------------
  // DISPLAY
  // -----------------------------

  const subtotalElement =
    document.getElementById("orderSubtotal");

  const deliveryElement =
    document.getElementById("deliveryCharge");

  const totalElement =
    document.getElementById("orderTotal");


  if (subtotalElement) {
    subtotalElement.textContent =
      "₹" + subtotal;
  }

  if (deliveryElement) {
    deliveryElement.textContent =
      "₹" + deliveryCharge;
  }

  if (totalElement) {
    totalElement.textContent =
      "₹" + total;
  }

}
function toggleDeliveryType() {

  const deliveryType =
    document.getElementById("deliveryType")?.value;

  const deliveryLocation =
    document.querySelector(".delivery-location");

  if (!deliveryLocation) return;

  const areaInput =
    document.getElementById("area");

  const addressInput =
    document.getElementById("deliveryAddress");

  const locationPicker =
    deliveryLocation.querySelector(".location-picker");

  const distanceResult =
    document.getElementById("distanceResult");

  if (deliveryType === "home_delivery") {

    if (areaInput) {
      areaInput.style.display = "";
      areaInput.required = true;
    }

    if (addressInput) {
      addressInput.style.display = "";
      addressInput.required = true;
    }

    if (locationPicker) {
      locationPicker.style.display = "";
    }

    if (distanceResult) {
      distanceResult.style.display = "block";
    }

  } else if (deliveryType === "pickup") {

    if (areaInput) {
      areaInput.style.display = "none";
      areaInput.required = false;
      areaInput.value = "";
    }

    if (addressInput) {
      addressInput.style.display = "none";
      addressInput.required = false;
      addressInput.value = "";
    }

    if (locationPicker) {
      locationPicker.style.display = "none";
    }

    if (distanceResult) {
      distanceResult.style.display = "none";
    }

  } else {

    if (areaInput) {
      areaInput.style.display = "";
      areaInput.required = false;
    }

    if (addressInput) {
      addressInput.style.display = "";
      addressInput.required = false;
    }

    if (locationPicker) {
      locationPicker.style.display = "";
    }

    if (distanceResult) {
      distanceResult.style.display = "none";
    }
  }
  updateOrderPriceSummary();
}
let customerDeliveryInterval = null;

async function trackOrder() {

  const trackId =
    document.getElementById("trackIdInput").value.trim();

  const result =
    document.getElementById("trackingResult");

  const statusText =
    document.getElementById("trackingStatus");

  if (!trackId) {
    alert("Please enter your Track ID.");
    return;
  }

  result.style.display = "block";
  statusText.textContent =
    "Checking your order... ⏳";

  try {

    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/orders?track_id=eq.${encodeURIComponent(trackId)}&select=track_id,status,delivery_latitude,delivery_longitude`,
      {
        method: "GET",

        headers: {
          "apikey": SUPABASE_KEY,
          "Authorization": `Bearer ${SUPABASE_KEY}`
        }
      }
    );

    if (!response.ok) {
      throw new Error("Unable to check order.");
    }

    const orders = await response.json();

    if (orders.length === 0) {
      return;
    }

updateDeliveryBoyMap(
  orders[0].delivery_latitude,
  orders[0].delivery_longitude
);
    const currentStatus =
  (orders[0].status || "").trim();

console.log("TRACKING STATUS:", currentStatus);
console.log(
  "OWNER LOCATION:",
  orders[0].delivery_latitude,
  orders[0].delivery_longitude
);
    statusText.textContent =
      `Current Status: ${currentStatus}`;


    /* ORDER TIMELINE */

    const statusOrder = [
      "Order Received",
      "Order Confirmed",
      "Preparing",
      "Ready for Delivery",
      "Out for Delivery",
      "Delivered"
    ];

    const currentIndex =
      statusOrder.indexOf(currentStatus);

    const trackingSteps =
      document.querySelectorAll(".tracking-step");

    trackingSteps.forEach((step, index) => {

      step.classList.remove("completed");
      step.classList.remove("active");

      if (index < currentIndex) {
        step.classList.add("completed");
      }

      if (index === currentIndex) {
        step.classList.add("active");
      }

    });


/* DELIVERY TRACKING */

const deliveryTracking =
  document.getElementById("deliveryTracking");

const deliveryDistanceText =
  document.getElementById("deliveryDistanceText");


if (currentStatus === "Out for Delivery") {

  deliveryTracking.style.display = "block";

  const distance =
    document.getElementById("customerDistance")?.textContent;

  if (distance) {

    deliveryDistanceText.textContent =
      `Distance from bakery: ${distance}`;

  } else {

    deliveryDistanceText.textContent =
      "Delivery person location is being updated...";

  }

  updateDeliveryBoyMap(
    orders[0].delivery_latitude,
    orders[0].delivery_longitude
  );

} else {

  deliveryTracking.style.display = "none";

}


/* START LIVE STATUS CHECKING */

if (customerDeliveryInterval) {
  clearInterval(customerDeliveryInterval);
}

customerDeliveryInterval =
  setInterval(
    () => refreshDeliveryLocation(trackId),
    5000
  );
      /*
       * Show current delivery location
       */
      updateDeliveryBoyMap(
  orders[0].delivery_latitude,
  orders[0].delivery_longitude
);

     /* REFRESH STATUS AND LOCATION EVERY 5 SECONDS */

if (customerDeliveryInterval) {
  clearInterval(customerDeliveryInterval);
}

customerDeliveryInterval = setInterval(
  () => refreshDeliveryLocation(trackId),
  5000
); 
  } catch (error) {

    console.error(
      "Tracking error:",
      error
    );

    statusText.textContent =
      "Unable to check order. Please try again.";
  }
}
async function refreshDeliveryLocation(trackId) {

  console.log("🔄 AUTO REFRESH RUNNING:", trackId);
  
  try {

    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/orders?track_id=eq.${encodeURIComponent(trackId)}&select=track_id,status,delivery_latitude,delivery_longitude`,
      {
        method: "GET",

        headers: {
          "apikey": SUPABASE_KEY,
          "Authorization": `Bearer ${SUPABASE_KEY}`
        }
      }
    );

    if (!response.ok) {
      throw new Error("Unable to refresh order.");
    }

    const orders = await response.json();

    if (orders.length === 0) {
      console.log("Track ID not found.");
      return;
    }

    const order = orders[0];

    const currentStatus =
      (order.status || "").trim();

    console.log(
      "LIVE CUSTOMER STATUS:",
      currentStatus
    );

    const statusText =
      document.getElementById("trackingStatus");

    if (statusText) {
      statusText.textContent =
        `Current Status: ${currentStatus}`;
    }

    const statusOrder = [
      "Order Received",
      "Order Confirmed",
      "Preparing",
      "Ready for Delivery",
      "Out for Delivery",
      "Delivered"
    ];

    const currentIndex =
      statusOrder.indexOf(currentStatus);

    const trackingSteps =
      document.querySelectorAll(".tracking-step");

    trackingSteps.forEach((step, index) => {

      step.classList.remove("completed");
      step.classList.remove("active");

      if (currentIndex >= 0) {

        if (index < currentIndex) {
          step.classList.add("completed");
        }

        if (index === currentIndex) {
          step.classList.add("active");
        }

      }

    });

    const deliveryTracking =
      document.getElementById("deliveryTracking");

    const deliveryDistanceText =
      document.getElementById("deliveryDistanceText");

    if (currentStatus === "Out for Delivery") {

      if (deliveryTracking) {
        deliveryTracking.style.display = "block";
      }

      updateDeliveryBoyMap(
        order.delivery_latitude,
        order.delivery_longitude
      );

      if (deliveryDistanceText) {
        deliveryDistanceText.textContent =
          "🚚 Delivery person location is being updated...";
      }

    } else {

      if (deliveryTracking) {
        deliveryTracking.style.display = "none";
      }

    }

  } catch (error) {

    console.error(
      "Live tracking refresh error:",
      error
    );

  }
}
function updateDeliveryBoyMap(latitude, longitude) {

  const map =
  document.getElementById("customerDeliveryMap");

  if (!map) return;

  if (
    latitude === null ||
    latitude === undefined ||
    longitude === null ||
    longitude === undefined
  ) {

    map.innerHTML = `
      <div style="
        display:flex;
        align-items:center;
        justify-content:center;
        height:100%;
        text-align:center;
        padding:20px;
      ">
        🚚 Delivery person's location is being updated...
      </div>
    `;

    return;
  }

  console.log(
    "DELIVERY PERSON LOCATION:",
    latitude,
    longitude
  );

  const lat = Number(latitude);
  const lng = Number(longitude);

  const delta = 0.01;

  const left = lng - delta;
  const right = lng + delta;
  const bottom = lat - delta;
  const top = lat + delta;

  const googleMapsUrl =
    `https://www.google.com/maps?q=${lat},${lng}`;

  const osmUrl =
    `https://www.openstreetmap.org/export/embed.html?bbox=${left},${bottom},${right},${top}&layer=mapnik&marker=${lat},${lng}`;

  map.innerHTML = `
    <div style="
      width:100%;
      height:100%;
      position:relative;
      overflow:hidden;
      border-radius:12px;
      background:#eee;
    ">

      <iframe
        src="${osmUrl}"
        width="100%"
        height="100%"
        style="border:0;"
        loading="lazy">
      </iframe>

      <a
        href="${googleMapsUrl}"
        target="_blank"
        rel="noopener noreferrer"
        style="
          position:absolute;
          bottom:15px;
          left:50%;
          transform:translateX(-50%);
          background:white;
          padding:10px 15px;
          border-radius:8px;
          text-decoration:none;
          font-weight:bold;
          box-shadow:0 2px 8px rgba(0,0,0,0.2);
          white-space:nowrap;
        ">
        🗺️ Open Delivery Location
      </a>

    </div>
  `;
}
async function updateOrderStatus() {

  const trackId =
    document.getElementById("ownerTrackId").value.trim();

  const newStatus =
    document.getElementById("ownerOrderStatus").value;

  const message =
    document.getElementById("ownerStatusMessage");

  if (!trackId) {
    message.textContent =
      "Please enter the Track ID.";
    return;
  }

  message.textContent =
    "Updating order status... ⏳";

  try {

    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/orders?track_id=eq.${encodeURIComponent(trackId)}`,
      {
        method: "PATCH",

        headers: {
          "Content-Type": "application/json",
          "apikey": SUPABASE_KEY,
          "Authorization": `Bearer ${SUPABASE_KEY}`,
          "Prefer": "return=minimal"
        },

        body: JSON.stringify({
          status: newStatus
        })
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText);
    }

    message.textContent =
      `Order status updated to "${newStatus}" ✅`;
// CUSTOMER NOTIFICATION
const notificationMessages = {
  "Order Received": "Your order has been received. 📦",
  "Order Confirmed": "Your order has been confirmed. ✅",
  "Preparing": "Your order is now being prepared. 👨‍🍳",
  "Ready for Delivery": "Your order is ready for delivery. 📦",
  "Out for Delivery": "Your order is out for delivery. 🚚",
  "Delivered": "Your order has been delivered. 🎉"
};

const customerMessage =
  notificationMessages[newStatus];

if (customerMessage) {
  showCustomerNotification(customerMessage);
}
      await loadOwnerOrders();
  } catch (error) {

    console.error("Status update error:", error);

    message.textContent =
      "Unable to update order status. ❌";
  }
}
let deliveryWatchId = null;


async function startDeliveryTracking() {

  const trackId =
    document.getElementById("ownerTrackId")?.value.trim();

  const status =
    document.getElementById("deliveryTrackingStatus");

  const accessToken =
    localStorage.getItem("ownerAccessToken");

  if (!accessToken) {
    alert("Please login as owner first.");
    return;
  }

  if (!trackId) {
    alert("Please enter the Track ID first.");
    return;
  }

  if (!navigator.geolocation) {
    status.textContent =
      "Location is not supported by this browser.";
    return;
  }

  status.textContent =
    "Getting delivery person's location... 📍";
    navigator.geolocation.getCurrentPosition(
  function(position) {
    console.log("Initial Delivery Location:", position.coords.latitude, position.coords.longitude);
  },
  function(error) {
    console.error("Initial Location Error:", error);
  },
  {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0
  }
);

  deliveryWatchId = navigator.geolocation.watchPosition(
    async function(position) {

      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      console.log(
        "Delivery Location:",
        latitude,
        longitude
      );

      try {

        const response = await fetch(
          `${SUPABASE_URL}/rest/v1/orders?track_id=eq.${encodeURIComponent(trackId)}`,
          {
            method: "PATCH",

            headers: {
              "Content-Type": "application/json",

              "apikey": SUPABASE_KEY,

              "Authorization":
                `Bearer ${accessToken}`,

              "Prefer": "return=representation"
            },

            body: JSON.stringify({
              delivery_latitude: latitude,
              delivery_longitude: longitude
            })
          }
        );

        if (!response.ok) {

          const errorText =
            await response.text();

          throw new Error(errorText);
        }

        status.textContent =
          `Live location sharing active. 📍 ${latitude.toFixed(5)}, ${longitude.toFixed(5)}`;

        document.getElementById(
          "stopDeliveryTrackingBtn"
        ).style.display = "inline-block";

      } catch (error) {

        console.error(
          "Delivery location update failed:",
          error
        );

        status.textContent =
          "Unable to update delivery location.";
      }

    },

    function(error) {
  console.error("GEOLOCATION ERROR CODE:", error.code);
  console.error("GEOLOCATION ERROR MESSAGE:", error.message);

  if (error.code === 1) {
    status.textContent = "Location permission denied. Please allow location access.";
  } else if (error.code === 2) {
    status.textContent = "Location unavailable. Please try again.";
  } else if (error.code === 3) {
    status.textContent = "Location request timed out. Please try again.";
  } else {
    status.textContent = "Unable to get delivery location.";
  }
},
    {
      enableHighAccuracy: true,
      maximumAge: 5000,
      timeout: 10000
    }
  );
}
function stopDeliveryTracking() {
  if (deliveryWatchId !== null) {
    navigator.geolocation.clearWatch(deliveryWatchId);
    deliveryWatchId = null;
  }

  const status =
    document.getElementById("deliveryTrackingStatus");

  if (status) {
    status.textContent = "Delivery tracking stopped.";
  }

  const stopBtn =
    document.getElementById("stopDeliveryTrackingBtn");

  if (stopBtn) {
    stopBtn.style.display = "none";
  }
}
async function submitReview() {

  const trackId =
    document.getElementById("reviewTrackId").value.trim();

  const customerName =
    document.getElementById("reviewName").value.trim();

  const rating =
    document.getElementById("reviewRating").value;

  const review =
    document.getElementById("reviewText").value.trim();

  const message =
    document.getElementById("reviewMessage");

  if (!trackId || !customerName || !rating || !review) {
    message.textContent =
      "Please fill all the fields.";
    return;
  }

  message.textContent =
    "Submitting your review... ⏳";

  try {

    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/reviews`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          "apikey": SUPABASE_KEY,
          "Authorization": `Bearer ${SUPABASE_KEY}`,
          "Prefer": "return=minimal"
        },

        body: JSON.stringify({
          track_id: trackId,
          customer_name: customerName,
          rating: Number(rating),
          review: review
        })
      }
    );

    if (!response.ok) {

      const errorText =
        await response.text();

      throw new Error(errorText);
    }

    message.textContent =
      "Thank you! Your review has been submitted. ⭐";

      await loadCustomerReviews();

    document.getElementById("reviewTrackId").value = "";
    document.getElementById("reviewName").value = "";
    document.getElementById("reviewRating").value = "";
    document.getElementById("reviewText").value = "";

  } catch (error) {

    console.error("Review submission error:", error);

    message.textContent =
      "Unable to submit review. Please try again.";
  }
}

async function loadCustomerReviews() {

  const reviewsList =
    document.getElementById("customerReviewsList");

  if (!reviewsList) return;

  reviewsList.innerHTML =
    "<p>Loading customer reviews... ⏳</p>";

  try {

    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/reviews?select=created_at,track_id,customer_name,rating,review&order=created_at.desc`,
      {
        method: "GET",
        headers: {
          "apikey": SUPABASE_KEY,
          "Authorization": `Bearer ${SUPABASE_KEY}`
        }
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText);
    }

    const reviews = await response.json();

    if (reviews.length === 0) {
      reviewsList.innerHTML =
        "<p>No reviews yet. Be the first to share your experience! ⭐</p>";
      return;
    }

    reviewsList.innerHTML = reviews.map(item => `
      <div class="customer-review-card">
        <div class="review-stars">
          ${"★".repeat(Number(item.rating) || 0)}${"☆".repeat(5 - (Number(item.rating) || 0))}
        </div>
        <h3>${item.customer_name || "Customer"}</h3>
        <p>${item.review || ""}</p>
      </div>
    `).join("");

  } catch (error) {

    console.error("Review loading error:", error);

    reviewsList.innerHTML =
      "<p>Unable to load reviews right now.</p>";
  }
}

async function loadOwnerCustomerReviews() {
  const reviewsList =
    document.getElementById("ownerCustomerReviewsList");

  if (!reviewsList) return;

  reviewsList.innerHTML = `
    <p>🔄 Loading reviews...</p>
  `;

  try {
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/reviews?select=id,created_at,track_id,customer_name,rating,review&order=created_at.desc`,
      {
        method: "GET",
        headers: {
          "apikey": SUPABASE_KEY,
          "Authorization": `Bearer ${SUPABASE_KEY}`
        }
      }
    );

    if (!response.ok) {
      const errorText = await response.text();

      console.error(
        "OWNER REVIEWS LOAD ERROR:",
        response.status,
        errorText
      );

      throw new Error(
        `Supabase error ${response.status}: ${errorText}`
      );
    }

    const reviews = await response.json();

if (!reviews || reviews.length === 0) {
  const currentLanguage = localStorage.getItem("language") || "en";

  reviewsList.innerHTML = `
    <p>${currentLanguage === "te"
      ? "⭐ కస్టమర్ రివ్యూస్ ఇంకా లేవు."
      : "⭐ No customer reviews found."}</p>
  `;
  return;
}

    reviewsList.innerHTML = reviews.map(item => {

      const rating =
        Number(item.rating) || 0;

      const stars =
        "⭐".repeat(
          Math.max(0, Math.min(5, rating))
        );

      const reviewDate =
        item.created_at
          ? new Date(item.created_at)
              .toLocaleDateString("en-IN")
          : "Date not available";

      return `
        <div class="owner-review-card">

          <h4>
            👤 ${item.customer_name || "Customer"}
          </h4>

          <p>
            ${stars}
          </p>

          <p>
            💬 ${item.review || "No review text"}
          </p>

          <small>
            🆔 Track ID:
            ${item.track_id || "N/A"}
          </small>

          <small>
            📅 ${reviewDate}
          </small>

        </div>
      `;

    }).join("");

  } catch (error) {

    console.error(
      "Owner reviews loading failed:",
      error
    );

    reviewsList.innerHTML = `
      <p>❌ Unable to load customer reviews.</p>
    `;
  }
}
// OWNER LOGIN

async function ownerLogin() {

  const email =
    document.getElementById("ownerEmail").value.trim();

  const password =
    document.getElementById("ownerPassword").value;

  const message =
    document.getElementById("ownerLoginMessage");

  if (!email || !password) {
    message.textContent =
      "Please enter email and password.";
    return;
  }

  message.textContent = "Logging in... ⏳";

  try {

    const response = await fetch(
      `${SUPABASE_URL}/auth/v1/token?grant_type=password`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          "apikey": SUPABASE_KEY
        },

        body: JSON.stringify({
          email: email,
          password: password
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.error_description ||
        data.msg ||
        "Login failed."
      );
    }

    localStorage.setItem(
      "ownerAccessToken",
      data.access_token
    );

    localStorage.setItem(
      "ownerRefreshToken",
      data.refresh_token
    );

    message.textContent =
      "Login successful! ✅";

    document.getElementById(
      "ownerLoginSection"
    ).style.display = "none";
    
    document.getElementById(
      "ownerLoggedInSection"
    ).style.display = "block";

loadOwnerOrders();
loadOwnerStock();

    document.getElementById(
  "ownerProtectedContent"
).style.display = "block";

document.getElementById(
  "ownerPaymentHistorySection"
).style.display = "block";

  } catch (error) {

    console.error("Owner login error:", error);

    message.textContent =
      "Login failed. Please check your email and password.";
  }
}


// OWNER LOGOUT

function ownerLogout() {

  localStorage.removeItem("ownerAccessToken");
  localStorage.removeItem("ownerRefreshToken");

  document.getElementById(
    "ownerLoginSection"
  ).style.display = "block";

  document.getElementById(
    "ownerLoggedInSection"
  ).style.display = "none";

  document.getElementById(
  "ownerProtectedContent"
).style.display = "none";

document.getElementById(
  "ownerPaymentHistorySection"
).style.display = "none";

  document.getElementById(
    "ownerLoginMessage"
  ).textContent = "";

  document.getElementById(
    "ownerEmail"
  ).value = "";

  document.getElementById(
    "ownerPassword"
  ).value = "";
}
async function loadCustomerReviews() {

  const reviewsList =
    document.getElementById("customerReviewsList");

  const averageRating =
    document.getElementById("averageRating");

  const averageStars =
    document.getElementById("averageStars");

  const reviewCount =
    document.getElementById("reviewCount");

  if (!reviewsList) return;

  try {

    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/reviews?select=created_at,track_id,customer_name,rating,review&order=created_at.desc`,
      {
        method: "GET",

        headers: {
          "apikey": SUPABASE_KEY,
          "Authorization": `Bearer ${SUPABASE_KEY}`
        }
      }
    );

    if (!response.ok) {
      throw new Error("Unable to load reviews.");
    }

    const reviews = await response.json();
const dashboardReviewsCount =
  document.getElementById("dashboardReviewsCount");

if (dashboardReviewsCount) {
  dashboardReviewsCount.textContent =
    reviews.length;
}
    /* NO REVIEWS */

    if (reviews.length === 0) {

      averageRating.textContent = "0.0 ⭐";
      averageStars.textContent = "☆☆☆☆☆";
      reviewCount.textContent = "Based on 0 reviews";

      reviewsList.innerHTML = `
        <p>No reviews yet. Be the first to share your experience! ⭐</p>
      `;

      return;
    }

    /* CALCULATE AVERAGE */

    const totalRating = reviews.reduce(
      (sum, item) => sum + Number(item.rating || 0),
      0
    );

    const average =
      totalRating / reviews.length;

    const roundedAverage =
      average.toFixed(1);

    averageRating.textContent =
      `${roundedAverage} ⭐`;

    /* STAR DISPLAY */

    const fullStars =
      Math.round(average);

    averageStars.textContent =
      "★".repeat(fullStars) +
      "☆".repeat(5 - fullStars);

    reviewCount.textContent =
      `Based on ${reviews.length} review${reviews.length === 1 ? "" : "s"}`;

    /* DISPLAY REVIEWS */

    reviewsList.innerHTML =
      reviews.map(item => {

        const rating =
          Number(item.rating || 0);

        const stars =
          "★".repeat(rating) +
          "☆".repeat(5 - rating);

        return `
          <div class="customer-review-card">

            <div class="review-stars">
              ${stars}
            </div>

            <h3>
              ${item.customer_name || "Customer"}
            </h3>

            <p>
              ${item.review || ""}
            </p>

          </div>
        `;

      }).join("");

  } catch (error) {

    console.error(
      "Review loading error:",
      error
    );

    reviewsList.innerHTML = `
      <p>Unable to load reviews right now.</p>
    `;
  }
}

loadCustomerReviews();

async function loadOwnerOrders() {

  const container =
    document.getElementById("ownerOrdersContainer");

  if (!container) return;

  try {

    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/orders?select=*&order=created_at.desc`,
      {
        method: "GET",
        headers: {
          "apikey": SUPABASE_KEY,
          "Authorization": `Bearer ${SUPABASE_KEY}`
        }
      }
    );

    const responseText = await response.text();

    console.log("OWNER ORDERS STATUS:", response.status);
    console.log("OWNER ORDERS RESPONSE:", responseText);

    if (!response.ok) {
      throw new Error(responseText);
    }

    const orders = JSON.parse(responseText);

    window.ownerOrdersData = orders;

    loadBestSellingProducts();
    loadSalesAnalytics();

    renderOrderHistory();
    renderOwnerBookingCalendar();
    renderOwnerCustomerManagement();


const totalOrdersElement =
  document.getElementById("ownerTotalOrders");

if (totalOrdersElement) {
  totalOrdersElement.textContent = orders.length;
}
    updateOwnerDashboardStats(orders);

    if (orders.length === 0) {

      container.innerHTML = `
        <p>No customer orders found.</p>
      `;

      return;
    }

    container.innerHTML = orders.map(order => {

  const status =
    order.status || "Order Received";

  const statusClass =
    status.toLowerCase()
      .replace(/\s+/g, "-");

  const deliveryLocation =
    order.delivery_latitude &&
    order.delivery_longitude
      ? `${order.delivery_latitude}, ${order.delivery_longitude}`
      : "Not available";

  return `
    <div
      class="owner-order-card"
      data-track-id="${order.track_id || ""}"
      data-status="${status}"
    >

      <h4>
        🆔 ${order.track_id || "No Track ID"}
      </h4>
    <p>
  <strong>🚚 Delivery Type:</strong>
  ${order.delivery_type === "home_delivery"
    ? "Home Delivery"
    : "Pickup / Self Collection"}
</p>

<p>
  <strong>📍 Delivery Area:</strong>
  ${order.delivery_area || "N/A"}
</p>

<p>
  <strong>🏠 Address:</strong>
  ${order.delivery_address || "N/A"}
</p>

<p>
  <strong>📏 Distance:</strong>
  ${order.delivery_distance || "N/A"}
</p>

<p>
  <strong>💰 Delivery Charge:</strong>
  ₹${order.delivery_charge || 0}
</p>

<p>
  <strong>📍 Delivery Location:</strong>
  ${
    order.delivery_latitude && order.delivery_longitude
      ? `${order.delivery_latitude}, ${order.delivery_longitude}`
      : "Location not available"
  }
</p>  
<p>
  <strong>🚚 Delivery Type:</strong>
  ${order.delivery_type === "home_delivery"
    ? "Home Delivery"
    : "Pickup / Self Collection"}
</p>

<p>
  <strong>📍 Delivery Area:</strong>
  ${order.delivery_area || "N/A"}
</p>

<p>
  <strong>🏠 Address:</strong>
  ${order.delivery_address || "N/A"}
</p>

<p>
  <strong>📏 Distance:</strong>
  ${order.delivery_distance || "N/A"}
</p>

<p>
  <strong>💰 Delivery Charge:</strong>
  ₹${order.delivery_charge || 0}
</p>
      <p>
        <strong>👤 Customer:</strong>
        ${order.customer_name || "N/A"}
      </p>

      <p>
        <strong>📞 Phone:</strong>
        ${order.customer_phone || "N/A"}
      </p>

      <p>
        <strong>📦 Category:</strong>
        ${order.order_category || "N/A"}
      </p>

      <p>
        <strong>🍰 Order Item:</strong>
        ${order.order_item || "N/A"}
      </p>

      <p>
        <strong>🔢 Quantity:</strong>
        ${order.quantity || "N/A"}
      </p>

      <p>
        <strong>📍 Delivery Area:</strong>
        ${order.delivery_area || "N/A"}
      </p>

      <p>
        <strong>🌐 Delivery Location:</strong>
        ${deliveryLocation}
      </p>

      <p>
        <strong>💳 Payment Method:</strong>
        ${order.payment_method || "Not Updated"}
      </p>

      <p>
        <strong>💰 Payment Status:</strong>
        ${order.payment_status || "Pending"}
      </p>

      <p>
        <strong>🚚 Order Status:</strong>

        <span class="owner-order-status ${statusClass}">
          ${status}
        </span>
      </p>

      <p>
        <strong>📅 Order Date:</strong>
        ${
          order.created_at
            ? new Date(order.created_at).toLocaleString()
            : "N/A"
        }
      </p>

      <button
        type="button"
        class="btn secondary"
        onclick="selectOwnerOrder('${order.track_id || ""}')">
        📋 Manage Order
      </button>

    </div>
  `;

}).join("");
  } catch (error) {

    console.error(
      "Owner orders loading error:",
      error
    );

    container.innerHTML = `
      <p>Unable to load customer orders.</p>
    `;
  }
}
function renderOwnerCustomerManagement() {
  const container =
    document.getElementById("ownerCustomerContainer");

  const countElement =
    document.getElementById("ownerCustomerCount");

  if (!container) return;

  const orders =
    window.ownerOrdersData || [];

  const customersMap = new Map();

  orders.forEach(order => {
    const phone =
      order.customer_phone || "";

    const name =
  order.customer_name || "";

if (!name && !order.customer_phone) {
  return;
}

    const key =
      phone || name;

    if (!customersMap.has(key)) {
      customersMap.set(key, {
        name: name,
        phone: phone,
        orders: 0,
        totalSpent: 0,
        lastOrderDate: "",
        recentOrder: ""
      });
    }

    const customer =
      customersMap.get(key);

    customer.orders += 1;

    customer.totalSpent +=
      Number(order.order_total) || 0;

    if (order.order_item) {
      customer.recentOrder =
        order.order_item;
    }

    if (order.created_at) {
      if (
        !customer.lastOrderDate ||
        new Date(order.created_at) >
        new Date(customer.lastOrderDate)
      ) {
        customer.lastOrderDate =
          order.created_at;
      }
    }
  });

  const customers =
    Array.from(customersMap.values());

  if (countElement) {
    countElement.textContent =
      customers.length;
  }

  if (customers.length === 0) {
    container.innerHTML = `
      <div class="owner-customer-empty">
        <p>👥 No customers found.</p>
      </div>
    `;
    return;
  }

  container.innerHTML =
    customers.map(customer => `
      <div class="owner-customer-card">

        <div class="owner-customer-card-header">
          <h4>👤 ${customer.name}</h4>
        </div>

        <p>
          📞 <strong>Phone:</strong>
          ${customer.phone || "Not available"}
        </p>

        <p>
          📦 <strong>Total Orders:</strong>
          ${customer.orders}
        </p>

        <p>
          🍰 <strong>Recent Order:</strong>
          ${customer.recentOrder || "Not available"}
        </p>

        <p>
          💰 <strong>Total Spent:</strong>
          ₹${customer.totalSpent.toFixed(2)}
        </p>

        <p>
          📅 <strong>Last Order:</strong>
          ${
            customer.lastOrderDate
              ? new Date(
                  customer.lastOrderDate
                ).toLocaleDateString("en-IN")
              : "Not available"
          }
        </p>

      </div>
    `).join("");
}
async function loadCustomerReviews() {
  const reviewsList =
    document.getElementById("customerReviewsList");

  if (!reviewsList) return;

  reviewsList.innerHTML = `
    <p>🔄 Loading customer reviews...</p>
  `;

  try {
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/reviews?select=id,created_at,track_id,customer_name,rating,review&order=created_at.desc`,
      {
        method: "GET",
        headers: {
          "apikey": SUPABASE_KEY,
          "Authorization": `Bearer ${SUPABASE_KEY}`
        }
      }
    );

    if (!response.ok) {
      const errorText = await response.text();

      console.error(
        "REVIEWS LOAD ERROR:",
        response.status,
        errorText
      );

      throw new Error(
        `Supabase error ${response.status}: ${errorText}`
      );
    }

    const reviews = await response.json();

    if (!reviews || reviews.length === 0) {
      reviewsList.innerHTML = `
        <div class="owner-review-empty">
          <p>⭐ No customer reviews found.</p>
        </div>
      `;
      return;
    }

    reviewsList.innerHTML = reviews.map(item => {

      const rating =
        Number(item.rating) || 0;

      const stars =
        "⭐".repeat(Math.max(0, Math.min(5, rating)));

      const reviewDate =
        item.created_at
          ? new Date(item.created_at)
              .toLocaleDateString("en-IN")
          : "Date not available";

      return `
        <div class="owner-review-card">

          <div class="owner-review-header">
            <h4>
              👤 ${item.customer_name || "Customer"}
            </h4>

            <span>
              ${stars}
            </span>
          </div>

          <p>
            💬 ${item.review || "No review text"}
          </p>

          <small>
            🆔 Track ID:
            ${item.track_id || "N/A"}
          </small>

          <small>
            📅 ${reviewDate}
          </small>

        </div>
      `;

    }).join("");

  } catch (error) {

    console.error(
      "Failed to load customer reviews:",
      error
    );

    reviewsList.innerHTML = `
      <div class="owner-review-error">
        <p>❌ Unable to load customer reviews.</p>
        <small>Check the browser console for details.</small>
      </div>
    `;
  }
}
function filterOwnerCustomers() {
  const searchInput =
    document.getElementById("ownerCustomerSearch");

  const container =
    document.getElementById("ownerCustomerContainer");

  if (!searchInput || !container) return;

  const searchText =
    searchInput.value.trim().toLowerCase();

  const orders =
    window.ownerOrdersData || [];

  const customersMap = new Map();

  orders.forEach(order => {
    const phone =
      order.customer_phone || "";

    const name =
  order.customer_name || "";

if (!name && !order.customer_phone) {
  return;
}

    const key =
      phone || name;

    if (!customersMap.has(key)) {
      customersMap.set(key, {
        name: name,
        phone: phone,
        orders: 0,
        totalSpent: 0,
        lastOrderDate: "",
        recentOrder: ""
      });
    }

    const customer =
      customersMap.get(key);

    customer.orders += 1;

    customer.totalSpent +=
      Number(order.order_total) || 0;

    if (order.order_item) {
      customer.recentOrder =
        order.order_item;
    }

    if (
      order.created_at &&
      (
        !customer.lastOrderDate ||
        new Date(order.created_at) >
        new Date(customer.lastOrderDate)
      )
    ) {
      customer.lastOrderDate =
        order.created_at;
    }
  });

  const customers =
    Array.from(customersMap.values());

  const filteredCustomers =
    customers.filter(customer =>
      customer.name.toLowerCase().includes(searchText) ||
      customer.phone.toLowerCase().includes(searchText)
    );

  if (filteredCustomers.length === 0) {
    container.innerHTML = `
      <div class="owner-customer-empty">
        <p>🔍 No matching customer found.</p>
      </div>
    `;
    return;
  }

  container.innerHTML =
    filteredCustomers.map(customer => `
      <div class="owner-customer-card">

        <div class="owner-customer-card-header">
          <h4>👤 ${customer.name}</h4>
        </div>

        <p>
          📞 <strong>Phone:</strong>
          ${customer.phone || "Not available"}
        </p>

        <p>
          📦 <strong>Total Orders:</strong>
          ${customer.orders}
        </p>

        <p>
          🍰 <strong>Recent Order:</strong>
          ${customer.recentOrder || "Not available"}
        </p>

        <p>
          💰 <strong>Total Spent:</strong>
          ₹${customer.totalSpent.toFixed(2)}
        </p>

        <p>
          📅 <strong>Last Order:</strong>
          ${
            customer.lastOrderDate
              ? new Date(
                  customer.lastOrderDate
                ).toLocaleDateString("en-IN")
              : "Not available"
          }
        </p>

      </div>
    `).join("");
}
// ==========================================
// OWNER CAKE BOOKING CALENDAR
// ==========================================

let ownerCalendarDate = new Date();

function changeOwnerCalendarMonth(monthChange) {

  ownerCalendarDate.setMonth(
    ownerCalendarDate.getMonth() + monthChange
  );

  renderOwnerBookingCalendar();
}

function renderOwnerBookingCalendar() {

  const monthElement =
    document.getElementById("ownerCalendarMonth");

  const calendarGrid =
    document.getElementById("ownerBookingCalendarGrid");

  if (!monthElement || !calendarGrid) return;

  const year =
    ownerCalendarDate.getFullYear();

  const month =
    ownerCalendarDate.getMonth();

  const monthName =
    ownerCalendarDate.toLocaleString("en-IN", {
      month: "long",
      year: "numeric"
    });

  monthElement.textContent =
    monthName;

  // Get first day of month
  const firstDay =
    new Date(year, month, 1).getDay();

  // Get number of days
  const daysInMonth =
    new Date(year, month + 1, 0).getDate();

  let calendarHTML = "";

  // Empty spaces before first day
  for (let i = 0; i < firstDay; i++) {

    calendarHTML += `
      <div class="owner-calendar-day empty"></div>
    `;
  }

  const orders =
    window.ownerOrdersData || [];

  for (let day = 1; day <= daysInMonth; day++) {

    const dateString =
      `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

    // Find orders having this required date
    const dayBookings =
      orders.filter(order => {

        if (!order.required_date) {
          return false;
        }

        return order.required_date === dateString;
      });

    const bookingCount =
      dayBookings.length;

    calendarHTML += `
      <button
        type="button"
        class="owner-calendar-day ${bookingCount > 0 ? "has-booking" : ""}"
        onclick="showOwnerBookingDate('${dateString}')">

        <span class="owner-calendar-date">
          ${day}
        </span>

        ${
          bookingCount > 0
            ? `
              <span class="owner-calendar-booking-count">
                🎂 ${bookingCount}
              </span>
            `
            : ""
        }

      </button>
    `;
  }

  calendarGrid.innerHTML =
    calendarHTML;
}
function showOwnerBookingDate(dateString) {

  const selectedDateElement =
    document.getElementById("ownerSelectedBookingDate");

  if (!selectedDateElement) return;

  const orders =
    window.ownerOrdersData || [];

  const bookings =
    orders.filter(order =>
      order.required_date === dateString
    );

  if (bookings.length === 0) {

    selectedDateElement.innerHTML = `
      <div class="owner-booking-empty">
        <h4>📅 ${dateString}</h4>
        <p>No bookings for this date.</p>
      </div>
    `;

    return;
  }

  selectedDateElement.innerHTML = `
    <div class="owner-booking-details">

      <h4>🎂 Bookings for ${dateString}</h4>

      ${bookings.map(order => `
        <div class="owner-booking-card">

          <p>
            <strong>🆔 Track ID:</strong>
            ${order.track_id || "N/A"}
          </p>

          <p>
            <strong>👤 Customer:</strong>
            ${order.customer_name || "N/A"}
          </p>

          <p>
            <strong>🍰 Order:</strong>
            ${order.order_item || "N/A"}
          </p>

          <p>
            <strong>🔢 Quantity:</strong>
            ${order.quantity || "N/A"}
          </p>

          <p>
            <strong>🚚 Status:</strong>
            ${order.status || "Order Received"}
          </p>

        </div>
      `).join("")}

    </div>
  `;
}
function updateOwnerDashboardStats(orders) {

  const today = new Date();

  const todayOrders = orders.filter(order => {

    if (!order.created_at) return false;

    const orderDate = new Date(order.created_at);

    return (
      orderDate.getFullYear() === today.getFullYear() &&
      orderDate.getMonth() === today.getMonth() &&
      orderDate.getDate() === today.getDate()
    );

  });

  const pendingOrders = orders.filter(order => {

    return ![
      "Delivered",
      "Cancelled"
    ].includes(order.status);

  });

  const deliveredOrders = orders.filter(order => {

    return order.status === "Delivered";

  });

  // =========================================
  // REVENUE TRACKING
  // =========================================

  const totalRevenue =
    orders.reduce((sum, order) => {
      return sum + Number(order.order_total || 0);
    }, 0);

  const todayRevenue =
    todayOrders.reduce((sum, order) => {
      return sum + Number(order.order_total || 0);
    }, 0);

  const paidOrders =
    orders.filter(order =>
      (order.payment_status || "").toLowerCase() === "paid"
    );

  const totalRevenueElement =
    document.getElementById("ownerTotalRevenue");

  const todayRevenueElement =
    document.getElementById("ownerTodayRevenue");

  const paidOrdersElement =
    document.getElementById("ownerPaidOrders");

  if (totalRevenueElement) {
    totalRevenueElement.textContent =
      "₹" + totalRevenue.toLocaleString("en-IN");
  }

  if (todayRevenueElement) {
    todayRevenueElement.textContent =
      "₹" + todayRevenue.toLocaleString("en-IN");
  }

  if (paidOrdersElement) {
    paidOrdersElement.textContent =
      paidOrders.length;
  }
  const todayOrdersElement =
    document.getElementById("todayOrdersCount");

  const pendingOrdersElement =
    document.getElementById("pendingOrdersCount");

  const deliveredOrdersElement =
    document.getElementById("deliveredOrdersCount");


  if (todayOrdersElement) {

    todayOrdersElement.textContent =
      todayOrders.length;

  }

  if (pendingOrdersElement) {

    pendingOrdersElement.textContent =
      pendingOrders.length;

  }

  if (deliveredOrdersElement) {

    deliveredOrdersElement.textContent =
      deliveredOrders.length;

  }

}
  // =========================================
  // EXPENSE & PROFIT / LOSS
  // =========================================

  function calculateOwnerProfitLoss() {

    const expenseInput =
      document.getElementById("ownerExpenseAmount");

    const expenseElement =
      document.getElementById("ownerTotalExpenses");

    const profitLossElement =
      document.getElementById("ownerProfitLoss");

    const messageElement =
      document.getElementById("ownerProfitLossMessage");

    if (!expenseInput || !expenseElement || !profitLossElement) {
      return;
    }

    const expense =
      Number(expenseInput.value) || 0;

    const revenue =
      Number(
        document
          .getElementById("ownerTotalRevenue")
          ?.textContent
          .replace(/[^\d.]/g, "")
      ) || 0;

    const profitLoss =
      revenue - expense;

    expenseElement.textContent =
      "₹" + expense.toLocaleString("en-IN");

    profitLossElement.textContent =
      "₹" + Math.abs(profitLoss).toLocaleString("en-IN");

    if (profitLoss >= 0) {

      profitLossElement.textContent =
        "₹" + profitLoss.toLocaleString("en-IN");

      if (messageElement) {
        messageElement.textContent =
          "📈 Profit";
      }

    } else {

      profitLossElement.textContent =
        "₹" + Math.abs(profitLoss).toLocaleString("en-IN");

      if (messageElement) {
        messageElement.textContent =
          "📉 Loss";
      }
    }
  }
function selectOwnerOrder(trackId) {

  const ownerTrackId =
    document.getElementById("ownerTrackId");

  if (ownerTrackId) {
    ownerTrackId.value = trackId;
  }

  const ownerStatus =
    document.getElementById("ownerOrderStatus");

  if (ownerStatus) {
    ownerStatus.focus();
  }

  alert(`Order ${trackId} selected. You can update the status now.`);
}
function filterOwnerOrders() {

  const searchInput =
    document.getElementById("ownerOrderSearch");

  const filterSelect =
    document.getElementById("ownerOrderFilter");

  const container =
    document.getElementById("ownerOrdersContainer");

  if (
    !searchInput ||
    !filterSelect ||
    !container
  ) {
    return;
  }

  const searchText =
    searchInput.value
      .trim()
      .toLowerCase();

  const selectedStatus =
    filterSelect.value;

  const orders =
    window.ownerOrdersData || [];

  const filteredOrders =
    orders.filter(order => {

      const trackId =
        (order.track_id || "")
          .toLowerCase();

      const status =
        order.status ||
        "Order Received";

      const matchesSearch =
        trackId.includes(searchText);

      const matchesStatus =
        selectedStatus === "all" ||
        status === selectedStatus;

      return (
        matchesSearch &&
        matchesStatus
      );

    });


  if (filteredOrders.length === 0) {

    container.innerHTML = `
      <div class="owner-order-card">
        <p>🔍 No matching orders found.</p>
      </div>
    `;

    return;
  }


  container.innerHTML =
    filteredOrders.map(order => {

      const status =
        order.status ||
        "Order Received";

      const statusClass =
        status.toLowerCase()
          .replace(/\s+/g, "-");

      return `
        <div
          class="owner-order-card"
          data-track-id="${order.track_id || ""}"
          data-status="${status}"
        >

          <h4>
            🆔 ${order.track_id || "No Track ID"}
          </h4>

          <p>
            <strong>Status:</strong>

            <span class="owner-order-status ${statusClass}">
              ${status}
            </span>
          </p>

          <p>
            <strong>📅 Order Date:</strong>
            ${
              order.created_at
                ? new Date(order.created_at).toLocaleString()
                : "N/A"
            }
          </p>

          <button
            type="button"
            class="btn secondary"
            onclick="selectOwnerOrder('${order.track_id || ""}')">
            📋 Manage Order
          </button>

        </div>
      `;

    }).join("");

}
// =================================
// OWNER ORDER HISTORY
// =================================

let ownerOrderHistoryData = [];

function renderOrderHistory() {

  const container =
    document.getElementById("ownerOrderHistoryContainer");

  const count =
    document.getElementById("ownerOrderHistoryCount");

  if (!container) return;

  const orders =
    window.ownerOrdersData || [];

  // Only Delivered orders go to Order History
  ownerOrderHistoryData =
    orders.filter(order =>
      (order.status || "").trim() === "Delivered"
    );

  if (count) {
    count.textContent =
      ownerOrderHistoryData.length;
  }

  if (ownerOrderHistoryData.length === 0) {

    container.innerHTML = `
      <div class="owner-order-history-empty">
        <p>📜 No completed orders yet.</p>
      </div>
    `;

    return;
  }

  container.innerHTML =
    ownerOrderHistoryData.map(order => {

      return `
        <div class="owner-order-history-card">

          <h4>
            🆔 ${order.track_id || "No Track ID"}
          </h4>

          <p>
            <strong>👤 Customer:</strong>
            ${order.customer_name || "N/A"}
          </p>

          <p>
            <strong>📞 Phone:</strong>
            ${order.customer_phone || "N/A"}
          </p>

          <p>
            <strong>📅 Order Date:</strong>
            ${
              order.created_at
                ? new Date(order.created_at).toLocaleString()
                : "N/A"
            }
          </p>

          <p>
            <strong>📦 Status:</strong>
            <span class="owner-order-status delivered">
              Delivered
            </span>
          </p>

          <p>
            <strong>📍 Delivery Area:</strong>
            ${order.delivery_area || "N/A"}
          </p>

          <p>
            <strong>💳 Payment Status:</strong>
            ${order.payment_status || "N/A"}
          </p>

        </div>
      `;

    }).join("");
}


function filterOrderHistory() {

  const searchInput =
    document.getElementById("orderHistorySearch");

  const filterSelect =
    document.getElementById("orderHistoryFilter");

  const container =
    document.getElementById("ownerOrderHistoryContainer");

  if (
    !searchInput ||
    !filterSelect ||
    !container
  ) {
    return;
  }

  const searchText =
    searchInput.value
      .trim()
      .toLowerCase();

  const selectedStatus =
    filterSelect.value;

  const filteredOrders =
    ownerOrderHistoryData.filter(order => {

      const trackId =
        (order.track_id || "")
          .toLowerCase();

      const customerName =
        (order.customer_name || "")
          .toLowerCase();

      const status =
        order.status || "";

      const matchesSearch =
        trackId.includes(searchText) ||
        customerName.includes(searchText);

      const matchesStatus =
        selectedStatus === "all" ||
        status === selectedStatus;

      return (
        matchesSearch &&
        matchesStatus
      );

    });

  if (filteredOrders.length === 0) {

    container.innerHTML = `
      <div class="owner-order-history-empty">
        <p>🔍 No matching completed orders found.</p>
      </div>
    `;

    return;
  }

  container.innerHTML =
    filteredOrders.map(order => {

      return `
        <div class="owner-order-history-card">

          <h4>
            🆔 ${order.track_id || "No Track ID"}
          </h4>

          <p>
            <strong>👤 Customer:</strong>
            ${order.customer_name || "N/A"}
          </p>

          <p>
            <strong>📞 Phone:</strong>
            ${order.customer_phone || "N/A"}
          </p>

          <p>
            <strong>📅 Order Date:</strong>
            ${
              order.created_at
                ? new Date(order.created_at).toLocaleString()
                : "N/A"
            }
          </p>

          <p>
            <strong>📦 Status:</strong>
            <span class="owner-order-status delivered">
              ${order.status || "Delivered"}
            </span>
          </p>

          <p>
            <strong>📍 Delivery Area:</strong>
            ${order.delivery_area || "N/A"}
          </p>

          <p>
            <strong>💳 Payment Status:</strong>
            ${order.payment_status || "N/A"}
          </p>

        </div>
      `;

    }).join("");
}
// =================================
// OWNER PAYMENT MANAGEMENT
// SUPABASE
// =================================

async function updatePaymentStatus() {

  const trackId =
    document.getElementById("ownerPaymentTrackId")?.value.trim();

  const paymentMethod =
    document.getElementById("ownerPaymentMethod")?.value;

  const paymentStatus =
    document.getElementById("ownerPaymentStatus")?.value;

  const message =
    document.getElementById("ownerPaymentMessage");

  if (!message) return;

  if (!trackId) {

    message.textContent =
      "⚠️ Please enter Track ID.";

    return;
  }

  message.textContent =
    "⏳ Updating payment...";

  try {

    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/orders?track_id=eq.${encodeURIComponent(trackId)}`,
      {
        method: "PATCH",

        headers: {
          "apikey": SUPABASE_KEY,
          "Authorization": `Bearer ${SUPABASE_KEY}`,
          "Content-Type": "application/json",
          "Prefer": "return=representation"
        },

        body: JSON.stringify({
          payment_method: paymentMethod,
          payment_status: paymentStatus,
          payment_date: new Date().toISOString()
        })
      }
    );

    const responseText =
      await response.text();

  console.log("PAYMENT SUPABASE STATUS:", response.status);
  console.log("PAYMENT SUPABASE RESPONSE:", responseText);

    console.log(
      "PAYMENT UPDATE STATUS:",
      response.status
    );

    console.log(
      "PAYMENT UPDATE RESPONSE:",
      responseText
    );

    if (!response.ok) {
      throw new Error(responseText);
    }

    const updatedOrders =
      JSON.parse(responseText);

    if (!updatedOrders.length) {

      message.textContent =
        "⚠️ Track ID not found.";

      return;
    }

    message.textContent =
      `✅ Payment updated for ${trackId}: ${paymentStatus} (${paymentMethod})`;

    loadPaymentHistory();

  } catch (error) {

    console.error(
      "Payment update error:",
      error
    );

    message.textContent =
      "❌ Unable to update payment.";
  }
}
// =================================
// LOAD PAYMENT HISTORY
// FROM SUPABASE
// =================================

async function loadPaymentHistory() {

  const container =
    document.getElementById(
      "ownerPaymentHistoryContainer"
    );

  const totalElement =
    document.getElementById(
      "ownerTotalPayments"
    );

  if (!container) return;

  try {

    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/orders?select=track_id,payment_method,payment_status,payment_date&order=payment_date.desc`,
      {
        method: "GET",

        headers: {
          "apikey": SUPABASE_KEY,
          "Authorization": `Bearer ${SUPABASE_KEY}`
        }
      }
    );

    const responseText =
      await response.text();

    if (!response.ok) {
      throw new Error(responseText);
    }

    const payments =
      JSON.parse(responseText);

    window.ownerPaymentHistoryData =
      payments;

    if (totalElement) {
      totalElement.textContent =
        payments.length;
    }

    if (payments.length === 0) {

      container.innerHTML = `
        <div class="owner-payment-history-empty">
          <p>🧾 No payment records available.</p>
        </div>
      `;

      return;
    }

    container.innerHTML =
      payments.map(payment => {

        const paymentDate =
          payment.payment_date
            ? new Date(
                payment.payment_date
              ).toLocaleString()
            : "N/A";

        return `
          <div class="owner-payment-record">

            <h4>
              🆔 ${payment.track_id || "No Track ID"}
            </h4>

            <p>
              <strong>💳 Method:</strong>
              ${payment.payment_method || "Not Updated"}
            </p>

            <p>
              <strong>💰 Status:</strong>
              <span class="payment-history-status">
                ${payment.payment_status || "Pending"}
              </span>
            </p>

            <p>
              <strong>📅 Date:</strong>
              ${paymentDate}
            </p>

          </div>
        `;

      }).join("");

  } catch (error) {

    console.error(
      "Payment history loading error:",
      error
    );

    container.innerHTML = `
      <div class="owner-payment-history-empty">
        <p>❌ Unable to load payment history.</p>
      </div>
    `;
  }
}
// =================================
// FILTER PAYMENT HISTORY
// =================================

function filterPaymentHistory() {

  const searchInput =
    document.getElementById(
      "paymentHistorySearch"
    );

  const filterSelect =
    document.getElementById(
      "paymentHistoryFilter"
    );

  const container =
    document.getElementById(
      "ownerPaymentHistoryContainer"
    );

  if (
    !searchInput ||
    !filterSelect ||
    !container
  ) {
    return;
  }

  const searchText =
    searchInput.value
      .trim()
      .toLowerCase();

  const selectedStatus =
    filterSelect.value;

  const payments =
    window.ownerPaymentHistoryData || [];

  const filteredPayments =
    payments.filter(payment => {

      const trackId =
        (payment.track_id || "")
          .toLowerCase();

      const status =
        payment.payment_status ||
        "Pending";

      return (
        trackId.includes(searchText) &&
        (
          selectedStatus === "all" ||
          status === selectedStatus
        )
      );

    });

  if (filteredPayments.length === 0) {

    container.innerHTML = `
      <div class="owner-payment-history-empty">
        <p>🔍 No matching payment records found.</p>
      </div>
    `;

    return;
  }

  container.innerHTML =
    filteredPayments.map(payment => {

      const paymentDate =
        payment.payment_date
          ? new Date(
              payment.payment_date
            ).toLocaleString()
          : "N/A";

      return `
        <div class="owner-payment-record">

          <h4>
            🆔 ${payment.track_id || "No Track ID"}
          </h4>

          <p>
            <strong>💳 Method:</strong>
            ${payment.payment_method || "Not Updated"}
          </p>

          <p>
            <strong>💰 Status:</strong>
            <span class="payment-history-status">
              ${payment.payment_status || "Pending"}
            </span>
          </p>

          <p>
            <strong>📅 Date:</strong>
            ${paymentDate}
          </p>

        </div>
      `;

    }).join("");
}
loadPaymentHistory();
// =========================================
// STOCK MANAGEMENT
// =========================================

let ownerStockData = [];

function loadOwnerStock() {
  try {
    ownerStockData = JSON.parse(
      localStorage.getItem("bakeflowOwnerStock") || "[]"
    );
  } catch (error) {
    console.error("Stock loading error:", error);
    ownerStockData = [];
  }

  renderOwnerStock();

  updateCakeStockStatus();
  updateBakeryStockStatus();
}
function toggleStockCategoryFields() {

  const category =
    document.getElementById("stockCategory")?.value;

  const cakeTypeWrapper =
    document.getElementById("stockCakeTypeWrapper");

  const cakeTypeInput =
    document.getElementById("stockCakeType");

  if (!cakeTypeWrapper) return;

  if (category === "cake") {

    cakeTypeWrapper.style.display = "";

    if (cakeTypeInput) {
      cakeTypeInput.disabled = false;
    }

  } else {

    cakeTypeWrapper.style.display = "none";

    if (cakeTypeInput) {
      cakeTypeInput.value = "";
      cakeTypeInput.disabled = true;
    }

  }
}
function addStockItem() {

  const categoryInput =
    document.getElementById("stockCategory");

  const nameInput =
    document.getElementById("stockItemName");

  const quantityInput =
    document.getElementById("stockQuantity");

  const unitInput =
    document.getElementById("stockUnit");

  const cakeTypeInput =
    document.getElementById("stockCakeType");


  if (
    !categoryInput ||
    !nameInput ||
    !quantityInput ||
    !unitInput
  ) {
    return;
  }


  const category =
    categoryInput.value;

  const name =
    nameInput.value.trim();

  const quantity =
    Number(quantityInput.value);

  const unit =
    unitInput.value;

  const cakeType =
    category === "cake"
      ? (cakeTypeInput?.value || "")
      : "";


  if (
    !name ||
    isNaN(quantity) ||
    quantity < 0
  ) {

    alert(
      "Please enter a valid item name and quantity."
    );

    return;
  }


  // Same stock is identified by:
  // Category + Name + Unit + Cake Type
  const existingItem =
    ownerStockData.find(item => {

      const sameCategory =
        (item.category || "cake") === category;

      const sameName =
        (item.name || "").trim().toLowerCase() ===
        name.toLowerCase();

      const sameUnit =
        item.unit === unit;

      const sameCakeType =
        category === "cake"
          ? (item.cakeType || "") === cakeType
          : true;

      return (
        sameCategory &&
        sameName &&
        sameUnit &&
        sameCakeType
      );

    });


  if (existingItem) {

    // Update only the same stock combination
    existingItem.quantity =
      quantity;

  } else {

    ownerStockData.push({

      id: Date.now(),

      category: category,

      name: name,

      quantity: quantity,

      unit: unit,

      cakeType: cakeType

    });

  }


  localStorage.setItem(
    "bakeflowOwnerStock",
    JSON.stringify(ownerStockData)
  );


  // Clear inputs
  nameInput.value = "";
  quantityInput.value = "";


  if (categoryInput) {
    categoryInput.value = "cake";
  }


  if (cakeTypeInput) {
    cakeTypeInput.value = "Cool";
  }


  toggleStockCategoryFields();

  renderOwnerStock();
}
function renderOwnerStock() {
  const container =
    document.getElementById("ownerStockList");

  const totalElement =
    document.getElementById("ownerTotalStockItems");

  const lowElement =
    document.getElementById("ownerLowStockItems");

  const outElement =
    document.getElementById("ownerOutOfStockItems");


  if (!container) return;


  const totalItems =
    ownerStockData.length;


  const outOfStock =
    ownerStockData.filter(item =>
      Number(item.quantity) === 0
    ).length;


  const lowStock =
    ownerStockData.filter(item =>
      Number(item.quantity) > 0 &&
      Number(item.quantity) <= 5
    ).length;


  if (totalElement) {
    totalElement.textContent =
      totalItems;
  }


  if (lowElement) {
    lowElement.textContent =
      lowStock;
  }


  if (outElement) {
    outElement.textContent =
      outOfStock;
  }


  updateCakeStockStatus();
  updateBakeryStockStatus();

  if (ownerStockData.length === 0) {

    container.innerHTML =
      "<p>No stock items added yet.</p>";

    return;
  }


  container.innerHTML =
    ownerStockData.map(item => {

      const quantity =
        Number(item.quantity);


      let status =
        "Available";


      if (quantity === 0) {

        status =
          "Out of Stock";

      } else if (quantity <= 5) {

        status =
          "Low Stock";

      }


      // Category label
      let categoryLabel =
        "📦 Stock";


      if (item.category === "cake") {

        categoryLabel =
          "🎂 Cake";

      } else if (item.category === "bakery") {

        categoryLabel =
          "🥐 Bakery Item";

      } else if (item.category === "ingredient") {

        categoryLabel =
          "🥚 Ingredient";

      }


      return `
        <div class="owner-stock-item">

          <div>

            <h4>
              ${categoryLabel}
            </h4>

            <p>
              <strong>
                ${item.name}
              </strong>
            </p>

            <p>
              Quantity:
              <strong>
                ${quantity} ${item.unit}
              </strong>
            </p>

            ${
              item.category === "cake"
                ? `
                  <p>
                    Cake Type:
                    <strong>
                      ${item.cakeType || "Not Set"}
                    </strong>
                  </p>
                `
                : ""
            }

            <p>
              Status:
              <strong>
                ${status}
              </strong>
            </p>

          </div>


          <button
            type="button"
            class="btn secondary"
            onclick="deleteStockItem(${item.id})">

            🗑️ Delete

          </button>

        </div>
      `;

    }).join("");
}

function updateBakeryStockStatus() {
  const bakeryCards = document.querySelectorAll(".bakery-product-card");
  const currentLanguage = localStorage.getItem("language") || "en";
  const isTelugu = currentLanguage === "te";

  bakeryCards.forEach(card => {
    const itemName = (card.dataset.bakery || "").trim();

    const stockItem = ownerStockData.find(item =>
      (item.name || "").trim().toLowerCase() === itemName.toLowerCase()
    );

    let statusText = isTelugu
      ? "🟢 అందుబాటులో ఉంది"
      : "🟢 Available";

    if (stockItem) {
      const quantity = Number(stockItem.quantity);

      if (quantity === 0) {
        statusText = isTelugu
          ? "❌ స్టాక్ లేదు"
          : "❌ Out of Stock";
      } else if (quantity <= 5) {
        statusText = isTelugu
          ? `⚠️ తక్కువ స్టాక్ — ${quantity} ${stockItem.unit} అందుబాటులో ఉన్నాయి`
          : `⚠️ Low Stock — ${quantity} ${stockItem.unit} available`;
      } else {
        statusText = isTelugu
          ? `🟢 అందుబాటులో ఉన్నాయి — ${quantity} ${stockItem.unit}`
          : `🟢 Available — ${quantity} ${stockItem.unit}`;
      }
    }

    let statusElement = card.querySelector(".bakery-stock-status");

    if (!statusElement) {
      statusElement = document.createElement("p");
      statusElement.className = "bakery-stock-status";

      const priceElement = card.querySelector(".bakery-live-price");

      if (priceElement) {
        priceElement.insertAdjacentElement(
          "afterend",
          statusElement
        );
      }
    }

    statusElement.textContent = statusText;
  });
}
function deleteStockItem(id) {

  ownerStockData =
    ownerStockData.filter(item =>
      item.id !== id
    );

  localStorage.setItem(
    "bakeflowOwnerStock",
    JSON.stringify(ownerStockData)
  );

  renderOwnerStock();
}
loadOwnerStock();
toggleStockCategoryFields();
// =========================================
// REDUCE STOCK AFTER ORDER
// =========================================

function reduceCakeStock(cakeName, orderedQuantity, cakeType) {

  const stockItem = ownerStockData.find(item => {

    const sameName =
      (item.name || "").trim().toLowerCase() ===
      (cakeName || "").trim().toLowerCase();

    const sameCakeType =
      (item.cakeType || "").trim().toLowerCase() ===
      (cakeType || "").trim().toLowerCase();

    return sameName && sameCakeType;
  });

  if (!stockItem) {
    console.warn(
      "Cake stock not found:",
      cakeName,
      cakeType
    );
    return;
  }

  const currentStock =
    Number(stockItem.quantity) || 0;

  const ordered =
    Number(orderedQuantity) || 0;

  stockItem.quantity =
    Math.max(0, currentStock - ordered);

  localStorage.setItem(
    "bakeflowOwnerStock",
    JSON.stringify(ownerStockData)
  );

  renderOwnerStock();
  updateCakeStockStatus();
  updateBakeryStockStatus();
}
// Load saved stock when page opens
loadOwnerStock();
// =========================================
// CAKE STOCK STATUS
// =========================================

function updateCakeStockStatus() {
  const cakeCards = document.querySelectorAll(".cake-card");

  cakeCards.forEach(card => {
    const heading = card.querySelector("h3");
    if (!heading) return;

    const cakeName = heading.textContent.trim();

    // Get all stock entries for this cake
    const cakeStocks = ownerStockData.filter(item =>
      (item.name || "").trim().toLowerCase() ===
      cakeName.toLowerCase()
    );

    let statusElement = card.querySelector(".cake-stock-status");

    if (!statusElement) {
      statusElement = document.createElement("div");
      statusElement.className = "cake-stock-status";

      const orderButton = card.querySelector(".mini-order");

      if (orderButton) {
        orderButton.insertAdjacentElement(
          "beforebegin",
          statusElement
        );
      }
    }

    
    // Get selected language
    const isTelugu = localStorage.getItem("language") === "te";

    // No stock entry
    if (cakeStocks.length === 0) {
      statusElement.innerHTML = `
        <p>${isTelugu ? "🟢 అందుబాటులో ఉంది" : "🟢 Available"}</p>
      `;
      return;
    }

    // Show Cool and Normal separately
    statusElement.innerHTML = cakeStocks.map(stock => {
      const quantity = Number(stock.quantity) || 0;
      const type = stock.cakeType || "General";

      let statusText = "";

      if (quantity === 0) {
        statusText = isTelugu ? "స్టాక్ లేదు" : "Out of Stock";
      } else if (quantity <= 5) {
        statusText = isTelugu ? "తక్కువ స్టాక్" : "Low Stock";
      } else {
        statusText = isTelugu ? "అందుబాటులో ఉన్నాయి" : "available";
      }

      if (quantity > 0) {
        return `
          <p>
            ${quantity <= 5 ? "⚠️" : "🟢"} <strong>${type}</strong> —
            ${statusText} — ${quantity} ${stock.unit}
          </p>
        `;
      }

      return `
        <p>
          ❌ <strong>${type}</strong> — ${statusText}
        </p>
      `;
    }).join("");


  });
}
// =========================================
// CUSTOMER NOTIFICATIONS
// =========================================

function showCustomerNotification(message) {

  const notificationBox =
    document.getElementById("customerNotifications");

  if (!notificationBox) return;

  const notification =
    document.createElement("div");

  notification.className =
    "customer-notification";

  notification.innerHTML = `
    🔔 ${message}
  `;

  notificationBox.prepend(notification);
}
// =========================================
// OWNER NOTIFICATIONS
// =========================================

function showOwnerNotification(message) {

  const notificationBox =
    document.getElementById("ownerNotifications");

  if (!notificationBox) return;

  const notification =
    document.createElement("div");

  notification.className =
    "owner-notification";

  notification.innerHTML = `
    🔔 ${message}
  `;

  notificationBox.prepend(notification);
}
// =========================================
// BEST-SELLING PRODUCTS
// =========================================

function loadBestSellingProducts() {

  const container =
    document.getElementById("bestSellingProducts");

  if (!container) return;

  const orders =
    window.ownerOrdersData || [];

  if (orders.length === 0) {
    container.innerHTML =
      "<p>No order data available.</p>";
    return;
  }

  const productSales = {};

  orders.forEach(order => {

    const product =
  order.order_item?.trim();

if (!product) return;

    const quantity =
      Number(order.quantity) || 1;

    productSales[product] =
      (productSales[product] || 0) + quantity;

  });

  const bestSelling =
    Object.entries(productSales)
      .sort((a, b) => b[1] - a[1]);

  container.innerHTML =
    bestSelling.map((item, index) => `
      <div class="best-selling-item">

        <strong>
          ${index + 1}. ${item[0]}
        </strong>

        <span>
          ${item[1]} sold
        </span>

      </div>
    `).join("");
}
// =========================================
// SALES ANALYTICS
// =========================================

function loadSalesAnalytics() {

  const container =
    document.getElementById("salesAnalytics");

  if (!container) return;

  const orders =
    window.ownerOrdersData || [];

  if (orders.length === 0) {
    container.innerHTML =
      "<p>No sales data available.</p>";
    return;
  }

  const totalOrders =
    orders.length;

  const totalSales =
    orders.reduce((total, order) => {
      return total + (Number(order.order_total) || 0);
    }, 0);

  const averageOrderValue =
    totalOrders > 0
      ? totalSales / totalOrders
      : 0;

  container.innerHTML = `

    <div class="sales-analytics-item">
      <strong>📦 Total Orders</strong>
      <span>${totalOrders}</span>
    </div>

    <div class="sales-analytics-item">
      <strong>💰 Total Sales</strong>
      <span>₹${totalSales.toFixed(2)}</span>
    </div>

    <div class="sales-analytics-item">
      <strong>📊 Average Order Value</strong>
      <span>₹${averageOrderValue.toFixed(2)}</span>
    </div>

  `;
}
// Make BakeFlow dashboard functions available to HTML buttons
window.addStockItem = addStockItem;
window.toggleStockCategoryFields = toggleStockCategoryFields;
window.deleteStockItem = deleteStockItem;
window.updateOrderStatus = updateOrderStatus;
window.startDeliveryTracking = startDeliveryTracking;
window.filterPaymentHistory = filterPaymentHistory;
window.updatePaymentStatus = updatePaymentStatus;
window.filterOrderHistory = filterOrderHistory;
window.filterOwnerCustomers = filterOwnerCustomers;
window.selectOwnerOrder = selectOwnerOrder;
window.calculateOwnerProfitLoss = calculateOwnerProfitLoss;


function openCakeGallery() {
  const section = document.getElementById("cakeGallery");

  if (!section) {
    alert("Cake gallery section not found!");
    return;
  }

  section.hidden = false;
  buildCakeGallery();
  section.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

let galleryCakeSelected = false;
function buildCakeGallery() {
  const grid = document.getElementById("cakePhotoGrid");

  if (!grid || grid.dataset.ready === "true") return;

  const fragment = document.createDocumentFragment();

  for (let i = 1; i <= 44; i++) {
    const figure = document.createElement("figure");
    figure.className = "gallery-item";

    const img = document.createElement("img");
    img.src = `images/cake_${i}.jpg`;
    img.alt = `Cake Design ${i}`;
    img.loading = "lazy";
    img.style.cursor = "pointer";

    img.onerror = function () {
      this.closest("figure")?.remove();
    };

    const caption = document.createElement("figcaption");
    caption.textContent = `Cake Design ${i}`;

    const orderButton = document.createElement("button");
    orderButton.type = "button";
    orderButton.className = "order-this-cake";
    orderButton.textContent = "Order This Cake";
    orderButton.style.marginTop = "10px";

    orderButton.addEventListener("click", () => {
      const customField = document.getElementById("custom");
      const preview = document.getElementById("referencePreview");
      const orderSection = document.getElementById("order");

      toggleGalleryCakeFields(true);
      galleryCakeSelected = true;

      if (customField) {
        customField.value =
          `I want this cake exactly like the selected reference image (Cake Design ${i}).`;
      }

      if (preview) {
        preview.src = img.src;
        preview.style.display = "block";
      }

      if (orderSection) {
        orderSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });

    figure.append(img, caption, orderButton);
    fragment.appendChild(figure);
  }

  grid.appendChild(fragment);
  grid.dataset.ready = "true";
}


function toggleGalleryCakeFields(isGalleryCake) {
  const cakeFields = document.getElementById("cakeOrderFields");

  if (cakeFields) {
    cakeFields.style.display = isGalleryCake ? "none" : "";
  }

  const orderItems = document.getElementById("orderItems");

  if (orderItems) {
    orderItems.dataset.galleryCake = isGalleryCake ? "true" : "false";
  }

  document.querySelectorAll(".order-item").forEach((item) => {
    const category = item.querySelector(".item-category");
    const details = item.querySelector(".item-details");

    if (
      isGalleryCake &&
      category?.value === "cake" &&
      details
    ) {
      details.style.display = "none";
    } else if (details) {
      details.style.display = "";
    }
  });
}
