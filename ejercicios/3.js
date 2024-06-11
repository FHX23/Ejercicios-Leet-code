function longestSubstring(s) {
    let contador = 1;
    let max = 1;

    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === s[i + 1]) {
            contador++;
        } else {
            contador = 1;
        }
        if (contador > max) {
            max = contador;
        }
    }
    return max;
}

// Ejemplo de uso
const cadena = "abccccdd";
console.log(longestSubstring(cadena)); // Output: 4
