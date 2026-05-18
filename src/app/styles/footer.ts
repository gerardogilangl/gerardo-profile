import { StyleSheet } from 'react-native';

export const footerStyles = StyleSheet.create({
  footerContainer: {
    width: '100%',
    marginTop: 60,               // Creates visual separation below your projects
    backgroundColor: "#0A7C6E",
    borderTopWidth: 1,
    borderTopColor: '#334155',    // Smooth slate line to divide content
    paddingVertical: 30,         // Clean spacing padding at the absolute bottom
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#fff',            // Muted slate gray text
    textAlign: 'center',
    fontWeight: '500',
  },
});