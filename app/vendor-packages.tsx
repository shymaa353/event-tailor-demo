import { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { colors, radius, spacing, typography } from '../constants/theme';

const PACKAGES = [
  { name: 'Basic Package', price: 'EGP 8,000', desc: 'Perfect for small and intimate events.', items: ['4 Hours Coverage', '1 Photographer', '200 Edited Photos'] },
  { name: 'Standard Package', price: 'EGP 13,500', desc: 'Most popular for memorable events.', items: ['6 Hours Coverage', '1 Photographer + 1 Assistant', '400 Edited Photos', 'Online Gallery'], popular: true },
  { name: 'Premium Package', price: 'EGP 20,000', desc: 'Complete coverage for your special day.', items: ['10 Hours Coverage', '2 Photographers + 1 Assistant', '800+ Edited Photos', 'Printed Photo Album'] },
];

export default function VendorPackagesScreen() {
  const [selected, setSelected] = useState('Standard Package');

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={22} color={colors.ink} />
        </TouchableOpacity>

        <Text style={styles.title}>Photography Packages</Text>
        <Text style={styles.sub}>Choose the package that fits your event and needs.</Text>

        {PACKAGES.map((pkg) => (
          <TouchableOpacity
            key={pkg.name}
            style={[styles.card, selected === pkg.name && styles.cardSelected]}
            onPress={() => setSelected(pkg.name)}
          >
            {pkg.popular && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>Most Popular</Text>
              </View>
            )}
            <View style={styles.cardHead}>
              <Text style={styles.cardName}>{pkg.name}</Text>
              <Text style={styles.cardPrice}>{pkg.price}</Text>
            </View>
            <Text style={styles.cardDesc}>{pkg.desc}</Text>
            {pkg.items.map((item) => (
              <View key={item} style={styles.itemRow}>
                <Ionicons name="checkmark" size={12} color={colors.ink} />
                <Text style={styles.itemText}>{item}</Text>
              </View>
            ))}
          </TouchableOpacity>
        ))}

        <Text style={styles.foot}>
          All packages include high-resolution photos and full rights to personal use.
        </Text>
      </ScrollView>

      <View style={styles.footBtn}>
        <TouchableOpacity style={styles.primaryBtn} onPress={() => router.push('/booking-datetime')}>
          <Text style={styles.primaryBtnText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.paper },
  scrollContent: { padding: spacing.xl, paddingTop: 60 },

  title: { fontSize: typography.displaySize.md, fontWeight: '700', color: colors.ink, marginTop: spacing.md },
  sub: { fontSize: 12.5, color: colors.ash, marginTop: 5, marginBottom: spacing.lg },

  card: { borderWidth: 1, borderColor: colors.line, borderRadius: radius.lg, padding: spacing.md, marginBottom: spacing.md, position: 'relative' },
  cardSelected: { borderColor: colors.ink },
  badge: { position: 'absolute', top: -9, left: 14, backgroundColor: colors.ink, borderRadius: 8, paddingHorizontal: 9, paddingVertical: 3 },
  badgeText: { fontSize: 9.5, fontWeight: '700', color: '#fff' },
  cardHead: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 },
  cardName: { fontSize: 14, fontWeight: '700', color: colors.ink },
  cardPrice: { fontSize: 14.5, fontWeight: '700', color: colors.ink },
  cardDesc: { fontSize: 11.5, color: colors.ash, marginBottom: 8 },
  itemRow: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 4 },
  itemText: { fontSize: 11.5, color: colors.ink },

  foot: { fontSize: 10.5, color: colors.ash, textAlign: 'center', lineHeight: 15, marginTop: spacing.sm },

  footBtn: { padding: spacing.xl, paddingTop: spacing.sm },
  primaryBtn: { backgroundColor: colors.ink, borderRadius: radius.lg, height: 48, alignItems: 'center', justifyContent: 'center' },
  primaryBtnText: { fontSize: 14.5, fontWeight: '600', color: '#fff' },
});