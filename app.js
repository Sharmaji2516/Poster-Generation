// --- Language Translations Data ---
const presetTranslations = {
    english: {
        ginger: {
            name: "Ginger Pickle",
            desc: "Ginger strips soaked in lemon juice and spices. Great for taste and digestion."
        },
        turmeric: {
            name: "Turmeric Pickle",
            desc: "Fresh raw turmeric roots, a royal gift to boost immunity."
        },
        mango: {
            name: "Mango Pickle",
            desc: "Hand-cut raw mangoes, sun-ripened in a blend of mustard oil, fenugreek, and fennel."
        },
        amla: {
            name: "Amla Pickle",
            desc: "Whole amlas soaked in spices. A perfect balance of sour and spicy flavors."
        },
        chili: {
            name: "Chili Pickle",
            desc: "Fresh green chilies stuffed with tangy and spicy spices. A perfect companion for parathas."
        }
    },
    hindi: {
        ginger: {
            name: "अदरक का अचार",
            desc: "नींबू के रस और मसालों में डूबा अदरक। स्वाद और पाचन के लिए बेहतरीन।"
        },
        turmeric: {
            name: "हल्दी का अचार",
            desc: "कच्ची हल्दी की गांठें, रोग प्रतिरोधक क्षमता बढ़ाने वाला एक शाही उपहार।"
        },
        mango: {
            name: "आम का अचार",
            desc: "सरसों के तेल, मेथी और सौंफ के मिश्रण में धूप में पकाया हुआ हाथ से कटा कच्चा आम।"
        },
        amla: {
            name: "आंवले का अचार",
            desc: "मसालों में डूबा हुआ साबुत आंवला। खट्टे और तीखे स्वाद का सही संतुलन।"
        },
        chili: {
            name: "मिर्च का अचार",
            desc: "चटपटे मसालों से भरी ताजी हरी मिर्च। परांठे के लिए एक बेहतरीन साथी।"
        }
    }
};

const staticTextTranslations = {
    english: {
        brandTitle: "Mewari Special Achaar",
        brandTagline: "Royal Rajasthani Taste",
        packagingBadge: "Available in multiple sizes",
        packagingTagline: "Order on WhatsApp for Fresh Homemade Taste",
        bulkOffers: "Offers available on Bulk Orders!",
        price100gLabel: "100g Jar",
        price250gLabel: "250g Jar",
        price500gLabel: "500g Jar",
        price1kgLabel: "1kg Jar",
        promoBadge: "100% Homemade",
        whatsappCta: "Order on WhatsApp",
        disclaimer: "* Rates may vary based on delivery location.",
        captionTitle: "Special Collection",
        captionDesc: "Hukum, every jar of ours contains the old tradition of Mewar. Whether it is Mathania's chili or turmeric linked to tradition, every taste is incomparable.",
        imageTag: ""
    },
    hindi: {
        brandTitle: "मेवाड़ की विरासत",
        brandTagline: "शाही राजस्थानी स्वाद",
        packagingBadge: "कई आकारों में उपलब्ध",
        packagingTagline: "ताजा घरेलू स्वाद के लिए व्हाट्सएप पर आदेश करें",
        bulkOffers: "थोक ऑर्डर पर विशेष छूट उपलब्ध!",
        price100gLabel: "100 ग्राम जार",
        price250gLabel: "250 ग्राम जार",
        price500gLabel: "500 ग्राम जार",
        price1kgLabel: "1 किलो जार",
        promoBadge: "100% घरेलू",
        whatsappCta: "व्हाट्सएप पर ऑर्डर करें",
        disclaimer: "* डिलीवरी स्थान के अनुसार दरों में बदलाव हो सकता है।",
        captionTitle: "विशेष संग्रह",
        captionDesc: "हुकुम, हमारे हर जार में मेवाड़ की प्राचीन परंपरा समाहित है। चाहे वह मथानिया की मिर्च हो या परंपरा से जुड़ी हल्दी, हर स्वाद लाजवाब है।",
        imageTag: ""
    }
};

// --- Product Presets Data ---
const productPresets = {
    ginger: {
        name: "अदरक का अचार",
        desc: "नींबू के रस और मसालों में डूबा अदरक। स्वाद और पाचन के लिए बेहतरीन।",
        spicy: 6,
        sour: 5,
        earthy: 9,
        strong: 4,
        price100g: 80,
        price250g: 160,
        price500g: 290,
        price1kg: 579,
        image: "assets/images/ginger.png",
        color: "#c25e2e" // ochre
    },
    turmeric: {
        name: "हल्दी का अचार",
        desc: "कच्ची हल्दी की गांठें, रोग प्रतिरोधक क्षमता बढ़ाने वाला एक शाही उपहार।",
        spicy: 5,
        sour: 3,
        earthy: 10,
        strong: 4,
        price100g: 60,
        price250g: 120,
        price500g: 200,
        price1kg: 399,
        image: "assets/images/turmeric.png",
        color: "#d9a406" // turmeric yellow
    },
    mango: {
        name: "आम का अचार",
        desc: "सरसों के तेल, मेथी और सौंफ के मिश्रण में धूप में पकाया हुआ हाथ से कटा कच्चा आम।",
        spicy: 8,
        sour: 9,
        earthy: 5,
        strong: 6,
        price100g: 50,
        price250g: 100,
        price500g: 180,
        price1kg: 359,
        image: "assets/images/mango.png",
        color: "#d97706" // amber mango
    },
    amla: {
        name: "आंवले का अचार",
        desc: "मसालों में डूबा हुआ साबुत आंवला। खट्टे और तीखे स्वाद का सही संतुलन।",
        spicy: 4,
        sour: 10,
        earthy: 7,
        strong: 3,
        price100g: 55,
        price250g: 110,
        price500g: 175,
        price1kg: 349,
        image: "assets/images/amla.png",
        color: "#5b8c32" // olive amla
    },
    chili: {
        name: "मिर्च का अचार",
        desc: "चटपटे मसालों से भरी ताजी हरी मिर्च। परांठे के लिए एक बेहतरीन साथी।",
        spicy: 10,
        sour: 4,
        earthy: 3,
        strong: 7,
        price100g: 45,
        price250g: 90,
        price500g: 150,
        price1kg: 299,
        image: "assets/images/chili.png",
        color: "#b91c1c" // chili red
    }
};

let currentPreset = "ginger";
let customImageSrc = null;
let customLogoSrc = "Mewari Achaar Logo.png";
let currentLanguage = "hinglish";

// --- Marketing Badges Array (Built-in + Custom) ---
let badges = [
    { id: "flat60", type: "built-in", name: "💥 Flat 60% OFF", style: "glossy-pink", text: "60% OFF", emoji: "💥", show: true, x: 185, y: -8, scale: 100 },
    { id: "spinwin", type: "built-in", name: "🎯 Spin & Win Offer", style: "neon-glow", text: "SPIN & WIN", emoji: "🎯", show: true, x: -15, y: -8, scale: 100 },
    { id: "buy1get1", type: "built-in", name: "🎁 Buy 1 Get 1 Free", style: "golden-ticket", text: "BUY 1 GET 1", emoji: "🎁", show: false, x: -15, y: 215, scale: 100 },
    { id: "freeshipping", type: "built-in", name: "🚚 Free Shipping", style: "glassy-purple", text: "FREE SHIPPING", emoji: "🚚", show: false, x: 185, y: 215, scale: 100 },
    { id: "bestseller", type: "built-in", name: "🔥 Best Seller Seal", style: "gold", text: "BEST SELLER", emoji: "👑", show: false, x: 212, y: -12, scale: 100 },
    { id: "organic", type: "built-in", name: "🌿 100% Organic", style: "eco", text: "100% ORGANIC", emoji: "🌿", show: false, x: -8, y: 230, scale: 100 },
    { id: "traditional", type: "built-in", name: "👑 Royal Heritage", style: "heritage", text: "ROYAL RECIPE", emoji: "🛡️", show: false, x: -8, y: -8, scale: 100 },
    { id: "limited", type: "built-in", name: "⚡ Limited Stock", style: "limited", text: "LIMITED STOCK", emoji: "⚡", show: false, x: 212, y: 230, scale: 100 },
    { id: "homemade", type: "built-in", name: "❤️ Homemade Taste", style: "heritage", text: "HOMEMADE TASTE", emoji: "❤️", show: false, x: 50, y: 50, scale: 100 },
    { id: "pureveg", type: "built-in", name: "🌱 Pure Veg", style: "eco", text: "100% PURE VEG", emoji: "🟢", show: false, x: 50, y: 150, scale: 100 },
    { id: "premium", type: "built-in", name: "💎 Premium Quality", style: "gold", text: "PREMIUM QUALITY", emoji: "💎", show: false, x: 150, y: 50, scale: 100 }
];

// --- DOM Elements ---
const form = document.getElementById("poster-form");
const presetButtons = document.querySelectorAll(".preset-btn");
const posterCanvas = document.getElementById("poster-canvas");
const posterImg = document.getElementById("poster-img");

// Marketing & Pan/Zoom DOM elements
const campaignModeSelect = document.getElementById("campaign-mode");
const campaignTextInputs = document.getElementById("campaign-text-inputs");
const overlayAdjustmentsSection = document.getElementById("overlay-adjustments-section");
const campaignTitleInput = document.getElementById("campaign-title");
const campaignSubtitleInput = document.getElementById("campaign-subtitle");

const previewDiscountOverlay = document.getElementById("preview-discount-overlay");
const previewDiscountTitle = document.getElementById("preview-discount-title");
const previewDiscountSubtitle = document.getElementById("preview-discount-subtitle");

const sliderOverlayX = document.getElementById("slider-overlay-x");
const sliderOverlayY = document.getElementById("slider-overlay-y");
const sliderOverlayScale = document.getElementById("slider-overlay-scale");
const sliderOverlayRotate = document.getElementById("slider-overlay-rotate");

const valOverlayX = document.getElementById("val-overlay-x");
const valOverlayY = document.getElementById("val-overlay-y");
const valOverlayScale = document.getElementById("val-overlay-scale");
const valOverlayRotate = document.getElementById("val-overlay-rotate");

const showQrCodeCheckbox = document.getElementById("show-qr-code");
const previewQrContainer = document.getElementById("preview-qr-container");
const previewQrCode = document.getElementById("preview-qr-code");

const sliderZoom = document.getElementById("slider-zoom");
const sliderPanX = document.getElementById("slider-pan-x");
const sliderPanY = document.getElementById("slider-pan-y");

const valZoom = document.getElementById("val-zoom");
const valPanX = document.getElementById("val-pan-x");
const valPanY = document.getElementById("val-pan-y");

// Aspect Ratio
const ratioOptions = document.getElementsByName("poster-ratio");
const previewRatioLabel = document.getElementById("preview-ratio-label");


// Themes
const themeOptions = document.getElementsByName("poster-theme");

// Languages
const langOptions = document.getElementsByName("poster-lang");

// Inputs
const brandTitleInput = document.getElementById("brand-title");
const productNameInput = document.getElementById("product-name");
const productDescInput = document.getElementById("product-desc");
const badgeTextInput = document.getElementById("badge-text");
const badgeStyleSelect = document.getElementById("badge-style");
const imageTagTextInput = document.getElementById("image-tag-text");
const imageTagStyleSelect = document.getElementById("image-tag-style");
const posterCaptionTitleInput = document.getElementById("poster-caption-title");
const posterCaptionDescInput = document.getElementById("poster-caption-desc");

// Flipkart Specific Inputs
const fkSaleTitleInput = document.getElementById("fk-sale-title");
const fkDiscountTextInput = document.getElementById("fk-discount-text");
const fkCtaTextInput = document.getElementById("fk-cta-text");

// Sliders
const sliderSpicy = document.getElementById("slider-spicy");
const sliderSour = document.getElementById("slider-sour");
const sliderEarthy = document.getElementById("slider-earthy");
const sliderStrong = document.getElementById("slider-strong");

const valSpicy = document.getElementById("val-spicy");
const valSour = document.getElementById("val-sour");
const valEarthy = document.getElementById("val-earthy");
const valStrong = document.getElementById("val-strong");

// Prices
const show100gCheckbox = document.getElementById("show-100g");
const show250gCheckbox = document.getElementById("show-250g");
const show500gCheckbox = document.getElementById("show-500g");
const show1kgCheckbox = document.getElementById("show-1kg");

const price100gInput = document.getElementById("price-100g");
const price250gInput = document.getElementById("price-250g");
const price500gInput = document.getElementById("price-500g");
const price1kgInput = document.getElementById("price-1kg");

const label100gInput = document.getElementById("label-100g");
const label250gInput = document.getElementById("label-250g");
const label500gInput = document.getElementById("label-500g");
const label1kgInput = document.getElementById("label-1kg");

const price100gGroup = document.getElementById("price-100g-group");
const price250gGroup = document.getElementById("price-250g-group");
const price500gGroup = document.getElementById("price-500g-group");
const price1kgGroup = document.getElementById("price-1kg-group");

// Contacts
const whatsappNumInput = document.getElementById("whatsapp-num");
const whatsappCtaInput = document.getElementById("whatsapp-cta");
const websiteUrlInput = document.getElementById("website-url");
const customImageInput = document.getElementById("custom-image");
const fileNameDisplay = document.getElementById("file-name-display");
const btnRemoveCustomImage = document.getElementById("btn-remove-custom-image");

// Logo Elements
const customLogoInput = document.getElementById("custom-logo");
const logoNameDisplay = document.getElementById("logo-name-display");
const defaultRoyalCrest = document.getElementById("default-royal-crest");
const customLogoPreview = document.getElementById("custom-logo-preview");
const fkLogoPreview = document.getElementById("fk-logo-preview");

// Preview Elements
const previewBrandTitle = document.getElementById("preview-brand-title");
const previewProductName = document.getElementById("preview-product-name");
const previewProductDesc = document.getElementById("preview-product-desc");
const previewPromoBadge = document.getElementById("preview-promo-badge");
const previewImageTag = document.getElementById("preview-image-tag");

const previewValSpicy = document.getElementById("preview-val-spicy");
const previewValSour = document.getElementById("preview-val-sour");
const previewValEarthy = document.getElementById("preview-val-earthy");
const previewValStrong = document.getElementById("preview-val-strong");

const previewPrice100g = document.getElementById("preview-price-100g");
const previewPrice250g = document.getElementById("preview-price-250g");
const previewPrice500g = document.getElementById("preview-price-500g");
const previewPrice1kg = document.getElementById("preview-price-1kg");

const priceCard100g = document.getElementById("price-card-100g");
const priceCard250g = document.getElementById("price-card-250g");
const priceCard500g = document.getElementById("price-card-500g");
const priceCard1kg = document.getElementById("price-card-1kg");

const previewWhatsappCta = document.getElementById("preview-whatsapp-cta");
const previewWhatsappNum = document.getElementById("preview-whatsapp-num");
const previewWebsiteUrl = document.getElementById("preview-website-url");

// Flipkart Preview Elements
const previewFkSaleTag = document.getElementById("preview-fk-sale-tag");
const previewFkDiscount = document.getElementById("preview-fk-discount");
const previewFkCtaText = document.getElementById("preview-fk-cta-text");
const previewFkSubDetail = document.querySelector(".fk-sub-detail");

// Buttons
const btnDownload = document.getElementById("btn-download");

// Marketing Badges elements
const badgesControlsList = document.getElementById("badges-controls-list");
const previewStickersContainer = document.getElementById("preview-stickers-container");
const btnAddBadge = document.getElementById("btn-add-badge");
const addBadgePanel = document.getElementById("add-badge-panel");
const newBadgeTextInput = document.getElementById("new-badge-text");
const newBadgeEmojiInput = document.getElementById("new-badge-emoji");
const newBadgeStyleThemeSelect = document.getElementById("new-badge-style-theme");
const btnSaveBadge = document.getElementById("btn-save-badge");
const btnCancelBadge = document.getElementById("btn-cancel-badge");

// --- Persistence Helpers ---

// Get only custom presets added dynamically by the user
function getCustomPresetsOnly() {
    const defaultKeys = ["ginger", "turmeric", "mango", "amla", "chili"];
    const custom = {};
    for (const key in productPresets) {
        if (!defaultKeys.includes(key)) {
            custom[key] = {
                presetData: productPresets[key],
                transEn: presetTranslations.english[key],
                transHi: presetTranslations.hindi[key]
            };
        }
    }
    return custom;
}

// Retrieve form input and adjustment states
function getFormValues() {
    const values = {};
    
    // Radios
    const radios = ["poster-ratio", "poster-theme", "poster-lang", "poster-layout-style", "poster-image-shape"];
    radios.forEach(name => {
        const checkedOpt = document.querySelector(`input[name="${name}"]:checked`);
        if (checkedOpt) {
            values[name] = checkedOpt.value;
        }
    });

    // Form inputs, selects, sliders, checkboxes
    const ids = [
        "brand-title", "product-name", "product-desc", "poster-caption-title", "poster-caption-desc",
        "badge-text", "badge-style", "image-tag-text", "image-tag-style",
        "campaign-mode", "campaign-title", "campaign-subtitle",
        "show-qr-code",
        "sticker-bestseller", "sticker-organic", "sticker-traditional", "sticker-limited",
        "slider-zoom", "slider-pan-x", "slider-pan-y",
        "slider-overlay-x", "slider-overlay-y", "slider-overlay-scale", "slider-overlay-rotate",
        "slider-spicy", "slider-sour", "slider-earthy", "slider-strong",
        "show-100g", "price-100g", "label-100g",
        "show-250g", "price-250g", "label-250g",
        "show-500g", "price-500g", "label-500g",
        "show-1kg", "price-1kg", "label-1kg",
        "export-print-ready", "whatsapp-num", "whatsapp-cta", "website-url",
        "fk-sale-title", "fk-discount-text", "fk-cta-text"
    ];

    ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            if (el.type === "checkbox") {
                values[id] = el.checked;
            } else {
                values[id] = el.value;
            }
        }
    });

    return values;
}

// Save active configurations to localStorage
function saveState() {
    try {
        const state = {
            currentPreset,
            currentLanguage,
            customPresets: getCustomPresetsOnly(),
            formValues: getFormValues(),
            customLogoSrc,
            badges
        };
        try {
            state.customImageSrc = customImageSrc;
            localStorage.setItem("mewari_poster_generator_state", JSON.stringify(state));
        } catch (e) {
            console.warn("Storage quota exceeded. Saving state without custom product image.", e);
            state.customImageSrc = null;
            try {
                localStorage.setItem("mewari_poster_generator_state", JSON.stringify(state));
            } catch (e2) {
                console.warn("Storage quota still exceeded. Saving state without custom logo image.", e2);
                state.customLogoSrc = null;
                localStorage.setItem("mewari_poster_generator_state", JSON.stringify(state));
            }
        }
    } catch (err) {
        console.error("Failed to save state to localStorage", err);
    }
}

// Toggle Remove Custom Image button visibility
function updateRemoveImageButton() {
    const btn = document.getElementById("btn-remove-custom-image");
    if (btn) {
        btn.style.display = customImageSrc ? "inline-flex" : "none";
    }
}

// Add custom preset button to the DOM selector grid with a delete trigger
function addPresetToGrid(id, nameEn, imageSrc) {
    const grid = document.querySelector(".product-selector-grid");
    if (!grid) return null;
    
    // Check if button already exists
    let btn = document.querySelector(`.preset-btn[data-preset="${id}"]`);
    if (btn) return btn;

    btn = document.createElement("button");
    btn.type = "button";
    btn.className = "preset-btn";
    btn.dataset.preset = id;

    const thumbContainer = document.createElement("div");
    thumbContainer.className = "thumb-container";

    const img = document.createElement("img");
    img.src = imageSrc || "assets/images/ginger.png";
    img.alt = nameEn;

    const span = document.createElement("span");
    span.textContent = nameEn.split(" ")[0]; // first word

    thumbContainer.appendChild(img);
    btn.appendChild(thumbContainer);
    btn.appendChild(span);

    // Delete Trigger for custom presets
    const btnDel = document.createElement("button");
    btnDel.type = "button";
    btnDel.className = "btn-delete-preset";
    btnDel.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
    btnDel.title = "Delete Preset";
    btnDel.addEventListener("click", (e) => {
        e.stopPropagation(); // prevent click from selecting preset
        if (confirm(`Are you sure you want to delete the preset "${nameEn}"?`)) {
            // Delete from data memory
            delete productPresets[id];
            if (presetTranslations.english[id]) delete presetTranslations.english[id];
            if (presetTranslations.hindi[id]) delete presetTranslations.hindi[id];
            
            // Remove button from DOM
            btn.remove();
            
            // If the deleted preset is active, switch to ginger
            if (currentPreset === id) {
                const gingerBtn = document.querySelector('.preset-btn[data-preset="ginger"]');
                if (gingerBtn) {
                    gingerBtn.click();
                } else {
                    currentPreset = "ginger";
                    loadPreset("ginger");
                }
            }
            saveState();
        }
    });
    btn.appendChild(btnDel);

    grid.appendChild(btn);

    // Click listener to load preset
    btn.addEventListener("click", () => {
        const allPresetBtns = document.querySelectorAll(".preset-btn");
        allPresetBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        loadPreset(id);
        saveState();
    });

    return btn;
}

// Load configurations from localStorage and restore layout
function loadState() {
    try {
        const saved = localStorage.getItem("mewari_poster_generator_state");
        if (!saved) {
            // Default initialization
            if (customLogoPreview && fkLogoPreview) {
                customLogoPreview.src = "Mewari Achaar Logo.png";
                fkLogoPreview.src = "Mewari Achaar Logo.png";
                customLogoPreview.style.display = "block";
                if (defaultRoyalCrest) defaultRoyalCrest.style.display = "none";
                if (logoNameDisplay) logoNameDisplay.textContent = "Using Mewari Achaar Logo";
            }
            loadPreset(currentPreset);
            setupEventListeners();
            updateTheme();
            updateRatio();
            return;
        }

        const state = JSON.parse(saved);

        // 1. Restore Custom Presets
        if (state.badges) {
            const savedBadges = state.badges;
            const defaultBadges = [
                { id: "flat60", type: "built-in", name: "💥 Flat 60% OFF", style: "glossy-pink", text: "60% OFF", emoji: "💥", show: true, x: 185, y: -8, scale: 100 },
                { id: "spinwin", type: "built-in", name: "🎯 Spin & Win Offer", style: "neon-glow", text: "SPIN & WIN", emoji: "🎯", show: true, x: -15, y: -8, scale: 100 },
                { id: "buy1get1", type: "built-in", name: "🎁 Buy 1 Get 1 Free", style: "golden-ticket", text: "BUY 1 GET 1", emoji: "🎁", show: false, x: -15, y: 215, scale: 100 },
                { id: "freeshipping", type: "built-in", name: "🚚 Free Shipping", style: "glassy-purple", text: "FREE SHIPPING", emoji: "🚚", show: false, x: 185, y: 215, scale: 100 },
                { id: "bestseller", type: "built-in", name: "🔥 Best Seller Seal", style: "gold", text: "BEST SELLER", emoji: "👑", show: false, x: 212, y: -12, scale: 100 },
                { id: "organic", type: "built-in", name: "🌿 100% Organic", style: "eco", text: "100% ORGANIC", emoji: "🌿", show: false, x: -8, y: 230, scale: 100 },
                { id: "traditional", type: "built-in", name: "👑 Royal Heritage", style: "heritage", text: "ROYAL RECIPE", emoji: "🛡️", show: false, x: -8, y: -8, scale: 100 },
                { id: "limited", type: "built-in", name: "⚡ Limited Stock", style: "limited", text: "LIMITED STOCK", emoji: "⚡", show: false, x: 212, y: 230, scale: 100 },
                { id: "homemade", type: "built-in", name: "❤️ Homemade Taste", style: "heritage", text: "HOMEMADE TASTE", emoji: "❤️", show: false, x: 50, y: 50, scale: 100 },
                { id: "pureveg", type: "built-in", name: "🌱 Pure Veg", style: "eco", text: "100% PURE VEG", emoji: "🟢", show: false, x: 50, y: 150, scale: 100 },
                { id: "premium", type: "built-in", name: "💎 Premium Quality", style: "gold", text: "PREMIUM QUALITY", emoji: "💎", show: false, x: 150, y: 50, scale: 100 }
            ];
            
            const merged = [...savedBadges];
            defaultBadges.forEach(db => {
                if (!merged.some(b => b.id === db.id)) {
                    merged.push(db);
                }
            });
            badges = merged;
        }

        if (state.customPresets) {
            for (const id in state.customPresets) {
                const item = state.customPresets[id];
                productPresets[id] = item.presetData;
                presetTranslations.english[id] = item.transEn;
                presetTranslations.hindi[id] = item.transHi;

                // Add button to DOM if not already present
                addPresetToGrid(id, item.transEn.name, item.presetData.image);
            }
        }

        // 2. Restore Language & Preset selection variables
        if (state.currentLanguage) currentLanguage = state.currentLanguage;
        if (state.currentPreset) currentPreset = state.currentPreset;
        
        // 3. Restore custom image & logo paths/data
        if (state.customImageSrc) {
            customImageSrc = state.customImageSrc;
            if (posterImg) posterImg.src = customImageSrc;
            if (fileNameDisplay) fileNameDisplay.textContent = "Custom Image Loaded";
            updateRemoveImageButton();
        }
        if (state.customLogoSrc) {
            customLogoSrc = state.customLogoSrc;
            if (customLogoPreview) customLogoPreview.src = customLogoSrc;
            if (fkLogoPreview) fkLogoPreview.src = customLogoSrc;
            if (customLogoPreview) customLogoPreview.style.display = "block";
            if (defaultRoyalCrest) defaultRoyalCrest.style.display = "none";
            if (logoNameDisplay) logoNameDisplay.textContent = "Custom Logo Loaded";
        } else {
            if (customLogoPreview && fkLogoPreview) {
                customLogoPreview.src = "Mewari Achaar Logo.png";
                fkLogoPreview.src = "Mewari Achaar Logo.png";
                customLogoPreview.style.display = "block";
                if (defaultRoyalCrest) defaultRoyalCrest.style.display = "none";
                if (logoNameDisplay) logoNameDisplay.textContent = "Using Mewari Achaar Logo";
            }
        }



        // 4. Restore Form Values
        if (state.formValues) {
            // Restore radio buttons
            const radios = ["poster-ratio", "poster-theme", "poster-lang", "poster-layout-style", "poster-image-shape"];
            radios.forEach(name => {
                if (state.formValues[name]) {
                    const val = state.formValues[name];
                    const el = document.querySelector(`input[name="${name}"][value="${val}"]`);
                    if (el) el.checked = true;
                }
            });

            // Restore other inputs
            for (const id in state.formValues) {
                if (radios.includes(id)) continue;
                const el = document.getElementById(id);
                if (el) {
                    if (el.type === "checkbox") {
                        el.checked = state.formValues[id];
                    } else {
                        el.value = state.formValues[id];
                    }
                }
            }
        }

        // Highlight active preset button
        const allPresetBtns = document.querySelectorAll(".preset-btn");
        allPresetBtns.forEach(btn => {
            if (btn.dataset.preset === currentPreset) {
                btn.classList.add("active");
            } else {
                btn.classList.remove("active");
            }
        });

        // 5. Reinitialize event listeners and sync layout
        setupEventListeners();
        updateRemoveImageButton();
        renderBadgesControls();
        syncPreview();
        updateTheme();
        updateRatio();
    } catch (e) {
        console.error("Error loading state from localStorage, falling back to defaults", e);
        try {
            localStorage.removeItem("mewari_poster_generator_state");
        } catch (err) {}
        
        // Fallback default initialization
        if (customLogoPreview && fkLogoPreview) {
            customLogoPreview.src = "Mewari Achaar Logo.png";
            fkLogoPreview.src = "Mewari Achaar Logo.png";
            customLogoPreview.style.display = "block";
            if (defaultRoyalCrest) defaultRoyalCrest.style.display = "none";
            if (logoNameDisplay) logoNameDisplay.textContent = "Using Mewari Achaar Logo";
        }
        loadPreset(currentPreset);
        setupEventListeners();
        updateTheme();
        updateRatio();
    }
}

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
    loadState();
    updatePosterScale();
    window.addEventListener("resize", updatePosterScale);
});

// --- Functions ---

// Load Preset Data into Form
function loadPreset(presetKey) {
    currentPreset = presetKey;
    const data = productPresets[presetKey];
    if (!data) return;

    // Reset custom image tracker unless we explicitly uploaded one
    if (!customImageSrc && posterImg) {
        posterImg.src = data.image;
    }

    // Determine preset translation language
    const lang = (currentLanguage === "english") ? "english" : "hindi";
    const trans = presetTranslations[lang][presetKey];

    // Set values in form
    if (productNameInput) productNameInput.value = trans.name;
    if (productDescInput) productDescInput.value = trans.desc;
    if (sliderSpicy) sliderSpicy.value = data.spicy;
    if (sliderSour) sliderSour.value = data.sour;
    if (sliderEarthy) sliderEarthy.value = data.earthy;
    if (sliderStrong) sliderStrong.value = data.strong;
    if (price100gInput) price100gInput.value = data.price100g;
    if (price250gInput) price250gInput.value = data.price250g;
    if (price500gInput) price500gInput.value = data.price500g;
    if (price1kgInput) price1kgInput.value = data.price1kg;

    // Update Slider numerical values
    if (sliderSpicy && valSpicy) updateSliderLabel(sliderSpicy, valSpicy);
    if (sliderSour && valSour) updateSliderLabel(sliderSour, valSour);
    if (sliderEarthy && valEarthy) updateSliderLabel(sliderEarthy, valEarthy);
    if (sliderStrong && valStrong) updateSliderLabel(sliderStrong, valStrong);

    // Sync Live Preview
    syncPreview();
    updateThemeColorStyles();
}

// Update Range Labels
function updateSliderLabel(slider, labelEl) {
    if (slider && labelEl) {
        labelEl.textContent = `${slider.value}/10`;
    }
}

// Image Crop Zoom & Pan Transform Update
function updateImageTransform() {
    if (!posterImg) return;
    
    let zoomVal = sliderZoom ? parseInt(sliderZoom.value) : 100;
    if (isNaN(zoomVal) || zoomVal < 100) {
        zoomVal = 100;
        if (sliderZoom) sliderZoom.value = 100;
    }
    
    const scale = zoomVal / 100;
    
    // Get container dimensions (default to 270px)
    const containerWidth = posterImg.parentElement ? (posterImg.parentElement.offsetWidth || 270) : 270;
    const containerHeight = posterImg.parentElement ? (posterImg.parentElement.offsetHeight || 270) : 270;
    
    // Max translation in pixels in the unscaled coordinate system is containerWidth * (scale - 1) / 2
    const maxPanX = Math.max(0, Math.round((containerWidth * (scale - 1)) / 2));
    const maxPanY = Math.max(0, Math.round((containerHeight * (scale - 1)) / 2));
    
    // Update sliders min/max dynamically
    if (sliderPanX) {
        sliderPanX.min = -maxPanX;
        sliderPanX.max = maxPanX;
        let val = parseInt(sliderPanX.value) || 0;
        if (val > maxPanX) {
            val = maxPanX;
            sliderPanX.value = maxPanX;
        }
        if (val < -maxPanX) {
            val = -maxPanX;
            sliderPanX.value = -maxPanX;
        }
    }
    if (sliderPanY) {
        sliderPanY.min = -maxPanY;
        sliderPanY.max = maxPanY;
        let val = parseInt(sliderPanY.value) || 0;
        if (val > maxPanY) {
            val = maxPanY;
            sliderPanY.value = maxPanY;
        }
        if (val < -maxPanY) {
            val = -maxPanY;
            sliderPanY.value = -maxPanY;
        }
    }
    
    const panXVal = sliderPanX ? parseInt(sliderPanX.value) : 0;
    const panYVal = sliderPanY ? parseInt(sliderPanY.value) : 0;
    
    if (valZoom) valZoom.textContent = `${zoomVal}%`;
    if (valPanX) valPanX.textContent = `${panXVal}px`;
    if (valPanY) valPanY.textContent = `${panYVal}px`;
    
    posterImg.style.setProperty("--img-zoom", scale);
    posterImg.style.setProperty("--img-pan-x", `${panXVal}px`);
    posterImg.style.setProperty("--img-pan-y", `${panYVal}px`);
}

// Discount Overlay Zoom, Pan & Rotate Transform Update
function updateOverlayTransform() {
    if (!previewDiscountOverlay) return;

    const overlayX = sliderOverlayX ? sliderOverlayX.value : 35;
    const overlayY = sliderOverlayY ? sliderOverlayY.value : 35;
    const overlayScale = sliderOverlayScale ? sliderOverlayScale.value : 100;
    const overlayRotate = sliderOverlayRotate ? sliderOverlayRotate.value : -8;

    if (valOverlayX) valOverlayX.textContent = `${overlayX}px`;
    if (valOverlayY) valOverlayY.textContent = `${overlayY}px`;
    if (valOverlayScale) valOverlayScale.textContent = `${overlayScale}%`;
    if (valOverlayRotate) valOverlayRotate.textContent = `${overlayRotate}°`;

    previewDiscountOverlay.style.left = `${overlayX}px`;
    previewDiscountOverlay.style.top = `${overlayY}px`;
    previewDiscountOverlay.style.transform = `scale(${overlayScale / 100}) rotate(${overlayRotate}deg)`;
}

// Campaign Mode Layouts & Texts Sync
function updateCampaignMode() {
    const campaignMode = campaignModeSelect ? campaignModeSelect.value : "showcase";
    
    if (campaignTextInputs) {
        campaignTextInputs.style.display = (campaignMode === "discount") ? "block" : "none";
    }
    if (overlayAdjustmentsSection) {
        overlayAdjustmentsSection.style.display = (campaignMode === "discount") ? "block" : "none";
    }
    
    if (previewDiscountOverlay) {
        previewDiscountOverlay.style.display = (campaignMode === "discount") ? "flex" : "none";
    }
    
    if (campaignTitleInput && previewDiscountTitle) {
        previewDiscountTitle.textContent = campaignTitleInput.value.toUpperCase();
    }
    if (campaignSubtitleInput && previewDiscountSubtitle) {
        previewDiscountSubtitle.textContent = campaignSubtitleInput.value;
    }
}

// WhatsApp Dynamic QR Code Generation
function updateQrCode() {
    if (!showQrCodeCheckbox || !previewQrContainer || !previewQrCode) return;
    
    if (showQrCodeCheckbox.checked) {
        previewQrContainer.style.display = "flex";
        
        const lockedWhatsappNum = "+91 70141012742";
        const whatsappNumVal = whatsappNumInput ? whatsappNumInput.value : lockedWhatsappNum;
        const cleanPhone = whatsappNumVal.replace(/[^0-9]/g, "");
        
        const activeName = (productNameInput ? productNameInput.value : "Achaar");
        const waLink = `https://wa.me/${cleanPhone}?text=Hi!%20I%20want%20to%20order%20${encodeURIComponent(activeName)}.`;
        
        previewQrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(waLink)}`;
    } else {
        previewQrContainer.style.display = "none";
    }
}

// Render Marketing Badges Form Controls in Section 5C
function renderBadgesControls() {
    if (!badgesControlsList) return;

    badgesControlsList.innerHTML = "";

    badges.forEach((badge, index) => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "badge-control-item";
        itemDiv.style.background = "rgba(255, 255, 255, 0.02)";
        itemDiv.style.border = "1px solid var(--panel-border)";
        itemDiv.style.borderRadius = "8px";
        itemDiv.style.padding = "10px";
        itemDiv.style.marginBottom = "10px";

        // Header with switch and delete button (if custom)
        const headerDiv = document.createElement("div");
        headerDiv.style.display = "flex";
        headerDiv.style.justifyContent = "space-between";
        headerDiv.style.alignItems = "center";
        headerDiv.style.marginBottom = "8px";

        // Left side: switch and name
        const leftLabel = document.createElement("label");
        leftLabel.className = "checkbox-group";
        leftLabel.style.margin = "0";

        const chk = document.createElement("input");
        chk.type = "checkbox";
        chk.checked = badge.show;
        chk.addEventListener("change", () => {
            badge.show = chk.checked;
            slidersDiv.style.display = chk.checked ? "block" : "none";
            syncPreview();
            saveState();
        });

        const span = document.createElement("span");
        span.textContent = badge.name;
        span.style.fontSize = "0.8rem";
        span.style.fontWeight = "600";
        span.style.color = "var(--text-light)";
        span.style.marginLeft = "8px";

        leftLabel.appendChild(chk);
        leftLabel.appendChild(span);
        headerDiv.appendChild(leftLabel);

        // Right side: delete button if custom
        if (badge.type === "custom") {
            const btnDel = document.createElement("button");
            btnDel.type = "button";
            btnDel.className = "btn-delete-badge";
            btnDel.innerHTML = '<i class="fa-solid fa-trash"></i>';
            btnDel.style.background = "none";
            btnDel.style.border = "none";
            btnDel.style.color = "#ef4444";
            btnDel.style.cursor = "pointer";
            btnDel.style.fontSize = "0.85rem";
            btnDel.addEventListener("click", () => {
                if (confirm("Are you sure you want to delete this custom badge?")) {
                    badges.splice(index, 1);
                    renderBadgesControls();
                    syncPreview();
                    saveState();
                }
            });
            headerDiv.appendChild(btnDel);
        }

        itemDiv.appendChild(headerDiv);

        // Sliders block (only shown if show is true)
        const slidersDiv = document.createElement("div");
        slidersDiv.style.display = badge.show ? "block" : "none";
        slidersDiv.style.marginTop = "8px";
        slidersDiv.style.borderTop = "1px dashed rgba(255, 255, 255, 0.05)";
        slidersDiv.style.paddingTop = "8px";

        // Inline Text & Emoji edits
        const editsRow = document.createElement("div");
        editsRow.style.display = "grid";
        editsRow.style.gridTemplateColumns = "1.5fr 1fr";
        editsRow.style.gap = "8px";
        editsRow.style.marginBottom = "8px";

        const textGroup = document.createElement("div");
        textGroup.className = "input-group";
        textGroup.style.margin = "0";
        const textLabel = document.createElement("label");
        textLabel.textContent = "Text";
        textLabel.style.fontSize = "0.65rem";
        const textIn = document.createElement("input");
        textIn.type = "text";
        textIn.value = badge.text;
        textIn.style.padding = "4px 8px";
        textIn.style.fontSize = "0.75rem";
        textIn.addEventListener("input", () => {
            badge.text = textIn.value;
            syncPreview();
            saveState();
        });
        textGroup.appendChild(textLabel);
        textGroup.appendChild(textIn);

        const emojiGroup = document.createElement("div");
        emojiGroup.className = "input-group";
        emojiGroup.style.margin = "0";
        const emojiLabel = document.createElement("label");
        emojiLabel.textContent = "Emoji";
        emojiLabel.style.fontSize = "0.65rem";
        const emojiIn = document.createElement("input");
        emojiIn.type = "text";
        emojiIn.value = badge.emoji;
        emojiIn.style.padding = "4px 8px";
        emojiIn.style.fontSize = "0.75rem";
        emojiIn.addEventListener("input", () => {
            badge.emoji = emojiIn.value;
            syncPreview();
            saveState();
        });
        emojiGroup.appendChild(emojiLabel);
        emojiGroup.appendChild(emojiIn);

        editsRow.appendChild(textGroup);
        editsRow.appendChild(emojiGroup);
        slidersDiv.appendChild(editsRow);

        // Sliders config
        const sliderConfigs = [
            { label: "Horizontal (X)", icon: "fa-arrows-left-right", min: -50, max: 320, val: badge.x, unit: "px", update: (v) => { badge.x = v; } },
            { label: "Vertical (Y)", icon: "fa-arrows-up-down", min: -50, max: 320, val: badge.y, unit: "px", update: (v) => { badge.y = v; } },
            { label: "Badge Size", icon: "fa-magnifying-glass-plus", min: 50, max: 150, val: badge.scale, unit: "%", update: (v) => { badge.scale = v; } }
        ];

        sliderConfigs.forEach(cfg => {
            const grp = document.createElement("div");
            grp.className = "slider-group";
            grp.style.marginBottom = "8px";

            const hdr = document.createElement("div");
            hdr.className = "slider-header";
            hdr.style.marginBottom = "2px";
            hdr.innerHTML = `<span><i class="fa-solid ${cfg.icon}"></i> ${cfg.label}</span>`;
            
            const valSpan = document.createElement("span");
            valSpan.className = "slider-val";
            valSpan.textContent = `${cfg.val}${cfg.unit}`;
            hdr.appendChild(valSpan);

            const rng = document.createElement("input");
            rng.type = "range";
            rng.min = cfg.min;
            rng.max = cfg.max;
            rng.value = cfg.val;
            rng.style.height = "4px";
            rng.addEventListener("input", () => {
                cfg.update(parseInt(rng.value));
                valSpan.textContent = `${rng.value}${cfg.unit}`;
                syncPreview();
                saveState();
            });

            grp.appendChild(hdr);
            grp.appendChild(rng);
            slidersDiv.appendChild(grp);
        });

        itemDiv.appendChild(slidersDiv);
        badgesControlsList.appendChild(itemDiv);
    });
}

// Render dynamic badges on preview canvas
function renderBadgesPreview() {
    if (!previewStickersContainer) return;

    previewStickersContainer.innerHTML = "";

    badges.forEach(badge => {
        if (!badge.show) return;

        const stickerDiv = document.createElement("div");
        stickerDiv.className = `mkt-sticker sticker-${badge.id}`;
        stickerDiv.style.left = `${badge.x}px`;
        stickerDiv.style.top = `${badge.y}px`;
        stickerDiv.style.transform = `scale(${badge.scale / 100})`;
        stickerDiv.style.display = "block";
        stickerDiv.style.position = "absolute";
        stickerDiv.style.pointerEvents = "none";

        // HTML structure based on badge style template
        if (badge.style === "gold") {
            const parts = badge.text.split(" ");
            const p1 = parts[0] || "";
            const p2 = parts.slice(1).join(" ") || "";
            stickerDiv.innerHTML = `
                <div class="sticker-badge-gold">
                    <span style="font-size: 9px; line-height: 1; margin-bottom: 2px;">${badge.emoji}</span>
                    <span class="st-line1">${p1}</span>
                    <span class="st-line2">${p2}</span>
                </div>
            `;
        } else if (badge.style === "eco") {
            stickerDiv.innerHTML = `
                <div class="sticker-badge-eco">
                    <span style="font-size: 10px; margin-right: 2px;">${badge.emoji}</span>
                    <span>${badge.text}</span>
                </div>
            `;
        } else if (badge.style === "heritage") {
            stickerDiv.innerHTML = `
                <div class="sticker-badge-heritage">
                    <span style="font-size: 10px; margin-right: 2px;">${badge.emoji}</span>
                    <span>${badge.text}</span>
                </div>
            `;
        } else if (badge.style === "limited") {
            stickerDiv.innerHTML = `
                <div class="sticker-badge-limited">
                    <span style="font-size: 10px; margin-right: 2px;">${badge.emoji}</span>
                    <span>${badge.text}</span>
                </div>
            `;
        } else if (badge.style === "glossy-pink") {
            stickerDiv.innerHTML = `
                <div class="sticker-badge-glossy-pink">
                    <span style="font-size: 10px; margin-right: 3px;">${badge.emoji}</span>
                    <span>${badge.text}</span>
                </div>
            `;
        } else if (badge.style === "neon-glow") {
            stickerDiv.innerHTML = `
                <div class="sticker-badge-neon-glow">
                    <span style="font-size: 10px; margin-right: 3px;">${badge.emoji}</span>
                    <span>${badge.text}</span>
                </div>
            `;
        } else if (badge.style === "golden-ticket") {
            stickerDiv.innerHTML = `
                <div class="sticker-badge-golden-ticket">
                    <span style="font-size: 11px; margin-bottom: 2px;">${badge.emoji}</span>
                    <span>${badge.text}</span>
                </div>
            `;
        } else if (badge.style === "glassy-purple") {
            stickerDiv.innerHTML = `
                <div class="sticker-badge-glassy-purple">
                    <span style="font-size: 10px; margin-right: 3px;">${badge.emoji}</span>
                    <span>${badge.text}</span>
                </div>
            `;
        }

        previewStickersContainer.appendChild(stickerDiv);
    });
}

// Sync Form Inputs to Live Preview
function syncPreview() {
    const textLang = (currentLanguage === "hinglish") ? "english" : currentLanguage;
    const staticTrans = staticTextTranslations[textLang];

    // Brand & Product Text
    if (previewBrandTitle && brandTitleInput) {
        previewBrandTitle.textContent = brandTitleInput.value.toUpperCase();
    }
    const brandTextBlock = document.querySelector(".brand-text-block");
    if (brandTextBlock) {
        if (currentLanguage === "hindi" || currentLanguage === "hinglish") {
            brandTextBlock.classList.add("lang-hindi");
        } else {
            brandTextBlock.classList.remove("lang-hindi");
        }
    }
    if (previewProductName && productNameInput) {
        previewProductName.textContent = productNameInput.value;
    }
    if (previewProductDesc && productDescInput) {
        previewProductDesc.textContent = productDescInput.value;
    }
    
    // Promo Badge
    if (previewPromoBadge && badgeTextInput && badgeStyleSelect) {
        const badgeText = badgeTextInput.value;
        const badgeContentEl = previewPromoBadge.querySelector(".badge-content");
        if (badgeContentEl) badgeContentEl.textContent = badgeText;
        
        // Badge shape styles
        const badgeStyle = badgeStyleSelect.value;
        previewPromoBadge.className = "poster-promo-badge"; // reset classes
        if (badgeStyle === "ribbon") {
            previewPromoBadge.classList.add("badge-style-ribbon");
        } else if (badgeStyle === "minimal") {
            previewPromoBadge.classList.add("badge-style-minimal");
        } else if (badgeStyle === "hide") {
            previewPromoBadge.classList.add("badge-style-hide");
        }
    }

    // Image Promo Tag Sync
    if (previewImageTag && imageTagTextInput) {
        const tagText = imageTagTextInput.value.trim();
        previewImageTag.textContent = tagText;
        
        // Reset classes
        previewImageTag.className = "image-promo-tag";
        
        if (tagText) {
            previewImageTag.style.display = "block";
            const tagStyle = imageTagStyleSelect ? imageTagStyleSelect.value : "modern-ribbon";
            previewImageTag.classList.add(`tag-style-${tagStyle}`);
        } else {
            previewImageTag.style.display = "none";
        }
    }

    // Taste Customizer Slider Sync
    if (sliderSpicy) updatePreviewMeter("spicy", sliderSpicy.value);
    if (sliderSour) updatePreviewMeter("sour", sliderSour.value);
    if (sliderEarthy) updatePreviewMeter("earthy", sliderEarthy.value);
    if (sliderStrong) updatePreviewMeter("strong", sliderStrong.value);

    // Price Customizer Sync
    const priceSizes = [
        { checkbox: show100gCheckbox, card: priceCard100g, group: price100gGroup, previewPrice: previewPrice100g, inputPrice: price100gInput, inputLabel: label100gInput, fallbackLabelKey: "price100gLabel" },
        { checkbox: show250gCheckbox, card: priceCard250g, group: price250gGroup, previewPrice: previewPrice250g, inputPrice: price250gInput, inputLabel: label250gInput, fallbackLabelKey: "price250gLabel" },
        { checkbox: show500gCheckbox, card: priceCard500g, group: price500gGroup, previewPrice: previewPrice500g, inputPrice: price500gInput, inputLabel: label500gInput, fallbackLabelKey: "price500gLabel" },
        { checkbox: show1kgCheckbox, card: priceCard1kg, group: price1kgGroup, previewPrice: previewPrice1kg, inputPrice: price1kgInput, inputLabel: label1kgInput, fallbackLabelKey: "price1kgLabel" }
    ];

    priceSizes.forEach(sz => {
        if (sz.checkbox) {
            if (sz.checkbox.checked) {
                if (sz.card) sz.card.style.display = "flex";
                if (sz.group) sz.group.style.display = "flex";
                if (sz.previewPrice && sz.inputPrice) sz.previewPrice.textContent = `₹${sz.inputPrice.value}`;
                
                // Sync label text to card preview
                const cardLabelEl = sz.card ? sz.card.querySelector(".size-label") : null;
                if (cardLabelEl) {
                    if (sz.inputLabel && sz.inputLabel.value.trim() !== "") {
                        cardLabelEl.textContent = sz.inputLabel.value.toUpperCase();
                    } else if (staticTrans && staticTrans[sz.fallbackLabelKey]) {
                        cardLabelEl.textContent = staticTrans[sz.fallbackLabelKey].toUpperCase();
                    }
                }
            } else {
                if (sz.card) sz.card.style.display = "none";
                if (sz.group) sz.group.style.display = "none";
            }
        }
    });

    // Contact Details Sync (Locked values)
    const lockedWhatsappNum = "+91 70141012742";
    const lockedWebsiteUrl = "www.mewari-achar.shop";

    const whatsappCtaVal = whatsappCtaInput ? whatsappCtaInput.value : (staticTrans?.whatsappCta || "Order on WhatsApp");
    const whatsappNumVal = whatsappNumInput ? whatsappNumInput.value : lockedWhatsappNum;
    if (previewWhatsappCta) previewWhatsappCta.textContent = whatsappCtaVal.toUpperCase();
    if (previewWhatsappNum) previewWhatsappNum.textContent = whatsappNumVal;

    // Update static poster texts based on language mode
    const packagingBadgeSpan = document.querySelector(".packaging-badge span");
    const packagingTaglineDiv = document.querySelector(".packaging-tagline");
    const packagingBulkSpan = document.querySelector(".packaging-bulk-offers span");
    const disclaimerDiv = document.querySelector(".poster-disclaimer");

    if (packagingBadgeSpan && staticTrans) {
        packagingBadgeSpan.textContent = staticTrans.packagingBadge;
    }
    if (packagingTaglineDiv && staticTrans) {
        packagingTaglineDiv.textContent = staticTrans.packagingTagline;
    }
    if (packagingBulkSpan && staticTrans) {
        packagingBulkSpan.textContent = staticTrans.bulkOffers;
    }
    if (disclaimerDiv && staticTrans) {
        disclaimerDiv.textContent = staticTrans.disclaimer;
    }

    // Brand Tagline
    const brandTaglineLang = (currentLanguage === "hinglish") ? "hindi" : currentLanguage;
    const taglineDiv = document.querySelector(".poster-brand-tagline");
    if (taglineDiv && staticTextTranslations[brandTaglineLang]) {
        taglineDiv.textContent = staticTextTranslations[brandTaglineLang].brandTagline;
    }

    // Website URL Sync
    const websiteUrlVal = websiteUrlInput ? websiteUrlInput.value : lockedWebsiteUrl;
    if (previewWebsiteUrl) {
        previewWebsiteUrl.textContent = websiteUrlVal.toLowerCase();
    }

    // Flipkart Marketing Sync (Locked default values)
    const fkSaleTitleVal = fkSaleTitleInput ? fkSaleTitleInput.value : "GRWM SALE";
    const fkDiscountTextVal = fkDiscountTextInput ? fkDiscountTextInput.value : "MIN. 50% OFF";
    const fkCtaTextVal = fkCtaTextInput ? fkCtaTextInput.value : "SHOP NOW";
    if (previewFkSaleTag) previewFkSaleTag.textContent = fkSaleTitleVal.toUpperCase();
    if (previewFkDiscount) previewFkDiscount.textContent = fkDiscountTextVal.toUpperCase();
    if (previewFkCtaText) previewFkCtaText.textContent = fkCtaTextVal.toUpperCase();
    
    const fkSubLang = (currentLanguage === "english") ? "english" : "hindi";
    const fkSubText = (fkSubLang === "english") ? "PURE MEWAR SPICES" : "à¤®à¥‡à¤µà¤¾à¤¡à¤¼ à¤•à¥‡ à¤¶à¥�à¤¦à¥�à¤§ à¤®à¤¸à¤¾à¤²à¥‡";
    if (previewFkSubDetail && productNameInput) {
        previewFkSubDetail.textContent = `${productNameInput.value.toUpperCase()} â€¢ ${fkSubText}`;
    }

    // Image Side Caption Input Sync
    const previewCaptionTitle = document.getElementById("preview-caption-title");
    const previewCaptionDesc = document.getElementById("preview-caption-desc");
    if (previewCaptionTitle && posterCaptionTitleInput) {
        previewCaptionTitle.textContent = posterCaptionTitleInput.value;
    }
    if (previewCaptionDesc && posterCaptionDescInput) {
        previewCaptionDesc.textContent = posterCaptionDescInput.value;
    }

    // Sync new Marketing elements
    updateImageTransform();
    updateOverlayTransform();
    updateCampaignMode();
    updateQrCode();
    renderBadgesPreview();
}


// Handle Language selection change
function handleLanguageChange() {
    if (langOptions) {
        for (const option of langOptions) {
            if (option.checked) {
                currentLanguage = option.value;
                break;
            }
        }
    }

    // Sync static form inputs with default translations
    const langKey = (currentLanguage === "hinglish") ? "hindi" : currentLanguage;
    const staticTrans = staticTextTranslations[langKey];
    
    if (brandTitleInput) brandTitleInput.value = staticTrans.brandTitle;
    if (posterCaptionTitleInput) posterCaptionTitleInput.value = staticTrans.captionTitle;
    if (posterCaptionDescInput) posterCaptionDescInput.value = staticTrans.captionDesc;
    
    if (currentLanguage === "hinglish") {
        if (badgeTextInput) badgeTextInput.value = staticTextTranslations.english.promoBadge;
        if (whatsappCtaInput) whatsappCtaInput.value = staticTextTranslations.english.whatsappCta;
        if (imageTagTextInput) imageTagTextInput.value = staticTextTranslations.english.imageTag;
    } else {
        if (badgeTextInput) badgeTextInput.value = staticTrans.promoBadge;
        if (whatsappCtaInput) whatsappCtaInput.value = staticTrans.whatsappCta;
        if (imageTagTextInput) imageTagTextInput.value = staticTrans.imageTag;
    }

    if (label100gInput) label100gInput.value = staticTrans.price100gLabel;
    if (label250gInput) label250gInput.value = staticTrans.price250gLabel;
    if (label500gInput) label500gInput.value = staticTrans.price500gLabel;
    if (label1kgInput) label1kgInput.value = staticTrans.price1kgLabel;

    // Update current preset details for selected language
    loadPreset(currentPreset);
}

// Update Single Meter Bar in Preview
function updatePreviewMeter(type, val) {
    const previewVal = document.getElementById(`preview-val-${type}`);
    const bar = document.querySelector(`.${type}-bar`);
    const knob = document.querySelector(`.${type}-knob`);
    
    if (previewVal) previewVal.textContent = `${val}/10`;
    if (bar) bar.style.width = `${val * 10}%`;
    if (knob) knob.style.left = `${val * 10}%`;
}

// Update Aspect Ratio
function updateRatio() {
    let selectedRatio = "square";
    if (ratioOptions) {
        for (const option of ratioOptions) {
            if (option.checked) {
                selectedRatio = option.value;
                break;
            }
        }
    }

    if (posterCanvas) {
        // Remove all ratio classes
        posterCanvas.classList.remove("ratio-square", "ratio-landscape", "ratio-story", "ratio-print-banner", "ratio-flyer");
        posterCanvas.classList.add(`ratio-${selectedRatio}`);
    }

    if (previewRatioLabel) {
        if (selectedRatio === "landscape") {
            previewRatioLabel.textContent = "Live Banner Preview (16:9 Ratio)";
        } else if (selectedRatio === "story") {
            previewRatioLabel.textContent = "Live Story Preview (9:16 Ratio)";
        } else if (selectedRatio === "print-banner") {
            previewRatioLabel.textContent = "Live Print Banner Preview (3:2 Ratio)";
        } else if (selectedRatio === "flyer") {
            previewRatioLabel.textContent = "Live Flyer Preview (4:3 Ratio)";
        } else {
            previewRatioLabel.textContent = "Live Poster Preview (1:1 Ratio)";
        }
    }
    updatePosterScale();
    if (typeof updatePosterLayoutAndShape === "function") {
        updatePosterLayoutAndShape();
    }
}


// Update Theme Styling classes
function updateTheme() {
    let selectedTheme = "royal-durbar";
    if (themeOptions) {
        for (const option of themeOptions) {
            if (option.checked) {
                selectedTheme = option.value;
                break;
            }
        }
    }
    
    let selectedRatio = "square";
    if (ratioOptions) {
        for (const option of ratioOptions) {
            if (option.checked) {
                selectedRatio = option.value;
                break;
            }
        }
    }
    
    if (posterCanvas) {
        // Clear old theme classes, keeping active ratio class
        posterCanvas.className = "poster-container";
        posterCanvas.classList.add(`ratio-${selectedRatio}`);
        
        // Add new theme class
        posterCanvas.classList.add(`theme-${selectedTheme}`);
    }
    
    updateThemeColorStyles();
    if (typeof updatePosterLayoutAndShape === "function") {
        updatePosterLayoutAndShape();
    }
}

// Update custom variables for active flavor (used in Spiced Splash & Flipkart themes)
function updateThemeColorStyles() {
    const data = productPresets[currentPreset];
    if (!data || !posterCanvas) return;

    // Reset flavor classes
    posterCanvas.classList.remove("ginger-flavor", "turmeric-flavor", "mango-flavor", "amla-flavor", "chili-flavor");

    // Set variable for active spice color
    posterCanvas.style.setProperty("--active-spice-color", data.color);
    
    // Add current flavor class for gradient background
    posterCanvas.classList.add(`${currentPreset}-flavor`);
}

// Setup Event Listeners
function setupEventListeners() {
    // Generic Form Change persistence listeners
    if (form) {
        form.addEventListener("input", saveState);
        form.addEventListener("change", saveState);
    }

    // Preset Buttons
    if (presetButtons) {
        presetButtons.forEach(btn => {
            btn.addEventListener("click", () => {
                presetButtons.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                loadPreset(btn.dataset.preset);
                saveState();
            });
        });
    }

    // Ratio Radios
    if (ratioOptions) {
        for (const ratioRadio of ratioOptions) {
            ratioRadio.addEventListener("change", updateRatio);
        }
    }

    // Theme Radios
    if (themeOptions) {
        for (const themeRadio of themeOptions) {
            themeRadio.addEventListener("change", updateTheme);
        }
    }

    // Layout Radios
    const layoutOpts = document.getElementsByName("poster-layout-style");
    if (layoutOpts) {
        for (const opt of layoutOpts) {
            opt.addEventListener("change", updatePosterLayoutAndShape);
        }
    }

    // Image Shape Radios
    const shapeOpts = document.getElementsByName("poster-image-shape");
    if (shapeOpts) {
        for (const opt of shapeOpts) {
            opt.addEventListener("change", updatePosterLayoutAndShape);
        }
    }

    // Language Radios
    if (langOptions) {
        for (const langRadio of langOptions) {
            langRadio.addEventListener("change", handleLanguageChange);
        }
    }

    // Standard Form Inputs
    const inputsToSync = [
        brandTitleInput, productNameInput, productDescInput,
        posterCaptionTitleInput, posterCaptionDescInput,
        badgeTextInput, badgeStyleSelect,
        imageTagTextInput, imageTagStyleSelect,
        price100gInput, price250gInput, price500gInput, price1kgInput,
        label100gInput, label250gInput, label500gInput, label1kgInput,
        whatsappNumInput, whatsappCtaInput, websiteUrlInput,
        fkSaleTitleInput, fkDiscountTextInput, fkCtaTextInput,
        campaignTitleInput, campaignSubtitleInput
    ].filter(input => input !== null && input !== undefined);
    
    inputsToSync.forEach(input => {
        input.addEventListener("input", syncPreview);
    });

    // Campaign Mode
    if (campaignModeSelect) campaignModeSelect.addEventListener("change", () => {
        updateCampaignMode();
        updateQrCode();
    });
    if (showQrCodeCheckbox) showQrCodeCheckbox.addEventListener("change", updateQrCode);

    // Custom Badge panel toggle
    if (btnAddBadge && addBadgePanel) {
        btnAddBadge.addEventListener("click", () => {
            if (addBadgePanel.style.display === "none") {
                addBadgePanel.style.display = "block";
                btnAddBadge.style.display = "none";
            } else {
                addBadgePanel.style.display = "none";
                btnAddBadge.style.display = "block";
            }
        });
    }

    if (btnCancelBadge && addBadgePanel && btnAddBadge) {
        btnCancelBadge.addEventListener("click", () => {
            addBadgePanel.style.display = "none";
            btnAddBadge.style.display = "block";
            if (newBadgeTextInput) newBadgeTextInput.value = "";
            if (newBadgeEmojiInput) newBadgeEmojiInput.value = "";
        });
    }

    if (btnSaveBadge && addBadgePanel && btnAddBadge) {
        btnSaveBadge.addEventListener("click", () => {
            const text = newBadgeTextInput ? newBadgeTextInput.value.trim() : "";
            const emoji = newBadgeEmojiInput ? newBadgeEmojiInput.value.trim() : "";
            const styleTheme = newBadgeStyleThemeSelect ? newBadgeStyleThemeSelect.value : "gold";

            if (!text) {
                alert("Please enter badge text.");
                return;
            }

            const customId = "custom_" + Date.now();
            const newBadge = {
                id: customId,
                type: "custom",
                name: `${emoji} ${text}`,
                style: styleTheme,
                text: text,
                emoji: emoji,
                show: true,
                x: 100,
                y: 100,
                scale: 100
            };

            badges.push(newBadge);
            renderBadgesControls();
            syncPreview();
            saveState();

            // Clear and hide
            btnCancelBadge.click();
        });
    }

    // Image Zoom & Pan sliders
    if (sliderZoom) sliderZoom.addEventListener("input", updateImageTransform);
    if (sliderPanX) sliderPanX.addEventListener("input", updateImageTransform);
    if (sliderPanY) sliderPanY.addEventListener("input", updateImageTransform);

    // Discount Overlay sliders
    if (sliderOverlayX) sliderOverlayX.addEventListener("input", updateOverlayTransform);
    if (sliderOverlayY) sliderOverlayY.addEventListener("input", updateOverlayTransform);
    if (sliderOverlayScale) sliderOverlayScale.addEventListener("input", updateOverlayTransform);
    if (sliderOverlayRotate) sliderOverlayRotate.addEventListener("input", updateOverlayTransform);

    // Toggle Checks
    if (show100gCheckbox) show100gCheckbox.addEventListener("change", syncPreview);
    if (show250gCheckbox) show250gCheckbox.addEventListener("change", syncPreview);
    if (show500gCheckbox) show500gCheckbox.addEventListener("change", syncPreview);
    if (show1kgCheckbox) show1kgCheckbox.addEventListener("change", syncPreview);

    // Sliders
    const sliders = [
        { el: sliderSpicy, valEl: valSpicy, type: "spicy" },
        { el: sliderSour, valEl: valSour, type: "sour" },
        { el: sliderEarthy, valEl: valEarthy, type: "earthy" },
        { el: sliderStrong, valEl: valStrong, type: "strong" }
    ].filter(item => item.el !== null && item.el !== undefined);
    
    sliders.forEach(item => {
        item.el.addEventListener("input", () => {
            updateSliderLabel(item.el, item.valEl);
            updatePreviewMeter(item.type, item.el.value);
        });
    });

    // Custom File Upload
    if (customImageInput) {
        customImageInput.addEventListener("change", (e) => {
            const file = e.target.files[0];
            if (file) {
                if (fileNameDisplay) fileNameDisplay.textContent = file.name;
                const reader = new FileReader();
                reader.onload = (event) => {
                    customImageSrc = event.target.result;
                    if (posterImg) posterImg.src = customImageSrc;
                    updateRemoveImageButton();
                    saveState();
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // Remove Custom Image button listener
    if (btnRemoveCustomImage) {
        btnRemoveCustomImage.addEventListener("click", () => {
            customImageSrc = null;
            if (customImageInput) customImageInput.value = "";
            if (fileNameDisplay) fileNameDisplay.textContent = "No custom file chosen";
            
            // Revert back to active preset's default image
            const activePreset = productPresets[currentPreset];
            if (activePreset && posterImg) {
                posterImg.src = activePreset.image;
            }
            
            updateRemoveImageButton();
            saveState();
        });
    }

    // Custom Logo Upload
    if (customLogoInput) {
        customLogoInput.addEventListener("change", (e) => {
            const file = e.target.files[0];
            if (file) {
                if (logoNameDisplay) logoNameDisplay.textContent = file.name;
                const reader = new FileReader();
                reader.onload = (event) => {
                    customLogoSrc = event.target.result;
                    if (customLogoPreview) customLogoPreview.src = customLogoSrc;
                    if (fkLogoPreview) fkLogoPreview.src = customLogoSrc;
                    if (customLogoPreview) customLogoPreview.style.display = "block";
                    if (defaultRoyalCrest) defaultRoyalCrest.style.display = "none";
                    saveState();
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // Download PNG Action
    if (btnDownload) {
        btnDownload.addEventListener("click", () => {
            // Change button state to rendering
            btnDownload.disabled = true;
            const originalText = btnDownload.innerHTML;
            btnDownload.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Rendering Poster...`;

            // Check if print-ready (High-DPI) is enabled
            const isPrintReady = document.getElementById("export-print-ready")?.checked;
            const exportScale = isPrintReady ? 3.5 : 2.0;

            html2canvas(posterCanvas, {
                useCORS: true,
                scale: exportScale,
                backgroundColor: null
            }).then(canvas => {
                const dataUrl = canvas.toDataURL("image/png");
                
                // Create temporary link to fire download
                const link = document.createElement("a");
                const prodName = (productNameInput ? productNameInput.value : "mewari_achar").replace(/[^a-z0-9]/gi, '_').toLowerCase();
                
                // Determine format suffix
                let formatSuffix = "_square";
                if (posterCanvas) {
                    if (posterCanvas.classList.contains("ratio-landscape")) formatSuffix = "_banner";
                    else if (posterCanvas.classList.contains("ratio-story")) formatSuffix = "_story";
                    else if (posterCanvas.classList.contains("ratio-print-banner")) formatSuffix = "_print_banner";
                    else if (posterCanvas.classList.contains("ratio-flyer")) formatSuffix = "_flyer";
                }
                
                link.download = `Mewari_Achar_Poster_${prodName}${formatSuffix}.png`;
                link.href = dataUrl;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                
                // Restore button
                btnDownload.disabled = false;
                btnDownload.innerHTML = originalText;
            }).catch(err => {
                console.error("Canvas export failed:", err);
                alert("Failed to export poster. Please try again.");
                btnDownload.disabled = false;
                btnDownload.innerHTML = originalText;
            });
        });
    }

    // --- Add Custom Preset Operations ---
    const btnAddPreset = document.getElementById("btn-add-preset");
    const addPresetPanel = document.getElementById("add-preset-panel");
    const btnSavePreset = document.getElementById("btn-save-preset");
    const btnCancelPreset = document.getElementById("btn-cancel-preset");
    const newPresetIdInput = document.getElementById("new-preset-id");
    const newPresetNameEnInput = document.getElementById("new-preset-name-en");
    const newPresetNameHiInput = document.getElementById("new-preset-name-hi");
    const newPresetDescEnInput = document.getElementById("new-preset-desc-en");
    const newPresetDescHiInput = document.getElementById("new-preset-desc-hi");
    const newPresetPrice100gInput = document.getElementById("new-preset-price-100g");
    const newPresetPrice250gInput = document.getElementById("new-preset-price-250g");
    const newPresetPrice500gInput = document.getElementById("new-preset-price500g");
    const newPresetPrice1kgInput = document.getElementById("new-preset-price1kg");
    const newPresetColorInput = document.getElementById("new-preset-color");
    const newPresetImageInput = document.getElementById("new-preset-image");

    let newPresetImageSrc = null;

    if (btnAddPreset && addPresetPanel) {
        btnAddPreset.addEventListener("click", () => {
            if (addPresetPanel.style.display === "none") {
                addPresetPanel.style.display = "block";
                btnAddPreset.style.display = "none";
            } else {
                addPresetPanel.style.display = "none";
                btnAddPreset.style.display = "block";
            }
        });
    }

    if (newPresetImageInput) {
        newPresetImageInput.addEventListener("change", (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    newPresetImageSrc = event.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
    }

    if (btnCancelPreset && addPresetPanel && btnAddPreset) {
        btnCancelPreset.addEventListener("click", () => {
            addPresetPanel.style.display = "none";
            btnAddPreset.style.display = "block";
            // Clear inputs
            if (newPresetIdInput) newPresetIdInput.value = "";
            if (newPresetNameEnInput) newPresetNameEnInput.value = "";
            if (newPresetNameHiInput) newPresetNameHiInput.value = "";
            if (newPresetDescEnInput) newPresetDescEnInput.value = "";
            if (newPresetDescHiInput) newPresetDescHiInput.value = "";
            newPresetImageSrc = null;
        });
    }

    if (btnSavePreset && addPresetPanel && btnAddPreset) {
        btnSavePreset.addEventListener("click", () => {
            const id = newPresetIdInput ? newPresetIdInput.value.trim().toLowerCase().replace(/[^a-z0-9]/g, '') : "";
            const nameEn = newPresetNameEnInput ? newPresetNameEnInput.value.trim() : "";
            const nameHi = newPresetNameHiInput ? newPresetNameHiInput.value.trim() : "";
            const descEn = newPresetDescEnInput ? newPresetDescEnInput.value.trim() : "";
            const descHi = newPresetDescHiInput ? newPresetDescHiInput.value.trim() : "";
            const price100g = newPresetPrice100gInput ? parseFloat(newPresetPrice100gInput.value) : 70;
            const price250g = newPresetPrice250gInput ? parseFloat(newPresetPrice250gInput.value) : 150;
            const price500g = newPresetPrice500gInput ? parseFloat(newPresetPrice500gInput.value) : 250;
            const price1kg = newPresetPrice1kgInput ? parseFloat(newPresetPrice1kgInput.value) : 490;
            const color = newPresetColorInput ? newPresetColorInput.value : "#a04000";

            if (!id || !nameEn || !nameHi) {
                alert("Please fill in the Preset ID, English Name, and Hindi Name.");
                return;
            }

            if (productPresets[id]) {
                alert("A preset with this ID already exists. Please choose a unique ID.");
                return;
            }

            // Save new preset to memory
            productPresets[id] = {
                name: nameHi,
                desc: descHi,
                spicy: 5,
                sour: 5,
                earthy: 5,
                strong: 5,
                price100g: price100g,
                price250g: price250g,
                price500g: price500g,
                price1kg: price1kg,
                image: newPresetImageSrc || "assets/images/ginger.png", // fallback to ginger if none uploaded
                color: color
            };

            presetTranslations.english[id] = {
                name: nameEn,
                desc: descEn
            };

            presetTranslations.hindi[id] = {
                name: nameHi,
                desc: descHi
            };

            // Dynamically create a new button in the DOM preset grid
            const newBtn = addPresetToGrid(id, nameEn, newPresetImageSrc || "assets/images/ginger.png");
            if (newBtn) {
                newBtn.click();
            }

            // Reset and close panel
            btnCancelPreset.click();
            saveState();
        });
    }

    // Section-specific Clear Actions
    const btnClearCampaigns = document.getElementById("btn-clear-campaigns");
    if (btnClearCampaigns) {
        btnClearCampaigns.addEventListener("click", clearCampaigns);
    }

    const btnClearBadges = document.getElementById("btn-clear-badges");
    if (btnClearBadges) {
        btnClearBadges.addEventListener("click", clearBadges);
    }
}

// Reset only Section 5B fields: campaign mode, campaign titles, QR code, and overlay adjustments
function clearCampaigns() {
    if (campaignModeSelect) campaignModeSelect.value = "showcase";
    if (campaignTitleInput) campaignTitleInput.value = "";
    if (campaignSubtitleInput) campaignSubtitleInput.value = "";
    if (showQrCodeCheckbox) showQrCodeCheckbox.checked = false;

    // Reset overlay layout sliders to standard defaults
    const sliderOverlayX = document.getElementById("slider-overlay-x");
    const sliderOverlayY = document.getElementById("slider-overlay-y");
    const sliderOverlayScale = document.getElementById("slider-overlay-scale");
    const sliderOverlayRotate = document.getElementById("slider-overlay-rotate");

    if (sliderOverlayX) sliderOverlayX.value = 35;
    if (sliderOverlayY) sliderOverlayY.value = 35;
    if (sliderOverlayScale) sliderOverlayScale.value = 100;
    if (sliderOverlayRotate) sliderOverlayRotate.value = -8;

    updateCampaignMode();
    updateOverlayTransform();
    updateQrCode();
    syncPreview();
    saveState();
}

// Default badge positions for built-in badges to restore upon reset
const defaultBadgeCoords = {
    "flat60": { x: 185, y: -8, scale: 100 },
    "spinwin": { x: -15, y: -8, scale: 100 },
    "buy1get1": { x: -15, y: 215, scale: 100 },
    "freeshipping": { x: 185, y: 215, scale: 100 },
    "bestseller": { x: 212, y: -12, scale: 100 },
    "organic": { x: -8, y: 230, scale: 100 },
    "traditional": { x: -8, y: -8, scale: 100 },
    "limited": { x: 212, y: 230, scale: 100 },
    "homemade": { x: 50, y: 50, scale: 100 },
    "pureveg": { x: 50, y: 150, scale: 100 },
    "premium": { x: 150, y: 50, scale: 100 }
};

// Reset only Section 5C badges: turn off active ones and reset placement sliders
function clearBadges() {
    badges.forEach(badge => {
        badge.show = false;
        const defaults = defaultBadgeCoords[badge.id] || { x: 100, y: 100, scale: 100 };
        badge.x = defaults.x;
        badge.y = defaults.y;
        badge.scale = defaults.scale;
    });

    renderBadgesControls();
    syncPreview();
    saveState();
}

// Automatically scale Marketing Poster to fit the available preview area height and width without scrolling/clipping
function updatePosterScale() {
    const previewArea = document.querySelector(".preview-area");
    const posterCanvas = document.getElementById("poster-canvas");
    const scaleWrapper = document.getElementById("poster-scale-wrapper");
    if (!previewArea || !posterCanvas || !scaleWrapper) return;

    // Temporarily remove transition to prevent layout lag
    const originalTransition = posterCanvas.style.transition;
    posterCanvas.style.transition = 'none';

    // Reset styles to get original layout dimensions
    posterCanvas.style.transform = "none";
    scaleWrapper.style.width = "auto";
    scaleWrapper.style.height = "auto";

    const rect = previewArea.getBoundingClientRect();
    const availableWidth = rect.width - 80; // 40px left and right padding
    
    // Get badge height for spacing
    const badge = document.getElementById("preview-ratio-label");
    const badgeHeight = badge ? badge.getBoundingClientRect().height + 16 : 46;
    const availableHeight = rect.height - 80 - badgeHeight;

    const posterWidth = posterCanvas.offsetWidth;
    const posterHeight = posterCanvas.offsetHeight;

    if (posterWidth > 0 && posterHeight > 0) {
        const scaleX = availableWidth / posterWidth;
        const scaleY = availableHeight / posterHeight;
        let scaleFactor = Math.min(scaleX, scaleY);

        // Keep it at max scale 1.0 to preserve resolution, enforce min scale
        if (scaleFactor > 1.0) scaleFactor = 1.0;
        if (scaleFactor < 0.2) scaleFactor = 0.2;

        posterCanvas.style.transform = `scale(${scaleFactor})`;
        scaleWrapper.style.width = `${posterWidth * scaleFactor}px`;
        scaleWrapper.style.height = `${posterHeight * scaleFactor}px`;
    }

    setTimeout(() => {
        posterCanvas.style.transition = originalTransition;
    }, 50);
}

// Update poster wrapper classes to apply selectable layout structure & image frame shape
function updatePosterLayoutAndShape() {
    const posterCanvas = document.getElementById("poster-canvas");
    if (!posterCanvas) return;

    // Get current layout structure
    let layoutStyle = "classic";
    const layoutOptions = document.getElementsByName("poster-layout-style");
    if (layoutOptions) {
        for (const opt of layoutOptions) {
            if (opt.checked) {
                layoutStyle = opt.value;
                break;
            }
        }
    }

    // Get current frame shape
    let imageShape = "square";
    const shapeOptions = document.getElementsByName("poster-image-shape");
    if (shapeOptions) {
        for (const opt of shapeOptions) {
            if (opt.checked) {
                imageShape = opt.value;
                break;
            }
        }
    }

    // Clear old layout and shape classes
    posterCanvas.classList.remove("layout-classic", "layout-reverse", "layout-stack");
    posterCanvas.classList.remove("shape-square", "shape-rounded", "shape-circle");

    // Add selected ones
    posterCanvas.classList.add(`layout-${layoutStyle}`);
    posterCanvas.classList.add(`shape-${imageShape}`);

    // Update scales to match new sizes/aspects
    updatePosterScale();
}
