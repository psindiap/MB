import React from 'react'
// import bgImg from '../assets/img1.jpg';
import bgImg from '../assets/MB2.jpg';
import mbImg from '../assets/mb1.png';

import { useForm } from 'react-hook-form';

import {
  Box,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom';


export default function Form() {

  const [start, setStart] = React.useState(0);
  const [end, setEnd] = React.useState(100);


  const [start2, setStart2] = React.useState(0);
  const [end2, setEnd2] = React.useState(100);

  const [start3, setStart3] = React.useState(0);
  const [end3, setEnd3] = React.useState(100);

  const [start4, setStart4] = React.useState(0);
  const [end4, setEnd4] = React.useState(100);


  return (
    <div className="flex w-full  justify-center items-center">

      <div className="flex flex-col-reverse md:flex-row items-center justify-center register md:h-screen70">
        <div className="flex flex-col w-1/2 p-12 px-20">
          <h2 className='font-semibold text-xl mt-8'>Generate design:</h2>
          <span >Set desired Parameters-</span>

          <div className="w-full mx-auto mt-12">

            <div>
              Deflection: <span className='block'><span className=' w-16 text-black'>{-60+start*(-60)/100}</span> to <span className=' w-16 text-black'>{-60+end*(-60)/100} </span> mm </span>
            </div>

            <div>
              <RangeSlider onChange={(val) => {
                setStart(val[0]);
                setEnd(val[1]);
              }}
                aria-label={['min', 'max']} defaultValue={[start, end]} >
                <RangeSliderTrack bg='gray.400'>
                  <RangeSliderFilledTrack bg='blue.500' />
                </RangeSliderTrack>
                <RangeSliderThumb boxSize={8} index={0}>
                  <div className="border rounded-full border-black">
                    <img src={mbImg} alt='logo' />
                  </div>
                </RangeSliderThumb>
                <RangeSliderThumb boxSize={8} index={1}>
                  <div className="border rounded-full border-black">
                    <img src={mbImg} alt='logo' />
                  </div>
                </RangeSliderThumb>
              </RangeSlider>
            </div>
          </div>

          <div className="w-full  mx-auto mt-4">

            <div>
              Width: {start2} - {end2} mm
            </div>

            <div>
              <RangeSlider onChange={(val) => {
                setStart2(val[0]);
                setEnd2(val[1]);
              }}
                aria-label={['min', 'max']} defaultValue={[start2, end2]} >
                <RangeSliderTrack bg='gray.400'>
                  <RangeSliderFilledTrack bg='blue.500' />
                </RangeSliderTrack>
                <RangeSliderThumb boxSize={8} index={0}>
                  <div className="border rounded-full border-black">
                    <img src={mbImg} alt='logo' />
                  </div>
                </RangeSliderThumb>
                <RangeSliderThumb boxSize={8} index={1}>
                  <div className="border rounded-full border-black">
                    <img src={mbImg} alt='logo' />
                  </div>
                </RangeSliderThumb>
              </RangeSlider>
            </div>
          </div>

          <div className="w-full  mx-auto mt-4">

            <div>
              Length: {900+start3*(11-9)} - {900+end3*(11-9)} mm
            </div>

            <div>
              <RangeSlider onChange={(val) => {
                setStart3(val[0]);
                setEnd3(val[1]);
              }}
                aria-label={['min', 'max']} defaultValue={[start3, end3]} >
                <RangeSliderTrack bg='gray.400'>
                  <RangeSliderFilledTrack bg='blue.500' />
                </RangeSliderTrack>
                <RangeSliderThumb boxSize={8} index={0}>
                  <div className="border rounded-full border-black">
                    <img src={mbImg} alt='logo' />
                  </div>
                </RangeSliderThumb>
                <RangeSliderThumb boxSize={8} index={1}>
                  <div className="border rounded-full border-black">
                    <img src={mbImg} alt='logo' />
                  </div>
                </RangeSliderThumb>
              </RangeSlider>
            </div>
          </div>


          <div className="w-full  mx-auto mt-4">

            <div>
              Depth: {start4} - {end4} mm
            </div>

            <div>
              <RangeSlider onChange={(val) => {
                setStart4(val[0]);
                setEnd4(val[1]);
              }}
                aria-label={['min', 'max']} defaultValue={[start4, end4]} >
                <RangeSliderTrack bg='gray.400'>
                  <RangeSliderFilledTrack bg='blue.500' />
                </RangeSliderTrack>
                <RangeSliderThumb boxSize={8} index={0}>
                  <div className="border rounded-full border-black">
                    <img src={mbImg} alt='logo' />
                  </div>
                </RangeSliderThumb>
                <RangeSliderThumb boxSize={8} index={1}>
                  <div className="border rounded-full border-black">
                    <img src={mbImg} alt='logo' />
                  </div>
                </RangeSliderThumb>
              </RangeSlider>
            </div>
          </div>


          <button class="my-8 mx-auto w-fit block bg-blue-500 hover:bg-blue-400 text-white font-bold mt-8 py-2 px-8 border-b-4 border-blue-700 hover:border-blue-500 rounded ">
            <NavLink to='/form2'>Generate</NavLink>
          </button>

        </div>
        <div className="flex h-screen40 mx-auto md:w-inital md:h-full">
          <img className="img" src={bgImg} alt="" />
        </div>
      </div>
    </div>
  )
}
