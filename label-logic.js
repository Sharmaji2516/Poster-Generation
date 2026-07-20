// --- Label Generator Logic ---

document.addEventListener('DOMContentLoaded', () => {
    // Mode Switcher Elements
    const modeRadios = document.querySelectorAll('input[name="app-mode"]');
    
    // Containers to toggle (exclude those inside label settings and mode switcher)
    const posterSections = Array.from(document.querySelectorAll('.form-section')).filter(sec => 
        !sec.closest('#label-settings-container') && !sec.classList.contains('mode-switcher-section')
    );
    const labelSettingsContainer = document.getElementById('label-settings-container');
    const posterCanvas = document.getElementById('poster-canvas');
    const labelCanvas = document.getElementById('label-canvas');
    const previewRatioLabel = document.getElementById('preview-ratio-label');
    
    // Custom Sizing Control Elements
    const labelSizeControls = document.getElementById('label-size-controls');
    const labelWidthSlider = document.getElementById('label-width-slider');
    const labelWidthVal = document.getElementById('label-width-val');
    const labelHeightSlider = document.getElementById('label-height-slider');
    const labelHeightVal = document.getElementById('label-height-val');
    const labelZoomSlider = document.getElementById('label-zoom-slider');
    const labelZoomVal = document.getElementById('label-zoom-val');
    const sizePresetButtons = document.querySelectorAll('.size-preset-btn');
    
    // Logo & Product Image Sizing Elements
    const labelLogoSlider = document.getElementById('label-logo-slider');
    const labelLogoVal = document.getElementById('label-logo-val');
    const labelImgSlider = document.getElementById('label-img-slider');
    const labelImgVal = document.getElementById('label-img-val');
    const labelShowImgCheckbox = document.getElementById('label-show-img-checkbox');
    
    // Label Inputs
    const labelIngredients = document.getElementById('label-ingredients');
    const labelFssai = document.getElementById('label-fssai');
    const labelBatch = document.getElementById('label-batch');
    const labelMfg = document.getElementById('label-mfg');
    const labelExpiry = document.getElementById('label-expiry');
    const labelWeight = document.getElementById('label-weight');
    const labelMfgBy = document.getElementById('label-mfg-by');
    const labelCustomerCare = document.getElementById('label-customer-care');
    
    // Nutritional Inputs
    const nutriEnergy = document.getElementById('nutri-energy');
    const nutriProtein = document.getElementById('nutri-protein');
    const nutriCarbs = document.getElementById('nutri-carbs');
    const nutriSugar = document.getElementById('nutri-sugar');
    const nutriFat = document.getElementById('nutri-fat');
    const nutriSodium = document.getElementById('nutri-sodium');
    
    // Label Preview Elements
    const prevLabelIngredients = document.getElementById('prev-label-ingredients');
    const prevLabelFssai = document.getElementById('prev-label-fssai');
    const prevLabelBatch = document.getElementById('prev-label-batch');
    const prevLabelMfg = document.getElementById('prev-label-mfg');
    const prevLabelExpiry = document.getElementById('prev-label-expiry');
    const prevLabelWeight = document.getElementById('prev-label-weight');
    const prevLabelMfgBy = document.getElementById('prev-label-mfg-by');
    const prevLabelCustomerCare = document.getElementById('prev-label-customer-care');
    
    // Label Product Info (synced from main poster inputs)
    const prevLabelBrand = document.getElementById('prev-label-brand');
    const prevLabelProduct = document.getElementById('prev-label-product');
    const prevLabelDesc = document.getElementById('prev-label-desc');
    
    // Main poster inputs that affect label
    const brandTitleInput = document.getElementById('brand-title');
    const productNameInput = document.getElementById('product-name');
    const productDescInput = document.getElementById('product-desc');
    
    // Nutritional Preview Elements
    const prevNutriEnergy = document.getElementById('prev-nutri-energy');
    const prevNutriProtein = document.getElementById('prev-nutri-protein');
    const prevNutriCarbs = document.getElementById('prev-nutri-carbs');
    const prevNutriSugar = document.getElementById('prev-nutri-sugar');
    const prevNutriFat = document.getElementById('prev-nutri-fat');
    const prevNutriSodium = document.getElementById('prev-nutri-sodium');

    function updateLabelPreview() {
        // Update specific label fields
        if(prevLabelIngredients) prevLabelIngredients.textContent = labelIngredients.value;
        if(prevLabelFssai) prevLabelFssai.textContent = labelFssai.value;
        if(prevLabelBatch) prevLabelBatch.textContent = labelBatch.value;
        if(prevLabelMfg) prevLabelMfg.textContent = labelMfg.value;
        if(prevLabelExpiry) prevLabelExpiry.textContent = labelExpiry.value;
        if(prevLabelWeight) prevLabelWeight.textContent = labelWeight.value;
        if(prevLabelMfgBy) prevLabelMfgBy.textContent = labelMfgBy.value;
        if(prevLabelCustomerCare) prevLabelCustomerCare.textContent = labelCustomerCare.value;
        
        // Update product info from main fields
        if(prevLabelBrand && brandTitleInput) prevLabelBrand.textContent = brandTitleInput.value;
        if(prevLabelProduct && productNameInput) prevLabelProduct.textContent = productNameInput.value;
        if(prevLabelDesc && productDescInput) prevLabelDesc.textContent = productDescInput.value;
        
        // Update nutritional info
        if(prevNutriEnergy) prevNutriEnergy.textContent = nutriEnergy.value + ' kcal';
        if(prevNutriProtein) prevNutriProtein.textContent = nutriProtein.value + ' g';
        if(prevNutriCarbs) prevNutriCarbs.textContent = nutriCarbs.value + ' g';
        if(prevNutriSugar) prevNutriSugar.textContent = nutriSugar.value + ' g';
        if(prevNutriFat) prevNutriFat.textContent = nutriFat.value + ' g';
        if(prevNutriSodium) prevNutriSodium.textContent = nutriSodium.value + ' mg';

        // Sync custom logo if uploaded
        const labelLogoEl = labelCanvas ? labelCanvas.querySelector('.label-logo') : null;
        if (labelLogoEl) {
            if (window.customLogoSrc) {
                labelLogoEl.src = window.customLogoSrc;
            } else {
                labelLogoEl.src = 'Mewari Achaar Logo.png';
            }
        }

        // Sync custom product image on label
        const labelProductImgEl = document.getElementById('prev-label-product-img');
        if (labelProductImgEl) {
            if (window.customImageSrc) {
                labelProductImgEl.src = window.customImageSrc;
            } else if (window.productPresets && window.currentPreset && window.productPresets[window.currentPreset]) {
                labelProductImgEl.src = window.productPresets[window.currentPreset].image;
            }
        }

        updateLabelElementsSizing();
    }

    function updateLabelElementsSizing() {
        if (!labelCanvas) return;
        
        const logoEl = labelCanvas.querySelector('.label-logo');
        const imgEl = document.getElementById('prev-label-product-img');
        const showImg = labelShowImgCheckbox ? labelShowImgCheckbox.checked : false;

        // Logo Size control
        if (logoEl) {
            if (showImg) {
                logoEl.style.display = 'none';
            } else {
                logoEl.style.display = 'block';
                if (labelLogoSlider) {
                    const logoSize = labelLogoSlider.value;
                    logoEl.style.width = logoSize + 'px';
                    if (labelLogoVal) labelLogoVal.textContent = logoSize + 'px';
                }
            }
        }

        // Product Img Size control
        if (imgEl) {
            if (showImg) {
                imgEl.style.display = 'block';
                if (labelImgSlider) {
                    const imgSize = labelImgSlider.value;
                    imgEl.style.width = imgSize + 'px';
                    imgEl.style.height = imgSize + 'px';
                    if (labelImgVal) labelImgVal.textContent = imgSize + 'px';
                }
            } else {
                imgEl.style.display = 'none';
            }
        }
        autoFitLabelContent();
    }

    function autoFitLabelContent() {
        if (!labelCanvas) return;
        const inner = labelCanvas.querySelector('.label-inner');
        if (!inner) return;
        
        inner.style.zoom = '1';
        const panels = inner.querySelectorAll('.label-left-panel, .label-center-panel, .label-right-panel');
        let currentZoom = 1.0;
        
        for (let iter = 0; iter < 15; iter++) {
            let overflow = false;
            panels.forEach(panel => {
                if (panel.scrollHeight > panel.clientHeight + 4) {
                    overflow = true;
                }
            });
            if (overflow && currentZoom > 0.45) {
                currentZoom -= 0.04;
                inner.style.zoom = currentZoom;
            } else {
                break;
            }
        }
    }

    function updateLabelDimensions(width, height, zoom = null) {
        if (!labelCanvas) return;
        
        labelCanvas.style.width = width + 'px';
        labelCanvas.style.height = height + 'px';
        
        if (labelWidthSlider) {
            labelWidthSlider.value = width;
            labelWidthVal.textContent = width + 'px';
        }
        if (labelHeightSlider) {
            labelHeightSlider.value = height;
            labelHeightVal.textContent = height + 'px';
        }
        
        // Dynamically toggle vertical layout layout-vertical class
        if (width < height) {
            labelCanvas.classList.add('layout-vertical');
        } else {
            labelCanvas.classList.remove('layout-vertical');
        }
        
        // Apply zoom scaling
        if (zoom !== null && labelZoomSlider) {
            labelZoomSlider.value = zoom;
            labelZoomVal.textContent = zoom + '%';
        }
        
        const currentZoom = labelZoomSlider ? parseInt(labelZoomSlider.value) : 100;
        const scaleFactor = currentZoom / 100;
        labelCanvas.style.transform = `scale(${scaleFactor})`;
        labelCanvas.style.transformOrigin = 'top center';
        
        const scaleWrapper = document.getElementById('label-scale-wrapper');
        if (scaleWrapper) {
            scaleWrapper.style.width = (width * scaleFactor) + 'px';
            scaleWrapper.style.height = (height * scaleFactor) + 'px';
        }
        
        if (previewRatioLabel) {
            previewRatioLabel.textContent = `Live Label Preview (${width}x${height} px, Zoom ${currentZoom}%)`;
        }
        autoFitLabelContent();
    }

    function toggleMode(mode) {
        const posterScaleWrapper = document.getElementById('poster-scale-wrapper');
        if (mode === 'label') {
            posterSections.forEach(sec => {
                const heading = sec.querySelector('h2');
                if (heading) {
                    const text = heading.textContent;
                    if (text.includes('Product Preset') || text.includes('Customize Text')) {
                        sec.style.display = 'block';
                    } else {
                        sec.style.display = 'none';
                    }
                }
            });
            
            if (labelSettingsContainer) labelSettingsContainer.style.display = 'block';
            if (labelSizeControls) labelSizeControls.style.display = 'flex';
            
            if (posterCanvas) posterCanvas.style.display = 'none';
            if (posterScaleWrapper) posterScaleWrapper.style.display = 'none';
            const scaleWrapper = document.getElementById('label-scale-wrapper');
            if (scaleWrapper) scaleWrapper.style.display = 'flex';
            if (labelCanvas) labelCanvas.style.display = 'flex';
            
            const w = labelWidthSlider ? parseInt(labelWidthSlider.value) : 600;
            const h = labelHeightSlider ? parseInt(labelHeightSlider.value) : 400;
            const z = labelZoomSlider ? parseInt(labelZoomSlider.value) : 100;
            updateLabelDimensions(w, h, z);
            
            updateLabelPreview();
        } else {
            posterSections.forEach(sec => {
                sec.style.display = 'block';
            });
            
            if (labelSettingsContainer) labelSettingsContainer.style.display = 'none';
            if (labelSizeControls) labelSizeControls.style.display = 'none';
            
            const scaleWrapper = document.getElementById('label-scale-wrapper');
            if (posterCanvas) posterCanvas.style.display = 'flex';
            if (posterScaleWrapper) posterScaleWrapper.style.display = 'flex';
            if (scaleWrapper) scaleWrapper.style.display = 'none';
            if (labelCanvas) labelCanvas.style.display = 'none';
            
            const checkedRatio = document.querySelector('input[name="poster-ratio"]:checked');
            if (checkedRatio && previewRatioLabel) {
                let ratioText = "1:1 Ratio";
                if(checkedRatio.value === 'landscape') ratioText = "16:9 Ratio";
                if(checkedRatio.value === 'story') ratioText = "9:16 Ratio";
                if(checkedRatio.value === 'print-banner') ratioText = "3:2 Ratio";
                if(checkedRatio.value === 'flyer') ratioText = "4:3 Ratio";
                previewRatioLabel.textContent = 'Live Poster Preview (' + ratioText + ')';
            }
            if (typeof updatePosterScale === 'function') {
                updatePosterScale();
            }
        }
    }

    // Attach listeners
    modeRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            toggleMode(e.target.value);
        });
    });

    const labelSizeRadios = document.querySelectorAll('input[name="label-size"]');
    labelSizeRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            let w = 600, h = 400;
            if (e.target.value === 'front-2-1') { w = 800; h = 400; }
            else if (e.target.value === 'front-2-2') { w = 600; h = 600; }
            else if (e.target.value === 'front-2-3') { w = 400; h = 600; }
            else if (e.target.value === 'flyer') { w = 600; h = 450; }
            else if (e.target.value === 'banner') { w = 800; h = 450; }
            else if (e.target.value === 'story') { w = 450; h = 800; }
            else if (e.target.value === 'tag') { w = 300; h = 600; }
            
            sizePresetButtons.forEach(b => b.classList.remove('active'));
            sizePresetButtons.forEach(b => {
                if (parseInt(b.getAttribute('data-width')) === w && parseInt(b.getAttribute('data-height')) === h) {
                    b.classList.add('active');
                }
            });
            
            updateLabelDimensions(w, h);
        });
    });

    // Custom Sizing controls event listeners
    if (labelWidthSlider) {
        labelWidthSlider.addEventListener('input', (e) => {
            sizePresetButtons.forEach(b => b.classList.remove('active'));
            updateLabelDimensions(parseInt(e.target.value), parseInt(labelHeightSlider.value));
        });
    }
    if (labelHeightSlider) {
        labelHeightSlider.addEventListener('input', (e) => {
            sizePresetButtons.forEach(b => b.classList.remove('active'));
            updateLabelDimensions(parseInt(labelWidthSlider.value), parseInt(e.target.value));
        });
    }
    if (labelZoomSlider) {
        labelZoomSlider.addEventListener('input', (e) => {
            const w = parseInt(labelWidthSlider.value);
            const h = parseInt(labelHeightSlider.value);
            updateLabelDimensions(w, h, parseInt(e.target.value));
        });
    }

    // Logo & Product Img Size controls listeners
    if (labelLogoSlider) {
        labelLogoSlider.addEventListener('input', updateLabelElementsSizing);
    }
    if (labelImgSlider) {
        labelImgSlider.addEventListener('input', updateLabelElementsSizing);
    }
    if (labelShowImgCheckbox) {
        labelShowImgCheckbox.addEventListener('change', updateLabelElementsSizing);
    }

    sizePresetButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            sizePresetButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const w = parseInt(btn.getAttribute('data-width'));
            const h = parseInt(btn.getAttribute('data-height'));
            updateLabelDimensions(w, h);
            
            // Sync with sidebar radio if possible
            if (labelSizeRadios) {
                labelSizeRadios.forEach(radio => {
                    let rVal = "";
                    if (w === 800 && h === 400) rVal = "front-2-1";
                    else if (w === 600 && h === 600) rVal = "front-2-2";
                    else if (w === 400 && h === 600) rVal = "front-2-3";
                    else if (w === 600 && h === 450) rVal = "flyer";
                    else if (w === 800 && h === 450) rVal = "banner";
                    else if (w === 450 && h === 800) rVal = "story";
                    else if (w === 300 && h === 600) rVal = "tag";
                    
                    radio.checked = (radio.value === rVal);
                });
            }
        });
    });

    // Intercept main preset button selections, custom image, custom logo uploads to sync in real time
    const mainPresetBtns = document.querySelectorAll('.preset-btn');
    mainPresetBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            setTimeout(updateLabelPreview, 50);
        });
    });

    const mainCustomLogo = document.getElementById('custom-logo');
    if (mainCustomLogo) {
        mainCustomLogo.addEventListener('change', () => {
            setTimeout(updateLabelPreview, 50);
        });
    }

    const mainCustomImg = document.getElementById('custom-image');
    if (mainCustomImg) {
        mainCustomImg.addEventListener('change', () => {
            setTimeout(updateLabelPreview, 50);
        });
    }

    const mainBtnRemoveImg = document.getElementById('btn-remove-custom-image');
    if (mainBtnRemoveImg) {
        mainBtnRemoveImg.addEventListener('click', () => {
            setTimeout(updateLabelPreview, 50);
        });
    }

    // Attach listeners for live update of label preview text inputs
    const inputsToWatch = [
        labelIngredients, labelFssai, labelBatch, labelMfg, labelExpiry, labelWeight, labelMfgBy, labelCustomerCare,
        nutriEnergy, nutriProtein, nutriCarbs, nutriSugar, nutriFat, nutriSodium,
        brandTitleInput, productNameInput, productDescInput
    ];
    
    inputsToWatch.forEach(input => {
        if (input) {
            input.addEventListener('input', updateLabelPreview);
        }
    });
    
    // Initial sync
    const initialMode = document.querySelector('input[name="app-mode"]:checked')?.value || 'poster';
    toggleMode(initialMode);
    updateLabelPreview();
});

// =================================================================
// SPECIFICATION & METADATA SHEET GENERATOR + 2-PAGE EXPORT ENGINE
// =================================================================

function escapeHTML(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

function getExportMetadata(mode) {
    const isPrintReady = document.getElementById("export-print-ready")?.checked;
    const exportScaleStr = isPrintReady ? "High-DPI 3.5x Print Resolution" : "Standard 2.0x Web Resolution";
    const timestampStr = new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' });
    const configId = 'MA-' + Math.random().toString(36).substring(2, 8).toUpperCase();

    if (mode === 'label') {
        const widthVal = document.getElementById('label-width-slider')?.value || '600';
        const heightVal = document.getElementById('label-height-slider')?.value || '400';
        const zoomVal = document.getElementById('label-zoom-slider')?.value || '100';
        const logoVal = document.getElementById('label-logo-slider')?.value || '80';
        const productImgVal = document.getElementById('label-product-img-slider')?.value || '120';
        const showProductImg = document.getElementById('toggle-product-img')?.checked ? 'Yes (Visible)' : 'No (Hidden)';
        
        // Active preset pill
        const activePresetEl = document.querySelector('.preset-pill.active span') || document.querySelector('.preset-item.active span');
        const presetName = activePresetEl ? activePresetEl.textContent.trim() : 'Custom / Selected';

        // Active dimension preset
        const activeDimBtn = document.querySelector('.preset-btn.active');
        const presetDimName = activeDimBtn ? activeDimBtn.textContent.trim() : `Custom (${widthVal}x${heightVal})`;

        // Approx mm calculation (assuming ~96dpi display standard)
        const widthMm = Math.round(parseInt(widthVal) * 0.264583);
        const heightMm = Math.round(parseInt(heightVal) * 0.264583);

        return {
            mode: 'Product Label',
            configId,
            timestamp: timestampStr,
            exportScale: exportScaleStr,
            width: `${widthVal}px (~${widthMm}mm)`,
            height: `${heightVal}px (~${heightMm}mm)`,
            presetSize: presetDimName,
            zoomScale: `${zoomVal}%`,
            logoSize: `${logoVal}px`,
            productImgSize: `${productImgVal}px`,
            showProductImg,
            presetName,
            brandName: document.getElementById('brand-title')?.value || 'मेवाड़ की विरासत',
            productTitle: document.getElementById('product-name')?.value || 'आम का अचार',
            subtitle: document.getElementById('product-desc')?.value || '',
            ingredients: document.getElementById('label-ingredients')?.value || '',
            fssai: document.getElementById('label-fssai')?.value || '',
            batchNo: document.getElementById('label-batch')?.value || '',
            mfgDate: document.getElementById('label-mfg')?.value || '',
            bestBefore: document.getElementById('label-expiry')?.value || '',
            netWeight: document.getElementById('label-weight')?.value || '500g',
            vegNonVeg: '100% VEG',
            mfdBy: document.getElementById('label-mfg-by')?.value || '',
            customerCare: document.getElementById('label-customer-care')?.value || '',
            nutriEnergy: (document.getElementById('nutri-energy')?.value || '250') + ' kcal',
            nutriProtein: (document.getElementById('nutri-protein')?.value || '2.5') + ' g',
            nutriCarbs: (document.getElementById('nutri-carbs')?.value || '15.0') + ' g',
            nutriSugar: (document.getElementById('nutri-sugar')?.value || '2.0') + ' g',
            nutriFat: (document.getElementById('nutri-fat')?.value || '20.0') + ' g',
            nutriSodium: (document.getElementById('nutri-sodium')?.value || '1200') + ' mg',
            storageInst: 'Store in a cool, dry place. Retain layer of oil on top. Use a dry spoon.'
        };
    } else {
        // Marketing Poster Metadata
        const ratioRadio = document.querySelector('input[name="poster-ratio"]:checked');
        const posterRatioLabel = ratioRadio ? ratioRadio.nextElementSibling?.querySelector('span')?.textContent || ratioRadio.value : 'Square (1:1)';
        
        const activePresetEl = document.querySelector('.preset-pill.active span') || document.querySelector('.preset-item.active span');
        const presetName = activePresetEl ? activePresetEl.textContent.trim() : 'Mango / Selected';

        const themeRadio = document.querySelector('input[name="poster-theme"]:checked');
        const layoutTheme = themeRadio ? themeRadio.nextElementSibling?.querySelector('span')?.textContent || themeRadio.value : 'Royal Shahi';

        const langRadio = document.querySelector('input[name="poster-lang"]:checked');
        const language = langRadio ? langRadio.nextElementSibling?.querySelector('span')?.textContent || langRadio.value : 'Hindi';

        const frameSize = document.getElementById('img-frame-size')?.value ? document.getElementById('img-frame-size').value + 'px' : 'Standard Auto';
        const colorShape = document.getElementById('color-shape')?.value || 'Default Gradient';

        const logoToggle = document.getElementById('toggle-logo');
        const logoStatus = logoToggle && logoToggle.checked ? 'Visible (Shahi Logo)' : 'Hidden';

        return {
            mode: 'Marketing Poster',
            configId,
            timestamp: timestampStr,
            exportScale: exportScaleStr,
            posterRatio: posterRatioLabel,
            presetName,
            layoutTheme,
            frameSize,
            colorShape,
            language,
            logoStatus,
            brandName: document.getElementById('brand-title')?.value || 'मेवाड़ की विरासत',
            productTitle: document.getElementById('product-name')?.value || 'आम का अचार',
            subtitle: document.getElementById('product-desc')?.value || '',
            offerBadge: document.getElementById('badge-text')?.value || '100% Homemade',
            imagePromoTag: document.getElementById('image-tag-text')?.value || 'N/A',
            captionTitle: document.getElementById('poster-caption-title')?.value || '',
            captionStory: document.getElementById('poster-caption-desc')?.value || ''
        };
    }
}

function renderSpecSheetDOM(meta) {
    const renderContainer = document.getElementById('spec-sheet-render-container');
    if (!renderContainer) return null;
    renderContainer.innerHTML = '';

    const card = document.createElement('div');
    card.className = 'spec-sheet-card';

    const isLabel = meta.mode === 'Product Label';

    let html = `
        <div class="spec-sheet-header">
            <div class="spec-brand">
                <i class="fa-solid fa-pepper-hot"></i>
                <div>
                    <div class="spec-brand-title">MEWARI ACHAR DESIGN SPECIFICATIONS</div>
                    <div class="spec-brand-sub">Shahi Customizer & Label Engine Metadata Sheet</div>
                </div>
            </div>
            <div class="spec-meta-badge">
                <div class="spec-mode-pill">${meta.mode}</div>
                <div class="spec-timestamp">Generated: ${meta.timestamp}</div>
                <div class="spec-timestamp" style="color:#c5a059; font-weight:700; margin-top:2px;">Config ID: ${meta.configId}</div>
            </div>
        </div>

        <div class="spec-section-title">
            <i class="fa-solid fa-sliders"></i> 1. Dimension & Layout Specifications
        </div>
        <div class="spec-grid-3">
    `;

    if (isLabel) {
        html += `
            <div class="spec-box">
                <div class="spec-item"><span class="spec-label">Label Width</span><span class="spec-value spec-value-highlight">${meta.width}</span></div>
                <div class="spec-item"><span class="spec-label">Label Height</span><span class="spec-value spec-value-highlight">${meta.height}</span></div>
                <div class="spec-item"><span class="spec-label">Preset Dimension</span><span class="spec-value">${meta.presetSize}</span></div>
            </div>
            <div class="spec-box">
                <div class="spec-item"><span class="spec-label">Zoom Scale</span><span class="spec-value">${meta.zoomScale}</span></div>
                <div class="spec-item"><span class="spec-label">Logo Size</span><span class="spec-value">${meta.logoSize}</span></div>
                <div class="spec-item"><span class="spec-label">Product Img Size</span><span class="spec-value">${meta.productImgSize}</span></div>
            </div>
            <div class="spec-box">
                <div class="spec-item"><span class="spec-label">Show Product Img</span><span class="spec-value">${meta.showProductImg}</span></div>
                <div class="spec-item"><span class="spec-label">Product Preset</span><span class="spec-value">${meta.presetName}</span></div>
                <div class="spec-item"><span class="spec-label">DPI Resolution</span><span class="spec-value">${meta.exportScale}</span></div>
            </div>
        `;
    } else {
        html += `
            <div class="spec-box">
                <div class="spec-item"><span class="spec-label">Poster Ratio</span><span class="spec-value spec-value-highlight">${meta.posterRatio}</span></div>
                <div class="spec-item"><span class="spec-label">Product Preset</span><span class="spec-value">${meta.presetName}</span></div>
                <div class="spec-item"><span class="spec-label">Layout Theme</span><span class="spec-value">${meta.layoutTheme}</span></div>
            </div>
            <div class="spec-box">
                <div class="spec-item"><span class="spec-label">Frame Size</span><span class="spec-value">${meta.frameSize}</span></div>
                <div class="spec-item"><span class="spec-label">Color Shape</span><span class="spec-value">${meta.colorShape}</span></div>
                <div class="spec-item"><span class="spec-label">Poster Language</span><span class="spec-value">${meta.language}</span></div>
            </div>
            <div class="spec-box">
                <div class="spec-item"><span class="spec-label">Brand Logo</span><span class="spec-value">${meta.logoStatus}</span></div>
                <div class="spec-item"><span class="spec-label">DPI Resolution</span><span class="spec-value">${meta.exportScale}</span></div>
            </div>
        `;
    }

    html += `</div>`; // end spec-grid-3

    // Section 2: Text Content
    html += `
        <div class="spec-section-title">
            <i class="fa-solid fa-heading"></i> 2. Customized Text Content & Branding
        </div>
        <div class="spec-grid">
            <div class="spec-box">
                <div class="spec-item"><span class="spec-label">Brand Name</span><span class="spec-value spec-value-highlight">${escapeHTML(meta.brandName)}</span></div>
                <div class="spec-item"><span class="spec-label">Product Title</span><span class="spec-value spec-value-highlight">${escapeHTML(meta.productTitle)}</span></div>
                <div class="spec-item"><span class="spec-label">Subtitle / Description</span><span class="spec-value">${escapeHTML(meta.subtitle || 'None')}</span></div>
            </div>
            <div class="spec-box">
    `;

    if (isLabel) {
        html += `
                <div class="spec-item"><span class="spec-label">Net Weight</span><span class="spec-value">${escapeHTML(meta.netWeight)}</span></div>
                <div class="spec-item"><span class="spec-label">Dietary Badge</span><span class="spec-value" style="color:#2ecc71;">${escapeHTML(meta.vegNonVeg)}</span></div>
                <div class="spec-item"><span class="spec-label">Customer Care</span><span class="spec-value">${escapeHTML(meta.customerCare).replace(/\n/g, ', ')}</span></div>
        `;
    } else {
        html += `
                <div class="spec-item"><span class="spec-label">Promo Badge Text</span><span class="spec-value">${escapeHTML(meta.offerBadge || 'None')}</span></div>
                <div class="spec-item"><span class="spec-label">Image Promo Tag</span><span class="spec-value">${escapeHTML(meta.imagePromoTag || 'None')}</span></div>
                <div class="spec-item"><span class="spec-label">Caption Title</span><span class="spec-value">${escapeHTML(meta.captionTitle || 'None')}</span></div>
        `;
    }

    html += `
            </div>
        </div>
    `;

    if (isLabel) {
        // Section 3 & 4: Ingredients, Nutritional & Compliance
        html += `
            <div class="spec-section-title">
                <i class="fa-solid fa-wheat-awn"></i> 3. Ingredients & Nutritional Information (Per 100g)
            </div>
            <div class="spec-grid">
                <div class="spec-box">
                    <div class="spec-item"><span class="spec-label">Ingredients List</span><span class="spec-value" style="max-width:75%; line-height:1.4;">${escapeHTML(meta.ingredients)}</span></div>
                </div>
                <div class="spec-box">
                    <div class="spec-item"><span class="spec-label">Energy</span><span class="spec-value">${meta.nutriEnergy}</span></div>
                    <div class="spec-item"><span class="spec-label">Protein</span><span class="spec-value">${meta.nutriProtein}</span></div>
                    <div class="spec-item"><span class="spec-label">Carbohydrates</span><span class="spec-value">${meta.nutriCarbs}</span></div>
                    <div class="spec-item"><span class="spec-label">Total Sugar</span><span class="spec-value">${meta.nutriSugar}</span></div>
                    <div class="spec-item"><span class="spec-label">Total Fat</span><span class="spec-value">${meta.nutriFat}</span></div>
                    <div class="spec-item"><span class="spec-label">Sodium</span><span class="spec-value">${meta.nutriSodium}</span></div>
                </div>
            </div>

            <div class="spec-section-title">
                <i class="fa-solid fa-building-shield"></i> 4. Compliance & Manufacturing Details
            </div>
            <div class="spec-grid">
                <div class="spec-box">
                    <div class="spec-item"><span class="spec-label">Mfd & Marketed By</span><span class="spec-value">${escapeHTML(meta.mfdBy)}</span></div>
                    <div class="spec-item"><span class="spec-label">Storage Instructions</span><span class="spec-value">${escapeHTML(meta.storageInst)}</span></div>
                </div>
                <div class="spec-box">
                    <div class="spec-item"><span class="spec-label">FSSAI Lic. No.</span><span class="spec-value spec-value-highlight">${escapeHTML(meta.fssai)}</span></div>
                    <div class="spec-item"><span class="spec-label">Batch No.</span><span class="spec-value">${escapeHTML(meta.batchNo)}</span></div>
                    <div class="spec-item"><span class="spec-label">Mfg Date</span><span class="spec-value">${escapeHTML(meta.mfgDate)}</span></div>
                    <div class="spec-item"><span class="spec-label">Best Before</span><span class="spec-value">${escapeHTML(meta.bestBefore)}</span></div>
                </div>
            </div>
        `;
    }

    html += `
        <div class="spec-footer">
            <span class="spec-footer-logo">MEWARI ACHAR HERITAGE DESIGNS</span>
            <span>Generated automatically via Mewari Achar Poster & Label Web Customizer</span>
        </div>
    `;

    card.innerHTML = html;
    renderContainer.appendChild(card);
    return card;
}

// Master Export Function
async function handleExport(exportType) {
    const mode = document.querySelector('input[name="app-mode"]:checked')?.value || 'poster';
    const targetCanvas = mode === 'label' ? document.getElementById('label-canvas') : document.getElementById('poster-canvas');
    if (!targetCanvas) {
        alert("Canvas element not found.");
        return;
    }

    const btnPdf = document.getElementById('btn-download-pdf');
    const btnPng = document.getElementById('btn-download');
    const activeBtn = exportType === 'pdf' ? btnPdf : btnPng;

    const originalText = activeBtn ? activeBtn.innerHTML : '';
    if (activeBtn) {
        activeBtn.disabled = true;
        activeBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Generating ${exportType.toUpperCase()}...`;
    }

    try {
        const printReady = document.getElementById('export-print-ready')?.checked;
        const includeSpecs = document.getElementById('export-include-specs')?.checked;
        const scaleValue = printReady ? 3.5 : 2.0;

        // Temporary scale reset for export capture
        const originalTransform = targetCanvas.style.transform;
        targetCanvas.style.transform = 'scale(1)';

        // 1. Capture Page 1 Canvas
        const canvas1 = await html2canvas(targetCanvas, {
            scale: scaleValue,
            useCORS: true,
            allowTaint: true,
            backgroundColor: mode === 'label' ? '#ffffff' : null
        });
        targetCanvas.style.transform = originalTransform;

        const metadata = getExportMetadata(mode);
        const fileNameBase = `Mewari_Achar_${mode === 'label' ? 'Label' : 'Poster'}_${metadata.configId}`;

        if (exportType === 'pdf') {
            const JS_PDF = window.jsPDF || (window.jspdf && window.jspdf.jsPDF);
            if (!JS_PDF) {
                alert("jsPDF library is not loaded yet. Please check your internet connection or reload the page.");
                return;
            }

            const isLandscape1 = canvas1.width > canvas1.height;
            const pdf = new JS_PDF({
                orientation: isLandscape1 ? 'landscape' : 'portrait',
                unit: 'mm',
                format: 'a4'
            });

            const pdfW1 = pdf.internal.pageSize.getWidth();
            const pdfH1 = pdf.internal.pageSize.getHeight();
            const aspect1 = canvas1.width / canvas1.height;

            let imgW1 = pdfW1;
            let imgH1 = pdfW1 / aspect1;
            if (imgH1 > pdfH1) {
                imgH1 = pdfH1;
                imgW1 = pdfH1 * aspect1;
            }

            const marginX1 = (pdfW1 - imgW1) / 2;
            const marginY1 = (pdfH1 - imgH1) / 2;

            const imgData1 = canvas1.toDataURL('image/png');
            pdf.addImage(imgData1, 'PNG', marginX1, marginY1, imgW1, imgH1, undefined, 'FAST');

            if (includeSpecs) {
                const specCardEl = renderSpecSheetDOM(metadata);
                if (specCardEl) {
                    const canvas2 = await html2canvas(specCardEl, {
                        scale: 2.0,
                        useCORS: true,
                        allowTaint: true,
                        backgroundColor: '#0f1117'
                    });

                    pdf.addPage('a4', 'landscape');
                    const pdfW2 = pdf.internal.pageSize.getWidth();
                    const pdfH2 = pdf.internal.pageSize.getHeight();
                    const aspect2 = canvas2.width / canvas2.height;

                    let imgW2 = pdfW2 - 10;
                    let imgH2 = imgW2 / aspect2;
                    if (imgH2 > pdfH2 - 10) {
                        imgH2 = pdfH2 - 10;
                        imgW2 = imgH2 * aspect2;
                    }

                    const marginX2 = (pdfW2 - imgW2) / 2;
                    const marginY2 = (pdfH2 - imgH2) / 2;

                    const imgData2 = canvas2.toDataURL('image/png');
                    pdf.addImage(imgData2, 'PNG', marginX2, marginY2, imgW2, imgH2, undefined, 'FAST');
                }
            }

            pdf.save(`${fileNameBase}_Document.pdf`);
        } else {
            // PNG Export
            const link1 = document.createElement('a');
            link1.download = `${fileNameBase}_Graphic.png`;
            link1.href = canvas1.toDataURL('image/png');
            document.body.appendChild(link1);
            link1.click();
            document.body.removeChild(link1);

            // If include specs checked, also download Page 2 Spec Sheet PNG
            if (includeSpecs) {
                const specCardEl = renderSpecSheetDOM(metadata);
                if (specCardEl) {
                    const canvas2 = await html2canvas(specCardEl, {
                        scale: 2.0,
                        useCORS: true,
                        allowTaint: true,
                        backgroundColor: '#0f1117'
                    });
                    setTimeout(() => {
                        const link2 = document.createElement('a');
                        link2.download = `${fileNameBase}_SpecSheet.png`;
                        link2.href = canvas2.toDataURL('image/png');
                        document.body.appendChild(link2);
                        link2.click();
                        document.body.removeChild(link2);
                    }, 500);
                }
            }
        }
    } catch (err) {
        console.error("Export error:", err);
        alert("Error exporting document: " + err.message);
    } finally {
        if (activeBtn) {
            activeBtn.disabled = false;
            activeBtn.innerHTML = originalText;
        }
    }
}

// Bind Export Buttons reliably (Immediate + Event fallback)
function bindExportButtons() {
    const btnPdf = document.getElementById('btn-download-pdf');
    if (btnPdf) {
        const newBtnPdf = btnPdf.cloneNode(true);
        btnPdf.parentNode.replaceChild(newBtnPdf, btnPdf);
        newBtnPdf.addEventListener('click', (e) => {
            e.preventDefault();
            handleExport('pdf');
        });
    }

    const btnPng = document.getElementById('btn-download');
    if (btnPng) {
        const newBtnPng = btnPng.cloneNode(true);
        btnPng.parentNode.replaceChild(newBtnPng, btnPng);
        newBtnPng.addEventListener('click', (e) => {
            e.preventDefault();
            handleExport('png');
        });
    }
}

// Execute binding immediately and on ready state
bindExportButtons();
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindExportButtons);
}


