import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import {
  NativeBaseProvider,
  Box,
  Image,
  Pressable,
  Heading,
  VStack,
  Text,
  Center,
  HStack,
  Divider,
  Icon,
  StatusBar,
  AspectRatio,
  Stack,
  ArrowBackIcon,
  View,
} from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import Dashboard from "./Components/Dashboard";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import Login from "./Components/Login";
import IPPF from "./Components/IPPF";
import SRH from "./Components/SRH";
import STI from "./Components/STI";
import IncomeReport from "./Components/IncomeReport";
import HIV from "./Components/HIV";

global.__reanimatedWorkletInit = () => {};
const Drawer = createDrawerNavigator();

function Component(props) {
  return (
    <Center>
      <Text mt="12" fontSize="18">
        This is {props.route.name} page.
      </Text>
    </Center>
  );
}

function IPPFComponent(props) {
  return (
   
<IPPF/>
   
  );
}

function SRHComponent(props) {
  return (
    <SRH/>
  );
}

function DashboardComponent(props) {
  const [component, setComponent] = useState('Dashboard')
  return (
    <Center>
      {
component === 'Dashboard' && <Dashboard setComponent= {setComponent}/> ||
component === 'IPPF' && <IPPF setComponent= {setComponent} /> ||
component === 'SRH' && <SRH setComponent= {setComponent} /> ||
component === 'Income' && <IncomeReport setComponent= {setComponent} /> ||
component === 'HIV' && <HIV setComponent= {setComponent} /> ||
component === 'STI' && <STI setComponent= {setComponent} />
      }
     
    </Center>
  );
}

const getIcon = (screenName) => {
  switch (screenName) {
    case "IPPF":
      return "send";
    case "SRH":
      return "heart";
    case "Archive":
      return "archive";
    case "Trash":
      return "trash-can";
    case "Spam":
      return "alert-circle";
    default:
      return undefined;
  }
};

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} safeArea>
      <VStack space="6" my="2" mx="1">
        <Box alignItems="center">
          <Box
            maxW="80"
            rounded="lg"
            overflow="hidden"
            borderColor="coolGray.200"
            borderWidth="1"
            _dark={{
              borderColor: "coolGray.600",
              backgroundColor: "gray.700",
            }}
            _web={{
              shadow: 2,
              borderWidth: 0,
            }}
            _light={{
              backgroundColor: "gray.50",
            }}
          >
            <Box>
              <AspectRatio w="100%" ratio={25 / 12}>
                <Image
                  source={require('./assets/logo-112-scaled-300x77.jpg')}
                  alt="image"
                  width={300}
                />
              </AspectRatio>
              <Center
                bg="#41B3EF"
                _dark={{
                  bg: "#41B3EF",
                }}
                _text={{
                  color: "warmGray.50",
                  fontWeight: "700",
                  fontSize: "xs",
                }}
                position="absolute"
                bottom="0"
                px="3"
                py="1.5"
                borderRightRadius={10}
              >
                Netsanet Yibeltal
              </Center>
            </Box>
            <Stack p="4" space={3}>
              <Stack space={2}>
                <Heading size="md" ml="-1">
                  AMRIF Manager
                </Heading>
                <Text
                  fontSize="xs"
                  _light={{
                    color: "violet.500",
                  }}
                  _dark={{
                    color: "violet.400",
                  }}
                  fontWeight="500"
                  ml="-0.5"
                  mt="-1"
                >
                  @FGAE
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <VStack divider={<Divider />} space="4">
          <VStack space="3">
            {props.state.routeNames.map((name, index) => (
              <Pressable
                key={index + 1}
                px="5"
                py="3"
                rounded="md"
                bg={
                  index === props.state.index
                    ? "rgba(6, 182, 212, 0.1)"
                    : "transparent"
                }
                onPress={(event) => {
                  props.navigation.navigate(name);
                }}
              >
                <HStack space="7" alignItems="center" key={index + 3}>
                  <Icon
                    key={index + 8}
                    color={
                      index === props.state.index ? "primary.500" : "gray.500"
                    }
                    size="5"
                    as={<MaterialCommunityIcons name={getIcon(name)} />}
                  />
                  <Text
                    key={index + 5}
                    fontWeight="500"
                    color={
                      index === props.state.index ? "primary.500" : "gray.700"
                    }
                  >
                    {name}
                  </Text>
                </HStack>
              </Pressable>
            ))}
          </VStack>
          <VStack space="5">
            <Text fontWeight="500" fontSize="14" px="5" color="gray.500">
              Settings
            </Text>
            <VStack space="3">
              <Pressable px="5" py="2">
                <HStack space="7" alignItems="center">
                  <Icon
                    color="gray.500"
                    size="5"
                    as={<MaterialCommunityIcons name="account" />}
                  />
                  <Text color="gray.700" fontWeight="500">
                    Profile
                  </Text>
                </HStack>
              </Pressable>
              <Pressable px="5" py="3">
                <HStack space="7" alignItems="center">
                  <Icon
                    color="gray.500"
                    size="5"
                    as={<MaterialCommunityIcons name="logout" />}
                  />
                  <Text fontWeight="500" color="gray.700">
                    Logout
                  </Text>
                </HStack>
              </Pressable>
            </VStack>
          </VStack>
        </VStack>
      </VStack>
    </DrawerContentScrollView>
  );
}
const CustomHeader = () => {
  return (
    <View style={{backgroundColor:'#FAD605', }}>
      <Image
        source={require('./assets/logo-1121-scaled-300x77.jpg')}
        style={{ width: 5000, height: 50 }} // adjust the width and height as per your logo's dimensions
        resizeMode="cover"
        alt="FGAE"
      />
    </View>
  );
};

function MyDrawer() {
  return (
    <Box safeArea flex={1}>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#F7F7F7" },
          headerTintColor: "#41B3EF",
          headerTitle: "",
          // Here you can add more header configuration options if needed
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen
          name="Dashboard"
          component={DashboardComponent}
          options={{
            headerTitle: props => <CustomHeader {...props} />,
          }}
        />
        <Drawer.Screen
          name="IPPF"
          component={IPPFComponent}
          options={{
            headerTitle: props => <CustomHeader {...props} />,
          }}
        />
                <Drawer.Screen
          name="SRH"
          component={SRHComponent}
          options={{
            headerTitle: props => <CustomHeader {...props} />,
          }}
        />
      </Drawer.Navigator>
    </Box>
  );
}
export default function App() {
  const [login, setLogin] = useState(false);
  const [componentType, setComponentType] = useState("Dashboard")

  const components = () =>{
    switch(componentType){
      case "Dashboard":
        return <MyDrawer />
        case "IPPF":
          return <IPPF/>
    }
  }
  return (
    <>
      <StatusBar hidden={false} />
      {login === true ? (
        <NavigationContainer>
          <NativeBaseProvider>
            {components(setComponentType)}
          </NativeBaseProvider>
        </NavigationContainer>
      ) : (
        <NativeBaseProvider>
         <View style = {{backgroundColor:'#F7F7F7', height:'100%'}}>
         <Login setLogin={setLogin} />
         </View>
        </NativeBaseProvider>
      )}
    </>
  );
}
