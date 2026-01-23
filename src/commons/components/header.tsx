import { Box, Button, Input, Link } from "@sparrowengg/twigs-react";
import { UserCircleIcon, TableIcon } from '@sparrowengg/twigs-react-icons';
export default function Header() {
    return (
        <Box css={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            padding: "$10",
            gap: "$10"
        }}>
            <Box css={{
                fontSize: "$2xl",
                fontWeight: 900
            }}>
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
                gap: "10px"
            }}>
                <Link href="#" target="_blank">
                    <TableIcon />
                </Link>
                <Link href="#" target="_blank"><UserCircleIcon /></Link>
            </Box>
        </Box>
    )
}