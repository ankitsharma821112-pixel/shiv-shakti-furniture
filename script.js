const productTypes = [
  {
    category: "बेड",
    prefix: "bed",
    names: [
      "लकड़ी का बेड", "डबल बेड", "डिजाइनर बेड", "शीशम लकड़ी का बेड",
      "मॉडर्न बेड", "किंग साइज बेड", "क्वीन साइज बेड", "स्टोरेज बेड",
      "बॉक्स बेड", "डबल बॉक्स बेड", "सिंगल बेड", "बच्चों का बेड",
      "डिजाइनर डबल बेड", "प्रीमियम बेड", "मजबूत लकड़ी का बेड",
      "सिंपल बेड", "नक्काशीदार बेड", "मॉडर्न डबल बेड",
      "कस्टम डिजाइन बेड", "स्पेशल बेड"
    ]
  },
  {
    category: "सोफा",
    prefix: "sofa",
    names: [
      "सोफा सेट", "तीन सीटर सोफा", "दो सीटर सोफा", "सिंगल सोफा",
      "लकड़ी का सोफा", "डिजाइनर सोफा", "मॉडर्न सोफा", "L शेप सोफा",
      "फैमिली सोफा", "प्रीमियम सोफा", "क्लासिक सोफा", "सोफा चेयर",
      "वुडन सोफा", "नक्काशीदार सोफा", "सिंपल सोफा", "कॉर्नर सोफा",
      "मॉडर्न सोफा सेट", "कस्टम सोफा", "लक्जरी सोफा", "स्पेशल सोफा"
    ]
  },
  {
    category: "कुर्सी",
    prefix: "chair",
    names: [
      "लकड़ी की कुर्सी", "डिजाइनर कुर्सी", "डाइनिंग कुर्सी", "ऑफिस कुर्सी",
      "मजबूत कुर्सी", "शीशम कुर्सी", "सिंपल कुर्सी", "हाई बैक कुर्सी",
      "आर्मरेस्ट कुर्सी", "मॉडर्न कुर्सी", "नक्काशीदार कुर्सी",
      "फोल्डिंग कुर्सी", "प्रीमियम कुर्सी", "डाइनिंग चेयर",
      "लकड़ी की आर्म चेयर", "कस्टम कुर्सी", "स्टडी चेयर",
      "गेस्ट चेयर", "क्लासिक कुर्सी", "स्पेशल कुर्सी"
    ]
  },
  {
    category: "टेबल",
    prefix: "table",
    names: [
      "लकड़ी की टेबल", "स्टडी टेबल", "ऑफिस टेबल", "कंप्यूटर टेबल",
      "सेंटर टेबल", "कॉफी टेबल", "डिजाइनर टेबल", "मॉडर्न टेबल",
      "शीशम टेबल", "वर्क टेबल", "सिंपल टेबल", "प्रीमियम टेबल",
      "छोटी टेबल", "बड़ी टेबल", "साइड टेबल", "नक्काशीदार टेबल",
      "कस्टम टेबल", "मजबूत टेबल", "ड्रॉअर वाली टेबल", "स्पेशल टेबल"
    ]
  },
  {
    category: "अलमारी",
    prefix: "almari",
    names: [
      "लकड़ी की अलमारी", "डबल डोर अलमारी", "डिजाइनर अलमारी",
      "शीशम अलमारी", "कपड़ों की अलमारी", "मॉडर्न अलमारी",
      "तीन दरवाजे की अलमारी", "प्रीमियम अलमारी", "सिंपल अलमारी",
      "बड़ी अलमारी", "छोटी अलमारी", "ड्रॉअर वाली अलमारी",
      "नक्काशीदार अलमारी", "स्टोरेज अलमारी", "कस्टम अलमारी",
      "मजबूत अलमारी", "मॉडर्न डबल अलमारी", "क्लासिक अलमारी",
      "फैमिली अलमारी", "स्पेशल अलमारी"
    ]
  },
  {
    category: "डाइनिंग टेबल",
    prefix: "dining-table",
    names: [
      "चार सीटर डाइनिंग टेबल", "छह सीटर डाइनिंग टेबल",
      "आठ सीटर डाइनिंग टेबल", "लकड़ी की डाइनिंग टेबल",
      "डिजाइनर डाइनिंग टेबल", "शीशम डाइनिंग टेबल",
      "मॉडर्न डाइनिंग टेबल", "ग्लास टॉप डाइनिंग टेबल",
      "सिंपल डाइनिंग टेबल", "प्रीमियम डाइनिंग टेबल",
      "गोल डाइनिंग टेबल", "आयताकार डाइनिंग टेबल",
      "डाइनिंग टेबल सेट", "क्लासिक डाइनिंग टेबल",
      "मजबूत डाइनिंग टेबल", "छोटी डाइनिंग टेबल",
      "बड़ी डाइनिंग टेबल", "कस्टम डाइनिंग टेबल",
      "फैमिली डाइनिंग टेबल", "स्पेशल डाइनिंग टेबल"
    ]
  },
  {
    category: "दरवाजा",
    prefix: "door",
    names: [
      "लकड़ी का दरवाजा", "मुख्य दरवाजा", "डिजाइनर दरवाजा",
      "शीशम दरवाजा", "मॉडर्न दरवाजा", "नक्काशीदार दरवाजा",
      "सिंपल दरवाजा", "डबल दरवाजा", "पैनल वाला दरवाजा",
      "प्रीमियम दरवाजा", "कमरे का दरवाजा", "मजबूत दरवाजा",
      "क्लासिक दरवाजा", "सजावटी दरवाजा", "कस्टम दरवाजा",
      "फ्रंट डोर", "वुडन डोर", "मॉडर्न डबल डोर",
      "नया डिजाइन दरवाजा", "स्पेशल दरवाजा"
    ]
  },
  {
    category: "खिड़की",
    prefix: "window",
    names: [
      "लकड़ी की खिड़की", "एल्युमिनियम खिड़की", "स्लाइडिंग खिड़की",
      "डिजाइनर खिड़की", "मॉडर्न खिड़की", "शीशम खिड़की",
      "सिंपल खिड़की", "डबल पैनल खिड़की", "ग्लास खिड़की",
      "प्रीमियम खिड़की", "छोटी खिड़की", "बड़ी खिड़की",
      "मजबूत खिड़की", "क्लासिक खिड़की", "कस्टम खिड़की",
      "स्लाइडिंग विंडो", "वुडन विंडो", "मॉडर्न विंडो",
      "घर की खिड़की", "स्पेशल खिड़की"
    ]
  },
  {
    category: "एल्युमिनियम",
    prefix: "aluminium",
    names: [
      "एल्युमिनियम फ्रेम", "एल्युमिनियम दरवाजा", "एल्युमिनियम खिड़की",
      "स्लाइडिंग विंडो", "ग्लास फिटिंग", "एल्युमिनियम पार्टिशन",
      "शॉप फ्रंट", "ऑफिस पार्टिशन", "एल्युमिनियम फ्रेम सेट",
      "मॉडर्न विंडो", "ग्लास डोर", "एल्युमिनियम डोर",
      "कस्टम फ्रेम", "स्लाइडिंग डोर", "बालकनी विंडो",
      "एल्युमिनियम वर्क", "ग्लास खिड़की", "मॉडर्न फ्रेम",
      "शॉप विंडो", "स्पेशल एल्युमिनियम वर्क"
    ]
  },
  {
    category: "अन्य",
    prefix: "custom",
    names: [
      "कस्टम फर्नीचर", "जूता रैक", "टीवी यूनिट", "बुक शेल्फ",
      "ड्रेसिंग टेबल", "साइड कैबिनेट", "वुडन रैक", "स्टोरेज रैक",
      "पूजा मंदिर", "लकड़ी का स्टूल", "कपबोर्ड", "ड्रॉअर कैबिनेट",
      "कस्टम शेल्फ", "वुडन बेंच", "फर्नीचर सेट", "छोटा कैबिनेट",
      "मॉडर्न फर्नीचर", "डिजाइनर रैक", "घर का फर्नीचर",
      "स्पेशल कस्टम आइटम"
    ]
  }
];

// हर कैटेगरी के लिए अपने-आप 20 प्रोडक्ट बनाएँ
const products = productTypes.flatMap(type =>
  type.names.map((name, index) => {
    const number = String(index + 1).padStart(2, "0");

    return {
      name: `${name} ${number}`,
      category: type.category,
      image: `${type.prefix}-${number}.jpeg`,
      price: ""
    };
  })
);

const productGrid = document.getElementById("productGrid");
const categoriesBox = document.getElementById("categories");
const searchInput = document.getElementById("search");
const noResults = document.getElementById("noResults");

let selectedCategory = "सभी";

const categoryNames = [
  "सभी",
  ...productTypes.map(type => type.category)
];

function renderCategories() {
  categoriesBox.innerHTML = "";

  categoryNames.forEach(category => {
    const button = document.createElement("button");

    button.className =
      "category-btn" +
      (category === selectedCategory ? " active" : "");

    button.textContent = category;

    button.addEventListener("click", () => {
      selectedCategory = category;
      renderCategories();
      renderProducts();
    });

    categoriesBox.appendChild(button);
  });
}

function renderProducts() {
  const searchText = searchInput.value.trim().toLowerCase();

  const filteredProducts = products.filter(product => {
    const matchesCategory =
      selectedCategory === "सभी" ||
      product.category === selectedCategory;

    const matchesSearch =
      product.name.toLowerCase().includes(searchText) ||
      product.category.toLowerCase().includes(searchText);

    return matchesCategory && matchesSearch;
  });

  productGrid.innerHTML = "";
  noResults.hidden = filteredProducts.length > 0;

  filteredProducts.forEach(product => {
    const card = document.createElement("article");
    card.className = "product-card";

    const image = document.createElement("img");
    image.src = "images/" + product.image;
    image.alt = product.name;
    image.loading = "lazy";

    image.onerror = () => {
      image.alt = product.name + " — फोटो उपलब्ध नहीं";
    };

    const info = document.createElement("div");
    info.className = "product-info";

    const title = document.createElement("h3");
    title.textContent = product.name;

    const category = document.createElement("p");
    category.className = "product-category";
    category.textContent = product.category;

    const price = document.createElement("p");
    price.className = "price";
    price.textContent = product.price
      ? "कीमत: ₹" + product.price
      : "कीमत के लिए संपर्क करें";

    const enquiry = document.createElement("a");
    enquiry.className = "btn";
    enquiry.textContent = "WhatsApp पर पूछें";
    enquiry.href =
      "https://wa.me/916207486280?text=" +
      encodeURIComponent(
        "नमस्ते, मुझे " + product.name +
        " के बारे में जानकारी और कीमत चाहिए।"
      );

    enquiry.target = "_blank";
    enquiry.rel = "noopener";

    info.append(title, category, price, enquiry);
    card.append(image, info);
    productGrid.appendChild(card);
  });
}

searchInput.addEventListener("input", renderProducts);

document.getElementById("year").textContent =
  new Date().getFullYear();

document.getElementById("menuBtn").addEventListener("click", () => {
  document.getElementById("nav").classList.toggle("open");
});

document.querySelectorAll("#nav a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("nav").classList.remove("open");
  });
});

renderCategories();
renderProducts();