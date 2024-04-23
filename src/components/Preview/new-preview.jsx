import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import NavBar from '../NavBar';
import './new-preview.css'
import Logo from '../../assets/images/favlist-logo-small.png'
import { useState } from 'react';



const NewPreview = () => {


    const answers = [
        'Belgium',
        'Croatia',
        'Ukraine',
        'Czechia',
        'United Kingdom'
    ]



    return (
        <>
            <NavBar />
            <div className="main-container w-full h-[100vh] pt-[100px]">
                <div className="w-[353px] px-[20px]">
                    <span><KeyboardBackspaceIcon style={{'color': '#FFFFFF'}}/></span>
                    <span className="ml-[16px] text-[#FFF] font-bold text-[20px]">Your list is ready</span>
                </div>
                <div className="answers-container w-[324.29px] h-[576px] mx-[50px] rounded-[14.7px] mt-[20px] pt-[18.37px]">
                    <div className="question-image w-[287.54px] h-[265.49px] rounded-[3.67px] mx-[18.37px] ">

                    </div>
                    <div className="pt-[18px] px-[15px] [&>*:nth-child(2)]:mt-[28px]">
                        <span className="text-[18.37px] font-bold text-[#FFF] w-[231.63px]">My favorite place to travel are:</span>

                        {
                            answers.map( (answer , index) => (
                                <div>
                                    <span className="font-bold text-[#FFFFFF] text-[12px]">{index+1}-  </span>
                                    <span className="font-bold text-[#FFFFFF] text-[12px]">{answer}</span>
                                </div>
                            ))
                        }

                        <div className=' flex mt-[60px] gap-[23%]'>
                            <img src={Logo} className='w-[77px] h-[14px]'/>
                            <span className=' font-semibold text-[14px] text-[#FFFFFF]'>I Voted on FavList.net!</span>
                        </div>
                    </div>

                </div>

                <div className='share-btn-container'>
                    <button className='go-home'>GO HOME</button>
                    <button className='share'>SHARE</button>
                </div>
            </div>
        </>
    )
}

export default NewPreview