import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { colors, radius, spacing, typography } from '../constants/theme';

export default function LanguageCurrencyScreen() {
  const [timeFormat, setTimeFormat] = useState('12-Hour');

  return (
    <View style={styles.screen}>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="chevron-back" size={22} color={colors.ink} />
      </TouchableOpacity>
      <Text style={styles.title}>Language & Currency</Text>

      <Text style={styles.label}>Language</Text>
      <View style={styles.dropdown}>
        <Text style={styles.dropdownText}>English</Text>
        <Ionicons name="chevron-down" size={14} color={colors.ash} />
      </View>

      <Text style={styles.label}>Currency</Text>
      <View style={styles.dropdown}>
        <Text style={styles.dropdownText}>Egyptian Pound (EGP)</Text>
        <Ionicons name="chevron-down" size={14} color={colors.ash} />
      </View>

      <Text style={styles.label}>Date Format</Text>
      <View style={styles.dropdown}>
        <Text style={styles.dropdownText}>DD / MM / YYYY</Text>
        <Ionicons name="chevron-down" size={14} color={colors.ash} />
      </View>

      <Text style={styles.label}>Time Format</Text>
      <View style={styles.radioRow}>
        <TouchableOpacity style={styles.radioBtn} onPress={() => setTimeFormat('12-Hour')}>
          <View style={[styles.radioCircle, timeFormat === '12-Hour' && styles.radioCircleOn]}>
            {timeFormat === '12-Hour' && <View style={styles.radioDot} />}
          </View>
          <Text style={styles.radioLabel}>12-Hour</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.radioBtn} onPress={() => setTimeFormat('24-Hour')}>
          <View style={[styles.radioCircle, timeFormat === '24-Hour' && styles.radioCircleOn]}>
            {timeFormat === '24-Hour' && <View style={styles.radioDot} />}
          </View>
          <Text style={styles.radioLabel}>24-Hour</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.primaryBtn}>
        <Text style={styles.primaryBtnText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.paper, padding: spacing.xl, paddingTop: 60 },
  title: { fontSize: 17, fontWeight: '700', color: colors.ink, marginTop: spacing.md, marginBottom: spacing.xl },
  label: { fontSize: 11.5, fontWeight: '700', color: colors.ash, marginBottom: spacing.sm },

  dropdown: { borderWidth: 1, borderColor: colors.line, borderRadius: radius.md, height: 48, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: spacing.md, marginBottom: spacing.lg },
  dropdownText: { fontSize: 14, color: colors.ink, fontWeight: '500' },

  radioRow: { flexDirection: 'row', gap: spacing.md, marginBottom: spacing.xl },
  radioBtn: { flex: 1, flexDirection: 'row', alignItems: 'center', gap: 9, borderWidth: 1, borderColor: colors.line, borderRadius: radius.md, height: 46, paddingHorizontal: spacing.md },
  radioCircle: { width: 17, height: 17, borderRadius: 9, borderWidth: 1.6, borderColor: colors.ashLight, alignItems: 'center', justifyContent: 'center' },
  radioCircleOn: { borderColor: colors.ink },
  radioDot: { width: 9, height: 9, borderRadius: 5, backgroundColor: colors.ink },
  radioLabel: { fontSize: 13, fontWeight: '600', color: colors.ink },

  primaryBtn: { backgroundColor: colors.ink, borderRadius: radius.lg, height: 48, alignItems: 'center', justifyContent: 'center' },
  primaryBtnText: { fontSize: 14.5, fontWeight: '600', color: '#fff' },
});