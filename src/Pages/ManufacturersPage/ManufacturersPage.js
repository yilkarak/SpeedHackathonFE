import './ManufacturersPage.css';

export default function ManufacturersPage(){
    return(
        <div className="App">
        <header>
          <h1>Car Manufacturer Marketplace</h1>
        </header>
        <main>
          <section className="cars">
            <div className="car">
              <img src="https://via.placeholder.com/150" alt="Car" />
              <h2>Tire</h2>
              <p>Price: $1,000</p>
              <button>Buy Now</button>
            </div>
            <div className="car">
              <img src="https://via.placeholder.com/150" alt="Car" />
              <h2>Engine</h2>
              <p>Price: $5,000</p>
              <button>Buy Now</button>
            </div>
            <div className="car">
              <img src="https://via.placeholder.com/150" alt="Car" />
              <h2>Brake</h2>
              <p>Price: $2,000</p>
              <button>Buy Now</button>
            </div>
          </section>
        </main>
        <footer>
          <p>&copy; 2023 Best Car Dealership</p>
        </footer>
      </div>
    )
}