import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { colors, radius, spacing, typography } from '../constants/theme';

const CATEGORIES = [
  { icon: 'business-outline', name: 'Venue', allocated: 'EGP 60,000', paid: 'EGP 60,000', pct: 40, fill: 1 },
  { icon: 'restaurant-outline', name: 'Catering', allocated: 'EGP 45,000', paid: 'EGP 20,000', pct: 30, fill: 0.44 },
  { icon: 'camera-outline', name: 'Photography', allocated: 'EGP 20,000', paid: 'EGP 5,000', pct: 13, fill: 0.25 },
  { icon: 'flower-outline', name: 'Decor', allocated: 'EGP 18,000', paid: 'EGP 2,000', pct: 12, fill: 0.11 },
  { icon: 'musical-notes-outline', name: 'Entertainment', allocated: 'EGP 8,000', paid: 'EGP 0', pct: 5, fill: 0 },
];

export default function BudgetScreen() {
  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.topRow}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={22} color={colors.ink} />
          </TouchableOpacity>
          <Text style={styles.title}>Budget Plan</Text>
          <Ionicons name="ellipsis-horizontal" size={20} color={colors.ink} />
        </View>

        <View style={styles.budCards}>
          <View style={styles.budCard}>
            <Text style={styles.budLabel}>Wedding Budget</Text>
            <Text style={styles.budValue}>EGP 250,000</Text>
            <View style={styles.editChip}>
              <Text style={styles.editChipText}>✎ Edit Budget</Text>
            </View>
          </View>
          <View style={styles.budCard}>
            <Text style={styles.budLabel}>Remaining</Text>
            <Text style={styles.budValue}>EGP 87,500</Text>
            <Text style={styles.allocText}>63% allocated</Text>
            <View style={styles.progressTrack}>
              <View style={[styles.progressFill, { width: '63%' }]} />
            </View>
          </View>
        </View>

        <View style={styles.statusCard}>
          <Ionicons name="location-outline" size={22} color={colors.ink} />
          <View style={{ flex: 1 }}>
            <Text style={styles.statusTitle}>You're on track! Keep going.</Text>
            <Text style={styles.statusSub}>Photography budget is slightly below average.</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Budget Breakdown</Text>
        {CATEGORIES.map((c) => (
          <View key={c.name} style={styles.catRow}>
            <View style={styles.catIcon}>
              <TouchableOpacity onPress={() => router.push('/event-settings')}>
  <Ionicons name="ellipsis-horizontal" size={20} color={colors.ink} />
</TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.catName}>{c.name}</Text>
              <Text style={styles.catSub}>Allocated {c.allocated} · Paid {c.paid}</Text>
              <View style={styles.catTrack}>
                <View style={[styles.catFill, { width: `${c.fill * 100}%` }]} />
              </View>
            </View>
            <Text style={styles.catPct}>{c.pct}%</Text>
          </View>
        ))}

        <View style={styles.payRow}>
          <View style={styles.payDate}>
            <Text style={styles.payMonth}>MAY</Text>
            <Text style={styles.payDay}>10</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.payTitle}>Venue Deposit</Text>
            <Text style={styles.paySub}>First payment · Alma Hall</Text>
          </View>
          <View>
            <Text style={styles.payAmt}>EGP 15,000</Text>
            <Text style={styles.payDue}>Due in 4 days</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footBtn}>
        <TouchableOpacity style={styles.primaryBtn} onPress={() => router.push('/book-venue')}>
          <Text style={styles.primaryBtnText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.paper },
  scrollContent: { padding: spacing.xl, paddingTop: 60 },

  topRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing.lg },
  title: { fontSize: 17, fontWeight: '700', color: colors.ink },

  budCards: { flexDirection: 'row', gap: spacing.sm, marginBottom: spacing.md },
  budCard: { flex: 1, borderWidth: 1, borderColor: colors.line, borderRadius: radius.lg, padding: spacing.md },
  budLabel: { fontSize: 11, color: colors.ash, fontWeight: '600', marginBottom: 5 },
  budValue: { fontSize: 15, fontWeight: '700', color: colors.ink },
  editChip: { marginTop: 9, borderWidth: 1, borderColor: colors.line, borderRadius: 9, paddingHorizontal: 10, paddingVertical: 4, alignSelf: 'flex-start' },
  editChipText: { fontSize: 10.5, fontWeight: '600', color: colors.ink },
  allocText: { fontSize: 10, color: colors.ash, marginTop: 9, marginBottom: 4 },
  progressTrack: { height: 6, backgroundColor: colors.mist, borderRadius: radius.sm, overflow: 'hidden' },
  progressFill: { height: '100%', backgroundColor: colors.ink, borderRadius: radius.sm },

  statusCard: { flexDirection: 'row', gap: spacing.md, alignItems: 'center', borderWidth: 1, borderColor: colors.line, borderRadius: radius.lg, padding: spacing.md, marginBottom: spacing.lg },
  statusTitle: { fontSize: 12.5, fontWeight: '700', color: colors.ink, marginBottom: 3 },
  statusSub: { fontSize: 11, color: colors.ash },

  sectionTitle: { fontSize: 13.5, fontWeight: '700', color: colors.ink, marginBottom: spacing.md },

  catRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, marginBottom: spacing.md },
  catIcon: { width: 34, height: 34, borderRadius: 10, backgroundColor: colors.mist, alignItems: 'center', justifyContent: 'center' },
  catName: { fontSize: 13, fontWeight: '700', color: colors.ink },
  catSub: { fontSize: 10.5, color: colors.ash, marginVertical: 2 },
  catTrack: { height: 4, backgroundColor: colors.mist, borderRadius: 3, overflow: 'hidden' },
  catFill: { height: '100%', backgroundColor: colors.ink, borderRadius: 3 },
  catPct: { fontSize: 11, fontWeight: '700', color: colors.ink },

  payRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, borderWidth: 1, borderColor: colors.line, borderRadius: radius.md, padding: spacing.md, marginTop: spacing.sm },
  payDate: { width: 38, height: 38, borderRadius: 10, backgroundColor: colors.mist, alignItems: 'center', justifyContent: 'center' },
  payMonth: { fontSize: 8, fontWeight: '700', color: colors.ash, textTransform: 'uppercase' },
  payDay: { fontSize: 13, fontWeight: '700', color: colors.ink },
  payTitle: { fontSize: 12.5, fontWeight: '700', color: colors.ink },
  paySub: { fontSize: 10.5, color: colors.ash, marginTop: 1 },
  payAmt: { fontSize: 12.5, fontWeight: '700', color: colors.ink, textAlign: 'right' },
  payDue: { fontSize: 10, color: colors.ash, textAlign: 'right' },

  footBtn: { padding: spacing.xl, paddingTop: spacing.sm },
  primaryBtn: { backgroundColor: colors.ink, borderRadius: radius.lg, height: 48, alignItems: 'center', justifyContent: 'center' },
  primaryBtnText: { fontSize: 14.5, fontWeight: '600', color: '#fff' },
});