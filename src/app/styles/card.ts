import { StyleSheet } from 'react-native';

export const cardStyles = StyleSheet.create({
  card: {
    backgroundColor: '#F59E0B',
    borderRadius: 12,
    padding: 20,
    marginVertical: 10,
  },
  projectTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  projectDescription: {
    fontSize: 14,
    color: '#fff',
    marginVertical: 10,
    lineHeight: 20,
  },
  link: {
    fontSize: 14,
    color: '#0E1111',
    marginVertical: 10,
    lineHeight: 20,
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15,
  },
  tag: {
    backgroundColor: '#FF6B35',
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 6,
  },
  button: {
    backgroundColor: 'grey',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
});