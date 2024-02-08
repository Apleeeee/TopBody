import React from "react";
import { useTranslation } from "react-i18next";
import { ScrollView } from "react-native";

import {
  Avatar,
  Button,
  Card,
  SafeAreaView,
  Searchbar,
  StyleSheet,
  Text,
  useTheme,
} from "shared/ui";

const LeftContent = (props) => <Avatar.Icon {...props} icon="weight-lifter" />;

const MainScreen = () => {
  const theme = useTheme();

  const { t } = useTranslation();

  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Searchbar
        placeholder={t("Search")}
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
      <ScrollView>
        <Card>
          <Card.Title title={t("Base")} left={LeftContent} />
          <Card.Content>
            <Text variant="titleLarge">{t("Breast")}</Text>
            <Text variant="bodyMedium">
              {t("Chest muscle development training")}
            </Text>
          </Card.Content>
          <Card.Cover
            source={{
              uri: "https://preview.redd.it/anime-2-5d-gym-lora-v0-s253gpru20ub1.png?width=2048&format=png&auto=webp&s=f72171af7f1c0eb9b50a3a9fe0ded1a5a39fb18d",
            }}
          />
          <Card.Actions>
            <Button mode="contained">{t("Begin")}</Button>
          </Card.Actions>
        </Card>

        <Card>
          <Card.Title title={t("Base")} left={LeftContent} />
          <Card.Content>
            <Text variant="titleLarge">{t("Back")}</Text>
            <Text variant="bodyMedium">
              {t("Back muscle development training")}
            </Text>
          </Card.Content>
          <Card.Cover
            source={{
              uri: "https://img.freepik.com/photos-premium/dos-muscle-dans-style-anime-gym_783299-1774.jpg",
            }}
          />
          <Card.Actions>
            <Button mode="contained">{t("Begin")}</Button>
          </Card.Actions>
        </Card>

        <Card>
          <Card.Title title={t("Base")} left={LeftContent} />
          <Card.Content>
            <Text variant="titleLarge">{t("Hips")}</Text>
            <Text variant="bodyMedium">
              {t("Thigh muscle development training")}
            </Text>
          </Card.Content>
          <Card.Cover
            source={{
              uri: "https://i.pinimg.com/564x/ea/35/37/ea35377e7fc1daa94c3b506dec4c76bf.jpg",
            }}
          />
          <Card.Actions>
            <Button mode="contained">{t("Begin")}</Button>
          </Card.Actions>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexStart: "center",
    justifyContent: "space-between",
    gap: 25,
  },
  title: {
    textAlign: "center",
  },
});

export default MainScreen;
