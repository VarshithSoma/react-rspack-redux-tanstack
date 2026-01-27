import { Box, Text } from "@sparrowengg/twigs-react";

export default function SelectColor() {
    return (<Box>
        <Text css={{ color: "$neutral500", fontSize: "$sm", lineHeight: "1.2" }}>Select Colors</Text>
        <Box css={{
            display: "flex",
            flexDirection: "row",
            gap: "$4",
            margin: "0.5rem 0rem"
        }}>
            <Box css={{
                width: "1.5rem",
                height: "1.5rem",
                backgroundColor: "$negative500",
                borderRadius: "50%",
            }}></Box>
            <Box css={{
                width: "1.5rem",
                height: "1.5rem",
                backgroundColor: "$primary500",
                borderRadius: "50%",
            }}></Box>
            <Box css={{
                width: "1.5rem",
                height: "1.5rem",
                backgroundColor: "$secondary500",
                borderRadius: "50%",
            }}></Box>
        </Box>

    </Box>);
}
