import { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import EmptyState from '../components/EmptyState';
import { colors, radius, spacing, typography } from '../constants/theme';

const TABS = ['All', 'To Do', 'In Progress', 'Done'];
const OVERDUE = [
  { title: 'Book Photographer', due: 'Due May 10' },
  { title: 'Send Save-the-Date', due: 'Due May 15' },
];
const THIS_WEEK = [
  { title: 'Choose Wedding Venue', due: 'Due May 18' },
  { title: 'Meet with Caterer', due: 'Due May 20' },
  { title: 'Finalize Guest List', due: 'Due May 22' },
];

export default function ChecklistScreen() {
  const [activeTab, setActiveTab] = useState(0);
  const hasTasks = OVERDUE.length > 0 || THIS_WEEK.length > 0;

  return (
    <View style={styles.screen}>
      <View style={styles.topRow}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={22} color={colors.ink} />
        </TouchableOpacity>
        <Text style={styles.title}>Checklist</Text>
        <TouchableOpacity onPress={() => router.push('/event-settings')}>
          <Ionicons name="ellipsis-horizontal" size={20} color={colors.ink} />
        </TouchableOpacity>
      </View>

      {!hasTasks ? (
        <EmptyState
          icon="checkbox-outline"
          title="Your checklist is empty"
          sub="Once you pick an event type, we'll build a checklist tailored to it automatically."
          ctaLabel="Generate My Checklist"
        />
      ) : (
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.segRow}>
            {TABS.map((t, i) => (
              <TouchableOpacity key={t} onPress={() => setActiveTab(i)} style={styles.segItem}>
                <Text style={[styles.segText, i === activeTab && styles.segTextActive]}>{t}</Text>
                {i === activeTab && <View style={styles.segUnderline} />}
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.sectionTitle}>Overdue ({OVERDUE.length})</Text>
          {OVERDUE.map((t) => (
            <View key={t.title} style={styles.taskRow}>
              <View style={styles.taskCircle} />
              <View>
                <Text style={styles.taskTitle}>{t.title}</Text>
                <Text style={styles.taskDue}>{t.due}</Text>
              </View>
            </View>
          ))}

          <Text style={[styles.sectionTitle, { marginTop: spacing.lg }]}>This Week ({THIS_WEEK.length})</Text>
          {THIS_WEEK.map((t) => (
            <View key={t.title} style={styles.taskRow}>
              <View style={styles.taskCircle} />
              <View>
                <Text style={styles.taskTitle}>{t.title}</Text>
                <Text style={styles.taskDue}>{t.due}</Text>
              </View>
            </View>
          ))}

          <View style={styles.nextStepStrip}>
            <Ionicons name="star-outline" size={18} color={colors.ink} />
            <View style={{ flex: 1 }}>
              <Text style={styles.nsTitle}>Your Next Step</Text>
              <Text style={styles.nsName}>Book a Photographer</Text>
              <Text style={styles.nsSub}>Recommended based on your plan.</Text>
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.paper },
  scrollContent: { paddingHorizontal: spacing.xl, paddingBottom: spacing.xl },

  topRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: spacing.xl, paddingTop: 60, paddingBottom: spacing.lg },
  title: { fontSize: 17, fontWeight: '700', color: colors.ink },

  segRow: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: colors.line, marginBottom: spacing.lg },
  segItem: { flex: 1, alignItems: 'center', paddingBottom: spacing.sm },
  segText: { fontSize: 12, fontWeight: '600', color: colors.ash },
  segTextActive: { color: colors.ink },
  segUnderline: { height: 2, backgroundColor: colors.ink, width: '100%', marginTop: 8, borderRadius: 1 },

  sectionTitle: { fontSize: 13, fontWeight: '700', color: colors.ink, marginBottom: spacing.sm },

  taskRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, borderWidth: 1, borderColor: colors.line, borderRadius: radius.md, padding: spacing.md, marginBottom: spacing.sm },
  taskCircle: { width: 20, height: 20, borderRadius: 10, borderWidth: 1.6, borderColor: colors.ashLight },
  taskTitle: { fontSize: 13.5, fontWeight: '700', color: colors.ink },
  taskDue: { fontSize: 11.5, color: colors.ash, marginTop: 1 },

  nextStepStrip: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, backgroundColor: colors.mist, borderRadius: radius.lg, padding: spacing.md, marginTop: spacing.md },
  nsTitle: { fontSize: 11, color: colors.ash, fontWeight: '600' },
  nsName: { fontSize: 13.5, fontWeight: '700', color: colors.ink, marginTop: 1 },
  nsSub: { fontSize: 11, color: colors.ash, marginTop: 1 },
});