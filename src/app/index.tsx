import Entypo from '@expo/vector-icons/Entypo';
import React from 'react';
import { FlatList, Image, Linking, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { MY_PROJECTS } from '../../constants/projects';
import { styles } from './styles/style';

export default function HomePage() {

  const renderProjectCard = ({ item }: { item: any }) => (
    <View style={styles.card}>
      <Text style={styles.projectTitle}>{item.title}</Text>
      <Text style={styles.projectDescription}>{item.description}</Text>
      <View style={styles.tagContainer}>
        {item.tags.map((tag: string, index: number) => (
          <Text key={index} style={styles.tag}>{tag}</Text>
        ))}
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Linking.openURL(item.github)}
      >
        <Text style={styles.buttonText}>On Work</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.container}>
      {/* Profile Header */}
      <View style={[styles.header, { position: "relative", marginTop: 72, marginBottom: 48, maxWidth: 800}]}>
        {/* Circular Profile Image */}
        <View style={styles.profileFrame}>
          {/* The Photo inside the frame */}
          <Image
            source={require('../../assets/images/my-photo.jpeg')}
            style={styles.profilePhoto}
          />
        </View>
        <View style={[styles.body, {flex: 1}]}>
          <Text style={[styles.headerTitle, {fontSize: 60}]}>Gerardo Gilang L</Text>
          <Text style={styles.subtitle}>Software Engineer | Web • Mobile • Shopify • Cloud</Text>
          <Text style={[styles.desc, {marginTop: 20}]}>
            <View style={styles.skillTagContainer}><Text style={styles.skillTag}>ReactJs/NextJs</Text></View>
            <View style={styles.skillTagContainer}><Text style={styles.skillTag}>Flutter</Text></View>
            <View style={styles.skillTagContainer}><Text style={styles.skillTag}>React Native</Text></View>
            <View style={styles.skillTagContainer}><Text style={styles.skillTag}>HTML</Text></View>
            <View style={styles.skillTagContainer}><Text style={styles.skillTag}>CSS/SCSS</Text></View>
            <View style={styles.skillTagContainer}><Text style={styles.skillTag}>JS</Text></View>
            <View style={styles.skillTagContainer}><Text style={styles.skillTag}>JQuery</Text></View>
            <View style={styles.skillTagContainer}><Text style={styles.skillTag}>PHP</Text></View>
            <View style={styles.skillTagContainer}><Text style={styles.skillTag}>Laravel(PHP)</Text></View>
            <View style={styles.skillTagContainer}><Text style={styles.skillTag}>Golang</Text></View>
            <View style={styles.skillTagContainer}><Text style={styles.skillTag}>Python(Basic knowledge)</Text></View>
            <View style={styles.skillTagContainer}><Text style={styles.skillTag}>Docker</Text></View>
            <View style={styles.skillTagContainer}><Text style={styles.skillTag}>Git</Text></View>
            <View style={styles.skillTagContainer}><Text style={styles.skillTag}>Shopify</Text></View>
          </Text>
        </View>

        <Image
          source={require('../../assets/images/header1.png')}
          style={styles.headerImage1}
        />
      </View>
      
      <View style={[styles.sectionGreen, {position: "relative"}]}>
        <View style={[styles.body, styles.section]}>
          <Text style={styles.aboutusTitle}>About Me</Text>
          <Text style={styles.aboutusContent}>Graduate Bachelor's degree Computer Science student at Bina Nusantara University, Currently working as software engineer for 5+ year experience. <br /><br />Have a solid foundation about ReactJs/NextJs, Flutter, React Native, HTML, CSS/SCSS, JS, JQuery, PHP,Laravel(PHP), Golang, Python (Basic knowledge), Docker, Git, Shopify.<br /><br />Proven have a strong will to learn newthing, reliable,responsible, on time with deadlines.</Text>
        </View>
        <View style={styles.shapeDividerContainer}>
          <Svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            style={styles.shapeSvg}
          >
            {/* 💡 REPLACE THE 'd="..."' CONTENT BELOW WITH YOUR EXACT SVG PATH DATA */}
            <Path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,4.75,55.05,10.3,81.18,14.83,156.76,27.87,233.91,32.6,321.39,56.44Z"
              fill="#fff" // 👈 Matches your site background color to blend perfectly
            />
          </Svg>
        </View>
        <View style={styles.aboutMeImageContainer}>
          <Image
            source={require('../../assets/images/aboutme.png')}
            style={styles.aboutMeImage}
          />
        </View>
      </View>

      <View style={[styles.body, styles.section, {position: "relative"}]}>
        <Text style={styles.sectionTitle}>Contact</Text>
        <View style={styles.socialMediaSection}>
          <View style={styles.socialMediaItem}>
            <Entypo name="phone" size={22} color="#0A7C6E" />
            <Text style={styles.contactTitle}>Phone</Text>
            <Text style={styles.link}>+6285767433334</Text>
          </View>
          <View style={styles.socialMediaItem}>
            <Entypo name="mail" size={22} color="#0A7C6E" />
            <Text style={styles.contactTitle}>E-Mail</Text>
            <Text style={styles.link}>gerardo.lazuardi@gmail.com</Text>
          </View>
          <View style={styles.socialMediaItem}>
            <Entypo name="linkedin" size={22} color="#0A7C6E" />
            <Text style={styles.contactTitle}>Linked In</Text>
            <Text
              style={styles.link}
              onPress={() => Linking.openURL('https://www.linkedin.com/in/gerardogilangl/')}
            >https://www.linkedin.com/in/gerardogilangl/</Text>
          </View>
          <View style={styles.socialMediaItem}>
            <Entypo name="instagram" size={22} color="#0A7C6E" />
            <Text style={styles.contactTitle}>Instagram</Text>
            <Text
              style={styles.link}
              onPress={() => Linking.openURL('https://www.instagram.com/gerardo_gilang?igsh=MTAyNnYyeHY2MnhwYg==')}
            >https://www.instagram.com/gerardo_gilang?igsh=MTAyNnYyeHY2MnhwYg==</Text>
          </View>
        </View>
        <Image
          source={require('../../assets/images/contact.png')}
          style={styles.contactImage}
        />
      </View>

      {/* Portfolio Body */}
      <View style={styles.body}>
        <Text style={styles.sectionTitle}>Featured Projects</Text>
        <FlatList
          data={MY_PROJECTS}
          renderItem={renderProjectCard}
          keyExtractor={item => item.id.toString()}
          scrollEnabled={false}
        />
        <Image
          source={require('../../assets/images/projects.png')}
          style={styles.projectsImage}
        />
      </View>

      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>
          &copy; 2026 Gerardo Gilang Lazuardi. All rights reserved.
        </Text>
      </View>
    </ScrollView>
  );
}