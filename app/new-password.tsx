import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { colors, radius, spacing, typography } from '../constants/theme';

export default function NewPasswordScreen() {
  return (
    <View style={styles.screen}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
        <Ionicons name="chevron-back" size={22} color={colors.ink} />
      </TouchableOpacity>

      <Text style={styles.title}>Create new password</Text>
      <Text style={styles.sub}>
        Opened from your reset link. Choose a password you haven't used before.
      </Text>

      <View style={styles.passwordField}>
        <TextInput
          style={styles.passwordInput}
          placeholder="New password"
          placeholderTextColor={colors.ash}
          secureTextEntry
        />
        <Ionicons name="eye-outline" size={18} color={colors.ash} />
      </View>
      <View style={styles.passwordField}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Confirm password"
          placeholderTextColor={colors.ash}
          secureTextEntry
        />
        <Ionicons name="eye-outline" size={18} color={colors.ash} />
      </View>

      <Text style={styles.hint}>At least 8 characters, with a number.</Text>

      <TouchableOpacity style={styles.primaryBtn} onPress={() => router.push('/reset-success')}>
        <Text style={styles.primaryBtnText}>Reset Password</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.paper, padding: spacing.xxl, paddingTop: 60 },
  backBtn: { marginBottom: spacing.md, width: 32 },
  title: { fontSize: typography.displaySize.xl, fontWeight: '700', color: colors.ink, marginBottom: 6 },
  sub: { fontSize: typography.textSize.md, color: colors.ash, lineHeight: 21, marginBottom: spacing.xxl },

  passwordField: {
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: radius.md,
    height: 50,
    paddingHorizontal: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
  },
  passwordInput: { flex: 1, fontSize: typography.textSize.md, color: colors.ink },

  hint: { fontSize: 11.5, color: colors.ash, marginBottom: spacing.xl, marginTop: -2 },

  primaryBtn: {
    backgroundColor: colors.ink,
    borderRadius: radius.lg,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryBtnText: { fontSize: typography.textSize.lg, fontWeight: '600', color: '#fff' },
});