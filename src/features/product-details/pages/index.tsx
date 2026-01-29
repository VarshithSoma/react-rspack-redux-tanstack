import { Box, Heading, Text, Button, toast, CircleLoader } from "@sparrowengg/twigs-react";
import { useParams } from "react-router-dom";
import ProductRating from "../../../commons/components/product-rating";
import { getProductById } from "../../../commons/services";
import { useQuery } from "@tanstack/react-query";
import QuantityInput from "../components/quantity";
import SelectColor from "../components/colors";
import LineBreak from "../components/line-break";
import AllReviews from "../components/all-reviews";
import PopularItemsWelcome from "../../../commons/components/popular-items";
import SizeSelection from "../components/size-button";
import { addToCart } from "../../../commons/store/slices/cart-slice";
import { useAppDispatch } from "../../../commons/store/hooks";
import { useState } from "react";

export default function ProductDetailsPage() {
    const { id } = useParams();
    const { data: product, isLoading, isError } = useQuery({
        queryKey: ["product", id],
        queryFn: () => getProductById(id ?? ""),
    });
    const [quantity, setQuantity] = useState(1);
    const dispatch = useAppDispatch();
    if (isLoading) return <Text css={{ display: "flex", height: "80vh", width: "100vw", alignItems: "center", justifyContent: "center" }}>
        <CircleLoader size="lg" color="primary" css={{ height: "5rem", width: "5rem" }} /></Text>;
    if (isError) return <Text>Error loading product</Text>;
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
                    <LineBreak />
                    <Box css={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: "$4"
                    }}>
                        <QuantityInput quantity={quantity} setQuantity={setQuantity} />
                        <Button
                            color={"secondary"}
                            css={{
                                width: "100%",
                                height: "2.1rem",
                                marginLeft: "3rem",
                                borderRadius: "10rem",
                                backgroundColor: "$neutral900",
                                color: "$white900",
                                fontWeight: 500,
                            }}
                            onClick={() => {
                                dispatch(addToCart({
                                    id: product.id,
                                    title: product.title,
                                    image: product.image,
                                    price: product.price,
                                    quantity: quantity,
                                }));
                                setQuantity(1);
                                toast({
                                    duration: 1000,
                                    variant: "default",
                                    title: `${product.title} added to cart`,
                                    description: "Product added to cart successfully.",
                                });
                            }}

                        >
                            Add to Cart
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Box css={{
                width: "90%"
            }}>
                <Box css={{ display: "flex", flexDirection: "row", justifyContent: "space-around", color: "$neutral500", borderBottom: "1px solid $neutral200" }}>
                    <Text css={{ width: "15rem", cursor: "pointer" }}>Product Details</Text>
                    <Text css={{ width: "15rem", color: "$black900", cursor: "pointer", borderBottom: "2px solid $black900", paddingBottom: "1rem", textAlign: "center" }}>Ratings & Reviews</Text>
                    <Text css={{ width: "15rem", cursor: "pointer" }}>FAQ</Text>
                </Box>
            </Box>
            <AllReviews />

            <Box css={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                padding: "4rem 10rem",
            }}>
                <PopularItemsWelcome title="You might also like" buttonText="view all"></PopularItemsWelcome>
            </Box>
        </Box >
    );
}
