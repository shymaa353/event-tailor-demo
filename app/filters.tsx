import { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { colors, radius, spacing, typography } from '../constants/theme';

const RATINGS = ['4+', '4.5+', '5'];

export default function FiltersScreen() {
  const [rating, setRating] = useState<string | null>(null);
  const [available, setAvailable] = useState(false);

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.topRow}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={22} color={colors.ink} />
          </TouchableOpacity>
          <Text style={styles.title}>Filters</Text>
          <TouchableOpacity>
            <Text style={styles.clearLink}>Clear all</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Category</Text>
        <View style={styles.dropdown}>
          <Text style={styles.dropdownText}>Photography</Text>
          <Ionicons name="chevron-down" size={14} color={colors.ash} />
        </View>

        <Text style={styles.label}>Location</Text>
        <View style={styles.dropdown}>
          <Text style={styles.dropdownText}>Cairo, Egypt</Text>
          <Ionicons name="chevron-down" size={14} color={colors.ash} />
        </View>

        <Text style={styles.label}>Price Range (EGP)</Text>
        <View style={styles.sliderTrack}>
          <View style={styles.sliderFill} />
        </View>
        <View style={styles.sliderVals}>
          <Text style={styles.sliderText}>EGP 1,000</Text>
          <Text style={styles.sliderText}>EGP 50,000+</Text>
        </View>

        <Text style={styles.label}>Rating</Text>
        <View style={styles.chipRow}>
          {RATINGS.map((r) => (
            <TouchableOpacity
              key={r}
              style={[styles.chip, rating === r && styles.chipActive]}
              onPress={() => setRating(rating === r ? null : r)}
            >
              <Ionicons name="star" size={12} color={rating === r ? '#fff' : colors.ink} />
              <Text style={[styles.chipText, rating === r && styles.chipTextActive]}>{r}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>Availability</Text>
        <TouchableOpacity style={styles.checkRow} onPress={() => setAvailable(!available)}>
          <View style={[styles.checkbox, available && styles.checkboxOn]}>
            {available && <Ionicons name="checkmark" size={13} color="#fff" />}
          </View>
          <Text style={styles.checkLabel}>Available on my event date</Text>
        </TouchableOpacity>

        <Text style={styles.label}>Sort By</Text>
        <View style={styles.dropdown}>
          <Text style={styles.dropdownText}>Most Recommended</Text>
          <Ionicons name="chevron-down" size={14} color={colors.ash} />
        </View>
      </ScrollView>

      <View style={styles.footBtn}>
        <TouchableOpacity style={styles.primaryBtn} onPress={() => router.push('/search-results')}>
          <Text style={styles.primaryBtnText}>Show Results (42)</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.paper },
  scrollContent: { padding: spacing.xl, paddingTop: 60 },

  topRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing.xl },
  title: { fontSize: 17, fontWeight: '700', color: colors.ink },
  clearLink: { fontSize: 13, color: colors.ash, fontWeight: '600' },

  label: { fontSize: 13.5, fontWeight: '700', color: colors.ink, marginBottom: spacing.sm, marginTop: spacing.sm },
  dropdown: { borderWidth: 1, borderColor: colors.line, borderRadius: radius.md, height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: spacing.md, marginBottom: spacing.lg },
  dropdownText: { fontSize: 14, color: colors.ink, fontWeight: '500' },

  sliderTrack: { height: 4, backgroundColor: colors.line, borderRadius: 3, marginTop: spacing.md, marginBottom: spacing.sm, position: 'relative' },
  sliderFill: { position: 'absolute', left: '15%', right: '8%', top: 0, height: '100%', backgroundColor: colors.ink, borderRadius: 3 },
  sliderVals: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: spacing.lg },
  sliderText: { fontSize: 12.5, color: colors.ink, fontWeight: '600' },

  chipRow: { flexDirection: 'row', gap: spacing.sm, marginBottom: spacing.lg },
  chip: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 5, borderWidth: 1, borderColor: colors.line, borderRadius: radius.md, height: 44 },
  chipActive: { backgroundColor: colors.ink, borderColor: colors.ink },
  chipText: { fontSize: 12.5, fontWeight: '600', color: colors.ink },
  chipTextActive: { color: '#fff' },

  checkRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, marginBottom: spacing.lg },
  checkbox: { width: 20, height: 20, borderRadius: 6, borderWidth: 1.6, borderColor: colors.line, alignItems: 'center', justifyContent: 'center' },
  checkboxOn: { backgroundColor: colors.ink, borderColor: colors.ink },
  checkLabel: { fontSize: 13.5, color: colors.ink, fontWeight: '500' },

  footBtn: { padding: spacing.xl, paddingTop: spacing.sm },
  primaryBtn: { backgroundColor: colors.ink, borderRadius: radius.lg, height: 48, alignItems: 'center', justifyContent: 'center' },
  primaryBtnText: { fontSize: 14.5, fontWeight: '600', color: '#fff' },
});