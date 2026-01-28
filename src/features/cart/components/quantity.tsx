import { Box, Text } from "@sparrowengg/twigs-react";
import { useAppDispatch } from "../../../commons/store/hooks";
import { updateQuantity } from "../../../commons/store/slices/cart-slice";

export default function QuantityInput({ id, quantity }: { id: number, quantity: number }) {
    const dispatch = useAppDispatch()
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
                // @ts-ignore
                disabled={quantity <= 1}
                onClick={() => dispatch(updateQuantity({ id, quantity: -1 }))}
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
                onClick={() => dispatch(updateQuantity({ id, quantity: 1 }))}
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
