import { Box } from "@sparrowengg/twigs-react";
import { useState } from "react";

export default function QuantityInput() {
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