import styled from 'styled-components';

export const Wave1 = (props) => (
  <WaveContainer bottom='-8px'>
    <svg
      id='wave1'
      style={{
        transform: 'rotate(0deg)',
        transition: '1s',
      }}
      viewBox='0 0 1440 450'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <defs>
        <linearGradient id='a' x1={0} x2={0} y1={1} y2={0}>
          <stop stopColor='rgba(75, 143, 153, 1)' offset='0%' />
          <stop stopColor='rgba(85, 170, 154, 1)' offset='100%' />
        </linearGradient>
      </defs>
      <path
        id='wavePath'
        style={{
          transform: 'translate(0,0)',
          opacity: 0.3,
        }}
        fill='url(#a)'
        d='M0 405h30c30 0 90 0 150-15s120-45 180-90 120-105 180-97.5S660 285 720 270s120-120 180-142.5 120 37.5 180 67.5 120 30 180 30 120 0 180-37.5S1560 75 1620 105s120 165 180 195 120-45 180-97.5 120-82.5 180-105S2280 60 2340 60s120 15 180 67.5 120 142.5 180 180 120 22.5 180 15 120-7.5 180-45S3180 165 3240 180s120 120 180 120 120-105 180-157.5S3720 90 3780 120s120 90 180 97.5 120-37.5 180-37.5 120 45 150 67.5l30 22.5v180H0Z'
      />
      <path
        id='wavePath2'
        style={{
          transform: 'translate(0,0)',
          opacity: 1,
        }}
        fillOpacity={0}
        d='M0 405h30c30 0 90 0 150-15s120-45 180-90 120-105 180-97.5S660 285 720 270s120-120 180-142.5 120 37.5 180 67.5 120 30 180 30 120 0 180-37.5S1560 75 1620 105s120 165 180 195 120-45 180-97.5 120-82.5 180-105S2280 60 2340 60s120 15 180 67.5 120 142.5 180 180 120 22.5 180 15 120-7.5 180-45S3180 165 3240 180s120 120 180 120 120-105 180-157.5S3720 90 3780 120s120 90 180 97.5 120-37.5 180-37.5 120 45 150 67.5l30 22.5v180H0Z'
      />

      <use
        className='sd1'
        stroke='url(#a)'
        strokeDasharray='100 200000'
        xlinkHref='#wavePath2'
        style={{
          opacity: 1,
        }}
      >
        <animate
          attributeName='stroke-dashoffset'
          from={0}
          to={-20000}
          dur='7s'
          repeatCount='indefinite'
        />
      </use>
    </svg>
  </WaveContainer>
);

const WaveContainer = styled.div`
  position: absolute;
  z-index: 1;
  bottom: ${(props) => props.bottom || '0px'};
  left: 0;
  width: 100%;

  //Tablet
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const Wave2 = (props) => (
  <WaveContainer bottom='-4px'>
    <svg
      style={{
        transform: 'rotate(0deg)',
        transition: '.3s',
      }}
      viewBox='0 0 1440 450'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <defs>
        <linearGradient id='a' x1={0} x2={0} y1={1} y2={0}>
          <stop stopColor='rgba(75, 143, 153, 1)' offset='0%' />
          <stop stopColor='rgba(85, 170, 154, 1)' offset='100%' />
        </linearGradient>
      </defs>
      <path
        style={{
          transform: 'translate(0,0)',
          opacity: 0.3,
        }}
        fill='url(#a)'
        d='m0 315 40-45c40-45 120-135 200-180s160-45 240 15 160 180 240 202.5 160-52.5 240-75 160 7.5 240 45 160 82.5 240 67.5 160-90 240-142.5 160-82.5 240-45S2080 300 2160 315s160-60 240-60 160 75 240 52.5 160-142.5 240-210 160-82.5 240-90 160-7.5 240 0 160 22.5 240 45 160 52.5 240 90S4000 225 4080 270s160 90 240 60 160-135 240-135 160 105 240 150 160 30 240 7.5 160-52.5 240-75 160-37.5 240-30 160 37.5 200 52.5l40 15v135H0Z'
      />
    </svg>
  </WaveContainer>
);
