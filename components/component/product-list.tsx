/**
 * v0 by Vercel.
 * @see https://v0.dev/t/27mdeULRw2r
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { JSX, SVGProps } from "react"

export interface Product {
  id: number;
  name: string;
  price: number;
  image_url: string;
  category_id: number;
}

export interface ProductListProps {
  products: Product[];
}

export function ProductList({ products }: ProductListProps) {
  return (
    <>
      <header className="bg-gray-300 text-white py-4 px-6 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link className="text-xl font-bold" href="#">
            Shopping-mall
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link className="text-white hover:underline" href="#">
            Cart
          </Link>
          <Link className="text-white hover:underline" href="#">
            Account
          </Link>
        </div>
      </header>
      <main className="py-8 px-4 md:px-8 bg-gray-100">
        <div className="flex items-center mb-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="flex items-center gap-2 text-gray-700" variant="link">
                Categories
                <ChevronDownIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuItem>
                <Link href="#" className="text-gray-700">T-shirts</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#" className="text-gray-700">Pants</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#" className="text-gray-700">Jackets</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#" className="text-gray-700">Bags</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#" className="text-gray-700">Neats</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="flex items-center gap-4">
            {/* <Select defaultValue="all">
              <SelectTrigger className="w-24 text-gray">
                <SelectValue placeholder="Price" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all" className="text-gray">All</SelectItem>
                <SelectItem value="0-50" className="text-gray">$0 - $50</SelectItem>
                <SelectItem value="50-100" className="text-gray">$50 - $100</SelectItem>
                <SelectItem value="100-" className="text-gray">$100+</SelectItem>
              </SelectContent>
            </Select> */}
            <Input
              className="w-64 px-4 py-2 rounded-md border border-gray text-gray focus:outline-none focus:ring-2 focus:border-transparent "
              placeholder="Search products..."
              type="text"
            />
            <Button className="bg-gray-300 hover:bg-gray-200">Search</Button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {
            products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
                <Link href="#">
                <img
                  alt={product.name}
                  className="w-full h-48 object-cover bg-gray-300"
                  height={300}
                  src={product.image_url}
                  style={{
                    aspectRatio: "300/400",
                    objectFit: "contain",
                  }}
                  width={400}
                />
                </Link>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">
                    <Link className="hover:text-gray-500" href="#">
                      {product.name}
                    </Link>
                  </h3>
                  <p className="text-gray-500 text-sm">{numberWithCommas(product.price)}원</p>
                </div>
              </div>
            ))
          }
        </div>
      </main>
    </>
  )
}

// 가격 형식
function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function ChevronDownIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}