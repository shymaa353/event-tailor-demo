import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { colors, radius, spacing, typography } from '../constants/theme';

const ITEMS = [
  { icon: 'heart-outline', label: 'EVENT TYPE', value: 'Wedding' },
  { icon: 'calendar-outline', label: 'EVENT DATE', value: 'June 20, 2025' },
  { icon: 'wallet-outline', label: 'BUDGET', value: 'EGP 50,000' },
  { icon: 'people-outline', label: 'GUESTS', value: '150 Guests' },
  { icon: 'location-outline', label: 'LOCATION', value: 'Cairo, Egypt' },
];

export default function CreateEventReviewScreen() {
  return (
    <View style={styles.screen}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
        <Ionicons name="chevron-back" size={22} color={colors.ink} />
      </TouchableOpacity>

      <Text style={styles.title}>Let's review your event</Text>
      <Text style={styles.sub}>Review all details before creating your event.</Text>

      <View style={{ flex: 1, gap: spacing.sm }}>
        {ITEMS.map((item) => (
          <View key={item.label} style={styles.row}>
            <View style={styles.iconBox}>
              <Ionicons name={item.icon as any} size={16} color={colors.ink} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.rowLabel}>{item.label}</Text>
              <Text style={styles.rowValue}>{item.value}</Text>
            </View>
            <Text style={styles.editLink}>Edit</Text>
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.primaryBtn} onPress={() => router.push('/create-event-created')}>
        <Text style={styles.primaryBtnText}>Create My Event</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.paper, padding: spacing.xl, paddingTop: 60 },
  backBtn: { marginBottom: spacing.md, width: 32 },
  title: { fontSize: typography.displaySize.md, fontWeight: '700', color: colors.ink, marginBottom: 6 },
  sub: { fontSize: typography.textSize.sm, color: colors.ash, marginBottom: spacing.lg },

  row: {
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: radius.md,
    padding: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  iconBox: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: colors.mist,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowLabel: { fontSize: 11, color: colors.ash, fontWeight: '600' },
  rowValue: { fontSize: 14, color: colors.ink, fontWeight: '700', marginTop: 2 },
  editLink: { fontSize: 12.5, color: colors.ash, fontWeight: '600' },

  primaryBtn: {
    backgroundColor: colors.ink,
    borderRadius: radius.lg,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.lg,
  },
  primaryBtnText: { fontSize: typography.textSize.lg, fontWeight: '600', color: '#fff' },
});