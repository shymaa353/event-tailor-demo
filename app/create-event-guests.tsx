import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { colors, radius, spacing, typography } from '../constants/theme';

const RANGES = [
  { label: 'Small', sub: 'Up to 100 guests' },
  { label: 'Medium', sub: '100–500 guests' },
  { label: 'Huge', sub: '500+ guests' },
  { label: 'Not sure yet', sub: null },
];

export default function CreateEventGuestsScreen() {
  const [selected, setSelected] = useState('Medium');

  return (
    <View style={styles.screen}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
        <Ionicons name="chevron-back" size={22} color={colors.ink} />
      </TouchableOpacity>

      <Text style={styles.title}>Approx. number of guests?</Text>
      <Text style={styles.sub}>This helps vendors prepare better for you.</Text>
      <Text style={styles.label}>GUESTS RANGE</Text>

      <View style={styles.list}>
        {RANGES.map((r) => (
          <TouchableOpacity key={r.label} style={styles.row} onPress={() => setSelected(r.label)}>
            <View>
              <Text style={styles.rowLabel}>{r.label}</Text>
              {r.sub && <Text style={styles.rowSub}>{r.sub}</Text>}
            </View>
            <View style={[styles.radioCircle, selected === r.label && styles.radioCircleOn]}>
              {selected === r.label && <View style={styles.radioDot} />}
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.dots}>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <View key={i} style={[styles.dot, i === 3 && styles.dotActive]} />
        ))}
      </View>

      <TouchableOpacity style={styles.primaryBtn} onPress={() => router.push('/create-event-location')}>
        <Text style={styles.primaryBtnText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.paper, padding: spacing.xl, paddingTop: 60 },
  backBtn: { marginBottom: spacing.md, width: 32 },
  title: { fontSize: typography.displaySize.md, fontWeight: '700', color: colors.ink, marginBottom: 6 },
  sub: { fontSize: typography.textSize.sm, color: colors.ash, marginBottom: spacing.lg },
  label: { fontSize: 11.5, fontWeight: '700', color: colors.ash, marginBottom: spacing.sm },

  list: { gap: spacing.sm, flex: 1 },
  row: {
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: radius.md,
    paddingVertical: 13,
    paddingHorizontal: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowLabel: { fontSize: 14, fontWeight: '600', color: colors.ink },
  rowSub: { fontSize: 11.5, color: colors.ash, marginTop: 2 },
  radioCircle: {
    width: 19,
    height: 19,
    borderRadius: 10,
    borderWidth: 1.6,
    borderColor: colors.ashLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioCircleOn: { borderColor: colors.ink },
  radioDot: { width: 10, height: 10, borderRadius: 5, backgroundColor: colors.ink },

  dots: { flexDirection: 'row', justifyContent: 'center', gap: 6, marginVertical: spacing.lg },
  dot: { width: 6, height: 6, borderRadius: 3, backgroundColor: colors.ashLight },
  dotActive: { width: 16, backgroundColor: colors.ink },

  primaryBtn: {
    backgroundColor: colors.ink,
    borderRadius: radius.lg,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryBtnText: { fontSize: typography.textSize.lg, fontWeight: '600', color: '#fff' },
});