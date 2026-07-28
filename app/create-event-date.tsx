import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { colors, radius, spacing, typography } from '../constants/theme';

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
// June 2025 starts on a Sunday, so we pad with 6 blanks before day 1.
const BLANKS = [null, null, null, null, null, null];
const DATES = Array.from({ length: 30 }, (_, i) => i + 1);

export default function CreateEventDateScreen() {
  const [selected, setSelected] = useState(20);

  return (
    <View style={styles.screen}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
        <Ionicons name="chevron-back" size={22} color={colors.ink} />
      </TouchableOpacity>

      <Text style={styles.title}>When is your event?</Text>
      <Text style={styles.sub}>Select the date of your event.</Text>

      <View style={styles.calHead}>
        <Ionicons name="chevron-back" size={16} color={colors.ash} />
        <Text style={styles.calMonth}>June 2025</Text>
        <Ionicons name="chevron-forward" size={16} color={colors.ash} />
      </View>

      <View style={styles.grid}>
        {DAYS.map((d) => (
          <Text key={d} style={styles.dow}>{d}</Text>
        ))}
        {BLANKS.map((_, i) => (
          <View key={`b${i}`} style={styles.day} />
        ))}
        {DATES.map((d) => (
          <TouchableOpacity
            key={d}
            style={[styles.day, d === selected && styles.daySelected]}
            onPress={() => setSelected(d)}
          >
            <Text style={[styles.dayText, d === selected && styles.dayTextSelected]}>{d}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.dots}>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <View key={i} style={[styles.dot, i === 1 && styles.dotActive]} />
        ))}
      </View>

      <TouchableOpacity style={styles.primaryBtn} onPress={() => router.push('/create-event-budget')}>
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

  calHead: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: spacing.md },
  calMonth: { fontSize: 14.5, fontWeight: '700', color: colors.ink },

  grid: { flexDirection: 'row', flexWrap: 'wrap' },
  dow: { width: `${100 / 7}%`, textAlign: 'center', fontSize: 10.5, color: colors.ash, fontWeight: '600', paddingBottom: 6 },
  day: { width: `${100 / 7}%`, alignItems: 'center', paddingVertical: 8, borderRadius: 20 },
  daySelected: { backgroundColor: colors.ink },
  dayText: { fontSize: 13, color: colors.ink, textAlign: 'center' },
  dayTextSelected: { color: '#fff', fontWeight: '700' },

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