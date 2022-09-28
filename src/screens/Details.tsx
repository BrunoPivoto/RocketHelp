import React from 'react';
import { VStack } from 'native-base';
import { Header } from '../components/Header';
import { useRoute } from '@react-navigation/native';
import { Text } from 'react-native';

type RouteParams = {
    orderId: string;
}

export function Details() {
  
  const route = useRoute();
  const { orderId } = route.params as RouteParams;
    return (
    <VStack flex={1} bg="gray.700">
        <Header title='Solicitação' />
        <Text>{orderId}</Text>
    </VStack>
  );
}