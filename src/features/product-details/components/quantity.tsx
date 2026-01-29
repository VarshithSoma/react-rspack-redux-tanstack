import { Box, Text } from "@sparrowengg/twigs-react";
import { MinusIcon, PlusIcon } from "@sparrowengg/twigs-react-icons";
export default function QuantityInput({ quantity, setQuantity }: { quantity: number, setQuantity: (quantity: number) => void }) {

    const decrement = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const increment = () => {
        setQuantity(quantity + 1);
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
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: quantity <= 1 ? "not-allowed" : "pointer",
                }}
            >
                <MinusIcon style={{ width: "20px", height: "20px" }} />
            </Box>
            <Text
                css={{
                    width: "2rem",
                    textAlign: "center",
                    fontSize: "$md",
                    fontWeight: 500,
                    color: "$neutral900",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
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
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <PlusIcon style={{ width: "20px", height: "20px" }} />
            </Box>
        </Box>
    );
}
