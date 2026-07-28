import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { colors, radius, spacing, typography } from '../constants/theme';

const QUICK_ACTIONS = [
  { icon: 'checkbox-outline', label: 'Checklist', route: '/checklist' },
  { icon: 'wallet-outline', label: 'Budget', route: '/budget' },
  { icon: 'calendar-outline', label: 'Timeline', route: '/timeline' },
  { icon: 'people-outline', label: 'Vendors', route: '/book-venue' },
];

export default function EventOverviewScreen() {
  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Sarah's Wedding</Text>
          <Ionicons name="notifications-outline" size={20} color={colors.ink} />
        </View>
        <Text style={styles.meta}>June 20, 2025 · 120 Guests{'\n'}Cairo, Egypt</Text>

        <View style={styles.img} />

        <View style={styles.progressCard}>
          <Text style={styles.progressLabel}>Planning Progress</Text>
          <Text style={styles.progressPct}>65%</Text>
          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: '65%' }]} />
          </View>
        </View>

        <Text style={styles.sectionTitle}>Next Up</Text>
        <TouchableOpacity style={styles.nextUpCard} onPress={() => router.push('/budget')}>
          <View>
            <Text style={styles.nextUpTitle}>Review budget</Text>
            <Text style={styles.nextUpSub}>Today</Text>
          </View>
          <Ionicons name="chevron-forward" size={16} color={colors.ash} />
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.qaGrid}>
          {QUICK_ACTIONS.map((qa) => (
            <TouchableOpacity
              key={qa.label}
              style={styles.qaItem}
              onPress={() => router.push(qa.route as any)}
            >
              <Ionicons name={qa.icon as any} size={18} color={colors.ink} />
              <Text style={styles.qaLabel}>{qa.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.paper },
  scrollContent: { padding: spacing.xl, paddingTop: 60 },

  titleRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  title: { fontSize: typography.displaySize.md, fontWeight: '700', color: colors.ink },
  meta: { fontSize: 12.5, color: colors.ash, lineHeight: 19, marginTop: 4, marginBottom: spacing.md },

  img: { width: '100%', height: 130, borderRadius: radius.lg, backgroundColor: colors.mist, borderWidth: 1, borderColor: colors.line, marginBottom: spacing.md },

  progressCard: { borderWidth: 1, borderColor: colors.line, borderRadius: radius.lg, padding: spacing.md, marginBottom: spacing.lg },
  progressLabel: { fontSize: 12.5, color: colors.ash, fontWeight: '600', marginBottom: 6 },
  progressPct: { fontSize: 24, fontWeight: '700', color: colors.ink, marginBottom: spacing.sm },
  progressTrack: { height: 6, backgroundColor: colors.mist, borderRadius: radius.sm, overflow: 'hidden' },
  progressFill: { height: '100%', backgroundColor: colors.ink, borderRadius: radius.sm },

  sectionTitle: { fontSize: 13.5, fontWeight: '700', color: colors.ink, marginBottom: spacing.sm },

  nextUpCard: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderWidth: 1, borderColor: colors.line, borderRadius: radius.lg, padding: spacing.md, marginBottom: spacing.lg },
  nextUpTitle: { fontSize: 13.5, fontWeight: '700', color: colors.ink },
  nextUpSub: { fontSize: 11.5, color: colors.ash, marginTop: 2 },

  qaGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
  qaItem: { width: '47%', borderWidth: 1, borderColor: colors.line, borderRadius: radius.lg, alignItems: 'center', justifyContent: 'center', gap: 7, paddingVertical: spacing.md },
  qaLabel: { fontSize: 11, fontWeight: '600', color: colors.ink },
});