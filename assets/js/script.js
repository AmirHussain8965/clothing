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


    var translations = {
        
        "du": { "home_tiltle": "Stap in vertrouwen met op maat gemaakt maatwerk",

            "home_hero_des": "Zijn er veel kledingstukken in je kast die je niet passen? Overweeg dit: de mode-industrie is een van de grootste bijdragers aan de wereldwijde uitstoot van broeikasgassen, goed voor ongeveer 10%. Kiezen voor kleding op maat kan helpen om ongebruikte kleding te verminderen, wat bijdraagt aan een milieuvriendelijkere levensstijl.",

            "explore_btn": "Ontdek",
            "scroll_down": "SCROLL NAAR BENEDEN",
            "best_sellers_title": "Bestsellers",
            "skirt_text": "Rok",
            "collection_txt": "Collecties",
            "dress_text": "Jurk",
            "dresses_text": "Jurken",
            "skirts_text": "Rokken",
            "shirts_tops": "Overhemden en tops",
            "Tshirts_text": "T-shirts",
            "shirts_text": "Overhemd",
            "top_text": "Top",
            "footer1": "2024 Foxy-kleding . Alle rechten voorbehouden",
            "aboutus_txt": "Over ons",
            "about_des1": "De manier waarop we kleding maken en kopen schaadt onze planeet. De mode-industrie is een van de meest vervuilende ter wereld en verantwoordelijk voor naar schatting 10% van onze mondiale uitstoot van broeikasgassen. Naarmate de klimaatverandering toeneemt, wordt het van cruciaal belang om opnieuw na te denken over de manier waarop we kleding produceren.",
            "about_des2": "Bij Foxy Wear is het ons doel om de voetafdruk van onze kledingafval te verkleinen door elk kledingstuk op maat te passen voor onze klanten. We bereiken dit door de technologie-industrie te laten samensmelten met mode.",
            "about_des3": "Al onze stukken worden geproduceerd in Spanje. Wij produceren uitsluitend op bestelling en houden geen voorraad aan om verspilling te minimaliseren en overproductie te voorkomen. Elk kledingstuk wordt met nauwgezette zorg en aandacht voor detail vervaardigd, zodat het perfect past, zijn doel dient en een blijvende indruk achterlaat op onze klanten.",
            "contactus_txt": "Neem contact met ons op",
            "home_text": "Home",
            "first_name": "Voornaam",
            "last_name": "Achternaam",
            "cont_name": "Naam *",
            "cont_email": "E-mail *",
            "cart_email": "E-mail",
            "cont_phone": "Telefoonnummer *",
            "phoneNO": "Telefoonnummer",
            "currentText": "Onderwerp",
            "cont_message": "Bericht",
            "submitBtn_txt": "Verzend",
            "drop_text1": "Feniks, lichtblauw",
            "drop_text2": "Keperstof, 100% katoen",
            "back_txt": "Terug",
            "design_style_title": "Ontwerp uw stijl",
            "continue_btn": "Doorgaan",
            "avail_size": "Beschikbare maten", 
            "customize_txt": "Aanpassen?",
            "addto_cart": "Voeg toe aan winkelwagen",
            "shop_txt": "Winkel",
            "cart_txt": "Winkelwagen",
            "cont_detail": "Contactgegevens",
            "address_place": "Adres",
            "postcode": "Postcode",
            "city_place": "Stad",
            "card_txt": "Kaart",
            "shoppay": "Winkel betalen",
            "cardnumber": "Kaartnummer",
            "order_summ": "Besteloverzicht",
            "pay_shirt_txt1": "Ruwe zwarte T-shirtopstelling",
            "pay_shirt_txt2": "Kleur:",
            "pay_shirt_txt3": "Maat:",
            "subtotal_txt": "Subtotaal",
            "shipping_txt": "Verzending:",
            "free_txt": "Vrij",
            "tax_txt": "Belasting:",
            "total_txt": "Totaal",
            "checkout_btn": "Afrekenen",
            "cart_pay_product_a": "Ga door met winkelen",
            "pd_title": "Uw winkelwagen",
        },

        "en": { "home_tiltle": "Step out with confidence with custom tailoring", 

            "home_hero_des": "Are there many garments in your closet that do not fit you? Consider this: the fashion industry is one of the largest contributors to global greenhouse gas emissions, accounting for approximately 10%. Opting for custom-fit clothing can help minimize unused apparel, fostering a more environmentally friendly lifestyle.",
            "explore_btn": "Explore",
            "scroll_down": "SCROLL DOWN",
            "best_sellers_title": "Best Sellers",
            "skirt_text": "Skirt",
            "collection_txt": "Collections",
            "dress_text": "Dress",
            "dresses_text": "Dresses",
            "skirts_text": "Skirts",
            "shirts_tops": "Shirts and Tops",
            "Tshirts_text": "T-shirts",
            "footer1": "2024 Foxy Wear . All Rights Reserved",
            "aboutus_txt": "About Us",
            "about_des1": "How we make and buy clothes hurts our planet. The fashion industry is one of the most pollutive in the world, accounting for an estimated 10% of our global green house gas emissions. As climate change intensifies, it becomes critical to re-think how we produce clothing. ",
            "about_des2": "At Foxy Wear, our aim is to help reduce our apparel waste footprint by custom fitting every item of clothing for our customers. We accomplish this by merging the tech industry with fashion.",
            "about_des3": "All our pieces are produced in Spain. We produce exclusively by order, maintaining no inventory to minimize waste and avoid overproduction.Each garment is crafted with meticulous care and attention to detail, ensuring it fits perfectly, serves its purpose, and leaves a lasting impression on our customers.",
            "contactus_txt": "Contact Us",
            "home_text": "Home",
            "first_name": "First Name",
            "last_name": "Last Name",
            "cont_name": "Name *",
            "cont_email": "Email",
            "cart_email": "Email",
            "cont_phone": "Phone number *",
            "phoneNO": "Phone number",
            "currentText": "Subject",
            "cont_message": "Message",
            "submitBtn_txt": "Submit",
            "drop_text1": "Phoenix, light blue",
            "drop_text2": "Twill, 100% Cotton",
            "back_txt": "Back",
            "design_style_title": "Design Your Style",
            "continue_btn": "Continue",
            "avail_size": "Available Sizes", 
            "customize_txt": "Customize? ",
            "addto_cart": "Add to Cart",
            "shop_txt": "Shop",
            "cart_txt": "Cart",
            "cont_detail": "Contact Details",
            "postcode": "Postal Code",
            "city_place": "City",
            "address_place": "Address",
            "card_txt": "Card",
            "shoppay": "Shop pay",
            "cardnumber": "Card Number",
            "order_summ": "Order Suumary",
            "pay_shirt_txt1": "Raw Black T-Shirt Lineup",
            "pay_shirt_txt2": "Color:",
            "pay_shirt_txt3": "Size:",
            "subtotal_txt": "Subtotal",
            "shipping_txt": "Shipping:",
            "free_txt": "Free",
            "tax_txt": "Tax:",
            "total_txt": "Total",
            "checkout_btn": "Checkout",
            "shirts_text": "Shirts",
            "top_text": "Tops",
            "cart_pay_product_a": "Continue Shopping",
            "pd_title": "Your cart",
        },
    };


    $('#language-select').change(function() {
        

        var lang = $(this).val();
        var inputValue = $(this).attr('');

        // For Placeholder ===========
        $('#first_name').attr('placeholder', translations[lang]['first_name']);
        $('#last_name').attr('placeholder', translations[lang]['last_name']);
        $('#cont_name').attr('placeholder', translations[lang]['cont_name']);
        $('#cont_email').attr('placeholder', translations[lang]['cont_email']);
        $('#cart_email').attr('placeholder', translations[lang]['cart_email']);
        $('#cont_phone').attr('placeholder', translations[lang]['cont_phone']);
        $('#phoneNO').attr('placeholder', translations[lang]['phoneNO']);
        $('#cont_message').attr('placeholder', translations[lang]['cont_message']);
        $('#address_place').attr('placeholder', translations[lang]['address_place']);
        $('#city_place').attr('placeholder', translations[lang]['postcode']);
        $('#postcode').attr('placeholder', translations[lang]['city_place']);
        $('#cardnumber').attr('placeholder', translations[lang]['cardnumber']);

        // For Text ===========
        $('#home_tiltle').text(translations[lang]['home_tiltle']);
        $('#home_hero_des').text(translations[lang]['home_hero_des']);
        $('.explore_btn').text(translations[lang]['explore_btn']);
        $('.scroll_down').text(translations[lang]['scroll_down']);
        $('#best_sellers_title').text(translations[lang]['best_sellers_title']);        
        $('.skirt_text').text(translations[lang]['skirt_text']);
        $('.collection_txt').text(translations[lang]['collection_txt']);
        $('.dresses_text').text(translations[lang]['dresses_text']);
        $('.dress_text').text(translations[lang]['dress_text']);
        $('.skirts_text').text(translations[lang]['skirts_text']);
        $('.shirts_tops').text(translations[lang]['shirts_tops']);
        $('.Tshirts_text').text(translations[lang]['Tshirts_text']);
        $('.footer1').text(translations[lang]['footer1']);
        $('.aboutus_txt').text(translations[lang]['aboutus_txt']);
        $('.about_des1').text(translations[lang]['about_des1']);
        $('.about_des2').text(translations[lang]['about_des2']);
        $('.about_des3').text(translations[lang]['about_des3']);
        $('.contactus_txt').text(translations[lang]['contactus_txt']);
        $('.home_text').text(translations[lang]['home_text']);
        $('.submitBtn_txt').text(translations[lang]['submitBtn_txt']);
        $('.drop_text1').text(translations[lang]['drop_text1']);
        $('.drop_text2').text(translations[lang]['drop_text2']);
        $('.back_txt').text(translations[lang]['back_txt']);
        $('.design_style_title').text(translations[lang]['design_style_title']);
        $('.continue_btn').text(translations[lang]['continue_btn']);
        $('.avail_size').text(translations[lang]['avail_size']);
        $('.customize_txt').text(translations[lang]['customize_txt']);
        $('.addto_cart').text(translations[lang]['addto_cart']);
        $('.shop_txt').text(translations[lang]['shop_txt']);
        $('.cart_txt').text(translations[lang]['cart_txt']);
        $('.cont_detail').text(translations[lang]['cont_detail']);
        $('.card_txt').text(translations[lang]['card_txt']);
        $('.shoppay').text(translations[lang]['shoppay']);
        $('.order_summ').text(translations[lang]['order_summ']);
        $('.pay_shirt_txt1').text(translations[lang]['pay_shirt_txt1']);
        $('.pay_shirt_txt2').text(translations[lang]['pay_shirt_txt2']);
        $('.pay_shirt_txt3').text(translations[lang]['pay_shirt_txt3']);
        $('.subtotal_txt').text(translations[lang]['subtotal_txt']);
        $('.shipping_txt').text(translations[lang]['shipping_txt']);
        $('.free_txt').text(translations[lang]['free_txt']);
        $('.tax_txt').text(translations[lang]['tax_txt']);
        $('.total_txt').text(translations[lang]['total_txt']);
        $('.checkout_btn').text(translations[lang]['checkout_btn']);
        $('.cart_pay_product_a').text(translations[lang]['cart_pay_product_a']);
        $('.top_text').text(translations[lang]['top_text']);
        $('.shirts_text').text(translations[lang]['shirts_text']);
        $('.pd_title').text(translations[lang]['pd_title']);
    });

    
    const selectElement = document.getElementById('language-select');
    const selectedImage = document.getElementById('selected-image');
    const selectedText = document.getElementById('selected-text');

    selectElement.addEventListener('change', function() {
        const selectedOption = this.options[this.selectedIndex];
        const imageUrl = selectedOption.getAttribute('data-image');
        selectedImage.src = imageUrl;
        selectedText.textContent = selectedOption.textContent;
    });