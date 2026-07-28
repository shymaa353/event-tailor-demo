import { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { colors, radius, spacing, typography } from '../constants/theme';

const TIMES = ['Morning', 'Afternoon', 'Evening'];

export default function BookingDateTimeScreen() {
  const [time, setTime] = useState('Morning');

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={22} color={colors.ink} />
        </TouchableOpacity>

        <Text style={styles.title}>Select Date & Time</Text>

        <Text style={styles.label}>EVENT DATE</Text>
        <View style={styles.fieldRow}>
          <Text style={styles.fieldText}>June 20, 2025</Text>
          <Ionicons name="calendar-outline" size={16} color={colors.ash} />
        </View>

        <Text style={styles.label}>PREFERRED TIME</Text>
        <View style={styles.chipRow}>
          {TIMES.map((t) => (
            <TouchableOpacity
              key={t}
              style={[styles.chip, time === t && styles.chipSelected]}
              onPress={() => setTime(t)}
            >
              <Text style={[styles.chipText, time === t && styles.chipTextSelected]}>{t}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>SETUP TIME (OPTIONAL)</Text>
        <View style={styles.fieldRow}>
          <Text style={styles.fieldPlaceholder}>Select time</Text>
          <Ionicons name="chevron-down" size={14} color={colors.ash} />
        </View>

        <Text style={styles.label}>NOTES FOR VENDOR (OPTIONAL)</Text>
        <TextInput
          style={styles.textarea}
          placeholder="Add any special requests..."
          placeholderTextColor={colors.ash}
          multiline
        />
      </ScrollView>

      <View style={styles.footBtn}>
        <TouchableOpacity style={styles.primaryBtn} onPress={() => router.push('/booking-availability')}>
          <Text style={styles.primaryBtnText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.paper },
  scrollContent: { padding: spacing.xl, paddingTop: 60 },

  title: { fontSize: typography.displaySize.md, fontWeight: '700', color: colors.ink, marginTop: spacing.md, marginBottom: spacing.xl },
  label: { fontSize: 11, fontWeight: '700', color: colors.ash, marginBottom: spacing.sm },

  fieldRow: {
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: radius.md,
    height: 48,
    paddingHorizontal: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.lg,
  },
  fieldText: { fontSize: 14, fontWeight: '600', color: colors.ink },
  fieldPlaceholder: { fontSize: 13.5, color: colors.ash },

  chipRow: { flexDirection: 'row', gap: spacing.sm, marginBottom: spacing.lg },
  chip: { flex: 1, borderWidth: 1, borderColor: colors.line, borderRadius: radius.md, paddingVertical: 11, alignItems: 'center' },
  chipSelected: { backgroundColor: colors.ink, borderColor: colors.ink },
  chipText: { fontSize: 12.5, fontWeight: '600', color: colors.ink },
  chipTextSelected: { color: '#fff' },

  textarea: {
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: radius.md,
    padding: spacing.md,
    minHeight: 76,
    fontSize: 13,
    color: colors.ink,
    textAlignVertical: 'top',
  },

  footBtn: { padding: spacing.xl, paddingTop: spacing.sm },
  primaryBtn: { backgroundColor: colors.ink, borderRadius: radius.lg, height: 48, alignItems: 'center', justifyContent: 'center' },
  primaryBtnText: { fontSize: 14.5, fontWeight: '600', color: '#fff' },
});