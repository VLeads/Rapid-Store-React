import "./App.css";
import logo from "./logo.png";
import "./components/homepage/homepage.css";
import { Header, Footer } from "./components";
import poster from "./assets/img/Rapidstore-poster.png";

function App() {
  return (
    <div>
      <Header />
      <main className="homepage-main">
        <div className="hero">
          <img src="./assets/img/rapidstore-poster.png" alt="" />
          <img src={poster} alt="poster" />

          <a href="./components/productpage/productpage.html">
            <button className="btn btn-primary">Shop Now</button>
          </a>
        </div>

        {/* <!---------- why choose us ------> */}

        <section className="feature-main">
          <h2>Why choose us</h2>
          <div className="feature-container">
            <div className="feature box-shadow">
              <i className="fal fa-shipping-fast"></i>
              <p>Fastest Delivery</p>
            </div>
            <div className="feature box-shadow">
              <i className="fal fa-badge-percent"></i>
              <p>Best prices and offers</p>
            </div>
            <div className="feature box-shadow">
              <i className="fal fa-handshake"></i>
              <p>Quality assurance</p>
            </div>
            <div className="feature box-shadow">
              <i className="fa fa-rupee"></i>
              <p>Free Shipping Above Rs. 349</p>
            </div>
          </div>
        </section>

        {/* <!-- ----- featured categories ------ --> */}
        <section className="category">
          <h2 className="justify-center m-2 mb-4">Featured categories</h2>
          <div className="card-container">
            <div className="card-vertical category-card">
              <img src="./assets/img/laptop.png" alt="card" loading="lazy" />
              <div className="card-body">
                <h4 className="justify-center m-2">Laptops/PCs</h4>
              </div>
              <div className="card-footer justify-center">
                <button className="btn btn-primary">View Deals</button>
              </div>
            </div>
            <div className="card-vertical category-card">
              <img
                src="./assets/img/headphone.jpeg"
                alt="card"
                loading="lazy"
              />
              <div className="card-body">
                <h4 className="justify-center m-2">Headphones/Speakers</h4>
              </div>
              <div className="card-footer justify-center">
                <button className="btn btn-primary">View Deals</button>
              </div>
            </div>
            <div className="card-vertical category-card">
              <img src="./assets/img/game.jpg" alt="card" loading="lazy" />
              <div className="card-body">
                <h4 className="justify-center m-2">Gaming</h4>
              </div>
              <div className="card-footer justify-center">
                <button className="btn btn-primary">View Deals</button>
              </div>
            </div>
            <div className="card-vertical category-card">
              <img
                src="./assets/img/headphone.jpeg"
                alt="card"
                loading="lazy"
              />
              <div className="card-body">
                <h4 className="justify-center m-2">Headphones/Speakers</h4>
              </div>
              <div className="card-footer justify-center">
                <button className="btn btn-primary">View Deals</button>
              </div>
            </div>
            <div className="card-vertical category-card box-shadow">
              <img src="./assets/img/laptop.png" alt="card" loading="lazy" />
              <div className="card-body">
                <h4 className="justify-center m-2">Laptops/PCs</h4>
              </div>
              <div className="card-footer justify-center">
                <button className="btn btn-primary">View Deals</button>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- popular Purchase --> */}

        <section>
          <h2 className="justify-center mt-6 mb-4">Polular Purchase</h2>

          <div className="card-container">
            <div className="card-vertical popular-purchase hover-box-shadow">
              <div className="card-badge badge green">Trending</div>
              <img src="./assets/img/headphone.jpeg" alt="card" />
              <div className="card-body">
                <h4 className="card-header">ASUS ROG St...</h4>
                <p className="card-price">
                  <span className="price">₹96,990 </span>
                  <strike>₹1,36,990</strike>
                </p>
              </div>
              <div className="card-footer">
                <button className="btn btn-primary">Add to Cart</button>
                <button className="btn-card">
                  <i className="far fa-heart"></i>
                </button>
                <button className="btn-card">
                  <i className="fas fa-share-alt"></i>
                </button>
              </div>
            </div>

            <div className="card-vertical popular-purchase hover-box-shadow">
              <div className="card-badge badge red">Sale</div>
              <img src="./assets/img/headphone.jpeg" alt="card" />
              <div className="card-body">
                <h4 className="card-header">ASUS ROG St...</h4>
                <p className="card-price">
                  <span className="price">₹96,990 </span>
                  <strike>₹1,36,990</strike>
                </p>
              </div>
              <div className="card-footer">
                <button className="btn btn-primary">Add to Cart</button>
                <button className="btn-card">
                  <i className="far fa-heart"></i>
                </button>
                <button className="btn-card">
                  <i className="fas fa-share-alt"></i>
                </button>
              </div>
            </div>

            <div className="card-vertical popular-purchase hover-box-shadow">
              <div className="card-badge badge blue">Latest</div>
              <img src="./assets/img/laptop.png" alt="card" />
              <div className="card-body">
                <h4 className="card-header">ASUS ROG St...</h4>
                <p className="card-price">
                  <span className="price">₹96,990 </span>
                  <strike>₹1,36,990</strike>
                </p>
              </div>
              <div className="card-footer">
                <button className="btn btn-primary">Add to Cart</button>
                <button className="btn-card">
                  <i className="far fa-heart"></i>
                </button>
                <button className="btn-card">
                  <i className="fas fa-share-alt"></i>
                </button>
              </div>
            </div>

            <div className="card-vertical popular-purchase hover-box-shadow">
              <div className="card-badge badge green">Trending</div>
              <img src="./assets/img/headphone.jpeg" alt="card" />
              <div className="card-body">
                <h4 className="card-header">ASUS ROG St...</h4>
                <p className="card-price">
                  <span className="price">₹96,990 </span>
                  <strike>₹1,36,990</strike>
                </p>
              </div>
              <div className="card-footer">
                <button className="btn btn-primary">Add to Cart</button>
                <button className="btn-card">
                  <i className="far fa-heart"></i>
                </button>
                <button className="btn-card">
                  <i className="fas fa-share-alt"></i>
                </button>
              </div>
            </div>

            <div className="card-vertical popular-purchase hover-box-shadow">
              <div className="card-badge badge yellow">Best Seller</div>
              <img src="./assets/img/game.jpg" alt="card" />
              <div className="card-body">
                <h4 className="card-header">ASUS ROG St...</h4>
                <p className="card-price">
                  <span className="price">₹96,990 </span>
                  <strike>₹1,36,990</strike>
                </p>
              </div>
              <div className="card-footer">
                <button className="btn btn-primary">Add to Cart</button>
                <button className="btn-card">
                  <i className="far fa-heart"></i>
                </button>
                <button className="btn-card">
                  <i className="fas fa-share-alt"></i>
                </button>
              </div>
            </div>
            <div className="card-vertical popular-purchase hover-box-shadow">
              <div className="card-badge badge green">Trending</div>
              <img src="./assets/img/game.jpg" alt="card" />
              <div className="card-body">
                <h4 className="card-header">ASUS ROG St...</h4>
                <p className="card-price">
                  <span className="price">₹96,990 </span>
                  <strike>₹1,36,990</strike>
                </p>
              </div>
              <div className="card-footer">
                <button className="btn btn-primary">Add to Cart</button>
                <button className="btn-card">
                  <i className="far fa-heart"></i>
                </button>
                <button className="btn-card">
                  <i className="fas fa-share-alt"></i>
                </button>
              </div>
            </div>
            <div className="card-vertical popular-purchase hover-box-shadow">
              <div className="card-badge badge red">Sale</div>
              <img src="./assets/img/laptop.png" alt="card" />
              <div className="card-body">
                <h4 className="card-header">ASUS ROG St...</h4>
                <p className="card-price">
                  <span className="price">₹96,990 </span>
                  <strike>₹1,36,990</strike>
                </p>
              </div>
              <div className="card-footer">
                <button className="btn btn-primary">Add to Cart</button>
                <button className="btn-card">
                  <i className="far fa-heart"></i>
                </button>
                <button className="btn-card">
                  <i className="fas fa-share-alt"></i>
                </button>
              </div>
            </div>
            <div className="card-vertical popular-purchase hover-box-shadow">
              <div className="card-badge badge green">Trending</div>
              <img src="./assets/img/laptop.png" alt="card" />
              <div className="card-body">
                <h4 className="card-header">ASUS ROG St...</h4>
                <p className="card-price">
                  <span className="price">₹96,990 </span>
                  <strike>₹1,36,990</strike>
                </p>
              </div>
              <div className="card-footer">
                <button className="btn btn-primary">Add to Cart</button>
                <button className="btn-card">
                  <i className="far fa-heart"></i>
                </button>
                <button className="btn-card">
                  <i className="fas fa-share-alt"></i>
                </button>
              </div>
            </div>

            <div className="card-vertical popular-purchase hover-box-shadow">
              <div className="card-badge badge red">Sale</div>
              <img src="./assets/img/headphone.jpeg" alt="card" />
              <div className="card-body">
                <h4 className="card-header">ASUS ROG St...</h4>
                <p className="card-price">
                  <span className="price">₹96,990 </span>
                  <strike>₹1,36,990</strike>
                </p>
              </div>
              <div className="card-footer">
                <button className="btn btn-primary">Add to Cart</button>
                <button className="btn-card">
                  <i className="far fa-heart"></i>
                </button>
                <button className="btn-card">
                  <i className="fas fa-share-alt"></i>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* <!-- ---------- footer ---------- --> */}

      <Footer />
    </div>
  );
}

export default App;
