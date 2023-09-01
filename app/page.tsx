import Hero  from "@/components/Hero"
import ProductsCards from "@/components/ProductsCards"

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center">
      <Hero />
      <ProductsCards />
    </main>
  )
}
