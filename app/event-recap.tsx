import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { colors, radius, spacing, typography } from '../constants/theme';

const VENDORS = [
  { name: 'Alma Hall', type: 'Venue' },
  { name: 'Light Studio', type: 'Photography' },
  { name: 'Blossom Decor', type: 'Decoration' },
  { name: 'Pure Catering', type: 'Catering' },
];

export default function EventRecapScreen() {
  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.topRow}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={22} color={colors.ink} />
          </TouchableOpacity>
          <Text style={styles.title}>Event Recap</Text>
          <Ionicons name="ellipsis-horizontal" size={20} color={colors.ink} />
        </View>

        <View style={styles.hero}>
          <Text style={styles.heroName}>Sarah's Wedding</Text>
          <Text style={styles.heroDate}>June 20, 2025 · Cairo, Egypt</Text>
        </View>

        <View style={styles.statRow}>
          <View style={styles.statCard}><Text style={styles.statNum}>120</Text><Text style={styles.statLabel}>GUESTS</Text></View>
          <View style={styles.statCard}><Text style={styles.statNum}>4</Text><Text style={styles.statLabel}>VENDORS</Text></View>
          <View style={styles.statCard}><Text style={styles.statNum}>96%</Text><Text style={styles.statLabel}>CHECKLIST DONE</Text></View>
        </View>

        <Text style={styles.sectionTitle}>Final Budget</Text>
        <View style={styles.budgetCard}>
          <View style={styles.finalRow}>
            <Text style={styles.finalLabel}>Planned Budget</Text>
            <Text style={styles.finalLabel}>EGP 250,000</Text>
          </View>
          <View style={styles.finalRow}>
            <Text style={styles.finalLabel}>Actual Spent</Text>
            <Text style={styles.finalLabel}>EGP 238,600</Text>
          </View>
          <View style={[styles.finalRow, styles.grandRow]}>
            <Text style={styles.grandLabel}>You saved</Text>
            <Text style={styles.grandLabel}>EGP 11,400</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Rate Your Vendors</Text>
        {VENDORS.map((v) => (
          <View key={v.name} style={styles.vendorRow}>
            <View style={styles.vendorThumb} />
            <View style={{ flex: 1 }}>
              <Text style={styles.vendorName}>{v.name}</Text>
              <Text style={styles.vendorType}>{v.type}</Text>
            </View>
            <TouchableOpacity style={styles.rateBtn} onPress={() => router.push('/write-review')}>
              <Text style={styles.rateBtnText}>Rate</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <View style={styles.footBtn}>
        <TouchableOpacity style={styles.ghostBtn} onPress={() => router.push('/(tabs)/home')}>
          <Text style={styles.ghostBtnText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.paper },
  scrollContent: { padding: spacing.xl, paddingTop: 60 },

  topRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing.md },
  title: { fontSize: 17, fontWeight: '700', color: colors.ink },

  hero: { borderWidth: 1, borderColor: colors.line, borderRadius: radius.lg, padding: spacing.md, alignItems: 'center', marginBottom: spacing.md },
  heroName: { fontSize: 17, fontWeight: '700', color: colors.ink },
  heroDate: { fontSize: 12, color: colors.ash, marginTop: 2 },

  statRow: { flexDirection: 'row', gap: spacing.sm, marginBottom: spacing.lg },
  statCard: { flex: 1, borderWidth: 1, borderColor: colors.line, borderRadius: radius.lg, padding: spacing.md, alignItems: 'center' },
  statNum: { fontSize: 18, fontWeight: '700', color: colors.ink },
  statLabel: { fontSize: 10, color: colors.ash, fontWeight: '600', marginTop: 3 },

  sectionTitle: { fontSize: 13.5, fontWeight: '700', color: colors.ink, marginBottom: spacing.sm },

  budgetCard: { borderWidth: 1, borderColor: colors.line, borderRadius: radius.lg, padding: spacing.md, marginBottom: spacing.lg },
  finalRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 7 },
  finalLabel: { fontSize: 12.5, color: colors.ash },
  grandRow: { borderTopWidth: 1, borderTopColor: colors.line, paddingTop: spacing.sm, marginTop: 3 },
  grandLabel: { fontSize: 14.5, fontWeight: '700', color: colors.ink },

  vendorRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, borderWidth: 1, borderColor: colors.line, borderRadius: radius.md, padding: spacing.md, marginBottom: spacing.sm },
  vendorThumb: { width: 40, height: 40, borderRadius: 10, backgroundColor: colors.mist, borderWidth: 1, borderColor: colors.line },
  vendorName: { fontSize: 12.5, fontWeight: '700', color: colors.ink },
  vendorType: { fontSize: 11, color: colors.ash, marginTop: 1 },
  rateBtn: { borderWidth: 1, borderColor: colors.line, borderRadius: 10, height: 30, paddingHorizontal: spacing.md, alignItems: 'center', justifyContent: 'center' },
  rateBtnText: { fontSize: 11.5, fontWeight: '600', color: colors.ink },

  footBtn: { padding: spacing.xl, paddingTop: spacing.sm },
  ghostBtn: { backgroundColor: colors.mist, borderRadius: radius.md, height: 44, alignItems: 'center', justifyContent: 'center' },
  ghostBtnText: { fontSize: 13.5, fontWeight: '600', color: colors.ink },
});