export type GuessEntity = {
    id: number,
    userId: number,
    matchId: number,    
    goalsTeam1: number,
    goalsTeam2: number,
    isRight: boolean
}
export type Guess = Omit<GuessEntity, "id" | "userId" | "matchId" | "isRight">