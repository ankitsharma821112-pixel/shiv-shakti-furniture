const productTypes = [
{category:"बेड",prefix:"bed",names:["लकड़ी का बेड","डबल बेड","डिजाइनर बेड","शीशम लकड़ी का बेड","मॉडर्न बेड","किंग साइज बेड","क्वीन साइज बेड","स्टोरेज बेड","बॉक्स बेड","डबल बॉक्स बेड","सिंगल बेड","बच्चों का बेड","डिजाइनर डबल बेड","प्रीमियम बेड","मजबूत लकड़ी का बेड","सिंपल बेड","नक्काशीदार बेड","मॉडर्न डबल बेड","कस्टम डिजाइन बेड","स्पेशल बेड"]},
{category:"सोफा",prefix:"sofa",names:["सोफा सेट","तीन सीटर सोफा","दो सीटर सोफा","सिंगल सोफा","लकड़ी का सोफा","डिजाइनर सोफा","मॉडर्न सोफा","L शेप सोफा","फैमिली सोफा","प्रीमियम सोफा","क्लासिक सोफा","सोफा चेयर","वुडन सोफा","नक्काशीदार सोफा","सिंपल सोफा","कॉर्नर सोफा","मॉडर्न सोफा सेट","कस्टम सोफा","लक्जरी सोफा","स्पेशल सोफा"]},
{category:"कुर्सी",prefix:"chair",names:["लकड़ी की कुर्सी","डिजाइनर कुर्सी","डाइनिंग कुर्सी","ऑफिस कुर्सी","मजबूत कुर्सी","शीशम कुर्सी","सिंपल कुर्सी","हाई बैक कुर्सी","आर्मरेस्ट कुर्सी","मॉडर्न कुर्सी","नक्काशीदार कुर्सी","फोल्डिंग कुर्सी","प्रीमियम कुर्सी","डाइनिंग चेयर","लकड़ी की आर्म चेयर","कस्टम कुर्सी","स्टडी चेयर","गेस्ट चेयर","क्लासिक कुर्सी","स्पेशल कुर्सी"]},
{category:"टेबल",prefix:"table",names:["लकड़ी की टेबल","स्टडी टेबल","ऑफिस टेबल","कंप्यूटर टेबल","सेंटर टेबल","कॉफी टेबल","डिजाइनर टेबल","मॉडर्न टेबल","शीशम टेबल","वर्क टेबल","सिंपल टेबल","प्रीमियम टेबल","छोटी टेबल","बड़ी टेबल","साइड टेबल","नक्काशीदार टेबल","कस्टम टेबल","मजबूत टेबल","ड्रॉअर वाली टेबल","स्पेशल टेबल"]},
{category:"अलमारी",prefix:"almari",names:["लकड़ी की अलमारी","डबल डोर अलमारी","डिजाइनर अलमारी","शीशम अलमारी","कपड़ों की अलमारी","मॉडर्न अलमारी","तीन दरवाजे की अलमारी","प्रीमियम अलमारी","सिंपल अलमारी","बड़ी अलमारी","छोटी अलमारी","ड्रॉअर वाली अलमारी","नक्काशीदार अलमारी","स्टोरेज अलमारी","कस्टम अलमारी","मजबूत अलमारी","मॉडर्न डबल अलमारी","क्लासिक अलमारी","फैमिली अलमारी","स्पेशल अलमारी"]},
{category:"डाइनिंग टेबल",prefix:"dining-table",names:["चार सीटर डाइनिंग टेबल","छह सीटर डाइनिंग टेबल","आठ सीटर डाइनिंग टेबल","लकड़ी की डाइनिंग टेबल","डिजाइनर डाइनिंग टेबल","शीशम डाइनिंग टेबल","मॉडर्न डाइनिंग टेबल","ग्लास टॉप डाइनिंग टेबल","सिंपल डाइनिंग टेबल","प्रीमियम डाइनिंग टेबल","गोल डाइनिंग टेबल","आयताकार डाइनिंग टेबल","डाइनिंग टेबल सेट","क्लासिक डाइनिंग टेबल","मजबूत डाइनिंग टेबल","छोटी डाइनिंग टेबल","बड़ी डाइनिंग टेबल","कस्टम डाइनिंग टेबल","फैमिली डाइनिंग टेबल","स्पेशल डाइनिंग टेबल"]},
{category:"दरवाजा",prefix:"door",names:["लकड़ी का दरवाजा","मुख्य दरवाजा","डिजाइनर दरवाजा","शीशम दरवाजा","मॉडर्न दरवाजा","नक्काशीदार दरवाजा","सिंपल दरवाजा","डबल दरवाजा","पैनल वाला दरवाजा","प्रीमियम दरवाजा","कमरे का दरवाजा","मजबूत दरवाजा","क्लासिक दरवाजा","सजावटी दरवाजा","कस्टम दरवाजा","फ्रंट डोर","वुडन डोर","मॉडर्न डबल डोर","नया डिजाइन दरवाजा","स्पेशल दरवाजा"]},
{category:"खिड़की",prefix:"window",names:["लकड़ी की खिड़की","एल्युमिनियम खिड़की","स्लाइडिंग खिड़की","डिजाइनर खिड़की","मॉडर्न खिड़की","शीशम खिड़की","सिंपल खिड़की","डबल पैनल खिड़की","ग्लास खिड़की","प्रीमियम खिड़की","छोटी खिड़की","बड़ी खिड़की","मजबूत खिड़की","क्लासिक खिड़की","कस्टम खिड़की","स्लाइडिंग विंडो","वुडन विंडो","मॉडर्न विंडो","घर की खिड़की","स्पेशल खिड़की"]},
{category:"एल्युमिनियम",prefix:"aluminium",names:["एल्युमिनियम फ्रेम","एल्युमिनियम दरवाजा","एल्युमिनियम खिड़की","स्लाइडिंग विंडो","ग्लास फिटिंग","एल्युमिनियम पार्टिशन","शॉप फ्रंट","ऑफिस पार्टिशन","एल्युमिनियम फ्रेम सेट","मॉडर्न विंडो","ग्लास डोर","एल्युमिनियम डोर","कस्टम फ्रेम","स्लाइडिंग डोर","बालकनी विंडो","एल्युमिनियम वर्क","ग्लास खिड़की","मॉडर्न फ्रेम","शॉप विंडो","स्पेशल एल्युमिनियम वर्क"]},
{category:"अन्य",prefix:"custom",names:["कस्टम फर्नीचर","जूता रैक","टीवी यूनिट","बुक शेल्फ","ड्रेसिंग टेबल","साइड कैबिनेट","वुडन रैक","स्टोरेज रैक","पूजा मंदिर","लकड़ी का स्टूल","कपबोर्ड","ड्रॉअर कैबिनेट","कस्टम शेल्फ","वुडन बेंच","फर्नीचर सेट","छोटा कैबिनेट","मॉडर्न फर्नीचर","डिजाइनर रैक","घर का फर्नीचर","स्पेशल कस्टम आइटम"]}
];

const products = productTypes.flatMap(type => type.names.map((name,index)=>({name:`${name} ${String(index+1).padStart(2,"0")}`,category:type.category,image:`${type.prefix}-${String(index+1).padStart(2,"0")}.jpeg`})));
const $ = id => document.getElementById(id);
const STORAGE_KEY = "shivShaktiOrdersV1";
let orders = loadOrders();
let selectedCategory = "सभी";

function loadOrders(){try{const data=JSON.parse(localStorage.getItem(STORAGE_KEY)||"[]");return Array.isArray(data)?data:[]}catch(e){return[]}}
function saveOrders(){localStorage.setItem(STORAGE_KEY,JSON.stringify(orders));renderOrders();renderStats()}
function money(value){return "₹"+(Number(value)||0).toLocaleString("en-IN",{maximumFractionDigits:2})}
function today(){const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`}
function safeText(value){return String(value??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function balance(order){return Math.max(0,Number(order.total||0)-Number(order.paid||0))}
function renderCategories(){
  const box=$("categories");box.innerHTML="";
  ["सभी",...productTypes.map(x=>x.category)].forEach(category=>{
    const b=document.createElement("button");b.className="category-btn"+(category===selectedCategory?" active":"");b.textContent=category;
    b.addEventListener("click",()=>{selectedCategory=category;renderCategories();renderProducts()});box.appendChild(b);
  });
}
function renderProducts(){
  const q=$("search").value.trim().toLowerCase();
  const list=products.filter(p=>(selectedCategory==="सभी"||p.category===selectedCategory)&&(`${p.name} ${p.category}`).toLowerCase().includes(q));
  $("productGrid").innerHTML="";$("noResults").hidden=list.length>0;
  list.forEach(p=>{
    const card=document.createElement("article");card.className="product-card";
    const img=document.createElement("img");img.src="images/"+p.image;img.alt=p.name;img.loading="lazy";
    img.onerror=()=>{img.removeAttribute("src");img.alt=p.name+" — फोटो उपलब्ध नहीं";img.style.minHeight="130px"};
    const info=document.createElement("div");info.className="product-info";
    const title=document.createElement("h3");title.textContent=p.name;
    const cat=document.createElement("p");cat.className="product-category";cat.textContent=p.category;
    const price=document.createElement("p");price.className="price";price.textContent="कीमत के लिए संपर्क करें";
    const btn=document.createElement("button");btn.className="btn";btn.textContent="ऑर्डर बुक करें";btn.addEventListener("click",()=>openOrder(p.name));
    const wa=document.createElement("a");wa.className="btn btn-outline";wa.textContent="WhatsApp पर पूछें";wa.target="_blank";wa.rel="noopener";wa.href="https://wa.me/916207486280?text="+encodeURIComponent("नमस्ते, मुझे "+p.name+" के बारे में जानकारी और कीमत चाहिए।");
    info.append(title,cat,price,btn,wa);card.append(img,info);$("productGrid").append(card);
  });
}
function openModal(id){$(id).classList.add("show");$(id).setAttribute("aria-hidden","false")}
function closeModal(id){$(id).classList.remove("show");$(id).setAttribute("aria-hidden","true")}
function openOrder(item=""){
  $("orderForm").reset();$("editOrderId").value="";$("modalTitle").textContent="नया ऑर्डर";
  $("orderDate").value=today();$("advanceAmount").value="0";$("quantity").value="1";$("itemName").value=item;updateBalancePreview();openModal("orderModal");
}
function updateBalancePreview(){const total=Number($("totalAmount").value)||0;const paid=Number($("advanceAmount").value)||0;$("formBalance").textContent="बाकी रकम: "+money(Math.max(0,total-paid));}
function renderStats(){
  const total=orders.reduce((s,o)=>s+Number(o.total||0),0),paid=orders.reduce((s,o)=>s+Number(o.paid||0),0);
  $("statOrders").textContent=orders.length;$("statSales").textContent=money(total);$("statPaid").textContent=money(paid);$("statDue").textContent=money(Math.max(0,total-paid));
}
function renderOrders(){
  const q=$("orderSearch").value.trim().toLowerCase();const body=$("ordersBody");body.innerHTML="";
  const filtered=orders.filter(o=>[o.id,o.name,o.phone,o.item].join(" ").toLowerCase().includes(q));
  if(!filtered.length){body.innerHTML='<tr><td colspan="7" class="empty-row">अभी कोई ऑर्डर नहीं है। “नया ऑर्डर” बटन से शुरू करें।</td></tr>';return}
  filtered.slice().reverse().forEach(o=>{
    const tr=document.createElement("tr");const status=balance(o)<=0?'<span class="paid-text">पूरा भुगतान</span>':'<span class="due-text">भुगतान बाकी</span>';
    tr.innerHTML=`<td>${safeText(o.id)}</td><td>${safeText(o.name)}</td><td>${safeText(o.phone)}</td><td>${safeText(o.deliveryDate||"—")}</td><td>${money(o.total)}</td><td>${money(balance(o))}</td><td>${status}<br>
    <button class="btn" data-action="edit" data-id="${safeText(o.id)}">Edit</button>
    <button class="btn btn-outline" data-action="pay" data-id="${safeText(o.id)}">भुगतान</button>
    <button class="btn btn-outline" data-action="receipt" data-id="${safeText(o.id)}">रसीद</button>
    <button class="btn btn-outline" data-action="wa" data-id="${safeText(o.id)}">WhatsApp</button>
    <button class="btn btn-outline" data-action="delete" data-id="${safeText(o.id)}">डिलीट</button></td>`;
    body.appendChild(tr);
  });
}
function editOrder(id){
  const o=orders.find(x=>x.id===id);if(!o)return;
  $("orderForm").reset();$("modalTitle").textContent="ऑर्डर अपडेट करें";$("editOrderId").value=o.id;
  $("customerName").value=o.name;$("customerPhone").value=o.phone;$("customerAddress").value=o.address||"";
  $("itemName").value=o.item;$("design").value=o.design||"";$("quantity").value=o.quantity||1;$("measurements").value=o.measurements||"";
  $("orderDate").value=o.orderDate;$("deliveryDate").value=o.deliveryDate||"";$("totalAmount").value=o.total;$("advanceAmount").value=o.paid||0;$("orderNote").value=o.note||"";
  updateBalancePreview();openModal("orderModal");
}
function addPayment(id){
  const o=orders.find(x=>x.id===id);if(!o)return;
  $("paymentForm").reset();$("paymentOrderId").value=id;$("paymentDate").value=today();
  $("paymentAmount").max=balance(o);$("paymentSummary").textContent=`${o.name} | ऑर्डर ${o.id} | बाकी रकम ${money(balance(o))}`;
  openModal("paymentModal");
}
function receipt(id){
  const o=orders.find(x=>x.id===id);if(!o)return;
  const payments=(o.payments||[]).map(p=>`<tr><td>${safeText(p.date)}</td><td>${safeText(p.method)}</td><td>${safeText(p.note||"—")}</td><td>${money(p.amount)}</td></tr>`).join("");
  $("receiptArea").innerHTML=`<div class="receipt"><h1>Shiv Shakti Furniture &amp; Engineering Works</h1><h2>ऑर्डर / भुगतान रसीद</h2><p><b>पता:</b> सेमरियाँ, कोचस, रोहतास – 821112</p><p><b>मोबाइल:</b> 6207486280</p><hr><p><b>ऑर्डर ID:</b> ${safeText(o.id)}　 <b>ऑर्डर तारीख:</b> ${safeText(o.orderDate)}</p><p><b>ग्राहक:</b> ${safeText(o.name)}　 <b>मोबाइल:</b> ${safeText(o.phone)}</p><p><b>पता:</b> ${safeText(o.address||"—")}</p><table><tr><th>सामान</th><th>डिजाइन / नाप</th><th>मात्रा</th><th>कुल</th></tr><tr><td>${safeText(o.item)}</td><td>${safeText([o.design,o.measurements].filter(Boolean).join(" / ")||"—")}</td><td>${safeText(o.quantity)}</td><td>${money(o.total)}</td></tr></table><h3>भुगतान विवरण</h3><table><tr><th>तारीख</th><th>तरीका</th><th>नोट</th><th>रकम</th></tr>${payments||`<tr><td>${safeText(o.orderDate)}</td><td>एडवांस</td><td>प्रारंभिक भुगतान</td><td>${money(o.paid)}</td></tr>`}</table><p class="receipt-total">कुल: ${money(o.total)} | प्राप्त: ${money(o.paid)} | बाकी: ${money(balance(o))}</p><p><b>डिलीवरी तारीख:</b> ${safeText(o.deliveryDate||"निर्धारित नहीं")}</p><p><b>नोट:</b> ${safeText(o.note||"—")}</p><br><p>ग्राहक के हस्ताक्षर: __________________　 दुकान की मुहर: __________________</p><p style="text-align:center">धन्यवाद! फिर पधारें।</p></div>`;
  window.print();
}
function sendWhatsApp(id){
  const o=orders.find(x=>x.id===id);if(!o)return;
  const msg=`नमस्ते ${o.name} जी,\nआपके Shiv Shakti Furniture ऑर्डर ${o.id} का विवरण:\nसामान: ${o.item}\nकुल कीमत: ${money(o.total)}\nप्राप्त: ${money(o.paid)}\nबाकी: ${money(balance(o))}\nडिलीवरी तारीख: ${o.deliveryDate||"निर्धारित नहीं"}\nधन्यवाद।`;
  window.open("https://wa.me/91"+o.phone.replace(/\D/g,"").slice(-10)+"?text="+encodeURIComponent(msg),"_blank","noopener");
}
$("ordersBody").addEventListener("click",e=>{
  const b=e.target.closest("button[data-action]");if(!b)return;const id=b.dataset.id,action=b.dataset.action;
  if(action==="edit")editOrder(id);
  if(action==="pay")addPayment(id);
  if(action==="receipt")receipt(id);
  if(action==="wa")sendWhatsApp(id);
  if(action==="delete"){if(confirm("क्या आप यह ऑर्डर डिलीट करना चाहते हैं? यह वापस नहीं आएगा, जब तक बैकअप न हो।")){orders=orders.filter(o=>o.id!==id);saveOrders()}}
});
$("orderForm").addEventListener("submit",e=>{
  e.preventDefault();
  const id=$("editOrderId").value;const total=Number($("totalAmount").value),advance=Number($("advanceAmount").value||0);
  if(advance>total){alert("एडवांस कुल कीमत से अधिक नहीं हो सकता।");return}
  const old=orders.find(o=>o.id===id);const data={
    id:id||"SS"+Date.now().toString().slice(-8),name:$("customerName").value.trim(),phone:$("customerPhone").value.trim(),
    address:$("customerAddress").value.trim(),item:$("itemName").value.trim(),design:$("design").value.trim(),
    quantity:Number($("quantity").value),measurements:$("measurements").value.trim(),orderDate:$("orderDate").value,
    deliveryDate:$("deliveryDate").value,total,paid:old?Number(old.paid||0):advance,note:$("orderNote").value.trim(),
    payments:old?(old.payments||[]):(advance>0?[{date:today(),amount:advance,method:"एडवांस",note:"प्रारंभिक एडवांस"}]:[])
  };
  if(old){const extra=advance-Number(old.paid||0);if(extra>0)data.payments.push({date:today(),amount:extra,method:"एडवांस अपडेट",note:"ऑर्डर अपडेट के समय जोड़ा गया"});data.paid=Math.max(0,advance);orders=orders.map(o=>o.id===id?data:o)}
  else orders.push(data);
  saveOrders();closeModal("orderModal");alert("ऑर्डर सफलतापूर्वक सेव हो गया।");
});
$("paymentForm").addEventListener("submit",e=>{
  e.preventDefault();const id=$("paymentOrderId").value;const o=orders.find(x=>x.id===id);if(!o)return;
  const amount=Number($("paymentAmount").value);if(amount<=0||amount>balance(o)){alert("रकम सही डालें। भुगतान बाकी रकम से अधिक नहीं हो सकता।");return}
  o.paid=Number(o.paid||0)+amount;o.payments=o.payments||[];o.payments.push({date:$("paymentDate").value,amount,method:$("paymentMethod").value,note:$("paymentNote").value.trim()});
  saveOrders();closeModal("paymentModal");alert("भुगतान सेव हो गया।");
});
$("exportBtn").addEventListener("click",()=>{
  const blob=new Blob([JSON.stringify({app:"Shiv Shakti Furniture",version:1,exportedAt:new Date().toISOString(),orders},null,2)],{type:"application/json"});
  const url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download=`shiv-shakti-backup-${today()}.json`;a.click();URL.revokeObjectURL(url);
});
$("importFile").addEventListener("change",async e=>{
  const file=e.target.files[0];if(!file)return;
  try{const data=JSON.parse(await file.text());const incoming=Array.isArray(data)?data:data.orders;
    if(!Array.isArray(incoming)||!incoming.every(o=>o&&o.id&&o.name&&Number.isFinite(Number(o.total))))throw new Error("invalid");
    if(!confirm(`बैकअप में ${incoming.length} ऑर्डर हैं। इससे वर्तमान ऑर्डर बदल जाएंगे। पहले वर्तमान डेटा का बैकअप लें। जारी रखें?`))return;
    orders=incoming;saveOrders();alert("बैकअप Restore हो गया।");
  }catch(err){alert("यह बैकअप फाइल सही नहीं है।");}finally{e.target.value=""}
});
$("newOrderBtn").addEventListener("click",()=>openOrder());
$("search").addEventListener("input",renderProducts);$("orderSearch").addEventListener("input",renderOrders);
["totalAmount","advanceAmount"].forEach(id=>$(id).addEventListener("input",updateBalancePreview));
$("menuBtn").addEventListener("click",()=>$("nav").classList.toggle("open"));
document.querySelectorAll("#nav a").forEach(a=>a.addEventListener("click",()=>$("nav").classList.remove("open")));
$("closeModal").addEventListener("click",()=>closeModal("orderModal"));$("cancelModal").addEventListener("click",()=>closeModal("orderModal"));
$("closePayment").addEventListener("click",()=>closeModal("paymentModal"));
["orderModal","paymentModal"].forEach(id=>$(id).addEventListener("click",e=>{if(e.target.id===id)closeModal(id)}));
$("year").textContent=new Date().getFullYear();
renderCategories();renderProducts();renderOrders();renderStats();