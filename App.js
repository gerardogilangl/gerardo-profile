import { FlatList, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MY_PROJECTS } from './constants/projects';

export default function App() {

  // Component for each project card
  const renderProjectCard = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.projectTitle}>{item.title}</Text>
      <Text style={styles.projectDescription}>{item.description}</Text>
      <View style={styles.tagContainer}>
        {item.tags.map((tag, index) => (
          <Text key={index} style={styles.tag}>{tag}</Text>
        ))}
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Linking.openURL(item.github)}
      >
        <Text style={styles.buttonText}>View Code</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>My Software Engineering Portfolio</Text>
      <Text style={styles.subtitle}>Web • Mobile • Cloud Server</Text>

      <FlatList
        data={MY_PROJECTS}
        renderItem={renderProjectCard}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

// React Native Styling (No SASS needed, pure JavaScript!)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a', // Sleek dark mode
    paddingTop: 60,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#f8fafc',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#38bdf8',
    marginVertical: 10,
  },
  listContainer: {
    width: '100%',
    maxWidth: 600, // Keeps it centered and clean on desktop screens
    paddingBottom: 40,
  },
  card: {
    backgroundColor: '#1e293b',
    borderRadius: 8,
    padding: 20,
    marginVertical: 12,
    borderWidth: 1,
    borderColor: '#334155',
  },
  projectTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f8fafc',
  },
  projectDescription: {
    fontSize: 14,
    color: '#94a3b8',
    marginVertical: 8,
    lineHeight: 20,
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15,
  },
  tag: {
    backgroundColor: '#0284c7',
    color: '#fff',
    fontSize: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginRight: 6,
    marginBottom: 6,
  },
  button: {
    backgroundColor: '#3b82f6',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});