import React from "react";
import { View, StyleSheet, FlatList, Text, SafeAreaView } from "react-native";

import { fontSizes, spacing } from "../../utils/sizes";
import { colors } from "../../utils/colors";
import { RoundedButton } from "../../components/RoundedButton";

// const historyItem = ({ item }) => {
//   return <Text style={styles.historyItemStyle(2)}>{item.subject}</Text>;
// };

const renderItem = ({ item }) => (
  <Text
    style={item.status > 1 ? styles.historyItemRed : styles.historyItemGreen}
  >
    {item.subject}
  </Text>
);

export const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };

  return (
    <>
      <SafeAreaView style={{ flex: 0.5, alignItems: "center" }}>
        {!!focusHistory.length && (
          <>
            <Text style={styles.title}>Things we've focused on:</Text>
            <FlatList
              style={{ flex: 1 }}
              contentContainerStyle={{ flex: 1, alignItems: "center" }}
              data={focusHistory}
              renderItem={renderItem}
              keyExtractor={(item) => item.key}
            />
            <View style={styles.clearContainer}>
              <RoundedButton
                size={75}
                title="Clear"
                onPress={() => onClear()}
              />
            </View>
          </>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  // historyItemStyle: (status) => ({
  //   color: status > 1 ? "red" : "green",
  //   fontSize: fontSizes.md,
  // }),
  historyItemRed: {
    color: "red",
    fontSize: fontSizes.md,
  },
  historyItemGreen: {
    color: "green",
    fontSize: fontSizes.md,
  },
  title: {
    color: "white",
    fontSize: fontSizes.lg,
  },
  clearContainer: {
    alignItems: "center",
    padding: spacing.md,
  },
});
