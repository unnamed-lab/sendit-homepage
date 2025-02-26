import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { MainLayout } from "@/components/main-layout";
import { SellerCard } from "@/components/seller-card";
import { ProductCard } from "@/components/product-card";
import { CategoryCard } from "@/components/category-card";
import { DealCard } from "@/components/deal-card";
import { FeaturedCard } from "@/components/featured-card";
import { Bot, Box, Book, Palette, Megaphone, Layout } from "lucide-react";
import { AnalyticsCard } from "@/components/analytics-card";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { PlatformCurrency } from "@/components/platform-currency";
import Image from "next/image";
// import { ParticlesBackground } from "@/components/particles-background";

export default function MarketplacePage() {
  const revenueData = [
    { date: "Jan", value: 2400 },
    { date: "Feb", value: 3600 },
    { date: "Mar", value: 3200 },
    { date: "Apr", value: 4500 },
    { date: "May", value: 4200 },
    { date: "Jun", value: 5100 },
  ];

  const usersData = [
    { date: "Jan", value: 1200 },
    { date: "Feb", value: 1800 },
    { date: "Mar", value: 2200 },
    { date: "Apr", value: 2600 },
    { date: "May", value: 3100 },
    { date: "Jun", value: 3500 },
  ];

  const seller = [
    {
      name: "Seller 1",
      avatar: "",
      rating: 4.9,
      sales: 1234,
      category: "Trading Strategies",
    },
    {
      name: "Seller 2",
      avatar: "",
      rating: 4.8,
      sales: 982,
      category: "Design Templates",
    },
    {
      name: "Seller 3",
      avatar: "",
      rating: 4.7,
      sales: 876,
      category: "Development",
    },
    {
      name: "Seller 4",
      avatar: "",
      rating: 4.6,
      sales: 1500,
      category: "Smart Contracts",
    },
    {
      name: "Seller 5",
      avatar: "",
      rating: 4.9,
      sales: 2000,
      category: "NFT Art",
    },
    {
      name: "Seller 6",
      avatar: "",
      rating: 4.8,
      sales: 1300,
      category: "DeFi Protocols",
    },
    {
      name: "Seller 7",
      avatar: "",
      rating: 4.7,
      sales: 1100,
      category: "Blockchain Analytics",
    },
    {
      name: "Seller 8",
      avatar: "",
      rating: 4.9,
      sales: 1800,
      category: "DAO Governance",
    },
    {
      name: "Seller 9",
      avatar: "",
      rating: 4.6,
      sales: 900,
      category: "Crypto Security",
    },
    {
      name: "Seller 10",
      avatar: "",
      rating: 4.8,
      sales: 1600,
      category: "Web3 Marketing",
    },
  ];

  const products = [
    {
      title: "Logo Design Mastery",
      image: "",
      price: 99,
      rating: 4.8,
      sales: 359,
      author: "Design Pro",
      authorAvatar: "",
      trending: true,
      featured: true,
    },
    {
      title: "JavaScript for Beginners",
      image: "",
      price: 99,
      rating: 4.7,
      sales: 389,
      author: "Code Master",
      authorAvatar: "",
      trending: true,
    },
    {
      title: "Options Trading Simplified",
      image: "",
      price: 99,
      rating: 4.9,
      sales: 389,
      author: "Trading Expert",
      authorAvatar: "",
      featured: true,
    },
    {
      title: "AI for Everyone",
      image: "",
      price: 99,
      rating: 4.8,
      sales: 389,
      author: "AI Guru",
      authorAvatar: "",
    },
    {
      title: "Risk Management 101",
      image: "",
      price: 99,
      rating: 4.7,
      sales: 389,
      author: "Finance Pro",
      authorAvatar: "",
    },
    {
      title: "Web3 Development Basics",
      image: "",
      price: 99,
      rating: 4.9,
      sales: 420,
      author: "Blockchain Dev",
      authorAvatar: "",
      trending: true,
      featured: true,
    },
    {
      title: "AI for Everyone",
      image: "",
      price: 99,
      rating: 4.8,
      sales: 389,
      author: "AI Guru",
      authorAvatar: "",
    },
    {
      title: "Risk Management 101",
      image: "",
      price: 99,
      rating: 4.7,
      sales: 389,
      author: "Finance Pro",
      authorAvatar: "",
    },
    {
      title: "Web3 Development Basics",
      image: "",
      price: 99,
      rating: 4.9,
      sales: 420,
      author: "Blockchain Dev",
      authorAvatar: "",
      trending: true,
      featured: true,
    },
    {
      title: "AI for Everyone",
      image: "",
      price: 99,
      rating: 4.8,
      sales: 389,
      author: "AI Guru",
      authorAvatar: "",
    },
    {
      title: "Risk Management 101",
      image: "",
      price: 99,
      rating: 4.7,
      sales: 389,
      author: "Finance Pro",
      authorAvatar: "",
    },
    {
      title: "Web3 Development Basics",
      image: "",
      price: 99,
      rating: 4.9,
      sales: 420,
      author: "Blockchain Dev",
      authorAvatar: "",
      trending: true,
      featured: true,
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-black to-black border-b border-gray-800 overflow-hidden">
        {/* <ParticlesBackground /> */}
        <div className="container relative mx-auto px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <RainbowButton className="inline-block px-4 py-1 bg-primary/80 rounded-full mb-4 sm:mb-6 text-xs sm:text-sm text-grey-100">
              frictionless digital commerce
            </RainbowButton>
            <h1 className="text-3xl sm:text-4xlr lg:text-6xl font-bold text-white mb-4 sm:mb-6 relative z-10">
              Welcome To{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-50">
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
                className="border-gray-700 text-gray-800 w-full sm:w-auto"
              >
                Explore Products
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Top Sellers */}
      <section className="py-16 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-black">Top Sellers</h2>
            <Button
              variant="link"
              className="text-primary hover:text-green-600"
            >
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {seller
              .filter((_, i) => i <= 5)
              .map((el, i) => (
                <SellerCard key={i} {...el} />
              ))}
          </div>
        </div>
      </section>

      {/* Trending in Trading */}
      <section className="py-16 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-black">
              Trending in Trading
            </h2>
            <Button
              variant="link"
              className="text-primary hover:text-green-600"
            >
              See all
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter((_, i) => i < 8)
              .map((item, i) => (
                <ProductCard key={i} {...item} />
              ))}
          </div>
        </div>
      </section>

      {/* Lead Generation Banner */}
      <section className="py-16 ">
        <div className="container flex items-center justify-center mx-auto bg-center bg-cover bg-sendit-new bg-black rounded-xl mt-10 h-[200px] md:h-[250px] shadow-[inset_-90px_70px_90px_rgba(0,0,0,0.1)] overflow-hidden relative">
          <div className="flex flex-col bg-black/20 backdrop-blur-sm items-center justify-center px-4 lg:px-16 w-full h-full">
            <p className="text-white mb-2 flex gap-1 items-center">
              Earn in Crypto
            </p>
            <h2 className="text-3xl leading-tight md:text-5xl font-bold text-white mb-4">
              Start Your Business Today
            </h2>
            <Button
              size="lg"
              className="bg-black hover:bg-primary border-[0.5px] border-grey-400"
            >
              Start Selling
            </Button>
          </div>
          <div className="absolute top-0 left-0 inset-0 w-full h-full">
            <Image src="/btc-icon.svg" alt="" width={70} height={70} />
          </div>
        </div>
      </section>

      {/* Hot Design Templates */}
      <section className="py-16 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-black">
              Hot Design Templates
            </h2>
            <Button
              variant="link"
              className="text-primary hover:text-green-600"
            >
              See all
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter((_, i) => i > 5 && i < 10)
              .map((item, i) => (
                <ProductCard key={i} {...item} />
              ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold text-black">
                Explore Categories
              </h2>
            </div>
            <Button
              variant="link"
              className="text-primary hover:text-green-600"
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
            />
            <CategoryCard
              title="Marketing Tools"
              description="Boost your reach with powerful tools"
              icon={<Megaphone className="h-5 w-5" />}
              href="/category/marketing"
            />
            <CategoryCard
              title="Bots"
              description="Automated solutions for seamless workflows"
              icon={<Bot className="h-5 w-5" />}
              href="/category/bots"
            />
            <CategoryCard
              title="Game Assets"
              description="Creative assets for immersive games"
              icon={<Layout className="h-5 w-5" />}
              href="/category/games"
            />
            <CategoryCard
              title="Design Templates"
              description="Customizable templates for any project"
              icon={<Palette className="h-5 w-5" />}
              href="/category/design"
            />
            <CategoryCard
              title="How To Guides"
              description="Step-by-step guides for easy learning"
              icon={<Book className="h-5 w-5" />}
              href="/category/guides"
            />
          </div>
        </div>
      </section>

      {/* Best Deals */}
      <section className="py-16 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"></div>
          <DealCard />
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-black mb-2">
                New Arrivals
              </h2>
              <p className="text-gray-400">
                Get the inspiration you need with our curated collections
              </p>
            </div>
          </div>
          <div className="flex flex-1 gap-4">
            <div className="relative basis-5/12">
              <FeaturedCard
                title="UI/UX Fundamentals"
                image=""
                price={99}
                rating={4.5}
                reviews={389}
                href="#"
              />
            </div>
            <div className="relative basis-7/12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products
                  .filter((_, i) => i < 5)
                  .map((product, i) => (
                    <ProductCard {...product} key={i} />
                  ))}
                <div className="from-grey-800 to-gray-900 bg-gradient-to-tr border border-gray-800 rounded-lg p-6 flex flex-col items-center justify-center text-center">
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
      <section className="py-16 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-black">
              Essential How-To Guides
            </h2>
            <Button
              variant="link"
              className="text-primary hover:text-green-600"
            >
              See all
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter((_, i) => i > 5 && i <= 9)
              .map((product, i) => (
                <ProductCard {...product} key={i} />
              ))}
          </div>
        </div>
      </section>

      {/* Platform Analytics */}
      <section className="py-16 border-b border-gray-800">
        <div className="container flex items-center mx-auto px-4 gap-6">
          <div className="lg:basis-1/2">
            <PlatformCurrency />
          </div>
          <div className="grid grid-cols-2 gap-6 mb-12 lg:basis-1/2">
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
        </div>
      </section>

      {/* Affiliate Banner */}
      <section className="py-16 ">
        <div className="container flex items-center justify-center mx-auto bg-center bg-cover bg-sendit-banner bg-black rounded-xl mt-10 h-[200px] md:h-[400px] shadow-[inset_-90px_70px_90px_rgba(0,0,0,0.1)] overflow-hidden">
          <div className="flex flex-col bg-black/20 backdrop-blur-sm items-center justify-center px-4 lg:px-16 w-full h-full">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
              Join Our Affiliates Program
            </h2>
            <p className="text-black mb-8">Earn Commissions in Crypto</p>
            <Button
              size="lg"
              className="bg-black hover:bg-primary border-[0.5px] border-grey-400"
            >
              Become an Affiliate
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-black font-bold mb-4">SENDIT ZONE</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-900 hover:text-black">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-900 hover:text-black">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-900 hover:text-black">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-black font-bold mb-4">MAKE MONEY WITH US</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-900 hover:text-black">
                    Sell Products
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-900 hover:text-black">
                    Affiliate Program
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-black font-bold mb-4">CONNECT WITH US</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-900 hover:text-black">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-900 hover:text-black">
                    Discord
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-900 hover:text-black">
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-black font-bold mb-4">LEGAL</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-900 hover:text-black">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-900 hover:text-black">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-900">
            <p>© {new Date().getFullYear()} Sendit. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </MainLayout>
  );
}
