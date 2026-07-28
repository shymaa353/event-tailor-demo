import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { colors, radius, spacing, typography } from '../constants/theme';

const DETAILS = [
  { k: 'Event Name', v: "Sarah's Wedding" },
  { k: 'Date', v: 'June 20, 2025' },
  { k: 'Location', v: 'Cairo, Egypt' },
  { k: 'Guest Count', v: '120 Guests' },
  { k: 'Budget', v: 'EGP 250,000' },
];

const PREFERENCES = [
  { k: 'Currency', v: 'EGP' },
  { k: 'Time Zone', v: '(GMT+2) Cairo' },
  { k: 'Notifications', v: 'On' },
  { k: 'Privacy', v: 'Private' },
];

export default function EventSettingsScreen() {
  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.topRow}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={22} color={colors.ink} />
          </TouchableOpacity>
          <Text style={styles.title}>Event Settings</Text>
          <Ionicons name="ellipsis-horizontal" size={20} color={colors.ink} />
        </View>

        <View style={styles.sectHeadRow}>
          <Text style={styles.sectLabel}>Event Details</Text>
          <Text style={styles.editLink}>Edit</Text>
        </View>
        <View style={styles.list}>
          {DETAILS.map((d, i) => (
            <View key={d.k} style={[styles.row, i === DETAILS.length - 1 && styles.rowLast]}>
              <Text style={styles.rowKey}>{d.k}</Text>
              <Text style={styles.rowValue}>{d.v}</Text>
            </View>
          ))}
        </View>

        <Text style={[styles.sectLabel, { marginTop: spacing.lg }]}>Preferences</Text>
        <View style={styles.list}>
          {PREFERENCES.map((p, i) => (
            <View key={p.k} style={[styles.row, i === PREFERENCES.length - 1 && styles.rowLast]}>
              <Text style={styles.rowKey}>{p.k}</Text>
              <Text style={styles.rowValue}>{p.v}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.footBtn}>
        <TouchableOpacity style={styles.primaryBtn}>
          <Text style={styles.primaryBtnText}>Edit event</Text>
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

  sectHeadRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: spacing.sm },
  sectLabel: { fontSize: 12, fontWeight: '700', color: colors.ash, textTransform: 'uppercase' },
  editLink: { fontSize: 11.5, fontWeight: '600', color: colors.ink },

  list: { borderWidth: 1, borderColor: colors.line, borderRadius: radius.lg, overflow: 'hidden' },
  row: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: spacing.md, paddingHorizontal: spacing.md, borderBottomWidth: 1, borderBottomColor: colors.mist },
  rowLast: { borderBottomWidth: 0 },
  rowKey: { fontSize: 12.5, color: colors.ash, fontWeight: '500' },
  rowValue: { fontSize: 12.5, color: colors.ink, fontWeight: '700' },

  footBtn: { padding: spacing.xl, paddingTop: spacing.sm },
  primaryBtn: { backgroundColor: colors.ink, borderRadius: radius.lg, height: 48, alignItems: 'center', justifyContent: 'center' },
  primaryBtnText: { fontSize: 14.5, fontWeight: '600', color: '#fff' },
});