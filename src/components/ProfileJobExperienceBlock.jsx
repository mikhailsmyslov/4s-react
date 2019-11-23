import React from 'react'
import JobExperienceCard from './ProfileJobExperienceCard'

export default (props) => {
    const { jobs } = props;
    return (
        <>
        <h4>Experience</h4>
        <hr />
        {
            jobs.map(job => <JobExperienceCard {...job} />)
        }

        </>
    )
}