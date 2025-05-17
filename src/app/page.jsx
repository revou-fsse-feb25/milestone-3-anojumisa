import ProductCard from "@/component/ProductCard";

export default async function Home({ searchParams }) {
	const searchTerm = searchParams?.search || "";
	const res = await fetch(
		`https://api.escuelajs.co/api/v1/products/?title=${searchTerm}`, {cache: "no-store"}
	);
	const products = await res.json();
    console.log("data", products)
	return (
		<main>
			<form method="GET">
				<input
					type="text"
					placeholder="Search Products..."
					name="search"
					defaultValue={searchTerm}
					className="w-full p-2 border border-gray-300 rounded-md"
				/>
				<button
					type="submit"
					className=" border rounded p-2 bg-amber-400 text-black"
				>
					Search
				</button>
			</form>

			<div>
				{products.length > 0 ? (
					products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))
				) : (
					<p>No product found.</p>
				)}
			</div>
		</main>
	);
}

// "use client";
// import FAQ from "@/component/FAQ";
// import ProductCard from "@/component/ProductCard";
// import { useState, useEffect } from "react";

// export default function Home() {
// 	const [products, setProducts] = useState([]);
//     const [searchTerm, setSearchTerm] = useState("")
//     const [filteredProducts, setFilteredProducts] = useState([])

// 	useEffect(() => {
// 		async function fetchProducts() {
// 			// fetching data
// 			const res = await fetch("https://fakestoreapi.com/products");
// 			// store the data
// 			const data = await res.json();
// 			setProducts(data);
//             setFilteredProducts(data);
// 			console.log("data", data);
// 		}
// 		fetchProducts();
// 	}, []);

//     useEffect(() => {
//         const filtered = products.filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()));
//         setFilteredProducts(filtered)
//     }, [searchTerm, products])

// 	return (
// 		<main>
// 			<h1 className="text-3xl font-bold mb-4">Product Catalog</h1>
// 			<input
// 				type="text"
// 				placeholder="Search Products"
//                 value = {searchTerm}
//                 onChange = {(e) => setSearchTerm(e.target.value)}
// 				className="mb-6 px-4 py-2 w-full border rounded-md border-gray-300"
// 			/>
// 			<div>
//                 {filteredProducts.length > 0 ? (
//                     filteredProducts.map(product => (
//                         <ProductCard key={product.id} product={product} />
//                     ))
//                 ) : (
//                     <p>No Products Found.</p>
//                 )}

// 				{/* {products.map((product) => (
// 					<ProductCard key={product.id} product={product} />
// 				))} */}
// 			</div>
// 			<FAQ />
// 		</main>
// 	);
// }
