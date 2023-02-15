import logo from "./logo.svg";
import "./App.css";

function App() {
    const handleClick = ()=>{
        console.log('23423');
    }
  return (
    <div className="App">
      <header className="app-header">
        <div className="container">
            <div className="app-header-inner">
                <a href="#" className="brand-logo">
                    <img src="https://sundayapp.com/app/themes/sunday/static/images/logo-sunday-init.webp" className="img-fluid" alt="logo" />
                </a>
                <a href="#" className="auth">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentcolor" xmlns="http://www.w3.org/2000/svg" className="zfrcws0  _1os1jk0j _1os1jk0k _1os1jk0n" color="rgba(0, 0, 0, 0.3)"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z"></path></svg>

                    <span>Login</span>
                </a>
            </div>
        </div>
      </header>
      <main>
        <div className="app-banner">
            <div className="container">
                <div className="app-banner-inner">
                    <h2 className="title-lg"><span className="span-up">UP</span>TOWN</h2>
                </div>
            </div>
        </div>
        <div className="app-bill-pay">
            <div className="container">
                <div className="app-bill-pay-inner">
                <div className="total-bill-wrap">
                    <h3 className="title">Pay Your Bill</h3>
                    <h3 className="title">$120.00</h3>
                </div>
                <table className="table table-pay-bill">
                    <tbody>
                        <tr>
                            <td className="table-details">1</td>
                            <td className="table-details text-truncate">Sweet Pototos Fries & Soop Sweet Pototos Fries & Soop</td>
                            <td className="table-details text-secondary">$65.00</td>
                            <td className="table-details fw-bold">$16.00</td>
                        </tr>
                        <tr>
                            <td className="table-details">5</td>
                            <td className="table-details text-truncate">Sweet Pototos Fries & Soop</td>
                            <td className="table-details text-secondary">$12.00</td>
                            <td className="table-details fw-bold">$18.00</td>
                        </tr>
                        <tr>
                            <td className="table-details">3</td>
                            <td className="table-details text-truncate">Sweet Pototos Fries & Soop</td>
                            <td className="table-details text-secondary">$6.00</td>
                            <td className="table-details fw-bold">$76.00</td>
                        </tr>
                        <tr>
                            <td className="table-details">2</td>
                            <td className="table-details text-truncate">Sweet Pototos Fries & Soop</td>
                            <td className="table-details text-secondary">$90.00</td>
                            <td className="table-details fw-bold">$56.00</td>
                        </tr>
                        <tr>
                            <td className="table-details">1</td>
                            <td className="table-details text-truncate">Sweet Pototos Fries & Soop</td>
                            <td className="table-details text-secondary">$1.00</td>
                            <td className="table-details fw-bold">$13.00</td>
                        </tr>
                        <tr>
                            <td className="table-details">2</td>
                            <td className="table-details text-truncate">Sweet Pototos Fries & Soop</td>
                            <td className="table-details text-secondary">$12.00</td>
                            <td className="table-details fw-bold">$6.00</td>
                        </tr>
                        
                    </tbody>
                    </table>
                    <div className="bill-tax-wrap">
                        <h3 className="des">% Taxes</h3>
                        <h3 className="des">$20.00</h3>
                    </div>
                    <div className="btn-group">
                        <button className="btn btn-dark w-100" onClick={handleClick}>Split the bill</button>
                        <button className="btn btn-dark w-100">Pay full bill</button>
                    </div>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
}

export default App;
