import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const products = [
  {
    name: "HP Pavilion 15",
    category: "Laptop",
    price: "₹54,999",
    badge: "Best Seller",
  },
  {
    name: "Dell Inspiron Desktop",
    category: "Desktop",
    price: "₹42,999",
    badge: "Popular",
  },
  {
    name: "ASUS ROG Gaming PC",
    category: "Gaming",
    price: "₹89,999",
    badge: "Gaming",
  },
  {
    name: "Canon PIXMA G3020",
    category: "Printer",
    price: "₹12,499",
    badge: "New",
  },
  {
    name: "CP Plus CCTV Kit",
    category: "Security",
    price: "₹18,999",
    badge: "Offer",
  },
  {
    name: "TP-Link Archer C6",
    category: "Networking",
    price: "₹2,999",
    badge: "Top Rated",
  },
];

export default function ProductGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-cyan-600 font-semibold uppercase tracking-[0.3em]">
            Featured Products
          </p>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Best Selling Products
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600">
            Explore our latest collection of laptops, desktops, gaming PCs,
            printers, CCTV systems and networking accessories from trusted
            global brands.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {products.map((product) => (

            <Card
              key={product.name}
              className="group overflow-hidden rounded-3xl border-0 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
            >

              <div className="h-56 bg-gradient-to-br from-cyan-100 via-blue-100 to-slate-200 flex items-center justify-center">

                <span className="text-7xl">
                  💻
                </span>

              </div>

              <CardContent className="p-7">

                <Badge className="mb-4 bg-cyan-600 hover:bg-cyan-700">
                  {product.badge}
                </Badge>

                <p className="text-sm uppercase tracking-widest text-slate-500">
                  {product.category}
                </p>

                <h3 className="mt-2 text-2xl font-bold text-slate-900">
                  {product.name}
                </h3>

                <p className="mt-5 text-3xl font-bold text-cyan-600">
                  {product.price}
                </p>

                <Button className="mt-8 w-full rounded-xl bg-cyan-600 hover:bg-cyan-700">
                  View Details
                </Button>

              </CardContent>

            </Card>

          ))}

        </div>

      </div>
    </section>
  );
}