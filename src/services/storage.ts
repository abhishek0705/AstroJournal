import AsyncStorage from '@react-native-async-storage/async-storage';
import dayjs from 'dayjs';

export type JournalEntry = {
  dateISO: string;
  text: string;
};

const JOURNAL_PREFIX = 'journal:'; // journal:YYYY-MM-DD
const LANGUAGE_KEY = 'app:language';
const SIGN_KEY = 'app:sign';

export async function saveJournalEntry(text: string, dateISO: string = dayjs().format('YYYY-MM-DD')): Promise<void> {
  const key = `${JOURNAL_PREFIX}${dateISO}`;
  await AsyncStorage.setItem(key, text);
}

export async function getJournalEntry(dateISO: string = dayjs().format('YYYY-MM-DD')): Promise<string | null> {
  const key = `${JOURNAL_PREFIX}${dateISO}`;
  return AsyncStorage.getItem(key);
}

export async function getAllJournalEntries(): Promise<JournalEntry[]> {
  const keys = await AsyncStorage.getAllKeys();
  const journalKeys = keys.filter(k => k.startsWith(JOURNAL_PREFIX));
  const pairs = await AsyncStorage.multiGet(journalKeys);
  return pairs.map(([key, value]) => ({ dateISO: key.replace(JOURNAL_PREFIX, ''), text: value ?? '' }))
    .sort((a, b) => (a.dateISO < b.dateISO ? 1 : -1));
}

export async function saveLanguage(lang: 'en' | 'hi') {
  await AsyncStorage.setItem(LANGUAGE_KEY, lang);
}

export async function loadLanguage() {
  return AsyncStorage.getItem(LANGUAGE_KEY);
}

export async function saveSelectedSign(sign: string) {
  await AsyncStorage.setItem(SIGN_KEY, sign);
}

export async function loadSelectedSign() {
  return AsyncStorage.getItem(SIGN_KEY);
}


