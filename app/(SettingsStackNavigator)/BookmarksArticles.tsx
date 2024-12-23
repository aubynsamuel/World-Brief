import React from "react";
import { WebView } from "react-native-webview";
import { useTheme , AppContextType} from "../../NewsAppContext";
// import TopHeaderBar from "../../components/HeaderBar";
import { Text } from "react-native";
import { useLocalSearchParams } from "expo-router";


const BookmarkArticle = () => {
  const { darkMode } = useTheme() as AppContextType;
  const { url } = useLocalSearchParams()
  return (
    <>
      {/* <TopHeaderBar
        title={"Article"}
        backButtonShown={true}
        theme={darkMode}
      /> */}

      <WebView
        source={{ uri: url } as any}
        cacheEnabled={false}
        // cacheMode="LOAD_CACHE_ELSE_NETWORK"
        startInLoadingState={true}
        renderError={() => <Text>Failed to load the article</Text>}
      />
    </>
  );
};

export default BookmarkArticle;
