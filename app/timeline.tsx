import { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { colors, radius, spacing, typography } from '../constants/theme';

const MILESTONES = [
  { month: 'April', items: [
    { date: 'Apr 10 · Done', title: 'Set Wedding Budget', sub: 'Budget confirmed at EGP 250,000', done: true },
    { date: 'Apr 22 · Done', title: 'Book Venue', sub: 'Alma Hall confirmed', done: true },
  ]},
  { month: 'May', items: [
    { date: 'May 10 · Overdue', title: 'Book Photographer', sub: 'Recommended based on your plan.', done: false },
    { date: 'May 18', title: 'Choose Wedding Venue Decor', sub: 'Style, colors and floral direction', done: false },
    { date: 'May 22', title: 'Finalize Guest List', sub: 'Lock the count vendors will plan around', done: false },
  ]},
  { month: 'June', items: [
    { date: 'Jun 6', title: 'Confirm Final Headcount', sub: 'Caterer needs this 2 weeks out', done: false },
    { date: 'Jun 20', title: 'Wedding Day', sub: 'Everything comes together', done: false, isEventDay: true },
  ]},
];

export default function TimelineScreen() {
  const [tab, setTab] = useState(0);

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.topRow}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={22} color={colors.ink} />
          </TouchableOpacity>
          <Text style={styles.title}>Timeline</Text>
          <Ionicons name="ellipsis-horizontal" size={20} color={colors.ink} />
        </View>

        <View style={styles.segRow}>
          <TouchableOpacity onPress={() => setTab(0)} style={styles.segItem}>
            <Text style={[styles.segText, tab === 0 && styles.segTextActive]}>Timeline</Text>
            {tab === 0 && <View style={styles.segUnderline} />}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setTab(1)} style={styles.segItem}>
            <Text style={[styles.segText, tab === 1 && styles.segTextActive]}>Checklist</Text>
            {tab === 1 && <View style={styles.segUnderline} />}
          </TouchableOpacity>
        </View>

        <View style={styles.countdownCard}>
          <View>
            <Text style={styles.countdownLabel}>Sarah's Wedding</Text>
            <Text style={styles.countdownNum}>63 days left</Text>
          </View>
          <Text style={styles.countdownDate}>June 20, 2025</Text>
        </View>

        {MILESTONES.map((group) => (
          <View key={group.month}>
            <Text style={styles.monthLabel}>{group.month}</Text>
            {group.items.map((item) => (
              <View key={item.title} style={styles.tlItem}>
                <View style={[styles.tlDot, item.done && styles.tlDotDone]} />
                <View style={styles.tlBody}>
                  <Text style={styles.tlDate}>{item.date}</Text>
                  <View style={[styles.tlCard, item.done && styles.tlCardDone]}>
                    <Text style={styles.tlTitle}>{item.title}</Text>
                    <Text style={styles.tlSub}>{item.sub}</Text>
                    {item.isEventDay && (
                      <View style={styles.tlBadge}>
                        <Text style={styles.tlBadgeText}>Event Day</Text>
                      </View>
                    )}
                  </View>
                </View>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.paper },
  scrollContent: { padding: spacing.xl, paddingTop: 60 },

  topRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing.sm },
  title: { fontSize: 17, fontWeight: '700', color: colors.ink },

  segRow: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: colors.line, marginBottom: spacing.md },
  segItem: { flex: 1, alignItems: 'center', paddingBottom: spacing.sm },
  segText: { fontSize: 12.5, fontWeight: '600', color: colors.ash },
  segTextActive: { color: colors.ink },
  segUnderline: { height: 2, backgroundColor: colors.ink, width: '100%', marginTop: 8, borderRadius: 1 },

  countdownCard: { borderWidth: 1, borderColor: colors.line, borderRadius: radius.lg, padding: spacing.md, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing.lg },
  countdownLabel: { fontSize: 12, color: colors.ash, fontWeight: '600' },
  countdownNum: { fontSize: 20, fontWeight: '700', color: colors.ink, marginTop: 2 },
  countdownDate: { fontSize: 11.5, color: colors.ash },

  monthLabel: { fontSize: 12, fontWeight: '700', color: colors.ash, textTransform: 'uppercase', marginTop: spacing.md, marginBottom: spacing.md },

  tlItem: { flexDirection: 'row', gap: spacing.md, marginBottom: spacing.md },
  tlDot: { width: 12, height: 12, borderRadius: 6, borderWidth: 1.6, borderColor: colors.ashLight, marginTop: 4 },
  tlDotDone: { backgroundColor: colors.ink, borderColor: colors.ink },
  tlBody: { flex: 1 },
  tlDate: { fontSize: 11, color: colors.ash, fontWeight: '600', marginBottom: 3 },
  tlCard: { borderWidth: 1, borderColor: colors.line, borderRadius: radius.md, padding: spacing.md },
  tlCardDone: { backgroundColor: colors.mist, borderColor: colors.mist },
  tlTitle: { fontSize: 13.5, fontWeight: '700', color: colors.ink },
  tlSub: { fontSize: 11.5, color: colors.ash, marginTop: 2 },
  tlBadge: { alignSelf: 'flex-start', backgroundColor: colors.ink, borderRadius: 8, paddingHorizontal: 8, paddingVertical: 3, marginTop: spacing.sm },
  tlBadgeText: { fontSize: 10, fontWeight: '700', color: '#fff' },
});