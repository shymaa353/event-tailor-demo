import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { colors, radius, spacing, typography } from '../constants/theme';

const LOCATIONS = ['Cairo, Egypt', 'Giza, Egypt', 'Alexandria, Egypt', 'Hurghada, Red Sea', 'Sharm El Sheikh, Sinai'];

export default function CreateEventLocationScreen() {
  const [selected, setSelected] = useState('Cairo, Egypt');

  return (
    <View style={styles.screen}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
        <Ionicons name="chevron-back" size={22} color={colors.ink} />
      </TouchableOpacity>

      <Text style={styles.title}>Where is your event?</Text>
      <Text style={styles.sub}>Choose the city or location of your event.</Text>

      <View style={styles.searchField}>
        <Ionicons name="search-outline" size={16} color={colors.ash} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search location"
          placeholderTextColor={colors.ash}
        />
      </View>

      <Text style={styles.label}>POPULAR LOCATIONS</Text>

      <View style={{ flex: 1 }}>
        {LOCATIONS.map((loc) => (
          <TouchableOpacity key={loc} style={styles.locRow} onPress={() => setSelected(loc)}>
            <Ionicons
              name="location-outline"
              size={16}
              color={selected === loc ? colors.ink : colors.ash}
            />
            <Text style={[styles.locLabel, selected === loc && styles.locLabelSelected]}>{loc}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.dots}>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <View key={i} style={[styles.dot, i === 4 && styles.dotActive]} />
        ))}
      </View>

      <TouchableOpacity style={styles.primaryBtn} onPress={() => router.push('/create-event-review')}>
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

  searchField: {
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: radius.md,
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    paddingHorizontal: spacing.md,
    marginBottom: spacing.lg,
  },
  searchInput: { flex: 1, fontSize: 13.5, color: colors.ink },

  label: { fontSize: 11.5, fontWeight: '700', color: colors.ash, marginBottom: spacing.sm },

  locRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, paddingVertical: spacing.md },
  locLabel: { fontSize: 14, fontWeight: '600', color: colors.ink },
  locLabelSelected: { color: colors.ink, fontWeight: '700' },

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