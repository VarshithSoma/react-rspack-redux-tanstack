import { Box, Input, Link } from "@sparrowengg/twigs-react";
import { useNavigate } from "react-router-dom";
import { LuShoppingCart, LuUser } from "react-icons/lu";
export default function Header() {
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
            <Box css={{
                fontSize: "$2xl",
                fontWeight: 900,
                cursor: "pointer",
            }} onClick={() => navigate("/")}>
                SHOP.CO
            </Box>
            <Box css={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "$10"
            }}>
                <Link css={{
                    fontSize: "$sm",
                }}
                    href="#" target="_blank">Shop</Link>
                <Link css={{
                    fontSize: "$sm",
                }} href="#" target="_blank">On Sale</Link>
                <Link css={{
                    fontSize: "$sm",
                }} href="#" target="_blank">New Arrivals</Link>
                <Link css={{
                    fontSize: "$sm",
                }} href="#" target="_blank">Brands</Link>
            </Box>
            <Box css={{
                width: "30%"
            }}>
                <Input css={{
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
                <Box
                    css={{ cursor: "pointer" }}
                    onClick={() => navigate("/cart")}
                >
                    <LuShoppingCart />
                </Box>
                <Link href="#" target="_blank">
                    <LuUser />
                </Link>
            </Box>
        </Box>
    )
}