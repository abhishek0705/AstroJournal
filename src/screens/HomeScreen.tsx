import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import dayjs from 'dayjs';
import ZodiacPicker from '../components/ZodiacPicker';
import { useAppContext } from '../context/AppContext';
import { fetchDailyHoroscope } from '../services/horoscopeService';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const { selectedSign, setSelectedSign, language, setLanguage } = useAppContext();
  const [loading, setLoading] = useState(false);
  const [horoscope, setHoroscope] = useState('');

  const loadHoroscope = useCallback(async () => {
    setLoading(true);
    try {
      const text = await fetchDailyHoroscope(selectedSign);
      setHoroscope(text);
    } finally {
      setLoading(false);
    }
  }, [selectedSign]);

  useEffect(() => {
    loadHoroscope();
  }, [loadHoroscope, selectedSign]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{t('home_title')}</Text>
        <View style={styles.langRow}>
          <Button title="En" onPress={() => setLanguage('en')} color={language === 'en' ? '#333' : '#777'} />
          <View style={{ width: 8 }} />
          <Button title="Hi" onPress={() => setLanguage('hi')} color={language === 'hi' ? '#333' : '#777'} />
        </View>
      </View>

      <Text style={styles.date}>{dayjs().format('dddd, MMM D')}</Text>

      <ZodiacPicker value={selectedSign} onChange={setSelectedSign} />

      <Text style={styles.sectionTitle}>{t('today')}</Text>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text style={styles.horoscope}>{horoscope}</Text>
      )}

      <View style={styles.cta}>
        <Button title={t('write_journal')} onPress={() => navigation.navigate('Journal' as never)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  title: { fontSize: 22, fontWeight: '600' },
  langRow: { flexDirection: 'row' },
  date: { fontSize: 16, marginBottom: 12, color: '#666' },
  sectionTitle: { fontSize: 18, fontWeight: '600', marginTop: 16, marginBottom: 8 },
  horoscope: { fontSize: 16, lineHeight: 22 },
  cta: { marginTop: 24 },
});

export default HomeScreen;


