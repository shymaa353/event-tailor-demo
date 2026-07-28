import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import EmptyState from '../components/EmptyState';
import { colors, radius, spacing, typography } from '../constants/theme';

const NOTES = [
  { body: "Prefer white & green theme for flowers.\n\nCheck with venue about indoor option in case of rain.", date: 'May 12, 2025' },
  { body: 'Caterer needs final headcount 2 weeks before the event.', date: 'May 14, 2025' },
  { body: 'Ask photographer about a second shooter for the ceremony.', date: 'May 16, 2025' },
];

export default function NotesScreen() {
  const hasNotes = NOTES.length > 0;

  return (
    <View style={styles.screen}>
      <View style={styles.topRow}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={22} color={colors.ink} />
        </TouchableOpacity>
        <Text style={styles.title}>Notes</Text>
        <TouchableOpacity onPress={() => router.push('/event-settings')}>
          <Ionicons name="ellipsis-horizontal" size={20} color={colors.ink} />
        </TouchableOpacity>
      </View>

      {!hasNotes ? (
        <EmptyState
          icon="document-text-outline"
          title="No notes yet"
          sub="Jot down anything about your event — vendor details, ideas, reminders — so it's not scattered across other apps."
          ctaLabel="+ Add Note"
        />
      ) : (
        <>
          <ScrollView contentContainerStyle={styles.scrollContent}>
            {NOTES.map((n, i) => (
              <View key={i} style={styles.noteCard}>
                <View style={styles.noteTop}>
                  <Text style={styles.noteLabel}>TITLE</Text>
                  <Text style={styles.noteEdit}>Edit</Text>
                </View>
                <View style={styles.noteBody}>
                  <Text style={styles.noteText}>{n.body}</Text>
                  <Text style={styles.noteDate}>{n.date}</Text>
                </View>
              </View>
            ))}
          </ScrollView>

          <View style={styles.footBtn}>
            <TouchableOpacity style={styles.primaryBtn}>
              <Text style={styles.primaryBtnText}>+ Add Note</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.paper },
  scrollContent: { paddingHorizontal: spacing.xl },

  topRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: spacing.xl, paddingTop: 60, paddingBottom: spacing.lg },
  title: { fontSize: 17, fontWeight: '700', color: colors.ink },

  noteCard: { marginBottom: spacing.lg },
  noteTop: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 },
  noteLabel: { fontSize: 11, fontWeight: '700', color: colors.ash, textTransform: 'uppercase' },
  noteEdit: { fontSize: 11.5, fontWeight: '600', color: colors.ink },
  noteBody: { borderWidth: 1, borderColor: colors.line, borderRadius: radius.md, padding: spacing.md },
  noteText: { fontSize: 12.5, color: colors.ink, lineHeight: 19, marginBottom: 8 },
  noteDate: { fontSize: 10.5, color: colors.ash },

  footBtn: { padding: spacing.xl, paddingTop: spacing.sm },
  primaryBtn: { backgroundColor: colors.ink, borderRadius: radius.lg, height: 48, alignItems: 'center', justifyContent: 'center' },
  primaryBtnText: { fontSize: 14.5, fontWeight: '600', color: '#fff' },
});