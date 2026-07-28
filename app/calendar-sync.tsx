import { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { colors, radius, spacing, typography } from '../constants/theme';

function ToggleRow({ label, initial }: { label: string; initial: boolean }) {
  const [on, setOn] = useState(initial);
  return (
    <View style={styles.row}>
      <Text style={styles.rowKey}>{label}</Text>
      <TouchableOpacity style={[styles.toggle, on && styles.toggleOn]} onPress={() => setOn(!on)}>
        <View style={[styles.knob, on && styles.knobOn]} />
      </TouchableOpacity>
    </View>
  );
}

const CALENDARS = ['Google Calendar', 'Apple Calendar', 'Outlook Calendar'];

export default function CalendarSyncScreen() {
  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.topRow}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={22} color={colors.ink} />
          </TouchableOpacity>
          <Text style={styles.title}>Calendar Sync</Text>
          <View style={{ width: 22 }} />
        </View>

        <Text style={styles.intro}>Connect your calendar to sync events and never miss a thing.</Text>

        {CALENDARS.map((c) => (
          <View key={c} style={styles.calRow}>
            <View style={styles.calIcon}>
              <Ionicons name="calendar-outline" size={18} color={colors.ink} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.calName}>{c}</Text>
              <Text style={styles.calStatus}>Not Connected</Text>
            </View>
            <TouchableOpacity style={styles.connectBtn}>
              <Text style={styles.connectBtnText}>Connect</Text>
            </TouchableOpacity>
          </View>
        ))}

        <Text style={styles.sect}>Sync Options</Text>
        <View style={styles.list}>
          <ToggleRow label="Sync my events" initial={true} />
          <ToggleRow label="Sync vendor bookings" initial={true} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.paper },
  scrollContent: { padding: spacing.xl, paddingTop: 60 },

  topRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing.md },
  title: { fontSize: 17, fontWeight: '700', color: colors.ink },
  intro: { fontSize: 12.5, color: colors.ash, lineHeight: 19, marginBottom: spacing.lg },

  calRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, borderWidth: 1, borderColor: colors.line, borderRadius: radius.lg, padding: spacing.md, marginBottom: spacing.sm },
  calIcon: { width: 36, height: 36, borderRadius: 10, backgroundColor: colors.mist, alignItems: 'center', justifyContent: 'center' },
  calName: { fontSize: 13.5, fontWeight: '700', color: colors.ink },
  calStatus: { fontSize: 11, color: colors.ash, marginTop: 1 },
  connectBtn: { borderWidth: 1, borderColor: colors.line, borderRadius: 10, height: 30, paddingHorizontal: spacing.md, alignItems: 'center', justifyContent: 'center' },
  connectBtnText: { fontSize: 11.5, fontWeight: '600', color: colors.ink },

  sect: { fontSize: 11.5, fontWeight: '700', color: colors.ash, textTransform: 'uppercase', marginBottom: spacing.sm, marginTop: spacing.lg },
  list: { borderWidth: 1, borderColor: colors.line, borderRadius: radius.lg, overflow: 'hidden' },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: spacing.md, paddingHorizontal: spacing.md, borderBottomWidth: 1, borderBottomColor: colors.mist },
  rowKey: { fontSize: 13.5, fontWeight: '600', color: colors.ink },

  toggle: { width: 44, height: 26, borderRadius: 13, backgroundColor: colors.mist, borderWidth: 1, borderColor: colors.line, justifyContent: 'center' },
  toggleOn: { backgroundColor: colors.ink, borderColor: colors.ink },
  knob: { width: 20, height: 20, borderRadius: 10, backgroundColor: '#fff', marginLeft: 2 },
  knobOn: { marginLeft: 20 },
});