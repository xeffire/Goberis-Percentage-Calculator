import React from "react";
import { Text } from "react-native";

export default function MyText(props) {
    return (
        <Text style={{fontSize: 25, alignSelf: 'center', color: '#212121', ...props.style }}>{props.children}</Text>
    );
}