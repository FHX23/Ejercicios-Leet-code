#include <string.h>
int lengthOfLongestSubstring(char* s) {
    
    int i, indicecomparar=1,contador=1,max=1;
    int indiceinicial=0;
    size_t longitud = strlen(s);
    for(i=indiceinicial ; i<= indicecomparar; i++){
        if(longitud ==0 ){
            return 0;
        }
        if(s[i]!= s[indicecomparar]){

            contador = contador + 1;
        }else{
            
            i=indiceinicial;
            indiceinicial++;
            contador=1;
            indicecomparar=indiceinicial+1;
            
        }
        if(indicecomparar == longitud){
            break;
        }
        if(i+1 == indicecomparar){
            i=indiceinicial-1;
            indicecomparar++;
            if(contador > max){
                max=contador;
            }
            contador=1;
        }
        
    }

    return max;

    
}