import { Tabs } from "expo-router"
import { Ionicons } from "@expo/vector-icons"

const MainLayout = () => {
    return(
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 70,
                    backgroundColor: '#FFDD67',
                    elevation: 0,
                    borderTopWidth: 0,
                },
                tabBarIconStyle: {
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                tabBarActiveTintColor: '#4A4A4A',
                tabBarInactiveTintColor: '#4A4A4A'
            }}
        >
            <Tabs.Screen 
                name="home"
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons 
                            name={focused ? "home" : "home-outline"} 
                            size={30} 
                            color={color} 
                        />
                    )
                }}
            />
            <Tabs.Screen 
                name="add-event"
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons 
                            name={focused ? "add-circle" : "add-circle-outline"} 
                            size={30} 
                            color={color} 
                        />
                    )
                }}
            />
            <Tabs.Screen 
                name="posts"
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons 
                            name={focused ? "people" : "people-outline"} 
                            size={30} 
                            color={color} 
                        />
                    )
                }}
            />
            <Tabs.Screen 
                name="ranking"
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons 
                            name={focused ? "trophy" : "trophy-outline"} 
                            size={30} 
                            color={color} 
                        />
                    )
                }}
            />
            <Tabs.Screen 
                name="profile"
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons 
                            name={focused ? "person" : "person-outline"} 
                            size={30} 
                            color={color}
                        />
                    )
                }}
            />
        </Tabs>
    )
}

export default MainLayout