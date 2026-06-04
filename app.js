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
        packagingBadge: "Available in 500g & 1kg Jars",
        packagingTagline: "Order on WhatsApp for Fresh Homemade Taste",
        bulkOffers: "Offers available on Bulk Orders!",
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
        packagingBadge: "500 ग्राम और 1 किलो जार में उपलब्ध",
        packagingTagline: "ताजा घरेलू स्वाद के लिए व्हाट्सएप पर आदेश करें",
        bulkOffers: "थोक ऑर्डर पर विशेष छूट उपलब्ध!",
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

// --- DOM Elements ---
const form = document.getElementById("poster-form");
const presetButtons = document.querySelectorAll(".preset-btn");
const posterCanvas = document.getElementById("poster-canvas");
const posterImg = document.getElementById("poster-img");

// Marketing & Pan/Zoom DOM elements
const campaignModeSelect = document.getElementById("campaign-mode");
const campaignTextInputs = document.getElementById("campaign-text-inputs");
const festivalStyleInputs = document.getElementById("festival-style-inputs");
const campaignTitleInput = document.getElementById("campaign-title");
const campaignSubtitleInput = document.getElementById("campaign-subtitle");
const festivalDecorationSelect = document.getElementById("festival-decoration");

const previewDiscountOverlay = document.getElementById("preview-discount-overlay");
const previewDiscountTitle = document.getElementById("preview-discount-title");
const previewDiscountSubtitle = document.getElementById("preview-discount-subtitle");
const previewFestivalOverlay = document.getElementById("preview-festival-overlay");

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
const show500gCheckbox = document.getElementById("show-500g");
const show1kgCheckbox = document.getElementById("show-1kg");
const price500gInput = document.getElementById("price-500g");
const price1kgInput = document.getElementById("price-1kg");
const price500gGroup = document.getElementById("price-500g-group");
const price1kgGroup = document.getElementById("price-1kg-group");

// Contacts
const whatsappNumInput = document.getElementById("whatsapp-num");
const whatsappCtaInput = document.getElementById("whatsapp-cta");
const websiteUrlInput = document.getElementById("website-url");
const customImageInput = document.getElementById("custom-image");
const fileNameDisplay = document.getElementById("file-name-display");

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

const previewPrice500g = document.getElementById("preview-price-500g");
const previewPrice1kg = document.getElementById("preview-price-1kg");
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

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
    // Initialize default Mewari Achaar Logo
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
    
    const zoomVal = sliderZoom ? sliderZoom.value : 100;
    const panXVal = sliderPanX ? sliderPanX.value : 0;
    const panYVal = sliderPanY ? sliderPanY.value : 0;
    
    if (valZoom) valZoom.textContent = `${zoomVal}%`;
    if (valPanX) valPanX.textContent = `${panXVal}px`;
    if (valPanY) valPanY.textContent = `${panYVal}px`;
    
    posterImg.style.setProperty("--img-zoom", zoomVal / 100);
    posterImg.style.setProperty("--img-pan-x", `${panXVal}px`);
    posterImg.style.setProperty("--img-pan-y", `${panYVal}px`);
}

// Campaign Mode Layouts & Texts Sync
function updateCampaignMode() {
    const campaignMode = campaignModeSelect ? campaignModeSelect.value : "showcase";
    
    if (campaignTextInputs) {
        campaignTextInputs.style.display = (campaignMode === "discount") ? "block" : "none";
    }
    if (festivalStyleInputs) {
        festivalStyleInputs.style.display = (campaignMode === "festival") ? "block" : "none";
    }
    
    if (previewDiscountOverlay) {
        previewDiscountOverlay.style.display = (campaignMode === "discount") ? "flex" : "none";
    }
    if (previewFestivalOverlay) {
        previewFestivalOverlay.style.display = (campaignMode === "festival") ? "block" : "none";
        
        if (campaignMode === "festival") {
            const festTheme = festivalDecorationSelect ? festivalDecorationSelect.value : "marigold";
            previewFestivalOverlay.className = "festival-garland-overlay";
            previewFestivalOverlay.classList.add(`fest-theme-${festTheme}`);
            
            const garlandTop = previewFestivalOverlay.querySelector(".garland-top");
            const garlandLeft = previewFestivalOverlay.querySelector(".garland-left");
            const garlandRight = previewFestivalOverlay.querySelector(".garland-right");
            const diyaLeft = previewFestivalOverlay.querySelector(".diya-left");
            const diyaRight = previewFestivalOverlay.querySelector(".diya-right");
            
            if (festTheme === "diya") {
                if (garlandTop) garlandTop.style.display = "none";
                if (garlandLeft) garlandLeft.style.display = "none";
                if (garlandRight) garlandRight.style.display = "none";
                if (diyaLeft) { diyaLeft.style.display = "block"; diyaLeft.textContent = "🪔"; }
                if (diyaRight) { diyaRight.style.display = "block"; diyaRight.textContent = "🪔"; }
            } else if (festTheme === "mandala") {
                if (garlandTop) garlandTop.style.display = "none";
                if (garlandLeft) garlandLeft.style.display = "none";
                if (garlandRight) garlandRight.style.display = "none";
                if (diyaLeft) { diyaLeft.style.display = "block"; diyaLeft.textContent = "🌸"; }
                if (diyaRight) { diyaRight.style.display = "block"; diyaRight.textContent = "🌸"; }
            } else {
                if (garlandTop) garlandTop.style.display = "block";
                if (garlandLeft) garlandLeft.style.display = "block";
                if (garlandRight) garlandRight.style.display = "block";
                if (diyaLeft) { diyaLeft.style.display = "block"; diyaLeft.textContent = "🪔"; }
                if (diyaRight) { diyaRight.style.display = "block"; diyaRight.textContent = "🪔"; }
            }
        }
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

// Marketing Stickers Toggle Visibility
function updateMarketingStickers() {
    const stickersList = ["bestseller", "organic", "traditional", "limited"];
    stickersList.forEach(sticker => {
        const checkbox = document.getElementById(`sticker-${sticker}`);
        const previewElement = document.querySelector(`.mkt-sticker.sticker-${sticker}`);
        if (checkbox && previewElement) {
            previewElement.style.display = checkbox.checked ? "block" : "none";
        }
    });
}

// Sync Form Inputs to Live Preview
function syncPreview() {

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
    if (show500gCheckbox) {
        if (show500gCheckbox.checked) {
            if (priceCard500g) priceCard500g.style.display = "flex";
            if (price500gGroup) price500gGroup.style.display = "flex";
            if (previewPrice500g && price500gInput) previewPrice500g.textContent = `₹${price500gInput.value}`;
        } else {
            if (priceCard500g) priceCard500g.style.display = "none";
            if (price500gGroup) price500gGroup.style.display = "none";
        }
    }

    if (show1kgCheckbox) {
        if (show1kgCheckbox.checked) {
            if (priceCard1kg) priceCard1kg.style.display = "flex";
            if (price1kgGroup) price1kgGroup.style.display = "flex";
            if (previewPrice1kg && price1kgInput) previewPrice1kg.textContent = `₹${price1kgInput.value}`;
        } else {
            if (priceCard1kg) priceCard1kg.style.display = "none";
            if (price1kgGroup) price1kgGroup.style.display = "none";
        }
    }

    // Contact Details Sync (Locked values)
    const lockedWhatsappNum = "+91 70141012742";
    const lockedWebsiteUrl = "www.mewari-achar.shop";

    const whatsappCtaVal = whatsappCtaInput ? whatsappCtaInput.value : (staticTextTranslations[currentLanguage === "hinglish" ? "english" : currentLanguage]?.whatsappCta || "Order on WhatsApp");
    const whatsappNumVal = whatsappNumInput ? whatsappNumInput.value : lockedWhatsappNum;
    if (previewWhatsappCta) previewWhatsappCta.textContent = whatsappCtaVal.toUpperCase();
    if (previewWhatsappNum) previewWhatsappNum.textContent = whatsappNumVal;

    // Update static poster texts based on language mode
    const textLang = (currentLanguage === "hinglish") ? "english" : currentLanguage;
    const staticTrans = staticTextTranslations[textLang];

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

    // Price size labels
    const size500gLabel = priceCard500g ? priceCard500g.querySelector(".size-label") : null;
    const size1kgLabel = priceCard1kg ? priceCard1kg.querySelector(".size-label") : null;
    if (size500gLabel && staticTrans) size500gLabel.textContent = staticTrans.price500gLabel.toUpperCase();
    if (size1kgLabel && staticTrans) size1kgLabel.textContent = staticTrans.price1kgLabel.toUpperCase();

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

    // Image Side Caption Translation Sync
    const captionLang = (currentLanguage === "english") ? "english" : "hindi";
    const captionTrans = staticTextTranslations[captionLang];
    const previewCaptionTitle = document.getElementById("preview-caption-title");
    const previewCaptionDesc = document.getElementById("preview-caption-desc");
    if (previewCaptionTitle && captionTrans) {
        previewCaptionTitle.textContent = captionTrans.captionTitle;
    }
    if (previewCaptionDesc && captionTrans) {
        previewCaptionDesc.textContent = captionTrans.captionDesc;
    }

    // Sync new Marketing elements
    updateImageTransform();
    updateCampaignMode();
    updateQrCode();
    updateMarketingStickers();
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
    
    if (currentLanguage === "hinglish") {
        if (badgeTextInput) badgeTextInput.value = staticTextTranslations.english.promoBadge;
        if (whatsappCtaInput) whatsappCtaInput.value = staticTextTranslations.english.whatsappCta;
        if (imageTagTextInput) imageTagTextInput.value = staticTextTranslations.english.imageTag;
    } else {
        if (badgeTextInput) badgeTextInput.value = staticTrans.promoBadge;
        if (whatsappCtaInput) whatsappCtaInput.value = staticTrans.whatsappCta;
        if (imageTagTextInput) imageTagTextInput.value = staticTrans.imageTag;
    }

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
    // Preset Buttons
    if (presetButtons) {
        presetButtons.forEach(btn => {
            btn.addEventListener("click", () => {
                presetButtons.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                customImageSrc = null; // Clear custom image track when switching presets
                if (fileNameDisplay) fileNameDisplay.textContent = "No custom file chosen";
                loadPreset(btn.dataset.preset);
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

    // Language Radios
    if (langOptions) {
        for (const langRadio of langOptions) {
            langRadio.addEventListener("change", handleLanguageChange);
        }
    }

    // Standard Form Inputs
    const inputsToSync = [
        brandTitleInput, productNameInput, productDescInput,
        badgeTextInput, badgeStyleSelect,
        imageTagTextInput, imageTagStyleSelect,
        price500gInput, price1kgInput,
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
    if (festivalDecorationSelect) festivalDecorationSelect.addEventListener("change", updateCampaignMode);
    if (showQrCodeCheckbox) showQrCodeCheckbox.addEventListener("change", updateQrCode);

    // Marketing stickers checkboxes
    const stickersList = ["bestseller", "organic", "traditional", "limited"];
    stickersList.forEach(sticker => {
        const checkbox = document.getElementById(`sticker-${sticker}`);
        if (checkbox) checkbox.addEventListener("change", updateMarketingStickers);
    });

    // Image Zoom & Pan sliders
    if (sliderZoom) sliderZoom.addEventListener("input", updateImageTransform);
    if (sliderPanX) sliderPanX.addEventListener("input", updateImageTransform);
    if (sliderPanY) sliderPanY.addEventListener("input", updateImageTransform);

    // Toggle Checks
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
                };
                reader.readAsDataURL(file);
            }
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
            const grid = document.querySelector(".product-selector-grid");
            if (grid) {
                const btn = document.createElement("button");
                btn.type = "button";
                btn.className = "preset-btn";
                btn.dataset.preset = id;

                const thumbContainer = document.createElement("div");
                thumbContainer.className = "thumb-container";

                const img = document.createElement("img");
                img.src = newPresetImageSrc || "assets/images/ginger.png";
                img.alt = nameEn;

                const span = document.createElement("span");
                span.textContent = nameEn.split(" ")[0]; // just show first word for compact fit

                thumbContainer.appendChild(img);
                btn.appendChild(thumbContainer);
                btn.appendChild(span);
                grid.appendChild(btn);

                // Add event listener to new button
                btn.addEventListener("click", () => {
                    const allPresetBtns = document.querySelectorAll(".preset-btn");
                    allPresetBtns.forEach(b => b.classList.remove("active"));
                    btn.classList.add("active");
                    customImageSrc = null;
                    if (fileNameDisplay) fileNameDisplay.textContent = "No custom file chosen";
                    loadPreset(btn.dataset.preset);
                });

                // Auto click new button to select it
                btn.click();
            }

            // Reset and close panel
            btnCancelPreset.click();
        });
    }
}
