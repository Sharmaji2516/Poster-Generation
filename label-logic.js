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

// Update the global download handler to support downloading the label canvas when in label mode
const originalBtnDownload = document.getElementById('btn-download');
if (originalBtnDownload) {
    // Clone node to replace event listeners without touching app.js core logic
    const newBtnDownload = originalBtnDownload.cloneNode(true);
    originalBtnDownload.parentNode.replaceChild(newBtnDownload, originalBtnDownload);
    
    newBtnDownload.addEventListener('click', () => {
        const mode = document.querySelector('input[name="app-mode"]:checked').value;
        const targetCanvas = mode === 'label' ? document.getElementById('label-canvas') : document.getElementById('poster-canvas');
        const printReady = document.getElementById('export-print-ready').checked;
        
        const scaleValue = printReady ? 3 : 2; // High DPI export
        
        // Apply temporary print styles if needed
        const originalTransform = targetCanvas.style.transform;
        targetCanvas.style.transform = 'scale(1)'; // reset scale for export
        
        html2canvas(targetCanvas, {
            scale: scaleValue,
            useCORS: true,
            allowTaint: true,
            backgroundColor: mode === 'label' ? '#ffffff' : null // force white bg for labels
        }).then(canvas => {
            // Restore transform
            targetCanvas.style.transform = originalTransform;
            
            const link = document.createElement('a');
            link.download = `mewari_achaar_${mode}_${Date.now()}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
        }).catch(err => {
            console.error("Export Error:", err);
            alert("Error exporting image. Please check console.");
        });
    });
}
