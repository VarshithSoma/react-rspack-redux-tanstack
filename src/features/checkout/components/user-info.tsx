import { Button, Flex, FormInput, Text, toast } from '@sparrowengg/twigs-react';
import { useForm } from 'react-hook-form';
import { type CheckoutFormData, checkoutValidation } from '../util';
export default function UserInfo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<CheckoutFormData>();
  const onSubmit = async (data: CheckoutFormData) => {
    try {
      await checkoutValidation.validate(data, { abortEarly: false });
      toast({
        variant: 'success',
        title: 'Checkout successful',
        description: 'Checkout successful',
      });
    } catch (err: any) {
      err.inner.forEach((e: any) => {
        setError(e.path, {
          type: 'manual',
          message: e.message,
        });
      });
      toast({
        variant: 'error',
        title: 'Checkout failed',
        description: err.errors?.[0] || 'Invalid form data',
      });
    }
  };
  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <Flex
        justifyContent="space-around"
        css={{
          width: '50vw',
        }}
      >
        <Flex
          flexDirection="column"
          gap="1rem"
          css={{
            width: '50%',
          }}
        >
          <Text size="lg" weight="bold">
            Checkout
          </Text>
          <FormInput
            {...register('firstName')}
            placeholder=""
            label="First Name"
            requiredIndicator={true}
            error={errors.firstName?.message}
          />

          <FormInput
            {...register('streetAddress')}
            placeholder=""
            label="Street Address"
            requiredIndicator={true}
            error={errors.streetAddress?.message}
          />

          <FormInput
            {...register('apartment')}
            placeholder=""
            label="Apartment, floor, suite, etc. (optional)"
            error={errors.apartment?.message}
          />

          <FormInput
            {...register('phoneNumber')}
            placeholder=""
            label="Phone Number"
            requiredIndicator={true}
            error={errors.phoneNumber?.message}
          />

          <FormInput
            {...register('email')}
            placeholder=""
            label="Email Address"
            requiredIndicator={true}
            error={errors.email?.message}
          />
          <Button
            color={'secondary'}
            css={{
              width: '100%',
              marginTop: '2rem',
              height: '2.1rem',
              borderRadius: '10rem',
              backgroundColor: '$neutral900',
              color: '$white900',
              fontWeight: 500,
            }}
            type="submit"
          >
            Checkout
          </Button>
        </Flex>
      </Flex>
    </form>
  );
}
