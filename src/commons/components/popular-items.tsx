import { Box } from "@sparrowengg/twigs-react";
import ProductItem from "./product-item";
import { getAllProducts } from "../services";

export default function PopularItems() {
    const { data } = getAllProducts();
    const trimData = data?.slice(0, 4);
    return (
        <Box css={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%"
        }}>{
                trimData?.map((item: any) => {
                    return <ProductItem id={item.id} image={item.image} title={item.title} rating={item.rating.rate} price={item.price} />
                })
            }
        </Box>
    )
}