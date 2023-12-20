export default function useTestaUrl() {
    const regex = /^http.*\.(png|jpg)$/i;
    return (url: string) => {
        return regex.test(url);
    }
}