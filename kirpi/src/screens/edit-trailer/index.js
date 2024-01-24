import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import Layout from '../../components/layout';
import { useNavigation } from '@react-navigation/native';

function formatDate(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
}

function EditTrailer({ route }) {
  const navigation = useNavigation();
  const { editTrailer } = route.params;

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const [t0, setT0] = useState();
  const [t1, setT1] = useState();
  const [t2, setT2] = useState();
  const [t3, setT3] = useState();
  const [ri, setRi] = useState();
  const [rc, setRc] = useState();

  const handleSave = () => {
    // Burada değerleri kaydetme işlemlerini gerçekleştirin
    console.log('Saved:', { t0, t1, t2, t3, ri, rc, selectedDate });
  };

  const handleConnectCounter = () => {
    // Burada sayaca bağlanma işlemlerini gerçekleştirin
    console.log('Connected to Meter');
  };

  //   const showDatePicker = async () => {
  //     try {
  //       const { action, year, month, day } = await DatePickerAndroid.open({
  //         date: date,
  //       });
  //       if (action !== DatePickerAndroid.dismissedAction) {
  //         const selectedDate = new Date(year, month, day);
  //         setDate(selectedDate);
  //       }
  //     } catch ({ code, message }) {
  //       console.warn('Cannot open date picker', message);
  //     }
  //   };

  const [showDatePicker, setShowDatePicker] = useState(false);

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  return (
    <Layout>
      <View style={styles.container}>
        <Image
          source={require('../../assets/logo/Kirpi.png')} // Eklenecek resmin yolu
          style={styles.image}
        />
        {/* <Text style={styles.title}>{editTrailer.serial_number} Güncelle</Text> */}
        <LabeledInput label="T0">
          <TextInput
            style={styles.input}
            value={t0}
            onChangeText={text => setT0(text)}
            placeholder={editTrailer.t0.toString()}
          />
        </LabeledInput>
        <LabeledInput label="T1">
          <TextInput
            style={styles.input}
            value={t1}
            onChangeText={text => setT1(text)}
            placeholder={editTrailer.t1.toString()}
          />
        </LabeledInput>
        <LabeledInput label="T2">
          <TextInput
            style={styles.input}
            value={t2}
            onChangeText={text => setT2(text)}
            placeholder={editTrailer.t2.toString()}
          />
        </LabeledInput>
        <LabeledInput label="T3">
          <TextInput
            style={styles.input}
            value={t3}
            onChangeText={text => setT3(text)}
            placeholder={editTrailer.t3.toString()}
          />
        </LabeledInput>
        <LabeledInput label="RI">
          <TextInput
            style={styles.input}
            value={ri}
            onChangeText={text => setRi(text)}
            placeholder={editTrailer.ri.toString()}
          />
        </LabeledInput>
        <LabeledInput label="RC">
          <TextInput
            style={styles.input}
            value={rc}
            onChangeText={text => setRc(text)}
            placeholder={editTrailer.rc.toString()}
          />
        </LabeledInput>

        <LabeledInput label="Tarih">
          {/* <TextInput
            style={styles.input}
            value={formatDate(date)}
            onFocus={showDatePicker}
            placeholder="Tarih"
          /> */}
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Select a Date:</Text>
            <View>
              <TextInput
                style={{
                  height: 40,
                  borderColor: 'gray',
                  borderWidth: 1,
                  padding: 10,
                  marginVertical: 10,
                }}
                value={date.toDateString()}
                editable={false}
              />
              <Button title="Pick a Date" onPress={showDatepicker} />
            </View>
            {showDatePicker && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode="date"
                is24Hour={true}
                display="default"
                onChange={onDateChange}
              />
            )}
          </View>
        </LabeledInput>

        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Kaydet</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleConnectCounter}>
          <Text style={styles.buttonText}>Sayaca Bağlan</Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 20,
    marginBottom: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
    borderRadius: 5,
    // width: '100%',
  },
  datePicker: {
    width: '100%',
    marginBottom: 8,
  },
  button: {
    marginTop: 16,
    padding: 10,
    backgroundColor: '#3468C0',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default EditTrailer;

const LabeledInput = ({ label, children }) => {
  return (
    <View style={labeledInputStyles.container}>
      <Text style={labeledInputStyles.label}>{label}</Text>
      {children}
    </View>
  );
};

const labeledInputStyles = StyleSheet.create({
  container: {
    marginBottom: 6,
    width: '100%',
  },
  label: {
    marginBottom: 4,
    alignSelf: 'center',
  },
});
