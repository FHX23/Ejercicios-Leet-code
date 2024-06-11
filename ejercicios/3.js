function longestSubstring(s) {
    let contador = 1;
    let max = 1;
    let indiceinicial = 0;
    let indicecomparar = 1;
    const longitud = s.length;
    
    for (let i = indiceinicial; i <= indicecomparar; i++) {
        if (longitud === 0) {
            return 0;
        }
        if (s[i] !== s[indicecomparar]) {
            contador++;
        } else {
            i = indiceinicial;
            indiceinicial++;
            contador = 1;
            indicecomparar = indiceinicial + 1;
        }
        if (indicecomparar === longitud) {
            break;
        }
        if (i + 1 === indicecomparar) {
            i = indiceinicial - 1;
            indicecomparar++;
            if (contador > max) {
                max = contador;
            }
            contador = 1;
        }
    }
    return max;
}

// Ejemplo de uso
const cadena = "abccccdd";
console.log(longestSubstring(cadena)); // Output: 4
