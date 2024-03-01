import {
  Badge,
  Box,
  Flex,
  HStack,
  Pressable,
  ScrollView,
  Spacer,
  Text,
  View,
  SunIcon,
  Image,
} from "native-base";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Dashboard(props) {
  return (
    <GestureHandlerRootView>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Pressable
          style={{ width: "50%", margin: 0 }}
          onPress={() => props.setComponent("IPPF")}
        >
          {({ isHovered, isFocused, isPressed }) => {
            return (
              <Box
                maxW="96"
                borderWidth="1"
                 borderColor="#41B3EF"
                shadow="1"
                bg={
                  isPressed
                    ? "coolGray.200"
                    : isHovered
                    ? "coolGray.200"
                    : "coolGray.100"
                }
                p="5"
                rounded="8"
                style={{
                  transform: [
                    {
                      scale: isPressed ? 0.96 : 1,
                    },
                  ],
                  margin: 10,
                }}
              >
                <HStack
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text></Text>
                  <Image
                    source={require("../assets/IPPFjpg.jpg")}
                    alt="d"
                    height={9}
                    width={45}
                  />
                  <Text></Text>
                </HStack>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text></Text>
                  <Text>IPPF Report</Text>
                  <Text></Text>
                </View>
              </Box>
            );
          }}
        </Pressable>

        <Pressable
          style={{ width: "50%", margin: 0 }}
          onPress={() => props.setComponent("Income")}
        >
          {({ isHovered, isFocused, isPressed }) => {
            return (
              <Box
                maxW="96"
                borderWidth="1"
                 borderColor="#41B3EF"
                shadow="1"
                bg={
                  isPressed
                    ? "coolGray.200"
                    : isHovered
                    ? "coolGray.200"
                    : "coolGray.100"
                }
                p="5"
                rounded="8"
                style={{
                  transform: [
                    {
                      scale: isPressed ? 0.96 : 1,
                    },
                  ],
                  margin: 10,
                }}
              >
                <HStack
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text></Text>
                  <Image
                    source={require("../assets/donate-icon.png")}
                    alt="dd"
                    height={9}
                    width={50}
                  />
                  <Text></Text>
                </HStack>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text></Text>
                  <Text>Income Report</Text>
                  <Text></Text>
                </View>
              </Box>
            );
          }}
        </Pressable>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Pressable
          style={{ width: "50%", margin: 0 }}
          onPress={() => props.setComponent("SRH")}
        >
          {({ isHovered, isFocused, isPressed }) => {
            return (
              <Box
                maxW="96"
                borderWidth="1"
                 borderColor="#41B3EF"
                shadow="1"
                bg={
                  isPressed
                    ? "coolGray.200"
                    : isHovered
                    ? "coolGray.200"
                    : "coolGray.100"
                }
                p="5"
                rounded="8"
                style={{
                  transform: [
                    {
                      scale: isPressed ? 0.96 : 1,
                    },
                  ],
                  margin: 10,
                }}
              >
                <HStack
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text></Text>
                  <Image
                    source={require("../assets/fgae.jpg")}
                    alt="d"
                    height={10}
                    width={45}
                  />
                  <Text></Text>
                </HStack>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text></Text>
                  <Text>SRH Report</Text>
                  <Text></Text>
                </View>
              </Box>
            );
          }}
        </Pressable>

        <Pressable
          style={{ width: "50%", margin: 0 }}
          onPress={() => props.setComponent("HIV")}
        >
          {({ isHovered, isFocused, isPressed }) => {
            return (
              <Box
                maxW="96"
                borderWidth="1"
                 borderColor="#41B3EF"
                shadow="1"
                bg={
                  isPressed
                    ? "coolGray.200"
                    : isHovered
                    ? "coolGray.200"
                    : "coolGray.100"
                }
                p="5"
                rounded="8"
                style={{
                  transform: [
                    {
                      scale: isPressed ? 0.96 : 1,
                    },
                  ],
                  margin: 10,
                }}
              >
                <HStack
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text></Text>
                  <Image
                    source={require("../assets/STI.png")}
                    alt="d"
                    height={10}
                    width={45}
                  />
                  <Text></Text>
                </HStack>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text></Text>
                  <Text>HIV/AIDS & STI</Text>
                  <Text></Text>
                </View>
              </Box>
            );
          }}
        </Pressable>
      </View>
      <Box alignItems="center">
        <Pressable>
          {({ isHovered, isFocused, isPressed }) => {
            return (
              <Box
                maxW="96"
                width={1000}
                borderWidth="1"
                borderColor="#41B3EF"
                shadow="1"
                bg={
                  isPressed
                    ? "coolGray.200"
                    : isHovered
                    ? "coolGray.200"
                    : "coolGray.100"
                }
                p="5"
                rounded="8"
                style={{
                  transform: [
                    {
                      scale: isPressed ? 0.96 : 1,
                    },
                  ],
                  margin: 10,
                }}
              >
                <HStack alignItems="center">
                  <Badge
                    colorScheme="#41B3EF"
                    _text={{
                      color: "white",
                    }}
                    variant="solid"
                    rounded="4"
                  >
                    WISH2A
                  </Badge>
                  <Spacer />
                  <Text fontSize={10} color="coolGray.800">
                    Report
                  </Text>
                </HStack>
                <HStack
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    height: 30
                  }}
                >
                  <Text></Text>
                  <Image
                    source={require("../assets/wish2a.png")}
                    alt="dd"
                    height={10}
                    width={150}
                  />
                  <Text></Text>
                </HStack>
              </Box>
            );
          }}
        </Pressable>
      </Box>
      <Box alignItems="center">
        <Pressable>
          {({ isHovered, isFocused, isPressed }) => {
            return (
              <Box
                maxW="96"
                width={1000}
                borderWidth="1"
                 borderColor="#41B3EF"
                shadow="1"
                bg={
                  isPressed
                    ? "coolGray.200"
                    : isHovered
                    ? "coolGray.200"
                    : "coolGray.100"
                }
                p="5"
                rounded="8"
                style={{
                  transform: [
                    {
                      scale: isPressed ? 0.96 : 1,
                    },
                  ],
                  margin: 10,
                }}
              >
                                <HStack alignItems="center">
                  <Badge
                    colorScheme="#41B3EF"
                    _text={{
                      color: "white",
                    }}
                    variant="solid"
                    rounded="4"
                  >
                    Branchs
                  </Badge>
                  <Spacer />
                  <Text fontSize={10} color="coolGray.800">
                    Report
                  </Text>
                </HStack>
                <Text
                  color="coolGray.800"
                  mt="3"
                  fontWeight="medium"
                  fontSize="xl"
                >
                  Brach/Facility Information
                </Text>
                <Flex>
                  {isFocused ? (
                    <Text
                      mt="2"
                      fontSize={12}
                      fontWeight="medium"
                      textDecorationLine="underline"
                      color="darkBlue.600"
                      alignSelf="flex-start"
                    >
                      Open
                    </Text>
                  ) : (
                    <Text
                      mt="2"
                      fontSize={12}
                      fontWeight="medium"
                      color="darkBlue.600"
                    >
                      Open
                    </Text>
                  )}
                </Flex>
              </Box>
            );
          }}
        </Pressable>
      </Box>
    </ScrollView>
    </GestureHandlerRootView>
  );
}
