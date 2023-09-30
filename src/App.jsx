
import './App.css'
import AllCustomers from './components/AllCustomers'
import CustomerTable from './components/CustomerTable'
import Navbar from './components/Navbar'
import StatsOverview from './components/StatsOverview'
import Customer from './pages/Customer'




function App() {
  

  return (
    <>
  <div className="container">
     <Navbar />
     <Customer />

     {/* <StatsOverview />
     <AllCustomers />
     <CustomerTable /> */}
    </div>
    </>
  
  )
}

export default App

