import * as SC from './styled';
import Logo from '../../../components/Logo';
import Button from '../../../components/Button';
import RollingText from '../../../components/RollingText';

export default () => {
  return (
    <SC.Container>
      <div>
        <Logo height="200px" colored={false}/>
        <p>Your Premier Partner</p>
        <b><RollingText block texts={['B2B', 'B2C', 'B2B2C', 'Business IT Solutions']} /></b>
        <Button width='200px' lightTheme>Get in touch</Button>
      </div>

      <svg id="vector1" width="857" height="798" viewBox="0 0 857 798" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_802_1130)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M471.081 16.7071C591.247 14.5396 737.981 -33.1244 815.922 50.8954C893.535 134.561 828.15 261.562 796.562 367.574C775.06 439.735 714.909 487.177 667.748 548.18C602.066 633.142 584.524 786.687 471.081 788.589C358.086 790.483 347.055 628.244 267.1 554.897C187.051 481.464 38.356 468.652 12.1363 367.574C-16.3854 257.623 44.9341 135.412 139.526 63.096C228.843 -5.18769 354.886 18.803 471.081 16.7071Z" fill="#87067A"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M471.081 16.7071C591.247 14.5396 737.981 -33.1244 815.922 50.8954C893.535 134.561 828.15 261.562 796.562 367.574C775.06 439.735 714.909 487.177 667.748 548.18C602.066 633.142 584.524 786.687 471.081 788.589C358.086 790.483 347.055 628.244 267.1 554.897C187.051 481.464 38.356 468.652 12.1363 367.574C-16.3854 257.623 44.9341 135.412 139.526 63.096C228.843 -5.18769 354.886 18.803 471.081 16.7071Z" stroke="black"/>
        </g>
        <defs>
          <filter id="filter0_d_802_1130" x="0.599243" y="0.792961" width="856.351" height="796.312" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_802_1130"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_802_1130" result="shape"/>
          </filter>
        </defs>
      </svg>

      <svg id="vector2" width="1075" height="858" viewBox="0 0 1075 858" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M550.54 0.516277C647.818 4.4999 728.911 51.3449 808.475 102.878C913.32 170.785 1086.67 222.428 1074.16 339.658C1061.42 458.986 851.968 446.876 762.429 534.168C666.413 627.774 685.173 814.69 550.54 850.135C410.658 886.962 270.243 785.876 168.241 690.601C67.1784 596.204 -17.4991 470.53 4.02054 339.658C24.018 218.043 157.518 149.646 268.517 80.766C353.281 28.1658 448.327 -3.66943 550.54 0.516277Z" fill="#FA6EE9"/>
      </svg>

      <svg id="vector3" width="1187" height="893" viewBox="0 0 1187 893" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M559.105 71.9399C704.401 33.6647 865.163 -42.1932 993.09 31.7993C1131.61 111.919 1212.18 283.333 1179.42 430.728C1148.91 568.008 964.565 606.428 845.841 694.303C749.475 765.63 681.978 876.555 559.105 889.864C425.576 904.328 295.666 847.438 195.766 764.72C90.0578 677.193 -23.7262 558.888 4.59512 430.728C31.8774 307.27 206.386 282.031 318.456 209.518C398.76 157.559 464.703 96.8083 559.105 71.9399Z" fill="#E612A2"/>
      </svg>

      <svg id="vector4" width="1146" height="872" viewBox="0 0 1146 872" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M507.199 121.995C659.615 126.969 810.709 -9.67014 942.31 61.1449C1084.84 137.842 1173.89 312.969 1137.01 460.896C1102.24 600.318 915.544 641.073 780.128 711.644C694.028 756.515 604.255 771.24 507.199 789.117C366.824 814.972 202.572 926.636 97.3956 837.395C-7.09016 748.74 129.653 591.287 120.37 460.896C109.649 310.308 -78.8383 135.843 40.0354 31.6974C159.754 -73.1882 341.877 116.599 507.199 121.995Z" fill="#E13CBF"/>
      </svg>


    </SC.Container>
  );
};
