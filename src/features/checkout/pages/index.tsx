import { Box, FormInput, Text, Image, Button, toast } from "@sparrowengg/twigs-react";
import { useAppSelector } from "../../../commons/store/hooks";
import LineBreak from "../../product-details/components/line-break";
import { useForm } from "react-hook-form";
import { CheckoutFormData, checkoutSchema, } from "../schemas";

export default function CheckOutPage() {
    const cartData = useAppSelector((state) => state.cart.items);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CheckoutFormData>();
    const onSubmit = async (data: CheckoutFormData) => {
        try {
            await checkoutSchema.validate(data, { abortEarly: false });

            toast({
                variant: "success",
                title: "Checkout successful",
                description: "Checkout successful",
            });
        } catch (err: any) {
            toast({
                variant: "error",
                title: "Checkout failed",
                description: err.errors?.[0] || "Invalid form data",
            });
        }
    };

    return <Box css={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "2rem",
        padding: "5rem 10rem"
    }}>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <Box css={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                <Box css={{
                    width: "50%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem"
                }}>
                    <Text css={{ fontSize: "2rem", fontWeight: 700, lineHeight: "1.2" }}>Checkout</Text>
                    <FormInput
                        {...register("firstName")}
                        placeholder=""
                        label="First Name"
                        requiredIndicator={true}
                        error={errors.firstName?.message}
                    />

                    <FormInput
                        {...register("streetAddress")}
                        placeholder=""
                        label="Street Address"
                        requiredIndicator={true}
                        error={errors.streetAddress?.message}
                    />

                    <FormInput
                        {...register("apartment")}
                        placeholder=""
                        label="Apartment, floor, suite, etc. (optional)"
                        error={errors.apartment?.message}
                    />

                    <FormInput
                        {...register("phoneNumber")}
                        placeholder=""
                        label="Phone Number"
                        requiredIndicator={true}
                        error={errors.phoneNumber?.message}
                    />

                    <FormInput
                        {...register("email")}
                        placeholder=""
                        label="Email Address"
                        requiredIndicator={true}
                        error={errors.email?.message}
                    />
                </Box>
                <Box css={{ width: "20%", height: "100%", display: "flex", flexDirection: "column", gap: "2rem", justifyContent: "space-between" }}>
                    {cartData.map((item) => (<CartItem key={item.id} item={item} />))}
                    <LineBreak />
                    <Box css={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <Text>Total: </Text>
                        <Text>${cartData.reduce((acc, item) => acc + (item.price * item.quantity), 0)}</Text>
                    </Box>
                    <LineBreak />
                    <Button color={"secondary"} css={{ width: "100%", height: "2.1rem", borderRadius: "10rem", backgroundColor: "$neutral900", color: "$white900", fontWeight: 500 }} type="submit" >
                        <Text>Checkout</Text>
                    </Button>

                </Box>
            </Box>
        </form >
    </Box >
}
function CartItem({ item }: { item: any }) {
    return <Box css={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    }}>
        <Image src={item.image} alt={item.title.slice(0, 10)} css={{ width: "60px", height: "60px", objectFit: "contain", backgroundColor: "$neutral100", borderRadius: "10px" }} />
        <Text css={{ width: "50%", alignSelf: "left" }}>{item.title.slice(0, 10)}</Text>
        <Text>${item.price * item.quantity}</Text>
    </Box>
}
