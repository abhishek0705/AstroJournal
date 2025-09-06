import dayjs from 'dayjs';
import { ZodiacSign } from '../utils/zodiac';

// Simple local mock; can be replaced with network fetch later
export async function fetchDailyHoroscope(sign: ZodiacSign, dateISO?: string): Promise<string> {
  const dateKey = dateISO ?? dayjs().format('YYYY-MM-DD');
  const seed = `${sign}-${dateKey}`.length;
  const messages = [
    'Focus on personal growth and gratitude today.',
    'Opportunities arise through conversations—listen closely.',
    'Take a mindful pause before big decisions.',
    'Creative energy flows—express yourself boldly.',
    'Small steps bring joyful progress.',
  ];
  return messages[seed % messages.length];
}


