import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { colors, radius, spacing, typography } from '../constants/theme';

export default function VendorProfileScreen() {
  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.topRow}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={22} color={colors.ink} />
          </TouchableOpacity>
          <Ionicons name="heart-outline" size={20} color={colors.ink} />
        </View>

        <View style={styles.img} />

        <Text style={styles.name}>Alma Hall</Text>
        <Text style={styles.category}>Venue</Text>
        <View style={styles.metaRow}>
          <Ionicons name="star" size={13} color={colors.ink} />
          <Text style={styles.metaText}>4.8 (120 reviews)</Text>
        </View>
        <View style={styles.metaRow}>
          <Ionicons name="location-outline" size={13} color={colors.ink} />
          <Text style={styles.metaText}>Cairo, Egypt</Text>
        </View>

        <View style={styles.tabsRow}>
          <Text style={[styles.tab, styles.tabActive]}>About</Text>
          <Text style={styles.tab}>Packages</Text>
          <Text style={styles.tab}>Reviews</Text>
          <Text style={styles.tab}>Gallery</Text>
        </View>

        <View style={styles.infoRow}>
          <Ionicons name="time-outline" size={15} color={colors.ink} />
          <Text style={styles.infoText}>Typically responds in 2 hours</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="calendar-outline" size={15} color={colors.ink} />
          <Text style={styles.infoText}>100+ events completed</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="shield-checkmark-outline" size={15} color={colors.ink} />
          <Text style={styles.infoText}>Verified vendor</Text>
        </View>
      </ScrollView>

      <View style={styles.footBtn}>
        <TouchableOpacity style={styles.primaryBtn} onPress={() => router.push('/vendor-packages')}>
          <Text style={styles.primaryBtnText}>View Packages</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.paper },
  scrollContent: { padding: spacing.xl, paddingTop: 60 },

  topRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: spacing.md },
  img: { width: '100%', height: 140, borderRadius: radius.lg, backgroundColor: colors.mist, borderWidth: 1, borderColor: colors.line, marginBottom: spacing.md },

  name: { fontSize: typography.displaySize.md, fontWeight: '700', color: colors.ink },
  category: { fontSize: 12.5, color: colors.ash, marginTop: 2, marginBottom: spacing.sm },
  metaRow: { flexDirection: 'row', alignItems: 'center', gap: 5, marginBottom: 4 },
  metaText: { fontSize: 12, color: colors.ink, fontWeight: '600' },

  tabsRow: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: colors.line, marginTop: spacing.md, marginBottom: spacing.lg },
  tab: { flex: 1, textAlign: 'center', fontSize: 12, color: colors.ash, fontWeight: '600', paddingBottom: 9 },
  tabActive: { color: colors.ink, borderBottomWidth: 2, borderBottomColor: colors.ink },

  infoRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, marginBottom: spacing.sm },
  infoText: { fontSize: 12.5, color: colors.ink, fontWeight: '500' },

  footBtn: { padding: spacing.xl, paddingTop: spacing.sm },
  primaryBtn: { backgroundColor: colors.ink, borderRadius: radius.lg, height: 48, alignItems: 'center', justifyContent: 'center' },
  primaryBtnText: { fontSize: 14.5, fontWeight: '600', color: '#fff' },
});