import { StyleSheet } from 'react-native';

export const dividerStyles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    columnGap: 40,
    alignItems: 'center',
    marginBottom: 40,
    width: '100%',

    // 👇 CRITICAL CORE ADDITION: Sets an layout baseline anchor for the absolute divider element
    position: 'relative',
    paddingBottom: 60, // Gives the absolute shape space to sit without covering up text links
  },
  shapeDividerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    overflow: 'hidden',
    height: 56, // 💡 Maps directly to your CSS layout height rule
    // Note: React Native takes care of line-height: 0 naturally for Layout containers
  },
  shapeSvg: {
    width: '100%',
    height: '100%',
    // transform: [{ rotate: '180deg' }], // 💡 Uncomment if your shape generation orientation needs inversion adjustment
  },
});