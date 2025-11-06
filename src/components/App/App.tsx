import { useState } from 'react';
import Notification from '../Notification/Notification';
import css from './App.module.css';
import type { Votes, VoteType } from '../../types/votes';
import CafeInfo from '../CafeInfo/CafeInfo';
import VoteOptions from '../VoteOptions/VoteOptions';
import VoteStats from '../VoteStats/VoteStats';



const initialVotes: Votes = { good: 0, neutral: 0, bad: 0 };

const App = () => {
    const [votes, setVotes] = useState<Votes>({ ...initialVotes });
    const { good, neutral, bad } = votes;

    const totalVotes = good + neutral + bad;
    const positiveRate = totalVotes ? Math.round((good / totalVotes) * 100) : 0;
    const isVotes = totalVotes > 0;

    const handleVote = (type: VoteType) => {
        setVotes(prev => ({ ...prev, [type]: prev[type] + 1 }));
    }

    const resetVotes = () => {
        setVotes(initialVotes)
    }

    return (
        <div className={css.app}>
            <CafeInfo />
            <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={isVotes} />
            {isVotes ? <VoteStats votes={votes} totalVotes={totalVotes} positiveRate={positiveRate} /> : <Notification />}
        </div>);
}


export default App;