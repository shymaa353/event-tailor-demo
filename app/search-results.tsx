import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { colors, radius, spacing, typography } from '../constants/theme';

const RESULTS = [
  { name: 'Light Studio', meta: 'Photography · Maadi, Cairo', rating: '4.8 (120)', price: '$$' },
  { name: 'Ali Photography', meta: 'Photography · Zamalek, Cairo', rating: '4.6 (84)', price: '$$' },
  { name: 'Noor Studio', meta: 'Photography · New Cairo', rating: '4.9 (203)', price: '$$$' },
  { name: 'Frame & Co.', meta: 'Photography · Heliopolis', rating: '4.5 (61)', price: '$' },
];

export default function SearchResultsScreen() {
  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.searchRow}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={20} color={colors.ink} />
          </TouchableOpacity>
          <View style={styles.searchField}>
            <Ionicons name="search-outline" size={15} color={colors.ink} />
            <TextInput
              style={styles.searchInput}
              defaultValue="Photography Cairo"
              placeholderTextColor={colors.ash}
            />
          </View>
        </View>

        <View style={styles.filterChipRow}>
          <View style={[styles.chip, styles.chipActive]}>
            <Text style={styles.chipTextActive}>Category: Photography</Text>
            <Ionicons name="close" size={13} color="#fff" />
          </View>
          <View style={styles.chip}><Text style={styles.chipText}>Rating 4+</Text></View>
          <View style={styles.chip}><Text style={styles.chipText}>Price</Text></View>
        </View>

        <Text style={styles.resultCount}>
          <Text style={styles.resultBold}>14 results</Text> for "Photography Cairo"
        </Text>

        {RESULTS.map((r) => (
          <View key={r.name} style={styles.row}>
            <View style={styles.thumb} />
            <View style={{ flex: 1 }}>
              <Text style={styles.vname}>{r.name}</Text>
              <Text style={styles.vmeta}>{r.meta}</Text>
              <View style={styles.ratingRow}>
                <Ionicons name="star" size={12} color={colors.ink} />
                <Text style={styles.ratingText}>{r.rating}</Text>
              </View>
            </View>
            <Text style={styles.price}>{r.price}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.paper },
  scrollContent: { padding: spacing.xl, paddingTop: 60 },

  searchRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, marginBottom: spacing.md },
  searchField: { flex: 1, borderWidth: 1, borderColor: colors.ink, borderRadius: radius.md, height: 46, flexDirection: 'row', alignItems: 'center', gap: 9, paddingHorizontal: spacing.md },
  searchInput: { flex: 1, fontSize: 13, color: colors.ink, fontWeight: '600' },

  filterChipRow: { flexDirection: 'row', gap: spacing.sm, marginBottom: spacing.md, flexWrap: 'wrap' },
  chip: { flexDirection: 'row', alignItems: 'center', gap: 5, borderWidth: 1, borderColor: colors.line, borderRadius: 20, paddingHorizontal: spacing.md, paddingVertical: 7 },
  chipActive: { backgroundColor: colors.ink, borderColor: colors.ink },
  chipText: { fontSize: 12, fontWeight: '600', color: colors.ink },
  chipTextActive: { fontSize: 12, fontWeight: '600', color: '#fff' },

  resultCount: { fontSize: 12, color: colors.ash, marginBottom: spacing.lg },
  resultBold: { color: colors.ink, fontWeight: '700' },

  row: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, borderWidth: 1, borderColor: colors.line, borderRadius: radius.lg, padding: spacing.md, marginBottom: spacing.sm },
  thumb: { width: 58, height: 58, borderRadius: radius.md, backgroundColor: colors.mist, borderWidth: 1, borderColor: colors.line },
  vname: { fontSize: 13.5, fontWeight: '700', color: colors.ink },
  vmeta: { fontSize: 11.5, color: colors.ash, marginTop: 2 },
  ratingRow: { flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 3 },
  ratingText: { fontSize: 11, fontWeight: '600', color: colors.ink },
  price: { fontSize: 11.5, color: colors.ash, fontWeight: '600' },
});