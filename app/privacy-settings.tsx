import { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { colors, radius, spacing, typography } from '../constants/theme';

function ToggleRow({ label, sub, initial }: { label: string; sub?: string; initial: boolean }) {
  const [on, setOn] = useState(initial);
  return (
    <View style={styles.row}>
      <View style={{ flex: 1 }}>
        <Text style={styles.rowKey}>{label}</Text>
        {sub && <Text style={styles.rowSub}>{sub}</Text>}
      </View>
      <TouchableOpacity style={[styles.toggle, on && styles.toggleOn]} onPress={() => setOn(!on)}>
        <View style={[styles.knob, on && styles.knobOn]} />
      </TouchableOpacity>
    </View>
  );
}

export default function PrivacySettingsScreen() {
  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.topRow}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={22} color={colors.ink} />
          </TouchableOpacity>
          <Text style={styles.title}>Privacy Settings</Text>
          <View style={{ width: 22 }} />
        </View>

        <Text style={styles.sect}>Profile Visibility</Text>
        <View style={styles.list}>
          <ToggleRow label="Show my profile to vendors" sub="Vendors can view and send proposals." initial={true} />
        </View>

        <Text style={styles.sect}>Profile Information</Text>
        <View style={styles.list}>
          <ToggleRow label="Show my phone number" initial={true} />
          <ToggleRow label="Show my email address" initial={false} />
          <ToggleRow label="Show my location" initial={true} />
        </View>

        <Text style={styles.sect}>Data & Personalization</Text>
        <View style={styles.list}>
          <ToggleRow label="Personalized recommendations" initial={true} />
          <ToggleRow label="Usage data for app improvement" initial={true} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.paper },
  scrollContent: { padding: spacing.xl, paddingTop: 60 },

  topRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing.lg },
  title: { fontSize: 17, fontWeight: '700', color: colors.ink },

  sect: { fontSize: 11.5, fontWeight: '700', color: colors.ash, textTransform: 'uppercase', marginBottom: spacing.sm, marginTop: spacing.md },
  list: { borderWidth: 1, borderColor: colors.line, borderRadius: radius.lg, overflow: 'hidden', marginBottom: spacing.md },
  row: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, paddingVertical: spacing.md, paddingHorizontal: spacing.md, borderBottomWidth: 1, borderBottomColor: colors.mist },
  rowKey: { fontSize: 13.5, fontWeight: '600', color: colors.ink },
  rowSub: { fontSize: 11, color: colors.ash, marginTop: 2 },

  toggle: { width: 44, height: 26, borderRadius: 13, backgroundColor: colors.mist, borderWidth: 1, borderColor: colors.line, justifyContent: 'center' },
  toggleOn: { backgroundColor: colors.ink, borderColor: colors.ink },
  knob: { width: 20, height: 20, borderRadius: 10, backgroundColor: '#fff', marginLeft: 2 },
  knobOn: { marginLeft: 20 },
});