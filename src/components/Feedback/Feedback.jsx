import css from './Feedback.module.css'

export default function Feedback({
    feedback: {
        good,
        neutral,
        bad,
    },
    total,
    positive,
}) {
    return(
        <div className={css.feedbackContainer}>
            <p className={css.good}>Good: {good}</p>
            <p className={css.neutral}>Neutral: {neutral}</p>
            <p className={css.bad}>Bad: {bad}</p>
            <p className={css.total}>Total: {total}</p>
            <p className={css.positive}>Positive: {positive}%</p>
        </div>
    )
}