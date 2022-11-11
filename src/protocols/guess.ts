export type GuessEntity = {
	id: number;
	userId: number;
	matchId: number;
	goalsTeam1: number;
	goalsTeam2: number;
	score: number;
};
export type userRanking = {
	name: string;
	score: number;
};

export type Guess = Omit<GuessEntity, "id" | "userId" | "matchId" | "score">;
