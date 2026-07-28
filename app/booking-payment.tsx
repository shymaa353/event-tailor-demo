import { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { colors, radius, spacing, typography } from '../constants/theme';

const METHODS = ['Credit / Debit Card', 'Bank Transfer', 'Pay Later'];

export default function BookingPaymentScreen() {
  const [method, setMethod] = useState('Credit / Debit Card');

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={22} color={colors.ink} />
        </TouchableOpacity>

        <Text style={styles.title}>Payment</Text>
        <Text style={styles.label}>PAYMENT METHOD</Text>

        {METHODS.map((m) => (
          <TouchableOpacity key={m} style={styles.methodRow} onPress={() => setMethod(m)}>
            <View style={[styles.radioCircle, method === m && styles.radioCircleOn]}>
              {method === m && <View style={styles.radioDot} />}
            </View>
            <Text style={styles.methodLabel}>{m}</Text>
          </TouchableOpacity>
        ))}

        <Text style={[styles.label, { marginTop: spacing.lg }]}>CARD DETAILS</Text>
        <TextInput style={styles.field} placeholder="Card Number" placeholderTextColor={colors.ash} />
        <View style={styles.row2}>
          <TextInput style={[styles.field, styles.fieldHalf]} placeholder="MM / YY" placeholderTextColor={colors.ash} />
          <TextInput style={[styles.field, styles.fieldHalf]} placeholder="CVV" placeholderTextColor={colors.ash} />
        </View>
        <TextInput style={styles.field} placeholder="Cardholder Name" placeholderTextColor={colors.ash} />

        <View style={styles.secureRow}>
          <Ionicons name="lock-closed-outline" size={14} color={colors.ash} />
          <Text style={styles.secureText}>Your payment is secure and encrypted.</Text>
        </View>
      </ScrollView>

      <View style={styles.footBtn}>
        <TouchableOpacity style={styles.primaryBtn} onPress={() => router.push('/booking-confirmed')}>
          <Text style={styles.primaryBtnText}>Pay EGP 26,250</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.paper },
  scrollContent: { padding: spacing.xl, paddingTop: 60 },
  title: { fontSize: typography.displaySize.md, fontWeight: '700', color: colors.ink, marginTop: spacing.md, marginBottom: spacing.lg },
  label: { fontSize: 11, fontWeight: '700', color: colors.ash, marginBottom: spacing.sm },

  methodRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, borderWidth: 1, borderColor: colors.line, borderRadius: radius.lg, padding: spacing.md, marginBottom: spacing.sm },
  radioCircle: { width: 19, height: 19, borderRadius: 10, borderWidth: 1.6, borderColor: colors.ashLight, alignItems: 'center', justifyContent: 'center' },
  radioCircleOn: { borderColor: colors.ink },
  radioDot: { width: 10, height: 10, borderRadius: 5, backgroundColor: colors.ink },
  methodLabel: { fontSize: 13.5, fontWeight: '600', color: colors.ink },

  field: { borderWidth: 1, borderColor: colors.line, borderRadius: radius.md, height: 48, paddingHorizontal: spacing.md, fontSize: 13.5, color: colors.ink, marginBottom: spacing.md },
  row2: { flexDirection: 'row', gap: spacing.md },
  fieldHalf: { flex: 1 },

  secureRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, marginTop: spacing.sm },
  secureText: { fontSize: 11.5, color: colors.ash },

  footBtn: { padding: spacing.xl, paddingTop: spacing.sm },
  primaryBtn: { backgroundColor: colors.ink, borderRadius: radius.lg, height: 48, alignItems: 'center', justifyContent: 'center' },
  primaryBtnText: { fontSize: 14.5, fontWeight: '600', color: '#fff' },
});