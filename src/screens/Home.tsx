import React from 'react';
import { VStack, IconButton, HStack, useTheme, Text } from 'native-base';
import Logo from '../assets/logo_secondary.svg';
import { SignOut } from 'phosphor-react-native';

export function Home() {
  const { colors } = useTheme();
  return (
    <VStack flex={1} pb={6} bg="gray.700">
      <HStack
        w="full"
        justifyContent="space-between"
        alignItems="center"
        bg="gray.700"
        pt={12}
        pb={5}
        px={6}
      >
        <Logo />
        <IconButton icon={<SignOut size={26} color={colors.gray[300]} />} />

      </HStack>

      <VStack flex={1} px={6}>
        <HStack w="full" mt={8} mb={4} justifyContent="space-between" alignItems="center">
          <Text color="gray.200">
            hello my friende
          </Text>
        </HStack>
      </VStack>
    </VStack>
  );
}