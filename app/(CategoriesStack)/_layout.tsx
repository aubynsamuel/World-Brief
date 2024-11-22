import React from "react";
import { Stack } from "expo-router";
import { useTheme, AppContextType } from "../../NewsAppContext";

const _layout = () => {
  const { darkMode } = useTheme() as AppContextType;
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        animation: "simple_push",
        navigationBarColor: darkMode ? "black" : "white",
        headerStyle: {
          backgroundColor: darkMode ? "black" : "white",
        },
        headerTitleStyle: {
          color: darkMode ? "white" : "black",
        },
        headerTintColor: darkMode ? "white" : "black",
      }}
    >
      <Stack.Screen
        name="CategoriesScreen"
        options={{
          headerShown: false,
          title: "Categories",
        }}
      />
      <Stack.Screen
        name="CategoriesArticle"
        options={{
          title: "Article",
        }}
      />
    </Stack>
  );
};

export default _layout;