import {
  Box,
  Button,
  Center,
  HStack,
  Heading,
  Input,
  Link,
  Text,
  VStack,
  FormControl,
  AspectRatio,
  Image,
  Card,
  Spacer,
} from "native-base";

export default function Login(props) {
    
  return (
    <Center w="100%" style = {{width:'100%'}}>
      <Box safeArea p="2" py="8" w="100%" maxW="290" style = {{width:'100%'}}>
      <Text>{"\n"}</Text>
        <Text>{"\n"}</Text>
          <Image
             source={require('../assets/logo-112-scaled-300x77.jpg')}
            alt="image"
            resizeMode="contain" // Specify the resizeMode as per your requirement
          />
        <Heading
          mt="1"
          _dark={{
            color: "warmGray.200",
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs"
        >
          Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" />
            <Link
              _text={{
                fontSize: "xs",
                fontWeight: "500",
                color: "indigo.500",
              }}
              alignSelf="flex-end"
              mt="1"
            >
              Forget Password?
            </Link>
          </FormControl>
          <Button mt="2" colorScheme="indigo" onPress={() =>{
            props.setLogin(true)
          }}>
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
}
