import { Box, Text } from "@sparrowengg/twigs-react";
export default function ProductRating({ value }: { value: number }) {

    return (
        <Box css={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: 100,
            height: 20,
        }}>
            {Array.from({ length: 5 }).map((_, index) => {
                return <Star key={index} filled={index < value} />
            })}

            <Text css={{
                fontSize: "$xs",
                fontWeight: 400,
                marginLeft: "$4"
            }}>{value}/5</Text>
        </Box>
    );
};
const Star = ({ filled = false }) => (
    <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill={filled ? "#facc15" : "#e5e7eb"} // yellow / gray
    >
        <path d="M12 17.27L18.18 21 16.54 13.97 
      22 9.24 14.81 8.63 
      12 2 9.19 8.63 
      2 9.24 7.46 13.97 
      5.82 21z"
        />
    </svg>
);
