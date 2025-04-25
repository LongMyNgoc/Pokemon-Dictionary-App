import { View, Text, Image, StyleSheet } from "react-native";

type PokemonProps = {
  pokemon: {
    id: number;
    name: string;
    image_url: string;
    types: string[];
  };
};

export default function PokemonCard({ pokemon }: PokemonProps) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: pokemon.image_url }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>
          #{pokemon.id} {capitalize(pokemon.name)}
        </Text>
        <Text style={styles.types}>
          {pokemon.types.map((type) => capitalize(type)).join(" / ")}
        </Text>
      </View>
    </View>
  );
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    padding: 12,
    marginBottom: 10,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 70,
    height: 70,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  types: {
    fontSize: 14,
    color: "#666",
  },
});
