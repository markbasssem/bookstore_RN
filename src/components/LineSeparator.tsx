import { StyleSheet, View } from "react-native"

const LineSeparator = (props: { color?: "string", width?: number, vertical?: boolean }) => {
    return (
        <View
            style={{
                borderColor: props.color || "#D4A056",
                borderBottomWidth: !props.vertical ? props.width || 1 : 0,
                borderRightWidth: props.vertical ? props.width || 1 : 0,
            }}
        />
    )

}

export default LineSeparator