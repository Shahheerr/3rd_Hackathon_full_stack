"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { loadStripe } from "@stripe/stripe-js"
import CartForm from "../components/CartForm"

// Make sure to add your publishable key
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

type CartItem = {
  _id: string
  name: string
  price: number
  quantity: number
  imageUrl?: string
}

export default function Cart() {
  const [mounted, setMounted] = useState(false)
  const [cart, setCart] = useState<CartItem[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
      console.error("Stripe publishable key is not set")
    }
  }, [])

  useEffect(() => {
    setMounted(true)
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]")
    setCart(savedCart)
  }, [])

  if (!mounted) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#FF9F0D]"></div>
      </div>
    )
  }

  const handleProceedToCheckout = async () => {
    setIsLoading(true)
    try {
      const stripe = await stripePromise
      if (!stripe) {
        throw new Error("Stripe failed to load")
      }

      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: cart }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || "Network response was not ok")
      }

      const session = await response.json()

      const result = await stripe.redirectToCheckout({
        sessionId: session.sessionId,
      })

      if (result.error) {
        throw new Error(result.error.message)
      }
    } catch (error) {
      console.error("Error in checkout:", error)
      if (error instanceof Error) {
        alert(`Checkout error: ${error.message}`)
      } else {
        alert("There was an unexpected error processing your checkout. Please try again.")
      }
    } finally {
      setIsLoading(false)
    }
  }

  const updateCart = (updatedCart: CartItem[]) => {
    setCart(updatedCart)
    localStorage.setItem("cart", JSON.stringify(updatedCart))
  }

  const handleRemove = (id: string) => {
    const updatedCart = cart.filter((item) => item._id !== id)
    updateCart(updatedCart)
  }

  const handleQuantityChange = (id: string, amount: number) => {
    const updatedCart = cart.map((item) =>
      item._id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item,
    )
    updateCart(updatedCart)
  }

  const calculateTotal = () => cart.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <section className="flex flex-col justify-center items-center w-full bg-white">
      {/* Hero section */}
      <div className="bg-[url('/image/menu.png')] bg-cover bg-center w-full h-[250px] md:h-[350px] lg:h-[410px] flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold">Shopping Cart</h1>
          <ul className="text-white flex justify-center space-x-2 mt-4">
            <li>
              <Link href="/hero" className="hover:text-[#ff9f0d]">
                Home
              </Link>{" "}
              &gt;
            </li>
            <li>
              <span className="text-[#ff9f0d]">Shopping Cart</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Cart content */}
      <div className="w-full max-w-7xl px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Cart items */}
          <div className="w-full md:w-2/3">
            <div className="flex justify-between items-center border-b pb-4 mb-4">
              <p className="font-bold">Product</p>
              <p className="font-bold hidden md:block">Price</p>
              <p className="font-bold hidden md:block">Quantity</p>
              <p className="font-bold hidden md:block">Total</p>
              <p className="font-bold hidden md:block">Remove</p>
            </div>

            {cart.map((item) => (
              <div key={item._id} className="flex flex-col md:flex-row justify-between items-center mt-6 border-b pb-4">
                <div className="flex items-center w-full md:w-1/3">
                  {item.imageUrl && (
                    <Image
                      src={item.imageUrl || "/placeholder.svg"}
                      alt={item.name}
                      width={64}
                      height={64}
                      className="rounded"
                    />
                  )}
                  <p className="ml-4 font-bold text-lg">{item.name}</p>
                </div>
                <p className="md:w-1/6 text-center">${item.price.toFixed(2)}</p>
                <div className="flex items-center md:w-1/6 justify-center">
                  <button
                    className="px-3 py-1 font-bold text-lg border"
                    onClick={() => handleQuantityChange(item._id, -1)}
                    suppressHydrationWarning
                  >
                    -
                  </button>
                  <span className="px-4 font-bold">{item.quantity}</span>
                  <button
                    className="px-3 py-1 font-bold text-lg border"
                    onClick={() => handleQuantityChange(item._id, 1)}
                    suppressHydrationWarning
                  >
                    +
                  </button>
                </div>
                <p className="md:w-1/6 text-center">${(item.price * item.quantity).toFixed(2)}</p>
                <button
                  className="text-red-500 font-bold md:w-1/6 text-center"
                  onClick={() => handleRemove(item._id)}
                  suppressHydrationWarning
                >
                  X
                </button>
              </div>
            ))}
          </div>

          {/* Cart summary */}
          <div className="w-full md:w-1/3">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Cart Summary</h2>
              <div className="flex justify-between items-center mb-4">
                <p>Subtotal</p>
                <p className="font-bold">${calculateTotal().toFixed(2)}</p>
              </div>
              <div className="flex justify-between items-center mb-4">
                <p>Shipping</p>
                <p>$0.00</p>
              </div>
              <div className="flex justify-between items-center mb-4">
                <p className="font-bold">Total</p>
                <p className="font-bold text-xl">${calculateTotal().toFixed(2)}</p>
              </div>
              <button
                onClick={handleProceedToCheckout}
                className="w-full py-3 bg-[#FF9F0D] text-white text-lg font-bold rounded-lg hover:bg-[#e08c0b] transition-colors"
                disabled={isLoading}              >
                {isLoading ? "Processing..." : "Proceed to Checkout"}
              </button>
            </div>

            {/* Coupon form */}
            <CartForm />
          </div>
        </div>
      </div>
    </section>
  )
}

