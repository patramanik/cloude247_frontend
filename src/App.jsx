
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AppRouter from "./routes/Routes";


function App() {
 
  return (
    <>
    <Header />  {/* Header component is imported and rendered here */}
    <AppRouter />
    <Footer />
    </>
  )
}

export default App
