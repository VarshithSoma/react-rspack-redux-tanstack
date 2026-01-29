import { Box, Text, IconButton, Input } from "@sparrowengg/twigs-react";
import { useNavigate } from "react-router-dom";
import { LuShoppingCart, LuUser } from "react-icons/lu";
import { useAppSelector } from "../store/hooks";
export default function Header() {
    const cartData = useAppSelector((state) => state.cart.items);
    const navigate = useNavigate();
    return (
        <Box css={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            padding: "$10",
            gap: "$10",
            borderBottom: "1px solid $neutral200"
        }}>

            <button onClick={() => navigate("/")} style={{ fontSize: "2rem", fontWeight: 900, cursor: "pointer", border: "none", backgroundColor: "transparent" }}>SHOP.CO</button>
            <Box css={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "2rem"
            }}>
                <button onClick={() => navigate("all-products")} style={{ fontSize: "1rem", border: "none", backgroundColor: "transparent", cursor: "pointer" }}>Shop</button>
                <button onClick={() => navigate("all-products")} style={{ fontSize: "1rem", border: "none", backgroundColor: "transparent", cursor: "pointer" }}>On Sale</button>
                <button onClick={() => navigate("all-products")} style={{ fontSize: "1rem", border: "none", backgroundColor: "transparent", cursor: "pointer" }}>New Arrivals</button>
                <button onClick={() => navigate("all-products")} style={{ fontSize: "1rem", border: "none", backgroundColor: "transparent", cursor: "pointer" }}>Brands</button>
            </Box>
            <Box css={{
                width: "30%"
            }}>
                <Input variant={'default'} css={{
                    fontSize: "$md",
                    backgroundColor: "$neutral100",
                    borderRadius: "10rem",
                    width: "100%",
                    border: "none",
                    padding: "$8"
                }} placeholder="Search for Products..." />
            </Box>
            <Box css={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "2rem"
            }}>
                <Box onClick={() => navigate("/cart")} css={{ position: "relative" }}>
                    <IconButton variant={"ghost"} color={"secondary"} icon={<LuShoppingCart />} />
                    <Text css={{ fontSize: "8px", fontWeight: 500, backgroundColor: "$secondary", color: "$white900", borderRadius: "50%", height: "1rem", width: "1rem", display: "flex", alignItems: "center", justifyContent: "center", position: "absolute", top: "-0.5rem", right: "-0.5rem" }}>{cartData.length}</Text>
                </Box>
                <IconButton variant={"ghost"} color={"secondary"} icon={<LuUser />} />
            </Box>
        </Box >
    )
}