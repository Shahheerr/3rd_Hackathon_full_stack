"use client"

import { useState } from "react"

export default function CartForm() {
    const [couponCode, setCouponCode] = useState("")

    const handleApplyCoupon = (e: React.FormEvent) => {
        e.preventDefault()
        // TODO: Implement coupon logic
        console.log("Applying coupon:", couponCode)
    }

    return (
        <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Apply Coupon</h3>
            <form onSubmit={handleApplyCoupon} className="flex">
                <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="flex-grow border-2 border-gray-300 p-2"
                    placeholder="Enter coupon code"
                    suppressHydrationWarning
                />
                <button
                    type="submit"
                    className="bg-[#FF9F0D] text-white font-bold px-4 py-2 ml-2 hover:bg-[#e08c0b] transition-colors"
                    suppressHydrationWarning
                >
                    Apply
                </button>
            </form>
        </div>
    )
}

