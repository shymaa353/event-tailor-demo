import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { colors, radius, spacing, typography } from '../constants/theme';

export default function ResetSuccessScreen() {
  return (
    <View style={styles.screen}>
      <View style={styles.center}>
        <View style={styles.iconCircle}>
          <Ionicons name="checkmark" size={30} color={colors.ink} />
        </View>
        <Text style={styles.title}>Password reset!</Text>
        <Text style={styles.sub}>You can now log in with your new password.</Text>
      </View>

      <TouchableOpacity style={styles.primaryBtn} onPress={() => router.push('/login')}>
        <Text style={styles.primaryBtnText}>Back to Log In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.paper, padding: spacing.xxl, paddingTop: 60 },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  iconCircle: {
    width: 78,
    height: 78,
    borderRadius: 39,
    borderWidth: 1.6,
    borderColor: colors.line,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.xl,
  },
  title: { fontSize: typography.displaySize.md, fontWeight: '700', color: colors.ink, marginBottom: 8 },
  sub: { fontSize: typography.textSize.md, color: colors.ash, textAlign: 'center' },

  primaryBtn: {
    backgroundColor: colors.ink,
    borderRadius: radius.lg,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryBtnText: { fontSize: typography.textSize.lg, fontWeight: '600', color: '#fff' },
});