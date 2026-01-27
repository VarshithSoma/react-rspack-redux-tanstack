import { Box, Text } from "@sparrowengg/twigs-react";
import ProductRating from "./product-rating";

export default function Review() {
    return (
        <Box css={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            width: "100%",
            padding: "$10",
            border: "1px solid $neutral200",
            borderRadius: "1rem",
            margin: "$4"
        }}>
            <Box css={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                gap: "$4"
            }}>
                <Box>
                    <ProductRating value={4.5} showText={false} ></ProductRating>
                </Box>
                <Box css={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-around",
                    width: "1.8rem",
                    gap: "$4"
                }}>
                    <div style={{ width: "10px", height: "5px", backgroundColor: "#A3AEBD", borderRadius: "50%" }}></div>
                    <div style={{ width: "10px", height: "5px", backgroundColor: "#A3AEBD", borderRadius: "50%" }}></div>
                    <div style={{ width: "10px", height: "5px", backgroundColor: "#A3AEBD", borderRadius: "50%" }}></div>
                </Box>
            </Box>
            <Text css={{
                fontSize: "$md",
                fontWeight: 800,
                marginTop: "$2",
            }}>Samantha D.</Text>
            <Box>
                <Text
                    css={{
                        fontSize: "$sm",
                        fontWeight: 400,
                        color: "$neutral400",
                        margin: "$2",
                        lineHeight: "1.6",
                    }}
                >
                    "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."
                </Text>
            </Box>
            <Text css={{
                fontSize: "$sm",
                fontWeight: 400,
                marginTop: "$3",
                color: "$neutral700",
            }}>Posted on August 20, 2024</Text>
        </Box>
    )
}