import { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { colors, radius, spacing, typography } from '../../constants/theme';

const TABS = ['Upcoming (6)', 'Completed (3)', 'All Steps (25)'];

const TASKS = [
  { icon: 'business-outline', title: 'Book Your Venue', priority: 'High priority', high: true, route: '/book-venue' },
  { icon: 'camera-outline', title: 'Book Photographer', priority: 'High priority', high: true, route: '/book-venue' },
  { icon: 'gift-outline', title: 'Choose Decoration Style', priority: 'Medium priority', high: false, route: '/book-venue' },
  { icon: 'mail-outline', title: 'Book Catering', priority: 'Medium priority', high: false, route: '/book-venue' },
  { icon: 'send-outline', title: 'Send Invitations', priority: 'Low priority', high: false, route: '/guests' },
  { icon: 'calendar-outline', title: 'Plan Events Timeline', priority: 'Low priority', high: false, route: '/timeline' },
];

export default function PlanScreen() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.topRow}>
          <Text style={styles.title}>My Plan</Text>
          <Ionicons name="help-circle-outline" size={20} color={colors.ash} />
        </View>

        {/* Progress card */}
        <View style={styles.card}>
          <View style={styles.progressLabelRow}>
            <Text style={styles.progressLabel}>Planning Progress</Text>
            <Text style={styles.progressPct}>32%</Text>
          </View>
          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: '32%' }]} />
          </View>
          <Text style={styles.progressSub}>17 of 25 steps completed</Text>
        </View>

        {/* Next recommended step */}
        <View style={styles.nextCard}>
          <View style={styles.nextEyebrowRow}>
            <Ionicons name="star" size={12} color={colors.ink} />
            <Text style={styles.nextEyebrow}>Next Recommended Step</Text>
          </View>
          <View style={styles.nextRow}>
            <View style={{ flex: 1 }}>
              <Text style={styles.nextTitle}>Book Your Venue</Text>
              <Text style={styles.nextDesc}>
                This helps us recommend the best vendors for your location.
              </Text>
            </View>
            <TouchableOpacity style={styles.startBtn} onPress={() => router.push('/book-venue')}>
  <Text style={styles.startBtnText}>Start</Text>
</TouchableOpacity>
          </View>
        </View>

        {/* Segmented tabs */}
        <View style={styles.segRow}>
          {TABS.map((tab, i) => (
            <TouchableOpacity key={tab} onPress={() => setActiveTab(i)} style={styles.segItem}>
              <Text style={[styles.segText, i === activeTab && styles.segTextActive]}>{tab}</Text>
              {i === activeTab && <View style={styles.segUnderline} />}
            </TouchableOpacity>
          ))}
        </View>

        {/* Task list */}
        {TASKS.map((task) => (
  <TouchableOpacity key={task.title} style={styles.taskRow} onPress={() => router.push(task.route as any)}>
            <View style={styles.taskCircle} />
            <View style={styles.taskIcon}>
              <Ionicons name={task.icon as any} size={15} color={colors.ink} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.taskTitle}>{task.title}</Text>
              <Text style={[styles.taskPriority, task.high && styles.taskPriorityHigh]}>
                {task.priority}
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={16} color={colors.ash} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.paper },
  scrollContent: { padding: spacing.xl, paddingBottom: spacing.xxl * 2 },

  topRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing.lg },
  title: { fontSize: typography.displaySize.sm, fontWeight: '700', color: colors.ink },

  card: {
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
  },
  progressLabelRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: spacing.sm },
  progressLabel: { fontSize: typography.textSize.xs, color: colors.ash, fontWeight: '600' },
  progressPct: { fontSize: typography.textSize.lg, fontWeight: '700', color: colors.ink },
  progressTrack: { height: 6, backgroundColor: colors.mist, borderRadius: radius.sm, overflow: 'hidden' },
  progressFill: { height: '100%', backgroundColor: colors.ink, borderRadius: radius.sm },
  progressSub: { fontSize: typography.textSize.xs, color: colors.ash, marginTop: spacing.sm },

  nextCard: {
    borderWidth: 1,
    borderColor: colors.ink,
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginBottom: spacing.lg,
  },
  nextEyebrowRow: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: spacing.sm },
  nextEyebrow: { fontSize: 11, fontWeight: '700', color: colors.ink },
  nextRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
  nextTitle: { fontSize: typography.displaySize.sm, fontWeight: '700', color: colors.ink, marginBottom: 3 },
  nextDesc: { fontSize: 11.5, color: colors.ash, lineHeight: 16 },
  startBtn: {
    backgroundColor: colors.ink,
    borderRadius: radius.md,
    height: 36,
    paddingHorizontal: spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  startBtnText: { fontSize: typography.textSize.sm, fontWeight: '700', color: '#fff' },

  segRow: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: colors.line, marginBottom: spacing.sm },
  segItem: { flex: 1, alignItems: 'center', paddingBottom: spacing.sm },
  segText: { fontSize: 12.5, fontWeight: '600', color: colors.ash },
  segTextActive: { color: colors.ink },
  segUnderline: { height: 2, backgroundColor: colors.ink, width: '100%', marginTop: 8, borderRadius: 1 },

  taskRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.mist,
  },
  taskCircle: { width: 20, height: 20, borderRadius: 10, borderWidth: 1.6, borderColor: colors.ashLight },
  taskIcon: {
    width: 30,
    height: 30,
    borderRadius: 9,
    backgroundColor: colors.mist,
    alignItems: 'center',
    justifyContent: 'center',
  },
  taskTitle: { fontSize: 13.5, fontWeight: '700', color: colors.ink },
  taskPriority: { fontSize: 11, color: colors.ash, marginTop: 1 },
  taskPriorityHigh: { color: colors.ink, fontWeight: '600' },
});