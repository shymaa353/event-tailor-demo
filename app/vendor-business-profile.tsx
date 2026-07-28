import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { colors, radius, spacing, typography } from '../constants/theme';

const PACKAGES = [
  { name: 'Basic Package', price: 'EGP 8,000' },
  { name: 'Standard Package', price: 'EGP 13,500' },
  { name: 'Premium Package', price: 'EGP 20,000' },
];

export default function VendorBusinessProfileScreen() {
  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.topRow}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={22} color={colors.ink} />
          </TouchableOpacity>
          <Text style={styles.title}>My Store</Text>
          <TouchableOpacity>
            <Text style={styles.editLink}>Edit</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.img} />

        <Text style={styles.name}>Alma Hall</Text>
        <Text style={styles.category}>Photography · Cairo, Egypt</Text>
        <View style={styles.metaRow}>
          <Ionicons name="star" size={13} color={colors.ink} />
          <Text style={styles.metaText}>4.8 (120 reviews)</Text>
        </View>

        <Text style={styles.sectionTitle}>About</Text>
        <View style={styles.aboutCard}>
          <Text style={styles.aboutText}>
            We capture your event's most meaningful moments with a calm, documentary style — no forced poses, just the day as it happened.
          </Text>
        </View>

        <View style={styles.sectionTitleRow}>
          <Text style={styles.sectionTitle}>Packages</Text>
          <TouchableOpacity>
            <Text style={styles.editLink}>Manage</Text>
          </TouchableOpacity>
        </View>
        {PACKAGES.map((p) => (
          <View key={p.name} style={styles.pkgRow}>
            <Text style={styles.pkgName}>{p.name}</Text>
            <Text style={styles.pkgPrice}>{p.price}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.paper },
  scrollContent: { padding: spacing.xl, paddingTop: 60 },

  topRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing.md },
  title: { fontSize: 17, fontWeight: '700', color: colors.ink },
  editLink: { fontSize: 13, fontWeight: '600', color: colors.ink },

  img: { width: '100%', height: 140, borderRadius: radius.lg, backgroundColor: colors.mist, borderWidth: 1, borderColor: colors.line, marginBottom: spacing.md },

  name: { fontSize: typography.displaySize.md, fontWeight: '700', color: colors.ink },
  category: { fontSize: 12.5, color: colors.ash, marginTop: 2, marginBottom: spacing.sm },
  metaRow: { flexDirection: 'row', alignItems: 'center', gap: 5, marginBottom: spacing.lg },
  metaText: { fontSize: 12, color: colors.ink, fontWeight: '600' },

  sectionTitle: { fontSize: 13.5, fontWeight: '700', color: colors.ink, marginBottom: spacing.sm },
  sectionTitleRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: spacing.md, marginBottom: spacing.sm },

  aboutCard: { borderWidth: 1, borderColor: colors.line, borderRadius: radius.lg, padding: spacing.md, marginBottom: spacing.md },
  aboutText: { fontSize: 12.5, color: colors.ink, lineHeight: 19 },

  pkgRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderWidth: 1, borderColor: colors.line, borderRadius: radius.md, padding: spacing.md, marginBottom: spacing.sm },
  pkgName: { fontSize: 13, fontWeight: '600', color: colors.ink },
  pkgPrice: { fontSize: 13, fontWeight: '700', color: colors.ink },
});