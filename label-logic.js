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
    }

    function toggleMode(mode) {
        if (mode === 'label') {
            // Hide all poster sections except the first one (Product preset) and the customizer text (section 5)
            // Actually, we want to hide most poster settings, let's just hide everything and show label settings.
            posterSections.forEach(sec => {
                const heading = sec.querySelector('h2');
                if (heading) {
                    const text = heading.textContent;
                    if (text.includes('Product Preset') || text.includes('Customize Text')) {
                        sec.style.display = 'block'; // Keep product selection and basic text
                    } else {
                        sec.style.display = 'none'; // Hide aspect ratio, theme, badges, etc.
                    }
                }
            });
            
            // Show label settings
            if (labelSettingsContainer) labelSettingsContainer.style.display = 'block';
            
            // Toggle canvases
            if (posterCanvas) posterCanvas.style.display = 'none';
            if (labelCanvas) labelCanvas.style.display = 'flex';
            if (previewRatioLabel) previewRatioLabel.textContent = 'Live Label Preview (3:2 Print Ratio)';
            
            updateLabelPreview();
        } else {
            // Show all poster sections
            posterSections.forEach(sec => {
                sec.style.display = 'block';
            });
            
            // Hide label settings
            if (labelSettingsContainer) labelSettingsContainer.style.display = 'none';
            
            // Toggle canvases
            if (posterCanvas) posterCanvas.style.display = 'flex';
            if (labelCanvas) labelCanvas.style.display = 'none';
            
            // Re-trigger standard ratio label logic (from app.js) by firing event on ratio radio
            const checkedRatio = document.querySelector('input[name="poster-ratio"]:checked');
            if (checkedRatio && previewRatioLabel) {
                // simple reset based on value, normally app.js handles this on click
                let ratioText = "1:1 Ratio";
                if(checkedRatio.value === 'landscape') ratioText = "16:9 Ratio";
                if(checkedRatio.value === 'story') ratioText = "9:16 Ratio";
                if(checkedRatio.value === 'print-banner') ratioText = "3:2 Ratio";
                if(checkedRatio.value === 'flyer') ratioText = "4:3 Ratio";
                previewRatioLabel.textContent = 'Live Poster Preview (' + ratioText + ')';
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
    const allSizes = [
        'size-front-2-1', 'size-front-2-2', 'size-front-2-3',
        'size-flyer', 'size-banner', 'size-story', 'size-tag'
    ];
    labelSizeRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            if (labelCanvas) {
                labelCanvas.classList.remove(...allSizes);
                labelCanvas.classList.add('size-' + e.target.value);
            }
            if (previewRatioLabel) {
                let ratioText = "2:1 Ratio";
                if (e.target.value === 'front-2-1') ratioText = "2:1 Ratio";
                if (e.target.value === 'front-2-2') ratioText = "2:2 Ratio";
                if (e.target.value === 'front-2-3') ratioText = "2:3 Ratio";
                if (e.target.value === 'flyer') ratioText = "4:3 Flyer";
                if (e.target.value === 'banner') ratioText = "16:9 Banner";
                if (e.target.value === 'story') ratioText = "9:16 Story";
                if (e.target.value === 'tag') ratioText = "1:2 Tag";
                previewRatioLabel.textContent = 'Live Label Preview (' + ratioText + ')';
            }
        });
    });

    // Attach listeners for live update of label preview
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
