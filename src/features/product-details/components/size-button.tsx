import { Box, Button, Text } from "@sparrowengg/twigs-react";

export default function SizeSelection() {
    return <Box>
        <Text>Choose Size</Text>
        <Box css={{ display: "flex", flexDirection: "row", gap: "$4", margin: "1rem 0rem" }}>
            <SizeButton text="Small" />
            <SizeButton text="Medium" />
            <SizeButton text="Large" />
            <SizeButton text="X-Large" />
        </Box>
    </Box>
}
function SizeButton({ text }: { text: string }) {
    return <Button color={"secondary"} css={{
        width: "5rem",
        height: "2.5rem",
        borderRadius: "10rem",
        backgroundColor: "$neutral100",
        color: "$neutral500",
        fontSize: "$xs",
    }}>{text}</Button>
}