import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';


const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    // Giriş işlemleri burada gerçekleştirilebilir
    console.log('Email:', email);
    console.log('Password:', password);
    navigation.navigate('HomePage')
    // Örneğin, burada bir API çağrısı yapabilir ve kullanıcıyı doğrulayabilirsiniz
  };

  const handleSignUp = () => {
    // Kayıt ol sayfasına yönlendirme işlemleri burada yapılabilir
    console.log('Sign Up');
    navigation.navigate('Register');
  };

  return (
    <LinearGradient colors={['#008000', '#ffd700']} style={styles.container}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>yedir</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="E-posta"
            onChangeText={(text) => setEmail(text.toLowerCase())}
            value={email}
          />
          <TextInput
            style={styles.input}
            placeholder="Şifre"
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Giriş Yap</Text>
        </TouchableOpacity>
        <View style={styles.registerTextContainer}>
          <Text style={styles.registerText}>Hesabınız yok mu? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerButton}>Kayıt Ol</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 200,
  },
  logoText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#a5d64b',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    width: 300,
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    paddingLeft: 10,
    marginBottom: 10,
  },
  loginButton: {
    width: 300,
    height: 40,
    backgroundColor: '#9fd84a',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  registerTextContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  registerText: {
    marginRight: 5,
    fontSize: 16,
    color: '#FFFFFF'
  },
  registerButton: {
    textDecorationLine: 'underline',
    color: '#FFFFFF',
    fontSize: 16
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
