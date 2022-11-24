import { ActivityIndicator } from "react-native"
import Box from "../Box/Box"

const Loading = () => {
    return (
        <Box flex={1} alignItems="center" justifyContent="center">
            <ActivityIndicator size="large" />
        </Box>
    )
}

export default Loading