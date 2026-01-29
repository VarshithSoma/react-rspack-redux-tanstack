import { Box, Chip, Text } from "@sparrowengg/twigs-react";

export default function SizeSelection() {
    return <Box>
        <Text>Choose Size</Text>
        <Box css={{ display: "flex", flexDirection: "row", margin: "1rem 0rem" }}>
            <Chip color="secondary" size="md" css={{ height: "2.5rem", borderRadius: "10rem", padding: "$2" }} selectable>
                Small
            </Chip>
            <Chip color="secondary" size="md" css={{ height: "2.5rem", borderRadius: "10rem", padding: "$2" }} selectable>
                Medium
            </Chip>
            <Chip color="secondary" size="md" css={{ height: "2.5rem", borderRadius: "10rem", padding: "$2" }} selectable>
                Large
            </Chip>
            <Chip color="secondary" size="md" css={{ height: "2.5rem", borderRadius: "10rem", padding: "$2" }} selectable>
                X-Large
            </Chip>

        </Box>
    </Box >
}
