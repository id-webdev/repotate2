import React from 'react';

import './team.styles.scss';

import teamImgMobile from '/src/assets/team-mobile.webp';
import teamImg from '/src/assets/team.webp';

export default function Team() {
  return (
    <section className="team">
      <div className="team__container">
        <svg
          className="team__icon"
          width="264"
          height="138"
          viewBox="0 0 264 138"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30.8952 99.0546C25.1877 97.9131 4.34903 82.8149 14.7005 77.9115C34.8697 68.3577 55.6292 97.7129 40.567 112.775C25.9281 127.414 25.8914 91.0942 27.0715 85.7839C27.2036 85.1892 36.4157 109.356 29.9955 114.35C22.2833 120.348 11.5936 71.7971 25.0471 79.7109C40.0489 88.5355 22.7979 125.781 22.7979 90.9572C22.7979 53.7927 38.2216 90.0575 19.1991 90.0575C9.54441 90.0575 25.5032 65.3406 30.8952 86.9086"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M30.8945 86.908C72.9388 70.1267 197.225 -4.17772 246.374 48.4456C263.721 67.0202 252.549 87.7802 249.522 107.151"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M257.62 119.3C269.991 120.846 252.63 139.911 238.277 134.595C214.92 125.944 242.146 107.779 241.426 119.3C240.258 137.98 218.782 104.905 231.079 104.905C243.308 104.905 245.185 140.999 234.228 133.695C217.918 122.822 239.831 91.9942 246.374 108.054C255.449 130.327 247.544 146.623 242.325 117.051C239.606 101.638 257.114 86.7923 257.62 99.9562C258.236 115.951 260.182 128.678 241.426 119.3"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M22.7979 99.0552C22.7979 66.7921 63.8048 101.331 58.3361 106.253C55.5673 108.745 44.6983 107.697 41.4667 106.703C29.9028 103.145 39.9121 89.3179 39.2174 83.7603C39.1335 83.0889 25.7493 83.4263 30.8952 97.2558C34.3025 106.413 26.8465 93.0821 26.8465 90.9579"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M30.8947 95.006C30.8947 62.6404 96.1139 19.1872 124.464 14.0327C162.512 7.11482 209.184 18.2546 230.179 54.5194C236.395 65.2563 241.293 78.6035 247.723 88.7081C261.32 110.075 253.571 88.0666 253.571 68.9146C253.571 41.829 258.798 24.6743 230.629 14.0327C210.661 6.48943 176.125 0.402886 155.504 7.73477C116.702 21.5308 93.4794 34.4614 79.4787 72.9633C72.2781 92.7649 46.4962 119.749 28.6455 91.857C25.2953 86.6224 41.0257 97.4242 38.7671 110.976C35.1782 132.509 -6.7577 95.5008 12.6757 91.1823C25.1251 88.4158 45.9267 130.994 24.5968 130.994C11.3496 130.994 0.936569 93.7487 12.4508 90.9573C26.0287 87.6657 34.5516 100.944 40.5665 110.301C40.7675 110.614 43.8759 89.3153 51.138 82.86C72.8589 63.5526 78.9775 26.4636 106.02 11.7834C160.848 -17.9806 216.977 26.3205 234.902 76.1122C239.365 88.5081 241.425 103.465 241.425 116.599C241.425 120.423 241.425 108.951 241.425 105.128C241.425 98.2027 242.677 102.884 244.574 107.152C252.25 124.422 229.55 107.602 239.626 107.602C248.086 107.602 248.784 128.866 235.352 122.897C224.733 118.177 229.862 94.46 229.279 86.009C227.613 61.8501 193.007 46.8 172.598 46.422C141.234 45.8412 115.371 47.3845 90.2751 68.4648C68.9961 86.3391 62.9275 111.286 32.4692 117.049C28.7027 117.761 4.21845 123.301 2.77898 116.824C1.24477 109.92 4.38383 101.929 12.4508 104.003C38.0096 110.575 37.4951 147.835 16.4995 130.544C2.90938 119.352 4.2076 77.8209 22.7974 106.252C37.0151 127.997 5.39189 107.984 2.55405 90.9573"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
        <picture>
          <source srcSet={teamImg} media="(min-width: 768px)" />
          <img
            className="team__img"
            src={teamImgMobile}
            alt="Board of team members"
          />
        </picture>
        <a href="#dio" className="team__link team__link--first"></a>
        <a href="#ars" className="team__link team__link--second"></a>
        <a href="#id" className="team__link team__link--third"></a>
        <a href="#mary" className="team__link team__link--fourth"></a>
        <a href="#alice" className="team__link team__link--fifth"></a>
      </div>
    </section>
  );
}
