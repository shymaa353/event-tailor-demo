import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { colors, radius, spacing, typography } from '../constants/theme';

export default function BookingAvailabilityScreen() {
  return (
    <View style={styles.screen}>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="chevron-back" size={22} color={colors.ink} />
      </TouchableOpacity>

      <Text style={styles.title}>Check Availability</Text>

      <View style={styles.center}>
        <View style={styles.iconCircle}>
          <Ionicons name="calendar-outline" size={32} color={colors.ink} />
        </View>
        <Text style={styles.checking}>Checking availability...</Text>
        <Text style={styles.sub}>This usually takes a few seconds.</Text>

        <View style={styles.policyCard}>
          <Text style={styles.policyTitle}>Vendor Policy</Text>
          {['Free cancellation up to 7 days', '50% advance payment', 'Changes subject to availability'].map((p) => (
            <View key={p} style={styles.policyRow}>
              <Ionicons name="checkmark" size={14} color={colors.ink} />
              <Text style={styles.policyText}>{p}</Text>
            </View>
          ))}
        </View>
      </View>

      <TouchableOpacity style={styles.primaryBtn} onPress={() => router.push('/booking-review')}>
        <Text style={styles.primaryBtnText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.paper, padding: spacing.xl, paddingTop: 60 },
  title: { fontSize: typography.displaySize.md, fontWeight: '700', color: colors.ink, marginTop: spacing.md },

  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  iconCircle: {
    width: 84,
    height: 84,
    borderRadius: 42,
    borderWidth: 1.6,
    borderColor: colors.line,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.lg,
  },
  checking: { fontSize: 15.5, fontWeight: '700', color: colors.ink, marginBottom: 6 },
  sub: { fontSize: 12.5, color: colors.ash, marginBottom: spacing.xl },

  policyCard: { width: '100%', borderWidth: 1, borderColor: colors.line, borderRadius: radius.lg, padding: spacing.md },
  policyTitle: { fontSize: 12, fontWeight: '700', color: colors.ink, marginBottom: spacing.sm },
  policyRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, marginBottom: spacing.sm },
  policyText: { fontSize: 12, color: colors.ink, flex: 1 },

  primaryBtn: { backgroundColor: colors.ink, borderRadius: radius.lg, height: 48, alignItems: 'center', justifyContent: 'center' },
  primaryBtnText: { fontSize: 14.5, fontWeight: '600', color: '#fff' },
});