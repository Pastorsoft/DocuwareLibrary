import { HelloProps } from "./types";

export function hello({hola}: HelloProps) {
    console.log(`Hello, ${hola}!`);
} 