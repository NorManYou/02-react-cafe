
import type { Votes } from '../../types/voites';
import css from './VoteStats.module.css'

interface VoteStatsProps {
    votes: Votes;
    totalVotes: number;
    positiveRate: number;
}

const VoteStats = ({ votes, totalVotes, positiveRate }: VoteStatsProps) => {
    const { good, neutral, bad } = votes;
    return (
        <div className={css.container}>
            <p className={css.stat}>Good: <strong>{good}</strong></p>
            <p className={css.stat}>Neutral: <strong>{neutral}</strong></p>
            <p className={css.stat}>Bad: <strong>{bad}</strong></p>
            <p className={css.stat}>Total: <strong>{totalVotes}</strong></p>
            <p className={css.stat}>Positive: <strong>{positiveRate}%</strong></p>
        </div>
    )
}

export default VoteStats;