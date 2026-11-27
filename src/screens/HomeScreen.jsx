import { Text, View, StyleSheet, FlatList, ScrollView, Pressable, Alert, RefreshControl } from "react-native";
import { useState, useEffect } from "react";
import { categoryApi } from "../api";
import { Link } from "@react-navigation/native";
import { featuredItems } from "../data/data";
import FeaturedCard from "../components/FeaturedCard";
import CategoryCard from "../components/CategoryCard";

export default function HomeScreen({ navigation }) {
  const handleRefresh = async () => {
    setRefreshing(true);

    try {
      const data = await categoryApi.getAll();
      setCategories(data);
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setRefreshing(false);
    }
  };

  const [categories, setCategories] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    categoryApi.getAll()
      .then(setCategories)
      .catch((error) => Alert.alert("Error", error.message));
  }, []);

  return (
    <ScrollView style={styles.container}
    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
     >
      <View style={styles.header}>
        <Text style={styles.restaurantName}>Tasty Bites</Text>
        <View style={styles.headerInfo}>
          <Text style={styles.infoText}>⭐️ 4.8 Rating</Text>
          <Text style={styles.infoDot}>•</Text>
          <Text style={styles.infoText}>🕣 25-35 min</Text>
        </View>
        <Text style={styles.tagline}>Best food in town!</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Dishes</Text>
        <FlatList
          data={featuredItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => 
          <Link screen="Details" params={{ item }} style={{ marginRight: 12 }}>
            <FeaturedCard {...item} />
          </Link>
          }
          horizontal
          contentContainerStyle={styles.featuredList}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Categories</Text>
        {categories.map((category) => (
          <Pressable
          key={category.id}
            onPress={() =>
              navigation.navigate("Category", {
                categoryId: category.id,
                categoryName: category.title,
              })
            }
            style={{ marginBottom: 12 }}
          >
            <CategoryCard
              title={category.title}
              itemCount={category.itemCount}
            />
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  header: {
    backgroundColor: "#007AFF",
    padding: 24,
    paddingTop: 16,
    paddingBottom: 28,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  restaurantName: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  headerInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: "#fff",
    opacity: 0.9,
  },
  infoDot: {
    fontSize: 14,
    color: "#fff",
    opacity: 0.6,
    marginHorizontal: 8,
  },
  tagline: {
    fontSize: 14,
    color: "#fff",
    opacity: 0.8,
  },
  section: {
    padding: 16,
    paddingBottom: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#333",
    marginBottom: 12,
  },
  featuredList: {
    paddingRight: 16,
  },
  bottomPadding: {
    height: 24,
  },
});
