export type UserEntity = {
    id:number,
    name:string,
    password:string   
}
export type User = {
    name:string,
    password:string   
}
export type JWTPayload = {
    userId: number;
  };