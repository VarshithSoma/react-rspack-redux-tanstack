import { Button } from "@sparrowengg/twigs-react";

export default function BlackButton({ text }: { text: string }) {
    return (<Button
        css={{
            width: "100%",
            height: "2.1rem",
            marginLeft: "3rem",
            borderRadius: "10rem",
            backgroundColor: "$neutral900",
            color: "$white900",
            fontWeight: 500,
        }}
    >
        {text}
    </Button>);
}