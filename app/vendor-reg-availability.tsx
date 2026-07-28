import { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { colors, radius, spacing, typography } from '../constants/theme';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function VendorRegAvailabilityScreen() {
  const [selectedDays, setSelectedDays] = useState<string[]>(['Fri', 'Sat', 'Sun']);

  const toggleDay = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={22} color={colors.ink} />
        </TouchableOpacity>

        <Text style={styles.title}>When are you available?</Text>
        <Text style={styles.sub}>Couples will only see you for dates you're open — you can change this anytime.</Text>

        <Text style={styles.label}>Available Days</Text>
        <View style={styles.dayRow}>
          {DAYS.map((d) => (
            <TouchableOpacity
              key={d}
              style={[styles.dayChip, selectedDays.includes(d) && styles.dayChipSelected]}
              onPress={() => toggleDay(d)}
            >
              <Text style={[styles.dayText, selectedDays.includes(d) && styles.dayTextSelected]}>{d}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.infoCard}>
          <Ionicons name="information-circle-outline" size={18} color={colors.ink} />
          <Text style={styles.infoText}>
            You'll get a request for each booking — you can accept or decline based on your actual calendar.
          </Text>
        </View>

        <View style={styles.dots}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={[styles.dot, styles.dotActive]} />
        </View>

        <TouchableOpacity style={styles.primaryBtn} onPress={() => router.push('/vendor-reg-complete')}>
          <Text style={styles.primaryBtnText}>Finish Setup</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.paper },
  scrollContent: { padding: spacing.xl, paddingTop: 60 },
  title: { fontSize: typography.displaySize.md, fontWeight: '700', color: colors.ink, marginTop: spacing.md, marginBottom: 6 },
  sub: { fontSize: 12.5, color: colors.ash, lineHeight: 18, marginBottom: spacing.xl },

  label: { fontSize: 11.5, fontWeight: '700', color: colors.ash, textTransform: 'uppercase', marginBottom: spacing.sm },
  dayRow: { flexDirection: 'row', gap: spacing.sm, marginBottom: spacing.xl },
  dayChip: { flex: 1, borderWidth: 1, borderColor: colors.line, borderRadius: radius.md, height: 46, alignItems: 'center', justifyContent: 'center' },
  dayChipSelected: { backgroundColor: colors.ink, borderColor: colors.ink },
  dayText: { fontSize: 12, fontWeight: '600', color: colors.ink },
  dayTextSelected: { color: '#fff' },

  infoCard: { flexDirection: 'row', gap: spacing.sm, backgroundColor: colors.mist, borderRadius: radius.lg, padding: spacing.md },
  infoText: { flex: 1, fontSize: 12, color: colors.ink, lineHeight: 18 },

  dots: { flexDirection: 'row', justifyContent: 'center', gap: 6, marginVertical: spacing.lg },
  dot: { width: 6, height: 6, borderRadius: 3, backgroundColor: colors.ashLight },
  dotActive: { width: 16, backgroundColor: colors.ink },

  primaryBtn: { backgroundColor: colors.ink, borderRadius: radius.lg, height: 50, alignItems: 'center', justifyContent: 'center' },
  primaryBtnText: { fontSize: 14.5, fontWeight: '600', color: '#fff' },
});