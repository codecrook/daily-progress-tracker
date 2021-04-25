import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.div`
    background-color: #ffffff;
    border: solid 3px grey;
    margin: 4px;
    width: 300px;
    height: 50px;
    border-radius: 10px;
    display: flex;
    justify-content: left;
    font-size: 40px;
    color: #ff6961;
`;

const WeekdayTitle = styled.div`
    display: flex;
    justify-content: center;
    min-width: 50px;
    border-right: solid 3px lightgrey;
`;

const WeekendTitle = styled(WeekdayTitle)`
    background-color: lightgrey;
    border-radius: 7px 0 0 7px;
`;

const ProgressSection = styled.div`
    width: 250px;
`;

const ProgressBar = styled.div`
    background-color: ${({ progress }) => {
        const numericProgress = +progress.slice(0, -1);

        if (numericProgress >= 80) return 'Lime';
        else if (numericProgress >= 60) return 'PaleGoldenrod';
        else if (numericProgress >= 40) return 'LightSalmon';
        else return 'Crimson';
    }};
    height: 50px;
    width: ${({ progress }) => progress || '0%'}
`;

const TodayProgressBar = styled(ProgressBar)`
    background-color: Teal;
`;

export const Section = ({ text, progress, day }) => {

    const isWeekend = text === 'S';
    const isToday = new Date().getDay() === day;

    return (
        <StyledSection>
            {
                isWeekend ?
                    <WeekendTitle>{text}</WeekendTitle> :
                    <WeekdayTitle>{text}</WeekdayTitle>
            }

            <ProgressSection>
                {
                    isToday ?
                        <TodayProgressBar progress={progress} /> :
                        <ProgressBar progress={progress} />
                }
            </ProgressSection>
        </StyledSection>
    )
}
