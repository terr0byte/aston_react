import { useTheme } from "../../shared/lib/theme/useTheme"

export default function Footer() {
    const { theme } = useTheme();
    return <div data-component='footer' data-theme={theme}></div>
}