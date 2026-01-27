import { Box, Text, Button } from "@sparrowengg/twigs-react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import QuantityInput from "../../../commons/components/quantity";
import LineBreak from "../../product-details/components/line-break";

export default function CartPage() {
    console.log("component mounted");
    return (
        <Box css={{ display: "flex", flexDirection: "column", width: "100%", padding: "5rem" }}>
            <Text css={{ fontSize: "2rem", fontWeight: 700, marginBottom: "2rem" }}>YOUR CART</Text>
            <Box css={{ display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between" }}>
                <CartItems />
                <OrderSummary />
            </Box>
        </Box>);
}
function OrderSummary() {
    return <Box css={{
        display: "flex", flexDirection: "column", width: "35%", border: "1px solid $neutral200", padding: "2rem", borderRadius: "10px"
    }}>
        <Text css={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "2rem" }}>Order Summary</Text>
        <Box css={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Box css={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}><Text>Subtotal</Text><Text>$100</Text></Box>
            <Box css={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}><Text>Delivery Fee</Text><Text>$10</Text></Box>
            <LineBreak></LineBreak>
            <Box css={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}><Text>Total</Text><Text>$110</Text></Box>
            <Button css={{ width: "100%", height: "2.1rem", borderRadius: "10rem", backgroundColor: "$neutral900", color: "$white900", fontWeight: 500 }}  >
                <Text>Checkout</Text>
            </Button>
        </Box>
    </Box>
}
function CartItems() {
    return <Box css={{
        display: "flex", flexDirection: "column", width: "60%", gap: "3rem", border: "1px solid $neutral200", padding: "2rem", borderRadius: "10px", "& > div:last-child": {
            borderBottom: "none",
            paddingBottom: "0",
        },
    }}>
        <CartItem image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png" title="Product 1" price={100} />
        <CartItem image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png" title="Product 2" price={200} />
        <CartItem image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png" title="Product 3" price={300} />
    </Box>
}
function CartItem({ image, title, price }: { image: string, title: string, price: number }) {
    return <Box css={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "1rem",
        width: "100%",
        borderBottom: "1px solid $neutral200",
        paddingBottom: "2.5rem"
    }}>
        <Box css={{
            backgroundImage: `url(${image})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "120px",
            height: "120px",
            backgroundColor: "$neutral100",
            borderRadius: "1rem"
        }}>
        </Box>
        <Box css={{ display: "flex", flexDirection: "column", width: "50%", alignItems: "flex-start", gap: "0.5rem" }}>
            <Text>{title}</Text>
            <Text css={{ color: "$neutral500", fontSize: "$sm", lineHeight: "1.2" }}>Size: Small</Text>
            <Text css={{ color: "$neutral500", fontSize: "$sm", lineHeight: "1.2" }}>Color: White</Text>
            <Text css={{ color: "$black900", fontSize: "$sm", lineHeight: "1.2" }}>${price}</Text>
        </Box >
        <Box
            css={{
                display: "flex",
                flexDirection: "column",
                gap: "3rem",
                alignItems: "flex-end",
                justifyContent: "space-between",
                color: "$negative500",
                cursor: "pointer",
            }}
        >
            <RiDeleteBin5Fill size={20} />
            <QuantityInput />
        </Box>
    </Box >
}