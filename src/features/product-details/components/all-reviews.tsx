import { Box } from "@sparrowengg/twigs-react";
import Review from "../../../commons/components/review";
import { HollowButton } from "../../../commons/components/popular-items";

export default function AllReviews() {
    return (<Box css={{
        display: "flex",
        flexDirection: "column",
        alinItems: "center",
        justifyContent: "center"
    }}>
        <Box css={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "2rem",
            padding: "4rem 10rem",
        }}>
            <Review></Review>
            <Review></Review>
            <Review></Review>
            <Review></Review>
            <Review></Review>
            <Review></Review>
        </Box>
        <HollowButton text="Load More Reviews"></HollowButton>
    </Box>)
}