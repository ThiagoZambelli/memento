export default function usePegaToken () {
    const token = sessionStorage.getItem("token");

    return token;
}