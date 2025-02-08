"use client"
import { ShoppingBag, Search, User, Menu } from "lucide-react"
import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { client } from "@/sanity/lib/client"
import Link from "next/link"
import Image from "next/image"

type Product = {
  _id: string
  name: string
  tags?: string[]
  imageUrl?: string
  quantity: number
}

export default function Navbar() {
  const [cartCount, setCartCount] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<Product[]>([])
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]")
    const totalItems = cart.reduce((acc: number, item: Product) => acc + item.quantity, 0)
    setCartCount(totalItems)
  }, [])

  useEffect(() => {
    if (searchQuery.trim().length > 2) {
      const fetchData = async () => {
        const results = await client.fetch(
          `*[_type == "product" && (name match $query || tags[] match $query)]{
            _id,
            name,
            tags,
            "imageUrl": image.asset->url
          }`,
          { query: `${searchQuery}*` },
        )
        setSearchResults(results)
      }
      fetchData()
    } else {
      setSearchResults([])
    }
  }, [searchQuery])

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <div className="sticky top-0 z-50 w-full bg-[#151514]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-[#ff9f0d]">
                Food<span className="text-white">tuck</span>
              </h1>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {["Home", "Menu", "Blog", "Pages", "About", "Shop", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={item === "Home" ? "/hero" : `/${item.toLowerCase()}`}
                  className="text-white hover:text-[#ff9f0d] px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <form onSubmit={handleSearchSubmit} className="relative mr-3">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="bg-[#151514] text-white border-2 border-[#ff9f0d] rounded-full py-1 px-3 leading-tight focus:outline-none focus:shadow-outline w-64"
                />
                <button type="submit" className="absolute right-0 top-0 mt-2 mr-3">
                  <Search className="h-5 w-5 text-[#ff9f0d]" />
                </button>
              </form>
              {searchResults.length > 0 && (
                <div className="absolute top-16 right-0 w-64 bg-white rounded-md shadow-lg overflow-hidden z-10">
                  {searchResults.map((result) => (
                    <Link href={`/products/${result._id}`} key={result._id}>
                      <div className="flex items-center p-2 hover:bg-gray-100">
                        <Image
                          src={result.imageUrl || "/placeholder.png"}
                          alt={result.name}
                          width={50}
                          height={50}
                          className="rounded-full"
                        />
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">{result.name}</p>
                          <p className="text-sm text-gray-500">{result.tags?.join(", ")}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
              <Link href="/cart" className="ml-3 relative">
                <ShoppingBag className="h-6 w-6 text-white" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-600 flex items-center justify-center text-white text-xs">
                    {cartCount}
                  </span>
                )}
              </Link>
              <Link href="/sign-up" className="ml-3">
                <User className="h-6 w-6 text-white" />
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#ff9f0d] focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {["Home", "Menu", "Blog", "Pages", "About", "Shop", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/hero" : `/${item.toLowerCase()}`}
                className="text-white hover:text-[#ff9f0d] block px-3 py-2 rounded-md text-base font-medium"
              >
                {item}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <User className="h-10 w-10 text-white" />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium leading-none text-white">User Name</div>
                <div className="text-sm font-medium leading-none text-gray-400">user@example.com</div>
              </div>
            </div>
            <div className="mt-3 px-2 space-y-1">
              <Link
                href="/profile"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#ff9f0d]"
              >
                Your Profile
              </Link>
              <Link
                href="/settings"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#ff9f0d]"
              >
                Settings
              </Link>
              <Link
                href="/sign-out"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#ff9f0d]"
              >
                Sign out
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

