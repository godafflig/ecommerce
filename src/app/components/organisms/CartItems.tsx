import { Input } from "../atoms/Input";

type CartItemsProps = {
    items: CartItem[];
    onUpdateQuantity: (productId: string, quantity: number) => void;
    onRemoveFromCart: (productId: string) => void;
}

type CartItem = {
    product: {
        id: string;
        name: string;
        price: number;
    };
    quantity: number;
};


export function CartItems({
    items,
    onUpdateQuantity,
    onRemoveFromCart,
}: CartItemsProps) {
    return (
        <table className="cart-table">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item) => (
                    <tr key={item.product.id}>
                        <td>{item.product.name}</td>
                        <td>${item.product.price.toFixed(2)}</td>
                        <td>
                            <Input
                                type="number"
                                min="1"
                                value={item.quantity}
                                onChange={(e) =>
                                    onUpdateQuantity(
                                        item.product.id,
                                        parseInt(e) || 1
                                    )
                                }
                            />
                        </td>
                        <td>${(item.product.price * item.quantity).toFixed(2)}</td>
                        <td>
                            <button onClick={() => onRemoveFromCart(item.product.id)}>
                                Remove
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
