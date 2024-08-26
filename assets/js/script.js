function increaseQuantity() {
    var quantityInput = document.getElementById('quantity');
    var currentQuantity = parseInt(quantityInput.value);
    quantityInput.value = currentQuantity + 1;
}

function decreaseQuantity() {
    var quantityInput = document.getElementById('quantity');
    var currentQuantity = parseInt(quantityInput.value);
    if (currentQuantity > 1) {
        quantityInput.value = currentQuantity - 1;
    }
}


function increaseQuantity2() {
    var quantityInput2 = document.getElementById('quantity2');
    var currentQuantity2 = parseInt(quantityInput2.value);
    quantityInput2.value = currentQuantity2 + 1;
}

function decreaseQuantity2() {
    var quantityInput2 = document.getElementById('quantity2');
    var currentQuantity2 = parseInt(quantityInput2.value);
    if (currentQuantity2 > 1) {
        quantityInput2.value = currentQuantity2 - 1;
    }
}


function increaseQuantity3() {
    var quantityInput3 = document.getElementById('quantity3');
    var currentQuantity3 = parseInt(quantityInput3.value);
    quantityInput3.value = currentQuantity3 + 1;
}

function decreaseQuantity3() {
    var quantityInput3 = document.getElementById('quantity3');
    var currentQuantity3 = parseInt(quantityInput3.value);
    if (currentQuantity3 > 1) {
        quantityInput3.value = currentQuantity3 - 1;
    }
}




function setActiveLink() {
    // Get all nav links
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname;
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref && currentPage.includes(linkHref)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}
window.onload = setActiveLink;







const apiKey = 'YOUR_GOOGLE_TRANSLATE_API_KEY'; // Replace with your Google Translate API key
        const targetLanguage = 'nl'; // 'nl' is the language code for Dutch

        $(document).ready(function() {
            // Get all text nodes on the page
            const elements = $("body").find("*").filter(function() {
                return $(this).children().length === 0 && this.innerText.trim().length > 0;
            });

            // Iterate over each text node and translate it
            elements.each(function() {
                const originalText = $(this).text().trim();
                if (originalText.length > 0) {
                    translateText(originalText, $(this));
                }
            });
        });

        function translateText(text, element) {
            $.ajax({
                url: `https://translation.googleapis.com/language/translate/v2`,
                type: 'GET',
                data: {
                    q: text,
                    target: targetLanguage,
                    key: apiKey
                },
                success: function(data) {
                    // Update the element's text with the translated text
                    const translatedText = data.data.translations[0].translatedText;
                    element.text(translatedText);
                },
                error: function() {
                    console.error("Error translating text");
                }
            });
        }