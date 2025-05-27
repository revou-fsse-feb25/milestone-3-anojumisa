"use client";
import { createContext, useState, useContext } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
	const [wishlist, setWishlist] = useState([]);

	const addToWishlist = (product) => {
		setWishlist((prev) => [...prev, product]);
	};

	return (
		<WishlistContext.Provider value={{ wishlist, addToWishlist }}>
			{children}
		</WishlistContext.Provider>
	);
};

export const useWishlist = () => useContext(WishlistContext);
