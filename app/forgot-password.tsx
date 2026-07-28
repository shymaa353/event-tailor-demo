import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { colors, radius, spacing, typography } from '../constants/theme';

export default function ForgotPasswordScreen() {
  return (
    <View style={styles.screen}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
        <Ionicons name="chevron-back" size={22} color={colors.ink} />
      </TouchableOpacity>

      <Text style={styles.title}>Forgot password?</Text>
      <Text style={styles.sub}>
        Enter the email on your account and we'll send you a link to reset your password.
      </Text>

      <TextInput
        style={styles.field}
        placeholder="Email"
        placeholderTextColor={colors.ash}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TouchableOpacity style={styles.primaryBtn} onPress={() => router.push('/check-email')}>
        <Text style={styles.primaryBtnText}>Send Reset Link</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.paper, padding: spacing.xxl, paddingTop: 60 },
  backBtn: { marginBottom: spacing.md, width: 32 },
  title: { fontSize: typography.displaySize.xl, fontWeight: '700', color: colors.ink, marginBottom: 6 },
  sub: { fontSize: typography.textSize.md, color: colors.ash, lineHeight: 21, marginBottom: spacing.xxl },

  field: {
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: radius.md,
    height: 50,
    paddingHorizontal: spacing.lg,
    fontSize: typography.textSize.md,
    color: colors.ink,
    marginBottom: spacing.lg,
  },

  primaryBtn: {
    backgroundColor: colors.ink,
    borderRadius: radius.lg,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryBtnText: { fontSize: typography.textSize.lg, fontWeight: '600', color: '#fff' },
});