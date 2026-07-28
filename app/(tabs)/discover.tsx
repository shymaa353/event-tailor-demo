import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { colors, radius, spacing, typography } from '../../constants/theme';

const CATEGORIES = [
  { icon: 'business-outline', label: 'Venues' },
  { icon: 'camera-outline', label: 'Photography' },
  { icon: 'flower-outline', label: 'Decoration' },
  { icon: 'restaurant-outline', label: 'Catering' },
  { icon: 'musical-notes-outline', label: 'Entertainment' },
];

export default function DiscoverScreen() {
  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Search bar */}
        <View style={styles.searchRow}>
          <TouchableOpacity style={styles.searchField} onPress={() => router.push('/search-results')}>
  <Ionicons name="search-outline" size={16} color={colors.ash} />
  <Text style={styles.searchPlaceholder}>Search vendors, categories...</Text>
</TouchableOpacity>
          <TouchableOpacity style={styles.filterBtn} onPress={() => router.push('/filters')}>
  <Ionicons name="options-outline" size={18} color={colors.ink} />
</TouchableOpacity>
        </View>

        {/* Browse categories */}
        <Text style={styles.sectionTitle}>Browse Categories</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.catScroll}>
          {CATEGORIES.map((cat) => (
            <TouchableOpacity key={cat.label} style={styles.catItem}>
              <View style={styles.catCircle}>
                <Ionicons name={cat.icon as any} size={20} color={colors.ink} />
              </View>
              <Text style={styles.catLabel}>{cat.label}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Trending this week */}
        <View style={styles.sectionTitleRow}>
          <Text style={styles.sectionTitle}>Trending This Week</Text>
          <Text style={styles.seeAll}>See All</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.vendorScroll}>
          <VendorCard name="Alma Hall" type="Venue" />
          <VendorCard name="Light Studio" type="Photography" />
          <VendorCard name="Blossom Decor" type="Decoration" />
        </ScrollView>

        {/* Popular near you */}
        <View style={styles.sectionTitleRow}>
          <Text style={styles.sectionTitle}>Popular Near You</Text>
          <Text style={styles.seeAll}>See All</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.vendorScroll}>
          <VendorCard name="Garden Venue" type="Venue" />
          <VendorCard name="Ali Photography" type="Photography" />
          <VendorCard name="Pure Catering" type="Catering" />
        </ScrollView>
      </ScrollView>
    </View>
  );
}

function VendorCard({ name, type }: { name: string; type: string }) {
  return (
    <TouchableOpacity style={styles.vendorCard} onPress={() => router.push('/vendor-profile')}>
      <View style={styles.vendorThumb}>
        <Ionicons name="heart-outline" size={14} color={colors.ink} style={styles.vendorHeart} />
      </View>
      <Text style={styles.vendorName}>{name}</Text>
      <Text style={styles.vendorType}>{type}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.paper },
  scrollContent: { padding: spacing.xl, paddingBottom: spacing.xxl * 2 },

  searchRow: { flexDirection: 'row', gap: spacing.sm, marginBottom: spacing.lg },
  searchField: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: radius.md,
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
    paddingHorizontal: spacing.md,
  },
  searchPlaceholder: { fontSize: typography.textSize.sm, color: colors.ash },
  filterBtn: {
    width: 44,
    height: 44,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },

  sectionTitle: { fontSize: typography.textSize.md, fontWeight: '700', color: colors.ink, marginBottom: spacing.sm },
  sectionTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spacing.lg,
    marginBottom: spacing.sm,
  },
  seeAll: { fontSize: typography.textSize.sm, color: colors.ash, fontWeight: '500' },

  catScroll: { flexDirection: 'row', marginBottom: spacing.sm },
  catItem: { width: 66, alignItems: 'center', gap: 6, marginRight: spacing.sm },
  catCircle: {
    width: 52,
    height: 52,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.line,
    alignItems: 'center',
    justifyContent: 'center',
  },
  catLabel: { fontSize: 10.5, color: colors.ink, fontWeight: '600', textAlign: 'center' },

  vendorScroll: { flexDirection: 'row' },
  vendorCard: { width: 112, marginRight: spacing.md },
  vendorThumb: {
    width: 112,
    height: 84,
    borderRadius: radius.md,
    backgroundColor: colors.mist,
    borderWidth: 1,
    borderColor: colors.line,
    marginBottom: 7,
  },
  vendorHeart: { position: 'absolute', top: 7, right: 7 },
  vendorName: { fontSize: 12, fontWeight: '700', color: colors.ink },
  vendorType: { fontSize: 11, color: colors.ash },
});