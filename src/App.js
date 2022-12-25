import logo from './logo.svg';
import './App.css';

function App() {
  return (

    <div className="App">
           <header>
            <h1>Zoom Rentals</h1>
          </header>
          <main>
            <form>
              <label htmlFor="location">Location:</label>
              <input type="text" id="location" />
              <label htmlFor="start-date">Start Date:</label>
              <input type="date" id="start-date" />
              <label htmlFor="end-date">End Date:</label>
              <input type="date" id="end-date" />
              <button type="submit">Search</button>
            </form>
            <div className="car-listings">
              <div className="car-card">
                <div className="car-details">
                  <h2>Find a Car</h2>
                <label htmlFor="car">Search for Available Cars</label>
              <input type="text" id="car" />
                  
                 
                </div>
                
              </div>
              {/* Add additional car cards here */}
            </div>
          </main>
        </div>

    

  
      );
    }
    
    export default App;
    
