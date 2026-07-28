import { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { colors, radius, spacing, typography } from '../constants/theme';

const CATEGORIES = ['Venue', 'Photography', 'Catering', 'Decoration', 'Entertainment'];

export default function VendorRegBusinessScreen() {
  const [category, setCategory] = useState('Photography');

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={22} color={colors.ink} />
        </TouchableOpacity>

        <Text style={styles.title}>Tell us about your business</Text>
        <Text style={styles.sub}>This is what couples will see first.</Text>

        <Text style={styles.label}>Business Name</Text>
        <TextInput style={styles.field} placeholder="e.g. Alma Hall" placeholderTextColor={colors.ash} />

        <Text style={styles.label}>Category</Text>
        <View style={styles.chipWrap}>
          {CATEGORIES.map((c) => (
            <TouchableOpacity
              key={c}
              style={[styles.chip, category === c && styles.chipSelected]}
              onPress={() => setCategory(c)}
            >
              <Text style={[styles.chipText, category === c && styles.chipTextSelected]}>{c}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>Location</Text>
        <TextInput style={styles.field} placeholder="City, Egypt" placeholderTextColor={colors.ash} />

        <Text style={styles.label}>Business Description</Text>
        <TextInput
          style={styles.textarea}
          placeholder="Tell couples what makes your business special..."
          placeholderTextColor={colors.ash}
          multiline
        />

        <View style={styles.dots}>
          <View style={[styles.dot, styles.dotActive]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        <TouchableOpacity style={styles.primaryBtn} onPress={() => router.push('/vendor-reg-services')}>
          <Text style={styles.primaryBtnText}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.paper },
  scrollContent: { padding: spacing.xl, paddingTop: 60 },
  title: { fontSize: typography.displaySize.md, fontWeight: '700', color: colors.ink, marginTop: spacing.md, marginBottom: 6 },
  sub: { fontSize: 12.5, color: colors.ash, marginBottom: spacing.lg },

  label: { fontSize: 11.5, fontWeight: '700', color: colors.ash, textTransform: 'uppercase', marginBottom: spacing.sm },
  field: { borderWidth: 1, borderColor: colors.line, borderRadius: radius.md, height: 48, paddingHorizontal: spacing.md, fontSize: 14, color: colors.ink, marginBottom: spacing.lg },
  textarea: { borderWidth: 1, borderColor: colors.line, borderRadius: radius.md, padding: spacing.md, minHeight: 90, fontSize: 13, color: colors.ink, textAlignVertical: 'top', marginBottom: spacing.lg },

  chipWrap: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm, marginBottom: spacing.lg },
  chip: { borderWidth: 1, borderColor: colors.line, borderRadius: 20, paddingHorizontal: spacing.md, paddingVertical: 9 },
  chipSelected: { backgroundColor: colors.ink, borderColor: colors.ink },
  chipText: { fontSize: 12.5, fontWeight: '600', color: colors.ink },
  chipTextSelected: { color: '#fff' },

  dots: { flexDirection: 'row', justifyContent: 'center', gap: 6, marginVertical: spacing.lg },
  dot: { width: 6, height: 6, borderRadius: 3, backgroundColor: colors.ashLight },
  dotActive: { width: 16, backgroundColor: colors.ink },

  primaryBtn: { backgroundColor: colors.ink, borderRadius: radius.lg, height: 50, alignItems: 'center', justifyContent: 'center' },
  primaryBtnText: { fontSize: 14.5, fontWeight: '600', color: '#fff' },
});