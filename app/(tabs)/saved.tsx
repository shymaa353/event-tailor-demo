import { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import EmptyState from '../../components/EmptyState';
import { colors, radius, spacing, typography } from '../../constants/theme';

const TABS = ['Vendors', 'Inspiration', 'Packages'];

const VENDORS = [
  { name: 'Alma Hall', meta: 'Venue · Zamalek, Cairo', price: '$$$' },
  { name: 'Light Studio', meta: 'Photography · Maadi, Cairo', price: '$$' },
  { name: 'Blossom Decor', meta: 'Decoration · New Cairo', price: '$$$' },
  { name: 'Pure Catering', meta: 'Catering · Heliopolis', price: '$$' },
];

export default function SavedScreen() {
  const [activeTab, setActiveTab] = useState(0);
  const hasVendors = VENDORS.length > 0;

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Saved</Text>

      <View style={styles.segRow}>
        {TABS.map((tab, i) => (
          <TouchableOpacity key={tab} onPress={() => setActiveTab(i)} style={styles.segItem}>
            <Text style={[styles.segText, i === activeTab && styles.segTextActive]}>{tab}</Text>
            {i === activeTab && <View style={styles.segUnderline} />}
          </TouchableOpacity>
        ))}
      </View>

      {!hasVendors ? (
        <EmptyState
          icon="heart-outline"
          title="Nothing saved yet"
          sub="Tap the heart on any vendor or idea in Discover to keep it here for later."
          ctaLabel="Go to Discover"
          onPress={() => router.push('/(tabs)/discover')}
        />
      ) : (
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.sectionTitle}>Saved Vendors</Text>
          {VENDORS.map((v) => (
            <View key={v.name} style={styles.vendRow}>
              <View style={styles.vendThumb} />
              <View style={{ flex: 1 }}>
                <Text style={styles.vendName}>{v.name}</Text>
                <Text style={styles.vendMeta}>{v.meta}</Text>
                <Text style={styles.vendPrice}>{v.price}</Text>
              </View>
              <Ionicons name="heart" size={17} color={colors.ink} />
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.paper },
  scrollContent: { paddingHorizontal: spacing.xl, paddingBottom: spacing.xl },

  title: {
    fontSize: typography.displaySize.sm,
    fontWeight: '700',
    color: colors.ink,
    textAlign: 'center',
    paddingTop: 60,
    marginBottom: spacing.lg,
  },

  segRow: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: colors.line, marginBottom: spacing.lg, paddingHorizontal: spacing.xl },
  segItem: { flex: 1, alignItems: 'center', paddingBottom: spacing.sm },
  segText: { fontSize: 12.5, fontWeight: '600', color: colors.ash },
  segTextActive: { color: colors.ink },
  segUnderline: { height: 2, backgroundColor: colors.ink, width: '100%', marginTop: 8, borderRadius: 1 },

  sectionTitle: { fontSize: typography.textSize.md, fontWeight: '700', color: colors.ink, marginBottom: spacing.sm },

  vendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.mist,
  },
  vendThumb: {
    width: 64,
    height: 64,
    borderRadius: radius.md,
    backgroundColor: colors.mist,
    borderWidth: 1,
    borderColor: colors.line,
  },
  vendName: { fontSize: typography.textSize.md, fontWeight: '700', color: colors.ink },
  vendMeta: { fontSize: 11.5, color: colors.ash, marginTop: 2 },
  vendPrice: { fontSize: 11.5, color: colors.ash, marginTop: 2, fontWeight: '600' },
});