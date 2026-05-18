import React from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import { MY_EXPERIENCE } from '../../constants/experience';
import { styles } from './styles/style'; // Uses your centralized stylesheet barrel

export default function ExperiencePage() {
  const renderTimelineItem = ({ item }: { item: any }) => (
    <View style= { styles.timelineItem }>
      <View style = { styles.timelineHeader }>
        <View>
          <Text style={ styles.timelineRole }> { item.role } </Text>
          <Text style = { styles.timelineCompany } > { item.company } • <Text style={ styles.typeBadge }> { item.type } </Text></Text>
        </View>
        < Text style = { styles.timelinePeriod } > { item.period } </Text>
      </View>
      <View style={ styles.tagContainer }>
        {
          item.tech.map((techItem: string, index: number) => (
            <Text key= { index } style = { styles.tag } > { techItem } </Text>
          ))
        }
      </View>
      {/* Accomplishments Bullet Points */ }
      
      <View style={ styles.bulletContainer }>
        {
          item.highlights.map((highlight: string, index: number) => (
            <Text key= { index } style = { styles.bulletPoint } >
                  ⚡ { highlight }
            </Text>
          ))
        }
      </View>
    </View>
  );

  return (
    <ScrollView style={[styles.scrollView, {marginTop: 24}]} contentContainerStyle = { styles.container } >
      <View style={[styles.body, { maxWidth: 1000 }]}>
        < FlatList
          data = { MY_EXPERIENCE }
          renderItem = { renderTimelineItem }
          keyExtractor = { item => item.id.toString() }
          scrollEnabled = { false}
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