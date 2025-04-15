import styles from "./TeamGrid.module.css"
import TeamCard from "../TeamCard/TeamCard"

function TeamGrid({ className, teamMembers }) {
    const classes = [styles.grid, className].filter(Boolean).join(' ');

    return (
        <div className={classes}>
            {teamMembers.map(member => (
                <TeamCard
                    key={member.name}
                    name={member.name}
                    role={member.role}
                    photo={member.photo}
                />
            ))}
        </div>
    );
}

export default TeamGrid;