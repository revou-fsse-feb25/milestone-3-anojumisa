import Link from "next/link";

export default function ProductCard({ product }) {
	return (
		<div className="border p-4">
			<Link href={`/product/${product.id}`}>
				<img src={product.image} className="h-40 mx-auto" />
				<h3>{product.title}</h3>
				<p>{product.description}</p>
				<p>Price: ${product.price}</p>
			</Link>
		</div>
	);
}
