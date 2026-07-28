import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { colors, radius, spacing, typography } from '../constants/theme';

const VENUES = [
  { name: 'Alma Hall', meta: 'Zamalek, Cairo', price: '$$$' },
  { name: 'River Palace', meta: 'Maadi, Cairo', price: '$$' },
  { name: 'White Garden', meta: 'New Cairo', price: '$$$' },
];

export default function BookVenueScreen() {
  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.topRow}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={22} color={colors.ink} />
          </TouchableOpacity>
          <Ionicons name="ellipsis-horizontal" size={20} color={colors.ink} />
        </View>

        <Text style={styles.title}>Book Your Venue</Text>

        <View style={styles.searchRow}>
          <View style={styles.searchField}>
            <Ionicons name="search-outline" size={15} color={colors.ash} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search Venue"
              placeholderTextColor={colors.ash}
            />
          </View>
          <TouchableOpacity style={styles.filterBtn}>
            <Ionicons name="options-outline" size={17} color={colors.ink} />
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Recommended Venues</Text>

        {VENUES.map((v) => (
          <TouchableOpacity
            key={v.name}
            style={styles.vendRow}
            onPress={() => router.push('/vendor-profile')}
          >
            <View style={styles.vendThumb} />
            <View style={{ flex: 1 }}>
              <Text style={styles.vendName}>{v.name}</Text>
              <Text style={styles.vendMeta}>{v.meta}</Text>
              <Text style={styles.vendPrice}>{v.price}</Text>
            </View>
            <Ionicons name="heart-outline" size={18} color={colors.ink} />
          </TouchableOpacity>
        ))}

        <View style={styles.tipsCard}>
          <Ionicons name="bulb-outline" size={16} color={colors.ink} />
          <View style={{ flex: 1 }}>
            <Text style={styles.tipsTitle}>Tips</Text>
            <Text style={styles.tipsBody}>
              Visit at least 2–3 venues before deciding. Check availability for your date.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.paper },
  scrollContent: { padding: spacing.xl, paddingTop: 60 },

  topRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: spacing.md },
  title: { fontSize: typography.displaySize.lg, fontWeight: '700', color: colors.ink, marginBottom: spacing.lg },

  searchRow: { flexDirection: 'row', gap: spacing.sm, marginBottom: spacing.lg },
  searchField: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: radius.md,
    height: 46,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
    paddingHorizontal: spacing.md,
  },
  searchInput: { flex: 1, fontSize: 13, color: colors.ink },
  filterBtn: {
    width: 46,
    height: 46,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },

  sectionTitle: { fontSize: 13.5, fontWeight: '700', color: colors.ink, marginBottom: spacing.sm },

  vendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: radius.lg,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  vendThumb: { width: 58, height: 58, borderRadius: radius.md, backgroundColor: colors.mist, borderWidth: 1, borderColor: colors.line },
  vendName: { fontSize: 13.5, fontWeight: '700', color: colors.ink },
  vendMeta: { fontSize: 11.5, color: colors.ash, marginTop: 2 },
  vendPrice: { fontSize: 11.5, color: colors.ash, fontWeight: '600', marginTop: 2 },

  tipsCard: {
    flexDirection: 'row',
    gap: spacing.sm,
    backgroundColor: colors.mist,
    borderRadius: radius.lg,
    padding: spacing.md,
    marginTop: spacing.sm,
  },
  tipsTitle: { fontSize: 12.5, fontWeight: '700', color: colors.ink, marginBottom: 4 },
  tipsBody: { fontSize: 11.5, color: colors.ash, lineHeight: 17 },
});