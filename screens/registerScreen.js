import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleRegister = () => {
    // Burada kayıt işlemleri gerçekleştirilebilir
    // Örneğin: girilen verileri kullanarak kullanıcıyı kaydedebilirsiniz

    // Kullanıcı başarıyla kaydedildikten sonra
    navigation.navigate('Login'); // LoginScreen'e yönlendirme yapılıyor
  };
  const isFormValid = () => {
    return name !== '' && surname !== '' && email !== '' && password !== '';
  };

  return (
    <LinearGradient colors={['#008000', '#ffd700']} style={styles.container}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>yedir</Text>
        </View>
        <View style={styles.infoTextContainer}>
          <Text style={styles.infoText}> Sadece bir adımda uygulamada neler olduğunu görebilirsin...</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, !name && styles.errorBorder]}
            placeholder="Ad"
            onChangeText={(text) => setName(text)}
            value={name}
          />
          <TextInput
            style={[styles.input, !surname && styles.errorBorder]}
            placeholder="Soyad"
            onChangeText={(text) => setSurname(text)}
            value={surname}
          />
          <TextInput
            style={[styles.input, !email && styles.errorBorder]}
            placeholder="E-posta"
            onChangeText={(text) => setEmail(text.toLowerCase())}
            value={email}
          />
          <TextInput
            style={[styles.input, !password && styles.errorBorder]}
            placeholder="Şifre"
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry
          />
        </View>
        <TouchableOpacity
          style={[styles.registerButton, !isFormValid() && styles.disabledButton]}
          onPress={handleRegister}
          disabled={!isFormValid()}
        >
          <Text style={styles.buttonText}>Kayıt Ol</Text>
        </TouchableOpacity>
        <View style={styles.loginTextContainer}>
          <Text style={styles.loginText}>Zaten bir hesabın var mı?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginButton}>Giriş yap</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 150,
  },
  logoText: {
    fontSize: 44,
    fontWeight: 'bold',
    color: '#a5d64b',
  },
  infoTextContainer: {
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: 75
  },
  infoText: {
    fontSize: 22,
    color: '#FFFFFF'

  },
  inputContainer: {
    width: 240
  },
  input: {
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    paddingLeft: 10,
    marginBottom: 10,
  },
  registerButton: {
    width: 180,
    height: 40,
    backgroundColor: '#2979FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  errorBorder: {
    borderColor: 'red',
    borderWidth: 1,
  },
  disabledButton: {
    backgroundColor: '#CCCCCC',
  },
  loginTextContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  loginText: {
    marginRight: 5,
    fontSize: 16,
    color: '#FFFFFF'
  },
  loginButton: {
    textDecorationLine: 'underline',
    color: '#FFFFFF',
    fontSize: 16
  },
});

