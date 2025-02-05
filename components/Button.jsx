import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Button = ({ label, backgroundColor, onPress }) => {
    const handlePress = async () => {
        const response = await fetch("/api/button-click", { method: "POST" });
        const data = await response.json();
        console.log("Mock API Response:", data);
        onPress();
    };

    return (
        <TouchableOpacity
            style={{ backgroundColor, padding: 10, borderRadius: 5 }}
            onPress={handlePress}
        >
            <Text style={{ color: "white" }}>{label}</Text>
        </TouchableOpacity>
    );
};

export default Button;
