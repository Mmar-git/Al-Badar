import { useEffect, useState, ChangeEvent } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import CartModal from "./CartModal";
import { useWixClient } from "@/hooks/useWixClient";
import Cookies from "js-cookie";
import { useCartStore } from "@/hooks/useCartStore";

// Define the expected product data structure
interface Product {
  _id: string;
  name: string | null | undefined;
  slug: string;
  media?: {
    mainMedia?: {
      image?: {
        url: string;
      };
    };
    items?: Array<{ image?: { url: string } }>;
  };
}
const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  const router = useRouter();
  const pathName = usePathname();

  const wixClient = useWixClient();
  const isLoggedIn = wixClient.auth.loggedIn();

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      setIsProfileOpen((prev) => !prev);
    }
  };

  const handleLogout = async () => {
    setIsLoading(true);
    Cookies.remove("refreshToken");
    const { logoutUrl } = await wixClient.auth.logout(window.location.href);
    setIsLoading(false);
    setIsProfileOpen(false);
    router.push(logoutUrl);
  };

  const { cart, counter, getCart } = useCartStore();

  useEffect(() => {
    getCart(wixClient);
  }, [wixClient, getCart]);

  // Fetch search results from Wix server, similar to how it was done in ProductList
  const fetchSearchResults = async (query: string) => {
    try {
      const productQuery = wixClient.products
        .queryProducts()
        .startsWith("name", query);
      const res = await productQuery.find();

      const filteredResults = res.items
        .filter((product) =>
          product.name?.toLowerCase().includes(query.toLowerCase())
        )
        .map((product) => ({
          _id: product._id || "",
          name: product.name,
          slug: product.slug || "",
        }));

      setSearchResults(filteredResults);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    fetchSearchResults(query); // Fetch results on every keystroke
  };
  const handleProductClick = () => {
    setIsSearchOpen(false); // Close the search bar when a product is clicked
  };

  // Close search when user scrolls
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSearchOpen(false); // Close search bar when user scrolls down
    }
  };

  useEffect(() => {
    // Listen for scroll events to close search bar
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className="flex items-center gap-4 xl:gap-6 relative"
      style={{ fontFamily: '"Alumni Sans Pinstripe", serif' }}
    >
      <Image
        src="/profile.png"
        alt="Profile"
        width={1200}
        height={1200}
        className="cursor-pointer w-6 h-6"
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div className="absolute p-4 rounded-md text-yellow ring-1 ring-yellow top-12 left-0 bg-transparent text-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
          <Link href="/profile">Profile</Link>
          <div className="mt-2 cursor-pointer" onClick={handleLogout}>
            {isLoading ? "Logging out" : "Logout"}
          </div>
        </div>
      )}
      <Image
        src="/search.png"
        alt="Search"
        width={1200}
        height={1200}
        className="cursor-pointer w-6 h-6"
        onClick={() => setIsSearchOpen((prev) => !prev)}
      />
      <div
        className="relative cursor-pointer"
        onClick={() => setIsCartOpen((prev) => !prev)}
      >
        <Image src="/bag.png" alt="Cart" width={38} height={38} />
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-yellow rounded-full text-white text-sm flex items-center justify-center">
          {counter}
        </div>
      </div>
      {isCartOpen && <CartModal />}
      {isSearchOpen && (
        <div
          className={`fixed flex flex-col top-14 left-0 right-0 w-full z-50 text-2xl bg-transparent p-4 px-8 shadow-lg rounded transition-all duration-300 ease-in-out ${
            isSearchOpen
              ? "transform translate-y-0 opacity-100"
              : "transform -translate-y-full opacity-0"
          }`}
          style={{
            maxHeight: isSearchOpen ? "200px" : "0",
            overflow: "hidden",
          }}
        >
          <div className="flex items-center">
            <Image
              src="/search.png"
              width={1200}
              height={1200}
              alt="Close"
              className="h-7 w-7 cursor-pointer ml-2"
              onClick={() => setIsSearchOpen(false)}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search for..."
              className="w-full mt-1.6 p-2 px-4 bg-transparent text-[#B68D3B] rounded focus:outline-none"
            />
            <Image
              src="/cross.png"
              width={1200}
              height={1200}
              alt="Close"
              className="h-7 w-7 cursor-pointer ml-2"
              onClick={() => setIsSearchOpen(false)}
            />
          </div>
          <div className="mt-4">
            {searchResults.length > 0 ? (
              <ul>
                {searchResults.map((product) => (
                  <li
                    key={product._id}
                    className="p-2 border-b border-gray-500"
                  >
                    <Link
                      href={`/${product.slug}`}
                      onClick={handleProductClick}
                    >
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              searchQuery && (
                <p className="text-gray-300 text-2xl">No results found</p>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavIcons;
