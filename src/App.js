import "./App.css";
import logo from "./logo.png";
import "./components/homepage/homepage.css"

function App() {
  return (
    <div className="App">
      <div class="sub-nav">
        <div class="left">
          <a href="#">About Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Order Tracking</a>
        </div>
        <div class="right">
          <span>Need help? Call Us: 000 000 0000</span>
          <a href="#">Contact Us</a>
          <a href="https://github.com/vleads">
            <i class="fab fa-github" aria-hidden="true"></i>
          </a>
          <a href="https://twitter.com/vishalk01234">
            <i class="fab fa-twitter" aria-hidden="true"></i>
          </a>
          <a href="https://www.linkedin.com/in/vishalkumar28/">
            <i class="fab fa-linkedin" aria-hidden="true"></i>
          </a>
          <a href="mailto:leader.vishalkumar@gmail.com">
            <i class="fas fa-envelope" aria-hidden="true"></i>
          </a>
        </div>
      </div>

      <nav class="navbar">
        <a class="navbar-logo" href="#">
          <img src="./assets/img/rapidstore.png" alt="rapid store" />
        </a>
        <div class="search-box">
          <i class="fas fa-search"></i>
          <input type="text" placeholder="Search" />
        </div>
        <ul class="nav-links">
          <li>
            <a href="./components/Auth/login.html" class="btn btn-primary">
              Login
            </a>
          </li>
          <li>
            <a href="./components/wishlist/wishlist.html">
              <span class="badge-icon">
                <span class="badge red">20+</span>
                <i class="far fa-heart"></i>
              </span>
            </a>
          </li>
          <li>
            <a href="./components/cart/cart.html">
              <span class="badge-icon">
                <span class="badge blue">5</span>
                <i class="far fa-shopping-cart"></i>
              </span>
            </a>
          </li>
        </ul>
      </nav>

      <main class="homepage-main">
        <div class="hero">
          <img src="./assets/img/rapidstore-poster.png" alt="" />

          <a href="./components/productpage/productpage.html">
            <button class="btn btn-primary">Shop Now</button>
          </a>
        </div>

        {/* <!---------- why choose us ------> */}

        <section class="feature-main">
          <h2>Why choose us</h2>
          <div class="feature-container">
            <div class="feature box-shadow">
              <i class="fal fa-shipping-fast"></i>
              <p>Fastest Delivery</p>
            </div>
            <div class="feature box-shadow">
              <i class="fal fa-badge-percent"></i>
              <p>Best prices and offers</p>
            </div>
            <div class="feature box-shadow">
              <i class="fal fa-handshake"></i>
              <p>Quality assurance</p>
            </div>
            <div class="feature box-shadow">
              <i class="fa fa-rupee"></i>
              <p>Free Shipping Above Rs. 349</p>
            </div>
          </div>
        </section>

        {/* <!-- ----- featured categories ------ --> */}
        <section class="category">
          <h2 class="justify-center m-2 mb-4">Featured categories</h2>
          <div class="card-container">
            <div class="card-vertical category-card">
              <img src="./assets/img/laptop.png" alt="card" loading="lazy" />
              <div class="card-body">
                <h4 class="justify-center m-2">Laptops/PCs</h4>
              </div>
              <div class="card-footer justify-center">
                <button class="btn btn-primary">View Deals</button>
              </div>
            </div>
            <div class="card-vertical category-card">
              <img
                src="./assets/img/headphone.jpeg"
                alt="card"
                loading="lazy"
              />
              <div class="card-body">
                <h4 class="justify-center m-2">Headphones/Speakers</h4>
              </div>
              <div class="card-footer justify-center">
                <button class="btn btn-primary">View Deals</button>
              </div>
            </div>
            <div class="card-vertical category-card">
              <img src="./assets/img/game.jpg" alt="card" loading="lazy" />
              <div class="card-body">
                <h4 class="justify-center m-2">Gaming</h4>
              </div>
              <div class="card-footer justify-center">
                <button class="btn btn-primary">View Deals</button>
              </div>
            </div>
            <div class="card-vertical category-card">
              <img
                src="./assets/img/headphone.jpeg"
                alt="card"
                loading="lazy"
              />
              <div class="card-body">
                <h4 class="justify-center m-2">Headphones/Speakers</h4>
              </div>
              <div class="card-footer justify-center">
                <button class="btn btn-primary">View Deals</button>
              </div>
            </div>
            <div class="card-vertical category-card box-shadow">
              <img src="./assets/img/laptop.png" alt="card" loading="lazy" />
              <div class="card-body">
                <h4 class="justify-center m-2">Laptops/PCs</h4>
              </div>
              <div class="card-footer justify-center">
                <button class="btn btn-primary">View Deals</button>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- popular Purchase --> */}

        <section>
          <h2 class="justify-center mt-6 mb-4">Polular Purchase</h2>

          <div class="card-container">
            <div class="card-vertical popular-purchase hover-box-shadow">
              <div class="card-badge badge green">Trending</div>
              <img src="./assets/img/headphone.jpeg" alt="card" />
              <div class="card-body">
                <h4 class="card-header">ASUS ROG St...</h4>
                <p class="card-price">
                  <span class="price">₹96,990 </span>
                  <strike>₹1,36,990</strike>
                </p>
              </div>
              <div class="card-footer">
                <button class="btn btn-primary">Add to Cart</button>
                <button class="btn-card">
                  <i class="far fa-heart"></i>
                </button>
                <button class="btn-card">
                  <i class="fas fa-share-alt"></i>
                </button>
              </div>
            </div>

            <div class="card-vertical popular-purchase hover-box-shadow">
              <div class="card-badge badge red">Sale</div>
              <img src="./assets/img/headphone.jpeg" alt="card" />
              <div class="card-body">
                <h4 class="card-header">ASUS ROG St...</h4>
                <p class="card-price">
                  <span class="price">₹96,990 </span>
                  <strike>₹1,36,990</strike>
                </p>
              </div>
              <div class="card-footer">
                <button class="btn btn-primary">Add to Cart</button>
                <button class="btn-card">
                  <i class="far fa-heart"></i>
                </button>
                <button class="btn-card">
                  <i class="fas fa-share-alt"></i>
                </button>
              </div>
            </div>

            <div class="card-vertical popular-purchase hover-box-shadow">
              <div class="card-badge badge blue">Latest</div>
              <img src="./assets/img/laptop.png" alt="card" />
              <div class="card-body">
                <h4 class="card-header">ASUS ROG St...</h4>
                <p class="card-price">
                  <span class="price">₹96,990 </span>
                  <strike>₹1,36,990</strike>
                </p>
              </div>
              <div class="card-footer">
                <button class="btn btn-primary">Add to Cart</button>
                <button class="btn-card">
                  <i class="far fa-heart"></i>
                </button>
                <button class="btn-card">
                  <i class="fas fa-share-alt"></i>
                </button>
              </div>
            </div>

            <div class="card-vertical popular-purchase hover-box-shadow">
              <div class="card-badge badge green">Trending</div>
              <img src="./assets/img/headphone.jpeg" alt="card" />
              <div class="card-body">
                <h4 class="card-header">ASUS ROG St...</h4>
                <p class="card-price">
                  <span class="price">₹96,990 </span>
                  <strike>₹1,36,990</strike>
                </p>
              </div>
              <div class="card-footer">
                <button class="btn btn-primary">Add to Cart</button>
                <button class="btn-card">
                  <i class="far fa-heart"></i>
                </button>
                <button class="btn-card">
                  <i class="fas fa-share-alt"></i>
                </button>
              </div>
            </div>

            <div class="card-vertical popular-purchase hover-box-shadow">
              <div class="card-badge badge yellow">Best Seller</div>
              <img src="./assets/img/game.jpg" alt="card" />
              <div class="card-body">
                <h4 class="card-header">ASUS ROG St...</h4>
                <p class="card-price">
                  <span class="price">₹96,990 </span>
                  <strike>₹1,36,990</strike>
                </p>
              </div>
              <div class="card-footer">
                <button class="btn btn-primary">Add to Cart</button>
                <button class="btn-card">
                  <i class="far fa-heart"></i>
                </button>
                <button class="btn-card">
                  <i class="fas fa-share-alt"></i>
                </button>
              </div>
            </div>
            <div class="card-vertical popular-purchase hover-box-shadow">
              <div class="card-badge badge green">Trending</div>
              <img src="./assets/img/game.jpg" alt="card" />
              <div class="card-body">
                <h4 class="card-header">ASUS ROG St...</h4>
                <p class="card-price">
                  <span class="price">₹96,990 </span>
                  <strike>₹1,36,990</strike>
                </p>
              </div>
              <div class="card-footer">
                <button class="btn btn-primary">Add to Cart</button>
                <button class="btn-card">
                  <i class="far fa-heart"></i>
                </button>
                <button class="btn-card">
                  <i class="fas fa-share-alt"></i>
                </button>
              </div>
            </div>
            <div class="card-vertical popular-purchase hover-box-shadow">
              <div class="card-badge badge red">Sale</div>
              <img src="./assets/img/laptop.png" alt="card" />
              <div class="card-body">
                <h4 class="card-header">ASUS ROG St...</h4>
                <p class="card-price">
                  <span class="price">₹96,990 </span>
                  <strike>₹1,36,990</strike>
                </p>
              </div>
              <div class="card-footer">
                <button class="btn btn-primary">Add to Cart</button>
                <button class="btn-card">
                  <i class="far fa-heart"></i>
                </button>
                <button class="btn-card">
                  <i class="fas fa-share-alt"></i>
                </button>
              </div>
            </div>
            <div class="card-vertical popular-purchase hover-box-shadow">
              <div class="card-badge badge green">Trending</div>
              <img src="./assets/img/laptop.png" alt="card" />
              <div class="card-body">
                <h4 class="card-header">ASUS ROG St...</h4>
                <p class="card-price">
                  <span class="price">₹96,990 </span>
                  <strike>₹1,36,990</strike>
                </p>
              </div>
              <div class="card-footer">
                <button class="btn btn-primary">Add to Cart</button>
                <button class="btn-card">
                  <i class="far fa-heart"></i>
                </button>
                <button class="btn-card">
                  <i class="fas fa-share-alt"></i>
                </button>
              </div>
            </div>

            <div class="card-vertical popular-purchase hover-box-shadow">
              <div class="card-badge badge red">Sale</div>
              <img src="./assets/img/headphone.jpeg" alt="card" />
              <div class="card-body">
                <h4 class="card-header">ASUS ROG St...</h4>
                <p class="card-price">
                  <span class="price">₹96,990 </span>
                  <strike>₹1,36,990</strike>
                </p>
              </div>
              <div class="card-footer">
                <button class="btn btn-primary">Add to Cart</button>
                <button class="btn-card">
                  <i class="far fa-heart"></i>
                </button>
                <button class="btn-card">
                  <i class="fas fa-share-alt"></i>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* <!-- ---------- footer ---------- --> */}

      <footer class="footer">
        <div class="footer-container">
          <div class="footer__item">
            <h4>Account</h4>
            <ul class="footer__list">
              <li class="footer__list-item">
                <a href="#">My Account</a>
              </li>
              <li class="footer__list-item">
                <a href="#">Wishlist</a>
              </li>
              <li class="footer__list-item">
                <a href="#">Track Order</a>
              </li>
            </ul>
          </div>
          <div class="footer__item">
            <h4>Help</h4>
            <ul class="footer__list">
              <li class="footer__list-item">
                <a href="#">FAQ</a>
              </li>
              <li class="footer__list-item">
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div class="footer__item">
            <h4>Contact Us</h4>
            <ul class="footer__list">
              <li class="footer__list-item">
                <a href="https://www.linkedin.com/in/vishalkumar28/">
                  LinkedIn
                </a>
              </li>
              <li class="footer__list-item">
                <a href="https://github.com/vleads">Github</a>
              </li>
              <li class="footer__list-item">
                <a href="https://twitter.com/vishalk01234">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
        <p class="footer-rights">
          &copy; 2022 Rapid Store. All Rights Reserved
        </p>
      </footer>
    </div>
  );
}

export default App;
