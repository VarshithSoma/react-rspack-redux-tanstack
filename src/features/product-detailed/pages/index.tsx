import { Box, Heading, Text, Button, Input } from "@sparrowengg/twigs-react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductRating from "../../../commons/components/product-rating";
import { getProductById } from "../../../commons/services";
import PopularItems from "../../../commons/components/popular-items";

export default function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (!id) return;
        getProductById(id)
            .then(setProduct)
            .finally(() => setLoading(false));
    }, [id]);
    console.log("ProductDetails mounted");

    if (loading) return <Text>Loading...</Text>;
    if (!product) return <Text>Product not found</Text>;
    return (
        <Box>
            <Box
                css={{
                    padding: "4rem 10rem",
                    display: "flex",
                    gap: "4rem",
                }}
            >
                <Box
                    css={{
                        width: 480,
                        height: 520,
                        borderRadius: 12,
                        backgroundColor: "$neutral100",
                        padding: "$6",
                    }}
                >
                    <Box
                        css={{
                            width: "100%",
                            height: "100%",
                            backgroundImage: `url(${product.image})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "contain",
                            backgroundPosition: "center",
                        }}
                    />
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

                    <Text
                        css={{
                            fontSize: "$lg",
                            fontWeight: 700,
                            marginTop: "$2",
                        }}
                    >
                        ${product.price}
                    </Text>

                    <Text
                        css={{
                            color: "$neutral400",
                            lineHeight: "1.6",
                            marginTop: "$2",
                        }}
                    >
                        {product.description}
                    </Text>
                    <Box css={{
                        width: "100%",
                        height: "1px",
                        backgroundColor: "$neutral200",
                    }}>
                    </Box>
                    <Box css={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: "$4"
                    }}>
                        <QuantityInput />
                        <Button
                            css={{
                                width: "100%",
                                height: "3.2rem",
                                borderRadius: "10rem",
                                backgroundColor: "$neutral900",
                                color: "$white900",
                                fontWeight: 500,
                            }}
                        >
                            Add to Cart
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Box css={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
                width: "100%",
                padding: "4rem 10rem",
            }}>
                <Text css={{
                    margin: "4rem",
                    fontSize: "$2xl",
                    fontWeight: 900,
                    lineHeight: "1.2",
                }}>You might also like</Text>
                <PopularItems></PopularItems>
            </Box>
        </Box>
    );
}
function QuantityInput() {
    const [quantity, setQuantity] = useState(1);
    return (
        <Box css={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "$neutral100",
            borderRadius: "10rem",
            padding: "$4",
            gap: "$4"
        }}>
            <button onClick={() => setQuantity(quantity - 1)}
                style={{
                    border: "none",
                    width: "2rem",
                    height: "2rem",
                    borderRadius: "50%",
                    backgroundColor: "$neutral100",
                    color: "$neutral900",
                    fontSize: "$md",
                    fontWeight: 500,
                    cursor: "pointer",
                }} disabled={quantity <= 1}>-</button>
            <input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} disabled={quantity <= 1} style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                marginLeft: "1rem",
                backgroundColor: "transparent",
                border: "none",
                width: "2rem",
                height: "2rem",
                borderRadius: "50%",
                color: "$neutral900",
                fontSize: "$md",
                fontWeight: 500,
                cursor: "pointer",
            }} />
            <button onClick={() => setQuantity(quantity + 1)} style={{
                border: "none",
                width: "2rem",
                height: "2rem",
                borderRadius: "50%",
                backgroundColor: "$neutral100",
                color: "$neutral900",
                fontSize: "$md",
                fontWeight: 500,
                cursor: "pointer",
            }} >+</button>
        </Box>
    )
}