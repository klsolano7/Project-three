function renderToAdContainer(container, htmlSrc) {
    container.innerHTML = htmlSrc;
}

function renderTemplate(htmlTemplate, params, adContainer) {
    var dynamicCreativeApiUrl = 'https://www.cargurus.com/Cars/dynamiccreative/getDynamicCreativeAdInfo.action?body='
        + encodeURIComponent(JSON.stringify(params));

    var xhr = new XMLHttpRequest();
    xhr.open('GET', dynamicCreativeApiUrl);
    xhr.withCredentials = true;

    xhr.onload = function () {
        var data = JSON.parse(xhr.responseText);
        if (!data.success) {
            console.log('request failed', data.error);
            return;
        }

        try {
            var context = {
                dealerName: data.ad.dealer_name,
                dealerStreetAddress: data.ad.street_address,
                dealerPhone: data.ad.tracked_phone_number,
                landingPageUrl: data.ad.landing_page_url,
                vehicleEntity: data.ad.vehicle_entity,
                carYear: data.ad.car_year,
                carMake: data.ad.car_make,
                carModel: data.ad.car_model,
                carTrim: data.ad.car_trim,
                tagLine: data.ad.tag_line,
                inventoryImageUrl: data.ad.inventory_image_url,
                dealerLogoUrl: data.ad.dealer_logo_url,
                listingTitle: data.ad.listing_title,
                listingPrice: data.ad.listing_price,
                redirectUrl: data.ad.redirect_url
            };
            if (data.ad.rating.toLowerCase().indexOf('great') >= 0) {
                context.rating = 'great';
            } else if (data.ad.rating.toLowerCase().indexOf('good') >= 0) {
                context.rating = 'good';
            } else {
                context.rating = '';
            }

            if (data.ad.additional_image_urls) {
                context.additionalImageUrls = data.ad.additional_image_urls;
            }

            var template = Handlebars.compile(htmlTemplate);
            renderToAdContainer(adContainer, template(context));

            var listingTitle = document.getElementById('listing-title');
            if (listingTitle) {
                var w = listingTitle.clientWidth;
                if (w && w > 0) {
                    if (w <= 130) {
                        listingTitle.classList.add('cg-big-caption');
                    } else if (w > 120 && w <= 178) {
                        listingTitle.classList.add('cg-mid-caption');
                    }
                }
            }

            var dealerNameEl = document.getElementById('dealer_name');
            if (dealerNameEl) {
                // test to see if it's on one line
                if ((dealerNameEl.clientHeight <= 15) && (dealerNameEl.clientHeight > 0)) {
                    // increase font size
                    dealerNameEl.classList.add('dealer-name-font-large');
                    if (dealerNameEl.clientHeight > 30) {
                        // revert if the new size spans more than 2 lines
                        dealerNameEl.classList.remove('dealer-name-font-large');
                    }
                }
            }
        } catch (error) {
            console.log('rendering failed', error);
        }
    };
    xhr.onerror = function (error) {
        console.log('request failed', error);
    };
    xhr.send();
}


function generateBadge(rating, listingPrice) {
    var badgeHtmlStr = "";

    // make sure listingPrice param is not null or undefined.
    if (!listingPrice) {
        listingPrice = "";
    }

    // Make sure rating param is a string
    if (rating && (typeof rating === "string")) {
        badgeHtmlStr =
        '<div class="vehicle-price-container price-and-badge">' +
        '<div>' +
            '<div class="vehicle-price-wrapper">' +
                '<span class="vehicle-price">' + listingPrice + '</span>' +
            '</div>' +
            '<div class="deal-rating-container">' +
            '<a href="#" class="btn-deal-rating ' + rating + '-deal">' +
                '<div class="btn-circle-arrow">' +
                    '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" class="rotate-' + rating + '-deal"><path  stroke="#006B00" fill="white" d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 18v-4h-7v-4h7v-4l6 6-6 6z"/></svg>' +
                '</div>' +
                '<span class="btn-caption">' + rating.toUpperCase() + ' DEAL</span>' +
            '</a>' +
            '<img class="cg-logo" src="https://static1.cargurus.com/gfx/logos/CarGurusLogo.png">' +
            '</div>' +
        '</div>' +
        '</div>';
    } else {
        badgeHtmlStr =
        '<div class="vehicle-price-container">' +
            '<div>' +
            '<div class="vehicle-price-wrapper">' +
                '<span class="vehicle-price">' + listingPrice + '</span>' +
            '</div>' +
            '</div>' +
        '</div>';
    }

    return badgeHtmlStr;
}

function generateInventoryPhotos(listingTitle, inventoryImageUrl, additionalImageUrls) {
    var outputStr = "";
    var mainImage =
      '<div class="cg-col cg-img-container cg-col-vehicle-img">' +
        '<img alt="' + listingTitle + '" class="cg-img" src="' + inventoryImageUrl + '">' +
      '</div>';
    var blankImage = '<div class="cg-col cg-col-blank-vehicle-img"></div>';
    var imagePadding = '<div class="cg-col cg-col-img-padding"></div>';
    if (additionalImageUrls && Array.isArray(additionalImageUrls)) {
        // there can only be 0-2 additional images
        if ((additionalImageUrls.length >= 0) && (additionalImageUrls.length <= 2)) {
            switch (additionalImageUrls.length) {
                case 0:
                    outputStr = blankImage + mainImage + blankImage;
                    break;
                case 1:
                    outputStr = additionalImageUrls.reduce(function (accumulator, currentValue, currentIndex, array) {
                        return accumulator +
                            '<div class="cg-col cg-img-container cg-col-vehicle-img">' +
                                '<img alt="' + listingTitle + '" class="cg-img" src="' + currentValue + '">' +
                            '</div>';
                    }, mainImage + imagePadding);
                    outputStr = imagePadding + outputStr + imagePadding;
                    break;
                case 2:
                    outputStr = additionalImageUrls.reduce(function (accumulator, currentValue, currentIndex, array) {
                        return accumulator +
                            '<div class="cg-col cg-img-container cg-col-vehicle-img">' +
                                '<img alt="' + listingTitle + '" class="cg-img" src="' + currentValue + '">' +
                            '</div>';
                    }, mainImage);
                    break;
                default:
            }
        }
    } else {
        outputStr = mainImage;
    }

    return outputStr;
}
