const business = {
  phone: "7780476392",
  instagram: "@my_home_bakery_Kakinada",
  timings: "9:00 AM to 10:00 PM",
  delivery: "Home delivery is available around 20 km, depending on the area.",
  cakeTypes: ["Birthday Cakes","Photo Cakes","Designer Cakes","Heart Shape Cake","Steps Cake","Cool Cakes","Veg and Non-Veg"],
  flavours: ["Milky Vanilla","Butterscotch","Strawberry","Blueberry","Roseberry","Black Currant","Pineapple","Red Velvet","Milky Butterscotch","Milky Badam","Honey Almond","Pista","Chocolate","Choco Chips","Roast Cause Chocolate","Double Chocolate","Caramel Nuts","Oreo Chocolate"],
  bakery: ["Brownie","Chocolava","Donuts","Dry Fruit Butter Biscuits","Butter Salt Biscuits","Milk Cake","Plum Cake","Sponge Cake","Cup Cakes","Bread","Rusk (Toast)","Cream Buns","Fruit Buns","Jam Buns"],
  sizes: "All sizes are available. Price depends on flavour and size.",
  customization: "Customization is available.",
  advance: "For a big and customized cake, order at least 2 days before.",
  payment: "Cash on delivery."
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

function toggleOrderCategory(){
  const category=document.getElementById("orderCategory")?.value;
  const cakeFields=document.getElementById("cakeOrderFields");
  const bakeryFields=document.getElementById("bakeryOrderFields");
  const cakeType=document.getElementById("cakeType");
  const flavour=document.getElementById("flavour");
  const bakeryItem=document.getElementById("bakeryItem");
  if(!cakeFields || !bakeryFields) return;
  cakeFields.style.display=category === "cake" ? "block" : "none";
  bakeryFields.style.display=category === "bakery" ? "block" : "none";
  if(cakeType) cakeType.required=category === "cake";
  if(flavour) flavour.required=category === "cake";
  if(bakeryItem) bakeryItem.required=category === "bakery";
  if(category !== "cake"){
    if(cakeType) cakeType.value="";
    if(flavour) flavour.value="";
    toggleCustomCakeType(); toggleCustomFlavour();
  }
  if(category !== "bakery" && bakeryItem) bakeryItem.value="";
}

function orderBakeryItem(item){
  const category=document.getElementById("orderCategory");
  const bakeryItem=document.getElementById("bakeryItem");
  if(category) category.value="bakery";
  toggleOrderCategory();
  if(bakeryItem){ bakeryItem.value=item; }
  document.getElementById("order")?.scrollIntoView({behavior:"smooth",block:"start"});
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

function toggleChat(){ document.getElementById("chat")?.classList.toggle("show"); }

function addMessage(text, type){
  const box=document.getElementById("messages");
  if(!box) return;
  const div=document.createElement("div");
  div.className=`msg ${type}`;
  div.textContent=text;
  box.appendChild(div);
  box.scrollTop=box.scrollHeight;
}

function getReply(q){
  const s=q.toLowerCase();
  if(s.includes("type") || s.includes("category") || s.includes("cake available"))
    return "Listed cake types are: " + business.cakeTypes.join(", ") + ". If you need another type, you can request a custom cake type in the order form.";
  if(s.includes("flavour") || s.includes("flavor"))
    return "Listed cake flavours are: " + business.flavours.join(", ") + ". If your flavour is not listed, you can type a custom flavour in the order form.";
  if(s.includes("size") || s.includes("kg")) return business.sizes;
  if(s.includes("custom") || s.includes("design")) return business.customization + " " + business.advance;
  if(s.includes("deliver") || s.includes("delivery")) return business.delivery;
  if(s.includes("time") || s.includes("open") || s.includes("close") || s.includes("timing")) return "The available timing is " + business.timings + ".";
  if(s.includes("pay") || s.includes("cash") || s.includes("cod")) return business.payment;
  if(s.includes("2 day") || s.includes("advance") || s.includes("when order")) return business.advance;
  if(s.includes("phone") || s.includes("contact") || s.includes("number")) return "You can contact My Home Bakery at " + business.phone + ".";
  if(s.includes("instagram") || s.includes("insta")) return "Instagram: " + business.instagram + ".";
  if(s.includes("brownie") || s.includes("donut") || s.includes("bread") || s.includes("biscuit") || s.includes("bakery")) return "Bakery items include: " + business.bakery.join(", ") + ".";
  if(s.includes("price") || s.includes("cost")) return "Price depends on flavour and size. I don't have exact prices in my data, so I don't want to guess.";
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

const orderForm = document.getElementById("orderForm");
if(orderForm){
  orderForm.addEventListener("submit", function(e){
    e.preventDefault();
    const category=document.getElementById("orderCategory").value;
    const selectedCakeEl=document.getElementById("cakeType");
    const selectedFlavourEl=document.getElementById("flavour");
    const selectedCake = selectedCakeEl.value === "custom" ? (document.getElementById("customCakeType").value.trim() || "Custom cake type") : (selectedCakeEl.value || "Not specified");
    const selectedFlavour = selectedFlavourEl.value === "custom" ? (document.getElementById("customFlavour").value.trim() || "Custom flavour") : (selectedFlavourEl.value || "Not specified");
    const bakeryItem=document.getElementById("bakeryItem").value || "Not specified";
    const product=category === "bakery" ? `Bakery Item: ${bakeryItem}` : `Cake Type: ${selectedCake}\nFlavour: ${selectedFlavour}\nSize: ${document.getElementById("size").value || "Not specified"}`;
    const message =
`Hello My Home Bakery, I would like to place an order request.\n\nName: ${document.getElementById("name").value}\nPhone: ${document.getElementById("phone").value}\nOrder Category: ${category === "bakery" ? "Bakery Item" : "Cake"}\n${product}\nQuantity: ${document.getElementById("quantity").value || "1"}\nRequired Date: ${document.getElementById("date").value || "Not specified"}\nDelivery Area: ${document.getElementById("area").value || "Not specified"}\nCustomization / Message: ${document.getElementById("custom").value || "None"}`;
    const url="https://wa.me/917780476392?text="+encodeURIComponent(message);
    window.open(url,"_blank","noopener,noreferrer");
  });
}

updateDashboardCounts();
populateDashboardChoices();
fillBakeryItems();
syncDashboardChoice();

function toggleMobileMenu(){
  document.getElementById("mainNav")?.classList.toggle("mobile-open");
}

document.querySelectorAll('#mainNav a, #mainNav .chat-open').forEach(el=>{
  el.addEventListener('click',()=>document.getElementById('mainNav')?.classList.remove('mobile-open'));
});
