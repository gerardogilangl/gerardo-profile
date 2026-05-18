import { StyleSheet } from 'react-native';

export const experiencePageStyles = StyleSheet.create({
  timelineItem: {
    backgroundColor: '#fff', // Slate 800
    borderRadius: 12,
    padding: 24,
    paddingHorizontal: 0,
    marginVertical: 12,
  },
  timelineHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 12,
  },
  timelineRole: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0A7C6E',
  },
  timelineCompany: {
    fontSize: 16,
    color: '#0E1111', // Sky Blue accent
    marginTop: 4,
  },
  typeBadge: {
    fontSize: 12,
    color: '#0E1111',
    fontWeight: 'normal',
  },
  timelinePeriod: {
    fontSize: 14,
    color: '#0A7C6E',
    fontWeight: '600',
  },
  bulletContainer: {
    marginTop: 15,
    gap: 10,
  },
  bulletPoint: {
    fontSize: 15,
    color: '#0E1111', // Slate 300 for readable descriptions
    lineHeight: 22,
    paddingLeft: 4,
  },
});