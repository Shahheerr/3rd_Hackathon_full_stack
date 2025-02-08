import type { NextApiRequest, NextApiResponse } from "next"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" })
  }

  try {
    console.log("Received request body:", JSON.stringify(req.body, null, 2))

    const { items } = req.body

    if (!items || !Array.isArray(items) || items.length === 0) {
      console.error("Invalid request body:", req.body)
      return res.status(400).json({ message: "Invalid request body" })
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: items.map((item: any) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
            images: item.imageUrl ? [item.imageUrl] : undefined,
          },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/cart`,
    })

    console.log("Stripe session created:", session.id)
    return res.status(200).json({ sessionId: session.id })
  } catch (err: any) {
    console.error("Stripe checkout error:", err)
    return res.status(500).json({ message: err.message || "An error occurred during checkout" })
  }
}

