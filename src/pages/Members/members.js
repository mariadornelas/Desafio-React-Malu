import React from 'react';
import Members2 from '../../components/MemberCard/MemberCard2';
import Members1 from '../../components/MemberCard/MemberCard';
import Members3 from '../../components/MemberCard/MemberCard3';
import Members4 from '../../components/MemberCard/MemberCard4';
import Members5 from '../../components/MemberCard/MemberCard5';
import Members6 from '../../components/MemberCard/MemberCard6';
import Members7 from '../../components/MemberCard/MemberCard7';
import Members8 from '../../components/MemberCard/MemberCard8';
import Members9 from '../../components/MemberCard/MemberCard9';
import Members10 from '../../components/MemberCard/MemberCard10';
import Members11 from '../../components/MemberCard/MemberCard11';
import Members12 from '../../components/MemberCard/MemberCard12';
import './members.css';


const Members = () => {
    return(
        <>
            <div className='titulo'>
                <h1>Membros</h1>
            </div>
            <div className='membros'>
                <Members1></Members1>
                <Members2></Members2>
                <Members3></Members3>
                <Members4></Members4>
            </div>
            <div className='membros'>
                <Members5></Members5>
                <Members6></Members6>
                <Members7></Members7>
                <Members8></Members8>
            </div>
            <div className='membros'>
                <Members9></Members9>
                <Members11></Members11>
                <Members10></Members10>
                <Members12></Members12>
            </div>
        </>
    )
}

export default Members;