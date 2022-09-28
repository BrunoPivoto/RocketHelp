import { useState } from 'react';
import { VStack, Heading, Icon, useTheme } from 'native-base';
import React from 'react';
import Logo from '../assets/logo_primary.svg'
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { Envelope, Key } from 'phosphor-react-native';

export function SignIn() {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const { colors } = useTheme();
    return (
        <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>

            <Logo />

            <Heading color="gray.100" fontSize="2xl" mb={6} mt={20}>
                Acesse sua conta {name}
            </Heading>

            <Input
                placeholder="Email"
                mb={4}
                InputLeftElement={<Icon as={<Envelope color={colors.gray[300]} />} ml={4} />}
                onChangeText={setName}
            />
            <Input placeholder="Senha"
                InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml={4} />}
                secureTextEntry
                mb={8}
            />

            <Button title='Entrar' w="full" />

        </VStack>
    )
}