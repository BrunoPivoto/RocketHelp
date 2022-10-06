import { useState } from 'react';
import auth from "@react-native-firebase/auth";
import { Alert } from "react-native";
import { VStack, Heading, Icon, useTheme } from 'native-base';
import React from 'react';
import Logo from '../assets/logo_primary.svg'
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { Envelope, Key } from 'phosphor-react-native';

export function SignIn() {

    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const nomeEmail = email.split('@');
    const { colors } = useTheme();

    function handleSignIn() {
        if (!email || !password) {
            return (Alert.alert('Entrar', 'Informe Email e Senha'))
        }

        setIsLoading(true);

        auth()
            .signInWithEmailAndPassword(email, password)
            .catch((error) => {
                console.log(error);
                setIsLoading(false);

                if (error.code === 'auth/invalid-email' || error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found'){
                    return Alert.alert('Entrar','Email/senha inválida!');
                }

                return Alert.alert('Entrar', 'Não foi possível acessar');
            })

    }
    return (
        
        <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>

            <Logo />

            <Heading color="gray.100" fontSize="2xl" mb={6} mt={20}>
                Acesse sua conta {nomeEmail[0]}
            </Heading>

            <Input
                placeholder="Email"
                mb={4}
                InputLeftElement={<Icon as={<Envelope color={colors.gray[300]} />} ml={4} />}
                onChangeText={setEmail}
            />
            <Input placeholder="Senha"
                InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml={4} />}
                secureTextEntry
                onChangeText={setPassword}
                mb={8}
            />

            <Button
                title='Entrar'
                w="full"
                onPress={handleSignIn}
                isLoading={isLoading}
            />

        </VStack>
    )
}