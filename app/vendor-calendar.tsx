import { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { colors, radius, spacing, typography } from '../constants/theme';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const BLANKS = [null, null, null, null, null];
const DATES = Array.from({ length: 30 }, (_, i) => i + 1);
const BOOKED = [12, 20, 27];

export default function VendorCalendarScreen() {
  const [selected, setSelected] = useState(20);

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.topRow}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={22} color={colors.ink} />
          </TouchableOpacity>
          <Text style={styles.title}>Calendar</Text>
          <View style={{ width: 22 }} />
        </View>

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
              {BOOKED.includes(d) && <View style={[styles.dot, d === selected && styles.dotOnSelected]} />}
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.legendRow}>
          <View style={styles.legendItem}>
            <View style={styles.legendDot} />
            <Text style={styles.legendText}>Booked</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>June 20 — Booked</Text>
        <View style={styles.bookingCard}>
          <View style={styles.bookingAvatar} />
          <View style={{ flex: 1 }}>
            <Text style={styles.bookingName}>Shymaa's Wedding</Text>
            <Text style={styles.bookingSub}>Standard Package · Morning</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.paper },
  scrollContent: { padding: spacing.xl, paddingTop: 60 },

  topRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing.lg },
  title: { fontSize: 17, fontWeight: '700', color: colors.ink },

  calHead: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: spacing.md },
  calMonth: { fontSize: 14.5, fontWeight: '700', color: colors.ink },

  grid: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: spacing.md },
  dow: { width: `${100 / 7}%`, textAlign: 'center', fontSize: 10.5, color: colors.ash, fontWeight: '600', paddingBottom: 6 },
  day: { width: `${100 / 7}%`, alignItems: 'center', paddingVertical: 8, borderRadius: 20 },
  daySelected: { backgroundColor: colors.ink },
  dayText: { fontSize: 13, color: colors.ink, textAlign: 'center' },
  dayTextSelected: { color: '#fff', fontWeight: '700' },
  dot: { width: 4, height: 4, borderRadius: 2, backgroundColor: colors.ink, marginTop: 2 },
  dotOnSelected: { backgroundColor: '#fff' },

  legendRow: { flexDirection: 'row', marginBottom: spacing.lg },
  legendItem: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  legendDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: colors.ink },
  legendText: { fontSize: 11.5, color: colors.ash },

  sectionTitle: { fontSize: 13, fontWeight: '700', color: colors.ink, marginBottom: spacing.sm },
  bookingCard: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, borderWidth: 1, borderColor: colors.line, borderRadius: radius.lg, padding: spacing.md },
  bookingAvatar: { width: 44, height: 44, borderRadius: 22, backgroundColor: colors.mist, borderWidth: 1, borderColor: colors.line },
  bookingName: { fontSize: 13.5, fontWeight: '700', color: colors.ink },
  bookingSub: { fontSize: 11.5, color: colors.ash, marginTop: 1 },
});