import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { MainLayout } from "@/components/main-layout"
import { SellerCard } from "@/components/seller-card"
import { ProductCard } from "@/components/product-card"
import { CategoryCard } from "@/components/category-card"
import { DealCard } from "@/components/deal-card"
import { FeaturedCard } from "@/components/featured-card"
import { Bot, Box, Book, Palette, Megaphone, Layout } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { AnalyticsCard } from "@/components/analytics-card"
import { PlatformStats } from "@/components/platform-stats"

export default function MarketplacePage() {
  const revenueData = [
    { date: "Jan", value: 2400 },
    { date: "Feb", value: 3600 },
    { date: "Mar", value: 3200 },
    { date: "Apr", value: 4500 },
    { date: "May", value: 4200 },
    { date: "Jun", value: 5100 },
  ]

  const usersData = [
    { date: "Jan", value: 1200 },
    { date: "Feb", value: 1800 },
    { date: "Mar", value: 2200 },
    { date: "Apr", value: 2600 },
    { date: "May", value: 3100 },
    { date: "Jun", value: 3500 },
  ]

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-black to-black border-b border-gray-800 overflow-hidden">
        {/* <HeroBackgroundV2 /> */}
        <div className="container relative mx-auto px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-4 py-1 bg-purple-900/50 rounded-full mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm text-purple-200">
                frictionless digital commerce
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 relative z-10">
              Welcome To
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                The Web3 Marketplace
              </span>
            </h1>
            <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 relative z-10">
              {
                "Buy and sell digital products, trading strategies, and expertise in the world's leading Web3 marketplace"
              }
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <Button
                size="lg"
                className="bg-[#223D40] hover:bg-[#3b4f50] w-full sm:w-auto"
              >
                Start Selling
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-700 text-gray-300 w-full sm:w-auto"
              >
                Explore Products
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Analytics */}
      <section className="py-16 bg-black border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <AnalyticsCard
              title="Monthly Revenue"
              value="287,493"
              change={12.5}
              prefix="$"
              data={revenueData}
            />
            <AnalyticsCard
              title="Active Users"
              value="15,423"
              change={8.2}
              data={usersData}
            />
            <AnalyticsCard
              title="Products Listed"
              value="45,678"
              change={15.7}
              data={revenueData}
            />
            <AnalyticsCard
              title="Conversion Rate"
              value="4.83"
              change={-2.3}
              suffix="%"
              data={usersData}
            />
          </div>
          <PlatformStats />
        </div>
      </section>

      {/* Top Sellers */}
      <section className="py-16 bg-black border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-white">Top Sellers</h2>
            <Button
              variant="link"
              className="text-[#223D40] hover:text-[#3b4f50]"
            >
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SellerCard
              name="Alex Thompson"
              avatar="/placeholder.svg"
              rating={4.9}
              sales={1234}
              category="Trading Strategies"
            />
            <SellerCard
              name="Sarah Chen"
              avatar="/placeholder.svg"
              rating={4.8}
              sales={982}
              category="Design Templates"
            />
            <SellerCard
              name="Michael Rodriguez"
              avatar="/placeholder.svg"
              rating={4.7}
              sales={876}
              category="Development"
            />
          </div>
        </div>
      </section>

      {/* Trending in Trading */}
      <section className="py-16 bg-black border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-white">
              Trending in Trading
            </h2>
            <Button
              variant="link"
              className="text-[#223D40] hover:text-[#3b4f50]"
            >
              See all
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <ProductCard
                key={item}
                title="Advanced Crypto Trading Strategy"
                image={item === 1 ? "" : "/placeholder.svg"}
                price={1}
                rating={4.8}
                sales={1234}
                author="Trading Pro"
                authorAvatar="/placeholder.svg"
                trending={item === 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Hot Design Templates */}
      <section className="py-16 bg-black border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-white">
              Hot Design Templates
            </h2>
            <Button
              variant="link"
              className="text-[#223D40] hover:text-[#3b4f50]"
            >
              See all
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <ProductCard
                key={item}
                title="Premium UI Kit Collection"
                image="/placeholder.svg"
                price={2}
                rating={4.9}
                sales={567}
                author="Design Master"
                authorAvatar="/placeholder.svg"
                featured={item === 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold text-white">
                Explore Categories
              </h2>
            </div>
            <Button
              variant="link"
              className="text-[#223D40] hover:text-[#3b4f50]"
            >
              See All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CategoryCard
              title="SaaS Apps"
              description="Cloud solutions to power your business"
              icon={<Box className="h-5 w-5" />}
              href="/category/saas"
              backgroundImage="/placeholder.svg"
            />
            <CategoryCard
              title="Marketing Tools"
              description="Boost your reach with powerful tools"
              icon={<Megaphone className="h-5 w-5" />}
              href="/category/marketing"
              backgroundImage="/placeholder.svg"
            />
            <CategoryCard
              title="Bots"
              description="Automated solutions for seamless workflows"
              icon={<Bot className="h-5 w-5" />}
              href="/category/bots"
              backgroundImage="/placeholder.svg"
            />
            <CategoryCard
              title="Game Assets"
              description="Creative assets for immersive games"
              icon={<Layout className="h-5 w-5" />}
              href="/category/games"
              backgroundImage="/placeholder.svg"
            />
            <CategoryCard
              title="Design Templates"
              description="Customizable templates for any project"
              icon={<Palette className="h-5 w-5" />}
              href="/category/design"
              backgroundImage="/placeholder.svg"
            />
            <CategoryCard
              title="How To Guides"
              description="Step-by-step guides for easy learning"
              icon={<Book className="h-5 w-5" />}
              href="/category/guides"
              backgroundImage="/placeholder.svg"
            />
          </div>
        </div>
      </section>

      {/* Best Deals */}
      <section className="py-16 bg-black border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold text-white">Grab Best Deals</h2>
              <Badge variant="secondary" className="bg-[#223D40]">
                LISTED PRODUCTS
              </Badge>
            </div>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {Array.from({ length: 10 }).map((_, i) => (
              <DealCard
                key={i}
                title={`Product ${i + 1}`}
                image="/placeholder.svg"
                href="#"
              />
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">
                New Arrivals
              </h2>
              <p className="text-gray-400">
                Get the inspiration you need with our curated collections
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <FeaturedCard
                title="UI/UX Fundamentals"
                image=""
                price={99}
                rating={4.5}
                reviews={389}
                href="#"
              />
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProductCard
                  title="Logo Design Mastery"
                  image="/placeholder.svg"
                  price={99}
                  rating={4.8}
                  sales={359}
                  author="Design Pro"
                  authorAvatar="/placeholder.svg"
                />
                <ProductCard
                  title="JavaScript for Beginners"
                  image="/placeholder.svg"
                  price={99}
                  rating={4.7}
                  sales={389}
                  author="Code Master"
                  authorAvatar="/placeholder.svg"
                />
                <ProductCard
                  title="Options Trading Simplified"
                  image="/placeholder.svg"
                  price={99}
                  rating={4.9}
                  sales={389}
                  author="Trading Expert"
                  authorAvatar="/placeholder.svg"
                />
                <ProductCard
                  title="AI for Everyone"
                  image="/placeholder.svg"
                  price={99}
                  rating={4.8}
                  sales={389}
                  author="AI Guru"
                  authorAvatar="/placeholder.svg"
                />
                <ProductCard
                  title="Risk Management 101"
                  image="/placeholder.svg"
                  price={99}
                  rating={4.7}
                  sales={389}
                  author="Finance Pro"
                  authorAvatar="/placeholder.svg"
                />
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {"What's New?"}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Discover new products listed on sendit, a decentralized web3
                    store
                  </p>
                  <Button variant="secondary">{"See what's new"}</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Essential How-To Guides */}
      <section className="py-16 bg-black border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-white">
              Essential How-To Guides
            </h2>
            <Button
              variant="link"
              className="text-[#223D40] hover:text-[#3b4f50]"
            >
              See all
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <ProductCard
                key={item}
                title="Complete Trading Guide 2025"
                image="/placeholder.svg"
                price={0.5}
                rating={4.7}
                sales={789}
                author="Expert Guide"
                authorAvatar="/placeholder.svg"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Affiliate Banner */}
      <section className="py-16 bg-gradient-to-br from-[#223D40] via-[#3b4f50] to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Our Affiliates Program
          </h2>
          <p className="text-gray-300 mb-8">Earn Commissions in Crypto</p>
          <Button size="lg" className="bg-black hover:bg-gray-900">
            Become an Affiliate
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold mb-4">SENDIT ZONE</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">MAKE MONEY WITH US</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Sell Products
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Affiliate Program
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">CONNECT WITH US</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Discord
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">LEGAL</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Sendit. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </MainLayout>
  );
}

