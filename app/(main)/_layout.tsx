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
                }
            }}
        >
            <Tabs.Screen 
                name="home"
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons name="home" size={30} color={color} />
                    )
                }}
            />
            <Tabs.Screen 
                name="add-event"
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons name="add-circle" size={30} color={color} />
                    )
                }}
            />
            <Tabs.Screen 
                name="posts"
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons name="people" size={30} color={color} />
                    )
                }}
            />
            <Tabs.Screen 
                name="ranking"
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons name="trophy" size={30} color={color} />
                    )
                }}
            />
            <Tabs.Screen 
                name="profile"
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons name="person" size={30} color={color} />
                    )
                }}
            />
        </Tabs>
    )
}

export default MainLayout