import { StyleSheet, View } from "react-native"

const LineSeparator = (props: { color?: "string", width?: number }) => {
    return (
        <View
            style={{
                borderBottomColor: props.color || "#D4A056",
                borderBottomWidth: props.width || 1,
            }}
        />
    )

}

export default LineSeparator