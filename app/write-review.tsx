import { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { colors, radius, spacing, typography } from '../constants/theme';

function StarRow({ rating, size = 30 }: { rating: number; size?: number }) {
  return (
    <View style={{ flexDirection: 'row', gap: 6 }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Ionicons
          key={i}
          name={i <= rating ? 'star' : 'star-outline'}
          size={size}
          color={i <= rating ? colors.ink : colors.ashLight}
        />
      ))}
    </View>
  );
}

export default function WriteReviewScreen() {
  const [overall] = useState(4);
  const [comm] = useState(4);
  const [quality] = useState(5);
  const [value] = useState(3);

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.topRow}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={22} color={colors.ink} />
          </TouchableOpacity>
          <Text style={styles.title}>Write a Review</Text>
          <View style={{ width: 22 }} />
        </View>

        <View style={styles.vendorCard}>
          <View style={styles.vendorThumb} />
          <View>
            <Text style={styles.vendorName}>Alma Hall</Text>
            <Text style={styles.vendorType}>Venue · Standard Package</Text>
          </View>
        </View>

        <Text style={[styles.label, { textAlign: 'center' }]}>OVERALL RATING</Text>
        <View style={{ alignItems: 'center', marginBottom: spacing.xl }}>
          <StarRow rating={overall} />
        </View>

        <View style={styles.catRow}>
          <Text style={styles.catLabel}>Communication</Text>
          <StarRow rating={comm} size={16} />
        </View>
        <View style={styles.catRow}>
          <Text style={styles.catLabel}>Quality</Text>
          <StarRow rating={quality} size={16} />
        </View>
        <View style={[styles.catRow, { marginBottom: spacing.lg }]}>
          <Text style={styles.catLabel}>Value for Money</Text>
          <StarRow rating={value} size={16} />
        </View>

        <Text style={styles.label}>YOUR EXPERIENCE</Text>
        <TextInput
          style={styles.textarea}
          placeholder="Share what stood out — the more specific, the more it helps other couples."
          placeholderTextColor={colors.ash}
          multiline
        />
        <Text style={styles.charCount}>0/500</Text>

        <Text style={styles.label}>ADD PHOTOS (OPTIONAL)</Text>
        <TouchableOpacity style={styles.photoAdd}>
          <Ionicons name="add" size={20} color={colors.ash} />
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.footBtn}>
        <TouchableOpacity style={styles.primaryBtn} onPress={() => router.push('/review-submitted')}>
          <Text style={styles.primaryBtnText}>Submit Review</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.paper },
  scrollContent: { padding: spacing.xl, paddingTop: 60 },

  topRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing.lg },
  title: { fontSize: 17, fontWeight: '700', color: colors.ink },

  vendorCard: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, borderWidth: 1, borderColor: colors.line, borderRadius: radius.lg, padding: spacing.md, marginBottom: spacing.xl },
  vendorThumb: { width: 48, height: 48, borderRadius: radius.md, backgroundColor: colors.mist, borderWidth: 1, borderColor: colors.line },
  vendorName: { fontSize: 13.5, fontWeight: '700', color: colors.ink },
  vendorType: { fontSize: 11.5, color: colors.ash, marginTop: 1 },

  label: { fontSize: 11.5, fontWeight: '700', color: colors.ash, marginBottom: spacing.sm },

  catRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing.md },
  catLabel: { fontSize: 13, fontWeight: '600', color: colors.ink },

  textarea: { borderWidth: 1, borderColor: colors.line, borderRadius: radius.md, padding: spacing.md, minHeight: 90, fontSize: 13, color: colors.ink, textAlignVertical: 'top' },
  charCount: { fontSize: 10.5, color: colors.ash, textAlign: 'right', marginTop: 4, marginBottom: spacing.lg },

  photoAdd: { width: 60, height: 60, borderRadius: 12, borderWidth: 1.5, borderColor: colors.line, borderStyle: 'dashed', alignItems: 'center', justifyContent: 'center' },

  footBtn: { padding: spacing.xl, paddingTop: spacing.sm },
  primaryBtn: { backgroundColor: colors.ink, borderRadius: radius.lg, height: 48, alignItems: 'center', justifyContent: 'center' },
  primaryBtnText: { fontSize: 14.5, fontWeight: '600', color: '#fff' },
});