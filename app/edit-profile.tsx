import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { colors, radius, spacing, typography } from '../constants/theme';

export default function EditProfileScreen() {
  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.topRow}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={22} color={colors.ink} />
          </TouchableOpacity>
          <Text style={styles.title}>Edit Profile</Text>
          <View style={{ width: 22 }} />
        </View>

        <View style={styles.avatarWrap}>
          <View style={styles.avatar}>
            <View style={styles.camBadge}>
              <Ionicons name="camera" size={13} color="#fff" />
            </View>
          </View>
          <Text style={styles.changePhoto}>Change Photo</Text>
        </View>

        <Text style={styles.label}>Full name</Text>
        <View style={styles.field}><Text style={styles.fieldText}>Sarah Ahmed</Text></View>

        <Text style={styles.label}>Email</Text>
        <View style={styles.field}><Text style={styles.fieldText}>sar********************</Text></View>

        <Text style={styles.label}>Phone number</Text>
        <View style={styles.field}><Text style={styles.fieldText}>+20*************</Text></View>

        <Text style={styles.label}>Location</Text>
        <View style={styles.field}><Text style={styles.fieldText}>Cairo, Egypt</Text></View>

        <Text style={styles.label}>Bio (optional)</Text>
        <View style={styles.textarea}><Text style={styles.placeholderText}>Tell us a little about yourself...</Text></View>
        <Text style={styles.charCount}>0/120</Text>
      </ScrollView>

      <View style={styles.footBtn}>
        <TouchableOpacity style={styles.primaryBtn}>
          <Text style={styles.primaryBtnText}>Save Changes</Text>
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

  avatarWrap: { alignItems: 'center', marginBottom: spacing.xl },
  avatar: { width: 88, height: 88, borderRadius: 44, backgroundColor: colors.mist, borderWidth: 1, borderColor: colors.line, position: 'relative' },
  camBadge: { position: 'absolute', bottom: -2, right: -2, width: 28, height: 28, borderRadius: 14, backgroundColor: colors.ink, borderWidth: 3, borderColor: colors.paper, alignItems: 'center', justifyContent: 'center' },
  changePhoto: { fontSize: 12, fontWeight: '600', color: colors.ink, marginTop: 10 },

  label: { fontSize: 11.5, fontWeight: '700', color: colors.ash, marginBottom: spacing.sm, textTransform: 'uppercase' },
  field: { borderWidth: 1, borderColor: colors.line, borderRadius: radius.md, height: 48, justifyContent: 'center', paddingHorizontal: spacing.md, marginBottom: spacing.md },
  fieldText: { fontSize: 14, color: colors.ink, fontWeight: '500' },

  textarea: { borderWidth: 1, borderColor: colors.line, borderRadius: radius.md, padding: spacing.md, minHeight: 64, marginBottom: 6 },
  placeholderText: { fontSize: 13, color: colors.ash },
  charCount: { fontSize: 10.5, color: colors.ash, textAlign: 'right', marginBottom: spacing.md },

  footBtn: { padding: spacing.xl, paddingTop: spacing.sm },
  primaryBtn: { backgroundColor: colors.ink, borderRadius: radius.lg, height: 48, alignItems: 'center', justifyContent: 'center' },
  primaryBtnText: { fontSize: 14.5, fontWeight: '600', color: '#fff' },
});