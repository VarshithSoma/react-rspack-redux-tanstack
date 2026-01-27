import { Box, Text, Button, Image } from "@sparrowengg/twigs-react";
import PopularItemsWelcome from "../../../commons/components/popular-items";
export default function Welcome() {
    return (
        <Box css={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <Box css={{
                paddingLeft: "10rem",
                paddingRight: "10rem",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "$neutral100",
                gap: "5rem",
            }}>
                <Box css={{
                    width: "50%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "stretch",
                    justifyContent: "space-around",
                    gap: "2rem",

                }}>
                    <Text css={{
                        fontSize: "5rem",
                        fontWeight: 700,
                        lineHeight: "0.9"

                    }}>
                        FIND CLOTHES THAT MATCHES YOUR STYLE
                    </Text>
                    <Text
                        css={{
                            color: "$neutral300",
                            fontSize: "$md",
                            fontWeight: 400,
                            lineHeight: "1.5",
                            letterSpacing: "0.01rem"
                        }}>
                        Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                    </Text>
                    <Button
                        css={{
                            backgroundColor: "$neutral900",
                            color: "$white900",
                            borderRadius: "10rem",
                            fontSize: "$sm",
                            fontWeight: 500,
                            lineHeight: "1.2",
                            width: "13rem",
                            height: "3rem",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "$2",
                            cursor: "pointer",
                        }}
                    >Shop Now</Button>
                    <Box css={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        width: "50%",
                        justifyContent: "space-around",
                        gap: "2rem",
                    }}>
                        <Stats count={"200"} label="International Brands" />
                        <Seperator />
                        <Stats count={"2,000"} label="High-Quality Products" />
                        <Seperator />
                        <Stats count={"30,000"} label="Happy Customers" />
                    </Box>
                </Box>
                <Box css={{ width: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Image src="/landing-banner.jpg" alt="Welcome" css={{ maxWidth: "100%", maxHeight: "100%" }} />
                </Box>
            </Box >
            <WelcomeBrands></WelcomeBrands>
            <PopularItemsWelcome title="New Arrivals" buttonText="View All"></PopularItemsWelcome>
            <Box css={{
                width: "80%",
                height: "1px",
                backgroundColor: "$neutral200",
            }}>
            </Box>
            <PopularItemsWelcome title="Top Selling" buttonText="View All"></PopularItemsWelcome>
        </Box>)
}
function Stats({ count, label }: { count: string, label: string }) {
    return (<Box>
        <Text css={{
            fontSize: "$1xl",
            fontWeight: 700,
            lineHeight: "1.2",
        }}>{count}+</Text>
        <Text css={{
            fontSize: "$xs",
            fontWeight: 400,
            lineHeight: "1.5",
            width: "9rem"
        }}>{label}</Text>
    </Box>)
}
function Seperator() {
    return (
        <Box
            css={{
                width: "1px",
                backgroundColor: "$neutral900",
                height: "5rem",
                alignSelf: "stretch",
                flexShrink: 0,
            }}
        />
    );
}
function WelcomeBrands() {
    return (<Box css={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%",
        backgroundColor: "$black900",
        overflow: "hidden",
    }}>
        <Image src="/versace.png" alt="Welcome Brands" ></Image>
        <Image src="/gucci.png" alt="Welcome Brands" ></Image>
        <Image src="/prada.png" alt="Welcome Brands" ></Image>
        <Image src="/zara.png" alt="Welcome Brands" ></Image>
        <Image src="/ck.png" alt="Welcome Brands" ></Image>
    </Box>)
}
