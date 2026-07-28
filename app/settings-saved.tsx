import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { colors, radius, spacing, typography } from '../constants/theme';

export default function SettingsSavedScreen() {
  return (
    <View style={styles.screen}>
      <View style={styles.center}>
        <View style={styles.iconCircle}>
          <Ionicons name="checkmark" size={28} color={colors.ink} />
        </View>
        <Text style={styles.title}>Settings Saved!</Text>
        <Text style={styles.sub}>Your preferences have been updated.</Text>
      </View>

      <TouchableOpacity style={styles.primaryBtn} onPress={() => router.push('/(tabs)/profile')}>
        <Text style={styles.primaryBtnText}>Back to Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/(tabs)/home')}>
        <Text style={styles.ghostLink}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.paper, padding: spacing.xl, paddingTop: 80 },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  iconCircle: { width: 78, height: 78, borderRadius: 39, borderWidth: 1.6, borderColor: colors.line, alignItems: 'center', justifyContent: 'center', marginBottom: spacing.lg },
  title: { fontSize: typography.displaySize.md, fontWeight: '700', color: colors.ink, marginBottom: 8 },
  sub: { fontSize: 13, color: colors.ash, textAlign: 'center' },

  primaryBtn: { backgroundColor: colors.ink, borderRadius: radius.lg, height: 48, alignItems: 'center', justifyContent: 'center', marginBottom: spacing.md },
  primaryBtnText: { fontSize: 14.5, fontWeight: '600', color: '#fff' },
  ghostLink: { textAlign: 'center', fontSize: 13, fontWeight: '600', color: colors.ink },
});