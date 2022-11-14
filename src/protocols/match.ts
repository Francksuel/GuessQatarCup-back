export type MatchEntity = {
    id: number,
    team1Id: number,
    team2Id: number,      
    goalsTeam1?: number,
    goalsTeam2?: number,
    matchDate:Date
}

export type MatchResult = {
    goalsTeam1: number,
    goalsTeam2: number
}
