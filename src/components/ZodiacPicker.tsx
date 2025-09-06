import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { ZODIAC_SIGNS, ZodiacSign } from '../utils/zodiac';

type Props = {
  value: ZodiacSign;
  onChange: (sign: ZodiacSign) => void;
};

const ZodiacPicker: React.FC<Props> = ({ value, onChange }) => {
  return (
    <View style={styles.container}>
      <Picker selectedValue={value} onValueChange={(v) => onChange(v as ZodiacSign)}>
        {ZODIAC_SIGNS.map(sign => (
          <Picker.Item key={sign} label={sign} value={sign} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    overflow: 'hidden',
  },
});

export default ZodiacPicker;


