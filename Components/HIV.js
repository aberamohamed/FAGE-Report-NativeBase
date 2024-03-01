import { useEffect, useState } from "react";
import {
  Box,
  Heading,
  VStack,
  Text,
  HStack,
  FlatList,
  Avatar,
  Spacer,
  Card,
  Button,
} from "native-base";
import { BackHandler, SafeAreaView } from "react-native";

const Example = () => {
  const [isButtonActive, setIsButtonActive] = useState(false);
  const data = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      fullName: "HIV",
      timeStamp: "500",
      recentText: "Head Office",
      avatarUrl: require("../assets/fgae.jpg"),
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      fullName: "HIV",
      timeStamp: "500",
      recentText: "Harar Branch",
      avatarUrl: require("../assets/fgae.jpg"),
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      fullName: "HIV",
      timeStamp: "500",
      recentText: "Hawassa Branch",
      avatarUrl: require("../assets/fgae.jpg"),
    },
    {
      id: "68694a0f-3da1-431f-bd56-142371e29d72",
      fullName: "HIV",
      timeStamp: "500",
      recentText: "Dessie branch",
      avatarUrl: require("../assets/fgae.jpg"),
    },
    {
      id: "28694a0f-3da1-471f-bd96-142456e29d72",
      fullName: "HIV",
      timeStamp: "500",
      recentText: "Semera Branch",
      avatarUrl: require("../assets/fgae.jpg"),
    },
  ];

  return (
    <Card style={{ height: "100%" }}>
      <Box>
        <Heading fontSize="xl" p="4" pb="3">
          HIV Reports
        </Heading>
        <Button.Group
          isAttached
          colorScheme="blue"
          mx={{
            base: "auto",
            md: 0,
          }}
          size="sm"
        >
          <Button
            colorScheme={isButtonActive ? "success" : "primary"}
            onPress={() => setIsButtonActive(true)}
            variant="outline"
            width={"30%"}
          >
            Daily
          </Button>
          <Button
            width={"30%"}
            colorScheme={isButtonActive ? "success" : "primary"}
            onPress={() => setIsButtonActive(true)}
            variant="outline"
          >
            Weekly
          </Button>
          <Button
            width={"30%"}
            colorScheme={isButtonActive ? "success" : "primary"}
            onPress={() => setIsButtonActive(true)}
            variant="outline"
          >
            Yearly
          </Button>
        </Button.Group>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Box
              borderBottomWidth="1"
              _dark={{
                borderColor: "muted.50",
              }}
              borderColor="muted.800"
              pl={["0", "4"]}
              pr={["0", "5"]}
              py="2"
            >
              <HStack space={[2, 3]} justifyContent="space-between">
                <Avatar size="48px" source={item.avatarUrl} />
                <VStack>
                  <Text
                    _dark={{
                      color: "warmGray.50",
                    }}
                    color="coolGray.800"
                    bold
                  >
                    {item.fullName}
                  </Text>
                  <Text
                    color="coolGray.600"
                    _dark={{
                      color: "warmGray.200",
                    }}
                  >
                    {item.recentText}
                  </Text>
                </VStack>
                <Spacer />
                <Text
                  fontSize="xs"
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="coolGray.800"
                  alignSelf="flex-start"
                >
                  {item.timeStamp}
                </Text>
              </HStack>
            </Box>
          )}
          keyExtractor={(item) => item.id}
        />
      </Box>
    </Card>
  );
};

export default function HIV(props) {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const backAction = () => {
      props.setComponent("Dashboard");
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <SafeAreaView style={{ width: "100%" }}>
      <Example />
    </SafeAreaView>
  );
}
