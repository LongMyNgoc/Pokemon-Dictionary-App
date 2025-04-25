  import { useEffect, useState } from "react";
  import { ScrollView, View, ActivityIndicator, Text } from "react-native";
  import PokemonCard from "@/components/PokemonCard";
  import type { ViewStyle } from "react-native";

  export default function Index() {
    const [pokemonList, setPokemonList] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch("https://pokemon-dictionary-be-production.up.railway.app/pokemons");
          const data = await res.json();

          const list = Array.isArray(data.pokemons) ? data.pokemons :
                      Array.isArray(data) ? data : [];

          setPokemonList(list);
        } catch (err) {
          console.error("Fetch error:", err);
          setPokemonList([]);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }, []);

    if (loading) {
      return (
        <View style={styles.center}>
          <ActivityIndicator size="large" />
          <Text>Đang tải dữ liệu Pokémon...</Text>
        </View>
      );
    }

    if (pokemonList.length === 0) {
      return (
        <View style={styles.center}>
          <Text>Không có Pokémon nào để hiển thị.</Text>
        </View>
      );
    }

    return (
      <ScrollView contentContainerStyle={{ padding: 10 }}>
        {pokemonList.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </ScrollView>
    );
  }

  const styles: { center: ViewStyle } = {
    center: {
      flex: 1,
      justifyContent: "center",  // OK
      alignItems: "center",      // OK
      padding: 16,
    },
  };
