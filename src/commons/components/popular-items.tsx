import { Box, Text, Button } from "@sparrowengg/twigs-react";
import ProductItem from "./product-item";
import { getAllProducts } from "../services";
import { useNavigate } from "react-router-dom";
import { Product } from "../constants";

export function PopularItems() {
    const { data } = getAllProducts();
    let random = Math.floor(Math.random() * data?.length);
    let trimData = data?.slice(random, random + 4);
    if (trimData?.length < 4) {
        random = 0;
        trimData = data?.slice(random, random + 4);
    }
    return (
        <Box css={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%",
            marginBottom: "3rem"
        }}>{
                trimData?.map((item: Product) => {
                    return <ProductItem id={item.id} image={item.image} title={item.title} rating={item.rating.rate} price={item.price} />
                })
            }
        </Box>
    )
}
export default function PopularItemsWelcome({ title, buttonText }: { title: string, buttonText?: string }) {

    const buttonTextPresent = buttonText ?? "View All";
    return <Box css={{
        marginTop: "$20",
    }}>
        <Box css={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            width: "100%",
            marginBottom: "4rem"
        }}>
            <Text css={{
                fontSize: "$2xl",
                fontWeight: 700,
                lineHeight: "1.2",
            }}>{title}</Text>
            <PopularItems />
            <HollowButton text={buttonTextPresent} />
        </Box>
    </Box>
}
export function HollowButton({ text }: { text: string }) {
    const navigate = useNavigate();
    return <Button
        color={"secondary"}
        onClick={() => navigate("/all-products")}
        css={{
            backgroundColor: "$white900",
            color: "$black900",
            borderRadius: "10rem",
            fontSize: "$sm",
            fontWeight: 500,
            lineHeight: "1.2",
            border: "1px solid $black400",
            width: "10rem",
            height: "2rem",
            cursor: "pointer",
            display: "block",
            margin: "0 auto",
            marginTop: "2rem",
            "&:hover": {
                color: "$accent50"
            }
        }}>{text}</Button>
}