import React, { createContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { Product } from "../data/product";

export type CartItem = {
    product: Product;
    quantity: number;
};

export type CartContextType = {
    items: CartItem[];
    addToCart: (product: Product, quantity?: number) => void;
    removeFromCart: (productId: number) => void;
    updateQuantity: (productId: number, quantity: number) => void;
    clearCart: () => void;
    getTotalPrice: () => number;
};

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [items, setItems] = useState<CartItem[]>([]);
    useEffect(() => {
    console.log("Items mis à jour :", items);
}, [items]);

    const addToCart = (product: Product, quantity: number = 1) => {
       
        setItems((prevItems) => {

            const existingItem = prevItems.find((item) => item.product.id === product.id);

            if (existingItem) {
                console.log("test2");

                // Si le produit existe déjà, augmenter la quantité
                return prevItems.map((item) =>
                    item.product.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            } else {
                return [...prevItems, { product, quantity }];
            }
        });
    };


    const removeFromCart = (productId: number) => {
        setItems((prevItems) =>
            prevItems.filter((item) => item.product.id !== productId)
        );
    };

    const updateQuantity = (productId: number, quantity: number) => {
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            setItems((prevItems) =>
                prevItems.map((item) =>
                    item.product.id === productId
                        ? { ...item, quantity }
                        : item
                )
            );
        }
    };

    const clearCart = () => {
        setItems([]);
    };

    const getTotalPrice = () => {
        return items.reduce((total, item) => total + item.product.price * item.quantity, 0);
    };


    return (
        <CartContext.Provider
            value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, getTotalPrice }}
        >
            {children}
        </CartContext.Provider>
    );
};
