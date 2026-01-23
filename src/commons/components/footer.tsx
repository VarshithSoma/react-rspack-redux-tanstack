import { Box, Text, Input, Button } from "@sparrowengg/twigs-react";

export default function Footer() {
    return (
        <Box
            css={{
                backgroundColor: "$neutral200",
                marginTop: "5rem",
                padding: "$10",
            }}
        >
            <Box
                css={{
                    backgroundColor: "$neutral900",
                    borderRadius: "1rem",
                    padding: "$10",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    position: "relative",
                    bottom: "4rem"
                }}
            >
                <Text
                    as="h2"
                    css={{
                        color: "$accent50",
                        fontSize: "$5",
                        fontWeight: 700,
                        lineHeight: "1.2",

                    }}
                >
                    STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
                </Text>

                <Box
                    css={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "$4",
                        width: "360px",
                    }}
                >
                    <Input placeholder="Enter your email address"
                        css={{
                            backgroundColor: "$neutral50",
                            color: "$neutral900",
                            padding: "$7",
                            borderRadius: "3rem"
                        }}
                    />
                    <Button variant="solid" color="primary"
                        css={{
                            backgroundColor: "$neutral50",
                            color: "$neutral900",
                            padding: "$7",
                            borderRadius: "3rem"
                        }}
                    >Subscribe to Newsletter</Button>
                </Box>
            </Box>

            <Box
                css={{
                    display: "grid",
                    gridTemplateColumns: "2fr repeat(4, 1fr)",
                    gap: "$8",
                    marginBottom: "$8",
                }}
            >
                <Box>
                    <Text as="h3" css={{ fontSize: "$7", fontWeight: "$bold" }}>
                        SHOP.CO
                    </Text>

                    <Text css={{ color: "$neutral600", marginTop: "$3" }}>
                        We have clothes that suits your style and which you’re proud to wear.
                        From women to men.
                    </Text>

                </Box>

                <FooterColumn
                    title="COMPANY"
                    items={["About", "Features", "Works", "Career"]}
                />

                <FooterColumn
                    title="HELP"
                    items={[
                        "Customer Support",
                        "Delivery Details",
                        "Terms & Conditions",
                        "Privacy Policy",
                    ]}
                />

                <FooterColumn
                    title="FAQ"
                    items={["Account", "Manage Deliveries", "Orders", "Payments"]}
                />

                <FooterColumn
                    title="RESOURCES"
                    items={[
                        "Free eBooks",
                        "Development Tutorial",
                        "How to - Blog",
                        "Youtube Playlist",
                    ]}
                />
            </Box>

            <Box
                css={{
                    borderTop: "1px solid $neutral300",
                    paddingTop: "$5",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Text css={{ color: "$neutral600" }}>
                    Shop.co © 2000–2023, All Rights Reserved
                </Text>

            </Box>
        </Box>
    );
}


function FooterColumn({ title, items }: any) {
    return (
        <Box>
            <Text
                css={{
                    fontSize: "$2",
                    letterSpacing: "0.2em",
                    fontWeight: "$bold",
                    marginBottom: "$4",
                }}
            >
                {title}
            </Text>

            {items.map((item: string) => (
                <Text
                    key={item}
                    css={{
                        color: "$neutral600",
                        marginBottom: "$3",
                        cursor: "pointer",
                    }}
                >
                    {item}
                </Text>
            ))}
        </Box>
    );
}

