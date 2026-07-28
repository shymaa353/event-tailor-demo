import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { colors, radius, spacing, typography } from '../constants/theme';

const ROWS = [
  { icon: 'calendar-outline', label: 'EVENT DATE', value: 'June 20, 2025' },
  { icon: 'time-outline', label: 'TIME', value: 'Morning' },
  { icon: 'location-outline', label: 'LOCATION', value: 'Cairo, Egypt' },
  { icon: 'document-text-outline', label: 'NOTES', value: 'No special requests' },
];

export default function BookingReviewScreen() {
  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={22} color={colors.ink} />
        </TouchableOpacity>

        <Text style={styles.title}>Review Booking</Text>

        <View style={styles.vendorCard}>
          <View style={styles.vendorThumb} />
          <View>
            <Text style={styles.vendorTitle}>Elegant Outdoor Setup</Text>
            <Text style={styles.vendorSub}>Standard Package</Text>
            <Text style={styles.vendorPrice}>EGP 25,000</Text>
          </View>
        </View>

        {ROWS.map((r) => (
          <View key={r.label} style={styles.row}>
            <Ionicons name={r.icon as any} size={16} color={colors.ink} />
            <View>
              <Text style={styles.rlabel}>{r.label}</Text>
              <Text style={styles.rvalue}>{r.value}</Text>
            </View>
          </View>
        ))}

        <View style={styles.totals}>
          <View style={styles.totalLine}>
            <Text style={styles.totalLabel}>Package Total</Text>
            <Text style={styles.totalLabel}>EGP 25,000</Text>
          </View>
          <View style={styles.totalLine}>
            <Text style={styles.totalLabel}>Service Fee</Text>
            <Text style={styles.totalLabel}>EGP 1,250</Text>
          </View>
          <View style={[styles.totalLine, styles.grandLine]}>
            <Text style={styles.grandLabel}>Total</Text>
            <Text style={styles.grandLabel}>EGP 26,250</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footBtn}>
        <TouchableOpacity style={styles.primaryBtn} onPress={() => router.push('/booking-payment')}>
          <Text style={styles.primaryBtnText}>Continue to Payment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.paper },
  scrollContent: { padding: spacing.xl, paddingTop: 60 },
  title: { fontSize: typography.displaySize.md, fontWeight: '700', color: colors.ink, marginTop: spacing.md, marginBottom: spacing.lg },

  vendorCard: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, borderWidth: 1, borderColor: colors.line, borderRadius: radius.lg, padding: spacing.md, marginBottom: spacing.md },
  vendorThumb: { width: 50, height: 50, borderRadius: radius.md, backgroundColor: colors.mist, borderWidth: 1, borderColor: colors.line },
  vendorTitle: { fontSize: 13.5, fontWeight: '700', color: colors.ink },
  vendorSub: { fontSize: 11.5, color: colors.ash, marginTop: 1 },
  vendorPrice: { fontSize: 12.5, fontWeight: '700', color: colors.ink, marginTop: 3 },

  row: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, paddingVertical: spacing.sm, borderBottomWidth: 1, borderBottomColor: colors.mist },
  rlabel: { fontSize: 10.5, color: colors.ash, fontWeight: '600' },
  rvalue: { fontSize: 13, fontWeight: '600', color: colors.ink, marginTop: 1 },

  totals: { marginTop: spacing.md },
  totalLine: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 },
  totalLabel: { fontSize: 12.5, color: colors.ash },
  grandLine: { borderTopWidth: 1, borderTopColor: colors.line, paddingTop: spacing.sm, marginTop: 4 },
  grandLabel: { fontSize: 15, fontWeight: '700', color: colors.ink },

  footBtn: { padding: spacing.xl, paddingTop: spacing.sm },
  primaryBtn: { backgroundColor: colors.ink, borderRadius: radius.lg, height: 48, alignItems: 'center', justifyContent: 'center' },
  primaryBtnText: { fontSize: 14.5, fontWeight: '600', color: '#fff' },
});