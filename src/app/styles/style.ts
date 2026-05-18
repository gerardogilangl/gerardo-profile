import { StyleSheet } from 'react-native';
import { aboutUsStyles } from './aboutus';
import { cardStyles } from './card';
import { dividerStyles } from './divider';
import { experiencePageStyles } from './experiencepage';
import { footerStyles } from './footer';
import { imageStyles } from './image';
import { sectionColorStyles } from './sectioncolor';
import { skillStyles } from './skill';
import { topNavStyles } from './topnav';

const localStyles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff',
    flex: 1,
  },
  container: {
    paddingTop: 60,
    // paddingHorizontal: 20,
    alignItems: 'center',
  },
  header: {
    display: "flex",
    flexDirection: "row",
    columnGap: 40,
    alignItems: 'center',
    marginBottom: 40,
  },
  profileFrame: {
    width: 200,
    height: 300,
    borderRadius: 16,
    borderWidth: 3,
    borderColor: '#0A7C6E',
    overflow: 'hidden',
    backgroundColor: '#1e293b',
    position: 'relative',
  },
  profilePhoto: {
    width: 200,
    height: 300,
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#F59E0B',
  },
  subtitle: {
    fontSize: 16,
    color: '#0A7C6E',
    marginTop: 8,
  },
  desc: {
    fontSize: 16,
    color: '#0E1111',
    marginTop: 8,
    lineHeight: 24,
  },
  body: {
    width: '100%',
    maxWidth: 800,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#F59E0B',
    marginBottom: 15,
    paddingBottom: 8,
  },
  socialMediaSection: {
    display: "flex",
    rowGap: "1rem",
  },
  socialMediaItem: {
    display: "flex",
    flexDirection: "row",
    columnGap: ".5rem",
    alignItems: "center",
  },
  section: {
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 72,
    marginBottom: 72,
    maxWidth: 800,
  },
  contactTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0A7C6E',
  },
});

// Now combine the imported card styles and the local styles safely
export const styles = {
  ...cardStyles,
  ...localStyles,
  ...aboutUsStyles,
  ...sectionColorStyles,
  ...imageStyles,
  ...topNavStyles,
  ...footerStyles,
  ...skillStyles,
  ...dividerStyles,
  ...experiencePageStyles
};