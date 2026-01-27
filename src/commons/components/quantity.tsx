import { Box, Text } from "@sparrowengg/twigs-react";
import { useState } from "react";

export default function QuantityInput() {
    const [quantity, setQuantity] = useState(1);

    const decrement = () => {
        if (quantity > 1) setQuantity(q => q - 1);
    };

    const increment = () => {
        setQuantity(q => q + 1);
    };

    return (
        <Box
            css={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "$3",
                backgroundColor: "$neutral100",
                borderRadius: "10rem",
            }}
        >
            <Box
                as="button"
                onClick={decrement}
                css={{
                    width: "2rem",
                    height: "2rem",
                    borderRadius: "50%",
                    border: "none",
                    backgroundColor: "$neutral100",
                    color: "$neutral900",
                    fontSize: "$md",
                    fontWeight: 500,
                    cursor: quantity <= 1 ? "not-allowed" : "pointer",
                    opacity: quantity <= 1 ? 0.4 : 1,
                }}
            >
                -
            </Box>
            <Text
                css={{
                    width: "2rem",
                    textAlign: "center",
                    fontSize: "$md",
                    fontWeight: 500,
                    color: "$neutral900",
                }}
            >
                {quantity}
            </Text>
            <Box
                as="button"
                onClick={increment}
                css={{
                    width: "2rem",
                    height: "2rem",
                    borderRadius: "50%",
                    border: "none",
                    backgroundColor: "$neutral100",
                    color: "$neutral900",
                    fontSize: "$md",
                    fontWeight: 500,
                    cursor: "pointer",
                }}
            >
                +
            </Box>
        </Box>
    );
}
