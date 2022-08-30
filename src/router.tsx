import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/home/index'
import { Checkout } from './pages/checkout/index'
import { Success } from './pages/success/index'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  )
}
