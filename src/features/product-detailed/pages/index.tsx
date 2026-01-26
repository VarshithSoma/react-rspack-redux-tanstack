import { Box, Heading, Text, Button } from "@sparrowengg/twigs-react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../../../commons/services";
import ProductRating from "../../../commons/components/product-rating";

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

    if (loading) return <Text>Loading...</Text>;
    if (!product) return <Text>Product not found</Text>;

    return (
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

                <Button
                    css={{
                        marginTop: "$6",
                        width: "14rem",
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
    );
}
