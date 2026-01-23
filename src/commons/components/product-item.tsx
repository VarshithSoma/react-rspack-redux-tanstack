import { Box, Heading, Text } from "@sparrowengg/twigs-react";
import ProductRating from "./product-rating";

export default function ProductItem({ image, title, rating, price }: { image: string, title: string, rating: number, price: number }) {
    return <Box css={{
        width: 295,
        height: 405,
        borderRadius: 10,
        margin: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
    }}>
        <Box css={{
            width: 295,
            height: 298,
            backgroundImage: `url(${image})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: 10,
            backgroundColor: "$neutral100",
        }}></Box>
        <Box
            css={{
                width: 295,
                height: 94,
            }}
        >
            <Heading
                size="h6"
                css={{
                    lineHeight: 1,
                    marginBottom: "4px",
                    marginTop: "$4",
                }}
            >
                {title}
            </Heading>
            <ProductRating value={rating}></ProductRating>
            <Text css={{
                fontSize: "$md",
                fontWeight: 700,
            }}>${price}</Text>
        </Box>
    </Box>
}