import { Box, Heading, Text } from "@sparrowengg/twigs-react";
import { useParams } from "react-router-dom";
import ProductRating from "../../../commons/components/product-rating";
import { getProductById } from "../../../commons/services";
import { useQuery } from "@tanstack/react-query";
import BlackButton from "../../../commons/components/black-button";
import QuantityInput from "../../../commons/components/quantity";
import SelectColor from "../components/colors";
import LineBreak from "../components/line-break";
import AllReviews from "../components/all-reviews";
import PopularItemsWelcome from "../../../commons/components/popular-items";
import SizeSelection from "../components/size-button";

export default function ProductDetailsPage() {
    const { id } = useParams();
    const { data: product, isLoading, isError } = useQuery({
        queryKey: ["product", id],
        queryFn: () => getProductById(id ?? ""),
    });
    if (isLoading) return <Text>Loading...</Text>;
    if (isError || !product) return <Text>Product not found</Text>;
    return (
        <Box css={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <Box
                css={{
                    width: "100%",
                    padding: "4rem 10rem",
                    display: "flex",
                    gap: "4rem",
                    justifyContent: "center",
                    flexDirection: "row",
                }}
            >
                <Box css={{
                    width: 480,
                    height: 520,
                    borderRadius: 12,
                    backgroundColor: "$neutral100",
                    padding: "$6",
                }}>
                    <Box css={{
                        width: "100%",
                        height: "100%",
                        backgroundImage: `url(${product.image})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                    }} />
                </Box>
                <Box
                    css={{
                        maxWidth: 520,
                        display: "flex",
                        flexDirection: "column",
                        gap: "$4",
                    }}
                >
                    <Heading size="h4" css={{ lineHeight: "1.3" }}>
                        {product.title}
                    </Heading>
                    <ProductRating value={product.rating.rate} />
                    <Text css={{
                        fontSize: "$lg",
                        fontWeight: 700,
                        marginTop: "$2",
                    }}>
                        ${product.price}
                    </Text>
                    <Text css={{
                        color: "$neutral400",
                        lineHeight: "1.6",
                        marginTop: "$2",
                    }}>
                        {product.description}
                    </Text>
                    <LineBreak />
                    <SelectColor />
                    <LineBreak />
                    <SizeSelection />
                    <Box css={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: "$4"
                    }}>
                        <QuantityInput />
                        <BlackButton text="Add to Cart" />
                    </Box>
                </Box>
            </Box>
            <AllReviews />

            <Box css={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
                width: "100%",
                padding: "4rem 10rem",
            }}>
                <PopularItemsWelcome title="You might also like" buttonText="view all"></PopularItemsWelcome>
            </Box>
        </Box >
    );
}
