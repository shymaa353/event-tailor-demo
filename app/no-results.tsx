import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { colors, radius, spacing, typography } from '../constants/theme';

export default function NoResultsScreen() {
  return (
    <View style={styles.screen}>
      <View style={styles.searchRow}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={20} color={colors.ink} />
        </TouchableOpacity>
        <View style={styles.searchField}>
          <Ionicons name="search-outline" size={15} color={colors.ink} />
          <TextInput
            style={styles.searchInput}
            defaultValue="Fireworks Sharm"
            placeholderTextColor={colors.ash}
          />
        </View>
      </View>

      <View style={styles.center}>
        <View style={styles.iconCircle}>
          <Ionicons name="search-outline" size={36} color={colors.ink} />
        </View>
        <Text style={styles.title}>No results for "Fireworks Sharm"</Text>
        <Text style={styles.sub}>Try a different category, or check out what's popular near you instead.</Text>

        <View style={styles.suggRow}>
          <View style={styles.suggChip}><Text style={styles.suggText}>Entertainment</Text></View>
          <View style={styles.suggChip}><Text style={styles.suggText}>Sharm El Sheikh</Text></View>
          <View style={styles.suggChip}><Text style={styles.suggText}>Decor</Text></View>
        </View>

        <TouchableOpacity style={styles.ghostBtn} onPress={() => router.push('/(tabs)/discover')}>
          <Text style={styles.ghostBtnText}>Browse Popular Vendors</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.paper, padding: spacing.xl, paddingTop: 60 },

  searchRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, marginBottom: spacing.md },
  searchField: { flex: 1, borderWidth: 1, borderColor: colors.ink, borderRadius: radius.md, height: 46, flexDirection: 'row', alignItems: 'center', gap: 9, paddingHorizontal: spacing.md },
  searchInput: { flex: 1, fontSize: 13, color: colors.ink, fontWeight: '600' },

  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  iconCircle: { width: 88, height: 88, borderRadius: 24, backgroundColor: colors.mist, alignItems: 'center', justifyContent: 'center', marginBottom: spacing.xl },
  title: { fontSize: typography.displaySize.sm, fontWeight: '700', color: colors.ink, marginBottom: 8, textAlign: 'center' },
  sub: { fontSize: 13, color: colors.ash, textAlign: 'center', lineHeight: 20, marginBottom: spacing.xl, maxWidth: 250 },

  suggRow: { flexDirection: 'row', gap: spacing.sm, flexWrap: 'wrap', justifyContent: 'center', marginBottom: spacing.lg },
  suggChip: { borderWidth: 1, borderColor: colors.line, borderRadius: 18, paddingHorizontal: spacing.md, paddingVertical: 8 },
  suggText: { fontSize: 12, fontWeight: '600', color: colors.ink },

  ghostBtn: { backgroundColor: colors.mist, borderRadius: radius.md, height: 44, paddingHorizontal: spacing.xl, alignItems: 'center', justifyContent: 'center' },
  ghostBtnText: { fontSize: 13.5, fontWeight: '600', color: colors.ink },
});