import { StyleSheet } from 'react-native';

export const imageStyles = StyleSheet.create({
  headerImage1: {
    position: "absolute",
    top: "-60%",
    right: "-40%",
    width: "40%",
    resizeMode: "contain",
    zIndex: -1,
  },
  aboutMeImageContainer: {
    position: "absolute",
    left: 0,
    bottom: -80,
  },
  aboutMeImage: {
    width: 250,                  // 💡 Set a fixed width
    height: 250,                 // 💡 Set a matching fixed height
    resizeMode: 'stretch',         // Ensures your image fills the circle without distortion
    borderTopRightRadius: 30,
  },
  contactImage: {
    position: "absolute",
    top: "-200%",
    right: "-35%",
    width: "50%",
    resizeMode: "contain",
    zIndex: -1,
  },
  projectsImage: {
    position: "absolute",
    bottom: -30,
    left: "-120%",
    height: 400,
    resizeMode: "contain",
    zIndex: -1,
  },
});