document.addEventListener("DOMContentLoaded", function () {
  // Function to update product details based on the product ID
  function updateProductDetails(productId) {
    // Update product details based on the product ID
    const productImage = document.getElementById("product-image");
    const productName = document.getElementById("product-name");
    const productPrice = document.getElementById("product-price");
    const productDescription = document.getElementById("product-description");

    // Update the product details based on the product ID
    switch (productId) {
      case "reputation":
        productImage.src = "taylor1.png";
        productName.textContent = "Reputation by Taylor Swift";
        productPrice.textContent = "₱ 3500.00"; 
        productDescription.textContent = "Explore Taylor Swift's unapologetic Reputation with the double LP set on Reputation Vinyl. This collector's edition includes iconic artwork, exclusive collectibles, and a limited release, offering a visually immersive experience for devoted Swifties and vinyl enthusiasts.";
        break;

      case "thedivinefeminine":
        productImage.src = "mac1.png";
        productName.textContent = "The Divine Feminine by Mac Miller";
        productPrice.textContent = "₱ 2900.00";
        productDescription.textContent = "Dive into the soulful world of Mac Miller's The Divine Feminine with this exclusive vinyl edition. With signature artwork, a curated tracklist including hits like Dang! and Cinderella, and premium packaging, this collector's item provides an intimate listening experience. Limited in quantity, The Divine Feminine Vinyl is a must-have for fans and vinyl collectors, capturing Miller's exploration of love and spirituality.";
        break;

      case "niki":
        productImage.src = "niki1.png";
        productName.textContent = "NIKI by Niki Zafanya";
        productPrice.textContent = "₱ 2500.00";
        productDescription.textContent = "Discover NIKI Zefanya's self-titled debut album on special edition vinyl. This collector's item features her distinctive style, cover art, and hits like Switchblade and Lose. With premium packaging, the limited NIKI Vinyl promises a unique, immersive experience for fans and vinyl enthusiasts to savor her artistry in a tangible format.";
        break;

      case "harryshouse":
        productImage.src = "harry2.png";
        productName.textContent = "Harry's House by Harry Styles";
        productPrice.textContent = "₱ 3200.00";
        productDescription.textContent = "Embark on a sonic journey with Harry Styles' masterpiece, Harry's House, in an exclusive vinyl edition. Immerse yourself in Styles' world with this collector's item, featuring distinct cover art and a curated tracklist, including hits like As It Was and Golden. Encased in premium packaging, this limited Harry's House Vinyl offers a unique and immersive listening experience for fans and vinyl enthusiasts, allowing you to embrace Harry Styles' soulful, genre-defying artistry in a tangible format.";
        break;

      case "speaknow":
        productImage.src = "taylor2.png";
        productName.textContent = "Speak Now by Taylor Swift";
        productPrice.textContent = "₱ 4000.00";
        productDescription.textContent = "Immerse yourself in Taylor Swift's enchanting world with the exclusive Speak Now vinyl edition. This collector's item features iconic artwork, a curated tracklist with classics like Mine and Back to December, and premium packaging for protection and aesthetic appeal. Limited in quantity, the Speak Now Vinyl offers an intimate listening experience, allowing fans and vinyl enthusiasts to relive Swift's storytelling and musical prowess in a tangible format.";
        break;
    
      case "circles":
        productImage.src = "mac2.png";
        productName.textContent = "Circles by Mac Miller";
        productPrice.textContent = "₱ 3300.00";
        productDescription.textContent = "Embark on a poignant musical journey with Mac Miller's Circles in a special edition vinyl. This collector's item features the album's distinctive cover art and a curated tracklist with soulful tracks like Good News and Circles. Encased in premium packaging for protection and visual allure, this limited Circles Vinyl promises an immersive and reflective listening experience. A must-have for fans and vinyl enthusiasts, it captures the essence of Mac Miller's introspective artistry in a tangible format.";
        break;

      case "moonchild":
        productImage.src = "niki2.png";
        productName.textContent = "Moonchild by Niki Zefanya";
        productPrice.textContent = "₱ 2300.00";
        productDescription.textContent = "Embark on a celestial journey with NIKI's Moonchild on exclusive vinyl. This collector's item features ethereal cover art and a curated tracklist, including standout tracks like Selene and Lose. Encased in premium packaging, this limited Moonchild Vinyl promises a mesmerizing listening experience for fans and vinyl enthusiasts, capturing NIKI's dreamy artistry in a tangible format.";
        break;

      case "harrystyles":
        productImage.src = "harry1.png";
        productName.textContent = "Harry Styles by Harry Styles";
        productPrice.textContent = "₱ 3500.00";
        productDescription.textContent = "Immerse in Harry Styles' musical genius with his self-titled debut album, now in an exclusive vinyl edition. This collector's item features iconic cover art and a curated tracklist, including hits like Sign of the Times and Kiwi. Encased in premium packaging, this limited Harry Styles Vinyl offers an immersive and timeless listening experience for fans and vinyl enthusiasts, capturing the essence of Styles' versatile artistry in a tangible format.";
        break;

      case "billieeilish":
        productImage.src = "billie1.png";
        productName.textContent = "Happier Than Ever by Billie Eilish";
        productPrice.textContent = "₱ 2500.00";
        productDescription.textContent = "Enhance your music collection with Billie Eilish's Happier Than Ever, now in deluxe vinyl. This collector's item features stunning cover art and a curated tracklist with hits like Therefore I Am. Encased in premium packaging for protection and visual allure, this limited edition vinyl promises an immersive and emotionally resonant listening experience. A must-have for fans and vinyl enthusiasts, it lets you fully immerse yourself in Billie Eilish's raw and evocative artistry in a tangible format.";
        break;

      case "sweetener":
        productImage.src = "ari1.png";
        productName.textContent = "Sweetener by Ariana Grande";
        productPrice.textContent = "₱ 2900.00";
        productDescription.textContent = "Savor Ariana Grande's Sweetener on exclusive vinyl. With eye-catching cover art and hits like No Tears Left to Cry, this collector's item in premium packaging promises a delectable and immersive listening experience. A must-have for fans and vinyl enthusiasts, it offers a tangible way to enjoy the sweet and soulful artistry of Ariana Grande in a timeless format.";
        break;

      case "cigarettesaftersex":
        productImage.src = "cas1.png";
        productName.textContent = "S*x by Cigarettes After S*x";
        productPrice.textContent = "₱ 2200.00";
        productDescription.textContent = "Elevate your listening with Cigarettes After Sex's Sex on special edition vinyl. This collector's item features evocative cover art and a curated tracklist with tracks like Nothing's Gonna Hurt You Baby. Encased in premium packaging for protection and visual allure, this limited edition Sex Vinyl promises a sensual and immersive journey through the band's unique musical landscape. A must-have for fans and vinyl enthusiasts, it offers a tangible way to embrace Cigarettes After Sex's romantic and ethereal artistry in a timeless format.";
        break;

      case "californication":
        productImage.src = "chili1.png";
        productName.textContent = "Californication by Red Hot Chili Peppers";
        productPrice.textContent = "₱ 2700.00";
        productDescription.textContent = "Enhance your collection with Red Hot Chili Peppers' Californication on exclusive vinyl. This collector's item features distinctive cover art and hits like Scar Tissue. Encased in premium packaging, the limited edition Californication Vinyl promises an immersive and nostalgic listening experience. A must-have for fans and vinyl enthusiasts, it lets you relive the energetic artistry of the Red Hot Chili Peppers in a tangible format.";
        break;

      case "musicofthespheres":
        productImage.src = "coldplay1.png";
        productName.textContent = "Music of the Spheres by Coldplay";
        productPrice.textContent = "₱ 1400.00";
        productDescription.textContent = "Embark on a cosmic journey with Coldplay's Music of the Spheres on exclusive vinyl. This collector's item features celestial cover art and hits like Higher Power. Encased in premium packaging, the limited edition Music of the Spheres Vinyl promises an immersive and otherworldly listening experience. A must-have for fans and vinyl enthusiasts, it lets you bask in the transcendent artistry of Coldplay in a tangible format.";
        break;

      case "nirvana":
        productImage.src = "nirvana1.png";
        productName.textContent = "Nirvana by Nirvana";
        productPrice.textContent = "₱ 2300.00";
        productDescription.textContent = "Explore the grunge era with Nirvana's self-titled compilation album on exclusive vinyl. This collector's item showcases the iconic cover and a curated tracklist with classics like Smells Like Teen Spirit. Encased in premium packaging, the limited edition Nirvana Vinyl promises an immersive and nostalgic listening experience. A must-have for fans and vinyl enthusiasts, it lets you revisit Nirvana's raw and groundbreaking artistry in a tangible format.";
        break;

      case "thankunext":
        productImage.src = "ari2.png";
        productName.textContent = "Thank U, Next by Ariana Grande";
        productPrice.textContent = "₱ 2400.00";
        productDescription.textContent = "Dive into the empowering melodies of Ariana Grande's thank u, next on exclusive vinyl. This collector's item features striking cover art and hits like thank u, next and 7 Rings. Encased in premium packaging, the limited edition thank u, next Vinyl promises an immersive and emotionally resonant listening experience. A must-have for fans and vinyl enthusiasts, it offers a tangible way to appreciate Ariana Grande's bold and authentic artistry in a timeless format.";
        break;

      case "dontsmileatme":
        productImage.src = "billie2.png";
        productName.textContent = "Don't Smile At Me by Billie Eilish";
        productPrice.textContent = "₱ 1900.00";
        productDescription.textContent = "Enhance your musical experience with Billie Eilish's Don't Smile at Me on exclusive vinyl. This collector's item showcases the EP's distinctive cover art and hits like Ocean Eyes. Encased in premium packaging, the limited edition Don't Smile at Me Vinyl promises an immersive and edgy listening experience. A must-have for fans and vinyl enthusiasts, it lets you delve into Billie Eilish's haunting and avant-garde artistry in a tangible format.";
        break;

      case "cry":
        productImage.src = "cas2.png";
        productName.textContent = "Cry by Cigarettes After S*x";
        productPrice.textContent = "₱ 2200.00";
        productDescription.textContent = "Feel the emotional depth of Cigarettes After Sex's Cry with this exclusive vinyl edition. This collector's item features the album's evocative cover art and soul-stirring tracks like Heavenly. Encased in premium packaging, the limited edition Cry Vinyl promises an immersive and contemplative listening experience. A must-have for fans and vinyl enthusiasts, it provides a tangible way to immerse yourself in the intimate and dreamy artistry of Cigarettes After Sex in a timeless format.";
        break;

      case "sparks":
        productImage.src = "coldplay2.png";
        productName.textContent = "Sparks by Coldplay";
        productPrice.textContent = "₱ 2200.00";
        productDescription.textContent = "Enhance your auditory experience with Coldplay's Sparks on exclusive vinyl. This collector's item features enchanting cover art and transcendent tracks like Yellow. Encased in premium packaging, the limited edition Sparks Vinyl promises an immersive and soul-stirring listening experience. A must-have for fans and vinyl enthusiasts, it lets you relish in the atmospheric and emotive artistry of Coldplay in a tangible format.";
        break;

      case "nevermind":
        productImage.src = "nirvana2.png";
        productName.textContent = "Nevermind by Nirvana";
        productPrice.textContent = "₱ 2250.00";
        productDescription.textContent = "Dive into the revolutionary grunge sounds of Nirvana's Nevermind on exclusive vinyl. This collector's item features iconic cover art and hits like Smells Like Teen Spirit. Encased in premium packaging, the limited edition Nevermind Vinyl promises an immersive and nostalgic listening experience. A must-have for fans and vinyl enthusiasts, it lets you rediscover the groundbreaking and raw artistry of Nirvana in a tangible format.";
        break;

      case "unlimitedlove":
        productImage.src = "chili2.png";
        productName.textContent = "Unlimited Love by Red Hot Chili Peppers";
        productPrice.textContent = "₱ 3200.00";
        productDescription.textContent = "Embark on a sonic journey with the Red Hot Chili Peppers' Unlimited Love on exclusive vinyl. This collector's item features vibrant cover art and hits like Black Summer. Encased in premium packaging, the limited edition Unlimited Love Vinyl promises an immersive and eclectic listening experience. A must-have for fans and vinyl enthusiasts, it lets you revel in the dynamic and soulful artistry of the Red Hot Chili Peppers in a tangible format.";
        break;

      case "pastelblue":
        productImage.src = "blue.jpg";
        productName.textContent = "Pastel Blue Vinyl Record Player";
        productPrice.textContent = "₱ 4000.00";
        productDescription.textContent = "Introducing our sleek Vinyl Record Player – a timeless fusion of classic aesthetics and modern technology. Immerse yourself in rich, warm vinyl sound with precision engineering for optimal performance. The stylish design seamlessly fits any space, and the belt-driven turntable ensures smooth playback. Switch between 33 1/3, 45, and 78 RPM records, embracing analog nostalgia with contemporary convenience. Elevate your listening experience where vintage charm meets cutting-edge audio technology.";
        break;

      case "beige":
        productImage.src = "beige.jpg";
        productName.textContent = "Beige Vinyl Record Player";
        productPrice.textContent = "₱ 4000.00";
        productDescription.textContent = "Introducing our sleek Vinyl Record Player – a timeless fusion of classic aesthetics and modern technology. Immerse yourself in rich, warm vinyl sound with precision engineering for optimal performance. The stylish design seamlessly fits any space, and the belt-driven turntable ensures smooth playback. Switch between 33 1/3, 45, and 78 RPM records, embracing analog nostalgia with contemporary convenience. Elevate your listening experience where vintage charm meets cutting-edge audio technology.";
        break;

      case "pastelgreen":
        productImage.src = "green.jpg";
        productName.textContent = "Pastel Green Vinyl Record Player";
        productPrice.textContent = "₱ 4000.00";
        productDescription.textContent = "Introducing our sleek Vinyl Record Player – a timeless fusion of classic aesthetics and modern technology. Immerse yourself in rich, warm vinyl sound with precision engineering for optimal performance. The stylish design seamlessly fits any space, and the belt-driven turntable ensures smooth playback. Switch between 33 1/3, 45, and 78 RPM records, embracing analog nostalgia with contemporary convenience. Elevate your listening experience where vintage charm meets cutting-edge audio technology.";
        break;

      default:
        // Handle unknown product IDs
        break;
    }

    const addToCartButton = document.getElementById("add-to-cart-button");
    addToCartButton.addEventListener("click", addToCart);
  }

  // Function to handle adding a product to the cart
  function addToCart() {
    // Get the product details from the page
    const productId = getQueryParam("product");
    const productName = document.getElementById("product-name").textContent;
    const productPriceString = document.getElementById("product-price").textContent;
    const quantity = document.getElementById('quantity-input').value;
    const productImageSrc = document.getElementById("product-image").src;

    // Parse the product price as a float
    const productPrice = parseFloat(productPriceString.replace("₱", ""));

    // Create a new cart item object
    const cartItem = {
      id: productId,
      name: productName,
      price: productPrice,
      quantity: parseInt(quantity),
      imageSrc: productImageSrc,
    };

    // Check if the cart array already exists in local storage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the product is already in the cart
    const existingProductIndex = cart.findIndex(
      (item) => item.id === productId
    );

    if (existingProductIndex !== -1) {
      // If the product is already in the cart, increment the quantity
      cart[existingProductIndex].quantity++;
    } else {
      // If the product is not in the cart, add it
      cart.push(cartItem);
    }

    // Update the local storage with the modified cart
    localStorage.setItem("cart", JSON.stringify(cart));

    // Optionally, you can redirect the user to the cart page or show a confirmation message
    alert("Product added to cart!");
  }

  // Function to handle product clicks
  function handleProductClick(event) {
    event.preventDefault(); // Prevent the default behavior of the anchor tag

    // Get the product ID from the data attribute of the clicked element
    const productId = event.target.dataset.productId;

    // Update the URL with the selected product ID
    history.pushState({}, null, `product-details.html?product=${productId}`);

    // Update the product details on the page
    updateProductDetails(productId);
  }

  // Attach click event listeners to each product item
  const productItems = document.querySelectorAll(".col-4 img");
  productItems.forEach((item) => {
    item.addEventListener("click", handleProductClick);
  });

  // Call the function to update product details based on the current URL
  const currentProductId = new URLSearchParams(window.location.search).get(
    "product"
  );
  if (currentProductId) {
    updateProductDetails(currentProductId);
  }
});

// Function to get query parameters from the URL
function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}