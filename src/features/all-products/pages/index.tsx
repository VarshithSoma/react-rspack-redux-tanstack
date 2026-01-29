import { Box, Heading, Pagination, Text } from "@sparrowengg/twigs-react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ProductItem from "../../../commons/components/product-item";
import { getProducts } from "../../../commons/services";
import { Product } from "../../../commons/constants";
import { CircleLoader } from "@sparrowengg/twigs-react";
const ITEMS_PER_PAGE = 9;



export default function AllProductsPage() {
    const [activePage, setActivePage] = useState(1);

    const { data, isLoading, isError } = useQuery({
        queryKey: ["products", activePage],
        queryFn: () => getProducts(activePage, ITEMS_PER_PAGE),
        staleTime: 5 * 60 * 1000,
    });
    if (isLoading) return <Text css={{ display: "flex", height: "80vh", width: "100vw", alignItems: "center", justifyContent: "center" }}>
        <CircleLoader size="lg" color="primary" css={{ height: "5rem", width: "5rem" }} /></Text>;
    if (isError || !Array.isArray(data?.products)) {
        return <Text>Failed to load products</Text>;
    }
    return (
        <Box css={{ padding: "2rem" }}>
            <Heading size="h3" css={{ margin: "0rem 3rem" }}>All Products</Heading>
            <Box
                css={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                    gap: "2rem",
                    marginTop: "2rem",
                }}
            >
                {data.products.map((item: Product) => (
                    <ProductItem
                        key={item.id}
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        rating={item.rating.rate}
                        price={item.price}
                    />
                ))}
            </Box>
            <Box
                css={{
                    marginTop: "3rem",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Pagination
                    activePage={activePage}
                    itemsPerPage={ITEMS_PER_PAGE}
                    total={data.total}
                    onChange={(_, page) => setActivePage(page)}
                />
            </Box>
        </Box>
    );
}
