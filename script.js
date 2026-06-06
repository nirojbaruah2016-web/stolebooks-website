// ==============================
// STOLEBOOKS — MAIN SCRIPT
// ==============================

// ---- CART TOGGLE ----
function toggleCart() {
  document.body.classList.toggle("cart-open");
}

function scrollToBooks() {
  document.getElementById("books").scrollIntoView({ behavior: "smooth" });
}

// ---- HAMBURGER MENU ----
function toggleMenu() {
  document.getElementById("side-menu").classList.toggle("active");
}

// ==============================
// MAIN DOM READY
// ==============================
document.addEventListener("DOMContentLoaded", function () {

  const bookGrid   = document.getElementById("bookGrid");
  const exploreBtn = document.getElementById("exploreBtn");
  const search     = document.getElementById("search");
  const categoryRow = document.getElementById("categoryRow");

  // ==============================
  // BOOK DATA
  // ==============================
  const books = [
    // ================= FICTION =================
    { title: "Harry Potter",                         price: 219,  category: "Fiction",           image: "images/fiction/Harry Potter.jpg" },
    { title: "Too Good to Be True",                  price: 229,  category: "Fiction" },
    { title: "Verity",                               price: 149,  category: "Fiction" },
    { title: "A Thousand Splendid Suns",             price: 169,  category: "Fiction" },
    { title: "The Kite Runner",                      price: 159,  category: "Fiction" },
    { title: "I Don't Love You Anymore",             price: 139,  category: "Fiction" },
    { title: "Can We Be Strangers Again",            price: 145,  category: "Fiction" },
    { title: "The Door to Door Bookstore",           price: 169,  category: "Fiction" },
    { title: "The House Maid",                       price: 179,  category: "Fiction" },
    { title: "Wild Fire",                            price: 219,  category: "Fiction" },
    { title: "Icebreaker",                           price: 179,  category: "Fiction" },
    { title: "Love Theoretically",                   price: 199,  category: "Fiction" },
    { title: "The Silent Patient",                   price: 159,  category: "Fiction" },
    { title: "The American Roommate Experiment",     price: 179,  category: "Fiction" },
    { title: "House Maid Is Watching",               price: 159,  category: "Fiction" },
    { title: "Days at the Morisaki Bookshop",        price: 189,  category: "Fiction" },
    { title: "The Vegetarian",                       price: 129,  category: "Fiction" },
    { title: "Before The Coffee Gets Cold",          price: 139,  category: "Fiction" },
    { title: "Kafka on the Shore",                   price: 189,  category: "Fiction" },
    { title: "A Good Girl's Guide to Murder",        price: 199,  category: "Fiction" },
    { title: "Good Girl, Bad Blood",                 price: 199,  category: "Fiction" },
    { title: "As Good As Dead",                      price: 189,  category: "Fiction" },
    { title: "The Palace of Illusions",              price: 159,  category: "Fiction" },
    { title: "Norwegian Wood",                       price: 169,  category: "Fiction" },
    { title: "Kalki",                                price: 149,  category: "Fiction" },
    { title: "White Nights",                         price: 129,  category: "Fiction" },
    { title: "Warmth",                               price: 179,  category: "Fiction" },
    { title: "Call Me By Your Name",                 price: 139,  category: "Fiction" },
    { title: "It Starts With Us",                    price: 139,  category: "Fiction" },
    { title: "It Ends With Us",                      price: 139,  category: "Fiction" },
    { title: "Twisted Series (Set)",                 price: 499,  category: "Fiction" },
    { title: "Your Name (Set)",                      price: 359,  category: "Fiction" },
    { title: "The Setting Sun",                      price: 129,  category: "Fiction" },
    { title: "Where's Molly?",                       price: 139,  category: "Fiction" },
    { title: "The Forty Rules of Love",              price: 159,  category: "Fiction" },
    { title: "As Long as the Lemon Tree Grows",      price: 179,  category: "Fiction" },
    { title: "You've Reached Sam",                   price: 159,  category: "Fiction" },
    { title: "Dark Verse Series (Set)",              price: 699,  category: "Fiction" },
    { title: "Shatter Me Series (Set)",              price: 1299, category: "Fiction" },
    { title: "When I'm With You",                    price: 169,  category: "Fiction" },
    { title: "And The Mountains Echoed",             price: 179,  category: "Fiction" },
    { title: "Haunting Adeline (Set)",               price: 459,  category: "Fiction" },
    { title: "The Forest of Enchantments",           price: 179,  category: "Fiction" },
    { title: "The Metamorphosis",                    price: 159,  category: "Fiction" },
    { title: "The Book Thief",                       price: 219,  category: "Fiction" },
    { title: "Animal Farm",                          price: 119,  category: "Fiction" },
    { title: "1984",                                 price: 159,  category: "Fiction" },
    { title: "Normal People",                        price: 129,  category: "Fiction" },
    { title: "Crime and Punishment",                 price: 189,  category: "Fiction" },
    { title: "Mahagatha",                            price: 259,  category: "Fiction" },
    { title: "The Final Offer",                      price: 229,  category: "Fiction" },
    { title: "The Fine Print",                       price: 219,  category: "Fiction" },
    { title: "Heart Lamp",                           price: 169,  category: "Fiction" },
    { title: "Twisted Games",                        price: 169,  category: "Fiction" },
    { title: "Twisted Love",                         price: 199,  category: "Fiction" },
    { title: "Powerless",                            price: 199,  category: "Fiction" },
    { title: "Reckless",                             price: 199,  category: "Fiction" },
    { title: "Powerful",                             price: 199,  category: "Fiction" },
    { title: "Sounds like Love",                     price: 199,  category: "Fiction" },
    { title: "I Cannot say Goodbye to You",          price: 239,  category: "Fiction" },
    { title: "In the silence you left behind",       price: 129,  category: "Fiction" },
    { title: "Never Never",                          price: 189,  category: "Fiction" },
    { title: "Was I ever Enough",                    price: 169,  category: "Fiction" },
    { title: "One by One",                           price: 129,  category: "Fiction" },

    // ================= SELF-HELP =================
    { title: "Atomic Habits",                        price: 179, category: "Self-Help", image: "images/self-help/Atomic Habits.jpg" },
    { title: "Good Vibes Good Life",                 price: 129, category: "Self-Help" },
    { title: "The Secret",                           price: 159, category: "Self-Help" },
    { title: "Life's Amazing Secrets",               price: 129, category: "Self-Help" },
    { title: "Make Your Bed",                        price: 129, category: "Self-Help" },
    { title: "The Art of Being Alone",               price: 99,  category: "Self-Help" },
    { title: "The Art of Laziness",                  price: 99,  category: "Self-Help" },
    { title: "Do It Today",                          price: 139, category: "Self-Help" },
    { title: "Dopamine Detox",                       price: 139, category: "Self-Help" },
    { title: "Thank You For Leaving",                price: 129, category: "Self-Help" },
    { title: "Do Epic Shit",                         price: 139, category: "Self-Help" },
    { title: "Think Straight",                       price: 129, category: "Self-Help" },
    { title: "Manifest",                             price: 169, category: "Self-Help" },
    { title: "Mindset",                              price: 159, category: "Self-Help" },
    { title: "The Art of War",                       price: 99,  category: "Self-Help" },
    { title: "Don't Sweat the Small Things",         price: 139, category: "Self-Help" },
    { title: "Ikigai",                               price: 179, category: "Self-Help" },
    { title: "Can't Hurt Me",                        price: 159, category: "Self-Help" },
    { title: "How to Talk to Anyone",                price: 179, category: "Self-Help" },
    { title: "The Courage to Be Disliked",           price: 179, category: "Self-Help" },
    { title: "The Art of Detachment",                price: 119, category: "Self-Help" },
    { title: "The Mountain Is You",                  price: 149, category: "Self-Help" },

    // ================= BUSINESS =================
    { title: "The Psychology of Money",              price: 119, category: "Business", image: "images/business/psychology-of-money.jpg" },
    { title: "The Personal MBA",                     price: 159, category: "Business" },
    { title: "Zero to One",                          price: 129, category: "Business" },
    { title: "Hard Things About Hard Things",        price: 149, category: "Business" },
    { title: "Your Next Five Moves",                 price: 169, category: "Business" },
    { title: "Think and Grow Rich",                  price: 159, category: "Business" },
    { title: "48 Laws of Power",                     price: 189, category: "Business" },
    { title: "The Art of Spending Money",            price: 119, category: "Business" },
    { title: "The Atomic Habits Workbook",           price: 599, category: "Business" },
    { title: "The Laws of Human Nature",             price: 219, category: "Business" },
    { title: "This is Marketing",                    price: 189, category: "Business" },

    // ================= NON-FICTION =================
    { title: "Man's Search for Meaning",             price: 139, category: "Non-Fiction", image: "images/non-fiction/Man's Search for Meaning.jpg" },
    { title: "Meditations",                          price: 119, category: "Non-Fiction" },
    { title: "Beyond Good and Evil",                 price: 149, category: "Non-Fiction" },
    { title: "The Diary of a Young Girl",            price: 179, category: "Non-Fiction" },
    { title: "Annihilation of Caste",                price: 120, category: "Non-Fiction" },
    { title: "1984",                                 price: 159, category: "Non-Fiction" },
    { title: "Fearless",                             price: 229, category: "Non-Fiction" },
    { title: "Watch Me",                             price: 219, category: "Non-Fiction" },
    { title: "The Predators",                        price: 149, category: "Non-Fiction" },
    { title: "The Reaper",                           price: 169, category: "Non-Fiction" },
    { title: "The Emperor",                          price: 199, category: "Non-Fiction" },
    { title: "The Finisher",                         price: 169, category: "Non-Fiction" },
    { title: "The Annihilator",                      price: 189, category: "Non-Fiction" },

    // ================= HINDI / LITERATURE =================
    { title: "Bhagavad Gita",                        price: 300, category: "Hindi / Literature", image: "images/hindi/gita.jpg" },
    { title: "Lifafa",                               price: 179, category: "Hindi / Literature" },
    { title: "Milange Jarur",                        price: 179, category: "Hindi / Literature" },
    { title: "Kasap",                                price: 169, category: "Hindi / Literature" },
    { title: "Musafir Cafe",                         price: 179, category: "Hindi / Literature" },
    { title: "Kohbar Ki Shrit",                      price: 169, category: "Hindi / Literature" },
    { title: "Diwar Me Khidki",                      price: 169, category: "Hindi / Literature" },
    { title: "October Junction",                     price: 159, category: "Hindi / Literature" },
    { title: "Gunda",                                price: 159, category: "Hindi / Literature" },
    { title: "Ibnebattuta",                          price: 159, category: "Hindi / Literature" },
    { title: "Letters To Milena",                    price: 189, category: "Hindi / Literature" },
    { title: "The Hidden Hindu (2 book set)",        price: 359, category: "Hindi / Literature" },
    { title: "The Hidden Hindu (3 book set)",        price: 399, category: "Hindi / Literature" }
  ];

  // ==============================
  // STATE
  // ==============================
  let visibleCount = 5;
  let activeCategory = null;

  // ==============================
  // HELPER: Fake original price
  // ==============================
  function fakePrice(p) {
    return p + Math.floor(Math.random() * 50) + 200;
  }

  // ==============================
  // RENDER BOOK GRID
  // ==============================
  function render(list) {
    bookGrid.innerHTML = "";

    const filteredBooks = activeCategory
      ? list.filter(b => b.category === activeCategory)
      : list;

    const booksToShow = activeCategory === null
      ? filteredBooks.slice(0, visibleCount)
      : filteredBooks;

    booksToShow.forEach(b => {
      bookGrid.innerHTML += `
        <div class="book" id="book-${b.title.replace(/\s+/g, '-')}">
          <img src="${b.image || 'https://placehold.co/300x400?text=Book'}">
          <h3>${b.title}</h3>
          <div class="price">
            <span class="old">₹${fakePrice(b.price)}</span>
            <span class="new">₹${b.price}</span>
          </div>
          <button onclick="addToCart('${b.title}', ${b.price})">Add to Cart</button>
        </div>
      `;
    });

    // Explore button visibility
    if (activeCategory) {
      exploreBtn.style.display = "none";
    } else if (visibleCount >= filteredBooks.length) {
      exploreBtn.style.display = "none";
    } else {
      exploreBtn.style.display = "inline-block";
    }
  }

  function showAll() {
    visibleCount = books.length;
    activeCategory = null;
    render(books);
  }

  // ==============================
  // SEARCH
  // ==============================
  function searchBooks() {
    const query = document.getElementById("search").value.trim().toLowerCase();
    const results = books.filter(b => b.title.toLowerCase().includes(query));

    activeCategory = null;
    visibleCount = books.length;
    render(results);

    if (results.length > 0) {
      setTimeout(() => {
        const id = "book-" + results[0].title.replace(/\s+/g, '-');
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
          el.classList.add("highlight");
          setTimeout(() => el.classList.remove("highlight"), 2000);
        }
      }, 200);
    }
  }

  function liveSearch() {
    const query = document.getElementById("search").value.trim().toLowerCase();
    const suggestionBox = document.getElementById("suggestions");

    if (query === "") {
      render(books);
      suggestionBox.innerHTML = "";
      return;
    }

    activeCategory = null;
    const results = books.filter(book => book.title.toLowerCase().includes(query));
    render(results);

    const topResults = results.slice(0, 5);
    suggestionBox.innerHTML = topResults.map(book => `
      <div class="suggestion-item" onclick="jumpToBook('${book.title}')">
        ${book.title}
      </div>
    `).join("");
  }

  function jumpToBook(title) {
    const id = "book-" + title.replace(/\s+/g, '-');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.classList.add("highlight");
      setTimeout(() => el.classList.remove("highlight"), 2000);
    }
    document.getElementById("suggestions").innerHTML = "";
  }

  // ==============================
  // CART
  // ==============================
  let cart = [];

  function addToCart(title, price) {
    const existing = cart.find(item => item.title === title);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ title, price, qty: 1 });
    }
    updateCartUI();
  }

  function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
  }

  function changeQty(index, delta) {
    cart[index].qty += delta;
    if (cart[index].qty <= 0) {
      cart.splice(index, 1);
    }
    updateCartUI();
  }

  function updateCartUI() {
    const cartItems = document.getElementById("cartItems");
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    document.getElementById("cartCount").innerText = totalQty;

    if (cart.length === 0) {
      cartItems.innerHTML = "<p style='opacity:0.6'>No books added yet</p>";
      localStorage.setItem("cart", JSON.stringify(cart));
      return;
    }

    const total = cart.reduce((sum, item) => sum + item.price * (item.qty || 1), 0);

    cartItems.innerHTML = cart.map((item, i) => `
      <div class="cart-row">
        <span>${i + 1}. ${item.title}</span>
        <span class="cart-controls">
          <button class="qty-btn" onclick="changeQty(${i}, -1)">−</button>
          <strong>${item.qty}</strong>
          <button class="qty-btn" onclick="changeQty(${i}, 1)">+</button>
          <span class="cart-price">₹${item.price * (item.qty || 1)}</span>
          <button class="remove-btn" onclick="removeFromCart(${i})">✕</button>
        </span>
      </div>
    `).join("") + `
      <hr style="margin:12px 0">
      <div class="cart-total">
        <span>Total</span>
        <span>₹${total}</span>
      </div>
    `;

    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function checkout() {
    if (cart.length === 0) {
      alert("Your cart is empty");
      return;
    }
    window.open("https://www.instagram.com/stolebooks.official/", "_blank");
    cart = [];
    localStorage.removeItem("cart");
    updateCartUI();
  }

  function orderOnInstagram() {
    window.open("https://www.instagram.com/stolebooks.official/", "_blank");
  }

  // Restore cart from localStorage
  const savedCart = localStorage.getItem("cart");
  if (savedCart) {
    cart = JSON.parse(savedCart).map(item => ({ ...item, qty: item.qty || 1 }));
    updateCartUI();
  }

  // ==============================
  // CATEGORY SHOWCASE
  // ==============================
  const categoryShowcase = [
    { name: "Fiction",           image: "images/fiction/Harry Potter.jpg",                   offset: 0  },
    { name: "Non-Fiction",       image: "images/non-fiction/Man's Search for Meaning.jpg",   offset: 30 },
    { name: "Self-Help",         image: "images/self-help/Atomic Habits.jpg",                offset: 0  },
    { name: "Business",          image: "images/business/psychology-of-money.jpg",           offset: 30 },
    { name: "Hindi / Literature",image: "images/hindi/gita.jpg",                             offset: 0  }
  ];

  function renderCategoryShowcase() {
    if (!categoryRow) return;
    categoryRow.innerHTML = "";

    categoryShowcase.forEach(cat => {
      const card = document.createElement("div");
      card.className = "category-card";
      card.style.setProperty("--offset", `${cat.offset}px`);
      card.innerHTML = `
        <img src="${cat.image}" alt="${cat.name}">
        <div class="shine"></div>
        <div class="category-title">${cat.name}</div>
      `;
      card.onclick = () => {
        activeCategory = cat.name;
        render(books);
        document.getElementById("books").scrollIntoView({ behavior: "smooth" });
      };
      categoryRow.appendChild(card);
    });
  }

  // ==============================
  // CAROUSEL RENDERER
  // ==============================
  function renderCarousel(rowId, category) {
    const row = document.getElementById(rowId);
    const filtered = books.filter(b => b.category === category).slice(0, 6);

    row.innerHTML = filtered.map(b => `
      <div class="book">
        <img src="${b.image || 'https://placehold.co/300x400?text=Book'}">
        <h3>${b.title}</h3>
        <div class="price">
          <span class="old">₹${fakePrice(b.price)}</span>
          <span class="new">₹${b.price}</span>
        </div>
        <button onclick="addToCart('${b.title}', ${b.price})">Add to Cart</button>
      </div>
    `).join("");
  }

  // ==============================
  // INIT
  // ==============================
  renderCategoryShowcase();
  renderCarousel("trendingRow", "Fiction");
  renderCarousel("selfhelpRow", "Self-Help");
  render(books);

  // Make functions globally accessible (called from inline HTML onclick)
  window.addToCart     = addToCart;
  window.removeFromCart = removeFromCart;
  window.changeQty     = changeQty;
  window.checkout      = checkout;
  window.searchBooks   = searchBooks;
  window.liveSearch    = liveSearch;
  window.jumpToBook    = jumpToBook;
  window.showAll       = showAll;
});

// ---- GLOBAL FUNCTIONS (called before DOMContentLoaded) ----
function toggleCart() {
  document.body.classList.toggle("cart-open");
}

function toggleMenu() {
  document.getElementById("side-menu").classList.toggle("active");
}

function scrollToBooks() {
  document.getElementById("books").scrollIntoView({ behavior: "smooth" });
}
