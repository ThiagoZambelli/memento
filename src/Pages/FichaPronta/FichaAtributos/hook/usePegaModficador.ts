export default function usePegaModificador() {
    return (numero: number) => {
        if (numero > 9) {
            return Math.floor((numero - 10) / 2)
        } else {
            return -1
        }
    }
}