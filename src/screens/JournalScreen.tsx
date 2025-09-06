import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList } from 'react-native';
import dayjs from 'dayjs';
import { getAllJournalEntries, getJournalEntry, saveJournalEntry } from '../services/storage';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';

const JournalScreen: React.FC = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const today = dayjs().format('YYYY-MM-DD');
  const [text, setText] = useState('');
  const [entries, setEntries] = useState<{ dateISO: string; text: string }[]>([]);

  useLayoutEffect(() => {
    navigation.setOptions({ title: t('journal_title') as string });
  }, [navigation, t]);

  useEffect(() => {
    (async () => {
      const current = await getJournalEntry(today);
      setText(current ?? '');
      const all = await getAllJournalEntries();
      setEntries(all);
    })();
  }, [today]);

  const onSave = async () => {
    await saveJournalEntry(text, today);
    const all = await getAllJournalEntries();
    setEntries(all);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.dateLabel}>{dayjs(today).format('dddd, MMM D')}</Text>
      <TextInput
        style={styles.input}
        multiline
        placeholder="Write your thoughts..."
        value={text}
        onChangeText={setText}
      />
      <Button title={t('save')} onPress={onSave} />

      <Text style={styles.sectionTitle}>{t('journal_title')}</Text>
      <FlatList
        data={entries}
        keyExtractor={(item) => item.dateISO}
        ListEmptyComponent={<Text style={{ color: '#666' }}>{t('no_entries')}</Text>}
        renderItem={({ item }) => (
          <View style={styles.entry}>
            <Text style={styles.entryDate}>{dayjs(item.dateISO).format('MMM D, YYYY')}</Text>
            <Text style={styles.entryText}>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  dateLabel: { color: '#666', marginBottom: 8 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, minHeight: 120, marginBottom: 12 },
  sectionTitle: { fontSize: 18, fontWeight: '600', marginVertical: 12 },
  entry: { paddingVertical: 8, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: '#e0e0e0' },
  entryDate: { fontWeight: '600', marginBottom: 4 },
  entryText: { color: '#333' },
});

export default JournalScreen;


