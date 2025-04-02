import Benefits from "./Benefits"
import CTA from "./CTA"
import Features from "./Features"
import Footer from "./Footer"
import Header from "./Header"

const Main = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Features />
      <Benefits />
      <CTA />
      <Footer />
    </div>
  )
}

export default Main;