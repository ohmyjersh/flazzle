export const Flag = ({flag, experimental, stable}) =>  (flag ? experimental() : !!stable && stable());