import { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { colors, radius, spacing, typography } from '../constants/theme';

type Pkg = { id: number; name: string; price: string };

export default function VendorRegServicesScreen() {
  const [packages, setPackages] = useState<Pkg[]>([
    { id: 1, name: 'Basic Package', price: '8,000' },
  ]);

  const addPackage = () => {
    setPackages([...packages, { id: Date.now(), name: '', price: '' }]);
  };

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={22} color={colors.ink} />
        </TouchableOpacity>

        <Text style={styles.title}>Add your packages</Text>
        <Text style={styles.sub}>Couples book based on these — add at least one to get started.</Text>

        {packages.map((pkg, i) => (
          <View key={pkg.id} style={styles.pkgCard}>
            <Text style={styles.pkgLabel}>Package {i + 1}</Text>
            <TextInput
              style={styles.field}
              placeholder="Package name"
              placeholderTextColor={colors.ash}
              defaultValue={pkg.name}
            />
            <View style={styles.priceRow}>
              <Text style={styles.currency}>EGP</Text>
              <TextInput
                style={styles.priceField}
                placeholder="0"
                placeholderTextColor={colors.ash}
                keyboardType="numeric"
                defaultValue={pkg.price}
              />
            </View>
            <TextInput
              style={styles.textarea}
              placeholder="What's included..."
              placeholderTextColor={colors.ash}
              multiline
            />
          </View>
        ))}

        <TouchableOpacity style={styles.addBtn} onPress={addPackage}>
          <Ionicons name="add" size={18} color={colors.ink} />
          <Text style={styles.addBtnText}>Add Another Package</Text>
        </TouchableOpacity>

        <View style={styles.dots}>
          <View style={styles.dot} />
          <View style={[styles.dot, styles.dotActive]} />
          <View style={styles.dot} />
        </View>

        <TouchableOpacity style={styles.primaryBtn} onPress={() => router.push('/vendor-reg-availability')}>
          <Text style={styles.primaryBtnText}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.paper },
  scrollContent: { padding: spacing.xl, paddingTop: 60 },
  title: { fontSize: typography.displaySize.md, fontWeight: '700', color: colors.ink, marginTop: spacing.md, marginBottom: 6 },
  sub: { fontSize: 12.5, color: colors.ash, marginBottom: spacing.lg },

  pkgCard: { borderWidth: 1, borderColor: colors.line, borderRadius: radius.lg, padding: spacing.md, marginBottom: spacing.md },
  pkgLabel: { fontSize: 12, fontWeight: '700', color: colors.ink, marginBottom: spacing.sm },
  field: { borderWidth: 1, borderColor: colors.line, borderRadius: radius.md, height: 46, paddingHorizontal: spacing.md, fontSize: 13.5, color: colors.ink, marginBottom: spacing.sm },
  priceRow: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: colors.line, borderRadius: radius.md, height: 46, paddingHorizontal: spacing.md, marginBottom: spacing.sm, gap: spacing.sm },
  currency: { fontSize: 13, color: colors.ash, fontWeight: '600' },
  priceField: { flex: 1, fontSize: 13.5, color: colors.ink },
  textarea: { borderWidth: 1, borderColor: colors.line, borderRadius: radius.md, padding: spacing.md, minHeight: 60, fontSize: 12.5, color: colors.ink, textAlignVertical: 'top' },

  addBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 7, borderWidth: 1, borderColor: colors.line, borderStyle: 'dashed', borderRadius: radius.md, height: 46, marginBottom: spacing.lg },
  addBtnText: { fontSize: 13, fontWeight: '600', color: colors.ink },

  dots: { flexDirection: 'row', justifyContent: 'center', gap: 6, marginVertical: spacing.lg },
  dot: { width: 6, height: 6, borderRadius: 3, backgroundColor: colors.ashLight },
  dotActive: { width: 16, backgroundColor: colors.ink },

  primaryBtn: { backgroundColor: colors.ink, borderRadius: radius.lg, height: 50, alignItems: 'center', justifyContent: 'center' },
  primaryBtnText: { fontSize: 14.5, fontWeight: '600', color: '#fff' },
});